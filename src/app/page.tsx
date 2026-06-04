import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Labs } from "@/components/Labs";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Labs />
      <BlogPreview />
      <Contact />
    </>
  );
}
