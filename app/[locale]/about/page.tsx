import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

const cafePartners = ["Isaan Cafe", "Ipanema Coffee", "The Books Cafe"];

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div>
      <section className="relative h-64 w-full overflow-hidden sm:h-80">
        <Image src="/images/gallery-abstract.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative flex h-full items-end px-4 pb-8 sm:px-6">
          <h1 className="font-heading text-3xl font-semibold text-cream sm:text-4xl">{t("title")}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-coral">{t("storyEyebrow")}</p>
        <p className="mt-3 text-lg leading-relaxed text-charcoal/80">{t("story1")}</p>
        <p className="mt-4 text-lg leading-relaxed text-charcoal/80">{t("story2")}</p>

        <div className="mt-10 rounded-3xl bg-white p-8 text-center">
          <h2 className="font-heading text-xl font-semibold text-coral">{t("philosophyTitle")}</h2>
          <p className="mt-3 text-charcoal/70">{t("philosophyBody")}</p>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-semibold text-charcoal">{t("partnersTitle")}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {cafePartners.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-charcoal/15 bg-white px-4 py-2 text-sm font-medium text-charcoal/70"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
