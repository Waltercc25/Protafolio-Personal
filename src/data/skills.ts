import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "infrastructure",
    skills: ["Linux", "Ubuntu Server", "KVM/QEMU", "Proxmox", "Docker"],
  },
  {
    id: "cloud",
    skills: ["AWS", "Google Cloud", "Compute Engine", "VPC", "IAM"],
  },
  {
    id: "automation",
    skills: ["n8n", "APIs", "Webhooks", "Evolution API", "Gmail API"],
  },
  {
    id: "databases",
    skills: ["PostgreSQL", "MySQL", "Neon"],
  },
  {
    id: "tools",
    skills: ["Git", "GitHub", "Cursor", "VS Code", "Vercel"],
  },
];
