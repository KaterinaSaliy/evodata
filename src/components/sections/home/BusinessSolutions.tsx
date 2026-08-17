import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { RichBlocks } from "@/components/ui/RichBlocks";
import { SlideDeck } from "@/components/ui/SlideDeck";
import { home } from "@/content/en/home";

/**
 * "AI Solutions for Business Growth and Operational Excellence" —
 * heading (node 9420:1366) + slider of 6 solution areas
 * (nodes 9420:1382, 1398, 1412, 1426, 1437, 1452 — states of one block in the design).
 *
 * The design hints at switching with a "(SCROLL)" label only; replaced with
 * explicit arrows and indicators, otherwise 5 of 6 areas go unnoticed.
 */
export function BusinessSolutions() {
  return (
    <section className="bg-surface-2 pt-16 pb-16 lg:pt-24 lg:pb-24">
      <Container>
        <h2 className="text-ink lg:text-display-2xl max-w-[940px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
          {home.solutions.title}
        </h2>
      </Container>

      <SlideDeck
        ariaLabel={home.solutions.title}
        labels={home.solutions.slides.map((slide) => slide.title)}
      >
        {home.solutions.slides.map((slide) => (
          <article
            key={slide.number}
            className="w-full shrink-0 snap-start pt-16 pb-10 lg:pt-24 lg:pb-16"
            aria-label={`${slide.number} — ${slide.title}`}
          >
            <Container>
              {/* Slide heading + ordinal number */}
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

              {/* Description + illustration */}
              <div className="mt-10 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:justify-between lg:gap-6">
                <div className="flex flex-col lg:min-h-[368px] lg:max-w-[765px] lg:flex-1">
                  <p className="text-body text-lg font-medium whitespace-pre-line lg:text-xl">
                    {slide.description}
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
      </SlideDeck>

      {/* "Business Impact" — client copy that closes the block; the design
          ends it with the slider. */}
      <Container className="flex flex-col gap-6 pt-4 lg:pt-8">
        <h3 className="text-ink text-xl font-semibold lg:text-[24px] lg:leading-8">
          {home.solutions.impact.title}
        </h3>
        <RichBlocks
          blocks={[{ type: "bullets", items: home.solutions.impact.items }]}
        />
      </Container>
    </section>
  );
}
