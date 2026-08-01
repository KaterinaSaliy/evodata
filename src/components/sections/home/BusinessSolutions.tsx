import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { home } from "@/content/en/home";

/**
 * «AI Solutions for Business Growth and Operational Excellence» —
 * заголовок (node 9420:1366) + горизонтальний слайдер із 6 напрямів
 * (nodes 9420:1382, 1398, 1412, 1426, 1437, 1452).
 *
 * Слайдер реалізовано на нативному CSS scroll-snap: працює з тачпадом, свайпом
 * і клавіатурою, не тягне JS-бібліотек і не блокує рендер (важливо для Lighthouse).
 */
export function BusinessSolutions() {
  return (
    <section className="bg-surface-2 pt-16 lg:pt-24">
      <Container>
        <h2 className="text-ink lg:text-display-2xl max-w-[940px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
          {home.solutions.title}
        </h2>
      </Container>

      <div
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label={home.solutions.title}
      >
        {home.solutions.slides.map((slide) => (
          <article
            key={slide.number}
            className="w-full shrink-0 snap-start py-16 lg:py-24"
            aria-label={`${slide.number} — ${slide.title}`}
          >
            <Container>
              {/* Заголовок слайда + порядковий номер */}
              <div className="flex flex-col gap-8 lg:gap-[72px]">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-1.28px] sm:text-[44px] lg:text-[64px] lg:leading-[90px]">
                    {slide.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-ink shrink-0 text-[32px] leading-none tracking-[-1.44px] sm:text-[52px] lg:text-[72px] lg:leading-[90px]"
                  >
                    {slide.number}
                  </span>
                </div>
                <hr className="border-t border-gray-300" />
              </div>

              {/* Опис + ілюстрація */}
              <div className="mt-10 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:justify-between lg:gap-6">
                <div className="flex flex-col lg:min-h-[368px] lg:max-w-[765px] lg:flex-1">
                  <p className="text-body text-lg font-medium whitespace-pre-line lg:text-xl">
                    {slide.description}
                  </p>
                  <p
                    aria-hidden="true"
                    className="mt-8 text-lg font-medium text-black lg:mt-auto"
                  >
                    {home.solutions.scrollHint}
                  </p>
                </div>

                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={420}
                  height={368}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="h-[240px] w-full rounded-xl object-cover sm:h-[320px] lg:h-[368px] lg:w-[420px] lg:shrink-0"
                />
              </div>
            </Container>
          </article>
        ))}
      </div>
    </section>
  );
}
