import { home } from "@/content/en/home";
import { cn } from "@/lib/utils";

type TechLogosProps = {
  className?: string;
};

/**
 * Marquee of technology logos — node 9165:260126 (home) and 9241:144 (What We Do,
 * the same row without a heading). The list lives in one place, in the home copy.
 *
 * The design shows a static row, but it holds more logos than fit at 1440px, so
 * the row scrolls slowly instead. Pure CSS: the track carries two identical
 * copies and shifts by -50%, which loops seamlessly. Hovering pauses it, and
 * with reduced motion the animation stops and the row scrolls by hand.
 */
export function TechLogos({ className }: TechLogosProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden motion-reduce:overflow-x-auto",
        // Soft edges: without them a logo cut in half at the border reads as
        // broken layout rather than a moving row.
        "[mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]",
        className,
      )}
    >
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            // The second copy only fills the loop — assistive tech reads the first.
            aria-hidden={copy === 1 || undefined}
            className="flex shrink-0 items-center gap-12 pr-12 lg:gap-16 lg:pr-16"
          >
            {home.techLeaders.logos.map((logo) => (
              <li key={logo.name} className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={copy === 0 ? logo.name : ""}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-auto lg:h-11"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
