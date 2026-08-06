import Image from "next/image";
import type { CSSProperties } from "react";
import { DragScroller } from "@/components/ui/DragScroller";
import type { FeatureCard } from "@/components/ui/FeatureCards";
import { cn } from "@/lib/utils";

type CardSliderProps = {
  cards: readonly FeatureCard[];
  /** Slider label for assistive technology — usually the section heading. */
  ariaLabel: string;
  /** Arrow buttons under the strip (What We Do — node 9323:1153). */
  controls?: boolean;
  /** Card width on wide screens — 516px in the design, 600px on the home page. */
  cardWidth?: string;
  className?: string;
};

/**
 * Strip of "landscape photo on top, text below" cards, dragged sideways.
 * The strip spans the full window, but its side padding matches the container,
 * so the first card starts exactly under the heading at any width, and the one
 * cut off at the edge is what makes the strip read as scrollable.
 *
 * Below `md` the card is narrower than the viewport and the padding centres it,
 * so the current card sits in the middle with its neighbours peeking in.
 *
 * Shared by the home page (node 9165:260193) and What We Do (node 9320:77996);
 * the cards themselves are server-rendered, only the strip is a client layer.
 */
export function CardSlider({
  cards,
  ariaLabel,
  controls = false,
  cardWidth = "516px",
  className,
}: CardSliderProps) {
  return (
    <DragScroller
      ariaLabel={ariaLabel}
      controls={controls}
      style={{ "--card": cardWidth } as CSSProperties}
      className={cn(
        "strip-gutter flex snap-x snap-mandatory gap-6 lg:gap-9",
        className,
      )}
    >
      {cards.map((card) => (
        <article
          key={card.title}
          className="flex w-[min(var(--card),72vw)] shrink-0 snap-center flex-col overflow-hidden rounded-xl border border-gray-200 bg-white md:snap-start"
        >
          <Image
            src={card.image}
            alt=""
            width={600}
            height={338}
            sizes="(max-width: 768px) 72vw, 600px"
            className="aspect-16/9 w-full object-cover"
          />
          <div className="flex flex-col gap-4 px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.5px] sm:text-[36px] sm:leading-[44px]">
              {card.title}
            </h3>
            <p className="text-body text-base font-medium sm:text-lg">
              {card.description}
            </p>
          </div>
        </article>
      ))}
    </DragScroller>
  );
}
