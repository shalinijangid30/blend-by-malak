import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppButton({
  href,
  label,
  variant = "solid",
  className = "",
}: {
  href: string;
  label: string;
  variant?: "solid" | "outline" | "outlineLight";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-heading text-sm sm:text-base font-medium transition-transform active:scale-95";
  const stylesByVariant = {
    solid: "bg-coral text-white shadow-lg shadow-coral/30 hover:brightness-105",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
    outlineLight: "border-2 border-white text-white hover:bg-white hover:text-coral",
  };
  const styles = stylesByVariant[variant];

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <WhatsAppIcon />
      {label}
    </Link>
  );
}
