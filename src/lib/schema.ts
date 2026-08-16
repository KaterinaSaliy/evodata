import type { FAQPage, Organization, WebSite, WithContext } from "schema-dts";
import { siteConfig } from "@/config/site";
import { faq } from "@/content/en/faq";

/**
 * Schema.org Organization for the home page and footer.
 *
 * `email` and `telephone` are deliberately absent: JSON-LD is the easiest thing
 * on a page for a harvester to read, so publishing them there would defeat the
 * obfuscation in `ContactLink`. Name, URL and address stay — they are what
 * search engines actually use here. `sameAs` waits for real profile URLs: it
 * means "the same organisation, elsewhere", and the links the footer used to
 * carry were the platforms' own home pages.
 */
export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Warschauer Platz 11-13",
      postalCode: "10245",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
  };
}

type FaqTopic = (typeof faq.topics)[number];

/**
 * The whole answer as one string: the lead paragraphs plus every block of the
 * accordion under them. One Question per topic — the block titles ("What Do You
 * Get?") repeat across topics, so emitting them as questions of their own would
 * hand search engines seven identical ones.
 */
function answerText(topic: FaqTopic): string {
  const parts: string[] = [...topic.answer];

  for (const item of topic.items as readonly {
    title: string;
    paragraphs?: readonly string[];
    bullets?: readonly string[];
    steps?: readonly string[];
    sections?: readonly {
      heading?: string;
      paragraphs?: readonly string[];
      definitions?: readonly { title: string; text: string }[];
      bullets?: readonly string[];
    }[];
  }[]) {
    const body = [
      ...(item.paragraphs ?? []),
      ...(item.bullets ?? []),
      ...(item.steps ?? []),
      ...(item.sections ?? []).flatMap((section) => [
        ...(section.heading ? [section.heading] : []),
        ...(section.paragraphs ?? []),
        ...(section.definitions ?? []).map((d) => `${d.title}: ${d.text}`),
        ...(section.bullets ?? []),
      ]),
    ];
    parts.push(`${item.title} ${body.join(" ")}`.trim());
  }

  return parts.join(" ");
}

/**
 * Schema.org FAQPage — question/answer markup for rich search results.
 * All seven topics of the page, each with its full answer.
 */
export function faqSchema(): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.topics.map((topic) => ({
      "@type": "Question" as const,
      name: topic.question,
      acceptedAnswer: { "@type": "Answer" as const, text: answerText(topic) },
    })),
  };
}

/** Schema.org WebSite. */
export function websiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}
