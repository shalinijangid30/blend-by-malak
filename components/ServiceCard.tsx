import Link from "next/link";
import type { ReactNode } from "react";
import { pastelTones } from "@/lib/pastelTones";

export function ServiceCard({
  icon,
  title,
  blurb,
  toneIndex,
  href,
}: {
  icon: ReactNode;
  title: string;
  blurb: string;
  toneIndex: number;
  href: string;
}) {
  const tone = pastelTones[toneIndex % pastelTones.length];

  return (
    <Link
      href={href}
      className={`group flex flex-col gap-4 rounded-3xl border border-charcoal/10 ${tone.bg} p-6 transition-transform hover:-translate-y-1 hover:shadow-xl`}
    >
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 ${tone.accent}`}>
        {icon}
      </span>
      <div>
        <h3 className={`font-heading text-lg font-semibold ${tone.accent}`}>{title}</h3>
        <p className="mt-1 text-sm text-charcoal/70">{blurb}</p>
      </div>
    </Link>
  );
}
