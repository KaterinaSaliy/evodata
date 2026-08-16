"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "./icons";
import { common } from "@/content/en/common";
import { cn } from "@/lib/utils";

/** How far down the button appears — a screen, so short pages never show it. */
const THRESHOLD = 1;

/**
 * Floating "back to top" control. Not in the design — the pages of this site
 * run long (About Us is over 13 screens on a phone), so the reader gets a way
 * back that does not depend on flicking.
 *
 * It stays mounted and fades, which is why it is `inert` while hidden: an
 * invisible button that can still be tabbed to is worse than no button.
 * Its own look follows the slider arrows (node 9323:1153).
 */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setShown(window.scrollY > window.innerHeight * THRESHOLD),
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    // The button is about to fade out from under the pointer, so a keyboard
    // reader would be left with focus on nothing. The first link of the page
    // is where "back to top" was taking them anyway.
    document
      .querySelector<HTMLElement>("header a")
      ?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      inert={!shown}
      aria-label={common.backToTop}
      className={cn(
        "hover:text-ink fixed right-4 bottom-4 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-lg transition duration-300 hover:border-gray-300 motion-reduce:transition-none lg:right-8 lg:bottom-8 lg:size-14",
        shown ? "opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <ChevronUpIcon className="size-6" />
    </button>
  );
}
