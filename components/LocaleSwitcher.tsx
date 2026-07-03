"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/routing";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-1 rounded-full border border-charcoal/15 p-1 text-sm">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest ? `/${rest}` : ""}`}
          className={`rounded-full px-3 py-1 font-medium transition-colors ${
            l === locale ? "bg-charcoal text-cream" : "text-charcoal/70 hover:text-charcoal"
          }`}
        >
          {l === "en" ? "EN" : "AR"}
        </Link>
      ))}
    </div>
  );
}
