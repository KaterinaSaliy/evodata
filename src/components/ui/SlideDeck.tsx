"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Container } from "@/components/layout/Container";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import { cn } from "@/lib/utils";

type SlideDeckProps = {
  /** Підпис слайдера для допоміжних технологій. */
  ariaLabel: string;
  /** Підписи слайдів — для індикаторів і aria-label кнопок переходу. */
  labels: readonly string[];
  /** Слайди: по одному елементу на підпис. */
  children: ReactNode;
  className?: string;
};

/**
 * Слайдер повноширинних слайдів на нативному CSS scroll-snap.
 *
 * Слайди рендеряться на сервері й лишаються в HTML (важливо для SEO) — клієнтський
 * тут лише шар керування: стрілки, індикатори і відстеження активного слайда.
 * Свайп, тачпад і клавіатурні стрілки працюють нативним скролом.
 */
export function SlideDeck({
  ariaLabel,
  labels,
  children,
  className,
}: SlideDeckProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const last = labels.length - 1;

  // Активний слайд рахуємо зі скрол-позиції: слайди однакової ширини, тож
  // джерело правди одне — і для свайпу, і для кнопок.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (el.clientWidth === 0) return;
        setIndex(Math.round(el.scrollLeft / el.clientWidth));
      });
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const el = trackRef.current;
      if (!el) return;

      const target = Math.min(Math.max(next, 0), labels.length - 1);
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      el.scrollTo({
        left: target * el.clientWidth,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [labels.length],
  );

  return (
    <div className={className}>
      <div
        ref={trackRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
      >
        {children}
      </div>

      <Container className="flex flex-wrap items-center gap-x-6 gap-y-5 lg:gap-x-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label={`Previous: ${labels[Math.max(index - 1, 0)]}`}
            className="text-ink flex size-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ArrowLeftIcon className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === last}
            aria-label={`Next: ${labels[Math.min(index + 1, last)]}`}
            className="text-ink flex size-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ArrowRightIcon className="size-5" />
          </button>
        </div>

        {/* Індикатори: перехід одразу до потрібного напряму.
            Номер активного слайда показує сам слайд, тож лічильник не дублюємо. */}
        <ul className="flex flex-wrap items-center gap-1.5 lg:gap-2">
          {labels.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={label}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "h-1 cursor-pointer rounded-full transition-all",
                  i === index
                    ? "bg-brand w-8 lg:w-10"
                    : "w-5 bg-gray-300 hover:bg-gray-400 lg:w-6",
                )}
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
