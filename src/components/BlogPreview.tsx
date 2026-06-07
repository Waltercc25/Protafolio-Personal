"use client";

import Link from "next/link";
import type { BlogPost } from "@/types";
import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import { formatDate } from "@/lib/utils";
import { SectionTitle } from "./SectionTitle";
import { ContentEmptyState } from "./ContentEmptyState";
import { useLocale, useTranslations } from "@/providers/LocaleProvider";

interface BlogPreviewProps {
  postsByLocale: Record<Locale, BlogPost[]>;
}

export function BlogPreview({ postsByLocale }: BlogPreviewProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const posts = postsByLocale[locale] ?? postsByLocale[defaultLocale];

  return (
    <section id="blog" className="border-b border-border bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow={t.blog.eyebrow}
            title={t.blog.title}
            description={t.blog.description}
          />
          {posts.length > 0 && (
            <Link
              href="/blog"
              className="shrink-0 self-start rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:self-auto"
            >
              {t.blog.viewAll}
            </Link>
          )}
        </div>

        {posts.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-accent/40"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                  <span>· {post.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
                >
                  {t.blog.readArticle}
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <ContentEmptyState
            title={t.blog.emptyTitle}
            description={t.blog.emptyDescription}
            hint={t.blog.emptyHint}
          />
        )}
      </div>
    </section>
  );
}
