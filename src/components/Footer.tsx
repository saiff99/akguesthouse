import { Facebook, Instagram, Twitter } from "lucide-react";
import akLogo from "@/assets/ak-logo.webp";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
            <img src={akLogo} alt="AK Guest House Logo" className="w-8 h-8 object-contain mx-auto mb-1" />
            AK <span className="text-secondary">GUEST HOUSE</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Premium accommodation for medical students, doctors, and families — just steps from campus.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Rooms", "Girls' Hostel", "Dining", "Facilities", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/['\s]/g, "")}`} className="block text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Contact</h4>
          <div className="space-y-2 text-primary-foreground/60 text-sm">
            <p>+91 9831319095</p>
            <p>contact@akguesthouse.in</p>
            <p>Near JIMS Hospital, Buita, Budge Budge, PIN - 700137</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Icon size={16} className="text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} AK Guest House. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
