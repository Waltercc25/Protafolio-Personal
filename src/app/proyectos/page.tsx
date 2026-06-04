import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos de estudio en automatización, cloud, Linux y bases de datos.",
};

export default function ProyectosPage() {
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

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
