import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes, resolving conflicts correctly.
 * Use it in every component instead of concatenating className by hand.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
