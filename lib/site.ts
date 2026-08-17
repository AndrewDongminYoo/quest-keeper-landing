export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://quest.donminzzi.kr";

// 스토어프론트를 고정하지 않는 형태 — Apple이 방문자 국가 스토어로 리다이렉트한다.
export const APP_STORE_URL = "https://apps.apple.com/app/id6794192291";

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
