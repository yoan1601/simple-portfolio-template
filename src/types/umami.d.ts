// Script Umami chargé dans Base.astro : absent en local, sur les aperçus et chez Harena (umami.disabled).
interface Window {
  umami?: { track: (event: string, data?: Record<string, string>) => void };
}
