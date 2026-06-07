import type { Locale } from "@/i18n";
import type { ProjectStatus } from "@/types";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Interpreta YYYY-MM-DD como fecha calendario local (evita desfase UTC). */
function parseContentDate(date: string): Date {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatDate(date: string, locale: Locale = "es"): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parseContentDate(date));
}

export function getStatusColor(status: ProjectStatus): string {
  const colors: Record<ProjectStatus, string> = {
    "En desarrollo": "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Documentado: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Planeado: "bg-slate-500/15 text-slate-400 border-slate-500/30",
    Completado: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  };
  return colors[status];
}
