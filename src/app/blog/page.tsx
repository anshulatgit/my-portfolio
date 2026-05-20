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
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-b from-brand-50 dark:from-brand-950/20 to-transparent">
        <div className="container-max">
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

      <section className="section-padding">
        <div className="container-max">
          {posts.length === 0 ? (
            <div className="text-center py-16 text-gray-500 dark:text-gray-400">
              <p className="text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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