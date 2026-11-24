import { fr, type Content } from "./fr";
import { en } from "./en";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

const content: Record<Locale, Content> = { fr, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}
