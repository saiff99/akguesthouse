import { Star } from "lucide-react";
import StaggerReveal from "@/components/StaggerReveal";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "MBBS Graduate",
    quote: "AK Guest House was my home for 4 years during medical school. The security, Wi-Fi, and quiet study areas made it the perfect place to focus on my studies. Highly recommended!",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Parent of MBBS Student",
    quote: "As a parent, safety was my biggest concern. The 24/7 CCTV, female wardens, and separate hostel facility gave me complete peace of mind knowing my daughter was safe.",
  },
  {
    name: "Dr. Amit Verma",
    role: "Visiting Doctor",
    quote: "I stayed in the premium room while attending a conference. The room was spotless, the rooftop restaurant was delightful, and the location couldn't be more convenient.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          What Our <span className="text-secondary">Guests Say</span>
        </h2>
      </div>

      <StaggerReveal className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerMs={150}>
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm italic leading-relaxed mb-5">"{t.quote}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </StaggerReveal>
  </section>
);

export default TestimonialsSection;
