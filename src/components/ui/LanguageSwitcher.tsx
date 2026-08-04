"use client";

import { i18n, localeLabels, type Locale } from "@/config/i18n";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
  /**
   * `inline` — text button in the header (node I9137:50072).
   * `panel`  — white select in the mobile menu (node 9419:1182).
   */
  variant?: "inline" | "panel";
};

/**
 * Language switcher. Only one locale is active — the spec asks for
 * architectural multilingual support only. Once there are more locales, this
 * component grows into a dropdown driven by `i18n.locales`.
 */
export function LanguageSwitcher({
  className,
  variant = "inline",
}: LanguageSwitcherProps) {
  const current = i18n.defaultLocale as Locale;

  return (
    <button
      type="button"
      aria-label="Change language"
      className={cn(
        variant === "inline" &&
          "inline-flex items-center gap-2 rounded-lg px-[18px] py-[10px] text-base font-semibold transition-opacity hover:opacity-80",
        variant === "panel" &&
          "text-ink flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-base font-medium",
        className,
      )}
    >
      {localeLabels[current]}
      {variant === "panel" ? <ChevronDownIcon className="size-5" /> : null}
    </button>
  );
}
