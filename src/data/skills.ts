import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Infraestructura",
    skills: ["Linux", "Ubuntu Server", "KVM/QEMU", "Proxmox", "Docker"],
  },
  {
    name: "Cloud",
    skills: ["AWS", "Google Cloud", "Compute Engine", "VPC", "IAM"],
  },
  {
    name: "Automatización",
    skills: ["n8n", "APIs", "Webhooks", "Evolution API", "Gmail API"],
  },
  {
    name: "Bases de datos",
    skills: ["PostgreSQL", "MySQL", "Neon"],
  },
  {
    name: "Herramientas",
    skills: ["Git", "GitHub", "Cursor", "VS Code", "Vercel"],
  },
];
