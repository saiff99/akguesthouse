import { Button } from "@/components/ui/button";
import { Shield, Wifi, MapPin } from "lucide-react";

const badges = [
  { icon: Shield, label: "24/7 Security" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: MapPin, label: "Under 200m to Campus" },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center bg-primary pt-16"
  >
    {/* Overlay pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-dark to-primary opacity-90" />
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
        Premium Accommodation
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Exclusive Hostel Facility
        <br />
        <span className="text-secondary">Near Your Campus</span>
      </h1>
      <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Premium accommodation designed for medical students, doctors, and families.
        Comfort, security, and focus — all under one roof.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-gold-dark font-semibold text-base px-8">
          <a href="#contact">Book Your Room</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-primary-foreground/90 font-semibold text-base px-8 transition-shadow duration-300">
          <a href="#hostel">About Hostel</a>
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <b.icon size={16} className="text-secondary" />
            <span>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
