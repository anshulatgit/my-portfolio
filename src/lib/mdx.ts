import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  readingTime: string;
  featured?: boolean;
  author?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getReadingTime(text: string): string {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const altPath = path.join(contentDir, `${slug}.md`);
    const fullPath = fs.existsSync(filePath) ? filePath : altPath;
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date ? String(data.date) : new Date().toISOString(),
      tags: data.tags || [],
      category: data.category || "general",
      readingTime: getReadingTime(content),
      featured: data.featured || false,
      author: data.author || "Anshul",
      content,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
