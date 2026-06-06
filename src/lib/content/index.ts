import type { ContentFlags } from "@/types";
import { hasPublishedProjects, getAllProjects, getFeaturedProjects, getProjectBySlug, getProjectSource } from "./projects";
import { hasPublishedPosts, getAllPosts, getFeaturedPosts, getPostBySlug, getPostSource } from "./blog";
import { compileMdxSource } from "./mdx";
import { extractHeadings } from "./parser";
import { CONTENT_DIRS } from "./constants";

export {
  CONTENT_DIRS,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getProjectSource,
  getAllPosts,
  getFeaturedPosts,
  getPostBySlug,
  getPostSource,
  compileMdxSource,
  extractHeadings,
};

export function getContentFlags(): ContentFlags {
  return {
    hasProjects: hasPublishedProjects(),
    hasBlogPosts: hasPublishedPosts(),
  };
}
