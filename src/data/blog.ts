import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

const CONTENT_DIR = path.join(process.cwd(), "content");

// cache() dedupes calls within one render, so generateMetadata and the page
// share a single Markdown + syntax-highlighting pass per post.
export const getPost = cache(async (slug: string) => {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: data as Metadata,
    slug,
  };
});

// Frontmatter only, for lists, the sitemap and static params. Skips the
// expensive Markdown rendering.
export function getBlogPostsMeta() {
  return getMDXFiles(CONTENT_DIR)
    .map((file) => {
      const slug = path.basename(file, path.extname(file));
      const { data } = matter(
        fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
      );
      return { slug, metadata: data as Metadata };
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    );
}
