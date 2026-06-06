"use client";

import { SectionTitle } from "./SectionTitle";
import { useTranslations } from "@/providers/LocaleProvider";

export function About() {
  const t = useTranslations();

  return (
    <section id="sobre-mi" className="border-b border-border bg-transparent py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accent">
              {t.about.focusTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {t.about.focusItems.map((item: string) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
