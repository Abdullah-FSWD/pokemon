import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function senitzedId(str: string) {
//   return str
//     .split(" ")
//     .map((split) => split.toLowerCase())
//     .join("_");
// }
