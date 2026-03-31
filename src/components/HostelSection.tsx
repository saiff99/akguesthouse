import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, BookOpen, UtensilsCrossed, Lock, Cctv } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Separate Secure Entry", desc: "Dedicated entrance with controlled access for residents only." },
  { icon: Users, title: "Female Staff on Duty", desc: "Trained female wardens available 24/7 for assistance." },
  { icon: Cctv, title: "24/7 CCTV Surveillance", desc: "Comprehensive camera coverage across all common areas." },
  { icon: Lock, title: "Privacy First", desc: "Individual locks, private spaces, and strict visitor policies." },
  { icon: BookOpen, title: "Study Room & Common Area", desc: "Quiet zones and a community lounge designed for medical students." },
  { icon: UtensilsCrossed, title: "Mess Facility Access", desc: "Hygienic, home-style meals served daily in our rooftop restaurant." },
];

const HostelSection = () => (
  <section id="hostel" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Safe & Supportive</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Exclusive <span className="text-secondary">Girls' Hostel</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          A dedicated, secure hostel designed specifically for female MBBS students. We understand the unique needs of women pursuing medicine — safety, privacy, and a supportive community are our top priorities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
            <f.icon size={28} className="text-secondary mb-3" />
            <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-gold-dark font-semibold px-8">
          <a href="#contact">Inquire About Hostel</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HostelSection;
