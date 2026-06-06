"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ContentEmptyState } from "@/components/ContentEmptyState";
import { useTranslations } from "@/providers/LocaleProvider";

interface ProyectosPageContentProps {
  projects: Project[];
}

export function ProyectosPageContent({ projects }: ProyectosPageContentProps) {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        {t.common.backHome}
      </Link>

      <SectionTitle
        eyebrow={t.projects.pageEyebrow}
        title={t.projects.pageTitle}
        description={t.projects.pageDescription}
      />

      {projects.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <ContentEmptyState
          title={t.projects.pageEmptyTitle}
          description={t.projects.pageEmptyDescription}
          hint={t.projects.pageEmptyHint}
        />
      )}
    </div>
  );
}
