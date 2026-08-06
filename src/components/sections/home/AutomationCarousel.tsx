import { Container } from "@/components/layout/Container";
import { CardSlider } from "@/components/ui/CardSlider";
import { home } from "@/content/en/home";

const { automation } = home;
const heading = `${automation.title.before}${automation.title.accent}${automation.title.after}`;

/**
 * "We develop and implement custom AI solutions…" — node 9165:260193.
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

      <CardSlider
        cards={automation.cards}
        ariaLabel={heading}
        cardWidth="600px"
        className="mt-10 lg:mt-16"
      />
    </section>
  );
}
