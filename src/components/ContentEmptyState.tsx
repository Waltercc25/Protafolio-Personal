interface ContentEmptyStateProps {
  title: string;
  description: string;
  hint: string;
}

export function ContentEmptyState({ title, description, hint }: ContentEmptyStateProps) {
  return (
    <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted font-mono text-sm text-accent">
        MDX
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <p className="mx-auto mt-4 max-w-lg font-mono text-xs text-muted-foreground/80">
        {hint}
      </p>
    </div>
  );
}
