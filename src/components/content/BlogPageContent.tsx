"use client";

import Link from "next/link";
import type { BlogPost } from "@/types";
import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import { formatDate } from "@/lib/utils";
import { SectionTitle } from "@/components/SectionTitle";
import { ContentEmptyState } from "@/components/ContentEmptyState";
import { useLocale, useTranslations } from "@/providers/LocaleProvider";

interface BlogPageContentProps {
  postsByLocale: Record<Locale, BlogPost[]>;
}

export function BlogPageContent({ postsByLocale }: BlogPageContentProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const posts = postsByLocale[locale] ?? postsByLocale[defaultLocale];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        {t.common.backHome}
      </Link>

      <SectionTitle
        eyebrow={t.blog.eyebrow}
        title={t.blog.title}
        description={t.blog.pageDescription}
      />

      {posts.length > 0 ? (
        <ul className="mt-12 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-accent/40">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                  <span>· {post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-muted-foreground">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
                >
                  {t.blog.readArticle}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <ContentEmptyState
          title={t.blog.pageEmptyTitle}
          description={t.blog.pageEmptyDescription}
          hint={t.blog.pageEmptyHint}
        />
      )}
    </div>
  );
}
