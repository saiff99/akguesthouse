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

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AccommodationsSection />
    <HostelSection />
    <DiningSection />
    <AmenitiesSection />
    <ValueFeaturesSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
