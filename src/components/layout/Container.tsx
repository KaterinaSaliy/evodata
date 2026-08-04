import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Content width limiter.
 * Side padding from the designs: 16px on mobile (393) and 64px on desktop (1440).
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-16",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
