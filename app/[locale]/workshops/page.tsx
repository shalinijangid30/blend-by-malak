import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { workshops } from "@/data/workshops";
import { pastelTones } from "@/lib/pastelTones";
import { assetPath } from "@/lib/assetPath";
import { ReserveModal } from "@/components/ReserveModal";
import { WorkshopScheduleStrip } from "@/components/WorkshopScheduleStrip";
import { MirrorIcon, MugIcon, YarnIcon, CanvasIcon } from "@/components/Icons";

const iconByCategory = {
  mirror: MirrorIcon,
  mug: MugIcon,
  crochet: YarnIcon,
  canvas: CanvasIcon,
};

const workshopVideos = [
  "/videos/workshop-235.mp4",
  "/videos/workshop-693.mp4",
  "/videos/workshop-959.mp4",
  "/videos/workshop-972.mp4",
];

export default async function WorkshopsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const tc = await getTranslations("categories");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">{t("workshops.title")}</h1>
      <p className="mt-2 max-w-xl text-charcoal/70">{t("workshops.subtitle")}</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-6">
          {workshops.map((workshop, index) => {
            const Icon = iconByCategory[workshop.category];
            const tone = pastelTones[index % pastelTones.length];

            return (
              <div key={workshop.id} className={`flex flex-col rounded-3xl border border-charcoal/10 ${tone.bg} p-6`}>
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 ${tone.accent}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className={`mt-4 font-heading text-xl font-semibold ${tone.accent}`}>{tc(`${workshop.category}.name`)}</h2>
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

                <ReserveModal
                  workshopName={tc(`${workshop.category}.name`)}
                  locale={locale}
                  triggerLabel={t("common.reserveSpot")}
                  triggerClassName="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 font-heading text-sm font-medium text-white shadow-lg shadow-coral/30 transition-transform hover:brightness-105 active:scale-95 sm:text-base"
                />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          {workshopVideos.map((src) => (
            <video
              key={src}
              className="aspect-[9/16] w-full max-w-xs mx-auto rounded-3xl bg-charcoal/5 object-cover"
              src={assetPath(src)}
              controls
              playsInline
              preload="metadata"
            />
          ))}
        </div>
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
