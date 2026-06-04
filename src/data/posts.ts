import type { BlogPost } from "@/types";

/**
 * Datos estáticos del blog (fase 1).
 * Migración futura a MDX: ver content/blog/*.mdx
 */
export const posts: BlogPost[] = [
  {
    slug: "desplegar-n8n-google-cloud",
    title: "Cómo desplegar n8n en una VM de Google Cloud",
    description:
      "Guía paso a paso para instalar n8n en Compute Engine, configurar dominio y webhooks.",
    date: "2026-05-15",
    category: "Cloud",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "snapshot-vs-backup",
    title: "Diferencia entre snapshot y backup",
    description:
      "Cuándo usar cada estrategia en virtualización y administración de servidores.",
    date: "2026-05-01",
    category: "Infraestructura",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "comandos-linux-administracion",
    title: "Comandos Linux útiles para administración de servidores",
    description:
      "Referencia práctica de comandos para usuarios, procesos, red y mantenimiento.",
    date: "2026-04-20",
    category: "Linux",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "diseno-bd-sistema-citas",
    title: "Cómo diseñar una base de datos para sistema de citas",
    description:
      "Modelo relacional para clientes, servicios, citas, ventas y facturación.",
    date: "2026-04-10",
    category: "Bases de datos",
    readTime: "10 min",
    featured: true,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
