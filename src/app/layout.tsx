import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourname.dev"), // ← CHANGE THIS to your domain
  title: {
    default: "Your Name — Researcher & Developer",
    template: "%s | Your Name",
  },
  description:
    "Personal portfolio and educational guidance platform. Explore projects, research, career roadmaps, and guidance for students after 10th and 12th.",
  keywords: [
    "portfolio", "developer", "researcher", "career guidance",
    "education", "roadmap", "after 10th", "after 12th", "AI", "technology",
  ],
  authors: [{ name: "Your Name", url: "https://yourname.dev" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourname.dev",
    title: "Your Name — Researcher & Developer",
    description: "Portfolio + educational guidance for students and professionals.",
    siteName: "YourName.dev",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Researcher & Developer",
    description: "Portfolio + educational guidance for students and professionals.",
    images: ["/images/og-image.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://yourname.dev" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
