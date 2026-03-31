import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Wifi, Bath, Lamp, BedDouble, Refrigerator, Sofa, Sparkles } from "lucide-react";

const rooms = [
  {
    title: "Basic AC Room",
    description: "Comfortable and affordable — everything an MBBS student needs to study hard and rest well.",
    amenities: [
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Bath, label: "Attached Bathroom" },
      { icon: Lamp, label: "Study Desk & Lamp" },
    ],
    price: "Starting from ₹7,999/month",
    image: "Photo: Clean, well-lit AC room with study desk and single bed",
  },
  {
    title: "Premium AC Room",
    description: "Spacious and elegantly furnished — ideal for visiting doctors, parents, and guests who prefer a touch of luxury.",
    amenities: [
      { icon: BedDouble, label: "Premium Bedding" },
      { icon: Refrigerator, label: "Mini Refrigerator" },
      { icon: Sofa, label: "Seating Area" },
      { icon: Sparkles, label: "Premium Finishes" },
    ],
    price: "Starting from ₹X,XXX/night",
    image: "Photo: Spacious premium room with double bed, seating area, and modern décor",
  },
];

const AccommodationsSection = () => (
  <section id="accommodations" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Our Accommodations</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Rooms Designed for <span className="text-secondary">Comfort & Focus</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Whether you're settling in for the semester or visiting for a few days, we have the perfect room for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {rooms.map((room) => (
          <Card key={room.title} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
            <div className="h-52 bg-muted flex items-center justify-center text-muted-foreground text-sm italic px-4">
              {room.image}
            </div>
            <CardHeader>
              <CardTitle className="font-display text-2xl text-foreground">{room.title}</CardTitle>
              <p className="text-muted-foreground text-sm mt-1">{room.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {room.amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-2 text-sm text-foreground">
                    <a.icon size={16} className="text-secondary" />
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-secondary mb-4">{room.price}</p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-navy-light">
                <a href="#contact">View Details</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default AccommodationsSection;
