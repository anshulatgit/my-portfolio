import { getAllPosts } from "@/lib/mdx";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Career Guidance & Technology",
  description: "Articles on career guidance, AI, technology, and skill development for students and professionals.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ padding: "4rem 1.5rem 2rem", background: "rgba(95,116,248,0.03)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader
              tag="Blog"
              title="Articles & Guidance"
              subtitle="Practical articles on careers, technology, AI, and building your future — written for Indian students and professionals."
              centered
            />
          </AnimatedSection>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", opacity: 0.5 }}>
              <p style={{ fontSize: "1.125rem" }}>No posts yet. Check back soon!</p>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                Add .mdx files to src/content/blog/ to see them here.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {posts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i * 80}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
