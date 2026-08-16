/**
 * Shared copy (header/footer) repeated across every page.
 * Keeping it here is part of the architectural multilingual support:
 * a new language gets its own file under `src/content/<locale>/`.
 */
export const common = {
  /** Footer — node 9423:1481. */
  footer: {
    cta: "Contact us today!",
    talkLabel: "Let’s talk",
    rights: "© 2024 evodata. All rights reserved.",
  },

  /**
   * The phone and the e-mail are not in the markup (see `src/lib/scramble.ts`),
   * so the control that hands them over needs a name of its own.
   */
  contact: {
    phoneLabel: "Show and copy the phone number",
    emailLabel: "Show and copy the e-mail address",
    copied: "Copied",
  },

  /** The only name the floating control has — it is an icon otherwise. */
  backToTop: "Back to top",
} as const;

export type CommonContent = typeof common;
