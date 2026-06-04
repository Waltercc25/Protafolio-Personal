import type { ProjectStatus } from "@/types";

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
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
