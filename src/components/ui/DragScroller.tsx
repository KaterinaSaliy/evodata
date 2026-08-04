"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type DragScrollerProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
};

/**
 * Горизонтальна стрічка з перетягуванням мишею (підказка «DRAG» у макеті).
 *
 * Тач і тачпад користуються нативним скролом — перехоплюємо лише мишу, щоб не
 * ламати інерційну прокрутку на мобільних. Контейнер фокусується з клавіатури
 * (стрілки прокручують нативно).
 */
export function DragScroller({
  children,
  className,
  ariaLabel,
}: DragScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [dragging, setDragging] = useState(false);

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

  return (
    <div
      ref={ref}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      // Нативний drag-and-drop зображень перехоплював вказівник, і замість
      // стрічки користувач тягнув саму картинку. Подія спливає, тому одного
      // обробника на контейнері досить для всього вмісту.
      onDragStart={(event) => event.preventDefault()}
      className={cn(
        "no-scrollbar overflow-x-auto",
        dragging ? "cursor-grabbing select-none" : "cursor-grab",
        className,
      )}
    >
      {children}
    </div>
  );
}
