import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ServicesSection } from "@/components/sections/services";
import { PricingSection } from "@/components/sections/pricing";
import { BulletinSection } from "@/components/sections/bulletin";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { AboutSection } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060612] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <PricingSection />
      <BulletinSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
