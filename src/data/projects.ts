import type { Project } from "@/types";

/**
 * Datos estáticos de proyectos (fase 1).
 * Migración futura a MDX: ver content/projects/*.mdx
 * y reemplazar esta importación por getProjectsFromMDX() en lib/content.ts
 */
export const projects: Project[] = [
  {
    slug: "bot-salon-belleza-n8n",
    title: "Bot de atención para salón de belleza con n8n",
    description:
      "Automatización de citas, productos, facturación y respuestas por WhatsApp.",
    technologies: ["n8n", "PostgreSQL", "Evolution API", "Gmail API", "PDFMonkey", "Google Cloud"],
    status: "En desarrollo",
    category: "Automatización",
    github: "https://github.com/waltercantor",
    featured: true,
  },
  {
    slug: "laboratorio-administracion-linux",
    title: "Laboratorio de administración Linux",
    description:
      "Prácticas reales de usuarios, permisos, procesos, backups y monitoreo en Ubuntu Server.",
    technologies: ["Linux", "Ubuntu Server", "Bash", "tar", "grep", "systemctl"],
    status: "Documentado",
    category: "Infraestructura",
    github: "https://github.com/waltercantor",
    featured: true,
  },
  {
    slug: "despliegue-n8n-google-cloud",
    title: "Despliegue de n8n en Google Cloud",
    description:
      "Instalación de n8n en una VM, configuración de dominio, variables de entorno y pruebas con webhooks.",
    technologies: ["Google Cloud", "Linux", "Docker", "n8n"],
    status: "En desarrollo",
    category: "Cloud",
    github: "https://github.com/waltercantor",
    featured: true,
  },
  {
    slug: "base-datos-sistema-citas",
    title: "Base de datos para sistema de citas",
    description:
      "Diseño de tablas para clientes, servicios, productos, citas, ventas y facturación.",
    technologies: ["PostgreSQL", "Neon", "SQL"],
    status: "Documentado",
    category: "Bases de datos",
    github: "https://github.com/waltercantor",
    featured: true,
  },
  {
    slug: "laboratorio-kvm-qemu",
    title: "Laboratorio KVM/QEMU",
    description:
      "Prácticas de virtualización, snapshots, clonado de máquinas virtuales y administración básica.",
    technologies: ["KVM", "QEMU", "Linux"],
    status: "Planeado",
    category: "Virtualización",
    github: "https://github.com/waltercantor",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
