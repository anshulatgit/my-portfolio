import Link from "next/link";
import { Download, FileText } from "lucide-react";

const resumes = [
  {
    title: "Optoelectronics & Optical Communication",
    description: "MTech focused — optical fiber, photonics, DWDM, signal processing, Zemax.",
    file: "/resume-optics.pdf",
    tag: "Academic / Research",
    color: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    accent: "#0891b2",
  },
  {
    title: "Software & AI Developer",
    description: "Python, TensorFlow, Next.js, data analysis, embedded systems, Git.",
    file: "/resume-developer.pdf",
    tag: "Tech / Industry",
    color: "rgba(95,116,248,0.08)",
    border: "rgba(95,116,248,0.2)",
    accent: "#4452ef",
  },
  {
    title: "General Resume",
    description: "All-round resume covering academics, skills, projects, and mentoring.",
    file: "/resume-general.pdf",
    tag: "General",
    color: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    accent: "#16a34a",
  },
];

export default function ResumePage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#4452ef", backgroundColor: "rgba(95,116,248,0.08)", border: "1px solid rgba(95,116,248,0.2)", borderRadius: "9999px", marginBottom: "1rem" }}>
              Resume
            </span>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
              Download My Resume
            </h1>
            <p style={{ opacity: 0.55, fontSize: "1rem", lineHeight: 1.7 }}>
              Pick the version most relevant to what you&apos;re looking for.
            </p>
          </div>

          {/* Resume cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {resumes.map((r) => (
              <div key={r.file} style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: r.color, border: `1px solid ${r.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" as const }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ padding: "0.625rem", borderRadius: "0.625rem", backgroundColor: r.color, border: `1px solid ${r.border}`, color: r.accent, flexShrink: 0 }}>
                    <FileText size={22} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" as const }}>
                      <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, margin: 0 }}>{r.title}</h3>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: "9999px", backgroundColor: r.color, color: r.accent, border: `1px solid ${r.border}` }}>{r.tag}</span>
                    </div>
                    <p style={{ fontSize: "0.8rem", opacity: 0.6, margin: 0, lineHeight: 1.6 }}>{r.description}</p>
                  </div>
                </div>
                <a href={r.file} download style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", backgroundColor: r.accent, color: "white", borderRadius: "0.625rem", fontWeight: 700, fontSize: "0.8rem", textDecoration: "none", whiteSpace: "nowrap" as const, flexShrink: 0 }}>
                  <Download size={15} /> Download
                </a>
              </div>
            ))}
          </div>

          {/* View online note */}
          <p style={{ textAlign: "center", fontSize: "0.8rem", opacity: 0.4, marginTop: "2rem" }}>
            Files open in browser if you want to preview before downloading.
          </p>

        </div>
      </section>
    </div>
  );
}