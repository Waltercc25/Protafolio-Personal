import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  compileMdxSource,
  extractHeadings,
  getAllPosts,
  getPostSource,
} from "@/lib/content";
import { BlogPostLayout } from "@/components/content/BlogPostLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const source = getPostSource(slug);
  if (!source) return { title: "Artículo no encontrado" };
  return {
    title: source.frontmatter.title,
    description: source.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const source = getPostSource(slug);

  if (!source) notFound();

  const headings = extractHeadings(source.body);
  const content = await compileMdxSource(source.body);

  return (
    <BlogPostLayout
      post={source.frontmatter}
      content={content}
      headings={headings}
    />
  );
}
