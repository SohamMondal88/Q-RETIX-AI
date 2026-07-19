import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import BlogStackSection from "@/components/sections/BlogStackSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import WaitlistCommunitySection from "@/components/sections/WaitlistCommunitySection";

export const metadata: Metadata = {
  title: "Q-RETIX AI - AI-Powered Pharmaceutical Intelligence",
  description:
    "Transforming Pharmaceutical Research Through Artificial Intelligence. Empowering drug discovery, clinical research, and healthcare intelligence.",
  alternates: {
    canonical: "https://qretix.ai",
  },
  openGraph: {
    title: "Q-RETIX AI - AI-Powered Pharmaceutical Intelligence",
    description:
      "Transforming Pharmaceutical Research Through Artificial Intelligence.",
    url: "https://qretix.ai",
    type: "website",
    images: [
      {
        url: "/images/blog/cover1.jpg",
        width: 1600,
        height: 941,
        alt: "Q-RETIX AI - Pharmaceutical Intelligence",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <ResearchTimeline />
      <BlogStackSection />
      <TestimonialCarousel />
      <WaitlistCommunitySection />
    </>
  );
}
