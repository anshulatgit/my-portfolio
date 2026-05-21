"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <AnimatedSection>
          <SectionHeader
            tag="Expertise"
            title="Skills & Technologies"
            subtitle="Technologies I work with professionally and love exploring."
          />
        </AnimatedSection>

        <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {skills.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 80}>
              <h3
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  opacity: 0.4,
                  marginBottom: "0.75rem",
                }}
              >
                {category.name}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {category.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.4rem 0.875rem",
                      borderRadius: "0.625rem",
                      border: "1px solid rgba(148,163,184,0.15)",
                      backgroundColor: "rgba(148,163,184,0.05)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      cursor: "default",
                    }}
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
