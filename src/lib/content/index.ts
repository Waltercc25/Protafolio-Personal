import type { ContentFlags } from "@/types";
import {
  hasPublishedProjects,
  getAllProjects,
  getAllProjectsByLocale,
  getFeaturedProjects,
  getFeaturedProjectsByLocale,
  getProjectBySlug,
  getProjectSource,
  getProjectSources,
} from "./projects";
import {
  hasPublishedPosts,
  getAllPosts,
  getAllPostsByLocale,
  getFeaturedPosts,
  getFeaturedPostsByLocale,
  getPostBySlug,
  getPostSource,
  getPostSources,
} from "./blog";
import { compileMdxSource } from "./mdx";
import { extractHeadings } from "./parser";
import { CONTENT_DIRS } from "./constants";

export {
  CONTENT_DIRS,
  getAllProjects,
  getAllProjectsByLocale,
  getFeaturedProjects,
  getFeaturedProjectsByLocale,
  getProjectBySlug,
  getProjectSource,
  getProjectSources,
  getAllPosts,
  getAllPostsByLocale,
  getFeaturedPosts,
  getFeaturedPostsByLocale,
  getPostBySlug,
  getPostSource,
  getPostSources,
  compileMdxSource,
  extractHeadings,
};

export function getContentFlags(): ContentFlags {
  return {
    hasProjects: hasPublishedProjects(),
    hasBlogPosts: hasPublishedPosts(),
  };
}
