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
  /**
   * `sidebar` — vertical list to the left of the panel (Industries, home page).
   * `inline` — full-width row of tabs above the panel, a select on mobile
   * (What We Do roadmaps — node 9329:4288).
   */
  variant?: "sidebar" | "inline";
  /** Accessible name of the mobile select in the `inline` variant. */
  label?: string;
  /** Width of the side list (459px in the designs). */
  listClassName?: string;
  className?: string;
};

/**
 * Tabs over server-rendered panels.
 *
 * The panels arrive already rendered from a server component, so all the copy
 * is present in the HTML (important for SEO) — the client only toggles
 * visibility and keeps the active index.
 */
export function Tabs({
  items,
  variant = "sidebar",
  label,
  listClassName,
  className,
}: TabsProps) {
  const firstEnabled = items.findIndex((item) => item.panel);
  const [active, setActive] = useState(firstEnabled === -1 ? 0 : firstEnabled);
  const baseId = useId();

  const panels = items.map((item, index) =>
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
  );

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-col gap-8 lg:gap-[72px]", className)}>
        {/* Mobile: the row of tabs would not fit, so the design switches to a
            select. It drives the same state as the buttons below. */}
        <select
          aria-label={label}
          value={active}
          onChange={(event) => setActive(Number(event.target.value))}
          className="text-ink w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 text-base font-medium lg:hidden"
        >
          {items.map((item, index) => (
            <option key={item.label} value={index} disabled={!item.panel}>
              {item.label}
            </option>
          ))}
        </select>

        <div role="tablist" className="hidden lg:flex">
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
                // The rule above the labels is the indicator: grey for the rest,
                // brand colour for the active one.
                className={cn(
                  "text-ink flex-1 border-t-2 px-4 pt-8 pb-2 text-center text-base font-semibold transition-colors",
                  active === index ? "border-brand" : "border-gray-200",
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

        <div className="max-w-[892px]">{panels}</div>
      </div>
    );
  }

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

      <div className="flex min-w-0 flex-1 flex-col">{panels}</div>
    </div>
  );
}
