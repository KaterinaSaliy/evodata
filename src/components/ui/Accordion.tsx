"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  /** List items inside the expanded block. */
  bullets?: readonly string[];
  /** Paragraphs inside the expanded block. */
  paragraphs?: readonly string[];
};

type AccordionProps = {
  items: readonly AccordionItem[];
  /** Index of the initially expanded item (the first one in the design). */
  defaultOpen?: number;
  className?: string;
};

/**
 * Accordion — Figma node 9376:6135.
 * The expanded item gets a Gray/50 background and a chevron up; closed ones show only the title.
 * Accessibility: the title is a <button> with aria-expanded, the panel is tied via aria-controls.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  className,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.title}
            className={cn(
              "border-b border-gray-200 p-6 lg:p-8",
              isOpen && "bg-surface-2",
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-start justify-between gap-6 text-left"
              >
                <span className="text-ink text-xl font-semibold lg:text-[24px] lg:leading-8">
                  {item.title}
                </span>
                <ChevronDownIcon
                  className={cn(
                    "mt-1 size-6 shrink-0 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pt-6"
            >
              {item.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-body pb-3 text-base">
                  {paragraph}
                </p>
              ))}

              {item.bullets?.length ? (
                <ul className="flex flex-col gap-[14px] pl-6">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/icon-dot.svg"
                        alt=""
                        aria-hidden="true"
                        className="mt-2 size-[6px] shrink-0"
                      />
                      <span className="text-body text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
