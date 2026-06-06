import Link from "next/link";
import type { BlogPost, ContentHeading } from "@/types";
import { formatDate } from "@/lib/utils";
import { MdxProse } from "@/components/mdx";
import { TableOfContents } from "@/components/mdx/TableOfContents";

interface BlogPostLayoutProps {
  post: BlogPost;
  content: React.ReactNode;
  headings: ContentHeading[];
}

export function BlogPostLayout({ post, content, headings }: BlogPostLayoutProps) {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        ← Todos los artículos
      </Link>

      <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>· {post.readTime} de lectura</span>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>

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
