/**
 * Bracket-like characters the browser mirrors when it lays text out
 * right-to-left: "(" is painted as ")" and so on. Swapping them here cancels
 * that out, so the reader sees the original punctuation.
 */
const MIRRORED: Record<string, string> = {
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
};

/**
 * The three characters that give a contact away: an address matcher needs the
 * "@" and the dot, a dial string starts with a plus. They are swapped for
 * stand-ins that mean nothing on their own, so the served HTML holds no token
 * shaped like an address or a number. The browser paints the real characters
 * from CSS `content` — see the `.m-a` / `.m-b` / `.m-c` rules in `globals.css`.
 *
 * A contact value must therefore never contain "~", "^" or "*" itself.
 */
const STAND_IN: Record<string, string> = { "@": "~", ".": "^", "+": "*" };

/** Stand-in back to the real character. */
const PLAIN: Record<string, string> = Object.fromEntries(
  Object.entries(STAND_IN).map(([plain, standIn]) => [standIn, plain]),
);

/** Which CSS rule draws each stand-in. */
const STAND_IN_CLASS: Record<string, string> = {
  "~": "m-a",
  "^": "m-b",
  "*": "m-c",
};

/** Noise wedged between the real characters; hidden with `display: none`. */
const NOISE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** One noise character after every `STRIDE` real ones. */
const STRIDE = 2;

/** Position rule for the noise — the only thing needed to strip it back out. */
const isNoise = (index: number) => index % (STRIDE + 1) === STRIDE;

/** FNV-1a, so the same contact always produces byte-identical markup. */
function seedOf(value: string): number {
  let hash = 2166136261;
  for (const char of value) {
    hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  }
  return hash >>> 0;
}

function noiseAt(seed: number, index: number): string {
  const mixed = Math.imul(seed ^ (index + 1), 2654435761) >>> 0;
  return NOISE[mixed % NOISE.length];
}

/**
 * Turns a phone number or an e-mail address into something not worth
 * harvesting, in three steps that a bot has to undo separately:
 *
 * 1. the string is reversed (brackets mirrored, so `unicode-bidi: bidi-override`
 *    can flip it back for the reader even with JavaScript off);
 * 2. "@", "." and "+" are replaced by stand-ins and drawn from CSS instead, so
 *    no address- or number-shaped token is left in the HTML at all;
 * 3. noise is wedged in after every second character and clipped out of sight
 *    by CSS — clipped rather than hidden, so it stays in the text the page
 *    reports and a scan that reverses the string anyway comes away with a
 *    plausible-looking but non-existent contact.
 *
 * `unscramble` puts it back. It runs in the browser and only when the reader
 * asks for the contact — nothing undoes this on its own, so a scraper that
 * executes the page scripts is left with the same three layers.
 */
export function scramble(value: string): string {
  const seed = seedOf(value);
  const chars = [...value]
    .reverse()
    .map((char) => STAND_IN[char] ?? MIRRORED[char] ?? char);

  const out: string[] = [];
  chars.forEach((char, index) => {
    out.push(char);
    const last = index === chars.length - 1;
    if (!last && index % STRIDE === STRIDE - 1) out.push(noiseAt(seed, index));
  });

  return out.join("");
}

/** Inverse of `scramble`. */
export function unscramble(scrambled: string): string {
  return [...scrambled]
    .filter((_, index) => !isNoise(index))
    .reverse()
    .map((char) => PLAIN[char] ?? MIRRORED[char] ?? char)
    .join("");
}

export type ScrambledPart =
  /** Shown as is — reading order is fixed by the right-to-left override. */
  | { kind: "text"; value: string }
  /** Wedged-in noise: rendered, then clipped to nothing by CSS. */
  | { kind: "noise"; value: string }
  /** Empty element whose CSS rule prints the "@", the dot or the plus. */
  | { kind: "standIn"; className: string };

/**
 * Splits a scrambled value into what the markup has to render: text nodes,
 * hidden noise and the empty elements the separators are drawn into.
 */
export function splitScrambled(scrambled: string): ScrambledPart[] {
  const parts: ScrambledPart[] = [];

  [...scrambled].forEach((char, index) => {
    if (isNoise(index)) {
      parts.push({ kind: "noise", value: char });
      return;
    }

    const className = STAND_IN_CLASS[char];
    if (className) {
      parts.push({ kind: "standIn", className });
      return;
    }

    const last = parts.at(-1);
    if (last?.kind === "text") last.value += char;
    else parts.push({ kind: "text", value: char });
  });

  return parts;
}
