import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { Accordion } from "@/components/ui/Accordion";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { RichBlocks, type RichBlock } from "@/components/ui/RichBlocks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { Metrics } from "@/components/sections/home/Metrics";
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

          <Tabs
            listClassName="lg:w-[459px]"
            items={customSolutions.topics.map((topic) => ({
              label: topic.label,
              panel: (
                <RichBlocks
                  blocks={[{ type: "bullets", items: topic.items }]}
                />
              ),
            }))}
          />
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

          <div className="flex max-w-[892px] flex-col gap-6">
            <h3 className="text-ink text-xl font-semibold lg:text-[24px] lg:leading-8">
              {businessValue.outcomes.title}
            </h3>
            <RichBlocks
              blocks={[
                { type: "bullets", items: businessValue.outcomes.items },
                { type: "paragraph", text: businessValue.outcomes.closing },
              ]}
            />
          </div>
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
              panel: <RichBlocks blocks={tab.blocks as readonly RichBlock[]} />,
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
                    ...group.paragraphs.map((text) => ({
                      type: "paragraph" as const,
                      text,
                    })),
                    { type: "bullets", items: group.items },
                  ]}
                />
              </div>

              <Image
                src={group.image}
                alt=""
                width={720}
                height={888}
                sizes="(max-width: 460px) 100vw, 420px"
                // 420×480 is the frame of the design, kept as a ratio: below
                // `lg` the picture takes the whole width, and a fixed height
                // there turned the frame landscape, so `object-cover` cut the
                // object out of these portrait renders. The width is capped at
                // the designed 420 so a tablet does not blow the object up to
                // the full column either.
                className="aspect-420/480 mx-auto w-full max-w-[420px] rounded-xl object-cover lg:mx-0 lg:shrink-0"
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

      {/* Video — shared block. The quote that used to sit above it is now the
          heading of the hero, so it is not repeated here. */}
      <VideoSection />

      {/* AI Implementation Roadmaps — node 9329:4062, same as on the home page */}
      <Roadmaps />

      {/* Everything you need to know — node 9329:4121 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading className="max-w-[940px]">{faq.title}</SectionHeading>
          <Accordion items={faq.items} />
        </Container>
      </section>
    </>
  );
}
