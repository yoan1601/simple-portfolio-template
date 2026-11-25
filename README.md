# harena.systems

Page d'accueil de Harena Juan Rabarijaona : l'IA pour les PME qui vendent sur Messenger et WhatsApp.
Site statique en [Astro](https://astro.build), français à la racine (`/`), anglais sous `/en/`, déployé sur Vercel.

## Lancer en local

Node **22.23.4 ou plus récent, en 22.x** (exigence d'Astro 7). Avec un Node plus ancien, préfixer les commandes
par `npx -p node@22`.

```bash
npm install
cp .env.example .env   # puis renseigner les deux valeurs
npm run dev            # http://localhost:4321
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run check` | Vérification des types et des composants |
| `npm run build` | Site statique dans `dist/` |
| `npm run preview` | Sert `dist/` en local |
| `npm run og` | Régénère les images de partage `public/og/` (Edge ou Chrome installé requis) |

## Variables d'environnement

Lues au build par `astro:env` (schéma dans `astro.config.mjs`), jamais écrites dans le code.
En local dans `.env` (non versionné), en ligne dans les variables du projet Vercel (aperçu et production).

| Variable | Rôle |
|---|---|
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Clé du formulaire de contact (Web3Forms) |
| `PUBLIC_UMAMI_WEBSITE_ID` | Identifiant du site dans Umami (statistiques) |

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Textes de la page | `src/i18n/fr.ts` (fait référence) et `src/i18n/en.ts` (même forme, vérifiée par le typage) |
| Couleurs, typographie commune, boutons | `src/styles/global.css` |
| Polices | `astro.config.mjs` (API Fonts, servies par le site) |
| Une section | `src/components/sections/` |
| Vidéo de la section Preuves | `src/lib/video.ts` (masquée tant que `kind: "none"`, mode d'emploi dans le fichier) |
| Lien Calendly, LinkedIn | `src/i18n/index.ts` |
| Photo | `src/assets/portrait-harena.jpg` |
| Images de partage | `npm run og` après un changement de titre, d'accroche ou de signature |

## Mesure (Umami)

Événements suivis : `calendly_click` (position, langue), `form_submit` (succès réel seulement), `lang_switch`,
`video_play`, `linkedin_click`. Le script ne compte que sur `harena.systems` et `www.harena.systems` : ni le local
ni les aperçus Vercel. Pour exclure ses propres visites : `localStorage.setItem("umami.disabled", "1")` dans la
console du navigateur, sur le site en ligne.

## Déploiement

Chaque push sur une branche crée un aperçu Vercel ; la production suit `main`. Réglages de build dans `vercel.json`
(préréglage Astro, `npm run build`, dossier `dist`). Node 22.x dans les réglages du projet.

## Règles de contenu

Aucun chiffre non mesuré, aucun prix, employeur jamais nommé, « malagasy » et jamais « malgache »,
pas de tiret cadratin, pas d'emoji, vouvoiement.
