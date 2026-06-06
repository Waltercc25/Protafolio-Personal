import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success" | "tip";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

const variants: Record<CalloutVariant, string> = {
  info: "border-sky-500/30 bg-sky-500/10 text-sky-100",
  warning: "border-amber-500/30 bg-amber-500/10 text-amber-100",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-100",
  tip: "border-cyan-500/30 bg-cyan-500/10 text-cyan-100",
};

export function Callout({ variant = "info", title, children }: CalloutProps) {
  return (
    <aside
      className={cn(
        "my-6 rounded-xl border px-4 py-3 text-sm leading-relaxed",
        variants[variant]
      )}
    >
      {title && <p className="mb-1 font-semibold text-foreground">{title}</p>}
      <div className="text-muted-foreground [&>p]:m-0">{children}</div>
    </aside>
  );
}
