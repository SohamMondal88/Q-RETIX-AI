import HeroSection from "@/components/sections/HeroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import BlogStackSection from "@/components/sections/BlogStackSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import FAQSection from "@/components/sections/FAQSection";
import WaitlistCommunitySection from "@/components/sections/WaitlistCommunitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <ResearchTimeline />
      <BlogStackSection />
      <TestimonialCarousel />
      <WaitlistCommunitySection />
      <FAQSection />
    </>
  );
}
