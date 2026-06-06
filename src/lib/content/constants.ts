export const CONTENT_DIRS = {
  projects: "content/projects",
  blog: "content/blog",
} as const;

/** Archivos que empiezan con _ son plantillas internas (nunca se publican). */
export const TEMPLATE_PREFIX = "_";

export const PROJECT_CATEGORIES = [
  "Automatización",
  "Infraestructura",
  "Cloud",
  "Bases de datos",
  "Virtualización",
] as const;

export const PROJECT_STATUSES = [
  "En desarrollo",
  "Documentado",
  "Planeado",
  "Completado",
] as const;
