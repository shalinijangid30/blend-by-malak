import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { PrivateEventForm } from "@/components/PrivateEventForm";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SparkleIcon } from "@/components/Icons";

export default async function PrivateEventsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privateEvents");
  const includes = t.raw("includes") as string[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">{t("title")}</h1>
      <p className="mt-2 max-w-xl text-charcoal/70">{t("subtitle")}</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-xl font-semibold text-charcoal">{t("includesTitle")}</h2>
          <ul className="mt-4 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal/80">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mustard/20 text-[#8a6200]">
                  <SparkleIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <PrivateEventForm locale={locale} />
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-2xl font-semibold text-charcoal">{t("galleryTitle")}</h2>
        <div className="mt-6">
          <GalleryGrid limit={3} />
        </div>
      </div>
    </div>
  );
}
