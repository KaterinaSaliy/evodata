import { cn } from "@/lib/utils";

type TopicListProps = {
  items: readonly string[];
  /** Індекс активного пункта (у макетах — перший). */
  activeIndex?: number;
  className?: string;
};

/**
 * Бічний список тем із верхньою лінією — повторюваний блок макета
 * (nodes 9318:77502 «Roadmaps» і 9376:6259 «FAQ»).
 * Активний пункт — кольору бренду.
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
