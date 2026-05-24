"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const YOUR_NAME = "Anshul";
const YOUR_TITLE = "MTech — Optoelectronics & Optical Communication";
const YOUR_TAGLINE =
  "Exploring the frontiers of photonics and optical systems. Building AI-powered tools and guiding students toward meaningful careers in technology.";
const YOUR_LOCATION = "Jaipur, Rajasthan, India";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "25%",
          width: "20rem",
          height: "20rem",
          background: "rgba(95,116,248,0.15)",
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5rem",
          right: "20%",
          width: "28rem",
          height: "28rem",
          background: "rgba(6,182,212,0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "6rem 1.5rem 4rem",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Text content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.375rem 0.875rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(95,116,248,0.08)",
                  border: "1px solid rgba(95,116,248,0.2)",
                  color: "var(--color-brand-600)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "1.5rem",
                }}
              >
                <Sparkles size={13} />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                marginBottom: "1rem",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{YOUR_NAME}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                marginBottom: "1rem",
                opacity: 0.8,
              }}
            >
              {YOUR_TITLE}
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1rem",
                opacity: 0.6,
                lineHeight: 1.75,
                marginBottom: "2rem",
                maxWidth: "30rem",
              }}
            >
              {YOUR_TAGLINE}
            </motion.p>

            {/* Location */}
            <motion.p
              variants={itemVariants}
              style={{ fontSize: "0.875rem", opacity: 0.45, marginBottom: "2rem" }}
            >
              📍 {YOUR_LOCATION}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
            >
              <Link
                href="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "linear-gradient(135deg, var(--color-brand-600), var(--color-accent))",
                  color: "white",
                  fontWeight: 700,
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  boxShadow: "0 8px 24px rgba(95,116,248,0.25)",
                }}
              >
                View My Work <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "rgba(148,163,184,0.1)",
                  border: "1px solid rgba(148,163,184,0.2)",
                  color: "inherit",
                  fontWeight: 700,
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                <Download size={16} /> Resume
              </a>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(95,116,248,0.3)",
                  color: "var(--color-brand-600)",
                  fontWeight: 700,
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                Read Blog
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              style={{
                marginTop: "3rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "2.5rem",
              }}
            >
              {[
                { number: "MTech", label: "Optoelectronics" },
                { number: "10+", label: "Projects Built" },
                { number: "500+", label: "Students Guided" },
              ].map(({ number, label }) => (
                <div key={label}>
                  <div
                    className="text-gradient"
                    style={{ fontSize: "1.75rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {number}
                  </div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.5, marginTop: "0.25rem" }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-0.5rem",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(95,116,248,0.3), rgba(6,182,212,0.2))",
                  filter: "blur(20px)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
                  background:
                    "linear-gradient(135deg, var(--color-brand-500), var(--color-accent))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "5rem",
                  fontWeight: 800,
                }}
              >
                A
                {/* Replace the letter above with your photo:
                    import Image from "next/image";
                    <Image src="/images/profile.jpg" alt="Anshul" fill style={{objectFit:"cover"}} priority />
                */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
