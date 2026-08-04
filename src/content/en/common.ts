/**
 * Shared copy (header/footer) repeated across every page.
 * Keeping it here is part of the architectural multilingual support:
 * a new language gets its own file under `src/content/<locale>/`.
 */
export const common = {
  /** Footer — node 9423:1481. */
  footer: {
    ctaTitle: "Let's build \nthe future together!",
    ctaSubtitle: "Contact us today!",
    talkLabel: "Let’s talk",
    rights: "© 2024 evodata. All rights reserved.",
  },
} as const;

export type CommonContent = typeof common;
