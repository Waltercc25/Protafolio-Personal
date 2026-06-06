export const es = {
  site: {
    title: "Estudiante enfocado en servidores, Linux, cloud y automatización",
    description:
      "Construyo laboratorios, automatizaciones y soluciones prácticas usando Linux, cloud, n8n, APIs y bases de datos.",
    portfolio: "Portafolio",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Tecnologías",
    projects: "Proyectos",
    labs: "Laboratorios",
    blog: "Blog",
    contact: "Contacto",
    viewAllProjects: "Ver todos los proyectos",
    cv: "CV",
    downloadCv: "Descargar CV",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  toggles: {
    spanish: "Español",
    english: "English",
    light: "Claro",
    dark: "Oscuro",
    language: "Idioma",
    theme: "Tema",
  },
  hero: {
    availability: "Disponible para oportunidades y colaboraciones",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Infraestructura, cloud y automatización",
    description: "Perfil en crecimiento con enfoque práctico y documentado.",
    p1: "Soy estudiante con enfoque en infraestructura tecnológica, administración de servidores, Linux, cloud computing, automatización de procesos y bases de datos. Mi objetivo es construir soluciones reales que combinen buenas prácticas de operación con herramientas modernas.",
    p2: "Desarrollo laboratorios y proyectos prácticos donde documento cada paso: desde la configuración de servidores Ubuntu y virtualización con KVM/QEMU, hasta despliegues en Google Cloud, flujos con n8n e integraciones por API.",
    p3: "Busco seguir fortaleciendo competencias en DevOps básico, seguridad, monitoreo y diseño de datos, siempre con un enfoque honesto de aprendizaje continuo y entrega de valor en entornos reales.",
    focusTitle: "Enfoque actual",
    focusItems: [
      "Administración de servidores Linux y virtualización",
      "Despliegue y operación en entornos cloud (GCP, AWS)",
      "Automatización con n8n, webhooks y APIs",
      "Diseño y gestión de bases de datos PostgreSQL/MySQL",
      "Documentación técnica y casos de estudio publicables",
    ],
  },
  skills: {
    eyebrow: "Stack técnico",
    title: "Tecnologías y herramientas",
    description: "Habilidades organizadas por área de especialización en formación.",
    categories: {
      infrastructure: "Infraestructura",
      cloud: "Cloud",
      automation: "Automatización",
      databases: "Bases de datos",
      tools: "Herramientas",
    },
  },
  projects: {
    eyebrow: "Portafolio",
    title: "Proyectos destacados",
    description:
      "Casos reales documentados con enfoque en automatización, cloud e infraestructura.",
    viewAll: "Ver todos →",
    viewCaseStudy: "Ver caso de estudio",
    repository: "Repositorio",
    liveDemo: "Demo en vivo",
    pageEyebrow: "Portafolio completo",
    pageTitle: "Todos los proyectos",
    pageDescription: "Explora cada caso de estudio con tecnologías, estado y enlaces.",
    backToAll: "← Todos los proyectos",
    emptyTitle: "Próximamente",
    emptyDescription:
      "Estoy preparando los casos de estudio de mis proyectos. El entorno ya está listo para publicarlos en MDX.",
    emptyHint:
      "Los proyectos con featured: true en content/projects/*.mdx aparecerán aquí.",
    pageEmptyTitle: "Proyectos en preparación",
    pageEmptyDescription:
      "Aún no hay casos de estudio publicados. El entorno MDX ya está listo para cuando documentes tu primer proyecto.",
    pageEmptyHint: "Crea content/projects/mi-proyecto.mdx basándote en _template.project.mdx",
  },
  labs: {
    eyebrow: "Práctica",
    title: "Laboratorios técnicos",
    description:
      "Ejercicios y entornos de aprendizaje para reforzar administración de sistemas y cloud.",
    items: {
      "usuarios-permisos-linux": {
        title: "Gestión de usuarios y permisos en Linux",
        description:
          "Creación de usuarios, grupos, permisos y políticas de acceso en Ubuntu Server.",
      },
      "backups-tar": {
        title: "Backups con tar",
        description: "Estrategias de respaldo, compresión y restauración de directorios críticos.",
      },
      "monitoreo-procesos": {
        title: "Monitoreo de procesos",
        description:
          "Supervisión de servicios, uso de recursos y diagnóstico con herramientas CLI.",
      },
      "virtualizacion-kvm": {
        title: "Virtualización con KVM/QEMU",
        description: "Creación de VMs, snapshots, clonado y administración de hipervisores.",
      },
      "automatizacion-n8n": {
        title: "Automatización con n8n",
        description: "Flujos de trabajo, webhooks e integración con APIs externas.",
      },
      "diseno-postgresql": {
        title: "Diseño de bases de datos PostgreSQL",
        description: "Modelado relacional, normalización y consultas para sistemas de citas.",
      },
      "despliegue-gcp": {
        title: "Despliegue de servicios en Google Cloud",
        description:
          "VMs, firewall, dominios y variables de entorno para servicios en producción.",
      },
    },
  },
  blog: {
    eyebrow: "Notas técnicas",
    title: "Blog",
    description: "Artículos sobre Linux, cloud, automatización y bases de datos.",
    viewAll: "Ver todos →",
    readArticle: "Leer artículo →",
    readTime: "de lectura",
    pageDescription: "Artículos y guías documentadas durante mi aprendizaje.",
    backToAll: "← Todos los artículos",
    toc: "En este artículo",
    emptyTitle: "Notas técnicas en camino",
    emptyDescription:
      "Documentaré labs, despliegues y aprendizajes aquí. Solo hay que crear un archivo .mdx en content/blog/.",
    emptyHint: "Usa content/blog/_template.post.mdx como punto de partida.",
    pageEmptyTitle: "Artículos en preparación",
    pageEmptyDescription:
      "El blog está configurado con MDX. Cuando escribas tu primera nota técnica, aparecerá aquí automáticamente.",
    pageEmptyHint: "Crea content/blog/mi-articulo.mdx basándote en _template.post.mdx",
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    description:
      "Abierto a oportunidades, prácticas, colaboraciones y feedback sobre mi trabajo.",
    body: "Puedes escribirme o revisar mi trabajo en los siguientes enlaces.",
    downloadCv: "Descargar CV",
  },
  footer: {
    tagline: "Linux · Cloud · Automatización · DevOps",
    builtWith: "Construido con Next.js y desplegado en Vercel.",
  },
  common: {
    backHome: "← Volver al inicio",
  },
  projectCategories: {
    Automatización: "Automatización",
    Infraestructura: "Infraestructura",
    Cloud: "Cloud",
    "Bases de datos": "Bases de datos",
    Virtualización: "Virtualización",
  },
  projectStatus: {
    "En desarrollo": "En desarrollo",
    Documentado: "Documentado",
    Planeado: "Planeado",
    Completado: "Completado",
  },
};

export type TranslationDict = typeof es;
