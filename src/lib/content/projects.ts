import type { Project, ProjectFrontmatter } from "@/types";
import {
  CONTENT_DIRS,
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
} from "./constants";
import {
  getContentDir,
  isPublished,
  listMdxFiles,
  readMdxFile,
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

function loadAllProjects(includeUnpublished = false): Project[] {
  const dir = getContentDir("projects");
  const files = listMdxFiles(dir);

  return files
    .map((file) => {
      const { slug, data } = readMdxFile(dir, file);
      if (!includeUnpublished && !isPublished(data)) return null;

      const frontmatter = parseProjectFrontmatter(slug, data);
      if (!frontmatter) return null;

      return { slug, ...frontmatter };
    })
    .filter((p): p is Project => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllProjects(): Project[] {
  return loadAllProjects(false);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getProjectSource(slug: string): { frontmatter: Project; body: string } | null {
  const dir = getContentDir("projects");
  const filename = `${slug}.mdx`;
  const filePath = `${dir}/${filename}`;

  if (!listMdxFiles(dir).includes(filename)) return null;

  const { data, content } = readMdxFile(dir, filename);
  if (!isPublished(data)) return null;

  const frontmatter = parseProjectFrontmatter(slug, data);
  if (!frontmatter) return null;

  return { frontmatter: { slug, ...frontmatter }, body: content };
}

export function hasPublishedProjects(): boolean {
  return getAllProjects().length > 0;
}

export { CONTENT_DIRS };
