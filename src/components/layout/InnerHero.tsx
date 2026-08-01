import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

type HeroAction = {
  label: string;
  href: string;
};

type InnerHeroProps = {
  /** Підпис поточної сторінки у хлібних крихтах. */
  breadcrumb: string;
  /** Заголовок; `\n` — перенос рядка з макета. */
  title: string;
  /** Підзаголовок; `\n` — перенос рядка з макета. */
  subtitle: string;
  /** 3D-об'єкт праворуч. За замовчуванням — об'єкт зі сторінки FAQ. */
  image?: string;
  /** Кнопки заклику (є, наприклад, на What We Do). */
  actions?: readonly HeroAction[];
};

/**
 * Герой внутрішніх сторінок — Figma node 9376:5911 (1440×600, фон #4264F6).
 * Спільний для What We Do / Industries / About Us / FAQ: фонове коло, повернутий
 * 3D-об'єкт, затемнення під шапкою, хлібні крихти, заголовок і підзаголовок.
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
      {/* --- Фонові шари --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Радіальне коло (той самий ассет, що й на головній) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-glow.svg"
          alt=""
          className="absolute top-0 left-[-16.46%] w-[171.18%] max-w-none -translate-y-[40%]"
        />

        {/* 3D-об'єкт, повернутий на -83.16° (node 9376:6279) */}
        {/* aspect-square + ширина: `size-[%]` рахує відсотки окремо від ширини
            й висоти секції, через що квадратний об'єкт спотворювався. */}
        <div className="absolute top-[-30%] left-[35%] flex aspect-square w-[97.8%] items-center justify-center lg:top-[-457px] lg:w-[1408px]">
          <Image
            src={image}
            alt=""
            width={1600}
            height={1600}
            priority
            // Реальний розмір: 97.8% ширини секції × 89.9% ≈ 88vw на всіх екранах.
            // Завищене значення змушувало браузер тягнути надто великий варіант (LCP).
            sizes="88vw"
            className="h-auto w-[89.9%] max-w-none -rotate-[83.16deg]"
          />
        </div>

        {/* Затемнення під шапкою */}
        <div className="absolute inset-x-0 top-0 h-[196px] bg-linear-to-b from-[rgba(42,57,218,0.8)] from-[13.662%] to-[rgba(42,57,218,0)] mix-blend-multiply" />
      </div>

      {/* --- Контент --- */}
      <Container className="relative pt-[104px] pb-16 lg:h-[600px] lg:pt-0 lg:pb-0 lg:pl-[59px]">
        {/* Хлібні крихти (node 9376:5965) */}
        <nav aria-label="Breadcrumb" className="lg:absolute lg:top-[110px]">
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

        {/* Заголовок і підзаголовок (node 9376:5961) */}
        <div className="mt-8 flex max-w-[828px] flex-col gap-5 lg:absolute lg:top-[247px] lg:mt-0 lg:w-[828px]">
          <h1 className="font-serif text-[36px] leading-[1.05] whitespace-pre-line sm:text-[48px] lg:text-[64px] lg:leading-[64px]">
            {title}
          </h1>
          <p className="text-lg whitespace-pre-line lg:text-xl">{subtitle}</p>

          {actions?.length ? (
            <div className="mt-4 flex flex-wrap gap-4">
              {actions.map((action, index) => (
                <Button
                  key={action.href}
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
