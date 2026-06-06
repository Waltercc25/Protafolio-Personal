"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { getStatusColor, cn } from "@/lib/utils";
import { TechBadge } from "./TechBadge";
import { useTranslations } from "@/providers/LocaleProvider";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations();

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-accent/40 hover:shadow-glow">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
          {t.projectCategories[project.category]}
        </span>
        <span
          className={cn(
            "rounded-md border px-2.5 py-1 text-xs font-medium",
            getStatusColor(project.status)
          )}
        >
          {t.projectStatus[project.status]}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
        <Link
          href={`/proyectos/${project.slug}`}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          {t.projects.viewCaseStudy}
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
          >
            {t.projects.repository}
          </a>
        )}
      </div>
    </article>
  );
}
