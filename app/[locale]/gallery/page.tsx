import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { GalleryGrid } from "@/components/GalleryGrid";

export default async function GalleryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gallery");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">{t("title")}</h1>
      <p className="mt-2 max-w-xl text-charcoal/70">{t("subtitle")}</p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
