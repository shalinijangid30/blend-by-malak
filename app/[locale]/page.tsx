import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { WorkshopScheduleStrip } from "@/components/WorkshopScheduleStrip";
import { PressStrip } from "@/components/PressStrip";
import { GalleryMarquee } from "@/components/GalleryMarquee";
import { BlobBackground } from "@/components/BlobBackground";
import { Parallax } from "@/components/Parallax";
import { MirrorIcon, MugIcon, YarnIcon, CanvasIcon, SparkleIcon } from "@/components/Icons";

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tc = await getTranslations("categories");

  const categories = [
    { key: "mirror", icon: <MirrorIcon />, tone: "coral" as const, href: `/${locale}/workshops` },
    { key: "mug", icon: <MugIcon />, tone: "turquoise" as const, href: `/${locale}/workshops` },
    { key: "crochet", icon: <YarnIcon />, tone: "mustard" as const, href: `/${locale}/workshops` },
    { key: "canvas", icon: <CanvasIcon />, tone: "blush" as const, href: `/${locale}/workshops` },
    { key: "private", icon: <SparkleIcon />, tone: "coral" as const, href: `/${locale}/private-events` },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <Parallax speed={-0.08} className="absolute -top-24 -bottom-24 inset-x-0">
          <BlobBackground />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-end px-4 py-16 text-cream sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-mustard">
            {t("home.heroEyebrow")}
          </p>
          <h1 className="mt-3 max-w-xl font-heading text-4xl font-semibold leading-tight drop-shadow-sm sm:text-5xl">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-4 max-w-lg text-base text-cream/90 sm:text-lg">{t("home.heroSubtitle")}</p>
          <WhatsAppButton href={buildWaLink(t("home.heroCta"))} label={t("home.heroCta")} className="mt-6" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-semibold text-charcoal sm:text-3xl">{t("home.thisWeekTitle")}</h2>
          <Link href={`/${locale}/workshops`} className="text-sm font-medium text-coral hover:underline">
            {t("nav.workshops")} →
          </Link>
        </div>
        <Parallax speed={0.06} className="mt-6">
          <WorkshopScheduleStrip locale={locale} />
        </Parallax>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-charcoal sm:text-3xl">{t("home.categoriesTitle")}</h2>
          <p className="mt-2 text-charcoal/70">{t("home.categoriesSubtitle")}</p>
          <Parallax speed={-0.05} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <ServiceCard
                key={c.key}
                icon={c.icon}
                title={tc(`${c.key}.name`)}
                blurb={tc(`${c.key}.blurb`)}
                tone={c.tone}
                href={c.href}
              />
            ))}
          </Parallax>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-center font-heading text-xl font-semibold text-charcoal/60">{t("home.pressTitle")}</h2>
        <Parallax speed={0.07} className="mt-6">
          <PressStrip />
        </Parallax>
      </section>

      <section className="overflow-hidden bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-2xl font-semibold text-charcoal sm:text-3xl">{t("home.galleryTitle")}</h2>
            <Link href={`/${locale}/gallery`} className="text-sm font-medium text-coral hover:underline">
              {t("home.galleryCta")} →
            </Link>
          </div>
        </div>
        <Parallax speed={-0.06} className="mt-6">
          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <GalleryMarquee />
          </div>
        </Parallax>
      </section>

      <section className="bg-coral py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">{t("home.footerCtaTitle")}</h2>
          <p className="mt-2 text-white/90">{t("home.footerCtaSubtitle")}</p>
          <WhatsAppButton
            href={buildWaLink(t("home.footerCta"))}
            label={t("home.footerCta")}
            variant="outlineLight"
            className="mt-6"
          />
        </div>
      </section>
    </div>
  );
}
