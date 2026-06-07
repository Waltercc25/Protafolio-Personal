import type { Locale } from "@/i18n";
import { defaultLocale, locales } from "@/i18n";
import type { Project, ProjectFrontmatter } from "@/types";
import {
  CONTENT_DIRS,
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
} from "./constants";
import {
  isPublished,
  listContentSlugs,
  readMdxFile,
  resolveMdxFile,
} from "./parser";

function parseProjectFrontmatter(
  slug: string,
  data: Record<string, unknown>
): ProjectFrontmatter | null {
  const { title, description, date, category, status, technologies } = data;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof date !== "string" ||
    typeof category !== "string" ||
    typeof status !== "string" ||
    !Array.isArray(technologies)
  ) {
    console.warn(`[content] Frontmatter inválido en proyecto "${slug}.mdx"`);
    return null;
  }

  if (!PROJECT_CATEGORIES.includes(category as ProjectFrontmatter["category"])) {
    console.warn(`[content] Categoría inválida en "${slug}.mdx": ${category}`);
    return null;
  }

  if (!PROJECT_STATUSES.includes(status as ProjectFrontmatter["status"])) {
    console.warn(`[content] Estado inválido en "${slug}.mdx": ${status}`);
    return null;
  }

  return {
    title,
    description,
    date,
    category: category as ProjectFrontmatter["category"],
    status: status as ProjectFrontmatter["status"],
    technologies: technologies.filter((t): t is string => typeof t === "string"),
    github: typeof data.github === "string" ? data.github : undefined,
    demo: typeof data.demo === "string" && data.demo.length > 0 ? data.demo : undefined,
    featured: data.featured === true,
    published: data.published !== false,
  };
}

function loadProject(slug: string, locale: Locale, includeUnpublished = false): Project | null {
  const resolved = resolveMdxFile("projects", slug, locale);
  if (!resolved) return null;

  const { data } = readMdxFile(resolved.dir, resolved.filename);
  if (!includeUnpublished && !isPublished(data)) return null;

  const frontmatter = parseProjectFrontmatter(slug, data);
  if (!frontmatter) return null;

  return { slug, ...frontmatter };
}

function loadAllProjects(locale: Locale, includeUnpublished = false): Project[] {
  return listContentSlugs("projects")
    .map((slug) => loadProject(slug, locale, includeUnpublished))
    .filter((p): p is Project => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllProjects(locale: Locale = defaultLocale): Project[] {
  return loadAllProjects(locale, false);
}

export function getAllProjectsByLocale(): Record<Locale, Project[]> {
  return Object.fromEntries(locales.map((locale) => [locale, getAllProjects(locale)])) as Record<
    Locale,
    Project[]
  >;
}

export function getFeaturedProjects(locale: Locale = defaultLocale): Project[] {
  return getAllProjects(locale).filter((p) => p.featured);
}

export function getFeaturedProjectsByLocale(): Record<Locale, Project[]> {
  return Object.fromEntries(
    locales.map((locale) => [locale, getFeaturedProjects(locale)])
  ) as Record<Locale, Project[]>;
}

export function getProjectBySlug(slug: string, locale: Locale = defaultLocale): Project | undefined {
  return getAllProjects(locale).find((p) => p.slug === slug);
}

export function getProjectSource(
  slug: string,
  locale: Locale = defaultLocale
): { frontmatter: Project; body: string } | null {
  const resolved = resolveMdxFile("projects", slug, locale);
  if (!resolved) return null;

  const { data, content } = readMdxFile(resolved.dir, resolved.filename);
  if (!isPublished(data)) return null;

  const frontmatter = parseProjectFrontmatter(slug, data);
  if (!frontmatter) return null;

  return { frontmatter: { slug, ...frontmatter }, body: content };
}

export function getProjectSources(
  slug: string
): Record<Locale, { frontmatter: Project; body: string } | null> {
  return Object.fromEntries(
    locales.map((locale) => [locale, getProjectSource(slug, locale)])
  ) as Record<Locale, { frontmatter: Project; body: string } | null>;
}

export function hasPublishedProjects(): boolean {
  return getAllProjects(defaultLocale).length > 0;
}

export { CONTENT_DIRS };
