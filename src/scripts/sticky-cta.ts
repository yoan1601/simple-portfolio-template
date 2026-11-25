// Barre d'appel fixe : visible quand le bouton du hero est passé (au-dessus de l'écran)
// et qu'aucune zone d'arrêt (section contact, pied de page) n'est à l'écran.

export function initStickyCta(): void {
  const bar = document.querySelector<HTMLElement>("[data-sticky-cta]");
  if (!bar || !("IntersectionObserver" in window)) return;

  const anchor = document.querySelector(bar.dataset.anchor ?? "");
  const stops = [...document.querySelectorAll(bar.dataset.stop ?? "")];
  if (!anchor) return;

  let anchorPassed = false;
  const stopsInView = new Set<Element>();

  const update = () => {
    const visible = anchorPassed && stopsInView.size === 0;
    bar.classList.toggle("is-visible", visible);
    // Cachée : ni lue, ni atteignable au clavier.
    bar.toggleAttribute("inert", !visible);
    bar.setAttribute("aria-hidden", String(!visible));
  };

  new IntersectionObserver(([entry]) => {
    // Passé seulement s'il est sorti par le haut (pas encore atteint s'il est sous l'écran).
    anchorPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
    update();
  }).observe(anchor);

  const stopObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => (entry.isIntersecting ? stopsInView.add(entry.target) : stopsInView.delete(entry.target)));
    update();
  });
  stops.forEach((stop) => stopObserver.observe(stop));
}
