import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author?: string;
  draft?: boolean;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

function readPostFile(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  if (!fm.title || !fm.description || !fm.date) {
    throw new Error(`Post ${slug} is missing required frontmatter (title, description, date)`);
  }
  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: String(fm.date),
    author: fm.author,
    draft: Boolean(fm.draft),
    content,
  };
}

function includeDrafts() {
  return process.env.NODE_ENV !== "production";
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post | null {
  const post = readPostFile(slug);
  if (!post) return null;
  if (post.draft && !includeDrafts()) return null;
  return post;
}

export function listPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => readPostFile(slug))
    .filter((p): p is Post => p !== null)
    .filter((p) => includeDrafts() || !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      draft: post.draft,
    }));
}
