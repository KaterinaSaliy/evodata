import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { home } from "@/content/en/home";

/**
 * Герой головної сторінки.
 *   Десктоп — node 9137:50045 (1440×824)
 *   Мобільний — node 9406:853 (393×852)
 *
 * Обидва макети побудовані на абсолютних координатах, тому клас-пари
 * «мобільне значення + lg:десктопне» відтворюють їх напряму. Фонові шари
 * позиціонуються у відсотках від ширини секції, тож масштабуються плавно.
 *
 * На мобільному рядок переваг гортається горизонтально (у макеті картки
 * шириною 361px виходять за межі екрана), на десктопі — три колонки по 426px.
 */
export function Hero() {
  return (
    <section className="bg-brand relative isolate h-[852px] overflow-hidden text-white lg:h-[824px]">
      {/* --- Фонові шари --- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Радіальне коло #4264F6 → #2A38DA */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-glow.svg"
          alt=""
          className="absolute top-0 left-[-53.69%] w-[383.2%] max-w-none -translate-y-[27.62%] lg:left-[-16.46%] lg:w-[171.18%] lg:-translate-y-[40%]"
        />

        {/* 3D-об'єкт rlvnt-glass-8 */}
        <Image
          src="/images/hero-glass.webp"
          alt=""
          width={1800}
          height={1800}
          priority
          sizes="(max-width: 1024px) 267vw, 105vw"
          className="absolute top-0 left-[-56.74%] w-[266.67%] max-w-none -translate-y-[16.79%] lg:left-[15.49%] lg:w-[104.17%] lg:-translate-y-[22.2%]"
        />

        {/* Затемнення під шапкою */}
        <div className="absolute inset-x-0 top-0 h-[319px] bg-linear-to-b from-[rgba(42,57,218,0.8)] from-[13.662%] to-[rgba(42,57,218,0)] mix-blend-multiply lg:h-[296px]" />
      </div>

      {/* --- Контент --- */}
      <Container className="relative h-full">
        {/* Переваги */}
        <ul className="no-scrollbar absolute top-[106px] right-0 left-4 flex snap-x snap-mandatory gap-6 overflow-x-auto sm:left-8 lg:top-[112px] lg:right-16 lg:left-16 lg:grid lg:grid-cols-[426px_426px_426px] lg:overflow-visible">
          {home.hero.highlights.map((text) => (
            <li
              key={text}
              className="w-[min(361px,calc(100vw-2rem))] shrink-0 snap-start border-b border-white/50 pt-[10px] pb-5 text-lg font-medium whitespace-pre-line lg:w-auto lg:text-xl"
            >
              {text}
            </li>
          ))}
        </ul>

        {/* Вордмарк «e v o data» (декоративний) */}
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

        {/* Заголовок */}
        <h1 className="absolute top-[728px] left-4 font-serif text-[40px] leading-[40px] whitespace-pre-line sm:left-8 lg:top-[655px] lg:left-[51px] lg:w-[570px] lg:text-[56px] lg:leading-[56px]">
          {home.hero.title}
        </h1>
      </Container>
    </section>
  );
}
