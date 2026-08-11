import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { BrandBand } from "@/components/layout/BrandBand";
import { ContactLink } from "@/components/ui/ContactLink";
import { DragScroller } from "@/components/ui/DragScroller";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { RichBlocks, type RichBlock } from "@/components/ui/RichBlocks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { about } from "@/content/en/about";
import { common } from "@/content/en/common";
import { contacts, scramble } from "@/config/contacts";

export const metadata: Metadata = {
  title: "About us — software engineering services",
  description:
    "EvoData builds secure, scalable software, data and AI systems. Our technology stack, delivery processes and engineering principles — and how to get in touch.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About us | EvoData",
    description:
      "Our technology stack, delivery processes and engineering principles.",
    url: "/about",
  },
};

const { contact, technologies, band, inDemand, services, whyChoose } = about;
const { principles } = technologies;

/** About Us page — Figma node 9331:12591. */
export default function AboutPage() {
  return (
    <>
      <InnerHero {...about.hero} image="/images/glass-about-hero.webp" />

      {/* Get in touch — node 9373:12959. Anchor for the footer "Contact" link. */}
      <section id="contact" className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-8 lg:gap-12">
          <SectionHeading>{contact.title}</SectionHeading>
          <p className="text-body max-w-[892px] text-lg lg:text-xl">
            {contact.intro}
          </p>

          <dl className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <dt className="text-ink text-lg font-semibold lg:text-xl">
                {contact.phoneLabel}
              </dt>
              <dd className="text-ink text-[28px] leading-tight font-medium lg:text-[36px]">
                <ContactLink
                  scheme="tel"
                  scrambled={scramble(contacts.phone)}
                  scrambledHref={scramble(contacts.phoneHref)}
                  label={common.contact.phoneLabel}
                  copiedLabel={common.contact.copied}
                  className="inline-block underline-offset-4 transition-opacity hover:underline hover:opacity-70"
                />
              </dd>
            </div>

            <div className="flex flex-col gap-2">
              <dt className="text-ink text-lg font-semibold lg:text-xl">
                {contact.mailLabel}
              </dt>
              <dd className="text-ink text-[28px] leading-tight font-medium lg:text-[36px]">
                <ContactLink
                  scheme="mailto"
                  scrambled={scramble(contacts.email)}
                  label={common.contact.emailLabel}
                  copiedLabel={common.contact.copied}
                  className="inline-block underline-offset-4 transition-opacity hover:underline hover:opacity-70"
                />
              </dd>
            </div>

            <div className="flex flex-col gap-2">
              <dt className="text-ink text-lg font-semibold lg:text-xl">
                {contact.addressLabel}
              </dt>
              <dd className="text-body text-lg whitespace-pre-line lg:text-xl">
                {contact.address}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Technologies & Delivery Processes — node 9337:12665 */}
      <section className="bg-surface pt-16 lg:pt-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading className="max-w-[940px]">
              {technologies.title}
            </SectionHeading>
            <p className="text-body max-w-[892px] text-lg lg:text-xl">
              {technologies.intro}
            </p>
          </div>

          {/* Stack table — node 9372:362. Grey header split by hairline gaps,
              a full-width rule between categories and a short one (from the
              second column) between the technologies of one category.
              Scrolls horizontally on narrow screens. */}
          <div className="no-scrollbar overflow-x-auto">
            <table className="w-full min-w-[860px] table-fixed border-separate border-spacing-0 text-left">
              <colgroup>
                <col className="w-[29%]" />
                <col className="w-[29%]" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  {technologies.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="text-ink border-r-2 border-white bg-gray-100 px-6 py-6 text-sm leading-6 font-semibold tracking-[0.06em] uppercase last:border-r-0"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {technologies.rows.map((row) =>
                  row.technologies.map((tech, index) => (
                    <tr key={tech.name} className="align-top">
                      {index === 0 ? (
                        <th
                          scope="row"
                          rowSpan={row.technologies.length}
                          className="text-ink border-t border-gray-300 px-6 py-6 text-xl font-normal"
                        >
                          {row.category}
                        </th>
                      ) : null}
                      <td className="text-ink border-t border-gray-300 px-6 py-6 text-xl">
                        {tech.name}
                      </td>
                      <td className="text-body border-t border-gray-300 px-6 py-6 text-lg leading-[30px]">
                        {tech.purpose}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </Container>

        {/* Engineering Principles — node 9372:754: text on the left half,
            the glass object bleeding off the right edge. */}
        <div className="bg-surface-2 mt-16 lg:mt-24">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
            <div className="flex flex-col gap-6 px-4 py-16 sm:px-8 lg:w-1/2 lg:py-24 lg:pr-20 lg:pl-16">
              <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[48px] lg:leading-[60px]">
                {principles.title}
              </h3>
              <RichBlocks
                blocks={[
                  { type: "paragraph", text: principles.intro },
                  { type: "subheading", text: principles.benefitsTitle },
                  { type: "bullets", items: principles.benefits },
                  { type: "paragraph", text: principles.closing },
                ]}
              />
            </div>

            <div className="relative h-[280px] overflow-hidden sm:h-[420px] lg:h-[896px] lg:w-1/2">
              <Image
                src={principles.image}
                alt=""
                width={1600}
                height={1607}
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="absolute top-[6%] left-1/2 h-[88%] w-auto max-w-none -translate-x-1/2 lg:top-[17%] lg:left-[20.6%] lg:h-auto lg:w-[95.8%] lg:translate-x-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand band with the globe — node 9337:12684 */}
      <BrandBand title={band.title} note={band.note} />

      {/* Our Most In-Demand AI Solutions — node 9337:12674 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-6">
          <SectionHeading className="max-w-[940px]">
            {inDemand.title}
          </SectionHeading>
          <p className="text-body max-w-[892px] text-lg lg:text-xl">
            {inDemand.intro}
          </p>
        </Container>

        <DragScroller
          ariaLabel={inDemand.title}
          controls
          style={{ "--card": "1232px" } as CSSProperties}
          className="strip-gutter mt-10 flex snap-x snap-mandatory gap-6 lg:mt-16"
        >
          {inDemand.cards.map((card) => (
            <article
              key={card.title}
              // Below `lg` the width matches the other strips on the site
              // (72vw, neighbours peeking); from `lg` it is the 1232px card of
              // the design, shrinking only when the window cannot hold it.
              className="flex w-[min(var(--card),72vw)] shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white lg:min-h-[804px] lg:w-[min(var(--card),86vw)]"
            >
              <div className="relative hidden w-[420px] shrink-0 lg:block">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="420px"
                  className="object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-6 p-6 sm:p-10 lg:py-14 lg:pr-[52px] lg:pl-[53px]">
                <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[48px] lg:leading-[60px]">
                  {card.title}
                </h3>
                <p className="text-body text-lg lg:text-xl">{card.lead}</p>
                {card.groups.map((group) => (
                  <RichBlocks
                    key={group.title}
                    blocks={[
                      { type: "subheading", text: group.title },
                      { type: "bullets", items: group.items },
                    ]}
                  />
                ))}
              </div>
            </article>
          ))}
        </DragScroller>

        <Container className="mt-12 flex flex-col gap-6 lg:mt-[72px]">
          {/* Display xl, a step below the section heading — node 9372:974 */}
          <h3 className="text-ink max-w-[940px] font-serif text-[32px] leading-[1.15] tracking-[-0.02em] sm:text-[44px] lg:text-[60px] lg:leading-[72px]">
            {inDemand.outro.title}
          </h3>
          <p className="text-body max-w-[892px] text-lg lg:text-xl">
            {inDemand.outro.text}
          </p>
        </Container>
      </section>

      {/* AI Agents / LLMs / Machine Learning — node 9372:1069.
          Each heading collapses; the row of tabs under it stays in place. */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          {services.sections.map((section, index) => (
            <Tabs
              key={section.title}
              variant="inline"
              heading={section.title}
              defaultOpen={index === 0}
              items={section.tabs.map((tab) => ({
                label: tab.label,
                panel: (
                  <RichBlocks blocks={tab.blocks as readonly RichBlock[]} />
                ),
              }))}
            />
          ))}
        </Container>
      </section>

      {/* Why choose evodata — node 9337:12599 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading>{whyChoose.title}</SectionHeading>
          <FeatureCards cards={whyChoose.cards} variant="object" />
        </Container>
      </section>

      {/* Video — node 9372:978 (the quote layer of that frame is hidden in Figma) */}
      <VideoSection />
    </>
  );
}
