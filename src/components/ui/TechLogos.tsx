import { home } from "@/content/en/home";
import { cn } from "@/lib/utils";

type TechLogosProps = {
  className?: string;
};

/**
 * Ряд логотипів технологій — node 9165:260126 (головна) та 9241:144 (What We Do,
 * той самий ряд без заголовка). Список ведеться в одному місці, у контенті головної.
 */
export function TechLogos({ className }: TechLogosProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-between gap-x-10 gap-y-8",
        className,
      )}
    >
      {home.techLeaders.logos.map((logo) => (
        <li key={logo.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-[110px] sm:w-[140px] lg:w-auto"
            style={{ maxWidth: `${logo.width}px` }}
          />
        </li>
      ))}
    </ul>
  );
}
