import { skillCategories } from "@/data/skills";
import { SectionTitle } from "./SectionTitle";
import { TechBadge } from "./TechBadge";

export function Skills() {
  return (
    <section id="tecnologias" className="border-b border-border bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Stack técnico"
          title="Tecnologías y herramientas"
          description="Habilidades organizadas por área de especialización en formación."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-accent/30"
            >
              <h3 className="font-semibold text-foreground">{category.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
