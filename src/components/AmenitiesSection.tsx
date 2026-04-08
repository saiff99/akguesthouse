import { ConciergeBell, Wifi, ShieldCheck, Car, Zap, WashingMachine } from "lucide-react";
import StaggerReveal from "@/components/StaggerReveal";

const amenities = [
  { icon: ConciergeBell, title: "24-Hour Room Service", desc: "Assistance available round the clock — whatever you need, whenever you need it." },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Reliable, fast internet across all rooms and common areas — essential for study and remote work." },
  { icon: ShieldCheck, title: "24/7 Security & CCTV", desc: "Trained security guards and comprehensive CCTV surveillance for your complete peace of mind." },
  { icon: Car, title: "Free Secure Parking", desc: "Dedicated, guarded parking for both two-wheelers and four-wheelers at no extra cost." },
  { icon: Zap, title: "24/7 Power Backup", desc: "Uninterrupted electricity ensures your study and rest are never disrupted — especially during exam season." },
  { icon: WashingMachine, title: "Laundry & Housekeeping", desc: "Regular housekeeping and convenient laundry services so you can focus on what matters most." },
];

const AmenitiesSection = () => (
  <section id="amenities" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Everything You Need</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
          Amenities & <span className="text-secondary">Facilities</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-primary-foreground/60">
          We've thought of everything so you don't have to. Every amenity is designed to support your academic journey and personal comfort.
        </p>
      </div>

      <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerMs={120}>
        {amenities.map((a) => (
          <div key={a.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 transition-colors">
            <a.icon size={28} className="text-secondary mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-1">{a.title}</h3>
            <p className="text-sm text-primary-foreground/60">{a.desc}</p>
          </div>
        ))}
      </StaggerReveal>
    </div>
  </section>
);

export default AmenitiesSection;
