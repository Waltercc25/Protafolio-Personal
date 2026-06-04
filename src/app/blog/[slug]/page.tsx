import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        ← Todos los artículos
      </Link>

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

      <div className="prose prose-invert mt-10 max-w-none rounded-2xl border border-border bg-card p-6 text-muted-foreground">
        <p>
          Contenido del artículo en preparación. Se publicará en{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-accent">
            content/blog/{post.slug}.mdx
          </code>{" "}
          cuando se active la integración MDX.
        </p>
      </div>
    </article>
  );
}
