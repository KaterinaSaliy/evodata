import { RichBlocks, type RichBlock } from "@/components/ui/RichBlocks";

export type RoadmapTabContent = {
  label: string;
  /** Small heading 24/32 (e.g. "MVP Development"). */
  kicker?: string;
  /** Lead line under the heading. */
  lead?: string;
  /** Large serif heading 48/60. */
  heading?: string;
  /** One or more paragraphs under the heading. */
  intro?: string | readonly string[];
  benefitsTitle?: string;
  benefits?: readonly { title: string; text: string }[];
  outcomesTitle?: string;
  outcomes?: readonly string[];
  /** Heading above the closing paragraph, where the copy deck has one. */
  closingTitle?: string;
  closing?: string;
};

/**
 * Content of a single "AI Implementation Roadmaps" tab (frames 9325:1489…1492).
 * An adapter: it turns the structured tab into blocks and hands them to the
 * shared `RichBlocks` renderer, keeping the output logic in one place.
 */
export function RoadmapPanel({ tab }: { tab: RoadmapTabContent }) {
  const blocks: RichBlock[] = [];

  if (tab.kicker) blocks.push({ type: "kicker", text: tab.kicker });
  if (tab.lead) blocks.push({ type: "lead", text: tab.lead });
  if (tab.heading) blocks.push({ type: "heading", text: tab.heading });
  for (const text of typeof tab.intro === "string"
    ? [tab.intro]
    : (tab.intro ?? [])) {
    blocks.push({ type: "paragraph", text });
  }
  if (tab.benefitsTitle)
    blocks.push({ type: "subheading", text: tab.benefitsTitle });
  if (tab.benefits?.length)
    blocks.push({ type: "definitions", items: tab.benefits });
  if (tab.outcomesTitle)
    blocks.push({ type: "subheading", text: tab.outcomesTitle });
  if (tab.outcomes?.length)
    blocks.push({ type: "bullets", items: tab.outcomes });
  if (tab.closingTitle)
    blocks.push({ type: "subheading", text: tab.closingTitle });
  if (tab.closing) blocks.push({ type: "paragraph", text: tab.closing });

  return <RichBlocks blocks={blocks} />;
}
