import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

type HeroAction = {
  label: string;
  href: string;
};

type InnerHeroProps = {
  /** Label of the current page in the breadcrumbs. */
  breadcrumb: string;
  /** Heading; `\n` — line break from the design. */
  title: string;
  /** Subheading; `\n` — line break from the design. */
  subtitle: string;
  /** 3D object on the right. Defaults to the one from the FAQ page. */
  image?: string;
  /** Call-to-action buttons (present on What We Do, for example). */
  actions?: readonly HeroAction[];
};

/**
 * Hero of the inner pages — Figma node 9376:5911 (1440×600, #4264F6).
 * Shared by What We Do / Industries / About Us / FAQ: background circle, rotated
 * 3D object, gradient under the header, breadcrumbs, heading and subheading.
 */
export function InnerHero({
  breadcrumb,
  title,
  subtitle,
  image = "/images/glass-inner-hero.webp",
  actions,
}: InnerHeroProps) {
  return (
    <section className="bg-brand relative isolate overflow-hidden text-white">
      {/* --- Background layers --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Radial circle (the same asset as on the home page) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-glow.svg"
          alt=""
          className="absolute top-0 left-[-16.46%] w-[171.18%] max-w-none -translate-y-[40%]"
        />

        {/* 3D object, rotated by -83.16° (node 9376:6279) */}
        {/* aspect-square plus width: `size-[%]` resolves percentages against
            width and height separately, which distorted the square object. */}
        <div className="absolute top-[-30%] left-[35%] flex aspect-square w-[97.8%] items-center justify-center lg:top-[-457px] lg:w-[1408px]">
          <Image
            src={image}
            alt=""
            width={1600}
            height={1600}
            priority
            // Real size: 97.8% of the section width × 89.9% ≈ 88vw on every screen.
            // An overstated value made the browser fetch too large a variant (LCP).
            sizes="88vw"
            className="h-auto w-[89.9%] max-w-none -rotate-[83.16deg]"
          />
        </div>

        {/* Gradient under the header */}
        <div className="absolute inset-x-0 top-0 h-[196px] bg-linear-to-b from-[rgba(42,57,218,0.8)] from-[13.662%] to-[rgba(42,57,218,0)] mix-blend-multiply" />
      </div>

      {/* --- Content --- */}
      {/* The design frame is 600px tall with the breadcrumbs at 110 and the
          heading at 247. Those are paddings and margins rather than absolute
          offsets, so a heading longer than the two lines of the design pushes
          the hero down instead of spilling out of it (What We Do). */}
      <Container className="relative pt-[104px] pb-16 lg:min-h-[600px] lg:pt-[110px] lg:pl-[59px]">
        {/* Breadcrumbs (node 9376:5965) */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-3 text-sm">
            <li>
              <Link
                href="/"
                className="font-medium opacity-70 transition-opacity hover:opacity-100"
              >
                EvoData
              </Link>
            </li>
            <li aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icon-slash.svg" alt="" className="size-5" />
            </li>
            <li aria-current="page" className="font-semibold">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        {/* Heading and subheading (node 9376:5961) */}
        <div className="mt-8 flex max-w-[828px] flex-col gap-5 lg:mt-[117px] lg:w-[828px]">
          <h1 className="font-serif text-[36px] leading-[1.05] whitespace-pre-line sm:text-[48px] lg:text-[64px] lg:leading-[64px]">
            {title}
          </h1>
          <p className="text-lg whitespace-pre-line lg:text-xl">{subtitle}</p>

          {actions?.length ? (
            <div className="mt-4 flex flex-wrap gap-4">
              {actions.map((action, index) => (
                <Button
                  // Not by href: both buttons in the What We Do hero point at
                  // the same anchor, so the keys would collide.
                  key={action.label}
                  href={action.href}
                  variant={index === 0 ? "primary" : "secondary"}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
