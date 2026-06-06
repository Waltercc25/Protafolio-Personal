import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 mt-10 text-3xl font-bold tracking-tight text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="mb-4 mt-10 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="mb-3 mt-8 scroll-mt-24 text-xl font-semibold text-foreground"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? "#"} className="font-medium text-accent underline-offset-4 hover:underline">
        {children}
      </Link>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-accent/50 pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-border" />,
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      const language = className?.replace("language-", "") ?? "text";
      return <CodeBlock language={language}>{children}</CodeBlock>;
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-accent">
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-border bg-muted/60 px-4 py-2 font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border px-4 py-2 text-muted-foreground">{children}</td>
  ),
  Callout,
  CodeBlock,
};
