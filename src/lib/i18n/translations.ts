export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

const es = {
  header: {
    nav: {
      servicios: "Servicios",
      proyectos: "Proyectos",
      proceso: "Proceso",
      estudio: "Estudio",
    },
    cta: "Hablemos",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },

  hero: {
    eyebrow: "Estudio de diseño e implementación web",
    titleLine1: "Diseñamos e",
    titleLine2: "implementamos",
    titleLine3: "productos web",
    titleEm: "que funcionan.",
    body: "Desde el diseño de la interfaz hasta la puesta en producción: sitios, plataformas y dashboards construidos con criterio técnico y atención al detalle.",
    ctaProjects: "Ver proyectos",
    ctaServices: "Qué hacemos",
    scroll: "Scroll",
  },

  ticker: {
    items: [
      "Tomando proyectos 2026/2027",
      "Diseño e implementación web",
      "Buenos Aires, Argentina",
    ],
  },

  servicios: {
    eyebrow: "01 · Servicios",
    titlePre: "Diseño, implementación y ",
    titleEm: "sistemas",
    titlePost: " para productos digitales.",
    intro: "Trabajamos de punta a punta o nos integramos a tu equipo en la etapa donde más falta hace.",
    items: [
      {
        num: "01",
        title: "Diseño web",
        body: "Sitios y landings diseñadas desde cero: arquitectura, contenido y interfaz.",
      },
      {
        num: "02",
        title: "Implementación",
        body: "Llevamos el diseño a producción, propio o de tu equipo, con código limpio.",
      },
      {
        num: "03",
        title: "Dashboards y plataformas",
        body: "Paneles internos, tablas densas, flujos con datos reales y estados de carga.",
      },
      {
        num: "04",
        title: "Sistemas de diseño",
        body: "Componentes documentados para que el producto crezca sin perder consistencia.",
      },
      {
        num: "05",
        title: "Performance y SEO técnico",
        body: "Core Web Vitals, accesibilidad y métricas medibles antes y después.",
      },
      {
        num: "06",
        title: "Mantenimiento",
        body: "Soporte mensual, mejoras continuas y monitoreo del sitio en producción.",
      },
    ],
  },

  proyectos: {
    eyebrow: "02 · Proyectos",
    title: "Proyectos",
    titleEm: "con propósito.",
    intro: "Diseño y desarrollo para empresas que buscan crecer, simplificar y mejorar la forma en que trabajan.",
    filters: {
      all: "Todos",
      web: "Sitios web",
      platforms: "Plataformas",
      dashboards: "Dashboards",
    },
    ctaLabel: "Ver proyecto",
    emptyState: "Pronto vamos a sumar proyectos en esta categoría.",
    items: [
      {
        slug: "annika",
        category: "web",
        sector: "Domótica",
        title: "Annika",
        description: "Tecnología que se integra a tu forma de vivir.",
        url: "https://www.annikagroup.com/",
      },
      {
        slug: "alejandro-polito",
        category: "web",
        sector: "Salud",
        title: "Alejandro Polito",
        description: "Cirugía plástica y reconstructiva con un enfoque personalizado.",
        url: "https://www.alejandropolito.com.ar/",
      },
      {
        slug: "cerer",
        category: "web",
        sector: "Energía",
        title: "CERER",
        description: "Cámara de Energías Renovables de Entre Ríos.",
        url: "https://cerer.ar",
      },
    ],
  },

  proceso: {
    eyebrow: "03 · Proceso",
    titleLine1: "De una idea",
    titleLine2Pre: "a algo ",
    titleLine2Em: "que funciona.",
    intro: "Un proceso claro para transformar ideas en productos digitales que resuelven y evolucionan.",
    steps: [
      {
        num: "01",
        title: "Escuchar",
        body: "Entendemos el negocio, los usuarios y las restricciones técnicas.",
      },
      {
        num: "02",
        title: "Definir",
        body: "Alcance, prioridades y criterios de éxito por escrito.",
      },
      {
        num: "03",
        title: "Prototipar",
        body: "Diseño navegable para validar antes de escribir código.",
      },
      {
        num: "04",
        title: "Construir",
        body: "Implementación por etapas, con entornos de prueba visibles.",
      },
      {
        num: "05",
        title: "Iterar",
        body: "Lanzamos, medimos y ajustamos con datos de uso real.",
      },
    ],
  },

  brief: {
    eyebrow: "Completá la frase de abajo",
    intro: "Hola Vinte, quiero",
    verbs: ["lanzar", "rediseñar", "mejorar", "escalar"],
    objects: ["un sitio web", "una plataforma", "un dashboard", "un sistema de diseño", "otra cosa"],
    timing: ["este trimestre", "el próximo trimestre", "más adelante"],
    emailLabel: "Escribinos a",
    emailPlaceholder: "tu@email.com",
    submit: "Enviar",
    sending: "Enviando...",
    success: "¡Listo! Te vamos a responder pronto.",
    error: "Algo salió mal. Probá de nuevo o escribinos a info@vintestudio.com.",
  },

  clientes: {
    label: "Stack tecnológico",
  },

  filosofia: {
    eyebrow: "Cómo pensamos",
    titlePre: "Una web se juzga ",
    titleEm: "cuando anda",
    titlePost: ".",
    items: [
      "No perseguimos tendencias. Resolvemos el problema del negocio con la interfaz más simple que lo soporte.",
      "Diseño e implementación son la misma conversación. Nada se define sin saber cómo se va a construir.",
      "Entregamos un proyecto que otro equipo puede leer, mantener y extender sin nosotros.",
    ],
  },

  estudio: {
    eyebrow: "04 · El estudio",
    titleLine1: "Detrás de cada proyecto,",
    titleEm: "estamos nosotros.",
    body1: "Trabajamos cerca de cada proyecto, desde las primeras decisiones hasta que está funcionando en producción.",
    body2:
      "Diseño y desarrollo conviven en el mismo equipo. Sin capas innecesarias, con comunicación directa y atención real al detalle.",
    body3: "Podemos encargarnos del producto de punta a punta o sumarnos donde tu equipo nos necesite.",
    link: "Conocé cómo trabajamos",
    stats: [
      { n: "01", label: "Diseño + desarrollo en el mismo equipo." },
      { n: "02", label: "Comunicación directa, sin intermediarios." },
      { n: "03", label: "Pensado para durar, no solo para lanzar." },
    ],
  },

  contacto: {
    eyebrow: "05 · Hablemos",
    titleLine1: "¿Tenés un proyecto",
    titleLine2Pre: "para ",
    titleLine2Em: "poner en marcha",
    titleLine2Post: "?",
    body: "Contanos qué necesitás y te respondemos con alcance, plazos y presupuesto en 48 horas.",
    info: [
      { label: "Teléfono", value: "+54 3446 584076\n+54 3446 641246" },
      { label: "Ubicación", value: "Buenos Aires, Argentina" },
    ],
  },

  footer: {
    copy: "© 2026 · Buenos Aires, Argentina",
  },
};

const en = {
  header: {
    nav: {
      servicios: "Services",
      proyectos: "Projects",
      proceso: "Process",
      estudio: "Studio",
    },
    cta: "Let's talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  hero: {
    eyebrow: "Web design and implementation studio",
    titleLine1: "We design and",
    titleLine2: "build",
    titleLine3: "web products",
    titleEm: "that work.",
    body: "From interface design to shipping to production: sites, platforms and dashboards built with technical judgment and attention to detail.",
    ctaProjects: "View projects",
    ctaServices: "What we do",
    scroll: "Scroll",
  },

  ticker: {
    items: [
      "Taking on projects 2026/2027",
      "Web design & implementation",
      "Buenos Aires, Argentina",
    ],
  },

  servicios: {
    eyebrow: "01 · Services",
    titlePre: "Design, implementation and ",
    titleEm: "systems",
    titlePost: " for digital products.",
    intro: "We work end to end, or join your team at the stage where it's needed most.",
    items: [
      {
        num: "01",
        title: "Web design",
        body: "Sites and landing pages designed from scratch: architecture, content and interface.",
      },
      {
        num: "02",
        title: "Implementation",
        body: "We take the design to production, ours or your team's, with clean code.",
      },
      {
        num: "03",
        title: "Dashboards and platforms",
        body: "Internal panels, dense tables, real-data flows and loading states.",
      },
      {
        num: "04",
        title: "Design systems",
        body: "Documented components so the product grows without losing consistency.",
      },
      {
        num: "05",
        title: "Performance and technical SEO",
        body: "Core Web Vitals, accessibility and measurable metrics before and after.",
      },
      {
        num: "06",
        title: "Maintenance",
        body: "Monthly support, ongoing improvements and monitoring in production.",
      },
    ],
  },

  proyectos: {
    eyebrow: "02 · Projects",
    title: "Projects",
    titleEm: "with purpose.",
    intro: "Design and development for companies that want to grow, simplify and improve the way they work.",
    filters: {
      all: "All",
      web: "Websites",
      platforms: "Platforms",
      dashboards: "Dashboards",
    },
    ctaLabel: "View project",
    emptyState: "More projects in this category are coming soon.",
    items: [
      {
        slug: "annika",
        category: "web",
        sector: "Home automation",
        title: "Annika",
        description: "Technology that fits the way you live.",
        url: "https://www.annikagroup.com/",
      },
      {
        slug: "alejandro-polito",
        category: "web",
        sector: "Health",
        title: "Alejandro Polito",
        description: "Plastic and reconstructive surgery with a personalized approach.",
        url: "https://www.alejandropolito.com.ar/",
      },
      {
        slug: "cerer",
        category: "web",
        sector: "Energy",
        title: "CERER",
        description: "Entre Ríos Renewable Energy Chamber.",
        url: "https://cerer.ar",
      },
    ],
  },

  proceso: {
    eyebrow: "03 · Process",
    titleLine1: "From an idea",
    titleLine2Pre: "to something ",
    titleLine2Em: "that works.",
    intro: "A clear process for turning ideas into digital products that solve problems and evolve.",
    steps: [
      {
        num: "01",
        title: "Listen",
        body: "We understand the business, the users and the technical constraints.",
      },
      {
        num: "02",
        title: "Define",
        body: "Scope, priorities and success criteria, in writing.",
      },
      {
        num: "03",
        title: "Prototype",
        body: "A navigable design to validate before writing code.",
      },
      {
        num: "04",
        title: "Build",
        body: "Staged implementation, with visible testing environments.",
      },
      {
        num: "05",
        title: "Iterate",
        body: "We launch, measure and adjust with real usage data.",
      },
    ],
  },

  brief: {
    eyebrow: "Fill in the blanks below",
    intro: "Hi Vinte, I want to",
    verbs: ["launch", "redesign", "improve", "scale"],
    objects: ["a website", "a platform", "a dashboard", "a design system", "something else"],
    timing: ["this quarter", "next quarter", "later on"],
    emailLabel: "Reach us at",
    emailPlaceholder: "you@email.com",
    submit: "Send",
    sending: "Sending...",
    success: "Done! We'll get back to you soon.",
    error: "Something went wrong. Try again or email us at info@vintestudio.com.",
  },

  clientes: {
    label: "Tech stack",
  },

  filosofia: {
    eyebrow: "How we think",
    titlePre: "A website is judged ",
    titleEm: "when it works",
    titlePost: ".",
    items: [
      "We don't chase trends. We solve the business problem with the simplest interface that supports it.",
      "Design and implementation are the same conversation. Nothing is defined without knowing how it will be built.",
      "We deliver a project another team can read, maintain and extend without us.",
    ],
  },

  estudio: {
    eyebrow: "04 · The studio",
    titleLine1: "Behind every project,",
    titleEm: "it's us.",
    body1: "We work closely on every project, from the first decisions until it's running in production.",
    body2:
      "Design and development live in the same team. No unnecessary layers, with direct communication and real attention to detail.",
    body3: "We can own the product end to end, or join wherever your team needs us.",
    link: "See how we work",
    stats: [
      { n: "01", label: "Design + development in the same team." },
      { n: "02", label: "Direct communication, no middlemen." },
      { n: "03", label: "Built to last, not just to launch." },
    ],
  },

  contacto: {
    eyebrow: "05 · Let's talk",
    titleLine1: "Have a project",
    titleLine2Pre: "you want to ",
    titleLine2Em: "get moving",
    titleLine2Post: "?",
    body: "Tell us what you need and we'll get back to you with scope, timeline and budget within 48 hours.",
    info: [
      { label: "Phone", value: "+54 3446 584076\n+54 3446 641246" },
      { label: "Location", value: "Buenos Aires, Argentina" },
    ],
  },

  footer: {
    copy: "© 2026 · Buenos Aires, Argentina",
  },
} as const satisfies Dictionary;

type Dictionary = typeof es;

export const translations: Record<Locale, Dictionary> = { es, en };
