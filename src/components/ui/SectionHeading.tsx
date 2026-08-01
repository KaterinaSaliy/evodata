import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: ReactNode;
  /** Тег заголовка: h1 у героях, h2 у секціях, h3 усередині блоків. */
  as?: ElementType;
  className?: string;
};

/**
 * Заголовок секції — Display 2xl із макета (Instrument Serif 72/80, tracking −1.44)
 * зі зменшенням на вужчих екранах. Повторюється у всіх секціях сайту.
 */
export function SectionHeading({
  children,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-ink lg:text-display-2xl font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
