// PLACEHOLDER NUMBER — replace with Malak's real WhatsApp business number.
// See PLACEHOLDERS.md.
export const WHATSAPP_NUMBER = "974XXXXXXX";

export function buildWaLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
