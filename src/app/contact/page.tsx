import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, MapPin, Clock, Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Anshul",
  description: "Get in touch for career guidance, collaboration, or research inquiries.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-brand-600)", backgroundColor: "rgba(95,116,248,0.08)", border: "1px solid rgba(95,116,248,0.2)", borderRadius: "9999px", marginBottom: "1rem" }}>
                Get In Touch
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "1rem" }}>
                Let&apos;s <span className="text-gradient">Connect</span>
              </h1>
              <p style={{ opacity: 0.6, maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
                Have a question about career guidance? Want to collaborate on research? Or just want to say hi? I&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {/* Info */}
            <AnimatedSection direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: <Mail size={20} />, label: "Email", value: "you@youremail.com", href: "mailto:you@youremail.com" },
                  { icon: <MapPin size={20} />, label: "Location", value: "Jaipur, Rajasthan, India", href: null },
                  { icon: <Clock size={20} />, label: "Response Time", value: "Usually within 24 hours", href: null },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ padding: "0.625rem", borderRadius: "0.625rem", backgroundColor: "rgba(95,116,248,0.08)", color: "var(--color-brand-600)", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.4, marginBottom: "0.2rem" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "0.9rem", color: "var(--color-brand-600)", textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <p style={{ fontSize: "0.9rem" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(148,163,184,0.1)" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.4, marginBottom: "0.75rem" }}>Social Profiles</p>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {[
                      { icon: <Github size={18} />, href: "https://github.com/yourhandle", label: "GitHub" },
                      { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/yourhandle", label: "LinkedIn" },
                    ].map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid rgba(148,163,184,0.15)", color: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Career guidance note */}
                <div style={{ padding: "1.25rem", borderRadius: "1rem", backgroundColor: "rgba(95,116,248,0.06)", border: "1px solid rgba(95,116,248,0.15)" }}>
                  <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-brand-600)", marginBottom: "0.375rem" }}>🎓 Free Career Guidance</h3>
                  <p style={{ fontSize: "0.8rem", opacity: 0.65, lineHeight: 1.6 }}>
                    Students can reach out for free 1-on-1 career counseling. I help with stream selection, exam prep, and long-term career planning.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <div style={{ padding: "2rem", borderRadius: "1.25rem", border: "1px solid rgba(148,163,184,0.12)", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
