import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogos } from "@/components/ui/TechLogos";
import { home } from "@/content/en/home";

/**
 * «Our technology leaders» — node 9165:260126.
 * Design: white background, pt 96 / pb 128, heading 72/80, rule, row of 6 logos.
 */
export function TechnologyLeaders() {
  return (
    <section className="bg-surface pt-16 pb-20 lg:pt-24 lg:pb-32">
      <Container className="flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col gap-8 lg:gap-12">
          <SectionHeading>{home.techLeaders.title}</SectionHeading>
          <hr className="border-t border-gray-300" />
        </div>

        <TechLogos />
      </Container>
    </section>
  );
}
