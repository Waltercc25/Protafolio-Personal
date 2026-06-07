"use client";

import Link from "next/link";
import type { Project } from "@/types";
import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { ContentEmptyState } from "./ContentEmptyState";
import { useLocale, useTranslations } from "@/providers/LocaleProvider";

interface ProjectsProps {
  projectsByLocale: Record<Locale, Project[]>;
}

export function Projects({ projectsByLocale }: ProjectsProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const projects = projectsByLocale[locale] ?? projectsByLocale[defaultLocale];

  return (
    <section id="proyectos" className="border-b border-border bg-transparent py-20 sm:py-24">
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
