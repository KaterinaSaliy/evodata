/**
 * Internationalisation config.
 *
 * The spec asks for *architectural* multilingual support, not a full
 * implementation. Only the `en` locale is active for now, but all copy lives
 * in `src/content/<locale>/*` and the language switcher (`LanguageSwitcher`)
 * reads the list from here. Adding a language = add a locale here plus the
 * matching content files (and a `[lang]` route segment if needed).
 */
export const i18n = {
  locales: ["en"],
  defaultLocale: "en",
} as const;

export type Locale = (typeof i18n.locales)[number];

/** Human-readable locale labels for the UI (language switcher). */
export const localeLabels: Record<Locale, string> = {
  en: "Eng",
};
