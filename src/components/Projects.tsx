import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section id="proyectos" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Portafolio"
            title="Proyectos destacados"
            description="Casos reales y en desarrollo con enfoque en automatización, cloud e infraestructura."
          />
          <Link
            href="/proyectos"
            className="shrink-0 self-start rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:self-auto"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
