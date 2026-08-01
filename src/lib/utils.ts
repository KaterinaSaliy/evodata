import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Об'єднує Tailwind-класи з коректним вирішенням конфліктів.
 * Використовуйте у всіх компонентах замість ручної конкатенації className.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
