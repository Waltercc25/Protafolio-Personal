/**
 * Capa de contenido — preparada para migración MDX (fase 2).
 *
 * Fase actual: datos desde src/data/*.ts
 * Fase futura:
 *   1. Instalar @next/mdx, gray-matter, etc.
 *   2. Leer archivos desde content/projects/*.mdx y content/blog/*.mdx
 *   3. Parsear frontmatter y reemplazar imports en páginas dinámicas
 *
 * Ejemplo de frontmatter para proyectos (content/projects/ejemplo.mdx):
 *
 * ---
 * title: "Despliegue de n8n en Google Cloud"
 * description: "Instalación y configuración de n8n en una VM."
 * date: "2026-06-04"
 * category: "Cloud"
 * status: "En desarrollo"
 * technologies:
 *   - Google Cloud
 *   - Linux
 *   - Docker
 *   - n8n
 * github: "https://github.com/..."
 * demo: ""
 * featured: true
 * ---
 */

export const CONTENT_PATHS = {
  projects: "content/projects",
  blog: "content/blog",
} as const;
