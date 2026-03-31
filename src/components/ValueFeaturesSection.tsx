import { Zap, WashingMachine, BookOpen } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "24/7 Power Backup",
    description: "Medical students study at all hours — a power outage during exam season is their biggest fear. Our comprehensive power backup system ensures uninterrupted electricity for study, rest, and peace of mind.",
  },
  {
    icon: WashingMachine,
    title: "Laundry & Housekeeping",
    description: "Busy doctors and studying students rarely have time for daily chores. Our laundry and housekeeping services keep your space clean and your clothes fresh, so you can focus entirely on your career.",
  },
  {
    icon: BookOpen,
    title: "Quiet Zones & Study Lounges",
    description: "Dedicated, peaceful spaces designed for deep focus. Whether you're preparing for exams or reviewing case studies, our study lounges offer the perfect environment — making AK Guest House feel like a premium educational residency.",
  },
];

const ValueFeaturesSection = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Why Choose Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          More Than Just <span className="text-secondary">a Stay</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-lg p-8 border border-border text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
              <f.icon size={26} className="text-secondary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueFeaturesSection;
