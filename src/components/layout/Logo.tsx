import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * The "evo data" logo — vector assets exported from Figma (node 9137:50055).
 * Base box in the design is 104×24; the parts are positioned in percentages, so
 * the logo scales to any width set through `className` (e.g. `w-[104px]`).
 *
 * The assets are filled white — in the design the logo always sits on blue/dark.
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
