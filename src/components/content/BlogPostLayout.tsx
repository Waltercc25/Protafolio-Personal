"use client";

import Link from "next/link";
import type { BlogPost, MdxPageVersion } from "@/types";
import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import { formatDate } from "@/lib/utils";
import { MdxProse } from "@/components/mdx";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { useLocale, useTranslations } from "@/providers/LocaleProvider";

interface BlogPostLayoutProps {
  versions: Partial<Record<Locale, MdxPageVersion<BlogPost>>>;
}

export function BlogPostLayout({ versions }: BlogPostLayoutProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const version = versions[locale] ?? versions[defaultLocale];

  if (!version) return null;

  const { meta: post, content, headings } = version;

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        {t.blog.backToAll}
      </Link>

      <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span>
              · {post.readTime} {t.blog.readTime}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.description}</p>

          <MdxProse className="mt-12">{content}</MdxProse>
        </div>

        {headings.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
