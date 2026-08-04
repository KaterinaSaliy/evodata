import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { DragScroller } from "@/components/ui/DragScroller";
import { home } from "@/content/en/home";

const { automation } = home;

/**
 * «We develop and implement custom AI solutions…» — node 9165:260193.
 * Heading + strip of five solution areas (client copy deck
 * "Главная страница.pdf", section 5), dragged with the mouse.
 *
 * Deviation from the design (requested): the design card is horizontal —
 * portrait photo on the left, text on the right. Here the photo is landscape
 * on top with the text below.
 */
export function AutomationCarousel() {
  return (
    <section className="bg-surface-2 py-16 lg:py-24">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-ink lg:text-display-2xl max-w-[1013px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] whitespace-pre-line sm:text-[52px]">
          {automation.title.before}
          <em className="text-brand italic">{automation.title.accent}</em>
          {automation.title.after}
        </h2>
        <hr className="border-t border-gray-300" />
      </Container>

      <DragScroller
        ariaLabel={`${automation.title.before}${automation.title.accent}${automation.title.after}`}
        className="mt-10 flex gap-[23px] px-5 sm:px-8 lg:mt-16 lg:px-16"
      >
        {automation.cards.map((card) => (
          <article
            key={card.title}
            // On narrow screens the card is deliberately narrower than the
            // viewport so the next one peeks in — otherwise the strip reads as static.
            className="flex w-[min(600px,80vw)] shrink-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <Image
              src={card.image}
              alt=""
              width={600}
              height={338}
              sizes="(max-width: 768px) 80vw, 600px"
              className="aspect-16/9 w-full object-cover"
            />
            <div className="flex flex-col gap-4 px-6 py-8 sm:px-10 sm:py-10">
              <h3 className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.5px] sm:text-[36px] sm:leading-[44px]">
                {card.title}
              </h3>
              <p className="text-body text-base font-medium sm:text-lg">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </DragScroller>
    </section>
  );
}
