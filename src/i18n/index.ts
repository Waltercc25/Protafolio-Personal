import { en } from "./en";
import { es, type TranslationDict } from "./es";

export type Locale = "es" | "en";
export type { TranslationDict };

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const translations: Record<Locale, TranslationDict> = { es, en };

export function getTranslations(locale: Locale): TranslationDict {
  return translations[locale];
}
