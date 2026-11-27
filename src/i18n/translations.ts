export type Lang = "en" | "it";

export interface Dict {
  meta: { title: string; description: string };
  nav: { project: string; howItWorks: string; applications: string; patent: string; partner: string; simulator: string; contact: string };
  side: { home: string; project: string; howItWorks: string; physics: string; vpp: string; applications: string; patent: string; inventors: string; partner: string; contact: string };
  hero: { patent: string; tagline: string; ctaDiscover: string; ctaCollaborate: string; imgAlt: string };
  project: {
    eyebrow: string; heading: string; intro: string; imgAlt: string;
    features: { title: string; description: string }[];
  };
  how: {
    eyebrow: string; heading: string; intro: string;
    steps: { title: string; description: string }[];
  };
  physics: { eyebrow: string; heading: string; intro: string; imgAlt: string };
  vpp: {
    eyebrow: string; heading: string; intro: string; imgAlt: string;
    stats: { value: string; label: string; sub: string }[];
  };
  apps: {
    eyebrow: string; heading: string; intro: string;
    items: { category: string; title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  patent: {
    eyebrow: string; heading: string; intro: string; sub: string;
    techValueLabel: string; applicationsLabel: string;
    strategicTitle: string; strategicIntro: string;
    claims: { title: string; description: string; technicalValue: string[]; applications: { sector: string; stars: number }[]; insight: string }[];
    packages: { label: string; claims: string; description: string }[];
  };
  inventors: {
    eyebrow: string; heading: string; intro: string;
    people: { name: string; role: string; description: string }[];
  };
  partner: {
    eyebrow: string; heading: string; intro: string;
    reasons: { title: string; description: string }[];
    quote: string; quoteAuthor: string; cta: string;
  };
  contact: {
    eyebrow: string; heading: string; intro: string; infoTitle: string; infoText: string; patentLabel: string;
    form: {
      name: string; email: string; company: string; message: string;
      namePh: string; emailPh: string; companyPh: string; messagePh: string;
      submit: string; sending: string;
      consent: string; consentLink: string; consentRequired: string;
      successTitle: string; successMsg: string; errTitle: string; errMsg: string;
    };
  };
  sim: {
    meta: { title: string; description: string };
    eyebrow: string; heading: string; subtitle: string; iframeTitle: string; hint: string;
    cards: { title: string; description: string }[];
    vppTitle: string; vppText: string; vppCta: string;
  };
  footer: { tagline: string; navHeading: string; project: string; how: string; apps: string; simulator: string; rights: string };
}

export const translations: Record<Lang, Dict> = {
  en: {
    meta: {
      title: "CAFAR — Canting Foil Arm System | Foiling Innovation",
      description:
        "CAFAR is a patented Canting Foil Arm System — foiling technology that boosts righting moment for sailing innovation, without widening the hull.",
    },
    nav: {
      project: "The Project",
      howItWorks: "How It Works",
      applications: "Applications",
      patent: "Patent",
      partner: "Partner",
      simulator: "Simulator",
      contact: "Contact Us",
    },
    side: {
      home: "Home",
      project: "Project",
      howItWorks: "How It Works",
      physics: "Physics",
      vpp: "VPP",
      applications: "Applications",
      patent: "Patent",
      inventors: "Inventors",
      partner: "Partner",
      contact: "Contact",
    },
    hero: {
      patent: "Patent No. 102021000023279",
      tagline:
        "The patented hydrofoil system revolutionizing foiling — increasing righting moment for sail racing without modifying hull width.",
      ctaDiscover: "Discover the Project",
      ctaCollaborate: "Collaborate With Us",
      imgAlt: "CAFAR canting foil arm hydrofoil system on a racing sailing yacht at sea",
    },
    project: {
      eyebrow: "The Project",
      heading: "Innovation in Foiling",
      intro:
        "CAFAR is a revolutionary hydrofoil system that lets a foiling monohull extend its foil lever arm through an articulated canting arm, delivering superior sailing performance while keeping naval architecture and construction remarkably simple.",
      imgAlt: "CAFAR foiling system 3D render on a sailing yacht",
      features: [
        {
          title: "Greater Righting Moment",
          description: "Increases the foil arm and righting moment without modifying the maximum hull width.",
        },
        {
          title: "Affordable Production",
          description:
            "Significantly lower manufacturing costs than traditional foiling systems, making high foiling performance accessible to more shipyards and sailors.",
        },
        {
          title: "Maximum Safety",
          description: "No holes in the hull and greater safety for the crew in case of collision.",
        },
        {
          title: "Patented Design",
          description: "Sailing innovation protected by an international patent covering the full architecture.",
        },
      ],
    },
    how: {
      eyebrow: "How It Works",
      heading: "Technology in Action",
      intro:
        "Discover how the CAFAR hydrofoil system transforms sailing, combining advanced naval architecture and intelligent boat design.",
      steps: [
        {
          title: "Two Main Components",
          description:
            "The CAFAR system is built around two components: the canting arm and the symmetric canting T-foil. Together they deliver superior foiling performance on any point of sail.",
        },
        {
          title: "Operating Conditions",
          description:
            "The system adapts automatically to wind conditions — light-wind sailing, downwind and upwind. The arm cants laterally to maximize the righting moment across the full range.",
        },
        {
          title: "Flight and Sail Modes",
          description:
            "The transition between FLIGHT mode (foiling) and SAIL mode (traditional sailing) happens smoothly through tacks and gybes, ensuring stability and performance in every racing situation.",
        },
      ],
    },
    physics: {
      eyebrow: "The Science",
      heading: "Physics Principles",
      intro:
        "Understanding the fundamental physics of righting moment and lift behind CAFAR's stability enhancement for foiling yachts.",
      imgAlt: "CAFAR force diagram showing heeling and righting forces on a foiling sailing yacht",
    },
    vpp: {
      eyebrow: "Performance",
      heading: "VPP Simulation Results",
      intro:
        "Boat speed comparison with and without the CAFAR system, based on validated VPP simulations for sail racing conditions.",
      imgAlt: "VPP comparison chart — CAFAR vs standard sailing configurations",
      stats: [
        { value: "+15%", label: "VMG Speed", sub: "Upwind improvement" },
        { value: "6.5m", label: "Mini 650", sub: "Test platform" },
        { value: "VPP", label: "Validated Simulations", sub: "Verified data" },
      ],
    },
    apps: {
      eyebrow: "Applications",
      heading: "Where to Use CAFAR",
      intro:
        "The versatility of the CAFAR hydrofoil system makes it suitable for many applications across sail racing and the wider marine industry.",
      items: [
        {
          category: "Performance",
          title: "Ocean Racing",
          description:
            "Ideal for ocean racing regattas such as the Mini-Transat, where foiling performance and reliability are decisive.",
        },
        {
          category: "Versatility",
          title: "Cruising Yachts",
          description:
            "Retrofit on existing sailing yachts to improve comfort and speed without invasive structural modifications to the hull.",
        },
        {
          category: "Scalability",
          title: "Series Production",
          description:
            "A standardized system suited to industrial boat production across different sailing yacht classes.",
        },
        {
          category: "Innovation",
          title: "Prototypes & R&D",
          description:
            "The ideal platform for experimentation and development of next-generation foiling and hydrofoil technologies.",
        },
      ],
      stats: [
        { value: "+15%", label: "VMG Speed" },
        { value: "6.5m", label: "Mini 650" },
        { value: "VPP", label: "Validated Simulations" },
      ],
    },
    patent: {
      eyebrow: "Intellectual Property",
      heading: "Patent claim map",
      intro:
        "CAFAR is not just \"a foil\" — it's a platform of mobile hydrodynamic architectures for foiling yachts, protected claim by claim.",
      sub: "Patent application IT 102021000023279 — \"Sailing vessel with auxiliary hydrodynamic surface\"",
      techValueLabel: "Technical value",
      applicationsLabel: "Applications",
      strategicTitle: "Strategic reading",
      strategicIntro: "The claims group naturally into four strategic licensing packages.",
      claims: [
        {
          title: "Auxiliary hydrodynamic surface",
          description:
            "Hydrodynamic surface carried by an oscillating arm, selectively lowerable to starboard or port and laterally distanced from the hull.",
          technicalValue: [
            "Hydrodynamic righting moment generation",
            "Active lateral lever displacement",
            "Architecture independent from traditional foils (not hull-bound)",
          ],
          applications: [
            { sector: "Open prototypes / one-off", stars: 5 },
            { sector: "Performance multihulls", stars: 5 },
            { sector: "Record boats", stars: 5 },
            { sector: "High-end performance cruiser", stars: 4 },
            { sector: "Research & experimentation", stars: 5 },
          ],
          insight: "Heart of the patent — always license.",
        },
        {
          title: "Double arm architecture",
          description: "Main arm plus auxiliary arm, both articulated with axes parallel to the longitudinal.",
          technicalValue: [
            "Kinematic / load decoupling",
            "Better surface orientation control",
            "Scalability for larger boats",
          ],
          applications: [
            { sector: "Multihulls (load management)", stars: 5 },
            { sector: "IMOCA / open ocean classes", stars: 4 },
            { sector: "Prefabricated kit systems", stars: 4 },
            { sector: "Modular experimental projects", stars: 5 },
          ],
          insight: "Industrialization (kits, subsystems).",
        },
        {
          title: "Double symmetric airfoil",
          description: "Two opposite airfoils on the auxiliary arm.",
          technicalValue: [
            "Bidirectional operation without replacement",
            "Reduced complex rotation mechanisms",
            "Performance continuity on both tacks",
          ],
          applications: [
            { sector: "Offshore racing", stars: 4 },
            { sector: "Sport multihulls", stars: 4 },
            { sector: "Simplified one-off", stars: 4 },
          ],
          insight: "Reliability and simplicity.",
        },
        {
          title: "Double pair of airfoils",
          description: "Two pairs of overlapping and spaced airfoils.",
          technicalValue: [
            "Effective surface increase",
            "Better cavitation control",
            "High-lift profile without excessive span",
          ],
          applications: [
            { sector: "Record boats", stars: 5 },
            { sector: "High-speed prototypes", stars: 4 },
            { sector: "Fluid dynamics research", stars: 5 },
          ],
          insight: "High IP value, R&D-oriented.",
        },
        {
          title: "Active flaps on every airfoil",
          description: "Each airfoil equipped with an adjustable flap.",
          technicalValue: [
            "Fine control of lift and load",
            "Dynamic adaptation to speed/sea conditions",
            "Bridge between sailing and aeronautics",
          ],
          applications: [
            { sector: "Records & experimentation", stars: 5 },
            { sector: "Advanced mechatronic projects", stars: 4 },
            { sector: "Semi-autonomous boats", stars: 4 },
          ],
          insight: "High-budget / high-expertise target.",
        },
        {
          title: "Blade rotor surface",
          description: "Hydrodynamic surface in blade rotor form, also in autorotation.",
          technicalValue: [
            "Hybrid concept: foil + turbine",
            "Potential energy recovery",
            "Highly unconventional architecture",
          ],
          applications: [
            { sector: "Experimental research", stars: 5 },
            { sector: "Visionary / concept projects", stars: 4 },
            { sector: "Non-sport applications", stars: 4 },
          ],
          insight: "Fence IP — blocks third parties.",
        },
        {
          title: "Lateral structural supports",
          description: "Supports to hold the arm in operating position.",
          technicalValue: [
            "Deck load reduction",
            "Structural scalability",
            "Improved offshore reliability",
          ],
          applications: [
            { sector: "Ocean offshore", stars: 5 },
            { sector: "Large / heavy boats", stars: 4 },
            { sector: "Industrialization", stars: 5 },
          ],
          insight: "Serious shipyards.",
        },
        {
          title: "Motorized / manual actuation",
          description: "Main arm control — covers both high-tech and low-tech.",
          technicalValue: [
            "Complete coverage: high-tech and low-tech",
            "No loopholes for alternative designs",
          ],
          applications: [{ sector: "All markets", stars: 5 }],
          insight: "Defensive, extremely important.",
        },
        {
          title: "Constrained auxiliary arm control",
          description: "Foil position dependent on the main arm.",
          technicalValue: [
            "Automatic coordination",
            "Human error reduction",
            "Ideal for semi-automatic systems",
          ],
          applications: [
            { sector: "Multihulls", stars: 4 },
            { sector: "Integrated systems", stars: 4 },
            { sector: "Partial autonomy", stars: 4 },
          ],
          insight: "Automation and error-proof design.",
        },
        {
          title: "Halyard / downhaul implementation",
          description: "Concrete and seamanlike implementation using traditional rigging.",
          technicalValue: [
            "Immediate buildability",
            "Strong nautical credibility",
            "Reduces \"theoretical invention\" risk",
          ],
          applications: [
            { sector: "Traditional shipyards", stars: 5 },
            { sector: "Retrofit", stars: 4 },
          ],
          insight: "Theory meets real-world sailing.",
        },
        {
          title: "Longitudinal translation + vertical rotation",
          description: "Fore/aft mobility and vertical rotation of the surface.",
          technicalValue: [
            "Longitudinal trim control",
            "Dynamic trim adjustment",
            "Extreme design flexibility",
          ],
          applications: [
            { sector: "Advanced prototypes", stars: 5 },
            { sector: "Records / R&D", stars: 5 },
          ],
          insight: "Next-generation foiling architectures.",
        },
        {
          title: "Integrated control system",
          description: "Coordinated actuation and kinematics across the full CAFAR platform.",
          technicalValue: [
            "System-level integration",
            "Repeatable performance",
            "Scalable to production",
          ],
          applications: [
            { sector: "Series production", stars: 5 },
            { sector: "Racing teams", stars: 4 },
          ],
          insight: "Turns the platform into a product.",
        },
      ],
      packages: [
        {
          label: "Industrial Package",
          claims: "Claims 1–2–7",
          description: "Core IP for shipyard licensing and series production.",
        },
        {
          label: "Pure Performance",
          claims: "Claims 3–5",
          description: "Maximum speed and competitive advantage on the water.",
        },
        {
          label: "Future / IP Defence",
          claims: "Claims 6, 14, 15",
          description: "Frontier technologies and strategic blocking of competitors.",
        },
        {
          label: "Buildability & Licensing",
          claims: "Claims 8–13",
          description: "Practical implementation enabling real-world deployment and licensing.",
        },
      ],
    },
    inventors: {
      eyebrow: "The Inventors",
      heading: "The Minds Behind CAFAR",
      intro:
        "A project born from a passion for sailing and the drive to bring real innovation to foiling.",
      people: [
        {
          name: "Francesco Belvisi",
          role: "Inventor & Patent Co-holder",
          description:
            "Naval designer with a passion for sailing and 360° innovation. Creator of the CAFAR concept and driver of its technical development.",
        },
        {
          name: "Marco Calatroni",
          role: "Patent Co-holder & Strategic Partner",
          description:
            "Expert in project management and industrial and commercial relations. Key partner in developing and refining the CAFAR system.",
        },
      ],
    },
    partner: {
      eyebrow: "Partnership",
      heading: "Let's Build the Future of Foiling.",
      intro:
        "We're looking for bold partners — shipyards, sailors, racing teams, investors and innovators — ready to push sailing and hydrofoil design forward.",
      reasons: [
        {
          title: "Early-Stage Advantage",
          description:
            "Join at the ground floor of a patented foiling innovation with massive market potential across sail racing and yacht building.",
        },
        {
          title: "Co-Development",
          description:
            "Collaborate on prototyping, testing and refining the hydrofoil system for your specific boat and application.",
        },
        {
          title: "Licensing Opportunities",
          description: "Exclusive or regional licensing agreements for manufacturing and distribution.",
        },
      ],
      quote:
        "In the long history of humankind, those who learned to collaborate and improvise more effectively have prevailed.",
      quoteAuthor: "— Charles Darwin",
      cta: "Get in Touch",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's talk about the future",
      intro:
        "Interested in exploring the possibilities of the CAFAR hydrofoil system? Contact us to discuss collaboration and licensing opportunities in sailing and yacht racing.",
      infoTitle: "Contact Information",
      infoText: "Fill out the form and we'll get back to you at the email you provide.",
      patentLabel: "Patent",
      form: {
        name: "Name",
        email: "Email",
        company: "Company / Organization",
        message: "Message",
        namePh: "Your name",
        emailPh: "Your email",
        companyPh: "Your company (optional)",
        messagePh: "How can we help you?",
        submit: "Send Message",
        sending: "Sending...",
        consent: "I have read and accept the",
        consentLink: "Privacy Policy",
        consentRequired: "Please accept the Privacy Policy to continue.",
        successTitle: "Message sent!",
        successMsg: "We'll get back to you as soon as possible.",
        errTitle: "Error",
        errMsg: "Failed to send message. Please try again.",
      },
    },
    sim: {
      meta: {
        title: "CAFAR Simulator — Foiling Sailing Simulator | Mini 6.50",
        description:
          "Free online foiling simulator: fly a Mini 6.50 on the patented CAFAR canting foil arm. Real-time physics, wind, trim and foil geometry — 3 minutes free.",
      },
      eyebrow: "Real-time physics",
      heading: "CAFAR Simulator",
      subtitle:
        "Fly a Mini 6.50 on a single canting foil arm. Real-time physics, three minutes free, then you unlock every control.",
      iframeTitle: "CAFAR Simulator",
      hint: "Best on desktop. The simulator runs entirely in your browser — nothing to install.",
      cards: [
        {
          title: "In the free demo",
          description:
            "Play with the breeze: true wind speed and direction, apparent angle, trim response and the camera views. Watch the hull lift as the canting foil arm takes the load.",
        },
        {
          title: "What your email unlocks",
          description:
            "The full cockpit: sail plan, weights and ballast, appendages, CAFAR foil geometry, autopilots, polars and the foil optimiser.",
        },
        {
          title: "The complete VPP",
          description:
            "This demo runs on a Mini 6.50 model. The full VPP can be set up on any hull — we run it as part of our design work.",
        },
      ],
      vppTitle: "Want it on your own boat?",
      vppText:
        "We can run the complete VPP on your polars and your hull sections, with the CAFAR foil sized for your project.",
      vppCta: "Talk to us",
    },
    footer: {
      tagline:
        "Canting Foil Arm — patented marine technology for higher foiling performance, righting moment and stability in sailing and racing.",
      navHeading: "Navigation",
      project: "The Project",
      how: "How It Works",
      apps: "Applications",
      simulator: "Simulator",
      rights: "© 2026 CAFAR Technology. All rights reserved.",
    },
  },
  it: {
    meta: {
      title: "CAFAR — Canting Foil Arm System | Innovazione Vela",
      description:
        "CAFAR è un Canting Foil Arm System brevettato: tecnologia foiling che aumenta il momento raddrizzante e innova la vela, senza allargare lo scafo.",
    },
    nav: {
      project: "Il Progetto",
      howItWorks: "Come Funziona",
      applications: "Applicazioni",
      patent: "Brevetto",
      partner: "Partner",
      simulator: "Simulatore",
      contact: "Contattaci",
    },
    side: {
      home: "Home",
      project: "Progetto",
      howItWorks: "Come Funziona",
      physics: "Fisica",
      vpp: "VPP",
      applications: "Applicazioni",
      patent: "Brevetto",
      inventors: "Inventori",
      partner: "Partner",
      contact: "Contatti",
    },
    hero: {
      patent: "Brevetto N. 102021000023279",
      tagline:
        "Il sistema a foil brevettato che rivoluziona il foiling nella vela, aumentando il momento raddrizzante senza modificare la larghezza dello scafo.",
      ctaDiscover: "Scopri il Progetto",
      ctaCollaborate: "Collabora con Noi",
      imgAlt: "Sistema a foil basculante CAFAR su uno yacht a vela da regata in navigazione",
    },
    project: {
      eyebrow: "Il Progetto",
      heading: "Innovazione nel Foiling",
      intro:
        "CAFAR è un sistema a foil rivoluzionario che permette a uno scafo monofoil di aumentare il braccio di leva del foil grazie a un braccio basculante articolato, offrendo prestazioni superiori con una progettazione navale e una costruzione estremamente semplici.",
      imgAlt: "Render 3D del sistema di foiling CAFAR su uno yacht a vela",
      features: [
        {
          title: "Maggiore Momento Raddrizzante",
          description: "Aumenta il braccio del foil e il momento raddrizzante senza modificare la larghezza massima dello scafo.",
        },
        {
          title: "Produzione Accessibile",
          description:
            "Costi di costruzione nettamente inferiori rispetto ai sistemi di foiling tradizionali, rendendo accessibili prestazioni elevate a cantieri nautici e velisti.",
        },
        {
          title: "Massima Sicurezza",
          description: "Nessun foro nello scafo e maggiore sicurezza per l'equipaggio in caso di collisione.",
        },
        {
          title: "Design Brevettato",
          description: "Innovazione nella vela protetta da un brevetto internazionale che copre l'intera architettura.",
        },
      ],
    },
    how: {
      eyebrow: "Come Funziona",
      heading: "La Tecnologia in Azione",
      intro:
        "Scopri come il sistema a foil CAFAR trasforma la vela, unendo ingegneria avanzata, progettazione navale e design intelligente.",
      steps: [
        {
          title: "Due Componenti Principali",
          description:
            "Il sistema CAFAR si basa su due componenti: il braccio basculante e il T-foil basculante simmetrico. Questa combinazione garantisce prestazioni superiori a ogni andatura.",
        },
        {
          title: "Condizioni di Utilizzo",
          description:
            "Il sistema si adatta automaticamente alle condizioni di vento: navigazione con vento leggero, in poppa e di bolina. Il braccio si estende lateralmente per massimizzare il momento raddrizzante.",
        },
        {
          title: "Modalità Volo e Vela",
          description:
            "La transizione tra la modalità FLIGHT (foiling) e la modalità SAIL (vela tradizionale) avviene in modo fluido durante le virate e le strambate, garantendo stabilità e prestazioni in ogni situazione di regata.",
        },
      ],
    },
    physics: {
      eyebrow: "La Scienza",
      heading: "Principi Fisici",
      intro:
        "Comprendere la fisica fondamentale del momento raddrizzante e della portanza alla base dell'aumento di stabilità offerto da CAFAR agli yacht in foiling.",
      imgAlt: "Diagramma delle forze CAFAR con forze sbandanti e raddrizzanti su uno yacht a vela in foiling",
    },
    vpp: {
      eyebrow: "Prestazioni",
      heading: "Risultati delle Simulazioni VPP",
      intro:
        "Confronto della velocità della barca con e senza il sistema CAFAR, basato su simulazioni VPP validate per condizioni di regata.",
      imgAlt: "Grafico di confronto VPP — CAFAR vs configurazioni a vela standard",
      stats: [
        { value: "+15%", label: "Velocità VMG", sub: "Miglioramento di bolina" },
        { value: "6.5m", label: "Mini 650", sub: "Piattaforma di test" },
        { value: "VPP", label: "Simulazioni Validate", sub: "Dati verificati" },
      ],
    },
    apps: {
      eyebrow: "Applicazioni",
      heading: "Dove Usare CAFAR",
      intro:
        "La versatilità del sistema a foil CAFAR lo rende adatto a molteplici applicazioni nel mondo della vela e della nautica.",
      items: [
        {
          category: "Prestazioni",
          title: "Regate Oceaniche",
          description:
            "Ideale per regate come la Mini-Transat, dove prestazioni in foiling e affidabilità sono determinanti.",
        },
        {
          category: "Versatilità",
          title: "Yacht da Crociera",
          description:
            "Retrofit su yacht a vela esistenti per migliorare comfort e velocità senza modifiche strutturali invasive allo scafo.",
        },
        {
          category: "Scalabilità",
          title: "Produzione di Serie",
          description:
            "Sistema standardizzato adatto alla produzione industriale dei cantieri nautici in diverse classi di barche a vela.",
        },
        {
          category: "Innovazione",
          title: "Prototipi e R&S",
          description:
            "Piattaforma ideale per la sperimentazione e lo sviluppo di nuove tecnologie di foiling e hydrofoil.",
        },
      ],
      stats: [
        { value: "+15%", label: "Velocità VMG" },
        { value: "6.5m", label: "Mini 650" },
        { value: "VPP", label: "Simulazioni Validate" },
      ],
    },
    patent: {
      eyebrow: "Proprietà Intellettuale",
      heading: "Mappa delle rivendicazioni del brevetto",
      intro:
        "CAFAR non è semplicemente \"un foil\": è una piattaforma di architetture idrodinamiche mobili per yacht in foiling, protetta rivendicazione dopo rivendicazione.",
      sub: "Domanda di brevetto IT 102021000023279 — \"Imbarcazione a vela con superficie idrodinamica ausiliaria\"",
      techValueLabel: "Valore tecnico",
      applicationsLabel: "Applicazioni",
      strategicTitle: "Lettura strategica",
      strategicIntro: "Le rivendicazioni si raggruppano naturalmente in quattro pacchetti strategici di licensing.",
      claims: [
        {
          title: "Superficie idrodinamica ausiliaria",
          description:
            "Superficie idrodinamica sostenuta da un braccio oscillante, abbassabile selettivamente a dritta o a sinistra e allontanata lateralmente dallo scafo.",
          technicalValue: [
            "Generazione del momento raddrizzante idrodinamico",
            "Spostamento attivo della leva laterale",
            "Architettura indipendente dai foil tradizionali (non vincolata allo scafo)",
          ],
          applications: [
            { sector: "Prototipi open / one-off", stars: 5 },
            { sector: "Multiscafi da prestazione", stars: 5 },
            { sector: "Barche da record", stars: 5 },
            { sector: "Cruiser da prestazione di fascia alta", stars: 4 },
            { sector: "Ricerca e sperimentazione", stars: 5 },
          ],
          insight: "Cuore del brevetto — sempre da concedere in licenza.",
        },
        {
          title: "Architettura a doppio braccio",
          description: "Braccio principale più braccio ausiliario, entrambi articolati con assi paralleli al longitudinale.",
          technicalValue: [
            "Disaccoppiamento cinematico / dei carichi",
            "Miglior controllo dell'orientamento della superficie",
            "Scalabilità per imbarcazioni più grandi",
          ],
          applications: [
            { sector: "Multiscafi (gestione dei carichi)", stars: 5 },
            { sector: "Classi IMOCA / oceaniche open", stars: 4 },
            { sector: "Sistemi in kit prefabbricati", stars: 4 },
            { sector: "Progetti sperimentali modulari", stars: 5 },
          ],
          insight: "Industrializzazione (kit, sottosistemi).",
        },
        {
          title: "Doppio profilo alare simmetrico",
          description: "Due profili alari opposti sul braccio ausiliario.",
          technicalValue: [
            "Funzionamento bidirezionale senza sostituzione",
            "Riduzione dei complessi meccanismi di rotazione",
            "Continuità di prestazioni su entrambe le mure",
          ],
          applications: [
            { sector: "Regate offshore", stars: 4 },
            { sector: "Multiscafi sportivi", stars: 4 },
            { sector: "One-off semplificato", stars: 4 },
          ],
          insight: "Affidabilità e semplicità.",
        },
        {
          title: "Doppia coppia di profili alari",
          description: "Due coppie di profili alari sovrapposti e distanziati.",
          technicalValue: [
            "Aumento della superficie effettiva",
            "Miglior controllo della cavitazione",
            "Profilo ad alta portanza senza apertura eccessiva",
          ],
          applications: [
            { sector: "Barche da record", stars: 5 },
            { sector: "Prototipi ad alta velocità", stars: 4 },
            { sector: "Ricerca fluidodinamica", stars: 5 },
          ],
          insight: "Elevato valore IP, orientato alla R&S.",
        },
        {
          title: "Flap attivi su ogni profilo alare",
          description: "Ogni profilo alare dotato di un flap regolabile.",
          technicalValue: [
            "Controllo fine di portanza e carico",
            "Adattamento dinamico a velocità/condizioni del mare",
            "Ponte tra vela e aeronautica",
          ],
          applications: [
            { sector: "Record e sperimentazione", stars: 5 },
            { sector: "Progetti meccatronici avanzati", stars: 4 },
            { sector: "Imbarcazioni semi-autonome", stars: 4 },
          ],
          insight: "Target ad alto budget / alta competenza.",
        },
        {
          title: "Superficie a rotore a pale",
          description: "Superficie idrodinamica in forma di rotore a pale, anche in autorotazione.",
          technicalValue: [
            "Concetto ibrido: foil + turbina",
            "Potenziale recupero di energia",
            "Architettura fortemente non convenzionale",
          ],
          applications: [
            { sector: "Ricerca sperimentale", stars: 5 },
            { sector: "Progetti visionari / concept", stars: 4 },
            { sector: "Applicazioni non sportive", stars: 4 },
          ],
          insight: "IP di recinzione — blocca i terzi.",
        },
        {
          title: "Supporti strutturali laterali",
          description: "Supporti per mantenere il braccio in posizione operativa.",
          technicalValue: [
            "Riduzione dei carichi sulla coperta",
            "Scalabilità strutturale",
            "Migliore affidabilità offshore",
          ],
          applications: [
            { sector: "Offshore oceanico", stars: 5 },
            { sector: "Barche grandi / pesanti", stars: 4 },
            { sector: "Industrializzazione", stars: 5 },
          ],
          insight: "Cantieri nautici strutturati.",
        },
        {
          title: "Azionamento motorizzato / manuale",
          description: "Controllo del braccio principale — copre sia soluzioni high-tech sia low-tech.",
          technicalValue: [
            "Copertura completa: high-tech e low-tech",
            "Nessuna scappatoia per design alternativi",
          ],
          applications: [{ sector: "Tutti i mercati", stars: 5 }],
          insight: "Difensivo, estremamente importante.",
        },
        {
          title: "Controllo vincolato del braccio ausiliario",
          description: "Posizione del foil dipendente dal braccio principale.",
          technicalValue: [
            "Coordinamento automatico",
            "Riduzione dell'errore umano",
            "Ideale per sistemi semi-automatici",
          ],
          applications: [
            { sector: "Multiscafi", stars: 4 },
            { sector: "Sistemi integrati", stars: 4 },
            { sector: "Autonomia parziale", stars: 4 },
          ],
          insight: "Automazione e design a prova di errore.",
        },
        {
          title: "Implementazione con drizza / caricabasso",
          description: "Implementazione concreta e marinaresca che utilizza il sartiame tradizionale.",
          technicalValue: [
            "Costruibilità immediata",
            "Forte credibilità nautica",
            "Riduce il rischio di \"invenzione teorica\"",
          ],
          applications: [
            { sector: "Cantieri tradizionali", stars: 5 },
            { sector: "Retrofit", stars: 4 },
          ],
          insight: "La teoria incontra la vela reale.",
        },
        {
          title: "Traslazione longitudinale + rotazione verticale",
          description: "Mobilità prua/poppa e rotazione verticale della superficie.",
          technicalValue: [
            "Controllo dell'assetto longitudinale",
            "Regolazione dinamica dell'assetto",
            "Estrema flessibilità progettuale",
          ],
          applications: [
            { sector: "Prototipi avanzati", stars: 5 },
            { sector: "Record / R&S", stars: 5 },
          ],
          insight: "Architetture di foiling di nuova generazione.",
        },
        {
          title: "Sistema di controllo integrato",
          description: "Azionamento e cinematica coordinati sull'intera piattaforma CAFAR.",
          technicalValue: [
            "Integrazione a livello di sistema",
            "Prestazioni ripetibili",
            "Scalabile alla produzione",
          ],
          applications: [
            { sector: "Produzione di serie", stars: 5 },
            { sector: "Team da regata", stars: 4 },
          ],
          insight: "Trasforma la piattaforma in un prodotto.",
        },
      ],
      packages: [
        {
          label: "Pacchetto Industriale",
          claims: "Claims 1–2–7",
          description: "IP fondamentale per il licensing ai cantieri nautici e la produzione di serie.",
        },
        {
          label: "Pura Prestazione",
          claims: "Claims 3–5",
          description: "Massima velocità e vantaggio competitivo in acqua.",
        },
        {
          label: "Futuro / Difesa IP",
          claims: "Claims 6, 14, 15",
          description: "Tecnologie di frontiera e blocco strategico dei concorrenti.",
        },
        {
          label: "Costruibilità e Licensing",
          claims: "Claims 8–13",
          description: "Implementazione pratica che abilita l'impiego reale e il licensing.",
        },
      ],
    },
    inventors: {
      eyebrow: "Gli Inventori",
      heading: "Le Menti dietro CAFAR",
      intro:
        "Un progetto nato dalla passione per la vela e dalla voglia di portare vera innovazione nel foiling.",
      people: [
        {
          name: "Francesco Belvisi",
          role: "Inventore e Co-titolare del brevetto",
          description:
            "Progettista navale con la passione per la vela e l'innovazione a 360°. Ideatore del concept CAFAR e promotore del suo sviluppo tecnico.",
        },
        {
          name: "Marco Calatroni",
          role: "Co-titolare del brevetto e partner strategico",
          description:
            "Esperto di project management e relazioni industriali e commerciali. Partner chiave nello sviluppo e nell'affinamento del sistema CAFAR.",
        },
      ],
    },
    partner: {
      eyebrow: "Partnership",
      heading: "Costruiamo Insieme il Futuro del Foiling.",
      intro:
        "Cerchiamo partner ambiziosi — cantieri nautici, velisti, team da regata, investitori e innovatori — pronti a far progredire la vela e la progettazione navale.",
      reasons: [
        {
          title: "Vantaggio del Primo Momento",
          description:
            "Entra fin dall'inizio in un'innovazione brevettata nel foiling con un enorme potenziale di mercato nella vela e nella costruzione di barche.",
        },
        {
          title: "Co-sviluppo",
          description:
            "Collabora alla prototipazione, ai test e all'affinamento del sistema a foil per la tua specifica imbarcazione e applicazione.",
        },
        {
          title: "Opportunità di Licensing",
          description: "Accordi di licenza esclusivi o regionali per produzione e distribuzione.",
        },
      ],
      quote:
        "Nella lunga storia dell'umanità hanno prevalso coloro che hanno imparato a collaborare e a improvvisare in modo più efficace.",
      quoteAuthor: "— Charles Darwin",
      cta: "Mettiti in Contatto",
    },
    contact: {
      eyebrow: "Contatti",
      heading: "Parliamo del futuro",
      intro:
        "Interessato a esplorare le possibilità del sistema a foil CAFAR? Contattaci per discutere opportunità di collaborazione e licensing nella vela e nelle regate.",
      infoTitle: "Informazioni di Contatto",
      infoText: "Compila il modulo e ti risponderemo all'indirizzo email che ci fornirai.",
      patentLabel: "Brevetto",
      form: {
        name: "Nome",
        email: "Email",
        company: "Azienda / Organizzazione",
        message: "Messaggio",
        namePh: "Il tuo nome",
        emailPh: "La tua email",
        companyPh: "La tua azienda (facoltativo)",
        messagePh: "Come possiamo aiutarti?",
        submit: "Invia Messaggio",
        sending: "Invio in corso...",
        consent: "Ho letto e accetto la",
        consentLink: "Privacy Policy",
        consentRequired: "Accetta la Privacy Policy per continuare.",
        successTitle: "Messaggio inviato!",
        successMsg: "Ti risponderemo il prima possibile.",
        errTitle: "Errore",
        errMsg: "Invio del messaggio non riuscito. Riprova.",
      },
    },
    sim: {
      meta: {
        title: "Simulatore CAFAR — Simulatore di vela foiling | Mini 6.50",
        description:
          "Simulatore di vela foiling online e gratuito: porta in volo un Mini 6.50 con il braccio di foil CAFAR brevettato. Fisica in tempo reale, vento, trim e geometria del foil — 3 minuti gratis.",
      },
      eyebrow: "Fisica in tempo reale",
      heading: "Simulatore CAFAR",
      subtitle:
        "Porta un Mini 6.50 in volo con un solo braccio di foil. Fisica in tempo reale, 3 minuti gratis, poi sblocchi tutti i controlli.",
      iframeTitle: "Simulatore CAFAR",
      hint: "Meglio da desktop. Il simulatore gira interamente nel browser — niente da installare.",
      cards: [
        {
          title: "Nella demo gratuita",
          description:
            "Gioca col vento: intensità e direzione del vento reale, angolo apparente, risposta al trim e le viste della camera. Guarda lo scafo salire mentre il braccio di foil prende il carico.",
        },
        {
          title: "Cosa sblocchi con l'email",
          description:
            "Tutto il pozzetto: piano velico, pesi e zavorra, appendici, geometria del foil CAFAR, autopiloti, polari e ottimizzatore del foil.",
        },
        {
          title: "Il VPP completo",
          description:
            "Questa demo gira su un modello di Mini 6.50. Il VPP completo può essere tarato su qualsiasi carena: lo usiamo come parte del nostro lavoro di progettazione.",
        },
      ],
      vppTitle: "Lo vuoi sulla tua barca?",
      vppText:
        "Possiamo far girare il VPP completo sulle tue polari e sulle sezioni della tua carena, con il foil CAFAR dimensionato sul tuo progetto.",
      vppCta: "Scrivici",
    },
    footer: {
      tagline:
        "Canting Foil Arm — tecnologia nautica brevettata per prestazioni in foiling, momento raddrizzante e stabilità superiori nella vela e nelle regate.",
      navHeading: "Navigazione",
      project: "Il Progetto",
      how: "Come Funziona",
      apps: "Applicazioni",
      simulator: "Simulatore",
      rights: "© 2026 CAFAR Technology. Tutti i diritti riservati.",
    },
  },
};
