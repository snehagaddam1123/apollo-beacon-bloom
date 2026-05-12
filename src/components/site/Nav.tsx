import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/specialties", label: "Specialties" },
  { to: "/doctors", label: "Doctors" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Stories" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* Emergency banner */}
      <div className="bg-ink text-cream text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="uppercase tracking-[0.22em]">Emergency 24×7</span>
            <span className="hidden sm:inline text-cream/70">· Ambulance dispatched in under 8 min</span>
          </div>
          <a href="tel:1066" className="font-semibold tracking-wider text-gold hover:text-cream transition">
            Call 1066
          </a>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          <Logo light={scrolled} />
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm tracking-wide transition-colors ${
                  scrolled ? "text-cream/80 hover:text-gold" : "text-foreground/80 hover:text-primary"
                }`}
                activeProps={{ className: scrolled ? "text-gold" : "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-95 transition"
            >
              Book Appointment
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden rounded-md p-2 ${scrolled ? "text-cream" : "text-foreground"}`}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-ink/95 backdrop-blur border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-cream/85 hover:text-gold py-1.5">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
