import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { buildWaLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations();

  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-heading text-xl">{t("brand.name")}</p>
            <p className="mt-1 text-sm text-cream/70">{t("brand.tagline")}</p>
          </div>
          <WhatsAppButton href={buildWaLink(t("common.whatsappCta"))} label={t("common.whatsappCta")} />
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-cream/15 pt-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.madeWith")}</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/blendbymalak" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
              Instagram
            </a>
            <a href="https://tiktok.com/@blendbymalak" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
              TikTok
            </a>
            <Link href={`/${locale}/contact`} className="hover:text-cream">
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
