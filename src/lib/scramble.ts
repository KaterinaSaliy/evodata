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
 * Reverses a string, mirroring brackets on the way.
 *
 * Weak as encryption, which is not the point: it keeps phone numbers and
 * e-mail addresses out of the markup in readable form, while
 * `unicode-bidi: bidi-override` flips them back for the reader even with
 * JavaScript off. Applying it twice returns the original, so the same function
 * serves for both scrambling on the server and restoring in the browser.
 */
export function scramble(value: string): string {
  return [...value]
    .reverse()
    .map((char) => MIRRORED[char] ?? char)
    .join("");
}
