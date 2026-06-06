import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  compileMdxSource,
  extractHeadings,
  getAllProjects,
  getProjectSource,
} from "@/lib/content";
import { ProjectLayout } from "@/components/content/ProjectLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const source = getProjectSource(slug);
  if (!source) return { title: "Proyecto no encontrado" };
  return {
    title: source.frontmatter.title,
    description: source.frontmatter.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const source = getProjectSource(slug);

  if (!source) notFound();

  const headings = extractHeadings(source.body);
  const content = await compileMdxSource(source.body);

  return (
    <ProjectLayout
      project={source.frontmatter}
      content={content}
      headings={headings}
    />
  );
}
