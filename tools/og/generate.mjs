// Images de partage (Open Graph) FR et EN, 1200 × 630, dans public/og/.
// Rendu d'un gabarit HTML aux couleurs et polices du site, textes lus dans src/i18n/fr.ts et en.ts.
// Hors du build : à relancer seulement si le titre, l'accroche ou la signature changent.
//
//   npm run og        (ou : npx -p node@22 npm run og si le Node local est trop ancien)
//
// Utilise Edge ou Chrome installé sur la machine (aucun navigateur téléchargé) et Google Fonts au moment
// du rendu (le site, lui, sert ses polices lui-même).
import { mkdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = resolve(root, "public/og");
mkdirSync(outDir, { recursive: true });

const { fr } = await import(pathToFileURL(resolve(root, "src/i18n/fr.ts")).href);
const { en } = await import(pathToFileURL(resolve(root, "src/i18n/en.ts")).href);

// Même typographie française que src/i18n/index.ts
const frenchSpacing = (s) =>
  s
    .replace(/ ([:;!?»])/g, " $1")
    .replaceAll("« ", "« ")
    .replace(/(\d) (?=\p{L})/gu, "$1 ");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function page(t, locale) {
  const fix = locale === "fr" ? frenchSpacing : (s) => s;
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400&display=block">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #0A0A08; color: #E6E0D6;
    background-image: radial-gradient(ellipse 70% 70% at 15% 10%, rgba(200,133,58,0.08) 0%, transparent 60%); }
  .frame { position: absolute; inset: 0; padding: 64px 80px 56px; display: flex; flex-direction: column; }
  .margin { display: flex; align-items: center; gap: 14px; font: 500 17px/1 'IBM Plex Mono', monospace;
    letter-spacing: 0.14em; text-transform: uppercase; color: #857F73; }
  .margin b { color: #C8853A; font-weight: 500; }
  .margin i { width: 28px; height: 1px; background: #C8853A; }
  .body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding-left: 40px;
    border-left: 1px solid rgba(200,133,58,0.25); margin: 34px 0 30px; }
  h1 { font: 400 76px/1.04 'DM Serif Display', serif; letter-spacing: -0.015em; max-width: 15ch; }
  p.lead { margin-top: 26px; max-width: 880px; font: 400 26px/1.45 'IBM Plex Sans', sans-serif; color: #CFC8BC; }
  .foot { display: flex; align-items: center; justify-content: space-between; padding-top: 22px;
    border-top: 1px solid rgba(200,133,58,0.25); }
  .name { font: italic 400 28px/1 'DM Serif Display', serif; color: #F0EBE3; }
  .sig { font: italic 400 26px/1 'DM Serif Display', serif; color: #C8853A; }
  .site { font: 400 17px/1 'IBM Plex Mono', monospace; letter-spacing: 0.06em; color: #857F73; }
</style></head><body><div class="frame">
  <p class="margin"><b>01</b><i></i>${esc(fix(t.hero.margin.join(" · ")))}</p>
  <div class="body">
    <h1>${esc(fix(t.hero.title))}</h1>
    <p class="lead">${esc(fix(t.hero.lead))}</p>
  </div>
  <div class="foot">
    <span class="name">${esc(t.ui.siteName)}</span>
    <span class="sig">${esc(fix(t.ui.signature))}</span>
    <span class="site">harena.systems</span>
  </div>
</div></body></html>`;
}

let browser;
for (const channel of ["msedge", "chrome"]) {
  try {
    browser = await chromium.launch({ channel });
    break;
  } catch {
    /* navigateur suivant */
  }
}
if (!browser) throw new Error("Ni Edge ni Chrome trouvés sur cette machine.");

for (const [locale, t] of [["fr", fr], ["en", en]]) {
  const p = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.setContent(page(t, locale), { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  const file = resolve(outDir, `og-${locale}.png`);
  await p.screenshot({ path: file, type: "png" });
  console.log(`${file} : ${Math.round(statSync(file).size / 1024)} Ko`);
  await p.close();
}
await browser.close();
