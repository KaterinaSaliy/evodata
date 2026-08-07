"use client";

import { Fragment, useSyncExternalStore } from "react";
import { splitScrambled, unscramble } from "@/lib/scramble";
import { cn } from "@/lib/utils";

type ContactLinkProps = {
  /** Value put through `scramble` — never the plain phone or e-mail. */
  scrambled: string;
  /** Link target, also scrambled. Defaults to the displayed value. */
  scrambledHref?: string;
  scheme: "tel" | "mailto";
  className?: string;
};

/** Never changes — the value is decided by where the render happens. */
const subscribe = () => () => {};

/**
 * Contact that reads normally but is not worth harvesting.
 *
 * Server-rendered markup carries the value scrambled and without an `href`:
 * reversed, with "@" and "." replaced by empty elements that CSS draws them
 * into, and with hidden noise between the characters. Neither a `mailto:` scan
 * nor a plain-text grep of the HTML finds anything usable, and a bot that
 * reverses the string anyway ends up with an address that does not exist. CSS
 * puts it right for the reader, so the contact stays legible with JavaScript
 * off. Once mounted, the component swaps in the real text and link —
 * selectable, copyable and announced correctly by screen readers.
 *
 * The hydration render repeats the server output on purpose (that is what the
 * server snapshot of `useSyncExternalStore` is for); the real value appears in
 * the re-render straight after, so there is never a mismatch.
 */
export function ContactLink({
  scrambled,
  scrambledHref = scrambled,
  scheme,
  className,
}: ContactLinkProps) {
  const revealed = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!revealed) {
    return (
      <span dir="rtl" className={cn("[unicode-bidi:bidi-override]", className)}>
        {splitScrambled(scrambled).map((part, index) => {
          switch (part.kind) {
            case "text":
              return <Fragment key={index}>{part.value}</Fragment>;
            case "noise":
              return (
                <span key={index} className="hidden">
                  {part.value}
                </span>
              );
            case "standIn":
              return <span key={index} className={part.className} />;
          }
        })}
      </span>
    );
  }

  return (
    <a href={`${scheme}:${unscramble(scrambledHref)}`} className={className}>
      {unscramble(scrambled)}
    </a>
  );
}
