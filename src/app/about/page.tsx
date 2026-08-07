import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { InnerHero } from "@/components/layout/InnerHero";
import { BrandBand } from "@/components/layout/BrandBand";
import { ContactLink } from "@/components/ui/ContactLink";
import { DragScroller } from "@/components/ui/DragScroller";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { RichBlocks, type RichBlock } from "@/components/ui/RichBlocks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "@/components/sections/home/Quote";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { about } from "@/content/en/about";
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
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading className="max-w-[940px]">
              {technologies.title}
            </SectionHeading>
            <p className="text-body max-w-[892px] text-lg lg:text-xl">
              {technologies.intro}
            </p>
          </div>

          {/* Stack table — scrolls horizontally on narrow screens */}
          <div className="no-scrollbar overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  {technologies.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="text-body pb-4 text-base font-medium tracking-wide uppercase"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {technologies.rows.map((row) =>
                  row.technologies.map((tech, index) => (
                    <tr
                      key={tech.name}
                      className="border-b border-gray-200 align-top"
                    >
                      {index === 0 ? (
                        <th
                          scope="row"
                          rowSpan={row.technologies.length}
                          className="text-ink w-[24%] py-6 pr-6 text-lg font-semibold lg:text-xl"
                        >
                          {row.category}
                        </th>
                      ) : null}
                      <td className="text-ink w-[26%] py-6 pr-6 text-lg lg:text-xl">
                        {tech.name}
                      </td>
                      <td className="text-body py-6 text-base lg:text-lg">
                        {tech.purpose}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>

          {/* Engineering Principles */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[48px] lg:leading-[60px]">
                {technologies.principles.title}
              </h3>
              <RichBlocks
                blocks={[
                  { type: "paragraph", text: technologies.principles.intro },
                  {
                    type: "subheading",
                    text: technologies.principles.benefitsTitle,
                  },
                  {
                    type: "bullets",
                    items: technologies.principles.benefits,
                  },
                  { type: "paragraph", text: technologies.principles.closing },
                ]}
              />
            </div>

            <Image
              src={technologies.principles.image}
              alt=""
              width={720}
              height={896}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="h-[280px] w-full rounded-xl object-cover sm:h-[400px] lg:h-[560px] lg:w-[420px] lg:shrink-0"
            />
          </div>
        </Container>
      </section>

      {/* Brand band with the globe — node 9337:12684 */}
      <BrandBand title={band.title} />

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
          className="mt-10 flex gap-6 px-4 sm:px-8 lg:mt-16 lg:px-16"
        >
          {inDemand.cards.map((card) => (
            <article
              key={card.title}
              className="flex w-[320px] shrink-0 gap-6 sm:w-[720px] lg:w-[950px]"
            >
              <Image
                src={card.image}
                alt=""
                width={840}
                height={1608}
                sizes="420px"
                className="hidden h-[804px] w-[420px] shrink-0 rounded-xl object-cover sm:block"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-6">
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

          {/* "DRAG" hint card */}
          <div className="relative h-[804px] w-[419px] shrink-0 overflow-hidden rounded-xl shadow-sm">
            <Image
              src={inDemand.dragImage}
              alt=""
              width={840}
              height={1608}
              sizes="419px"
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-[47px] flex size-24 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-semibold text-black"
            >
              {inDemand.dragHint}
            </span>
          </div>
        </DragScroller>

        <Container className="mt-12 flex flex-col gap-6 lg:mt-16">
          <h3 className="text-ink max-w-[940px] font-serif text-[32px] leading-[1.15] tracking-[-0.02em] sm:text-[44px] lg:text-[60px] lg:leading-[72px]">
            {inDemand.outro.title}
          </h3>
          <p className="text-body max-w-[892px] text-lg lg:text-xl">
            {inDemand.outro.text}
          </p>
        </Container>
      </section>

      {/* Expanded solution areas — node 9372:1069 */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          {services.headings.map((heading) => (
            <SectionHeading key={heading}>{heading}</SectionHeading>
          ))}

          <div className="flex flex-col gap-6">
            <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[48px] lg:leading-[60px]">
              {services.llm.title}
            </h3>
            <p className="text-body max-w-[892px] text-lg lg:text-xl">
              {services.llm.intro}
            </p>
            <RichBlocks blocks={services.llm.blocks as readonly RichBlock[]} />
          </div>

          <SectionHeading>{services.trailingHeading}</SectionHeading>
        </Container>
      </section>

      {/* Why choose evodata — node 9337:12599 */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <Container className="flex flex-col gap-10 lg:gap-16">
          <SectionHeading>{whyChoose.title}</SectionHeading>
          <FeatureCards cards={whyChoose.cards} variant="object" />
        </Container>
      </section>

      {/* Quote and video — shared blocks */}
      <Quote />
      <VideoSection />
    </>
  );
}
