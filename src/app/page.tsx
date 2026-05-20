import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { SocialLinks } from "@/components/home/SocialLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name — Researcher, Developer & Educator",
  description: "Welcome to my personal portfolio and educational guidance platform.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SocialLinks />
    </>
  );
}