// Contenu français : fait référence. Repris mot pour mot de contenu-fr-v1.md (validé le 24/11/2026),
// plus les textes d'interface de la maquette (proposition 5, acceptée le 25/11).
// Les espaces insécables de la typographie française sont posées par getContent(), pas ici.

export const fr = {
  meta: {
    title: "Harena Juan Rabarijaona · L'IA pour les PME qui vendent sur Messenger et WhatsApp",
    description:
      "Plus aucun client oublié dans vos messages. L'IA prépare et relance, votre équipe conclut. On part de vos vraies conversations, une étape à la fois.",
    ogLocale: "fr_FR",
    ogImageAlt: "Harena Juan Rabarijaona. Plus aucun client oublié dans vos messages.",
  },

  // Textes d'interface : navigation, langue, boutons, signature.
  ui: {
    skipLink: "Aller au contenu",
    siteName: "Harena Juan Rabarijaona",
    anchors: {
      top: "haut",
      offer: "offre",
      method: "methode",
      proof: "preuves",
      faq: "faq",
      contact: "contact",
    },
    nav: {
      label: "Navigation principale",
      offer: "L'offre",
      method: "Méthode",
      proof: "Preuves",
      faq: "FAQ",
      contact: "Contact",
    },
    menu: {
      open: "Ouvrir le menu",
      close: "Fermer le menu",
    },
    // Le sélecteur lit le nom et l'étiquette de la langue cible dans son propre fichier.
    lang: {
      groupLabel: "Langue",
      code: "FR",
      name: "Français",
      versionLabel: "Version française",
    },
    bookCall: "Réserver 30 minutes",
    opensInCalendly: "S'ouvre dans Calendly",
    signature: "L'IA prépare, vous décidez.",
  },

  // 1. Hero
  hero: {
    margin: ["AI Integration Lead", "Antananarivo"],
    title: "Plus aucun client oublié dans vos messages.",
    lead: "Pour les PME qui vendent sur Messenger et WhatsApp : l'IA prépare et relance, votre équipe conclut.",
    writeLink: "Ou écrivez-moi ce qui coince",
    note: "Premier échange de 30 minutes en visio. Aucun prix avant d'avoir vu vos données.",
  },

  // 2. Constats
  problems: {
    margin: ["Constats"],
    title: "Ce que je vois chez les dirigeants",
    items: [
      {
        title: "Les messages arrivent plus vite que l'équipe ne répond.",
        text: "Aux heures de pointe, la réponse prend des heures, et des clients repartent sans suite.",
      },
      {
        title: "Les règles sont dans un cahier, ou dans une tête.",
        text: "Prix, stock, conditions : on ne peut pas automatiser ce qui n'est écrit nulle part.",
      },
      {
        title: "Les réponses automatiques cassent dès que ça devient commercial.",
        text: "Un mot-clé suffit pour donner les horaires. Pour conclure une vente, il faut autre chose.",
      },
      {
        title: "Le soir, c'est vous qui rattrapez.",
        text: "Le suivi repose sur le dirigeant, entre deux urgences.",
      },
      {
        title: "L'erreur fait peur.",
        text: "Un assistant qui invente une réponse à un client, c'est pire que pas d'assistant du tout.",
      },
    ],
  },

  // 3. L'offre
  offer: {
    margin: ["L'offre", "Étape 1 · 8 semaines"],
    marginMobile: "L'offre · Étape 1",
    badge: "L'offre",
    title: "Le Système Zéro Client Oublié",
    subtitle: "8 semaines pour que chaque conversation ait un suivi, sans que votre équipe change d'outil.",
    pillars: [
      {
        title: "Le diagnostic sur vos vraies conversations.",
        text: "Je lis vos échanges, vos cahiers et vos statistiques. On pose ensemble un point de départ chiffré : le délai de première réponse, et le nombre de conversations restées sans suite.",
      },
      {
        title: "L'assistant dans Messenger ou WhatsApp.",
        text: "Il répond aux questions courantes et prépare la commande. Quand il faut conclure, il passe la main à votre équipe.",
      },
      {
        title: "Les relances.",
        text: "Chaque conversation a un suivi. Une alerte vous prévient quand un client attend depuis 48 heures.",
      },
    ],
    includedTitle: "Inclus aussi",
    included: [
      {
        title: "Le Grand Ménage",
        text: "Les erreurs visibles tout de suite, comme deux messages d'accueil qui se contredisent ou des informations périmées, corrigées dès la première semaine.",
      },
      {
        title: "La Liste du Matin",
        text: "Chaque matin, la liste des clients restés sans réponse, avant même que l'assistant soit en place.",
      },
      {
        title: "Le Registre des Règles",
        text: "Vos prix et vos conditions, écrits noir sur blanc. Il vous appartient, même si vous arrêtez.",
      },
      {
        title: "L'Atelier Équipe",
        text: "Deux heures pour que votre équipe sache quand l'assistant répond et quand elle reprend la main.",
      },
      {
        title: "Le Bilan du Vendredi",
        text: "Chaque semaine, où en sont vos indicateurs.",
      },
    ],
    guarantee: {
      badge: "Garantie",
      title: "La garantie Point de départ",
      text: "À la fin du diagnostic, on fixe ensemble un ou deux objectifs sur vos indicateurs. S'ils ne sont pas atteints à la fin des 8 semaines, je continue le suivi sans vous le facturer jusqu'à ce qu'ils le soient, pendant deux mois au plus.",
      // Proposition 6 : conditions en liste numérotée, mots inchangés.
      conditionsLabel: "Deux conditions",
      conditions: [
        "Votre équipe applique les règles que nous avons écrites ensemble.",
        "J'ai toujours accès aux données.",
      ],
      closing: "Vous ne vous engagez que sur cette première étape. Ensuite, vous décidez.",
    },
  },

  // 4. Méthode
  method: {
    margin: ["Méthode"],
    title: "Comment je travaille",
    steps: [
      {
        title: "Un menu de pistes.",
        text: "Après un premier échange, je vous envoie des pistes concrètes. Vous choisissez celles qui comptent pour vous.",
      },
      {
        title: "Le diagnostic sur le réel.",
        text: "Je regarde ce qui se passe vraiment chez vous, et je ne chiffre qu'après.",
      },
      {
        title: "Une étape à la fois.",
        text: "On met en place, on mesure, puis on passe à la suivante.",
      },
      {
        title: "L'humain garde la décision.",
        text: "L'IA prépare, trie, rédige et relance. Un prix, une commande sur mesure ou une embauche, ça reste votre décision.",
      },
      {
        title: "La mesure.",
        text: "Un point de départ et un point d'arrivée, chiffrés, pour savoir si ça a marché.",
      },
    ],
    // Étape qui porte la signature en marge (index dans steps).
    signatureStep: 3,
  },

  // 5. Avant, après (registre)
  register: {
    margin: ["Registre"],
    title: "Avant, après",
    columns: {
      number: "N°",
      before: "Avant",
      after: "Après",
    },
    rows: [
      {
        before: "Vous portez le suivi, l'équipe oublie des clients",
        after: "Chaque conversation a un suivi et une relance",
      },
      {
        before: "Les règles sont dans un cahier ou dans une tête",
        after: "Les règles sont écrites, l'équipe et l'assistant appliquent les mêmes",
      },
      {
        before: "Des heures de délai aux heures de pointe",
        after: "Une première réponse rapide et juste, puis l'humain conclut",
      },
      {
        before: "Personne ne sait si l'IA a servi à quelque chose",
        after: "Un point de départ et un point d'arrivée, chiffrés",
      },
      {
        before: "L'IA fait peur ou semble réservée aux grandes entreprises",
        after: "Vous savez ce qu'on automatise, ce qu'on refuse d'automatiser, et pourquoi",
      },
    ],
  },

  // 6. Preuves
  proof: {
    margin: ["Preuves"],
    title: "Ce que j'ai déjà livré",
    note: "Chaque projet est présenté à son stade réel.",
    featured: {
      status: "Prototype livré et démontré",
      title: "Assistant juridique sur WhatsApp",
      text: "Pour un entrepreneur qui connecte les dirigeants aux experts en IA, j'ai construit un assistant qui répond aux questions de droit malagasy directement sur WhatsApp, à partir de six textes de loi (environ 3 000 articles). Au début, il inventait parfois, par exemple un faux délai de préavis. Je l'ai obligé à chercher dans les textes avant chaque réponse et à citer l'article. Depuis, il n'a plus rien inventé sur mes questions de test, et il répond en 3 à 4 secondes.",
      video: {
        tag: "Vidéo 1",
        hint: "Lecture au clic",
        playLabel: "Lire la vidéo : assistant juridique sur WhatsApp",
        playerLabel: "Lecteur vidéo",
      },
    },
    // tagStyle : "badge" = statut encadré en ambre, "note" = annotation grise.
    items: [
      {
        tag: "Rentrée du Jeune Patronat, octobre 2026",
        tagStyle: "note",
        title: "Atelier « Construis ton premier agent en 60 minutes »",
        text: "30 chefs d'entreprise, pour la plupart non techniques. En binôme, ils ont construit 15 agents IA en une heure.",
      },
      {
        tag: "IndabaX Madagascar 2026",
        tagStyle: "note",
        title: "Conférence à IndabaX Madagascar 2026",
        text: "« Gouverner l'IA dans un logiciel métier, ce que le terrain impose ».",
      },
      {
        tag: "En phase de test",
        tagStyle: "badge",
        title: "Chez un éditeur de logiciels de gestion",
        text: "L'IA pour la paie et la lecture de factures. La règle : un humain valide chaque résultat.",
      },
    ],
  },

  // 7. Autres formats
  formats: {
    margin: ["Formats"],
    title: "Autres façons de travailler ensemble",
    items: [
      {
        title: "Ateliers et formations IA pour dirigeants.",
        text: "Pour les réseaux de dirigeants et les cabinets de formation. Les participants travaillent sur leurs propres cas.",
      },
      {
        title: "Expertise IA en sous-traitance.",
        text: "Pour les cabinets et les intégrateurs qui ont le client, mais pas l'expertise IA.",
      },
    ],
    othersLead: "D'autres problèmes que je résous :",
    othersText:
      "la présélection de CV et la rédaction des annonces, le recouvrement et le suivi commercial, la lecture de documents, et le résumé des comptes rendus que personne n'a le temps de lire.",
  },

  // 8. Refus
  refusals: {
    margin: ["Refus"],
    title: "Ce que je refuse de faire",
    items: [
      "Vendre un outil sans avoir fait le diagnostic.",
      "Promettre un chiffre avant de l'avoir mesuré.",
      "Laisser l'IA décider à votre place de ce qui engage votre entreprise.",
    ],
  },

  // 9. FAQ
  faq: {
    margin: ["Questions"],
    title: "Questions fréquentes",
    items: [
      {
        question: "Combien ça coûte ?",
        answer:
          "Je ne donne pas de prix avant d'avoir vu vos données. Le coût comprend une mise en place et un suivi mensuel, chiffrés étape par étape, et vous ne vous engagez que sur la première.",
      },
      {
        question: "L'IA va-t-elle répondre n'importe quoi à mes clients ?",
        answer:
          "Elle s'appuie sur vos règles écrites et dit quand elle ne sait pas. Ce qui engage l'entreprise reste à votre équipe.",
      },
      {
        question: "Qui met à jour quand mes prix ou mon stock changent ?",
        answer: "C'est la première chose qu'on règle, avant l'assistant. Sans mise à jour fiable, rien ne tient.",
      },
      {
        question: "Mes clients sauront-ils que c'est un assistant ?",
        answer: "C'est vous qui choisissez, tant que les réponses restent cohérentes.",
      },
      {
        question: "Faut-il changer d'outil ?",
        answer: "Non. Votre équipe reste dans Messenger et WhatsApp.",
      },
      {
        question: "Je n'ai pas le temps de m'en occuper.",
        answer: "Le diagnostic prend quelques heures avec les bonnes personnes. Ensuite, c'est moi qui construis.",
      },
    ],
  },

  // 10. Qui suis-je
  about: {
    margin: ["À propos"],
    title: "Qui suis-je",
    photoAlt: "Portrait de Harena Juan Rabarijaona",
    photoCaption: "Antananarivo",
    text: "Harena Juan Rabarijaona, à Antananarivo. J'intègre l'IA dans le travail réel des entreprises, là où l'équipe perd du temps et où les erreurs coûtent cher. Je suis aussi AI Integration Lead chez un éditeur de logiciels de gestion, où je travaille sur la paie et la lecture de factures. Membre le plus remarquable de la JCI Madagascar en 2026, je préside la JCI Iarivo en 2027.",
    facts: [
      { label: "Rôle", value: "AI Integration Lead" },
      { label: "JCI Madagascar, 2026", value: "Membre le plus remarquable" },
      { label: "JCI Iarivo, 2027", value: "Président" },
    ],
  },

  // 11. Appel final et formulaire
  contact: {
    margin: ["Contact"],
    title: "Racontez-moi ce qui coince.",
    text: "30 minutes en visio pour comprendre votre situation. Pas de prix pendant cet échange : si je vois des pistes, je vous les envoie ensuite, par écrit.",
    form: {
      title: "Vous préférez écrire ?",
      label: "Écrire un message",
      fields: {
        name: "Nom",
        email: "E-mail",
        message: "Votre entreprise et ce qui coince",
      },
      submit: "Envoyer",
      sending: "Envoi en cours",
      successBadge: "Message envoyé",
      success: "Merci, c'est bien reçu. Je vous réponds dans les deux jours.",
      // Rendu : error.text + lien LinkedIn (error.link) + error.end.
      error: {
        text: "L'envoi n'a pas marché. Réessayez, ou écrivez-moi sur",
        link: "LinkedIn",
        end: ".",
      },
      // Objet de l'e-mail reçu via Web3Forms (ne s'affiche pas sur la page).
      emailSubject: "Nouveau message depuis harena.systems (FR)",
    },
  },

  // Pied de page
  footer: {
    copyright: "© 2026 Harena Juan Rabarijaona",
    linkedin: "LinkedIn",
  },
};

export type Content = typeof fr;
