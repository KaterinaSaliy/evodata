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

/**
 * Horizontal strip dragged with the mouse (the "DRAG" hint in the design).
 *
 * Touch and trackpad use native scrolling — only the mouse is intercepted, so
 * momentum scrolling on mobile stays intact. The container is focusable
 * (arrow keys scroll it natively). With `controls` a pair of arrows is added
 * under the strip, stepping one card at a time.
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
    el.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft =
      drag.current.startScroll - (event.clientX - drag.current.startX);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!drag.current.active) return;

    drag.current.active = false;
    setDragging(false);
    if (el?.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
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

    // One card plus the gap: the distance between two neighbours already
    // includes it, so the gap never has to be repeated here.
    const [first, second] = Array.from(el.children) as HTMLElement[];
    const distance =
      first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    el.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "auto" : "smooth",
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
