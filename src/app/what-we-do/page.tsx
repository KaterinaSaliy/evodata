import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { BrandBand } from "@/components/layout/BrandBand";
import { Accordion } from "@/components/ui/Accordion";
import { CardSlider } from "@/components/ui/CardSlider";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { RichBlocks } from "@/components/ui/RichBlocks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { TechLogos } from "@/components/ui/TechLogos";
import {
  RoadmapPanel,
  type RoadmapTabContent,
} from "@/components/sections/RoadmapPanel";
import { Metrics } from "@/components/sections/home/Metrics";
import { Quote } from "@/components/sections/home/Quote";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { whatWeDo } from "@/content/en/what-we-do";

export const metadata: Metadata = {
  title: "What we do — AI services and custom AI solutions",
  description:
    "A full spectrum of AI services: data and integration, machine learning, analytics, automation and AI-powered applications, scoped to your industry and infrastructure.",
  alternates: { canonical: "/what-we-do" },
  openGraph: {
    title: "What we do | EvoData",
    description:
      "A full spectrum of AI services scoped to your industry and infrastructure.",
    url: "/what-we-do",
  },
};

const { customSolutions, businessSolutions, roadmaps, whyChoose, band, faq } =
  whatWeDo;

/** What We Do page — Figma node 9239:708. */
export default function WhatWeDoPage() {
  return (
    <>
      <InnerHero {...whatWeDo.hero} image="/images/glass-wwd-hero.webp" />

      {/* Our custom solutions — node 9318:77618 */}
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

      {/* Logo row — node 9241:144 */}
      <section className="bg-surface pb-16 lg:pb-24">
        <Container>
          <TechLogos />
        </Container>
      </section>

      {/* Custom AI solutions for business — node 9320:77996 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container>
          <SectionHeading className="max-w-[940px]">
            {businessSolutions.title}
          </SectionHeading>
        </Container>

        <CardSlider
          cards={businessSolutions.cards}
          ariaLabel={businessSolutions.title}
          controls
          className="mt-10 lg:mt-16"
        />
      </section>

      {/* evodata in numbers — the same block as on the home page */}
      <Metrics />

      {/* AI Implementation Roadmaps — node 9325:1161 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-[72px]">
          <SectionHeading className="max-w-[940px]">
            {roadmaps.title}
          </SectionHeading>

          {/* Intro above the tabs — frame 9330:5354 */}
          <div className="max-w-[892px]">
            <RichBlocks
              blocks={[
                { type: "kicker", text: roadmaps.intro.kicker },
                { type: "lead", text: roadmaps.intro.lead },
                ...roadmaps.intro.paragraphs.map(
                  (text) => ({ type: "paragraph", text }) as const,
                ),
              ]}
            />
          </div>

          <Tabs
            variant="inline"
            label={roadmaps.title}
            items={roadmaps.tabs.map((tab) => ({
              label: tab.label,
              panel: <RoadmapPanel tab={tab as RoadmapTabContent} />,
            }))}
          />
        </Container>
      </section>

      {/* Why choose evodata — node 9330:4369 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading>{whyChoose.title}</SectionHeading>
          <FeatureCards cards={whyChoose.cards} variant="object" />
        </Container>
      </section>

      {/* Quote — the same block as on the home page */}
      <Quote />

      {/* Video */}
      <VideoSection />

      {/* Brand band with the globe — node 9245:24503 */}
      <BrandBand title={band.title} />

      {/* Everything you need to know — node 9241:24297 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading className="max-w-[940px]">{faq.title}</SectionHeading>
          <Accordion items={faq.items} />
        </Container>
      </section>
    </>
  );
}
