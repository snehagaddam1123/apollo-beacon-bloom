import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Sparkles, Users, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [{ title: "About Apollo Hospitals — 40+ Years of Touching Lives" }, { name: "description", content: "Founded 1983 by Dr. Prathap C Reddy, Apollo Hospitals is Asia's most trusted integrated healthcare provider." }] }),
});

const pillars = [
  { i: Heart, t: "Compassion", d: "Every encounter begins with empathy — never haste." },
  { i: Sparkles, t: "Excellence", d: "Outcomes benchmarked to the world's finest centers." },
  { i: Users, t: "People-first", d: "Patients, families and clinicians — all heard." },
  { i: Award, t: "Pioneering", d: "First-in-Asia procedures across four decades." },
];

function About() {
  return (
    <Layout>
      <PageHero eyebrow="Our Story" title="Forty years of touching lives." lede="From a single 150-bed hospital in Chennai to a network shaping the future of medicine across continents." />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-crimson shadow-elegant" />
              <div className="absolute -bottom-8 -right-6 bg-cream border border-gold/30 rounded-xl p-6 shadow-gold animate-float-slow">
                <div className="font-serif text-5xl text-primary">40+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years of Care</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Founded 1983</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A vision born from a question:<br />
              <span className="italic text-primary">why must Indians fly abroad for care?</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>Dr. Prathap C Reddy founded Apollo with a singular mission — to bring the world's finest medical care home. What began as a 150-bed hospital in Madras has grown into Asia's largest integrated healthcare provider.</p>
              <p>Today, the Apollo network spans 71 hospitals, more than 5,000 pharmacies, primary-care clinics, diagnostic centers and digital platforms — touching over 200 million lives across 120 countries.</p>
              <p>The thread that connects four decades remains unchanged: an unwavering belief that every life is precious.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold text-center mb-3">What we stand for</p>
            <h2 className="font-serif text-4xl md:text-5xl text-center">Four pillars. One promise.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="h-full rounded-xl bg-card p-8 border border-border hover:border-gold/50 hover:-translate-y-1 transition shadow-sm">
                  <p.i className="text-primary" size={26} />
                  <h3 className="mt-5 font-serif text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
