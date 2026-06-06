"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { ContentEmptyState } from "./ContentEmptyState";
import { useTranslations } from "@/providers/LocaleProvider";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const t = useTranslations();

  return (
    <section id="proyectos" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
          {projects.length > 0 && (
            <Link
              href="/proyectos"
              className="shrink-0 self-start rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:self-auto"
            >
              {t.projects.viewAll}
            </Link>
          )}
        </div>

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <ContentEmptyState
            title={t.projects.emptyTitle}
            description={t.projects.emptyDescription}
            hint={t.projects.emptyHint}
          />
        )}
      </div>
    </section>
  );
}
