"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { splitScrambled, unscramble } from "@/lib/scramble";
import { cn } from "@/lib/utils";

type ContactLinkProps = {
  /** Value put through `scramble` — never the plain phone or e-mail. */
  scrambled: string;
  /** What goes to the clipboard and to the `href`. Defaults to the shown value. */
  scrambledHref?: string;
  scheme: "tel" | "mailto";
  /** Accessible name of the control before it is opened. */
  label: string;
  /** Confirmation shown once the value is in the clipboard. */
  copiedLabel: string;
  className?: string;
};

/** How long the confirmation stays up. */
const CONFIRM_MS = 2500;

/**
 * Contact that reads normally but is not worth harvesting.
 *
 * The value is never in the document: it is reversed, "@", "." and "+" are
 * empty elements CSS draws the character into, and hidden noise sits between
 * the characters. CSS puts it right for the eye — with JavaScript off too — so
 * neither the served HTML nor the live DOM holds anything a scan can use.
 * A bot that reverses the string anyway comes away with an address that does
 * not exist.
 *
 * That leaves people needing a way to actually take the number, so the whole
 * thing is a button: one click copies the contact, prints it as plain text and
 * turns it into a `tel:` / `mailto:` link. The real value is assembled in the
 * browser at that moment, out of the scrambled string — a gesture no crawler
 * makes, which is what separates the reader from the harvester here.
 */
export function ContactLink({
  scrambled,
  scrambledHref = scrambled,
  scheme,
  label,
  copiedLabel,
  className,
}: ContactLinkProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  // The button is gone by now, so the focus has to follow to what replaced it.
  useEffect(() => {
    if (revealed) linkRef.current?.focus();
  }, [revealed]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), CONFIRM_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const reveal = () => {
    setRevealed(true);
    // Missing over plain HTTP and refused if the click is not trusted; the
    // value is on screen either way, so a failure needs no handling beyond
    // holding back a confirmation that would be a lie.
    void navigator.clipboard
      ?.writeText(unscramble(scrambledHref))
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };

  return (
    <span className="relative inline-block w-fit">
      {revealed ? (
        <a
          ref={linkRef}
          href={`${scheme}:${unscramble(scrambledHref)}`}
          className={className}
        >
          {unscramble(scrambled)}
        </a>
      ) : (
        <button
          type="button"
          onClick={reveal}
          aria-label={label}
          className={cn("cursor-pointer text-left", className)}
        >
          {/* Decorative: the reading order here is the browser's doing, so the
              name on the button is what carries the meaning. */}
          <span
            dir="rtl"
            aria-hidden="true"
            className="[unicode-bidi:bidi-override]"
          >
            {splitScrambled(scrambled).map((part, index) => {
              switch (part.kind) {
                case "text":
                  return <Fragment key={index}>{part.value}</Fragment>;
                case "noise":
                  // Clipped, not `display: none`: hidden elements drop out of
                  // `innerText`, which would hand a scraper the clean string.
                  return (
                    <span key={index} className="sr-only">
                      {part.value}
                    </span>
                  );
                case "standIn":
                  return <span key={index} className={part.className} />;
              }
            })}
          </span>
        </button>
      )}

      {copied ? (
        <span
          role="status"
          // Above the contact: under it, the confirmation would land on the
          // next one down (footer — phone over e-mail). Left-aligned, so it
          // cannot push the page sideways on a narrow screen.
          className="bg-ink pointer-events-none absolute bottom-full left-0 z-10 mb-2 rounded-md px-2 py-1 text-sm leading-5 font-medium whitespace-nowrap text-white"
        >
          {copiedLabel}
        </span>
      ) : null}
    </span>
  );
}
