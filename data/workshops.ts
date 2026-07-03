// PLACEHOLDER DATA — see PLACEHOLDERS.md. Replace prices/copy once Malak confirms.
export type WorkshopCategory = "mirror" | "mug" | "crochet" | "canvas";

export interface Workshop {
  id: string;
  category: WorkshopCategory;
  priceQar: number;
  durationMinutes: number;
  includes: string[];
}

export const workshops: Workshop[] = [
  {
    id: "mirror-painting",
    category: "mirror",
    priceQar: 170,
    durationMinutes: 120,
    includes: ["Mirror + frame", "All paints & brushes", "Apron", "Guided instruction"],
  },
  {
    id: "mug-painting",
    category: "mug",
    priceQar: 150,
    durationMinutes: 90,
    includes: ["Ceramic mug", "Dishwasher-safe paint", "Apron", "Guided instruction"],
  },
  {
    id: "crochet",
    category: "crochet",
    priceQar: 180,
    durationMinutes: 150,
    includes: ["Hook + yarn set", "Take-home project", "Beginner-friendly pattern", "Guided instruction"],
  },
  {
    id: "canvas-painting",
    category: "canvas",
    priceQar: 170,
    durationMinutes: 120,
    includes: ["Canvas + easel", "All paints & brushes", "Apron", "Guided instruction"],
  },
];
