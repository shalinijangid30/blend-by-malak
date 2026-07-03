// THIS IS THE FILE MALAK (OR WHOEVER RUNS THE SITE) EDITS EVERY WEEK.
// Update the entries below to reflect the current week's pop-up sessions.
// No build step or developer needed — just edit the values and redeploy,
// or swap this for a lightweight CMS field later (see PLACEHOLDERS.md).
export interface ScheduleEntry {
  id: string;
  workshopId: string;
  dateLabelEn: string;
  dateLabelAr: string;
  venueEn: string;
  venueAr: string;
  themeEn: string;
  themeAr: string;
  spotsLeft: number;
}

export const thisWeeksSchedule: ScheduleEntry[] = [
  {
    id: "week-mon",
    workshopId: "mirror-painting",
    dateLabelEn: "Mon, 7 Jul",
    dateLabelAr: "الإثنين، ٧ يوليو",
    venueEn: "Isaan Cafe, West Bay",
    venueAr: "مقهى إيسان، الخليج الغربي",
    themeEn: "Sunset Mirrors",
    themeAr: "مرايا الغروب",
    spotsLeft: 4,
  },
  {
    id: "week-wed",
    workshopId: "mug-painting",
    dateLabelEn: "Wed, 9 Jul",
    dateLabelAr: "الأربعاء، ٩ يوليو",
    venueEn: "Ipanema Coffee, Msheireb",
    venueAr: "إيبانيما كوفي، مشيرب",
    themeEn: "Sip & Paint Mugs",
    themeAr: "ارسمي وارتشفي",
    spotsLeft: 7,
  },
  {
    id: "week-fri",
    workshopId: "crochet",
    dateLabelEn: "Fri, 11 Jul",
    dateLabelAr: "الجمعة، ١١ يوليو",
    venueEn: "The Books Cafe, Katara",
    venueAr: "مقهى ذا بوكس، كتارا",
    themeEn: "Crochet Circle",
    themeAr: "دائرة الكروشيه",
    spotsLeft: 2,
  },
];
