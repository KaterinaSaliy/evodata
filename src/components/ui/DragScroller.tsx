"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { cn } from "@/lib/utils";

type DragScrollerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel: string;
  /**
   * Arrow buttons centred under the strip — node 9323:1153.
   * Off by default: the home page strip is dragged only ("DRAG" in the design).
   */
  controls?: boolean;
};

const arrowClass =
  "hover:text-ink flex size-14 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-gray-300 disabled:cursor-default disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 lg:size-16";

/** How far the pointer has to travel before a release counts as a swipe. */
const SWIPE_THRESHOLD = 60;

/**
 * Distance between two neighbouring cards. It already includes the gap, so the
 * gap never has to be added on top.
 */
function cardDistance(el: HTMLElement) {
  const [first, second] = Array.from(el.children) as HTMLElement[];
  return first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
}

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

/**
 * Horizontal strip dragged with the mouse (the "DRAG" hint in the design).
 *
 * Touch and trackpad use native scrolling — only the mouse is intercepted, so
 * momentum scrolling and snapping on mobile stay intact. The container is
 * focusable (arrow keys scroll it natively). With `controls` a pair of arrows
 * is added under the strip, stepping one card at a time.
 *
 * Snapping is suspended for the length of a drag and restored when the strip
 * comes to rest — see `handlePointerDown` and `settle`.
 */
export function DragScroller({
  children,
  className,
  style,
  ariaLabel,
  controls = false,
}: DragScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [dragging, setDragging] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;

    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
    };
    setDragging(true);
    // Mandatory snapping pulls back every scrollLeft the drag sets, so the
    // strip stayed put until the pointer passed the middle of a card — half a
    // window on the widest ones. Off for the gesture, back on once it settles.
    el.style.scrollSnapType = "none";
    el.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft =
      drag.current.startScroll - (event.clientX - drag.current.startX);
  };

  /**
   * Where the strip comes to rest. A gesture past the threshold moves on by as
   * many cards as it covered — one at the very least, so a short deliberate
   * swipe is not swallowed by a card wider than the drag. Anything shorter
   * counts as a slip and returns to where it started.
   */
  const settle = (el: HTMLDivElement, moved: number) => {
    const distance = cardDistance(el);
    const cards =
      Math.abs(moved) < SWIPE_THRESHOLD
        ? 0
        : Math.max(1, Math.round(Math.abs(moved) / distance));
    const target = drag.current.startScroll + Math.sign(moved) * cards * distance;

    el.scrollTo({
      left: Math.min(Math.max(target, 0), el.scrollWidth - el.clientWidth),
      behavior: scrollBehavior(),
    });

    // Snapping can only come back once the strip has stopped: turned on
    // mid-flight, it yanks the strip to the nearest card. `scrollend` does not
    // fire when the target is where we already are, hence the second way out.
    const restore = () => el.style.removeProperty("scroll-snap-type");
    el.addEventListener("scrollend", restore, { once: true });
    window.setTimeout(restore, 600);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!drag.current.active) return;

    drag.current.active = false;
    setDragging(false);
    if (el?.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
    if (el) settle(el, el.scrollLeft - drag.current.startScroll);
  };

  // Which arrows are still usable. Derived from the scroll position, so
  // dragging and the buttons read from a single source of truth.
  useEffect(() => {
    const el = ref.current;
    if (!controls || !el) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = el.scrollWidth - el.clientWidth;
        setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 });
      });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });

    // The strip only becomes scrollable once the cards have their real width,
    // which can happen after the first paint — watching the card as well as
    // the container keeps the arrows from getting stuck disabled.
    const observer = new ResizeObserver(update);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [controls]);

  const step = useCallback((direction: 1 | -1) => {
    const el = ref.current;
    if (!el) return;

    el.scrollBy({
      left: direction * cardDistance(el),
      behavior: scrollBehavior(),
    });
  }, []);

  const strip = (
    <div
      ref={ref}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      // Native image drag-and-drop hijacked the pointer, so dragging from a
      // photo moved the image instead of the strip. The event bubbles, so one
      // handler on the container covers everything inside.
      onDragStart={(event) => event.preventDefault()}
      style={style}
      className={cn(
        "no-scrollbar overflow-x-auto",
        dragging ? "cursor-grabbing select-none" : "cursor-grab",
        className,
      )}
    >
      {children}
    </div>
  );

  if (!controls) return strip;

  return (
    <>
      {strip}
      <div className="mt-10 flex items-center justify-center gap-6 lg:mt-[72px]">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={edges.start}
          aria-label={`${ariaLabel}: previous`}
          className={arrowClass}
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={edges.end}
          aria-label={`${ariaLabel}: next`}
          className={arrowClass}
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </>
  );
}
