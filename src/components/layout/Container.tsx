import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Обмежувач ширини контенту.
 * Бічні поля з макетів: 16px на мобільному (393) і 64px на десктопі (1440).
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
