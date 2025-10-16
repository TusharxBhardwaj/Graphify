import HeroSection from "@/components/hero-section"
import IntroductionSection from "@/components/introduction-section"
import ObjectivesSection from "@/components/objectives-section"
import SystemOverviewSection from "@/components/system-overview-section"
import VisualizerDemoSection from "@/components/visualizer-demo-section"
import AdvantagesSection from "@/components/advantages-section"
import FutureScopeSection from "@/components/future-scope-section"
import ConclusionSection from "@/components/conclusion-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroductionSection />
      <ObjectivesSection />
      <SystemOverviewSection />
      <VisualizerDemoSection />
      <AdvantagesSection />
      <FutureScopeSection />
      <ConclusionSection />
      <Footer />
    </main>
  )
}
