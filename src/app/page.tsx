import HeroSection from "@/components/sections/HeroSection";
import AIShowcase from "@/components/sections/AIShowcase";
import FeatureCards from "@/components/sections/FeatureCards";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import ResearchTimeline from "@/components/sections/ResearchTimeline";
import WaitlistCommunitySection from "@/components/sections/WaitlistCommunitySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AIShowcase />
      <FeatureCards />
      <DashboardShowcase />
      <ResearchTimeline />
      <WaitlistCommunitySection />
    </>
  );
}
