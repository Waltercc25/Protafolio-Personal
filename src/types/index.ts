export type ProjectStatus = "En desarrollo" | "Documentado" | "Planeado" | "Completado";

export type ProjectCategory =
  | "Automatización"
  | "Infraestructura"
  | "Cloud"
  | "Bases de datos"
  | "Virtualización";

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Lab {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
}
