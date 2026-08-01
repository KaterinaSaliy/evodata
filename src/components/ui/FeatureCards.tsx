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
   * `photo` — прямокутне фото 516×292 зі скругленням (node 9320:77996);
   * `object` — квадратний 3D-об'єкт на прозорому тлі 369×369 (node 9330:4369).
   */
  variant?: "photo" | "object";
  className?: string;
};

/**
 * Сітка карток «зображення + заголовок + опис».
 * Використовується на кількох сторінках, тому винесена в спільний компонент.
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
            sizes={isPhoto ? "(max-width: 640px) 100vw, 516px" : "369px"}
            className={
              isPhoto
                ? "h-[220px] w-full rounded-xl object-cover sm:h-[292px]"
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
