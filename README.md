# Portafolio — Walter Cantor

Portafolio profesional con **Next.js 15**, **TypeScript**, **Tailwind CSS** y contenido gestionado por **MDX**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Publicar contenido (MDX)

Los proyectos y artículos viven en `content/` como archivos `.mdx`. No hace falta tocar React para añadir contenido nuevo.

```bash
# Proyecto → /proyectos/mi-proyecto
content/projects/mi-proyecto.mdx

# Artículo → /blog/mi-articulo
content/blog/mi-articulo.mdx
```

Plantillas listas para copiar:

- `content/projects/_template.project.mdx`
- `content/blog/_template.post.mdx`

Guía completa: [`content/README.md`](content/README.md)

## Estructura

```
content/              ← Proyectos y blog (MDX)
src/lib/content/      ← Lectura, validación y compilación MDX
src/components/mdx/   ← Callout, CodeBlock, estilos prose
src/data/site.ts      ← Config global (email, redes, cvAvailable)
```

## Configuración

| Archivo | Qué editar |
|---------|------------|
| `src/data/site.ts` | Nombre, email, GitHub, LinkedIn, `cvAvailable` |
| `public/cv.pdf` | Tu CV (activar `cvAvailable: true` cuando exista) |

## Despliegue

Push a `main` → Vercel despliega automáticamente.

```bash
git add .
git commit -m "tu mensaje"
git push
```
