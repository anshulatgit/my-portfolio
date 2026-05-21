"use client";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookOpen, Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: "Full-Stack Developer",
    desc: "Building scalable web apps with Next.js, React, Node.js, and modern cloud infrastructure.",
    color: "rgba(95,116,248,0.1)",
    iconColor: "var(--color-brand-600)",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Active Researcher",
    desc: "Working on AI, optical communication, and signal processing. Published in peer-reviewed journals.",
    color: "rgba(6,182,212,0.08)",
    iconColor: "var(--color-accent)",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Problem Solver",
    desc: "I enjoy breaking down complex problems and building elegant, user-centered solutions.",
    color: "rgba(234,179,8,0.08)",
    iconColor: "#ca8a04",
  },
  {
    icon: <Users size={22} />,
    title: "Student Mentor",
    desc: "Guiding 500+ students on career paths, exam prep, and navigating life after 10th and 12th.",
    color: "rgba(34,197,94,0.08)",
    iconColor: "#16a34a",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "rgba(249,250,251,0.4)",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <AnimatedSection direction="left">
            <SectionHeader
              tag="About Me"
              title="Who I Am"
              subtitle=""
            />
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "1rem", opacity: 0.65, lineHeight: 1.8 }}>
                I&apos;m Anshul, a researcher and developer from Jaipur, Rajasthan. I build things on the web,
                explore the boundaries of AI, and genuinely care about helping students find their right path.
              </p>
              <p style={{ fontSize: "1rem", opacity: 0.65, lineHeight: 1.8 }}>
                My research focuses on optical communication systems and AI-driven signal analysis. On the development
                side, I work with the modern JavaScript ecosystem to build fast, accessible, and beautiful products.
              </p>
              <p style={{ fontSize: "1rem", opacity: 0.65, lineHeight: 1.8 }}>
                Beyond code and research, I write career guidance content that has helped hundreds of students
                navigate stream selection, competitive exams, and long-term career planning.
              </p>
            </div>
          </AnimatedSection>

          {/* Cards */}
          <AnimatedSection direction="right">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "1rem",
                    backgroundColor: item.color,
                    border: "1px solid rgba(148,163,184,0.1)",
                  }}
                >
                  <div style={{ color: item.iconColor, marginBottom: "0.75rem" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.375rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.75rem", opacity: 0.6, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
