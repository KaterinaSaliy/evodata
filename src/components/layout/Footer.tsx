import Link from "next/link";
import { siteConfig } from "@/config/site";
import { common } from "@/content/en/common";
import { Container } from "./Container";
import { Logo } from "./Logo";

const social = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
];

/**
 * Футер сайту — node 9423:1481 (фон бренду, py 96).
 * Верхній ряд: CTA + контакти + навігація/соцмережі; нижній — великий вордмарк
 * (858×198 у макеті) і копірайт.
 */
export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <Container className="flex flex-col gap-14 py-16 lg:gap-[76px] lg:py-24">
        {/* Верхній ряд */}
        {/* 1147px — ширина ряду в макеті; max-w, щоб не переповнювати вужчі екрани */}
        <div className="flex w-full flex-col gap-12 sm:flex-row sm:justify-between lg:max-w-[1147px]">
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-[109px]">
            {/* Заклик */}
            <div className="flex flex-col gap-5 text-xl font-medium lg:w-[219px]">
              <p className="whitespace-pre-line">{common.footer.ctaTitle}</p>
              <p>{common.footer.ctaSubtitle}</p>
            </div>

            {/* Контакти */}
            <div className="flex flex-col gap-[11px] lg:w-[331px]">
              <p className="text-base font-semibold text-white/50">
                {common.footer.talkLabel}
              </p>
              <a
                href={`tel:${siteConfig.contacts.phone.replace(/[^\d+]/g, "")}`}
                className="text-lg font-medium transition-opacity hover:opacity-80"
              >
                {siteConfig.contacts.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contacts.email}`}
                className="w-fit border-b border-white/70 pb-[13px] text-[28px] leading-[30px] font-medium transition-opacity hover:opacity-80 lg:text-[36px]"
              >
                {siteConfig.contacts.email}
              </a>
            </div>
          </div>

          {/* Навігація та соцмережі */}
          <div className="flex flex-col gap-12 lg:w-[100px] lg:gap-[105px]">
            <nav className="flex flex-col gap-[3px] text-lg font-medium">
              {siteConfig.footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <ul className="flex flex-col gap-[6px] text-base font-medium">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                  >
                    {item.label}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon-arrow-up-right.svg"
                      alt=""
                      aria-hidden="true"
                      className="size-[9px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижній ряд: вордмарк і копірайт */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Logo className="w-full max-w-[858px]" />
          <p className="shrink-0 text-base sm:w-[264px] sm:text-right">
            {common.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
