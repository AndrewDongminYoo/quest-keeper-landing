import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../globals.css";
import { dict } from "@/lib/dictionaries";
import { LOCALES, SITE_URL, isLocale, type Locale } from "@/lib/site";

const galmuri = localFont({
  src: [
    { path: "../fonts/Galmuri11.woff2", weight: "400" },
    { path: "../fonts/Galmuri11-Bold.woff2", weight: "700" },
  ],
  variable: "--font-galmuri",
  display: "swap",
});

const galmuri14 = localFont({
  src: "../fonts/Galmuri14.woff2",
  variable: "--font-galmuri14",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dict[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: "%s | Quest Keeper" },
    description: t.meta.description,
    openGraph: {
      siteName: "Quest Keeper",
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dict[locale];
  const otherLocale: Locale = locale === "ko" ? "en" : "ko";

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Quest Keeper",
    url: SITE_URL,
    inLanguage: locale,
    publisher: { "@type": "Organization", name: "donminzzi lab" },
  };

  return (
    <html lang={locale} className={`${galmuri.variable} ${galmuri14.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <header className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
            href={`/${locale}`}
            className="font-pixel text-sm font-bold tracking-wide text-accent"
          >
            {t.nav.brand}
          </Link>
          <nav aria-label={t.nav.langLabel}>
            <Link
              href={`/${otherLocale}`}
              className="font-pixel text-xs text-muted underline underline-offset-4 hover:text-ink"
            >
              {otherLocale === "ko" ? "한국어" : "English"}
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t-2 border-line bg-surface/60">
          <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6">
            <div>
              <h2 className="font-pixel mb-3 text-xs text-muted">
                {t.footer.developer}
              </h2>
              <p className="text-sm">{t.footer.developerName}</p>
              <p className="mt-1 text-sm text-muted">
                <a
                  href="https://github.com/AndrewDongminYoo"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  github.com/AndrewDongminYoo
                </a>
              </p>
              <p className="mt-1 text-sm text-muted">
                {t.footer.contact}:{" "}
                <a
                  href="mailto:ydm2790@gmail.com"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  ydm2790@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="font-pixel mb-3 text-xs text-muted">
                {t.footer.links}
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href={`/${locale}/privacy`}
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/terms`}
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6">
            <p className="text-xs text-muted">
              © 2026 donminzzi lab · {t.footer.fontCredit}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
