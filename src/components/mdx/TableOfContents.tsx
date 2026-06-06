import type { ContentHeading } from "@/types";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: ContentHeading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Tabla de contenidos"
      className={cn(
        "rounded-xl border border-border bg-card p-4 text-sm",
        className
      )}
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        En este artículo
      </p>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(heading.level === 3 && "pl-3")}
          >
            <a
              href={`#${heading.id}`}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
