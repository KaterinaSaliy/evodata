/**
 * Контент сторінки FAQ.
 * Макет: desktop node 9376:6108, mobile node 9416:107603.
 */
export const faq = {
  hero: {
    breadcrumb: "Frequently Asked Questions",
    title: "The creative tech-force \nbehind tomorrow’s companies.",
    subtitle:
      "We believe in technology. Yet, we also believe that this must \nbe navigated by the human mind and heart.",
  },

  title: "Frequently Asked Questions",

  /**
   * Теми ліворуч. У макеті розкрито контент лише першої —
   * решта підписів є, але текстів до них немає (див. README).
   */
  topics: [
    "Our Team Is Already Overloaded",
    "AI without disrupting production",
    "Validate first, invest later",
    "Enterprise AI without compliance risk",
    "Reduce operational costs, increase capacity, and free employees for higher-value work",
    "How are data selected and analyzed to build effective data science solutions",
    "What technologies and tools are used to deliver data science solutions",
  ],

  activeTopic: {
    question: "How can we explore AI without slowing down existing projects?",
    answer:
      "Hiring AI engineers and bringing them up to speed on your business can take months or even years. We help you move faster by quickly augmenting your team and delivering a Proof of Concept (PoC) before committing to a full-scale production rollout.",
    items: [
      {
        title: "When Is This Relevant?",
        bullets: [
          "Your product roadmap is already packed, and new initiatives are waiting in line.",
          "Your team lacks in-house expertise in Large Language Models (LLMs), RAG systems, or AI agents.",
          "You want to validate AI opportunities without making long-term hiring commitments.",
          "You need tangible results to present to stakeholders, management, or investors.",
        ],
      },
      { title: "What Do You Get?" },
      { title: "How We Help?" },
    ],
  },
} as const;

export type FaqContent = typeof faq;
