import { Container } from "@/components/layout/Container";
import { home } from "@/content/en/home";

/**
 * Вступний блок «Tailored AI Solutions & System Engineering» — node 9313:293.
 * Макет: білий фон, py 96, заголовок 72/80 (Serif) шириною 940, текст 20/30 шириною 892.
 */
export function Intro() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-ink lg:text-display-2xl max-w-[940px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
          {home.intro.title}
        </h2>

        <p className="text-body max-w-[892px] text-lg font-medium lg:text-xl">
          {home.intro.body.before}
          <em className="text-brand font-serif text-[24px] italic lg:text-[28px]">
            {home.intro.body.accent}
          </em>
          {home.intro.body.after}
        </p>
      </Container>
    </section>
  );
}
