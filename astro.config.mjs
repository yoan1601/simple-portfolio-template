// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

// Site statique. Français à la racine, anglais sous /en/.
// Domaine canonique : www (harena.systems redirige vers www dans Vercel).
export default defineConfig({
  site: "https://www.harena.systems",
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Variables publiques : lues au build depuis .env (local) ou Vercel (aperçu, production). Jamais en dur.
  env: {
    schema: {
      PUBLIC_WEB3FORMS_ACCESS_KEY: envField.string({ context: "client", access: "public" }),
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({ context: "client", access: "public" }),
    },
  },

  // Polices téléchargées au build et servies depuis le site (aucune requête vers Google chez le visiteur).
  // Seulement les 6 variantes de la version B, sous-ensemble latin.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "DM Serif Display",
      cssVariable: "--font-display",
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans",
      cssVariable: "--font-sans",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-mono",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
});
