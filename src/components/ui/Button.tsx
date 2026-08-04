import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  /** `primary` — white fill, `secondary` — outlined on a coloured background. */
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Link styled as a button (node set 9423:1785).
 * Sizes from the design: padding 18/10, radius 8, text 18/28 semibold.
 */
export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-[18px] py-[10px] text-lg font-semibold transition-colors",
        variant === "primary" && "text-brand bg-white hover:bg-white/90",
        variant === "secondary" &&
          "border border-white/70 text-white hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
