"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabItem = {
  label: string;
  /** Panel. Without it the item is disabled (the design has no copy for it). */
  panel?: ReactNode;
};

type TabsProps = {
  items: readonly TabItem[];
  /** Width of the side list (459px in the designs). */
  listClassName?: string;
  className?: string;
};

/**
 * Tabs with a vertical list on the left — design of section 9325:1161.
 * The active item takes the brand colour, as in `TopicList`.
 *
 * Panels arrive already rendered from a server component, so all the copy is
 * present in the HTML (important for SEO) — the client only toggles visibility.
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
              // Coming back from `display: none` restarts the CSS animation, so
              // the panel fades in every time it is selected.
              className="animate-fade-in motion-reduce:animate-none"
            >
              {item.panel}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
