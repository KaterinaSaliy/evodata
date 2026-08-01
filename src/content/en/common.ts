/**
 * Спільний контент (шапка/футер), який повторюється на всіх сторінках.
 * Винесення текстів сюди — частина архітектурної підтримки мультимовності:
 * для нової мови створюється аналогічний файл у `src/content/<locale>/`.
 */
export const common = {
  /** Футер — node 9423:1481. */
  footer: {
    ctaTitle: "Let's build \nthe future together!",
    ctaSubtitle: "Contact us today!",
    talkLabel: "Let’s talk",
    rights: "© 2024 evodata. All rights reserved.",
  },
} as const;

export type CommonContent = typeof common;
