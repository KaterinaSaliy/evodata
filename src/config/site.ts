/**
 * Global site structure: brand, contacts, navigation, social links.
 * Navigation labels are in English (the current locale); once more languages
 * are added they should move into the content dictionaries (see `src/config/i18n.ts`).
 */

/** Dropdown submenu of a main-menu item (nodes 9247:100973, 9254:101016). */
export type NavMenu = {
  /** Heading of the card on the left. */
  title: string;
  description: string;
  image: string;
  /**
   * Submenu items. The design has no dedicated pages for them,
   * so they all point at the parent section page.
   */
  items: readonly string[];
};

export type NavItem = {
  label: string;
  href: string;
  menu?: NavMenu;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://evodata.com";

export const siteConfig = {
  name: "EvoData",
  /** Default <title> and OG title. */
  title: "EvoData — From Data Audit to Enterprise AI Solutions",
  description:
    "EvoData designs and delivers custom AI solutions and system engineering — from data audit and machine learning to enterprise-grade AI platforms.",
  url: siteUrl,

  // Phone and e-mail are NOT here on purpose — they live in
  // `src/config/contacts.ts`, which must never reach a client component.
  // This file does (the header is interactive), so anything in it ends up in
  // the JS bundle where a harvester can read it.

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  /** Main navigation (header). Two items carry a dropdown submenu. */
  nav: [
    { label: "Home", href: "/" },
    {
      label: "What we do",
      href: "/what-we-do",
      menu: {
        title: "What We Do",
        description: "Discover the solutions we engineer for global businesses",
        image: "/images/nav/menu-what-we-do.webp",
        items: [
          "AI, Data & Integration Services",
          "Data Analytics & Business Intelligence",
          "AI & Machine Learning Solutions",
          "Database Engineering & Optimization",
          "Digital Transformation & Process Automation",
          "DevOps, Cloud & Infrastructure",
          "AI Strategy, Consulting & Governance",
          "AI-Powered Applications & User Experiences",
        ],
      },
    },
    {
      label: "Industries",
      href: "/industries",
      menu: {
        title: "Industries",
        description: "Explore the sectors we're reshaping through technology",
        image: "/images/nav/menu-industries.webp",
        items: [
          "E-commerce",
          "Finance & Banking",
          "Manufacturing",
          "Retail",
          "Logistics & Supply Chain",
          "EdTech & HRTech",
          "Healthcare",
          "Marketing",
        ],
      },
    },
    { label: "About us", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ] satisfies NavItem[],

  /**
   * Footer navigation.
   * The design has no separate Contact page — the "Get in touch" block lives
   * on About us, so the link points at its anchor.
   */
  footerNav: [
    { label: "What we do", href: "/what-we-do" },
    { label: "Industries", href: "/industries" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/about#contact" },
    { label: "FAQ", href: "/faq" },
  ] satisfies NavItem[],

  /**
   * Legal pages. They sit in the bottom row of the footer next to the
   * copyright — the usual place, and the GDPR expects the privacy policy to be
   * reachable from every page.
   */
  legalNav: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ] satisfies NavItem[],
} as const;

export type SiteConfig = typeof siteConfig;
