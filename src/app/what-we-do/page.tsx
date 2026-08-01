import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { BrandBand } from "@/components/layout/BrandBand";
import { Accordion } from "@/components/ui/Accordion";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { TechLogos } from "@/components/ui/TechLogos";
import { TopicList } from "@/components/ui/TopicList";
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

/** Сторінка What We Do — Figma node 9239:708. */
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

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <TopicList
              items={customSolutions.topics}
              className="shrink-0 lg:w-[459px]"
            />

            <ul className="flex min-w-0 flex-1 flex-col gap-[14px]">
              {customSolutions.activeItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/icon-bullet.svg"
                    alt=""
                    aria-hidden="true"
                    className="mt-2 h-[18px] w-[6px] shrink-0"
                  />
                  <span className="text-body text-lg lg:text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Ряд логотипів — node 9241:144 */}
      <section className="bg-surface pb-16 lg:pb-24">
        <Container>
          <TechLogos />
        </Container>
      </section>

      {/* Custom AI solutions for business — node 9320:77996 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading className="max-w-[940px]">
            {businessSolutions.title}
          </SectionHeading>
          <FeatureCards cards={businessSolutions.cards} variant="photo" />
        </Container>
      </section>

      {/* evodata in numbers — той самий блок, що й на головній */}
      <Metrics />

      {/* AI Implementation Roadmaps — node 9325:1161 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-[72px]">
          <SectionHeading className="max-w-[940px]">
            {roadmaps.title}
          </SectionHeading>

          <Tabs
            listClassName="lg:w-[459px]"
            items={roadmaps.tabs.map((tab) => ({
              label: tab.label,
              // вкладки без контенту в макеті лишаються неактивними
              panel:
                "intro" in tab ? (
                  <RoadmapPanel tab={tab as RoadmapTabContent} />
                ) : undefined,
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

      {/* Цитата — той самий блок, що й на головній */}
      <Quote />

      {/* Відео */}
      <VideoSection />

      {/* Брендова смуга з глобусом — node 9245:24503 */}
      <BrandBand title={band.title} />

      {/* Everything you need to now — node 9241:24297 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading className="max-w-[940px]">{faq.title}</SectionHeading>
          <Accordion items={faq.items} />
        </Container>
      </section>
    </>
  );
}
