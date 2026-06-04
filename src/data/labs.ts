import type { Lab } from "@/types";

export const labs: Lab[] = [
  {
    id: "usuarios-permisos-linux",
    title: "Gestión de usuarios y permisos en Linux",
    description: "Creación de usuarios, grupos, permisos y políticas de acceso en Ubuntu Server.",
    topics: ["useradd", "chmod", "chown", "sudo"],
  },
  {
    id: "backups-tar",
    title: "Backups con tar",
    description: "Estrategias de respaldo, compresión y restauración de directorios críticos.",
    topics: ["tar", "gzip", "cron", "restore"],
  },
  {
    id: "monitoreo-procesos",
    title: "Monitoreo de procesos",
    description: "Supervisión de servicios, uso de recursos y diagnóstico con herramientas CLI.",
    topics: ["ps", "top", "htop", "systemctl"],
  },
  {
    id: "virtualizacion-kvm",
    title: "Virtualización con KVM/QEMU",
    description: "Creación de VMs, snapshots, clonado y administración de hipervisores.",
    topics: ["KVM", "QEMU", "virsh", "snapshots"],
  },
  {
    id: "automatizacion-n8n",
    title: "Automatización con n8n",
    description: "Flujos de trabajo, webhooks e integración con APIs externas.",
    topics: ["n8n", "webhooks", "APIs", "workflows"],
  },
  {
    id: "diseno-postgresql",
    title: "Diseño de bases de datos PostgreSQL",
    description: "Modelado relacional, normalización y consultas para sistemas de citas.",
    topics: ["PostgreSQL", "SQL", "Neon", "schemas"],
  },
  {
    id: "despliegue-gcp",
    title: "Despliegue de servicios en Google Cloud",
    description: "VMs, firewall, dominios y variables de entorno para servicios en producción.",
    topics: ["GCP", "Compute Engine", "Docker", "DNS"],
  },
];
