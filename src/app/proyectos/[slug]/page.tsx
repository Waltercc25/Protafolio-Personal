import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/content";
import { buildProjectVersions } from "@/lib/content/locale-pages";
import { ProjectLayout } from "@/components/content/ProjectLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const versions = await buildProjectVersions(slug);
  const project = versions?.es?.meta ?? versions?.en?.meta;
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const versions = await buildProjectVersions(slug);

  if (!versions) notFound();

  return <ProjectLayout versions={versions} />;
}
