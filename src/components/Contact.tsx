import { siteConfig } from "@/data/site";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contacto"
          title="¿Hablamos?"
          description="Abierto a oportunidades, prácticas, colaboraciones y feedback sobre mi trabajo."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-card p-8 shadow-card text-center">
          <p className="text-muted-foreground">
            Puedes escribirme o revisar mi trabajo en los siguientes enlaces.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          {siteConfig.cvAvailable && (
            <a
              href={siteConfig.cvPath}
              download
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Descargar CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
