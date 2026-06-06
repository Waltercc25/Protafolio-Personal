# Guía de contenido MDX

Este directorio alimenta el portafolio. Los archivos `.mdx` se leen en build time desde `src/lib/content/`.

## Publicar un proyecto

1. Copia `content/projects/_template.project.mdx`
2. Renómbralo, por ejemplo: `mi-proyecto-n8n.mdx` (sin prefijo `_`)
3. Completa el frontmatter y escribe el cuerpo en Markdown/MDX
4. `git push` → Vercel despliega automáticamente

**URL resultante:** `/proyectos/mi-proyecto-n8n`

## Publicar un artículo

1. Copia `content/blog/_template.post.mdx`
2. Renómbralo, por ejemplo: `comandos-linux-utiles.mdx`
3. Completa frontmatter y contenido
4. Push a GitHub

**URL resultante:** `/blog/comandos-linux-utiles`

## Reglas de publicación

| Regla | Efecto |
|-------|--------|
| Archivo empieza con `_` | Plantilla interna, **nunca** se publica |
| `published: false` | Borrador, no aparece en listados |
| `featured: true` | Aparece en la página principal |
| Slug = nombre del archivo | Sin extensión `.mdx` |

## Frontmatter de proyecto

```yaml
title: "Título del proyecto"
description: "Resumen corto para tarjetas y SEO"
date: "2026-06-04"
category: "Cloud"          # Automatización | Infraestructura | Cloud | Bases de datos | Virtualización
status: "En desarrollo"      # En desarrollo | Documentado | Planeado | Completado
technologies:
  - n8n
  - PostgreSQL
github: "https://github.com/Waltercc25/repo"
demo: ""                     # URL opcional
featured: true
published: true
```

## Frontmatter de blog

```yaml
title: "Título del artículo"
description: "Resumen para listados y SEO"
date: "2026-06-04"
category: "Linux"
readTime: "8 min"            # Opcional; se calcula automáticamente si se omite
featured: true
published: true
```

## Componentes MDX disponibles

- `<Callout variant="info|warning|success|tip" title="...">...</Callout>`
- Bloques de código con syntax highlight básico via \`\`\`bash
- Tabla de contenidos automática con encabezados `##` y `###`
