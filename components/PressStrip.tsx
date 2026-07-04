import { useTranslations } from "next-intl";
import { pressMentions } from "@/data/pressMentions";
import { pastelTones } from "@/lib/pastelTones";

export function PressStrip() {
  const t = useTranslations();

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {pressMentions.map((mention, index) => {
        const tone = pastelTones[index % pastelTones.length];
        return (
          <div key={mention.outlet} className={`rounded-2xl border border-charcoal/10 ${tone.bg} p-5`}>
            <p className="text-sm italic text-charcoal/70">&ldquo;{t(mention.quoteKey)}&rdquo;</p>
            <p className={`mt-3 font-heading text-sm font-semibold ${tone.accent}`}>{mention.outlet}</p>
          </div>
        );
      })}
    </div>
  );
}
