import { Container } from "@/components/layout/Container";
import { home } from "@/content/en/home";

/**
 * Цитата «Technology and innovation…» — node 9318:77595.
 * Макет: фон Gray/50, py 96, заголовок 72/90 шириною 940, текст 20/30 шириною 892.
 */
export function Quote() {
  return (
    <section className="bg-surface-2 py-16 lg:py-24">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-ink max-w-[940px] font-serif text-[36px] leading-[1.15] tracking-[-1.44px] sm:text-[52px] lg:text-[72px] lg:leading-[90px]">
          {home.quote.title}
        </h2>
        <p className="text-body max-w-[892px] text-lg font-medium lg:text-xl">
          {home.quote.body}
        </p>
      </Container>
    </section>
  );
}
