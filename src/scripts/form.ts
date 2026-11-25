// Envoi du formulaire de contact vers Web3Forms, en arrière-plan, avec les états dans la page.
// Logique reprise de l'ancien js/form.js (JSON, botcheck, form_submit seulement si Web3Forms répond success),
// textes et clé désormais fournis par la page (i18n et astro:env).

const ENDPOINT = "https://api.web3forms.com/submit";
const TIMEOUT_MS = 15000;

export function initContactForms(): void {
  document.querySelectorAll<HTMLElement>("[data-contact-form]").forEach(setup);
}

function setup(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>("[data-form]");
  const submit = root.querySelector<HTMLButtonElement>("[data-form-submit]");
  const submitLabel = root.querySelector<HTMLElement>("[data-form-submit-label]");
  const errorZone = root.querySelector<HTMLElement>("[data-form-error]");
  const statusZone = root.querySelector<HTMLElement>("[data-form-status]");
  const successTemplate = root.querySelector<HTMLTemplateElement>("[data-form-template-success]");
  const errorTemplate = root.querySelector<HTMLTemplateElement>("[data-form-template-error]");
  const sendingText = root.querySelector<HTMLElement>("[data-form-sending-label]")?.textContent ?? "";
  if (!form || !submit || !submitLabel || !errorZone || !statusZone || !successTemplate || !errorTemplate) return;

  const idleText = submitLabel.textContent ?? "";
  let busy = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;
    busy = true;

    errorZone.replaceChildren();
    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    submitLabel.textContent = sendingText;

    const data = new FormData(form);
    const payload = {
      access_key: String(data.get("access_key") ?? ""),
      subject: String(data.get("subject") ?? ""),
      from_name: String(data.get("from_name") ?? ""),
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      botcheck: data.get("botcheck") !== null,
    };

    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => ({}))) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error(`Web3Forms : statut ${response.status}`);

      // Succès réel : confirmation à la place du formulaire, puis événement Umami.
      form.hidden = true;
      statusZone.replaceChildren(successTemplate.content.cloneNode(true));
      window.umami?.track("form_submit", { locale: root.dataset.locale ?? "" });
    } catch (error) {
      // Échec (réseau, délai, refus) : message d'erreur, champs conservés pour réessayer.
      console.error("Envoi du formulaire :", error);
      errorZone.replaceChildren(errorTemplate.content.cloneNode(true));
    } finally {
      window.clearTimeout(timer);
      busy = false;
      submit.disabled = false;
      submit.removeAttribute("aria-busy");
      submitLabel.textContent = idleText;
    }
  });
}
