import Link from "next/link";
import type { ReactNode } from "react";

const bgByTone: Record<string, string> = {
  coral: "bg-coral/10 text-coral",
  turquoise: "bg-turquoise/10 text-turquoise",
  mustard: "bg-mustard/15 text-[#8a6200]",
  blush: "bg-blush/15 text-[#c23a75]",
};

export function ServiceCard({
  icon,
  title,
  blurb,
  tone,
  href,
}: {
  icon: ReactNode;
  title: string;
  blurb: string;
  tone: keyof typeof bgByTone;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-3xl border border-charcoal/10 bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bgByTone[tone]}`}>{icon}</span>
      <div>
        <h3 className="font-heading text-lg font-semibold text-charcoal">{title}</h3>
        <p className="mt-1 text-sm text-charcoal/70">{blurb}</p>
      </div>
    </Link>
  );
}
