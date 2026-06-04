import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { getStatusColor, cn } from "@/lib/utils";
import { TechBadge } from "@/components/TechBadge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/proyectos"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        ← Todos los proyectos
      </Link>

      <div className="flex flex-wrap gap-3">
        <span className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
          {project.category}
        </span>
        <span
          className={cn(
            "rounded-md border px-2.5 py-1 text-xs font-medium",
            getStatusColor(project.status)
          )}
        >
          {project.status}
        </span>
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
        <p>
          Caso de estudio en preparación. El contenido completo se publicará cuando
          migre a MDX en{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-accent">
            content/projects/{project.slug}.mdx
          </code>
          .
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Repositorio
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-accent/50"
          >
            Demo en vivo
          </a>
        )}
      </div>
    </article>
  );
}
