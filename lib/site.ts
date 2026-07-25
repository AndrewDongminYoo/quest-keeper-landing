export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://quest.donminzzi.kr";

export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** canonical + hreflang alternates for a localized path ("" | "/privacy" | "/terms") */
export function localizedAlternates(path: string, locale: Locale) {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ko: `/ko${path}`,
      en: `/en${path}`,
      "x-default": `/ko${path}`,
    },
  };
}
