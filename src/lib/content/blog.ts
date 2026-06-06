import type { BlogPost, BlogFrontmatter } from "@/types";
import { getContentDir, isPublished, listMdxFiles, readMdxFile, estimateReadTime } from "./parser";

function parseBlogFrontmatter(
  slug: string,
  data: Record<string, unknown>,
  body: string
): BlogFrontmatter | null {
  const { title, description, date, category } = data;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof date !== "string" ||
    typeof category !== "string"
  ) {
    console.warn(`[content] Frontmatter inválido en artículo "${slug}.mdx"`);
    return null;
  }

  const readTime =
    typeof data.readTime === "string" && data.readTime.length > 0
      ? data.readTime
      : estimateReadTime(body);

  return {
    title,
    description,
    date,
    category,
    readTime,
    featured: data.featured === true,
    published: data.published !== false,
  };
}

function loadAllPosts(includeUnpublished = false): BlogPost[] {
  const dir = getContentDir("blog");
  const files = listMdxFiles(dir);

  return files
    .map((file) => {
      const { slug, data, content } = readMdxFile(dir, file);
      if (!includeUnpublished && !isPublished(data)) return null;

      const frontmatter = parseBlogFrontmatter(slug, data, content);
      if (!frontmatter) return null;

      return { slug, ...frontmatter };
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPosts(): BlogPost[] {
  return loadAllPosts(false);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostSource(slug: string): { frontmatter: BlogPost; body: string } | null {
  const dir = getContentDir("blog");
  const filename = `${slug}.mdx`;

  if (!listMdxFiles(dir).includes(filename)) return null;

  const { data, content } = readMdxFile(dir, filename);
  if (!isPublished(data)) return null;

  const frontmatter = parseBlogFrontmatter(slug, data, content);
  if (!frontmatter) return null;

  return { frontmatter: { slug, ...frontmatter }, body: content };
}

export function hasPublishedPosts(): boolean {
  return getAllPosts().length > 0;
}
