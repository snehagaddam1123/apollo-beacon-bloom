import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-32">
      <div className="mx-auto max-w-7xl px-4 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
            Asia's most trusted integrated healthcare provider. Forty-plus years of pioneering medicine,
            world-class clinicians and a singular mission — touching lives.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-cream mb-4">Visit</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold transition">About Apollo</Link></li>
            <li><Link to="/specialties" className="hover:text-gold transition">Specialties</Link></li>
            <li><Link to="/doctors" className="hover:text-gold transition">Find a Doctor</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">Services</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-cream mb-4">Reach Us</h4>
          <ul className="space-y-2 text-sm">
            <li>21, Greams Lane, Chennai 600 006</li>
            <li className="text-gold">Emergency · 1066</li>
            <li>contact@apollohospitals.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Apollo Hospitals Enterprise Ltd. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Touching Lives</p>
        </div>
      </div>
    </footer>
  );
}
