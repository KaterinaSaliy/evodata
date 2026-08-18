import Image from "next/image";
import { cn } from "@/lib/utils";

export type FeatureCard = {
  title: string;
  description: string;
  image: string;
};

type FeatureCardsProps = {
  cards: readonly FeatureCard[];
  /**
   * `photo` — rectangular 516×292 photo with rounded corners (node 9320:77996);
   * `object` — square 369×369 3D object on a transparent background (node 9330:4369).
   */
  variant?: "photo" | "object";
  className?: string;
};

/**
 * Grid of "image + heading + description" cards.
 * Used on several pages, hence a shared component.
 */
export function FeatureCards({
  cards,
  variant = "photo",
  className,
}: FeatureCardsProps) {
  const isPhoto = variant === "photo";

  return (
    <ul
      className={cn(
        "grid gap-x-6 gap-y-12",
        isPhoto ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {cards.map((card) => (
        <li key={card.title} className="flex flex-col gap-6">
          <Image
            src={card.image}
            alt=""
            width={isPhoto ? 1032 : 738}
            height={isPhoto ? 584 : 738}
            // Two columns from `sm` up, one below it.
            sizes={isPhoto ? "(max-width: 640px) 100vw, 50vw" : "369px"}
            className={
              isPhoto
                ? // 516×292 is the design's frame, kept as a ratio rather than
                  // a fixed height: the column is wider than 516 on a large
                  // screen and narrower on a small one, and a fixed height
                  // would make `object-cover` eat the photo — the top and the
                  // bottom at 1440, the sides between 640 and 1024.
                  "aspect-516/292 w-full rounded-xl object-cover"
                : "size-[240px] object-contain lg:size-[369px]"
            }
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-ink font-serif text-[28px] leading-[1.2] tracking-[-0.02em] lg:text-[36px]">
              {card.title}
            </h3>
            <p className="text-body text-lg lg:text-xl">{card.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
