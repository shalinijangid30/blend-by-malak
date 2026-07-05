"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

const BOOKABLE_WEEKDAYS = [1, 3, 5]; // Mon, Wed, Fri

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function buildCalendarGrid(monthCursor: Date, locale: Locale) {
  const firstOfMonth = startOfMonth(monthCursor);
  const firstWeekday = firstOfMonth.getDay(); // 0=Sun
  const daysInMonth = new Date(monthCursor.getFullYear(), monthCursor.getMonth() + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  // next-intl locales use Sunday-start weeks for both en/ar here, keep simple grid start on Sunday
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(monthCursor.getFullYear(), monthCursor.getMonth(), d));
  }
  return cells;
}

export function ReserveModal({
  workshopName,
  locale,
  triggerLabel,
  triggerClassName,
}: {
  workshopName: string;
  locale: Locale;
  triggerLabel: string;
  triggerClassName?: string;
}) {
  const t = useTranslations("reserveModal");
  const [open, setOpen] = useState(false);
  const [monthCursor, setMonthCursor] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cells = buildCalendarGrid(monthCursor, locale);

  const weekdayFormatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
  const weekdayLabels = [0, 1, 2, 3, 4, 5, 6].map((d) => weekdayFormatter.format(new Date(2024, 0, d + 7)));
  const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(monthCursor);

  const timeSlots = [
    { key: "morning", label: t("morning") },
    { key: "afternoon", label: t("afternoon") },
    { key: "evening", label: t("evening") },
  ];

  const dateLabel = selectedDate
    ? new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" }).format(selectedDate)
    : "";
  const canConfirm = Boolean(selectedDate && selectedTime);

  function handleConfirm() {
    if (!selectedDate || !selectedTime) return;
    const timeLabel = timeSlots.find((s) => s.key === selectedTime)?.label ?? selectedTime;
    const message =
      locale === "ar"
        ? `مرحباً! أريد حجز مكان في ${workshopName} يوم ${dateLabel}، ${timeLabel}.`
        : `Hi! I'd like to book a spot for ${workshopName} on ${dateLabel}, ${timeLabel}.`;
    window.open(buildWaLink(message), "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          triggerClassName ??
          "inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-heading text-sm font-medium text-white shadow-lg shadow-coral/30 transition-transform hover:brightness-105 active:scale-95 sm:text-base"
        }
      >
        <WhatsAppIcon />
        {triggerLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-charcoal/60 p-0 sm:items-center sm:p-4">
          <div
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-cream p-6 sm:rounded-3xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-xl font-semibold text-charcoal">{t("title")}</h2>
                <p className="mt-1 text-sm text-charcoal/70">{t("subtitle", { workshop: workshopName })}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("close")}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-charcoal/60 hover:bg-charcoal/10"
              >
                ✕
              </button>
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-charcoal/50">{t("selectDate")}</p>
            <p className="mt-1 text-xs text-turquoise">{t("availableNote")}</p>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setMonthCursor(new Date(monthCursor.getFullYear(), monthCursor.getMonth() - 1, 1))}
                aria-label={t("prevMonth")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 hover:bg-charcoal/5"
              >
                ‹
              </button>
              <p className="font-heading text-sm font-semibold text-charcoal">{monthLabel}</p>
              <button
                type="button"
                onClick={() => setMonthCursor(new Date(monthCursor.getFullYear(), monthCursor.getMonth() + 1, 1))}
                aria-label={t("nextMonth")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 hover:bg-charcoal/5"
              >
                ›
              </button>
            </div>

            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-medium text-charcoal/40">
              {weekdayLabels.map((w, i) => (
                <div key={i}>{w}</div>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1">
              {cells.map((date, i) => {
                if (!date) return <div key={i} />;
                const isPast = date < today;
                const isBookable = BOOKABLE_WEEKDAYS.includes(date.getDay()) && !isPast;
                const isSelected = selectedDate && isSameDay(date, selectedDate);
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={!isBookable}
                    onClick={() => setSelectedDate(date)}
                    className={`aspect-square rounded-xl text-sm transition-colors ${
                      isSelected
                        ? "bg-coral text-white font-semibold"
                        : isBookable
                          ? "bg-turquoise/10 text-charcoal hover:bg-turquoise/20"
                          : "text-charcoal/25"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                  {t("selectTime")}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.key}
                      type="button"
                      onClick={() => setSelectedTime(slot.key)}
                      className={`rounded-xl border px-4 py-3 text-start text-sm font-medium transition-colors ${
                        selectedTime === slot.key
                          ? "border-coral bg-coral/10 text-coral"
                          : "border-charcoal/15 text-charcoal/70 hover:bg-charcoal/5"
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            <button
              type="button"
              disabled={!canConfirm}
              onClick={handleConfirm}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 font-heading text-sm font-medium text-white shadow-lg shadow-coral/30 transition-transform enabled:hover:brightness-105 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
            >
              <WhatsAppIcon />
              {t("confirmCta")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
