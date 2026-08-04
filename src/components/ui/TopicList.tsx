import { cn } from "@/lib/utils";

type TopicListProps = {
  items: readonly string[];
  /** Index of the active item (the first one in the designs). */
  activeIndex?: number;
  className?: string;
};

/**
 * Side list of topics with a rule on top — a repeating block of the designs
 * (nodes 9318:77502 "Roadmaps" and 9376:6259 "FAQ").
 * The active item takes the brand colour.
 */
export function TopicList({
  items,
  activeIndex = 0,
  className,
}: TopicListProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <hr className="border-t border-gray-300" />
      <ul className="flex flex-col gap-[14px] text-lg font-medium">
        {items.map((item, index) => (
          <li
            key={item}
            aria-current={index === activeIndex ? "true" : undefined}
            className={index === activeIndex ? "text-brand" : "text-black"}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
