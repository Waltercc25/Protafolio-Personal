import { cn } from "@/lib/utils";

interface CodeBlockProps {
  title?: string;
  language?: string;
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ title, language, children, className }: CodeBlockProps) {
  return (
    <figure className={cn("my-6 overflow-hidden rounded-xl border border-border", className)}>
      {(title || language) && (
        <figcaption className="flex items-center justify-between border-b border-border bg-muted/80 px-4 py-2 font-mono text-xs text-muted-foreground">
          <span>{title ?? language ?? "code"}</span>
          {title && language && <span className="opacity-60">{language}</span>}
        </figcaption>
      )}
      <pre className="overflow-x-auto bg-[#070b12] p-4 text-sm leading-relaxed">
        <code>{children}</code>
      </pre>
    </figure>
  );
}
