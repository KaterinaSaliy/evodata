"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/**
 * A titled part of a long answer. The client copy deck groups the longer FAQ
 * answers under headings ("Our Integration Approach", "Business Value", …),
 * each holding any mix of paragraphs, named items and bullets.
 */
export type AccordionSection = {
  heading?: string;
  paragraphs?: readonly string[];
  /** Named items: a semibold title with a paragraph under it. */
  definitions?: readonly { title: string; text: string }[];
  bullets?: readonly string[];
  /** Numbered list — the deck numbers the "How We Help" answers. */
  steps?: readonly string[];
};

export type AccordionItem = {
  title: string;
  /** List items inside the expanded block. */
  bullets?: readonly string[];
  /** Numbered list — the order of the steps carries meaning. */
  steps?: readonly string[];
  /** Paragraphs inside the expanded block. */
  paragraphs?: readonly string[];
  /** Sections rendered after the paragraphs and bullets above. */
  sections?: readonly AccordionSection[];
};

type AccordionProps = {
  items: readonly AccordionItem[];
  /** Index of the initially expanded item (the first one in the design). */
  defaultOpen?: number;
  className?: string;
};

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-[14px] pl-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icon-dot.svg"
            alt=""
            aria-hidden="true"
            className="mt-2 size-[6px] shrink-0"
          />
          <span className="text-body text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ items }: { items: readonly string[] }) {
  return (
    <ol className="flex list-none flex-col gap-[14px] pl-6">
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-4">
          <span className="text-ink w-5 shrink-0 text-base font-semibold">
            {index + 1}.
          </span>
          <span className="text-body text-base">{item}</span>
        </li>
      ))}
    </ol>
  );
}

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
              // The blocks are 24px apart, the paragraphs inside one block 12px.
              className="flex flex-col gap-6 pt-6"
            >
              {item.paragraphs?.length ? (
                <div className="flex flex-col gap-3">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {item.bullets?.length ? <Bullets items={item.bullets} /> : null}

              {item.steps?.length ? <Steps items={item.steps} /> : null}

              {item.sections?.length ? (
                <div className="flex flex-col gap-6">
                  {item.sections.map((section, sectionIndex) => (
                    <div
                      key={section.heading ?? sectionIndex}
                      className="flex flex-col gap-3"
                    >
                      {section.heading ? (
                        <h4 className="text-ink text-lg font-semibold">
                          {section.heading}
                        </h4>
                      ) : null}

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-body text-base">
                          {paragraph}
                        </p>
                      ))}

                      {section.definitions?.length ? (
                        <dl className="flex flex-col gap-3">
                          {section.definitions.map((definition) => (
                            <div
                              key={definition.title}
                              className="flex flex-col gap-1"
                            >
                              <dt className="text-ink text-base font-semibold">
                                {definition.title}
                              </dt>
                              <dd className="text-body text-base">
                                {definition.text}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      ) : null}

                      {section.bullets?.length ? (
                        <Bullets items={section.bullets} />
                      ) : null}

                      {section.steps?.length ? (
                        <Steps items={section.steps} />
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
