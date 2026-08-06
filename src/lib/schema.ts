import type { FAQPage, Organization, WebSite, WithContext } from "schema-dts";
import { siteConfig } from "@/config/site";
import { faq } from "@/content/en/faq";

/**
 * Schema.org Organization for the home page and footer.
 *
 * `email` and `telephone` are deliberately absent: JSON-LD is the easiest thing
 * on a page for a harvester to read, so publishing them there would defeat the
 * obfuscation in `ContactLink`. Name, URL, address and profiles stay — they are
 * what search engines actually use here.
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
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

/**
 * Schema.org FAQPage — question/answer markup for rich search results.
 * Only the pairs that have copy in the design are included.
 */
export function faqSchema(): WithContext<FAQPage> {
  const { activeTopic } = faq;
  const withAnswers = activeTopic.items.filter(
    (
      item,
    ): item is (typeof activeTopic.items)[0] & { bullets: readonly string[] } =>
      "bullets" in item &&
      Array.isArray(item.bullets) &&
      item.bullets.length > 0,
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: activeTopic.question,
        acceptedAnswer: { "@type": "Answer", text: activeTopic.answer },
      },
      ...withAnswers.map((item) => ({
        "@type": "Question" as const,
        name: item.title,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: item.bullets.join(" "),
        },
      })),
    ],
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
