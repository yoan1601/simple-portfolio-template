// Contenu anglais : repris de contenu-en-v1.md (validé le 24/11/2026). Même forme que fr.ts (vérifiée par le typage).
// Textes d'interface EN (proposition 5) rédigés par Claude le 25/11, à relire par Harena.
import type { Content } from "./fr";

export const en: Content = {
  meta: {
    title: "Harena Juan Rabarijaona · AI for businesses that sell on Messenger and WhatsApp",
    description:
      "No customer left unanswered in your messages. The AI prepares and follows up, your team closes. We start from your real conversations, one step at a time.",
    ogLocale: "en_GB",
    ogImageAlt: "Harena Juan Rabarijaona. No customer left unanswered in your messages.",
  },

  ui: {
    skipLink: "Skip to content",
    siteName: "Harena Juan Rabarijaona",
    anchors: {
      top: "top",
      offer: "offer",
      method: "method",
      proof: "proof",
      faq: "faq",
      contact: "contact",
    },
    nav: {
      label: "Main navigation",
      offer: "The offer",
      method: "Method",
      proof: "Proof",
      faq: "FAQ",
      contact: "Contact",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    lang: {
      groupLabel: "Language",
      code: "EN",
      name: "English",
      versionLabel: "English version",
    },
    bookCall: "Book 30 minutes",
    opensInCalendly: "Opens in Calendly",
    signature: "The AI prepares, you decide.",
  },

  // 1. Hero
  hero: {
    margin: ["AI Integration Lead", "Antananarivo, Madagascar"],
    title: "No customer left unanswered in your messages.",
    lead: "For businesses that sell on Messenger and WhatsApp: the AI prepares and follows up, your team closes the sale.",
    writeLink: "Or tell me what's stuck",
    note: "A 30-minute video call to start. No price until I have seen your data.",
  },

  // 2. Observations
  problems: {
    margin: ["Observations"],
    title: "What I see in the businesses I work with",
    items: [
      {
        title: "Messages come in faster than the team can answer.",
        text: "At peak hours, replies take hours, and customers leave without a follow-up.",
      },
      {
        title: "The rules live in a notebook, or in someone's head.",
        text: "Prices, stock, terms: you cannot automate what is written down nowhere.",
      },
      {
        title: "Auto-replies break as soon as the conversation turns into a sale.",
        text: "A keyword is enough to share opening hours. Closing a sale takes more than that.",
      },
      {
        title: "In the evening, the owner catches up.",
        text: "Follow-up rests on the person running the business, between two emergencies.",
      },
      {
        title: "Mistakes are the real fear.",
        text: "An assistant that makes up an answer for a customer is worse than no assistant at all.",
      },
    ],
  },

  // 3. The offer
  offer: {
    margin: ["The offer", "Step 1 · 8 weeks"],
    marginMobile: "The offer · Step 1",
    badge: "The offer",
    title: "The Zero Lost Customer System",
    subtitle: "8 weeks to give every conversation a follow-up, without your team switching tools.",
    pillars: [
      {
        title: "A diagnostic on your real conversations.",
        text: "I read your messages, your notebooks and your statistics. Together we set a measured baseline: time to first reply, and the number of conversations left without a follow-up.",
      },
      {
        title: "The assistant inside Messenger or WhatsApp.",
        text: "It answers common questions and prepares the order. When it is time to close, it hands over to your team.",
      },
      {
        title: "Follow-ups.",
        text: "Every conversation has a follow-up. An alert tells you when a customer has been waiting for 48 hours.",
      },
    ],
    includedTitle: "Also included",
    included: [
      {
        title: "The Clean Sweep",
        text: "The mistakes customers can see right away, such as two welcome messages that contradict each other or outdated information, fixed in the first week.",
      },
      {
        title: "The Morning List",
        text: "Every morning, the list of customers still waiting for an answer, even before the assistant is live.",
      },
      {
        title: "The Rules Register",
        text: "Your prices and terms, in writing. It belongs to you, even if you stop.",
      },
      {
        title: "The Team Workshop",
        text: "Two hours so your team knows when the assistant answers and when they take over.",
      },
      {
        title: "The Friday Review",
        text: "Every week, where your indicators stand.",
      },
    ],
    guarantee: {
      badge: "Guarantee",
      title: "The Baseline Guarantee",
      text: "At the end of the diagnostic, we set one or two targets on your indicators together. If they are not met at the end of the 8 weeks, I keep running the follow-up without charging you until they are, for up to two months.",
      conditionsLabel: "Two conditions",
      conditions: ["Your team applies the rules we wrote together.", "I keep access to the data."],
      closing: "You only commit to this first step. After that, you decide.",
    },
  },

  // 4. Method
  method: {
    margin: ["Method"],
    title: "How I work",
    steps: [
      {
        title: "A menu of options.",
        text: "After a first conversation, I send you concrete options. You pick the ones that matter to you.",
      },
      {
        title: "A diagnostic on what actually happens.",
        text: "I look at how things really run in your business, and I only price the work afterwards.",
      },
      {
        title: "One step at a time.",
        text: "We set it up, we measure, then we move to the next step.",
      },
      {
        title: "People keep the decision.",
        text: "The AI prepares, sorts, drafts and follows up. A price, a custom order or a hire stays your decision.",
      },
      {
        title: "Measurement.",
        text: "A starting point and an end point, both measured, so you know whether it worked.",
      },
    ],
    signatureStep: 3,
  },

  // 5. Before, after
  register: {
    margin: ["Register"],
    title: "Before, after",
    columns: {
      number: "No.",
      before: "Before",
      after: "After",
    },
    rows: [
      {
        before: "You carry the follow-up, the team forgets customers",
        after: "Every conversation has a follow-up and a reminder",
      },
      {
        before: "The rules live in a notebook or in someone's head",
        after: "The rules are written, the team and the assistant apply the same ones",
      },
      {
        before: "Hours of delay at peak times",
        after: "A fast, accurate first reply, then a person closes",
      },
      {
        before: "Nobody knows whether the AI helped",
        after: "A measured starting point and end point",
      },
      {
        before: "AI feels risky, or reserved for large companies",
        after: "You know what gets automated, what we refuse to automate, and why",
      },
    ],
  },

  // 6. Proof
  proof: {
    margin: ["Proof"],
    title: "What I have delivered",
    note: "Each project is shown at its real stage.",
    featured: {
      status: "Prototype delivered and demonstrated",
      title: "Legal assistant on WhatsApp",
      text: "For an entrepreneur who connects business owners with AI experts, I built an assistant that answers questions on Malagasy law directly in WhatsApp, based on six legal texts (about 3,000 articles). At first, it sometimes made things up, such as a wrong notice period. I forced it to search the texts before every answer and to cite the article. Since then, it has not invented anything on my test questions, and it answers in 3 to 4 seconds.",
      video: {
        tag: "Video 1",
        hint: "Plays on click",
        playLabel: "Play the video: legal assistant on WhatsApp",
        playerLabel: "Video player",
      },
    },
    items: [
      {
        tag: "Rentrée du Jeune Patronat, Madagascar's young business leaders' network, October 2026",
        tagStyle: "note",
        title: "Workshop “Build your first agent in 60 minutes”",
        text: "30 business owners, most of them non-technical. Working in pairs, they built 15 AI agents in one hour.",
      },
      {
        tag: "IndabaX Madagascar 2026",
        tagStyle: "note",
        title: "Talk at IndabaX Madagascar 2026",
        text: "“Governing AI in business software: what the field imposes” (delivered in French).",
      },
      {
        tag: "In testing",
        tagStyle: "badge",
        title: "At a business software publisher",
        text: "AI for payroll and invoice reading. The rule: a person validates every result.",
      },
    ],
  },

  // 7. Other formats
  formats: {
    margin: ["Formats"],
    title: "Other ways to work together",
    items: [
      {
        title: "AI workshops and training for business leaders.",
        text: "For business networks and training firms. Participants work on their own cases.",
      },
      {
        title: "AI expertise as a subcontractor.",
        text: "For consulting firms and integrators who have the client but not the AI expertise.",
      },
    ],
    othersLead: "Other problems I solve:",
    othersText:
      "CV screening and job ad writing, collections and sales follow-up, document reading, and summarising the reports nobody has time to read.",
  },

  // 8. Refusals
  refusals: {
    margin: ["Refusals"],
    title: "What I refuse to do",
    items: [
      "Sell a tool before running the diagnostic.",
      "Promise a figure before measuring it.",
      "Let the AI decide for you on anything that commits your business.",
    ],
  },

  // 9. FAQ
  faq: {
    margin: ["Questions"],
    title: "Frequently asked questions",
    items: [
      {
        question: "How much does it cost?",
        answer:
          "I don't give a price before seeing your data. The cost covers a setup and a monthly follow-up, priced step by step, and you only commit to the first step.",
      },
      {
        question: "Will the AI say anything to my customers?",
        answer:
          "It relies on your written rules and says when it doesn't know. Anything that commits the business stays with your team.",
      },
      {
        question: "Who updates things when my prices or stock change?",
        answer: "That is the first thing we sort out, before the assistant. Without a reliable update, nothing holds.",
      },
      {
        question: "Will my customers know they are talking to an assistant?",
        answer: "You choose, as long as the answers stay consistent.",
      },
      {
        question: "Do we need to change tools?",
        answer: "No. Your team stays in Messenger and WhatsApp.",
      },
      {
        question: "I don't have time to manage this.",
        answer: "The diagnostic takes a few hours with the right people. After that, I do the building.",
      },
    ],
  },

  // 10. About me
  about: {
    margin: ["About"],
    title: "About me",
    photoAlt: "Portrait of Harena Juan Rabarijaona",
    photoCaption: "Antananarivo",
    text: "Harena Juan Rabarijaona, based in Antananarivo, Madagascar. I integrate AI into the way businesses actually run, where the team loses time and where mistakes are expensive. I am also AI Integration Lead at a business software publisher, working on payroll and invoice reading. Named Most Outstanding Member of JCI Madagascar in 2026, I will lead JCI Iarivo as President in 2027.",
    facts: [
      { label: "Role", value: "AI Integration Lead" },
      { label: "JCI Madagascar, 2026", value: "Most Outstanding Member" },
      { label: "JCI Iarivo, 2027", value: "President" },
    ],
  },

  // 11. Final call and form
  contact: {
    margin: ["Contact"],
    title: "Tell me what's stuck.",
    text: "A 30-minute video call to understand your situation. No price during this call: if I see options, I send them to you afterwards, in writing.",
    form: {
      title: "Prefer to write?",
      label: "Write a message",
      fields: {
        name: "Name",
        email: "Email",
        message: "Your business and what's stuck",
      },
      submit: "Send",
      sending: "Sending",
      successBadge: "Message sent",
      success: "Thanks, I've got it. I'll get back to you within two days.",
      error: {
        text: "Sending didn't work. Please try again, or message me on",
        link: "LinkedIn",
        end: ".",
      },
      emailSubject: "New message from harena.systems (EN)",
    },
  },

  footer: {
    copyright: "© 2026 Harena Juan Rabarijaona",
    linkedin: "LinkedIn",
  },
};
