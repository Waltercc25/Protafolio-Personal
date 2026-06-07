"use client";

import Link from "next/link";
import type { MdxPageVersion, Project } from "@/types";
import type { Locale } from "@/i18n";
import { defaultLocale } from "@/i18n";
import { getStatusColor, cn } from "@/lib/utils";
import { TechBadge } from "@/components/TechBadge";
import { MdxProse } from "@/components/mdx";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { useLocale, useTranslations } from "@/providers/LocaleProvider";

interface ProjectLayoutProps {
  versions: Partial<Record<Locale, MdxPageVersion<Project>>>;
}

export function ProjectLayout({ versions }: ProjectLayoutProps) {
  const t = useTranslations();
  const { locale } = useLocale();
  const version = versions[locale] ?? versions[defaultLocale];

  if (!version) return null;

  const { meta: project, content, headings } = version;

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/proyectos"
        className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        {t.projects.backToAll}
      </Link>

      <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
        <div>
          <div className="flex flex-wrap gap-3">
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

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                {t.projects.repository}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium hover:border-accent/50"
              >
                {t.projects.liveDemo}
              </a>
            )}
          </div>

          <MdxProse className="mt-12">{content}</MdxProse>
        </div>

        {headings.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
