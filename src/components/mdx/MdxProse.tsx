import { cn } from "@/lib/utils";

interface MdxProseProps {
  children: React.ReactNode;
  className?: string;
}

export function MdxProse({ children, className }: MdxProseProps) {
  return (
    <div className={cn("mdx-prose", className)}>
      {children}
    </div>
  );
}
