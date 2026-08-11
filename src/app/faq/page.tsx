import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Tabs } from "@/components/ui/Tabs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { faq } from "@/content/en/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about exploring AI, proofs of concept, delivery and the technologies EvoData uses.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | EvoData",
    description:
      "Answers to the most common questions about exploring AI, proofs of concept and delivery.",
    url: "/faq",
  },
};

/** FAQ page — Figma node 9376:6108. */
export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema()} />

      <InnerHero {...faq.hero} />

      {/* FAQ section — node 9376:6130 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <h2 className="text-ink lg:text-display-2xl font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
            {faq.title}
          </h2>

          {/* The side list (node 9376:6259) switches the panel: the deck fills
              all seven topics, the design draws the first one. */}
          <Tabs
            listClassName="lg:w-[389px]"
            items={faq.topics.map((topic) => ({
              label: topic.label,
              panel: (
                <div className="flex flex-col gap-8 lg:gap-12">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.96px] sm:text-[36px] lg:text-[48px] lg:leading-[60px]">
                      {topic.question}
                    </h3>
                    {topic.answer.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-body text-lg font-medium lg:text-xl"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <Accordion items={topic.items as readonly AccordionItem[]} />
                </div>
              ),
            }))}
          />
        </Container>
      </section>
    </>
  );
}
