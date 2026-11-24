// @ts-check
import { defineConfig } from "astro/config";

// Site statique. Français à la racine, anglais sous /en/.
export default defineConfig({
  site: "https://harena.systems",
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
