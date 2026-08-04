import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: ReactNode;
  /** Heading tag: h1 in heroes, h2 in sections, h3 inside blocks. */
  as?: ElementType;
  className?: string;
};

/**
 * Section heading — Display 2xl from the design (Instrument Serif 72/80,
 * tracking −1.44), scaled down on narrow screens. Repeats across the site.
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
