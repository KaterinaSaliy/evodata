/**
 * Конфіг інтернаціоналізації.
 *
 * ТЗ вимагає лише *архітектурну* підтримку мультимовності (не повну реалізацію).
 * Тому наразі активна одна локаль `en`, але вся текстова частина винесена в
 * `src/content/<locale>/*`, а перемикач мови (`LanguageSwitcher`) читає список
 * локалей звідси. Додавання мови = додати локаль сюди + відповідні файли контенту
 * (за потреби — сегмент маршруту `[lang]`, див. docs/ARCHITECTURE у README).
 */
export const i18n = {
  locales: ["en"],
  defaultLocale: "en",
} as const;

export type Locale = (typeof i18n.locales)[number];

/** Людяні підписи локалей для UI (перемикач мови). */
export const localeLabels: Record<Locale, string> = {
  en: "Eng",
};
