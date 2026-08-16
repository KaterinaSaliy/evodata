"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** Scrolled this far, the reader has understood — the hint goes. */
const UNDERSTOOD = 8;

/**
 * The row of highlights at the top of the home hero — node 9137:50045 on
 * desktop (three 426px columns), node 9406:853 on mobile.
 *
 * On a phone one card fills the width exactly, so nothing of the next one
 * shows and the row does not read as scrollable. Hence the arrow under it:
 * it points the way, nudges, and leaves at the first sign the reader got it.
 * It sits below the row rather than over it because the card text runs to the
 * edge of the screen.
 */
export type Highlight = {
  /** ISO 3166-1 alpha-2 code, lowercase — `/images/flag-<code>.svg`. */
  flag?: string;
  text: string;
};

export function HeroHighlights({ items }: { items: readonly Highlight[] }) {
  const strip = useRef<HTMLUListElement>(null);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const el = strip.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setHint(
          el.scrollLeft <= UNDERSTOOD &&
            el.scrollWidth - el.clientWidth > UNDERSTOOD,
        ),
      );
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    // The row only overflows once the cards have their real width, which can
    // land after the first paint.
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute top-[106px] right-0 left-4 sm:left-8 lg:top-[112px] lg:right-16 lg:left-16">
      <ul
        ref={strip}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto lg:grid lg:grid-cols-[426px_426px_426px] lg:overflow-visible"
      >
        {items.map(({ flag, text }) => (
          <li
            key={text}
            className="w-[min(361px,calc(100vw-2rem))] shrink-0 snap-start border-b border-white/50 pt-[10px] pb-5 text-lg font-medium whitespace-pre-line lg:w-auto lg:text-xl"
          >
            {flag && (
              // Decorative: the country is named in the text right next to it.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`/images/flag-${flag}.svg`}
                alt=""
                aria-hidden="true"
                className="mr-2 inline-block h-[0.75em] w-[1.125em] rounded-[2px] align-[-0.12em]"
              />
            )}
            {text}
          </li>
        ))}
      </ul>

      <ChevronRightIcon
        aria-hidden="true"
        className={cn(
          // Decorative: the list is one after another for a screen reader
          // whichever way it is scrolled, so there is nothing to announce.
          // Full white with a shadow: what sits behind it is the 3D object,
          // which is bright in places and dark in others.
          "animate-nudge pointer-events-none absolute top-full right-4 mt-3 size-6 text-white drop-shadow-[0_1px_3px_rgba(16,24,40,0.5)] transition-opacity duration-300 motion-reduce:animate-none lg:hidden",
          hint ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
