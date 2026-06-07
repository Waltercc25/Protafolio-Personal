import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import type { ContentHeading } from "@/types";
import { TEMPLATE_PREFIX } from "./constants";

export type ContentType = "projects" | "blog";

export function getContentDir(type: ContentType, locale: Locale = defaultLocale): string {
  const base = type === "projects" ? "content/projects" : "content/blog";
  return path.join(process.cwd(), base, locale);
}

export function listMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith(TEMPLATE_PREFIX))
    .sort();
}

export function listContentSlugs(type: ContentType): string[] {
  return listMdxFiles(getContentDir(type, defaultLocale)).map((file) =>
    file.replace(/\.mdx$/, "")
  );
}

export function resolveMdxFile(
  type: ContentType,
  slug: string,
  locale: Locale
): { dir: string; filename: string } | null {
  const filename = `${slug}.mdx`;
  const localeDir = getContentDir(type, locale);

  if (listMdxFiles(localeDir).includes(filename)) {
    return { dir: localeDir, filename };
  }

  if (locale !== defaultLocale) {
    const fallbackDir = getContentDir(type, defaultLocale);
    if (listMdxFiles(fallbackDir).includes(filename)) {
      return { dir: fallbackDir, filename };
    }
  }

  return null;
}

export function readMdxFile(
  dir: string,
  filename: string
): { slug: string; raw: string; data: Record<string, unknown>; content: string } {
  const filePath = path.join(dir, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx$/, "");

  return { slug, raw, data, content };
}

export function isPublished(data: Record<string, unknown>): boolean {
  return data.published !== false;
}

export function extractHeadings(mdxBody: string): ContentHeading[] {
  const slugger = new GithubSlugger();
  const headings: ContentHeading[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(mdxBody)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/\{#.+\}$/, "").trim();
    headings.push({ id: slugger.slug(text), text, level });
  }

  return headings;
}

export function estimateReadTime(mdxBody: string): string {
  const words = mdxBody.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}
