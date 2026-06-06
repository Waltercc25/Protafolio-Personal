import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-9 w-9 sm:h-10 sm:w-10",
};

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={cn("group shrink-0", className)}
    >
      <span
        className={cn(
          "relative block overflow-hidden rounded-full border border-border bg-card shadow-sm transition-all group-hover:border-accent/40 group-hover:shadow-glow",
          sizes[size]
        )}
      >
        <Image
          src="/logo.png"
          alt={`${siteConfig.name} — logo`}
          fill
          priority
          sizes="40px"
          className="object-cover object-center"
        />
      </span>
    </Link>
  );
}
