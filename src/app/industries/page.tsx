import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { Accordion } from "@/components/ui/Accordion";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { RichBlocks, type RichBlock } from "@/components/ui/RichBlocks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { TopicList } from "@/components/ui/TopicList";
import { Metrics } from "@/components/sections/home/Metrics";
import { Quote } from "@/components/sections/home/Quote";
import { Roadmaps } from "@/components/sections/home/Roadmaps";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { industries } from "@/content/en/industries";

export const metadata: Metadata = {
  title: "Industries — AI solutions by sector",
  description:
    "AI and data solutions for e-commerce, finance, manufacturing, retail, logistics, EdTech, healthcare and marketing — built around each industry's processes.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries | EvoData",
    description:
      "AI and data solutions built around each industry's processes.",
    url: "/industries",
  },
};

const {
  customSolutions,
  businessValue,
  stages,
  forceMultiplier,
  whyChoose,
  faq,
} = industries;

/** Industries page — Figma node 9254:101114. */
export default function IndustriesPage() {
  return (
    <>
      <InnerHero {...industries.hero} image="/images/glass-ind-hero.webp" />

      {/* Our custom solutions — node 9325:3623 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-[72px]">
          <SectionHeading className="max-w-[940px]">
            {customSolutions.title}
          </SectionHeading>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <TopicList
              items={customSolutions.topics}
              className="shrink-0 lg:w-[459px]"
            />
            <RichBlocks
              blocks={[{ type: "bullets", items: customSolutions.activeItems }]}
            />
          </div>
        </Container>
      </section>

      {/* The Business Value of AI Transformation — node 9329:4246 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading className="max-w-[940px]">
              {businessValue.title}
            </SectionHeading>
            <p className="text-body max-w-[892px] text-lg lg:text-xl">
              {businessValue.intro}
            </p>
          </div>
          <FeatureCards cards={businessValue.cards} variant="photo" />
        </Container>
      </section>

      {/* From the first idea to scaling — node 9329:4329 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-[72px]">
          <SectionHeading className="max-w-[1013px]">
            {stages.title}
          </SectionHeading>

          <Tabs
            listClassName="lg:w-[459px]"
            items={stages.tabs.map((tab) => ({
              label: tab.label,
              panel:
                "blocks" in tab ? (
                  <RichBlocks blocks={tab.blocks as readonly RichBlock[]} />
                ) : undefined,
            }))}
          />
        </Container>
      </section>

      {/* AI Is Not a Replacement for People — node 9403:355 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading className="max-w-[1013px]">
              {forceMultiplier.title}
            </SectionHeading>
            <p className="text-body max-w-[892px] text-lg lg:text-xl">
              {forceMultiplier.intro}
            </p>
          </div>

          {forceMultiplier.groups.map((group, index) => (
            <div
              key={group.title}
              className={`flex flex-col gap-8 lg:items-start lg:gap-16 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-6">
                <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[48px] lg:leading-[60px]">
                  {group.title}
                </h3>
                <RichBlocks
                  blocks={[
                    { type: "paragraph", text: group.text },
                    { type: "bullets", items: group.items },
                  ]}
                />
              </div>

              <Image
                src={group.image}
                alt=""
                width={720}
                height={888}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-[260px] w-full rounded-xl object-cover sm:h-[360px] lg:h-[480px] lg:w-[420px] lg:shrink-0"
              />
            </div>
          ))}

          <p className="text-body max-w-[892px] text-lg lg:text-xl">
            {forceMultiplier.closing}
          </p>
        </Container>
      </section>

      {/* evodata in numbers — the same block as on the home page */}
      <Metrics />

      {/* Why choose evodata — node 9329:3677 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading>{whyChoose.title}</SectionHeading>
          <FeatureCards cards={whyChoose.cards} variant="object" />
        </Container>
      </section>

      {/* Quote and video — shared blocks */}
      <Quote />
      <VideoSection />

      {/* AI Implementation Roadmaps — node 9329:4062, same as on the home page */}
      <Roadmaps />

      {/* Everything you need to now — node 9329:4121 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading className="max-w-[940px]">{faq.title}</SectionHeading>
          <Accordion items={faq.items} />
        </Container>
      </section>
    </>
  );
}
