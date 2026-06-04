import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas técnicas sobre Linux, cloud, automatización y bases de datos.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        ← Volver al inicio
      </Link>

      <SectionTitle
        eyebrow="Notas técnicas"
        title="Blog"
        description="Artículos y guías documentadas durante mi aprendizaje."
      />

      <ul className="mt-12 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-accent/40">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
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
                Leer artículo →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
