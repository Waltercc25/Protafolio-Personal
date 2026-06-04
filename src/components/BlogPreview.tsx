import Link from "next/link";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { SectionTitle } from "./SectionTitle";

export function BlogPreview() {
  const featured = posts.filter((p) => p.featured);

  return (
    <section id="blog" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Notas técnicas"
            title="Blog"
            description="Artículos sobre Linux, cloud, automatización y bases de datos."
          />
          <Link
            href="/blog"
            className="shrink-0 self-start rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:self-auto"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-accent/40"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
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
                Leer artículo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
