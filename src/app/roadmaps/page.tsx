import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerPathsAfter12th, roadmapAfter10th } from "@/data/roadmaps";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Roadmaps — After 10th & 12th",
  description: "Complete career guidance for students after 10th and 12th grade. Explore science, commerce, arts, engineering, medical, and more career paths.",
};

const colorMap: Record<string, string> = {
  blue:   "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300",
  green:  "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-300",
  amber:  "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-300",
  purple: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300",
  red:    "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300",
  cyan:   "bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800/50 text-cyan-700 dark:text-cyan-300",
};

const demandBadge = {
  high: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  medium: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
  growing: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
};

export default function RoadmapsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-brand-50 dark:from-brand-950/20 to-transparent">
        <div className="container-max text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 rounded-full mb-4">
              Career Guidance
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Find Your <span className="text-gradient">Career Path</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Confused about what to do after 10th or 12th? Explore every option with clarity.
              Real information, no fluff.
            </p>
          </AnimatedSection>

          {/* Quick links */}
          <AnimatedSection delay={200}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/roadmaps/after-10th" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition-colors text-sm">
                After 10th Guide →
              </Link>
              <Link href="/roadmaps/after-12th" className="px-5 py-2.5 border border-brand-300 dark:border-brand-700 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/30 font-medium rounded-xl transition-colors text-sm">
                After 12th Guide →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* After 10th section */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              tag="Class 10 Students"
              title="Which Stream After 10th?"
              subtitle="The most important decision of your student life — made simple."
            />
          </AnimatedSection>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapAfter10th.map((stream, i) => (
              <AnimatedSection key={stream.id} delay={i * 100}>
                <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-3xl mb-3">{stream.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{stream.title}</h3>
                  <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3">{stream.subtitle}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Subjects</p>
                    <div className="flex flex-wrap gap-1">
                      {stream.subjects.map(s => (
                        <span key={s} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Career Paths</p>
                    <div className="flex flex-wrap gap-1">
                      {stream.paths.slice(0, 3).map(p => (
                        <span key={p} className="text-xs px-2 py-0.5 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 rounded-full">{p}</span>
                      ))}
                      {stream.paths.length > 3 && (
                        <span className="text-xs px-2 py-0.5 text-gray-400">+{stream.paths.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* After 12th section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/30">
        <div className="container-max">
          <AnimatedSection>
            <SectionHeader
              tag="Class 12 Students"
              title="Top Career Paths After 12th"
              subtitle="Every major career option — with exams, colleges, and salary expectations."
            />
          </AnimatedSection>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPathsAfter12th.map((path, i) => (
              <AnimatedSection key={path.id} delay={i * 80}>
                <div className={`p-6 rounded-2xl border ${colorMap[path.color]} card-hover h-full`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{path.icon}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${demandBadge[path.demandLevel]}`}>
                      {path.demandLevel === "high" ? "🔥 High Demand" : path.demandLevel === "growing" ? "📈 Growing" : "Stable"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{path.title}</h3>
                  <p className="text-sm opacity-80 mb-4 leading-relaxed">{path.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Exams:</span> {path.exams.slice(0, 2).join(", ")}</p>
                    <p><span className="font-semibold">Top Jobs:</span> {path.popularJobs.slice(0, 2).join(", ")}</p>
                    <p><span className="font-semibold">Salary:</span> {path.salaryRange}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-600 to-accent text-white">
              <h2 className="text-3xl font-bold mb-4">Still Confused? Let's Talk.</h2>
              <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
                Book a free 1-on-1 career guidance session. Ask me anything about streams, exams, and career options.
              </p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-white text-brand-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                Book Free Session
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}