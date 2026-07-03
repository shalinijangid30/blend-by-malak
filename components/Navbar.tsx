"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/workshops`, label: t("nav.workshops") },
    { href: `/${locale}/private-events`, label: t("nav.privateEvents") },
    { href: `/${locale}/gallery`, label: t("nav.gallery") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="font-heading text-lg font-semibold text-charcoal">
          {t("brand.name")}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-charcoal/80 hover:text-coral">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher locale={locale} />
          <WhatsAppButton href={buildWaLink(t("common.whatsappCta"))} label={t("common.whatsappCta")} className="px-4 py-2 text-sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 md:hidden"
          aria-label="Menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-charcoal/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LocaleSwitcher locale={locale} />
            <WhatsAppButton href={buildWaLink(t("common.whatsappCta"))} label={t("common.whatsappCta")} className="px-4 py-2 text-sm" />
          </div>
        </div>
      )}
    </header>
  );
}
