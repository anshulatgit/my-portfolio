"use client";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { PostMeta } from "@/lib/mdx";

interface BlogCardProps {
  post: PostMeta;
}

const categoryColors: Record<string, { bg: string; color: string }> = {
  technology: { bg: "rgba(59,130,246,0.1)",  color: "#3b82f6" },
  career:     { bg: "rgba(34,197,94,0.1)",   color: "#22c55e" },
  skills:     { bg: "rgba(168,85,247,0.1)",  color: "#a855f7" },
  general:    { bg: "rgba(148,163,184,0.1)", color: "#94a3b8" },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric", month: "short", day: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  const [hovered, setHovered] = useState(false);
  const cat = categoryColors[post.category] || categoryColors.general;

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: "100%",
          padding: "1.5rem",
          borderRadius: "1rem",
          border: `1px solid ${hovered ? "rgba(95,116,248,0.3)" : "rgba(148,163,184,0.12)"}`,
          backgroundColor: "rgba(255,255,255,0.03)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered ? "0 12px 40px rgba(95,116,248,0.08)" : "none",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "0.2rem 0.6rem",
              borderRadius: "9999px",
              backgroundColor: cat.bg,
              color: cat.color,
              textTransform: "capitalize",
            }}
          >
            {post.category}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", opacity: 0.45 }}>
            <Clock size={11} /> {post.readingTime}
          </span>
        </div>

        <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.5rem" }}>
          {post.title}
        </h2>
        <p style={{
          fontSize: "0.8rem", opacity: 0.55, lineHeight: 1.65, marginBottom: "1rem",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {post.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "1rem" }}>
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{ fontSize: "0.65rem", padding: "0.15rem 0.5rem", borderRadius: "9999px", backgroundColor: "rgba(148,163,184,0.08)", opacity: 0.7 }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0.75rem", borderTop: "1px solid rgba(148,163,184,0.08)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", opacity: 0.4 }}>
            <Calendar size={11} /> {formatDate(post.date)}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-brand-600)" }}>
            Read <ArrowRight size={12} />
          </span>
        </div>
      </article>
    </Link>
  );
}
