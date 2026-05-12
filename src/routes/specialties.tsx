import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Brain, Bone, Activity, Wind, Salad, Eye, Baby, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/specialties")({
  component: Specialties,
  head: () => ({ meta: [{ title: "Specialties — Apollo Hospitals" }, { name: "description", content: "World-class care across cardiology, neurology, oncology, orthopedics and more." }] }),
});

const specs = [
  { i: Heart, t: "Cardiac Sciences", d: "World-renowned heart surgeons; 200,000+ procedures." },
  { i: Brain, t: "Neurosciences", d: "First Gamma Knife in South Asia; full neuro-spinal care." },
  { i: Bone, t: "Orthopedics", d: "Robotic joint replacement and complex spinal surgery." },
  { i: Activity, t: "Oncology", d: "Proton therapy, CAR-T cells, integrated cancer care." },
  { i: Wind, t: "Pulmonology", d: "Advanced bronchoscopy and lung-transplant program." },
  { i: Salad, t: "Gastroenterology", d: "Endoscopy, hepato-biliary surgery, IBD specialists." },
  { i: Eye, t: "Ophthalmology", d: "Femto-LASIK, retinal & corneal sub-specialties." },
  { i: Baby, t: "Women & Child", d: "High-risk obstetrics, neonatal ICU, fertility care." },
];

function Specialties() {
  return (
    <Layout>
      <PageHero eyebrow="Centers of Excellence" title="Eight specialties. One standard — world-class." lede="From the operating theatre to the consult room, our specialty centers are designed around outcomes, recovery and dignity." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specs.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 80}>
              <Link to="/contact" className="group block h-full rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-elegant transition relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition" />
                <s.i className="text-primary relative" size={28} />
                <h3 className="mt-6 font-serif text-2xl relative">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed relative">{s.d}</p>
                <ArrowUpRight className="mt-6 text-gold opacity-0 group-hover:opacity-100 transition relative" size={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
