import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#accommodations" },
  { label: "Girls' Hostel", href: "#hostel" },
  { label: "Dining", href: "#dining" },
  { label: "Facilities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-display text-xl font-bold text-primary-foreground tracking-wide">
          AK <span className="text-secondary">GUEST HOUSE</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-gold-dark font-semibold"
          >
            <a href="#contact">Book Your Stay</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="mt-2 w-full bg-secondary text-secondary-foreground hover:bg-gold-dark font-semibold"
          >
            <a href="#contact" onClick={() => setOpen(false)}>Book Your Stay</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
