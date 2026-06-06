import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Labs } from "@/components/Labs";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";
import { getFeaturedPosts, getFeaturedProjects } from "@/lib/content";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects projects={featuredProjects} />
      <Labs />
      <BlogPreview posts={featuredPosts} />
      <Contact />
    </>
  );
}
