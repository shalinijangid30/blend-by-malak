import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { workshops } from "@/data/workshops";
import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WorkshopScheduleStrip } from "@/components/WorkshopScheduleStrip";
import { MirrorIcon, MugIcon, YarnIcon, CanvasIcon } from "@/components/Icons";

const iconByCategory = {
  mirror: MirrorIcon,
  mug: MugIcon,
  crochet: YarnIcon,
  canvas: CanvasIcon,
};

export default async function WorkshopsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tc = await getTranslations("categories");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">{t("workshops.title")}</h1>
      <p className="mt-2 max-w-xl text-charcoal/70">{t("workshops.subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {workshops.map((workshop) => {
          const Icon = iconByCategory[workshop.category];
          const message =
            locale === "ar"
              ? `مرحباً! أريد حجز مكان في ${tc(`${workshop.category}.name`)}.`
              : `Hi! I'd like to book a spot for ${tc(`${workshop.category}.name`)}.`;

          return (
            <div key={workshop.id} className="flex flex-col rounded-3xl border border-charcoal/10 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/10 text-coral">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-heading text-xl font-semibold text-charcoal">{tc(`${workshop.category}.name`)}</h2>
              <p className="mt-1 text-sm text-charcoal/70">{tc(`${workshop.category}.blurb`)}</p>

              <dl className="mt-4 space-y-1 text-sm text-charcoal/70">
                <div className="flex justify-between">
                  <dt>{t("workshops.priceLabel")}</dt>
                  <dd className="font-medium text-charcoal">
                    {workshop.priceQar} {t("common.qar")}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>{t("workshops.durationLabel")}</dt>
                  <dd className="font-medium text-charcoal">
                    {workshop.durationMinutes} {t("common.minutes")}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                {t("workshops.includesLabel")}
              </p>
              <ul className="mt-1 space-y-1 text-sm text-charcoal/70">
                {workshop.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <WhatsAppButton
                href={buildWaLink(message)}
                label={t("common.reserveSpot")}
                className="mt-6 w-full justify-center"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-2xl font-semibold text-charcoal">{t("workshops.scheduleTitle")}</h2>
        <p className="mt-1 text-charcoal/70">{t("workshops.scheduleSubtitle")}</p>
        <div className="mt-6">
          <WorkshopScheduleStrip locale={locale} />
        </div>
      </div>
    </div>
  );
}
