import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { HeroHighlights } from "./HeroHighlights";
import { home } from "@/content/en/home";

/**
 * Home page hero.
 *   Desktop — node 9137:50045 (1440×824)
 *   Mobile  — node 9406:853 (393×852)
 *
 * Both designs are built on absolute coordinates, so pairs of classes
 * ("mobile value + lg:desktop value") reproduce them directly. Background
 * layers are positioned in percentages of the section width and scale smoothly.
 *
 * On mobile the highlights row scrolls horizontally (the 361px cards of the
 * design run off screen); on desktop it is three 426px columns.
 */
export function Hero() {
  return (
    <section className="bg-brand relative isolate h-[852px] overflow-hidden text-white lg:h-[824px]">
      {/* --- Background layers --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Radial circle #4264F6 → #2A38DA */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-glow.svg"
          alt=""
          className="absolute top-0 left-[-53.69%] w-[383.2%] max-w-none -translate-y-[27.62%] lg:left-[-16.46%] lg:w-[171.18%] lg:-translate-y-[40%]"
        />

        {/* 3D object rlvnt-glass-8 */}
        <Image
          src="/images/hero-glass.webp"
          alt=""
          width={1800}
          height={1800}
          priority
          sizes="(max-width: 1024px) 267vw, 105vw"
          className="absolute top-0 left-[-56.74%] w-[266.67%] max-w-none -translate-y-[16.79%] lg:left-[15.49%] lg:w-[104.17%] lg:-translate-y-[22.2%]"
        />

        {/* Gradient under the header */}
        <div className="absolute inset-x-0 top-0 h-[319px] bg-linear-to-b from-[rgba(42,57,218,0.8)] from-[13.662%] to-[rgba(42,57,218,0)] mix-blend-multiply lg:h-[296px]" />
      </div>

      {/* --- Content --- */}
      <Container className="relative h-full">
        {/* Highlights */}
        <HeroHighlights items={home.hero.highlights} />

        {/* "e v o data" wordmark (decorative) */}
        <div aria-hidden="true">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="/images/mark-e.svg"
            alt=""
            className="absolute top-[387px] left-4 h-[75px] w-[74px] sm:left-8 lg:top-[388px] lg:left-16 lg:h-[138px] lg:w-[138px]"
          />
          <img
            src="/images/logo-data.svg"
            alt=""
            className="absolute top-[412px] left-[102px] h-[26px] w-[56px] lg:top-[424px] lg:left-[246px] lg:h-[60px] lg:w-[130px]"
          />
          <img
            src="/images/mark-v.svg"
            alt=""
            className="absolute top-[388px] left-1/2 h-[74px] w-[75px] -translate-x-1/2 lg:top-[389px] lg:h-[138px] lg:w-[140px]"
          />
          <img
            src="/images/mark-o.svg"
            alt=""
            className="absolute top-[386px] right-4 h-[75px] w-[76px] sm:right-8 lg:top-[386px] lg:right-16 lg:h-[141px] lg:w-[140px]"
          />
          {/* eslint-enable @next/next/no-img-element */}
        </div>

        {/* Heading */}
        <h1 className="absolute top-[728px] left-4 font-serif text-[40px] leading-[40px] whitespace-pre-line sm:left-8 lg:top-[655px] lg:left-[51px] lg:w-[570px] lg:text-[56px] lg:leading-[56px]">
          {home.hero.title}
        </h1>
      </Container>
    </section>
  );
}
