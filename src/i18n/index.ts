import { fr, type Content } from "./fr";
import { en } from "./en";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

// Liens externes, identiques dans les deux langues. Les UTM de Calendly sont ajoutés à l'étape 7.
export const links = {
  calendly: "https://calendly.com/harena-juan/premier-echange",
  linkedin: "https://www.linkedin.com/in/harena-yoan/",
} as const;

// Typographie française : espace insécable avant « : ; ! ? » », après « « », et dans les milliers (3 000).
// Appliquée au rendu pour que fr.ts reste identique au texte validé.
function frenchSpacing(text: string): string {
  return text
    .replace(/ ([:;!?»])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/(\d) (?=\d{3}\b)/g, "$1 ");
}

function mapStrings<T>(value: T, fn: (text: string) => string): T {
  if (typeof value === "string") return fn(value) as T;
  if (Array.isArray(value)) return value.map((item) => mapStrings(item, fn)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, mapStrings(item, fn)])) as T;
  }
  return value;
}

const content: Record<Locale, Content> = {
  fr: mapStrings(fr, frenchSpacing),
  en,
};

export function getContent(locale: Locale): Content {
  return content[locale];
}
