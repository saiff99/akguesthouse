import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import HostelSection from "@/components/HostelSection";
import DiningSection from "@/components/DiningSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ValueFeaturesSection from "@/components/ValueFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ScrollReveal>
      <AccommodationsSection />
    </ScrollReveal>
    <ScrollReveal>
      <HostelSection />
    </ScrollReveal>
    <ScrollReveal>
      <DiningSection />
    </ScrollReveal>
    <ScrollReveal>
      <AmenitiesSection />
    </ScrollReveal>
    <ScrollReveal>
      <ValueFeaturesSection />
    </ScrollReveal>
    <ScrollReveal>
      <TestimonialsSection />
    </ScrollReveal>
    <ScrollReveal>
      <ContactSection />
    </ScrollReveal>
    <ScrollReveal>
      <Footer />
    </ScrollReveal>
  </div>
);

export default Index;
