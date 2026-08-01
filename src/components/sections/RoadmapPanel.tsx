import { RichBlocks, type RichBlock } from "@/components/ui/RichBlocks";

export type RoadmapTabContent = {
  label: string;
  /** Малий заголовок 24/32 (напр. «MVP Development»). */
  kicker?: string;
  /** Провідний рядок під заголовком. */
  lead?: string;
  /** Великий заголовок-антиква 48/60. */
  heading?: string;
  intro?: string;
  benefitsTitle?: string;
  benefits?: readonly { title: string; text: string }[];
  outcomesTitle?: string;
  outcomes?: readonly string[];
  closing?: string;
};

/**
 * Вміст однієї вкладки «AI Implementation Roadmaps» (фрейми 9325:1489…1492).
 * Адаптер: розкладає структуровану вкладку у блоки й віддає їх спільному
 * рендереру `RichBlocks`, щоб логіка виводу була в одному місці.
 */
export function RoadmapPanel({ tab }: { tab: RoadmapTabContent }) {
  const blocks: RichBlock[] = [];

  if (tab.kicker) blocks.push({ type: "kicker", text: tab.kicker });
  if (tab.lead) blocks.push({ type: "paragraph", text: tab.lead });
  if (tab.heading) blocks.push({ type: "heading", text: tab.heading });
  if (tab.intro) blocks.push({ type: "paragraph", text: tab.intro });
  if (tab.benefitsTitle)
    blocks.push({ type: "subheading", text: tab.benefitsTitle });
  if (tab.benefits?.length)
    blocks.push({ type: "definitions", items: tab.benefits });
  if (tab.outcomesTitle)
    blocks.push({ type: "subheading", text: tab.outcomesTitle });
  if (tab.outcomes?.length)
    blocks.push({ type: "bullets", items: tab.outcomes });
  if (tab.closing) blocks.push({ type: "paragraph", text: tab.closing });

  return <RichBlocks blocks={blocks} />;
}
