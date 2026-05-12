import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-hospital.jpg";
import { Activity, HeartPulse, Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Apollo Hospitals — Touching Lives Since 1983" },
      { name: "description", content: "Asia's most trusted hospital network. 71+ hospitals, 200M+ lives touched. World-class care, pioneering medicine." },
    ],
  }),
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-ink text-cream">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold mb-8">
                <span className="pulse-dot" /> Now serving 120+ countries
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.98] text-balance">
                Pioneering medicine.<br />
                <span className="italic text-gold">Touching lives.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-cream/75 text-lg leading-relaxed">
                For four decades, Apollo has redefined healthcare in Asia — uniting world-class clinicians,
                pioneering technology and unhurried compassion under one roof.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium shadow-elegant hover:opacity-95 transition">
                  Book Appointment <ArrowRight size={16} />
                </Link>
                <Link to="/specialties" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm hover:border-gold hover:text-gold transition">
                  Explore Specialties
                </Link>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-16 grid grid-cols-3 max-w-lg gap-6">
                {[
                  { n: "71+", l: "Hospitals" },
                  { n: "200M+", l: "Lives Touched" },
                  { n: "10K+", l: "Clinicians" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-4xl text-gold">{s.n}</div>
                    <div className="text-xs uppercase tracking-widest text-cream/55 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 relative">
            <Reveal delay={300}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-white/10">
                <img src={heroImg} alt="Apollo Hospital interior" width={1600} height={1024} className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat cards */}
              <div className="animate-float-slow absolute -left-6 top-12 hidden md:block bg-cream text-ink rounded-xl p-4 shadow-elegant w-56">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                  <HeartPulse size={14} /> Cardiac OR
                </div>
                <div className="mt-2 font-serif text-2xl">98.6% <span className="text-base text-muted-foreground">success</span></div>
                <div className="text-xs text-muted-foreground mt-1">Last 12 months · audited</div>
              </div>
              <div className="animate-float-slower absolute -right-4 -bottom-6 hidden md:block bg-cream text-ink rounded-xl p-4 shadow-gold w-60 border border-gold/30">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  <Activity size={14} /> Live · Now
                </div>
                <div className="mt-2 font-serif text-xl leading-snug">42 surgeries underway across the network</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROMISE STRIP */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
          {[
            { i: Stethoscope, t: "World-class clinicians", d: "Trained at Mayo, Hopkins, Cleveland." },
            { i: HeartPulse, t: "Pioneering procedures", d: "First proton therapy in South Asia." },
            { i: ShieldCheck, t: "JCI accredited", d: "Highest patient-safety standards." },
            { i: Activity, t: "24×7 critical care", d: "Sub-8-minute ambulance response." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 90}>
              <f.i className="text-primary" size={28} />
              <h3 className="mt-4 font-serif text-2xl">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Begin your journey</p>
            <h2 className="font-serif text-5xl md:text-6xl text-balance">
              The right care, <span className="italic">at the right time.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
              Book a consultation with one of our 10,000+ specialists — across 71 hospitals and 120 countries.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm text-primary-foreground shadow-elegant hover:opacity-95 transition">
              Book an Appointment <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
