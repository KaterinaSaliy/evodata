/**
 * Global site structure: brand, contacts, navigation.
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
   * Submenu items. A plain string leads to the section page itself — the
   * design gives the topics of What We Do and Industries no pages of their
   * own. Where the item does have somewhere of its own to go (the sections of
   * About us), it carries its `href`.
   */
  items: readonly (string | { label: string; href: string })[];
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

  /** Main navigation (header). Every item but Home carries a dropdown submenu. */
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
    {
      label: "About us",
      href: "/about",
      menu: {
        title: "About Us",
        description: "See how we work, what we build with and who to talk to",
        image: "/images/nav/menu-about.webp",
        // The only menu whose items lead somewhere of their own: these are
        // the sections of the page, and each carries an id.
        items: [
          { label: "Get in touch", href: "/about#contact" },
          {
            label: "Technologies & Delivery Processes",
            href: "/about#technologies",
          },
          { label: "Engineering Principles", href: "/about#principles" },
          {
            label: "Our Most In-Demand AI Solutions",
            href: "/about#solutions",
          },
          { label: "Why choose evodata", href: "/about#why-evodata" },
        ],
      },
    },
    {
      label: "FAQ",
      href: "/faq",
      menu: {
        title: "FAQ",
        description: "Find answers to the questions we hear most often",
        image: "/images/nav/menu-faq.webp",
        // The seven topics of the page. The panel that answers them is picked
        // on the page itself, so these lead to it as a whole.
        items: [
          "Our Team Is Already Overloaded",
          "AI without disrupting production",
          "Validate first, invest later",
          "Enterprise AI without compliance risk",
          "Reduce operational costs, increase capacity, and free employees for higher-value work",
          "How are data selected and analyzed to build effective data science solutions",
          "What technologies and tools are used to deliver data science solutions",
        ],
      },
    },
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
