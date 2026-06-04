import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="sobre-mi" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Infraestructura, cloud y automatización"
          description="Perfil en crecimiento con enfoque práctico y documentado."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Soy estudiante con enfoque en infraestructura tecnológica, administración de
              servidores, Linux, cloud computing, automatización de procesos y bases de datos.
              Mi objetivo es construir soluciones reales que combinen buenas prácticas de
              operación con herramientas modernas.
            </p>
            <p>
              Desarrollo laboratorios y proyectos prácticos donde documento cada paso: desde la
              configuración de servidores Ubuntu y virtualización con KVM/QEMU, hasta
              despliegues en Google Cloud, flujos con n8n e integraciones por API.
            </p>
            <p>
              Busco seguir fortaleciendo competencias en DevOps básico, seguridad, monitoreo y
              diseño de datos, siempre con un enfoque honesto de aprendizaje continuo y
              entrega de valor en entornos reales.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accent">
              Enfoque actual
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Administración de servidores Linux y virtualización",
                "Despliegue y operación en entornos cloud (GCP, AWS)",
                "Automatización con n8n, webhooks y APIs",
                "Diseño y gestión de bases de datos PostgreSQL/MySQL",
                "Documentación técnica y casos de estudio publicables",
              ].map((item) => (
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
