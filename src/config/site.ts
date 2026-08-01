/**
 * Глобальна структурна конфігурація сайту: бренд, контакти, навігація, соцмережі.
 * Тексти-підписи навігації тут наведені англійською (поточна локаль); при
 * додаванні мов їх слід перенести у словники контенту (див. `src/config/i18n.ts`).
 */

/** Випадне підменю пункту головного меню (nodes 9247:100973, 9254:101016). */
export type NavMenu = {
  /** Заголовок картки ліворуч. */
  title: string;
  description: string;
  image: string;
  /**
   * Пункти підменю. Окремих сторінок під них у макеті немає,
   * тому всі ведуть на батьківську сторінку розділу.
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
  /** Дефолтний <title> та OG-заголовок. */
  title: "EvoData — From Data Audit to Enterprise AI Solutions",
  description:
    "EvoData designs and delivers custom AI solutions and system engineering — from data audit and machine learning to enterprise-grade AI platforms.",
  url: siteUrl,

  contacts: {
    email: "hello@evodata.com",
    phone: "(123) 098-654",
    address: "Warschauer Platz 11-13, 10245 Berlin",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  /** Головна навігація (шапка). Два пункти мають випадне підменю. */
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
   * Навігація у футері.
   * Окремої сторінки Contact у макеті немає — блок «Get in touch» розміщений
   * на About us, тому посилання веде на його якір.
   */
  footerNav: [
    { label: "What we do", href: "/what-we-do" },
    { label: "Industries", href: "/industries" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/about#contact" },
    { label: "FAQ", href: "/faq" },
  ] satisfies NavItem[],
} as const;

export type SiteConfig = typeof siteConfig;
