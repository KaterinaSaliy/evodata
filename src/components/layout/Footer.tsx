import Link from "next/link";
import { siteConfig } from "@/config/site";
import { contacts, scramble } from "@/config/contacts";
import { ContactLink } from "@/components/ui/ContactLink";
import { common } from "@/content/en/common";
import { Container } from "./Container";
import { Logo } from "./Logo";

const social = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Facebook", href: siteConfig.social.facebook },
];

/**
 * Site footer — node 9423:1481 (brand background, py 96).
 * Top row: CTA + contacts + navigation/social; bottom row: the large wordmark
 * (858×198 in the design) and the copyright line.
 */
export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <Container className="flex flex-col gap-14 py-16 lg:gap-[76px] lg:py-24">
        {/* Top row */}
        {/* 1147px is the row width in the design; max-w keeps narrow screens intact */}
        <div className="flex w-full flex-col gap-12 sm:flex-row sm:justify-between lg:max-w-[1147px]">
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-[109px]">
            {/* Call to action */}
            <p className="text-xl font-medium lg:w-[219px]">
              {common.footer.cta}
            </p>

            {/* Contacts */}
            <div className="flex flex-col gap-[11px] lg:w-[331px]">
              <p className="text-base font-semibold text-white/50">
                {common.footer.talkLabel}
              </p>
              <ContactLink
                scheme="tel"
                scrambled={scramble(contacts.phone)}
                scrambledHref={scramble(contacts.phoneHref)}
                label={common.contact.phoneLabel}
                copiedLabel={common.contact.copied}
                className="w-fit text-lg font-medium transition-opacity hover:opacity-80"
              />
              <ContactLink
                scheme="mailto"
                scrambled={scramble(contacts.email)}
                label={common.contact.emailLabel}
                copiedLabel={common.contact.copied}
                className="w-fit border-b border-white/70 pb-[13px] text-[28px] leading-[30px] font-medium transition-opacity hover:opacity-80 lg:text-[36px]"
              />
            </div>
          </div>

          {/* Navigation and social links */}
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

        {/* Bottom row: wordmark, legal links and copyright */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Logo className="w-full max-w-[858px]" />

          <div className="flex shrink-0 flex-col gap-2 text-base sm:w-[264px] sm:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-end">
              {siteConfig.legalNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="sm:text-right">{common.footer.rights}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
