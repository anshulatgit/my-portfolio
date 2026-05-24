"use client";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lightbulb, Cpu, Code2, Users } from "lucide-react";

const highlights = [
  {
    icon: <Cpu size={22} />,
    title: "Optical Engineer",
    desc: "MTech specialisation in Optoelectronics and Optical Communication — working with photonics, fiber systems, and DWDM networks.",
    color: "rgba(6,182,212,0.08)",
    iconColor: "var(--color-accent)",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Photonics & Simulation",
    desc: "Experienced with Zemax and OptiSystem for optical system design and simulation, including signal propagation and loss analysis.",
    color: "rgba(234,179,8,0.08)",
    iconColor: "#ca8a04",
  },
  {
    icon: <Code2 size={22} />,
    title: "Python & Data Science",
    desc: "Using Python, TensorFlow, and Pandas for signal processing, data analysis, and building AI-assisted tools.",
    color: "rgba(95,116,248,0.08)",
    iconColor: "var(--color-brand-600)",
  },
  {
    icon: <Users size={22} />,
    title: "Student Mentor",
    desc: "Guiding 500+ students on career paths, stream selection, and navigating life after 10th and 12th grade.",
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
            <SectionHeader tag="About Me" title="Who I Am" />
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p style={{ fontSize: "1rem", opacity: 0.65, lineHeight: 1.8 }}>
                I&apos;m Anshul, an MTech student specialising in Optoelectronics and Optical
                Communication from Jaipur, Rajasthan. I work at the intersection of photonics,
                fiber optic systems, and modern computing.
              </p>
              <p style={{ fontSize: "1rem", opacity: 0.65, lineHeight: 1.8 }}>
                My technical work spans optical fiber design, DWDM systems, signal analysis using
                Python and MATLAB, and simulation using Zemax and OptiSystem. I enjoy building
                tools that bridge complex engineering concepts with practical applications.
              </p>
              <p style={{ fontSize: "1rem", opacity: 0.65, lineHeight: 1.8 }}>
                Beyond engineering, I write career guidance content that has helped hundreds of
                students choose the right stream, crack competitive exams, and plan their futures
                with clarity.
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
                  <div style={{ color: item.iconColor, marginBottom: "0.75rem" }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.375rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.75rem", opacity: 0.6, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
