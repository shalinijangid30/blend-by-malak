"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { buildWaLink } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/routing";

export function PrivateEventForm({ locale }: { locale: Locale }) {
  const t = useTranslations("privateEvents");
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message =
      locale === "ar"
        ? `مرحباً! أريد الاستفسار عن فعالية خاصة.\nالاسم: ${name}\nنوع الفعالية: ${eventType}\nعدد الضيوف: ${guestCount}\nالتاريخ المفضل: ${date}`
        : `Hi! I'd like to enquire about a private event.\nName: ${name}\nEvent type: ${eventType}\nGuest count: ${guestCount}\nPreferred date: ${date}`;
    window.open(buildWaLink(message), "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-coral focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-charcoal/10 bg-white p-6">
      <h2 className="font-heading text-xl font-semibold text-charcoal">{t("formTitle")}</h2>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("formName")}
        className={inputClasses}
      />
      <input
        required
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        placeholder={t("formEventType")}
        className={inputClasses}
      />
      <input
        required
        type="number"
        min={1}
        value={guestCount}
        onChange={(e) => setGuestCount(e.target.value)}
        placeholder={t("formGuestCount")}
        className={inputClasses}
      />
      <input
        required
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder={t("formDate")}
        className={inputClasses}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-coral px-6 py-3 font-heading text-sm font-medium text-white shadow-lg shadow-coral/30 hover:brightness-105 active:scale-95 sm:text-base"
      >
        {t("formSubmit")}
      </button>
      <p className="text-xs text-charcoal/50">{t("formNote")}</p>
    </form>
  );
}
