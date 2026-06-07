import type { Locale } from "@/i18n";
import { defaultLocale, locales } from "@/i18n";
import type { BlogPost, BlogFrontmatter } from "@/types";
import {
  estimateReadTime,
  isPublished,
  listContentSlugs,
  readMdxFile,
  resolveMdxFile,
} from "./parser";

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

function loadPost(slug: string, locale: Locale, includeUnpublished = false): BlogPost | null {
  const resolved = resolveMdxFile("blog", slug, locale);
  if (!resolved) return null;

  const { data, content } = readMdxFile(resolved.dir, resolved.filename);
  if (!includeUnpublished && !isPublished(data)) return null;

  const frontmatter = parseBlogFrontmatter(slug, data, content);
  if (!frontmatter) return null;

  return { slug, ...frontmatter };
}

function loadAllPosts(locale: Locale, includeUnpublished = false): BlogPost[] {
  return listContentSlugs("blog")
    .map((slug) => loadPost(slug, locale, includeUnpublished))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllPosts(locale: Locale = defaultLocale): BlogPost[] {
  return loadAllPosts(locale, false);
}

export function getAllPostsByLocale(): Record<Locale, BlogPost[]> {
  return Object.fromEntries(locales.map((locale) => [locale, getAllPosts(locale)])) as Record<
    Locale,
    BlogPost[]
  >;
}

export function getFeaturedPosts(locale: Locale = defaultLocale): BlogPost[] {
  return getAllPosts(locale).filter((p) => p.featured);
}

export function getFeaturedPostsByLocale(): Record<Locale, BlogPost[]> {
  return Object.fromEntries(
    locales.map((locale) => [locale, getFeaturedPosts(locale)])
  ) as Record<Locale, BlogPost[]>;
}

export function getPostBySlug(slug: string, locale: Locale = defaultLocale): BlogPost | undefined {
  return getAllPosts(locale).find((p) => p.slug === slug);
}

export function getPostSource(
  slug: string,
  locale: Locale = defaultLocale
): { frontmatter: BlogPost; body: string } | null {
  const resolved = resolveMdxFile("blog", slug, locale);
  if (!resolved) return null;

  const { data, content } = readMdxFile(resolved.dir, resolved.filename);
  if (!isPublished(data)) return null;

  const frontmatter = parseBlogFrontmatter(slug, data, content);
  if (!frontmatter) return null;

  return { frontmatter: { slug, ...frontmatter }, body: content };
}

export function getPostSources(
  slug: string
): Record<Locale, { frontmatter: BlogPost; body: string } | null> {
  return Object.fromEntries(
    locales.map((locale) => [locale, getPostSource(slug, locale)])
  ) as Record<Locale, { frontmatter: BlogPost; body: string } | null>;
}

export function hasPublishedPosts(): boolean {
  return getAllPosts(defaultLocale).length > 0;
}
