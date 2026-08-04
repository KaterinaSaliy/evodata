import Image from "next/image";
import { Container } from "./Container";

type BrandBandProps = {
  /** Heading; `\n` — line break from the design. */
  title: string;
};

/**
 * Brand band with the dotted globe — Figma node 9245:24503 (1440×693, #4264F6).
 * The globe merges two vector layers of the design into one raster asset with alpha.
 */
export function BrandBand({ title }: BrandBandProps) {
  return (
    <section className="bg-brand relative isolate overflow-hidden text-white">
      <Image
        src="/images/globe.webp"
        alt=""
        aria-hidden="true"
        width={1600}
        height={1611}
        sizes="(max-width: 1024px) 120vw, 70vw"
        className="pointer-events-none absolute -top-[10%] -right-[15%] w-[120%] max-w-none opacity-90 lg:w-[70%]"
      />

      <Container className="relative flex min-h-[420px] items-end py-16 lg:min-h-[693px] lg:py-24">
        <h2 className="max-w-[900px] font-serif text-[40px] leading-[1.05] whitespace-pre-line sm:text-[64px] lg:text-[96px]">
          {title}
        </h2>
      </Container>
    </section>
  );
}
