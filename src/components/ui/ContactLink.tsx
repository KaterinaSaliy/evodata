"use client";

import { useSyncExternalStore } from "react";
import { scramble } from "@/lib/scramble";
import { cn } from "@/lib/utils";

type ContactLinkProps = {
  /** Value reversed by `scramble` — never the plain phone or e-mail. */
  scrambled: string;
  /** Link target, also reversed: dial string for `tel`, address for `mailto`. */
  scrambledHref: string;
  scheme: "tel" | "mailto";
  className?: string;
};

/** Never changes — the value is decided by where the render happens. */
const subscribe = () => () => {};

/**
 * Contact that reads normally but is not worth harvesting.
 *
 * Server-rendered markup holds the value backwards and carries no `href`, so
 * neither a `mailto:` scan nor a plain-text grep of the HTML finds anything
 * usable. `unicode-bidi: bidi-override` flips it back visually, so the contact
 * is readable with JavaScript off too. Once mounted, the component swaps in the
 * real text and link — selectable, copyable and announced correctly by screen
 * readers.
 *
 * The hydration render repeats the server output on purpose (that is what the
 * server snapshot of `useSyncExternalStore` is for); the real value appears in
 * the re-render straight after, so there is never a mismatch.
 */
export function ContactLink({
  scrambled,
  scrambledHref,
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
        {scrambled}
      </span>
    );
  }

  // `scramble` is its own inverse, so the same call puts the value back.
  return (
    <a href={`${scheme}:${scramble(scrambledHref)}`} className={className}>
      {scramble(scrambled)}
    </a>
  );
}
