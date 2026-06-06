import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { ProyectosPageContent } from "@/components/content/ProyectosPageContent";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Casos de estudio en automatización, cloud, Linux y bases de datos.",
};

export default function ProyectosPage() {
  const projects = getAllProjects();
  return <ProyectosPageContent projects={projects} />;
}
