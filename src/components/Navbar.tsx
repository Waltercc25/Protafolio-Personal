"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/providers/LocaleProvider";
import { LocaleToggle } from "./LocaleToggle";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const SECTION_IDS = [
  "inicio",
  "sobre-mi",
  "tecnologias",
  "proyectos",
  "laboratorios",
  "blog",
  "contacto",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const t = useTranslations();

  const navLinks = [
    { href: "#inicio", label: t.nav.home, id: "inicio" },
    { href: "#sobre-mi", label: t.nav.about, id: "sobre-mi" },
    { href: "#tecnologias", label: t.nav.skills, id: "tecnologias" },
    { href: "#proyectos", label: t.nav.projects, id: "proyectos" },
    { href: "#laboratorios", label: t.nav.labs, id: "laboratorios" },
    { href: "#blog", label: t.nav.blog, id: "blog" },
    { href: "#contacto", label: t.nav.contact, id: "contacto" },
  ];

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    cn("nav-link", activeSection === id && "nav-link-active");

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.id)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1.5 md:flex">
          <LocaleToggle />
          <ThemeToggle />
          <Link
            href="/proyectos"
            className="rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:text-[var(--nav-glow-text)] hover:shadow-[0_0_14px_-3px_var(--nav-glow-ring)]"
          >
            {t.nav.projects}
          </Link>
          {siteConfig.cvAvailable && (
            <a
              href={siteConfig.cvPath}
              download
              className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {t.nav.cv}
            </a>
          )}
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LocaleToggle />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn("block", linkClass(link.id))}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
            <Link
              href="/proyectos"
              className="rounded-lg border border-border px-4 py-2 text-center text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {t.nav.viewAllProjects}
            </Link>
            {siteConfig.cvAvailable && (
              <a
                href={siteConfig.cvPath}
                download
                className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-accent-foreground"
              >
                {t.nav.downloadCv}
              </a>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
