"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  label: string;
  /** Панель. Якщо не задана — пункт неактивний (у макеті для нього немає контенту). */
  panel?: ReactNode;
};

type TabsProps = {
  items: readonly TabItem[];
  /** Ширина бічного списку (у макетах — 459px). */
  listClassName?: string;
  className?: string;
};

/**
 * Вкладки з вертикальним списком ліворуч — макет секції 9325:1161.
 * Активний пункт кольору бренду, як у `TopicList`.
 *
 * Панелі приходять уже відрендереними з серверного компонента, тому весь текст
 * присутній у HTML (важливо для SEO) — клієнт лише перемикає видимість.
 */
export function Tabs({ items, listClassName, className }: TabsProps) {
  const firstEnabled = items.findIndex((item) => item.panel);
  const [active, setActive] = useState(firstEnabled === -1 ? 0 : firstEnabled);
  const baseId = useId();

  return (
    <div
      className={cn("flex flex-col gap-10 lg:flex-row lg:gap-16", className)}
    >
      <div className={cn("flex shrink-0 flex-col gap-8", listClassName)}>
        <hr className="border-t border-gray-300" />
        <div
          role="tablist"
          aria-orientation="vertical"
          className="flex flex-col gap-[14px] text-lg font-medium"
        >
          {items.map((item, index) => {
            const disabled = !item.panel;
            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                id={`${baseId}-tab-${index}`}
                aria-selected={active === index}
                aria-controls={`${baseId}-panel-${index}`}
                disabled={disabled}
                onClick={() => setActive(index)}
                className={cn(
                  "text-left transition-colors",
                  active === index ? "text-brand" : "text-black",
                  disabled
                    ? "cursor-not-allowed opacity-40"
                    : "hover:text-brand cursor-pointer",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {items.map((item, index) =>
          item.panel ? (
            <div
              key={item.label}
              role="tabpanel"
              id={`${baseId}-panel-${index}`}
              aria-labelledby={`${baseId}-tab-${index}`}
              hidden={active !== index}
            >
              {item.panel}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
