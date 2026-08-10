import Image from "next/image";
import { Container } from "./Container";

type BrandBandProps = {
  /** Heading; `\n` — line break from the design. */
  title: string;
  /** Supporting line under the heading — present on About Us (node 9337:22561). */
  note?: string;
};

/**
 * Brand band with the dotted globe — Figma nodes 9245:24503 (What We Do) and
 * 9337:12684 (About Us): both 1440×693 on #4264F6, with the "e data v o"
 * wordmark spread across the top and the heading at the bottom.
 * The globe merges two vector layers of the design into one raster asset with alpha.
 */
export function BrandBand({ title, note }: BrandBandProps) {
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

      <Container className="relative flex min-h-[520px] flex-col justify-end pt-28 pb-16 lg:min-h-[693px] lg:pt-[76px] lg:pb-[74px]">
        {/* "e data v o" wordmark, spread edge to edge (node 9337:22551) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 top-14 sm:inset-x-8 lg:inset-x-16 lg:top-[76px]"
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="/images/mark-e.svg"
            alt=""
            className="absolute top-0 left-0 size-12 lg:h-[138px] lg:w-[138px]"
          />
          <img
            src="/images/logo-data.svg"
            alt=""
            className="absolute top-3 left-[65px] h-6 w-[52px] lg:top-[37px] lg:left-[185px] lg:h-[70px] lg:w-[151px]"
          />
          <img
            src="/images/mark-v.svg"
            alt=""
            className="absolute top-0 left-[44.66%] size-12 lg:h-[138px] lg:w-[140px]"
          />
          <img
            src="/images/mark-o.svg"
            alt=""
            className="absolute top-0 right-0 size-12 lg:h-[141px] lg:w-[140px]"
          />
          {/* eslint-enable @next/next/no-img-element */}
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <h2 className="lg:text-display-2xl max-w-[1100px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] whitespace-pre-line sm:text-[52px]">
            {title}
          </h2>
          {note ? (
            <p className="max-w-[892px] text-lg lg:text-xl">{note}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
