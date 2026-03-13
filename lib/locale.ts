import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

export type Locale = "en" | "ar";

export function getLocaleFromPath(pathname: string | null): Locale {
  if (!pathname) return "en";
  return pathname.startsWith("/ar") ? "ar" : "en";
}

export function getDictionary(locale: Locale) {
  return locale === "ar" ? ar : en;
}

