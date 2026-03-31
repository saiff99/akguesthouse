import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", roomType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", roomType: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Contact & <span className="text-secondary">Location</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <Select value={form.roomType} onValueChange={(v) => setForm({ ...form, roomType: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic AC Room</SelectItem>
                <SelectItem value="premium">Premium AC Room</SelectItem>
                <SelectItem value="hostel">Girls' Hostel</SelectItem>
                <SelectItem value="other">Other Inquiry</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
            />
            <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-gold-dark font-semibold">
              Send Inquiry
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-4 flex items-start gap-3 border border-secondary/30">
              <MapPin size={20} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">Under 200m Walking Distance</p>
                <p className="text-muted-foreground text-sm">Located right next to JIMS Hospital, less than a 2-minute walk from the campus gate.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-secondary" />
                <span className="text-foreground text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-secondary" />
                <span className="text-foreground text-sm">WhatsApp: +91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <span className="text-foreground text-sm">info@akguesthouse.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary" />
                <span className="text-foreground text-sm">Front Desk: 24 Hours, 7 Days a Week</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm italic border border-border">
              Interactive Map Placeholder — Embed Google Maps here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
