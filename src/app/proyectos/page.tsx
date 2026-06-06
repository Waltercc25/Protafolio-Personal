import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ContentEmptyState } from "@/components/ContentEmptyState";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos de estudio en automatización, cloud, Linux y bases de datos.",
};

export default function ProyectosPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        ← Volver al inicio
      </Link>

      <SectionTitle
        eyebrow="Portafolio completo"
        title="Todos los proyectos"
        description="Explora cada caso de estudio con tecnologías, estado y enlaces."
      />

      {projects.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <ContentEmptyState
          title="Proyectos en preparación"
          description="Aún no hay casos de estudio publicados. El entorno MDX ya está listo para cuando documentes tu primer proyecto."
          hint="Crea content/projects/mi-proyecto.mdx basándote en _template.project.mdx"
        />
      )}
    </div>
  );
}
