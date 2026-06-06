import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import type { ReactElement } from "react";
import { mdxComponents } from "@/components/mdx";

const mdxOptions = {
  rehypePlugins: [rehypeSlug],
};

export async function compileMdxSource(source: string): Promise<ReactElement> {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { mdxOptions },
  });

  return content;
}
