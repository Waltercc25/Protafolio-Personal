"use client";

import { labs } from "@/data/labs";
import { SectionTitle } from "./SectionTitle";
import { TechBadge } from "./TechBadge";
import { useTranslations } from "@/providers/LocaleProvider";

export function Labs() {
  const t = useTranslations();

  return (
    <section id="laboratorios" className="border-b border-border bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.labs.eyebrow}
          title={t.labs.title}
          description={t.labs.description}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => {
            const copy = t.labs.items[lab.id as keyof typeof t.labs.items];
            return (
              <article
                key={lab.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-accent/30"
              >
                <h3 className="font-semibold text-foreground">{copy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {copy.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lab.topics.map((topic) => (
                    <TechBadge key={topic} label={topic} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
