import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { thisWeeksSchedule } from "@/data/schedule";
import { workshops } from "@/data/workshops";
import { buildWaLink } from "@/lib/whatsapp";
import { pastelTones } from "@/lib/pastelTones";
import { WhatsAppButton } from "./WhatsAppButton";

export function WorkshopScheduleStrip({ locale }: { locale: Locale }) {
  const t = useTranslations();
  const tc = useTranslations("categories");

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {thisWeeksSchedule.map((entry, index) => {
        const workshop = workshops.find((w) => w.id === entry.workshopId)!;
        const dateLabel = locale === "ar" ? entry.dateLabelAr : entry.dateLabelEn;
        const venue = locale === "ar" ? entry.venueAr : entry.venueEn;
        const theme = locale === "ar" ? entry.themeAr : entry.themeEn;
        const tone = pastelTones[index % pastelTones.length];
        const message =
          locale === "ar"
            ? `مرحباً! أريد حجز مكان في ${theme} يوم ${dateLabel} في ${venue}.`
            : `Hi! I'd like to book a spot at ${theme} on ${dateLabel} at ${venue}.`;

        return (
          <div
            key={entry.id}
            className={`flex flex-col justify-between rounded-3xl border border-charcoal/10 ${tone.bg} p-5`}
          >
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wide ${tone.accent}`}>{dateLabel}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-charcoal">{theme}</h3>
              <p className="mt-1 text-sm text-charcoal/70">{venue}</p>
              <p className="mt-3 text-sm text-charcoal/60">
                {tc(`${workshop.category}.name`)} · {workshop.priceQar} {t("common.qar")}
              </p>
              <p className={`mt-1 text-sm font-medium ${tone.accent}`}>
                {entry.spotsLeft} {t("workshops.spotsLeftShort")}
              </p>
            </div>
            <WhatsAppButton href={buildWaLink(message)} label={t("home.thisWeekCta")} className="mt-4 w-full justify-center" />
          </div>
        );
      })}
    </div>
  );
}
