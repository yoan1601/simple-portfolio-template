// Vidéo 1 de la section Preuves (assistant juridique sur WhatsApp).
// Décision du 25/11 : emplacement masqué tant qu'il n'y a pas de vidéo. Pour l'activer, remplacer
// `kind: "none"` par l'une des deux formes ci-dessous. L'image d'aperçu est facultative : sans elle,
// l'emplacement garde le quadrillage de la maquette.
//
//   Fichier sur le site (placé dans public/video/) :
//     { kind: "file", src: "/video/assistant-juridique.mp4", type: "video/mp4", poster: apercu }
//   Post LinkedIn (URL d'intégration donnée par « Intégrer ce post », et URL publique du post) :
//     { kind: "linkedin", embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:…",
//       postUrl: "https://www.linkedin.com/posts/…", poster: apercu }
//
// avec, en tête de fichier : import apercu from "../assets/video-apercu.jpg";
import type { ImageMetadata } from "astro";

export type VideoSource =
  | { kind: "none" }
  | { kind: "file"; src: string; type: string; poster?: ImageMetadata }
  | { kind: "linkedin"; embedUrl: string; postUrl: string; poster?: ImageMetadata };

export const legalAssistantVideo: VideoSource = { kind: "none" };
