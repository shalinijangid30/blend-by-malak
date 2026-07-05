import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { buildWaLink } from "@/lib/whatsapp";
import { pastelTones } from "@/lib/pastelTones";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const locations = ["Isaan Cafe, West Bay", "Ipanema Coffee, Msheireb", "The Books Cafe, Katara"];

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">{t("title")}</h1>
      <p className="mt-2 text-charcoal/70">{t("subtitle")}</p>

      <div className={`mt-8 rounded-3xl border border-charcoal/10 ${pastelTones[1].bg} p-8 text-center`}>
        <h2 className={`font-heading text-xl font-semibold ${pastelTones[1].accent}`}>{t("whatsappTitle")}</h2>
        <p className="mt-2 text-charcoal/70">{t("whatsappBody")}</p>
        <WhatsAppButton
          href={buildWaLink(tCommon("whatsappCta"))}
          label={tCommon("whatsappCta")}
          className="mt-5"
        />
        <p className="mt-4 text-xs font-medium text-charcoal/50">{tCommon("callsNotAccepted")}</p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-semibold text-charcoal">{t("socialTitle")}</h2>
          <div className="mt-3 flex flex-col gap-2 text-charcoal/70">
            <a href="https://instagram.com/blendbymalak" target="_blank" rel="noopener noreferrer" className="hover:text-coral">
              Instagram — @blendbymalak
            </a>
            <a href="https://tiktok.com/@blendbymalak" target="_blank" rel="noopener noreferrer" className="hover:text-coral">
              TikTok — @blendbymalak
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold text-charcoal">{t("locationsTitle")}</h2>
          <ul className="mt-3 space-y-2 text-charcoal/70">
            {locations.map((loc) => (
              <li key={loc}>{loc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
