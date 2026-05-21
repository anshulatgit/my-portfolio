import Link from "next/link";

const footerLinks = {
  Portfolio: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Resume", href: "/resume" },
  ],
  Education: [
    { label: "Career Roadmaps", href: "/roadmaps" },
    { label: "After 10th", href: "/roadmaps/after-10th" },
    { label: "After 12th", href: "/roadmaps/after-12th" },
    { label: "AI Careers", href: "/careers" },
  ],
  Blog: [
    { label: "All Articles", href: "/blog" },
    { label: "Career Guidance", href: "/blog" },
    { label: "Technology", href: "/blog" },
    { label: "Contact Me", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(148,163,184,0.15)",
        backgroundColor: "rgba(249,250,251,0.5)",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #5f74f8, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              >
                A
              </div>
              <span style={{ fontWeight: 600 }}>Anshulverse</span>
            </div>
            <p style={{ fontSize: "0.875rem", opacity: 0.6, lineHeight: 1.6, maxWidth: "220px" }}>
              Researcher, developer, and educator helping students navigate their career journey with clarity.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                style={{ padding: "0.4rem 0.7rem", borderRadius: "0.4rem", border: "1px solid rgba(148,163,184,0.2)", fontSize: "0.75rem", textDecoration: "none", color: "inherit" }}>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                style={{ padding: "0.4rem 0.7rem", borderRadius: "0.4rem", border: "1px solid rgba(148,163,184,0.2)", fontSize: "0.75rem", textDecoration: "none", color: "inherit" }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.5, marginBottom: "1rem" }}>
                {title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      style={{ fontSize: "0.875rem", textDecoration: "none", opacity: 0.65, color: "inherit" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(148,163,184,0.1)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.75rem", opacity: 0.45 }}>
            © {new Date().getFullYear()} Anshul. Built with Next.js & Tailwind CSS.
          </p>
          <p style={{ fontSize: "0.75rem", opacity: 0.45 }}>
            anshulverse.vercel.app
          </p>
        </div>
      </div>
    </footer>
  );
}
