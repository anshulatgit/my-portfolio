"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/30">
      <div className="container-max">
        <AnimatedSection>
          <SectionHeader
            tag="Expertise"
            title="Skills & Technologies"
            subtitle="Technologies I work with professionally and love exploring."
          />
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {skills.map((category, i) => (
            <AnimatedSection key={category.name} delay={i * 100}>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-200"
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}