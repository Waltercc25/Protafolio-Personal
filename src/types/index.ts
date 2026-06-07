import type { ReactNode } from "react";

export type ProjectStatus = "En desarrollo" | "Documentado" | "Planeado" | "Completado";

export type ProjectCategory =
  | "Automatización"
  | "Infraestructura"
  | "Cloud"
  | "Bases de datos"
  | "Virtualización";
/** Frontmatter estándar para content/projects/*.mdx */
export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  /** false = borrador; no aparece en listados ni rutas estáticas */
  published?: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
}

/** Frontmatter estándar para content/blog/*.mdx */
export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  published?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
}

export interface ContentHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export type SkillCategoryId =
  | "infrastructure"
  | "cloud"
  | "automation"
  | "databases"
  | "tools";

export interface SkillCategory {
  id: SkillCategoryId;
  skills: string[];
}

export interface Lab {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  /** Activa botones de descarga de CV cuando exista public/cv.pdf */
  cvAvailable: boolean;
}

export interface ContentFlags {
  hasProjects: boolean;
  hasBlogPosts: boolean;
}

export interface MdxPageVersion<T> {
  meta: T;
  content: ReactNode;
  headings: ContentHeading[];
}
