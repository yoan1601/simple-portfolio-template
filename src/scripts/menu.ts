// Menu mobile : ouverture en <dialog> modal. Sans JavaScript, le bouton reste caché et la page se lit d'un trait.
// Échap ferme le dialogue nativement (événement « cancel »).

const DESKTOP_QUERY = "(min-width: 1100px)";

export function initMobileMenu(): void {
  const dialog = document.querySelector<HTMLDialogElement>("#mobile-menu");
  const openButton = document.querySelector<HTMLButtonElement>("[data-menu-open]");
  if (!dialog || !openButton || typeof dialog.showModal !== "function") return;

  openButton.hidden = false;

  openButton.addEventListener("click", () => {
    dialog.showModal();
    openButton.setAttribute("aria-expanded", "true");
  });

  dialog.addEventListener("close", () => {
    openButton.setAttribute("aria-expanded", "false");
  });

  dialog.querySelector("[data-menu-close]")?.addEventListener("click", () => dialog.close());

  // Un lien de section ferme le menu ; la navigation vers l'ancre suit normalement.
  dialog.querySelectorAll("[data-menu-link]").forEach((link) => {
    link.addEventListener("click", () => dialog.close());
  });

  // Passage en largeur ordinateur menu ouvert : on le referme.
  window.matchMedia(DESKTOP_QUERY).addEventListener("change", (event) => {
    if (event.matches && dialog.open) dialog.close();
  });
}
