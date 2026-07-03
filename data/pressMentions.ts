// Rendered as text badges/quote cards, not scraped logos — see PLACEHOLDERS.md.
export interface PressMention {
  outlet: string;
  quoteKey: "press.quote1" | "press.quote2" | "press.quote3";
}

export const pressMentions: PressMention[] = [
  { outlet: "Time Out Doha", quoteKey: "press.quote1" },
  { outlet: "ILoveQatar", quoteKey: "press.quote2" },
  { outlet: "974 Qatar", quoteKey: "press.quote3" },
];
