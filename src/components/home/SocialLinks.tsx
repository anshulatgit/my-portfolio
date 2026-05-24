import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/yourhandle",
    label: "GitHub",
    desc: "Open source code & projects",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourhandle",
    label: "LinkedIn",
    desc: "Professional network",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/yourhandle",
    label: "Twitter / X",
    desc: "Thoughts on tech & optics",
  },
  {
    icon: Mail,
    href: "mailto:you@youremail.com",
    label: "Email",
    desc: "Direct message",
  },
];

export function SocialLinks() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "rgba(249,250,251,0.3)",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <AnimatedSection>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              opacity: 0.4,
              marginBottom: "0.75rem",
            }}
          >
            Find Me On
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              marginBottom: "2.5rem",
            }}
          >
            Let&apos;s Connect
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {socialLinks.map(({ icon: Icon, href, label, desc }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "0.875rem",
                  border: "1px solid rgba(148,163,184,0.15)",
                  backgroundColor: "rgba(148,163,184,0.05)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.2s",
                  minWidth: "160px",
                }}
              >
                <Icon size={18} style={{ opacity: 0.7 }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>{label}</div>
                  <div style={{ fontSize: "0.7rem", opacity: 0.45 }}>{desc}</div>
                </div>
                <ExternalLink size={12} style={{ opacity: 0.3, marginLeft: "auto" }} />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
