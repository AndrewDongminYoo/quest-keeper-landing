import type { Metadata } from "next";
import Link from "next/link";
import { BattleShowcase } from "@/components/BattleShowcase";
import { Sprite, type SpriteName } from "@/components/Sprite";
import { dict } from "@/lib/dictionaries";
import {
  APP_STORE_URL,
  PRODUCT_NAME,
  SITE_URL,
  isLocale,
  localizedAlternates,
} from "@/lib/site";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { alternates: localizedAlternates("", locale) };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dict[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: PRODUCT_NAME,
    description: t.meta.description,
    operatingSystem: "iOS",
    applicationCategory: "Productivity",
    inLanguage: locale,
    url: `${SITE_URL}/${locale}`,
    author: { "@type": "Organization", name: "donminzzi lab" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 히어로: 비대칭 스플릿 */}
      <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[3fr_2fr] lg:pt-20">
        <div>
          <h1 className="font-pixel-lg text-3xl leading-snug font-bold sm:text-4xl lg:text-5xl lg:leading-snug">
            {t.hero.title[0]}
            <br />
            <span className="text-accent">{t.hero.title[1]}</span>
          </h1>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn font-pixel inline-flex h-12 items-center bg-accent px-5 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {t.hero.primary}
            </a>
            <a
              href="#growth"
              className="font-pixel text-sm text-muted underline underline-offset-4 hover:text-ink"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div
          role="img"
          aria-label={t.hero.sceneLabel}
          className="pixel-panel relative mx-auto flex h-64 w-full max-w-sm items-end justify-center gap-6 overflow-hidden px-6 pb-8"
        >
          <Sprite
            name="coin"
            size={40}
            className="anim-bob-delay absolute top-6 right-8"
          />
          <Sprite name="hero" size={120} animated />
          <Sprite name="slime" size={88} animated />
          <div
            className="absolute inset-x-0 bottom-0 h-4 bg-line"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* 성장 패널: 풀와이드 단일 패널 */}
      <section
        id="growth"
        className="mx-auto w-full max-w-5xl scroll-mt-16 px-4 sm:px-6"
      >
        <div className="pixel-panel px-6 py-10 sm:px-10">
          <h2 className="font-pixel text-xl font-bold sm:text-2xl">
            {t.growth.title}
          </h2>
          <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted sm:text-base">
            {t.growth.body}
          </p>
          <div className="mt-10 flex items-end justify-between gap-2 sm:justify-around">
            {t.growth.stages.map((stage, i) => (
              <div
                key={stage.name}
                className="flex flex-col items-center gap-3"
              >
                <Sprite
                  name={stage.sprite as SpriteName}
                  size={56 + i * 36}
                  label={stage.name}
                  animated
                />
                <span className="font-pixel text-xs text-muted">
                  {stage.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BattleShowcase content={t.showcase} />

      {/* 하루 루프: 벤토 (1 와이드 + 2) */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-24 sm:px-6">
        <h2 className="font-pixel text-xl font-bold sm:text-2xl">
          {t.loop.title}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="pixel-panel flex flex-col justify-between gap-6 p-6 sm:col-span-2 sm:flex-row sm:items-center sm:p-8">
            <div className="max-w-[46ch]">
              <h3 className="font-pixel text-base font-bold text-accent">
                {t.loop.cells[0].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {t.loop.cells[0].body}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Sprite name="hero" size={88} />
              <Sprite name="hit" size={72} className="anim-blink" />
              <Sprite name="coin" size={44} className="anim-bob" />
            </div>
          </div>
          <div className="pixel-panel bg-surface p-6">
            <Sprite name="grave" size={72} />
            <h3 className="font-pixel mt-4 text-base font-bold">
              {t.loop.cells[1].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t.loop.cells[1].body}
            </p>
          </div>
          <div className="pixel-panel p-6">
            <Sprite name="fallen" size={72} />
            <h3 className="font-pixel mt-4 text-base font-bold">
              {t.loop.cells[2].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t.loop.cells[2].body}
            </p>
          </div>
        </div>
      </section>

      {/* 특징: 2단 스플릿 (좌 헤딩 / 우 행 리스트) */}
      <section className="mx-auto grid w-full max-w-5xl gap-10 px-4 pt-24 sm:px-6 lg:grid-cols-[2fr_3fr]">
        <h2 className="font-pixel text-xl leading-relaxed font-bold sm:text-2xl">
          {t.features.title[0]}
          <br />
          <span className="text-accent">{t.features.title[1]}</span>
        </h2>
        <div>
          {t.features.rows.map((row) => (
            <div
              key={row.title}
              className="border-b-2 border-line py-5 first:pt-0 last:border-b-0"
            >
              <h3 className="font-pixel text-sm font-bold">{row.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {row.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 프라이버시 선언: 센터 매니페스토 */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-28 text-center sm:px-6">
        <Sprite name="hero" size={64} className="mx-auto" />
        <h2 className="font-pixel-lg mt-6 text-2xl leading-snug font-bold sm:text-3xl">
          {t.privacy.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-sm leading-relaxed text-muted sm:text-base">
          {t.privacy.body}
        </p>
        <Link
          href={`/${locale}/privacy`}
          className="font-pixel mt-8 inline-block text-sm text-accent underline underline-offset-4 hover:text-ink"
        >
          {t.privacy.link}
        </Link>
      </section>

      {/* FAQ: 특징 섹션과 같은 행 리스트 패턴 */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-24 sm:px-6">
        <h2 className="font-pixel text-xl font-bold sm:text-2xl">
          {t.faq.title}
        </h2>
        <div className="mt-8">
          {t.faq.items.map((item) => (
            <div
              key={item.q}
              className="border-b-2 border-line py-5 first:pt-0 last:border-b-0"
            >
              <h3 className="font-pixel text-sm font-bold">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
