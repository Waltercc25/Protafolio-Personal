import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { AppProviders } from "@/providers/AppProviders";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Portafolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Linux",
    "Cloud",
    "AWS",
    "Google Cloud",
    "n8n",
    "DevOps",
    "PostgreSQL",
    "Automatización",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased text-foreground`}
      >
        <AppProviders>
          {/* Rejilla kinética — siempre DETRÁS del contenido (z-0) */}
          <InteractiveBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="relative z-10 flex-1 bg-transparent">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
