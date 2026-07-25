import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dict } from "@/lib/dictionaries";
import { legalHtml } from "@/lib/legal";
import { isLocale, localizedAlternates } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return {
    title: dict[locale].legal.privacyTitle,
    alternates: localizedAlternates("/privacy", locale),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const html = await legalHtml("privacy", locale);
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-8 sm:px-6">
      <article className="legal" dangerouslySetInnerHTML={{ __html: html }} />
      <Link
        href={`/${locale}`}
        className="font-pixel mt-12 inline-block text-sm text-accent underline underline-offset-4"
      >
        {dict[locale].legal.back}
      </Link>
    </div>
  );
}
