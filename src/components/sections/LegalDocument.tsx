import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ContactLink } from "@/components/ui/ContactLink";
import { contacts, scramble } from "@/config/contacts";
import type { LegalBlock, LegalDocumentContent } from "@/content/en/legal";

/** Anchor for a section, so the contents list can link to it. */
const sectionId = (number: string) => `section-${number}`;

function Blocks({ blocks }: { blocks: readonly LegalBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="text-body text-base lg:text-lg">
            {block.text}
          </p>
        );

      case "subheading":
        return (
          <h3 key={index} className="text-ink pt-2 text-lg font-semibold">
            {block.text}
          </h3>
        );

      case "lines":
        return (
          <p key={index} className="text-body text-base lg:text-lg">
            {block.items.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        );

      case "bullets":
        return (
          <ul key={index} className="flex flex-col gap-3 pl-1">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/icon-dot.svg"
                  alt=""
                  aria-hidden="true"
                  className="mt-2.5 size-[6px] shrink-0"
                />
                <span className="text-body text-base lg:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        );

      case "link":
        return (
          <a
            key={index}
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand w-fit text-base underline underline-offset-4 transition-opacity hover:opacity-70 lg:text-lg"
          >
            {block.label}
          </a>
        );

      case "email":
        return (
          <ContactLink
            key={index}
            scheme="mailto"
            scrambled={scramble(contacts.dataProtectionEmail)}
            className="text-brand w-fit text-base underline underline-offset-4 transition-opacity hover:opacity-70 lg:text-lg"
          />
        );
    }
  });
}

/**
 * Layout of the legal pages (Privacy Policy, Terms of Service).
 *
 * These two are not in the Figma file, so the page is assembled from what the
 * rest of the site already uses: the brand-coloured band at the top (the header
 * is transparent with white text, so whatever sits under it has to be dark),
 * the breadcrumbs of the inner pages, and body copy at a size meant for reading
 * a long document rather than scanning a marketing section.
 */
export function LegalDocument({ doc }: { doc: LegalDocumentContent }) {
  return (
    <>
      <section className="bg-brand relative isolate overflow-hidden text-white">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-glow.svg"
            alt=""
            className="absolute top-0 left-[-16.46%] w-[171.18%] max-w-none -translate-y-[55%]"
          />
          <div className="absolute inset-x-0 top-0 h-[196px] bg-linear-to-b from-[rgba(42,57,218,0.8)] from-[13.662%] to-[rgba(42,57,218,0)] mix-blend-multiply" />
        </div>

        <Container className="relative pt-[104px] pb-14 lg:pt-[110px] lg:pb-20 lg:pl-[59px]">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="font-medium opacity-70 transition-opacity hover:opacity-100"
                >
                  EvoData
                </Link>
              </li>
              <li aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icon-slash.svg" alt="" className="size-5" />
              </li>
              <li aria-current="page" className="font-semibold">
                {doc.breadcrumb}
              </li>
            </ol>
          </nav>

          <h1 className="mt-8 font-serif text-[36px] leading-[1.05] sm:text-[48px] lg:mt-12 lg:text-[64px] lg:leading-[64px]">
            {doc.title}
          </h1>
          <p className="mt-4 text-base opacity-80 lg:text-lg">
            {doc.effectiveDate}
          </p>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Contents. Sticky on desktop — these documents run long. */}
          <nav
            aria-label="Contents"
            className="shrink-0 lg:sticky lg:top-8 lg:h-fit lg:w-[300px]"
          >
            <ol className="flex flex-col gap-3 border-t border-gray-300 pt-6 text-base">
              {doc.sections.map((section) => (
                <li key={section.number}>
                  <a
                    href={`#${sectionId(section.number)}`}
                    className="text-body hover:text-brand transition-colors"
                  >
                    <span className="text-gray-400">{section.number}. </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex max-w-[892px] min-w-0 flex-col gap-4">
            {doc.intro.map((text) => (
              <p key={text} className="text-body text-lg lg:text-xl">
                {text}
              </p>
            ))}

            {doc.sections.map((section) => (
              <section
                key={section.number}
                id={sectionId(section.number)}
                // Keeps the heading clear of the header when jumped to.
                className="flex scroll-mt-24 flex-col gap-4 pt-8"
              >
                <h2 className="text-ink text-xl font-semibold lg:text-[24px] lg:leading-8">
                  <span className="text-gray-400">{section.number}. </span>
                  {section.title}
                </h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
