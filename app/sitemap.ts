import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy", "/terms"];
  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: {
        languages: {
          ko: `${SITE_URL}/ko${path}`,
          en: `${SITE_URL}/en${path}`,
          "x-default": `${SITE_URL}/ko${path}`,
        },
      },
    })),
  );
}
