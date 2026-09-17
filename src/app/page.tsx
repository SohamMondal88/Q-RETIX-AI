import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import BlogStackSection from "@/components/sections/BlogStackSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import WaitlistCommunitySection from "@/components/sections/WaitlistCommunitySection";

export const metadata: Metadata = {
  title: { absolute: "Q-RETIX AI — Evidence-Aware Therapeutic Research" },
  description:
    "Q-RETIX AI explores evidence-aware language models for therapeutic target discovery, biological reasoning, and testable research hypotheses.",
  alternates: {
    canonical: "https://www.q-retix.app/",
  },
  openGraph: {
    title: "Q-RETIX AI — Evidence-Aware Therapeutic Research",
    description:
      "Evidence-aware AI research for therapeutic target discovery and biological reasoning.",
    url: "https://www.q-retix.app/",
    type: "website",
    images: [
      {
        url: "/molecular-structure.png",
        width: 587,
        height: 425,
        alt: "Q-RETIX AI computational biology research",
      },
    ],
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Q-RETIX AI",
    url: "https://www.q-retix.app/",
    logo: "https://www.q-retix.app/q-retix-logo.png",
    description:
      "Research-stage AI work focused on therapeutic target discovery and biological reasoning.",
    sameAs: [
      "https://www.linkedin.com/company/qretix-ai/",
      "https://x.com/QRETIXAIorg",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <FeatureCards />
      <ResearchTimeline />
      <BlogStackSection />
      <TestimonialCarousel />
      <WaitlistCommunitySection />
    </>
  );
}
