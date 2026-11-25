// Lecture au clic : remplace l'aperçu par le lecteur (fichier ou intégration LinkedIn), puis envoie video_play.
// Le lecteur n'est chargé qu'à ce moment-là : rien de la vidéo n'est téléchargé avant le clic.

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

export function initVideoSlots(): void {
  document.querySelectorAll<HTMLElement>("[data-video]").forEach((slot) => {
    const poster = slot.querySelector<HTMLAnchorElement>("[data-video-play]");
    if (!poster) return;

    poster.addEventListener("click", (event) => {
      // Ctrl ou Cmd + clic : on laisse le navigateur ouvrir le lien dans un nouvel onglet.
      if (event.ctrlKey || event.metaKey || event.shiftKey) return;
      event.preventDefault();

      const { videoKind, videoSrc, videoType, videoLabel, videoId, locale } = slot.dataset;
      if (!videoSrc) return;

      let player: HTMLVideoElement | HTMLIFrameElement;
      if (videoKind === "file") {
        const video = document.createElement("video");
        video.controls = true;
        video.playsInline = true;
        video.autoplay = true; // déclenché par le clic du visiteur, jamais au chargement
        const source = document.createElement("source");
        source.src = videoSrc;
        if (videoType) source.type = videoType;
        video.append(source);
        player = video;
      } else {
        const iframe = document.createElement("iframe");
        iframe.src = videoSrc;
        iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
        iframe.allowFullscreen = true;
        player = iframe;
      }
      player.setAttribute("aria-label", videoLabel ?? "");
      player.setAttribute("tabindex", "-1");

      poster.replaceWith(player);
      player.focus();

      window.umami?.track("video_play", { video: videoId ?? "", locale: locale ?? "", kind: videoKind ?? "" });
    });
  });
}
