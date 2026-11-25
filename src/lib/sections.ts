// Ordre des 11 sections de la page : sert à numéroter la marge (01 à 11) et le menu mobile.
export const sectionOrder = [
  "hero",
  "problems",
  "offer",
  "method",
  "register",
  "proof",
  "formats",
  "refusals",
  "faq",
  "about",
  "contact",
] as const;

export type SectionKey = (typeof sectionOrder)[number];

export function sectionNumber(key: SectionKey): string {
  return String(sectionOrder.indexOf(key) + 1).padStart(2, "0");
}
