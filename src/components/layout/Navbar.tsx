"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// ── Edit nav links here ──────────────────────────────────────
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/contact", label: "Contact" },
];
// ────────────────────────────────────────────────────────────

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    transition: "all 0.3s ease",
    backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(148,163,184,0.15)" : "none",
  };

  return (
    <header style={navStyle} className="dark:[background-color:rgba(3,7,18,0.85)]">
      <nav style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
          <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "linear-gradient(135deg, #5f74f8, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.75rem" }}>A</div>
          <span style={{ fontWeight: 600, color: "inherit" }}>Anshul<span className="text-gradient">verse</span></span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ padding: "0.5rem 0.75rem", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", color: pathname === link.href ? "var(--color-brand-600)" : "inherit", backgroundColor: pathname === link.href ? "rgba(95,116,248,0.08)" : "transparent", opacity: pathname === link.href ? 1 : 0.7, transition: "all 0.2s" }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ThemeToggle />
          <Link href="/resume" style={{ padding: "0.5rem 1rem", backgroundColor: "var(--color-brand-600)", color: "white", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }} className="hidden-mobile">Resume</Link>
          <button onClick={() => setIsOpen(!isOpen)} style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "transparent", border: "none", cursor: "pointer", color: "inherit" }} className="show-mobile" aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div style={{ borderTop: "1px solid rgba(148,163,184,0.15)", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem", backgroundColor: "white" }} className="dark-mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{ padding: "0.625rem 0.75rem", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", color: "inherit", backgroundColor: pathname === link.href ? "rgba(95,116,248,0.08)" : "transparent" }}>
              {link.label}
            </Link>
          ))}
          <Link href="/resume" onClick={() => setIsOpen(false)} style={{ marginTop: "0.5rem", padding: "0.625rem 1rem", backgroundColor: "var(--color-brand-600)", color: "white", borderRadius: "0.5rem", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", textAlign: "center" }}>Resume</Link>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
        .dark-mobile-menu { background-color: rgba(3, 7, 18, 0.98) !important; }
      `}</style>
    </header>
  );
}
