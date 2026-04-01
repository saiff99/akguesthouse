import { UtensilsCrossed, Leaf, Clock, Users } from "lucide-react";
import rooftopDiningImg from "@/assets/rooftop-dining.jpg";

const highlights = [
  { icon: Leaf, label: "Hygienic, Home-Style Cooking" },
  { icon: Clock, label: "Flexible Meal Timings" },
  { icon: Users, label: "Spacious Open-Air Seating" },
  { icon: UtensilsCrossed, label: "Monthly Meal Plans Available" },
];

const DiningSection = () => (
  <section id="dining" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        {/* Image placeholder */}
        <div className="h-72 md:h-96 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm italic px-4">
          Photo: Spacious rooftop restaurant with open-air seating and evening ambiance
        </div>

        <div>
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Dine With a View</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rooftop Dining <span className="text-secondary">Restaurant</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Enjoy wholesome, home-cooked meals at our spacious rooftop restaurant. With fresh ingredients,
            hygienic preparation, and a relaxing open-air atmosphere, every meal feels like dining at home.
            Long-term residents can opt for convenient monthly meal plans.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 text-sm text-foreground">
                <h.icon size={18} className="text-secondary flex-shrink-0" />
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DiningSection;
