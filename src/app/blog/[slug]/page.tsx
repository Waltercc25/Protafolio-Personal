import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/content";
import { buildBlogPostVersions } from "@/lib/content/locale-pages";
import { BlogPostLayout } from "@/components/content/BlogPostLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const versions = await buildBlogPostVersions(slug);
  const post = versions?.es?.meta ?? versions?.en?.meta;
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const versions = await buildBlogPostVersions(slug);

  if (!versions) notFound();

  return <BlogPostLayout versions={versions} />;
}
