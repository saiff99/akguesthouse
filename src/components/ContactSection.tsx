import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xykbnwzy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        toast.success("Inquiry Sent! We'll get back to you within 24 hours.");
      } else {
        setStatus("error");
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      toast.error("Network error. Please check your connection and try again.");
    }
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
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
            />
            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-secondary text-secondary-foreground hover:bg-gold-dark font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Inquiry"}
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
                <span className="text-foreground text-sm">+91 9831319095</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={18} className="text-secondary" />
                <span className="text-foreground text-sm">WhatsApp: +91 7003460592</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-secondary" />
                <span className="text-foreground text-sm">contact@akguesthouse.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-secondary" />
                <span className="text-foreground text-sm">Front Desk: 24 Hours, 7 Days a Week</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-48 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=AK+GUEST+HOUSE,+KP+Mondal+Rd,+Nishchintapur,+Budge+Budge,+Kolkata,+West+Bengal+700137&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AK Guest House Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
