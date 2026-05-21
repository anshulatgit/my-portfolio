import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerPathsAfter12th, roadmapAfter10th } from "@/data/roadmaps";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Roadmaps — After 10th & 12th",
  description: "Complete career guidance for students after 10th and 12th grade in India.",
};

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue:   { bg: "rgba(59,130,246,0.06)",  border: "rgba(59,130,246,0.2)",  text: "#3b82f6" },
  green:  { bg: "rgba(34,197,94,0.06)",   border: "rgba(34,197,94,0.2)",   text: "#22c55e" },
  amber:  { bg: "rgba(234,179,8,0.06)",   border: "rgba(234,179,8,0.2)",   text: "#ca8a04" },
  purple: { bg: "rgba(168,85,247,0.06)",  border: "rgba(168,85,247,0.2)",  text: "#a855f7" },
  red:    { bg: "rgba(239,68,68,0.06)",   border: "rgba(239,68,68,0.2)",   text: "#ef4444" },
  cyan:   { bg: "rgba(6,182,212,0.06)",   border: "rgba(6,182,212,0.2)",   text: "#06b6d4" },
};

const demandStyle: Record<string, { bg: string; color: string; label: string }> = {
  high:    { bg: "rgba(34,197,94,0.1)",  color: "#16a34a", label: "🔥 High Demand" },
  medium:  { bg: "rgba(234,179,8,0.1)",  color: "#ca8a04", label: "Stable"        },
  growing: { bg: "rgba(59,130,246,0.1)", color: "#2563eb", label: "📈 Growing"     },
};

export default function RoadmapsPage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem 3rem", background: "rgba(95,116,248,0.03)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brand-600)", backgroundColor: "rgba(95,116,248,0.08)", border: "1px solid rgba(95,116,248,0.2)", borderRadius: "9999px", marginBottom: "1rem" }}>
              Career Guidance
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.03em" }}>
              Find Your <span className="text-gradient">Career Path</span>
            </h1>
            <p style={{ fontSize: "1.0625rem", opacity: 0.6, maxWidth: "38rem", margin: "0 auto 2rem" }}>
              Confused about what to do after 10th or 12th? Every option explained with clarity. Real information, no fluff.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/roadmaps/after-10th" style={{ padding: "0.625rem 1.25rem", background: "linear-gradient(135deg, var(--color-brand-600), var(--color-accent))", color: "white", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem" }}>
                After 10th Guide →
              </Link>
              <Link href="/roadmaps/after-12th" style={{ padding: "0.625rem 1.25rem", border: "1px solid rgba(95,116,248,0.25)", color: "var(--color-brand-600)", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem" }}>
                After 12th Guide →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* After 10th */}
      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader tag="Class 10 Students" title="Which Stream After 10th?" subtitle="The most important decision of your student life — made simple." />
          </AnimatedSection>
          <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {roadmapAfter10th.map((stream, i) => (
              <AnimatedSection key={stream.id} delay={i * 80}>
                <div style={{ padding: "1.5rem", backgroundColor: "rgba(148,163,184,0.04)", borderRadius: "1rem", border: "1px solid rgba(148,163,184,0.1)", height: "100%" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{stream.icon}</div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.25rem" }}>{stream.title}</h3>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-brand-600)", fontWeight: 600, marginBottom: "1rem" }}>{stream.subtitle}</p>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", opacity: 0.4, marginBottom: "0.4rem" }}>Subjects</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {stream.subjects.map(s => (
                        <span key={s} style={{ fontSize: "0.65rem", padding: "0.15rem 0.45rem", borderRadius: "9999px", backgroundColor: "rgba(148,163,184,0.08)", opacity: 0.7 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", opacity: 0.4, marginBottom: "0.4rem" }}>Career Paths</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {stream.paths.slice(0, 3).map(p => (
                        <span key={p} style={{ fontSize: "0.65rem", padding: "0.15rem 0.45rem", borderRadius: "9999px", backgroundColor: "rgba(95,116,248,0.08)", color: "var(--color-brand-600)" }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* After 12th */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "rgba(148,163,184,0.03)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader tag="Class 12 Students" title="Top Career Paths After 12th" subtitle="Every major career option — with exams, colleges, and salary expectations." />
          </AnimatedSection>
          <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {careerPathsAfter12th.map((path, i) => {
              const c = colorMap[path.color] || colorMap.blue;
              const d = demandStyle[path.demandLevel];
              return (
                <AnimatedSection key={path.id} delay={i * 70}>
                  <div style={{ padding: "1.5rem", backgroundColor: c.bg, borderRadius: "1rem", border: `1px solid ${c.border}`, height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "2rem" }}>{path.icon}</span>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "0.2rem 0.5rem", borderRadius: "9999px", backgroundColor: d.bg, color: d.color }}>{d.label}</span>
                    </div>
                    <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.5rem" }}>{path.title}</h3>
                    <p style={{ fontSize: "0.8rem", opacity: 0.65, lineHeight: 1.6, marginBottom: "1rem" }}>{path.description}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", fontSize: "0.8rem" }}>
                      <p><span style={{ fontWeight: 700 }}>Exams: </span><span style={{ opacity: 0.65 }}>{path.exams.slice(0, 2).join(", ")}</span></p>
                      <p><span style={{ fontWeight: 700 }}>Top Jobs: </span><span style={{ opacity: 0.65 }}>{path.popularJobs.slice(0, 2).join(", ")}</span></p>
                      <p><span style={{ fontWeight: 700 }}>Salary: </span><span style={{ color: c.text, fontWeight: 600 }}>{path.salaryRange}</span></p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div style={{ padding: "3rem", borderRadius: "1.5rem", background: "linear-gradient(135deg, var(--color-brand-600), var(--color-accent))", color: "white" }}>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "1rem" }}>Still Confused? Let&apos;s Talk.</h2>
              <p style={{ opacity: 0.9, marginBottom: "1.5rem", maxWidth: "30rem", margin: "0 auto 1.5rem" }}>Book a free 1-on-1 career guidance session. Ask me anything about streams, exams, and career options.</p>
              <Link href="/contact" style={{ display: "inline-block", padding: "0.75rem 2rem", backgroundColor: "white", color: "var(--color-brand-700)", fontWeight: 700, borderRadius: "0.75rem", textDecoration: "none" }}>
                Book Free Session
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
