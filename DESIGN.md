---
name: Blend by Malak
description: house of ART . Blend in your own way — a bilingual, mobile-first pop-up workshop site for Doha's paint-and-craft hangout brand
colors:
  coral: "#ff6b57"
  turquoise: "#2ec4b6"
  mustard: "#ffc145"
  blush: "#ff9ec4"
  navy: "#3a5a9b"
  plum: "#8a6bb8"
  cream: "#fff8f0"
  charcoal: "#241c1c"
typography:
  heading:
    fontFamily: "Fredoka, sans-serif"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  heading-ar:
    fontFamily: "Cairo, sans-serif"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-ar:
    fontFamily: "Cairo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  pill: "9999px"
  lg: "24px"
  md: "16px"
  sm: "12px"
spacing:
  card-padding: "24px"
  section-y: "56px"
  grid-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  card-pastel:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  input-field:
    backgroundColor: "#ffffff"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: Blend by Malak

## 1. Overview

**Creative North Star: "The Café Paint Table"**

Blend by Malak is a Doha pop-up that turns café tables into paint stations for people with zero art experience who just want a good hangout. The visual system reads like that table itself: bright, uncomplicated, low-stakes, communal — a spread of open paint pots and mismatched pastel colors, not a gallery wall. Every surface stays playful and social rather than polished or precious; the site is simultaneously a self-serve booking funnel for consumers and a pitch asset for café/corporate partners, so it has to look legitimate without ever tipping into corporate or fine-art register.

This system explicitly rejects the generic "art class" stock-template look — no white-box gallery minimalism, no stock photography of unrelated hands with paintbrushes, no institutional polish. Real Instagram-native photography and video (café settings, actual workshop mess, genuine captions) is the hero asset; layouts exist to give that content room, not to compete with it.

**Key Characteristics:**
- A six-color pastel rotation (coral, turquoise, mustard, blush, navy, plum) cycles across cards instead of one repeated accent — every "row" of content gets its own color, like separate paint pots on the table.
- Flat, hairline-bordered cards in soft tinted fills — no drop shadows except on the one action that matters (the WhatsApp CTA).
- Fully rounded pill buttons and generously rounded card corners (24px) — nothing sharp-edged or clinical.
- Bilingual by construction: every layout mirrors correctly in Arabic/RTL, with a distinct Arabic type family (Cairo) rather than a translated afterthought bolted onto an English-first design.

## 2. Colors

The palette is a rotation, not a hierarchy — six roughly-equal pastel tones taking turns as the "color of this card," anchored by coral as the one true action color.

### Primary
- **Coral** (`#ff6b57`): The single action color. Every WhatsApp CTA, every primary heading accent, every "press this" moment. Reserved for calls-to-action and the first slot in the pastel rotation — it is the loudest color in the system and stays rare outside of buttons.

### Secondary (the pastel rotation)
- **Turquoise** (`#2ec4b6`): Second slot in the card-color rotation (mug painting, "Chat with us" contact card). Cool counterweight to coral.
- **Mustard** (`#ffc145`): Third rotation slot (crochet cards); also the dominant background hue behind the hero's blob illustration and the "eyebrow" accent color on dark backgrounds.
- **Blush** (`#ff9ec4`): Fourth rotation slot (canvas painting cards).
- **Plum** (`#8a6bb8`): Fifth rotation slot (private events cards, private-event form background).
- **Navy** (`#3a5a9b`): Sixth rotation slot; also used in the hero blob illustration for contrast against mustard.

### Neutral
- **Cream** (`#fff8f0`): Page background. Warm off-white, never stark white — the "tablecloth" the paint pots sit on.
- **Charcoal** (`#241c1c`): Primary text color and dark-surface color (footer, mobile menu backdrop text). Near-black but warm, matching the cream's undertone rather than a true neutral gray.
- **White** (`#ffffff`): Card backgrounds when a section needs to stay quiet (schedule strip container, form inputs), and the icon-badge background sitting inside pastel cards for contrast.

### Named Rules
**The One Pot Per Card Rule.** Each card in a list (workshop types, schedule days, press quotes) gets exactly one pastel tone from the six-color rotation via `pastelTones[index % 6]` — never the same flat white repeated down the page, and never more than one accent color inside a single card.

## 3. Typography

**Display/Heading Font:** Fredoka (EN), with Cairo as the Arabic equivalent
**Body Font:** Inter (EN), with Cairo (AR) — Cairo does double duty as both heading and body face in RTL, since it was chosen for a friendly weight range that works at both sizes.

**Character:** Fredoka is a rounded, slightly bouncy geometric sans — it supplies the "hand-drawn craft-kit" personality on headings. Inter stays quiet and legible underneath it for body copy so the page doesn't feel loud everywhere at once.

### Hierarchy
- **Display/Hero** (Fredoka, 600, `text-4xl` → `text-5xl` responsive, tight line-height): the hero headline only, e.g. "Come blend in your own way."
- **Headline** (Fredoka, 600, `text-2xl` → `text-3xl`): section titles ("This week's workshop", "What we blend").
- **Title** (Fredoka, 600, `text-lg` → `text-xl`): card titles (workshop names, modal titles).
- **Body** (Inter, 400, `text-sm`–`text-base`, 1.6 line-height): descriptions, form labels, schedule details. Body copy stays at charcoal/70-80% opacity rather than a separate gray token — softening via opacity, not a second ink color.
- **Label** (Inter, 600, `text-xs`, uppercase, wide tracking): field-group labels like "INCLUDES", "SELECT A DATE" — the only place all-caps tracked type appears, deliberately rare.

### Named Rules
**The One Loud Face Rule.** Fredoka only ever appears on headings and buttons. Body copy is always Inter (or Cairo in RTL) — never both display and body set in the same bouncy face, or the page reads as a children's app instead of a craft hangout.

## 4. Elevation

Flat by default. Cards are pastel-filled with a 1px `charcoal/10` hairline border and no shadow — depth comes from color contrast against the cream page background, not from drop shadows. The **only** shadow in the system sits under the solid coral WhatsApp button (`shadow-lg shadow-coral/30`), a soft color-matched glow rather than a neutral gray shadow, so it reads as "this button is lit up," not "this button is stacked above the page."

### Shadow Vocabulary
- **CTA glow** (`shadow-lg shadow-coral/30`): reserved for the primary coral WhatsApp button, in every variant across the site. Never applied to cards, nav, or secondary buttons.
- **Card hover lift** (`hover:-translate-y-1 hover:shadow-xl`, category cards only): a small upward nudge plus a neutral shadow on hover to signal "clickable," gone again at rest.

### Named Rules
**The Lit-Button-Only Rule.** If it isn't the thing you're supposed to tap next, it doesn't get a shadow. Cards and containers stay flat; only actionable CTAs earn a glow.

## 5. Components

Soft, rounded, tactile — every corner is generously rounded, every surface is a flat pastel fill, nothing sharp or clinical. Buttons and cards feel like stickers laid on the cream page, not panels floating above it.

### Buttons
- **Shape:** fully rounded pill (`rounded-full`, 9999px) — every button on the site, no exceptions.
- **Primary (solid):** coral background, white text, `shadow-lg shadow-coral/30`, `hover:brightness-105`, `active:scale-95`. Always paired with the WhatsApp glyph — this is the one CTA shape in the system.
- **Outline:** transparent background, 2px charcoal border, charcoal text; inverts to solid charcoal fill with cream text on hover. Used for secondary actions on light backgrounds.
- **Outline-light:** same outline treatment in white, for use over the dark hero/footer sections; inverts to white fill with coral text on hover.
- **Disabled state** (reserve-modal confirm button): `disabled:opacity-40 disabled:cursor-not-allowed`, no color change otherwise — stays visually part of the family, just dimmed.

### Cards / Containers
- **Corner style:** `rounded-3xl` (24px) for content cards, `rounded-2xl` (16px) for icon badges and smaller sub-containers.
- **Background:** one pastel tone from the six-color rotation at 10-15% opacity fill (`bg-coral/10`, `bg-mustard/15`, etc.) — never plain white for a card in a repeated list; plain white is reserved for singular containers (schedule-strip wrapper, form inputs).
- **Border:** 1px `border-charcoal/10` hairline on every card, pastel or white.
- **Icon badge:** a `rounded-2xl` white/70%-opacity square (56px) sitting inside the pastel card, holding a line icon colored to match the card's accent tone — the badge exists purely for contrast against the tinted card background.
- **Internal padding:** 24px (`p-6`) standard; 32px (`p-8`) for singular "hero" cards like the About page's philosophy panel or the Contact WhatsApp card.

### Inputs / Fields
- **Style:** white background, `rounded-xl` (12px), 1px `border-charcoal/15`, `placeholder:text-charcoal/40`.
- **Focus:** border shifts to solid coral (`focus:border-coral`), no glow/ring — a simple, quiet state change consistent with the flat-elevation doctrine.
- Fields always sit on a pastel-tinted form card, so the white input is the thing that visually "pops" against its container.

### Navigation
- Sticky header, `bg-cream/90` with `backdrop-blur`, hairline bottom border — stays translucent over whatever scrolls beneath it rather than a hard opaque bar.
- Link style: `text-charcoal/80`, hover to coral, no underline — text-color shift is the only hover feedback.
- Mobile: hamburger toggle expands a full-width dropdown panel in solid cream, same link styling, locale switcher and CTA repeated at the bottom.

### Reserve Modal (signature component)
A bottom-sheet-on-mobile / centered-dialog-on-desktop pattern (`rounded-t-3xl` mobile, `rounded-3xl` desktop) that opens a native month calendar directly from a "Reserve your spot" button — no page navigation. Bookable days render as `bg-turquoise/10` pills; the selected day inverts to solid coral. Time slots appear as a stacked list of outlined pills below the calendar once a date is picked, and the final "Confirm on WhatsApp" button is the same primary coral pill used everywhere else, disabled until both a date and time are chosen. Dismissible by Escape, backdrop click, or the corner ✕.

## 6. Do's and Don'ts

### Do:
- **Do** cycle every list of cards through the six-tone pastel rotation (`lib/pastelTones.ts`) — one tone per card, no repeats of plain white down a list.
- **Do** keep buttons fully pill-shaped (`rounded-full`) and cards generously rounded (`rounded-3xl`/`rounded-2xl`) — nothing sharp.
- **Do** reserve the coral CTA glow (`shadow-lg shadow-coral/30`) for the one action per screen that matters; every other surface stays flat.
- **Do** mirror every layout correctly in Arabic/RTL — nav order, calendar direction, icon flips — rather than trusting automatic text-direction alone.
- **Do** let real workshop photography and video fill cards edge-to-edge; the work is the sell, not the copy around it.

### Don't:
- **Don't** introduce a generic "art class" stock-template look — no white-box gallery minimalism, no stock photography of unrelated hands with paintbrushes, no institutional/gallery polish (per PRODUCT.md's anti-reference).
- **Don't** add drop shadows to cards, nav, or containers. The system is flat by design; shadows are reserved for the primary CTA only.
- **Don't** set body copy in Fredoka (or Cairo at heading weight) — display type stays on headings and buttons only.
- **Don't** introduce a second gray/neutral ink color for de-emphasized text; use charcoal at reduced opacity (`/70`, `/80`) instead of a separate gray token.
- **Don't** build a competing booking form or flow that doesn't resolve to a pre-filled WhatsApp link — every CTA in the system ends at `wa.me`.
