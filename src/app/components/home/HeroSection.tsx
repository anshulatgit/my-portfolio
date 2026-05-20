"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";

// ─── Edit these values ───────────────────────────────────────
const YOUR_NAME = "Your Full Name";
const YOUR_TITLE = "Researcher & Full-Stack Developer";
const YOUR_TAGLINE = "Building AI-powered solutions and guiding students toward meaningful careers.";
const YOUR_LOCATION = "Jaipur, Rajasthan, India";
// ─────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max section-padding relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-[1.1] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{YOUR_NAME}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4"
            >
              {YOUR_TITLE}
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              {YOUR_TAGLINE}
            </motion.p>

            {/* Location */}
            <motion.p variants={itemVariants} className="text-sm text-gray-400 dark:text-gray-500 mb-8">
              📍 {YOUR_LOCATION}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight size={17} />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
              >
                <Download size={17} />
                Resume
              </a>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-200 dark:border-brand-800 hover:bg-brand-50 dark:hover:bg-brand-950/30 text-brand-700 dark:text-brand-300 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Career Roadmaps
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { number: "10+", label: "Projects Built" },
                { number: "500+", label: "Students Guided" },
                { number: "5+", label: "Research Papers" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-gradient">{number}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 to-accent opacity-20 blur-xl scale-110" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                {/* Replace with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center text-white text-6xl font-bold">
                  YN
                </div>
                {/* Uncomment this when you have a photo: */}
                {/* <Image src="/images/profile.jpg" alt="Your Name" fill className="object-cover" priority /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}