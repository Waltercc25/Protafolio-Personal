import type { Locale } from "@/i18n";
import { defaultLocale, locales } from "@/i18n";
import type { BlogPost, MdxPageVersion, Project } from "@/types";
import { compileMdxSource } from "./mdx";
import { extractHeadings } from "./parser";
import { getPostSources } from "./blog";
import { getProjectSources } from "./projects";

async function buildMdxVersions<T extends BlogPost | Project>(
  sources: Record<Locale, { frontmatter: T; body: string } | null>
): Promise<Partial<Record<Locale, MdxPageVersion<T>>>> {
  const versions: Partial<Record<Locale, MdxPageVersion<T>>> = {};

  for (const locale of locales) {
    const source = sources[locale] ?? sources[defaultLocale];
    if (!source) continue;

    versions[locale] = {
      meta: source.frontmatter,
      content: await compileMdxSource(source.body),
      headings: extractHeadings(source.body),
    };
  }

  return versions;
}

export async function buildBlogPostVersions(
  slug: string
): Promise<Partial<Record<Locale, MdxPageVersion<BlogPost>>> | null> {
  const sources = getPostSources(slug);
  if (!sources.es && !sources.en) return null;
  return buildMdxVersions(sources);
}

export async function buildProjectVersions(
  slug: string
): Promise<Partial<Record<Locale, MdxPageVersion<Project>>> | null> {
  const sources = getProjectSources(slug);
  if (!sources.es && !sources.en) return null;
  return buildMdxVersions(sources);
}
