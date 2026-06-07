import type { Metadata } from "next";
import { getAllPostsByLocale } from "@/lib/content";
import { BlogPageContent } from "@/components/content/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas técnicas sobre Linux, cloud, automatización y bases de datos.",
};

export default function BlogPage() {
  const postsByLocale = getAllPostsByLocale();
  return <BlogPageContent postsByLocale={postsByLocale} />;
}
