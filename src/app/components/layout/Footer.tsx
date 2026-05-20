import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

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
    { label: "Career Guidance", href: "/blog?category=career" },
    { label: "Technology", href: "/blog?category=tech" },
    { label: "Skill Development", href: "/blog?category=skills" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/yourhandle", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourhandle", label: "LinkedIn" },
  { icon: Mail, href: "mailto:you@email.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent flex items-center justify-center text-white font-bold text-sm">
                YN
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">YourName.dev</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Researcher, developer, and educator helping students navigate their
              career journey with clarity and confidence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
            Open source on
            <a href="https://github.com/yourhandle/portfolio" target="_blank" className="text-brand-500 hover:underline flex items-center gap-0.5">
              GitHub <ExternalLink size={11} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}