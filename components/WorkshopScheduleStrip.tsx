import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { thisWeeksSchedule } from "@/data/schedule";
import { workshops } from "@/data/workshops";
import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

const pastelTones = [
  { bg: "bg-coral/10", accent: "text-coral", spots: "text-coral" },
  { bg: "bg-turquoise/10", accent: "text-turquoise", spots: "text-turquoise" },
  { bg: "bg-mustard/15", accent: "text-[#8a6200]", spots: "text-[#8a6200]" },
  { bg: "bg-blush/15", accent: "text-[#c23a75]", spots: "text-[#c23a75]" },
  { bg: "bg-plum/10", accent: "text-plum", spots: "text-plum" },
  { bg: "bg-navy/10", accent: "text-navy", spots: "text-navy" },
];

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
              <p className={`mt-1 text-sm font-medium ${tone.spots}`}>
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
