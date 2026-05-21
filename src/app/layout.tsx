import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anshulverse.vercel.app"),
  title: {
    default: "Anshul — Researcher & Developer",
    template: "%s | Anshul",
  },
  description:
    "Personal portfolio and educational guidance platform. Explore projects, research, career roadmaps, and guidance for students after 10th and 12th.",
  keywords: [
    "portfolio", "developer", "researcher", "career guidance",
    "education", "roadmap", "after 10th", "after 12th", "AI", "technology",
  ],
  authors: [{ name: "Anshul", url: "https://anshulverse.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anshulverse.vercel.app",
    title: "Anshul — Researcher & Developer",
    description: "Portfolio + educational guidance for students and professionals.",
    siteName: "Anshulverse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul — Researcher & Developer",
    description: "Portfolio + educational guidance for students and professionals.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main style={{ minHeight: "100vh" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
