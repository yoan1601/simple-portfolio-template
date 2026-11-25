// Transmission des UTM d'arrivée aux boutons Calendly (attribution, décision 9).
// Un visiteur arrivé par https://www.harena.systems/?utm_source=lahety&utm_medium=video garde cette source
// jusqu'à sa réservation, même après avoir changé de langue : les boutons Calendly reçoivent
// utm_source, utm_medium, utm_campaign et utm_term d'arrivée ; utm_content garde la position du bouton.
// Sans UTM d'arrivée (ou sans JavaScript), les liens gardent les valeurs du site (source harena.systems).

const STORAGE_KEY = "harena.utm";
const PASSED = ["utm_source", "utm_medium", "utm_campaign", "utm_term"] as const;
const SAFE_VALUE = /^[\w.-]{1,64}$/; // lettres, chiffres, _ . - ; rien d'autre n'est repris
const OWN_SOURCE = "harena.systems";

type Utm = Partial<Record<(typeof PASSED)[number], string>>;

function readFromUrl(): Utm | null {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source");
  if (!source || source === OWN_SOURCE || !SAFE_VALUE.test(source)) return null;
  const utm: Utm = {};
  for (const key of PASSED) {
    const value = params.get(key);
    if (value && SAFE_VALUE.test(value)) utm[key] = value;
  }
  return utm;
}

function readStored(): Utm | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Utm;
    return parsed.utm_source && SAFE_VALUE.test(parsed.utm_source) ? parsed : null;
  } catch {
    return null;
  }
}

function store(utm: Utm): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    /* stockage indisponible (navigation privée stricte) : transmission limitée à cette page */
  }
}

export function initUtmPassThrough(): void {
  const fromUrl = readFromUrl();
  if (fromUrl) store(fromUrl);
  const utm = fromUrl ?? readStored();
  if (!utm) return;

  document.querySelectorAll<HTMLAnchorElement>("a[data-umami-event='calendly_click']").forEach((link) => {
    const url = new URL(link.href);
    for (const key of PASSED) {
      if (utm[key]) url.searchParams.set(key, utm[key]);
    }
    link.href = url.href;
    // Source d'arrivée aussi dans l'événement Umami (onglet Properties).
    link.dataset.umamiEventSource = utm.utm_source;
  });
}
