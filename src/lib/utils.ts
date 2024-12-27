import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const the = async <T>(prom: Promise<T>): Promise<[T | null, any]> => {
  try {
    return [await prom, null];
  } catch (error) {
    return [null, error];
  }
};
