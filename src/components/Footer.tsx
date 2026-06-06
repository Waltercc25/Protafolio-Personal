"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useTranslations } from "@/providers/LocaleProvider";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link href="/proyectos" className="hover:text-accent transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="/blog" className="hover:text-accent transition-colors">
              {t.nav.blog}
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-8 text-center text-xs text-muted-foreground sm:text-left">
          © {year} {siteConfig.name}. {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
