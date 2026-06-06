import type { TranslationDict } from "./es";

export const en: TranslationDict = {
  site: {
    title: "Student focused on servers, Linux, cloud and automation",
    description:
      "I build labs, automations and practical solutions using Linux, cloud, n8n, APIs and databases.",
    portfolio: "Portfolio",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    labs: "Labs",
    blog: "Blog",
    contact: "Contact",
    viewAllProjects: "View all projects",
    cv: "CV",
    downloadCv: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  toggles: {
    spanish: "Español",
    english: "English",
    light: "Light",
    dark: "Dark",
    language: "Language",
    theme: "Theme",
  },
  hero: {
    availability: "Open to opportunities and collaborations",
    viewProjects: "View projects",
    downloadCv: "Download CV",
  },
  about: {
    eyebrow: "About me",
    title: "Infrastructure, cloud and automation",
    description: "Growing profile with a practical, documented approach.",
    p1: "I'm a student focused on technology infrastructure, server administration, Linux, cloud computing, process automation and databases. My goal is to build real solutions that combine operational best practices with modern tools.",
    p2: "I develop labs and hands-on projects where I document every step: from Ubuntu server setup and KVM/QEMU virtualization to Google Cloud deployments, n8n workflows and API integrations.",
    p3: "I'm looking to keep strengthening skills in basic DevOps, security, monitoring and data design, always with an honest focus on continuous learning and delivering value in real environments.",
    focusTitle: "Current focus",
    focusItems: [
      "Linux server administration and virtualization",
      "Deployment and operations in cloud environments (GCP, AWS)",
      "Automation with n8n, webhooks and APIs",
      "PostgreSQL/MySQL database design and management",
      "Technical documentation and publishable case studies",
    ],
  },
  skills: {
    eyebrow: "Tech stack",
    title: "Technologies and tools",
    description: "Skills organized by area of specialization in progress.",
    categories: {
      infrastructure: "Infrastructure",
      cloud: "Cloud",
      automation: "Automation",
      databases: "Databases",
      tools: "Tools",
    },
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Featured projects",
    description:
      "Documented real-world cases focused on automation, cloud and infrastructure.",
    viewAll: "View all →",
    viewCaseStudy: "View case study",
    repository: "Repository",
    liveDemo: "Live demo",
    pageEyebrow: "Full portfolio",
    pageTitle: "All projects",
    pageDescription: "Explore each case study with technologies, status and links.",
    backToAll: "← All projects",
    emptyTitle: "Coming soon",
    emptyDescription:
      "I'm preparing case studies for my projects. The environment is ready to publish them in MDX.",
    emptyHint: "Projects with featured: true in content/projects/*.mdx will appear here.",
    pageEmptyTitle: "Projects in preparation",
    pageEmptyDescription:
      "No case studies published yet. The MDX environment is ready for when you document your first project.",
    pageEmptyHint: "Create content/projects/my-project.mdx based on _template.project.mdx",
  },
  labs: {
    eyebrow: "Practice",
    title: "Technical labs",
    description: "Exercises and learning environments to reinforce systems and cloud administration.",
    items: {
      "usuarios-permisos-linux": {
        title: "Linux user and permission management",
        description: "Creating users, groups, permissions and access policies on Ubuntu Server.",
      },
      "backups-tar": {
        title: "Backups with tar",
        description: "Backup strategies, compression and restoration of critical directories.",
      },
      "monitoreo-procesos": {
        title: "Process monitoring",
        description: "Service supervision, resource usage and CLI-based diagnostics.",
      },
      "virtualizacion-kvm": {
        title: "KVM/QEMU virtualization",
        description: "VM creation, snapshots, cloning and basic hypervisor administration.",
      },
      "automatizacion-n8n": {
        title: "Automation with n8n",
        description: "Workflows, webhooks and integration with external APIs.",
      },
      "diseno-postgresql": {
        title: "PostgreSQL database design",
        description: "Relational modeling, normalization and queries for appointment systems.",
      },
      "despliegue-gcp": {
        title: "Deploying services on Google Cloud",
        description: "VMs, firewall, domains and environment variables for production services.",
      },
    },
  },
  blog: {
    eyebrow: "Technical notes",
    title: "Blog",
    description: "Articles about Linux, cloud, automation and databases.",
    viewAll: "View all →",
    readArticle: "Read article →",
    readTime: "read",
    pageDescription: "Articles and guides documented throughout my learning journey.",
    backToAll: "← All articles",
    toc: "In this article",
    emptyTitle: "Technical notes on the way",
    emptyDescription:
      "I'll document labs, deployments and learnings here. Just create an .mdx file in content/blog/.",
    emptyHint: "Use content/blog/_template.post.mdx as a starting point.",
    pageEmptyTitle: "Articles in preparation",
    pageEmptyDescription:
      "The blog is configured with MDX. When you write your first technical note, it will appear here automatically.",
    pageEmptyHint: "Create content/blog/my-article.mdx based on _template.post.mdx",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk?",
    description: "Open to opportunities, internships, collaborations and feedback on my work.",
    body: "You can email me or check my work through the links below.",
    downloadCv: "Download CV",
  },
  footer: {
    tagline: "Linux · Cloud · Automation · DevOps",
    builtWith: "Built with Next.js and deployed on Vercel.",
  },
  common: {
    backHome: "← Back to home",
  },
  projectCategories: {
    Automatización: "Automation",
    Infraestructura: "Infrastructure",
    Cloud: "Cloud",
    "Bases de datos": "Databases",
    Virtualización: "Virtualization",
  },
  projectStatus: {
    "En desarrollo": "In progress",
    Documentado: "Documented",
    Planeado: "Planned",
    Completado: "Completed",
  },
};
