import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Логотип «evo data» — векторні ассети, експортовані з Figma (node 9137:50055).
 * Базовий бокс макета — 104×24; частини позиційовані у відсотках, тож логотип
 * масштабується будь-якою шириною через `className` (напр. `w-[104px]`).
 *
 * Ассети залиті білим — у макеті логотип завжди на синьому/темному фоні.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn("relative block aspect-[104/24] w-[104px]", className)}
      aria-hidden="true"
    >
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/logo-evo.svg"
        alt=""
        className="absolute top-[27.9%] left-0 h-[72.1%] w-[47.63%]"
      />
      <img
        src="/images/logo-data.svg"
        alt=""
        className="absolute top-0 left-[51.34%] h-[97.06%] w-[48.65%]"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </span>
  );
}
