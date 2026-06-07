import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Labs } from "@/components/Labs";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";
import { getFeaturedPostsByLocale, getFeaturedProjectsByLocale } from "@/lib/content";

export default function HomePage() {
  const featuredProjects = getFeaturedProjectsByLocale();
  const featuredPosts = getFeaturedPostsByLocale();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects projectsByLocale={featuredProjects} />
      <Labs />
      <BlogPreview postsByLocale={featuredPosts} />
      <Contact />
    </>
  );
}
