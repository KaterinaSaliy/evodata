import { Container } from "@/components/layout/Container";
import { home } from "@/content/en/home";

/**
 * Quote "Technology and innovation…" — node 9318:77595.
 * Design: Gray/50 background, py 96, heading 72/90 at 940, text 20/30 at 892.
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
