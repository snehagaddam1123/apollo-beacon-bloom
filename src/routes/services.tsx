import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Bot, Atom, BrainCircuit, HeartHandshake, Video, Activity } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({ meta: [{ title: "Services — Apollo Hospitals" }, { name: "description", content: "Robotic surgery, proton therapy, AI diagnostics, transplant, telemedicine and critical care." }] }),
});

const tabs = [
  { i: Bot, t: "Robotic Surgery", d: "Da Vinci Xi platforms across the network enable precise, minimally-invasive procedures with faster recovery and reduced scarring.", stats: [["12k+", "robotic cases"], ["98%", "precision rate"]] },
  { i: Atom, t: "Proton Therapy", d: "South Asia's first proton-beam therapy center delivers targeted cancer treatment that spares healthy tissue with sub-millimeter accuracy.", stats: [["1st", "in South Asia"], ["3500+", "patients treated"]] },
  { i: BrainCircuit, t: "AI Diagnostics", d: "Apollo Cvi AI platform reads cardiac scans, retina imagery and CT studies — augmenting radiologists with deep-learning insight.", stats: [["12 sec", "average read"], ["94%", "concordance"]] },
  { i: HeartHandshake, t: "Transplant Program", d: "Solid-organ and bone-marrow transplant program with one of Asia's largest transplant volumes and 90%+ one-year survival.", stats: [["20k+", "transplants"], ["90%+", "1-yr survival"]] },
  { i: Video, t: "Telemedicine", d: "Apollo 24|7 connects patients with specialists in 60 seconds — over a billion virtual consultations and counting.", stats: [["1B+", "consults"], ["60 sec", "wait time"]] },
  { i: Activity, t: "Critical Care", d: "Tertiary ICUs with extracorporeal life-support, in-house intensivists 24×7, and tele-ICU coverage across the network.", stats: [["24×7", "intensivists"], ["1200+", "ICU beds"]] },
];

function Services() {
  const [active, setActive] = useState(0);
  const A = tabs[active];
  return (
    <Layout>
      <PageHero eyebrow="What We Do" title="Medicine, reimagined." lede="From the operating robot to the smartphone — six platforms shaping the next decade of care." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <div className="space-y-2">
              {tabs.map((t, i) => (
                <button
                  key={t.t}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center gap-4 text-left rounded-xl px-5 py-4 border transition ${
                    i === active ? "bg-ink text-cream border-ink shadow-elegant" : "bg-card border-border hover:border-primary/40"
                  }`}
                >
                  <t.i size={20} className={i === active ? "text-gold" : "text-primary"} />
                  <span className="font-serif text-lg">{t.t}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-8">
            <div className="rounded-2xl bg-gradient-ink text-cream p-10 md:p-14 shadow-elegant relative overflow-hidden min-h-[420px]">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Service · 0{active + 1}</p>
                <h3 className="font-serif text-4xl md:text-5xl leading-tight">{A.t}</h3>
                <p className="mt-6 max-w-xl text-cream/75 leading-relaxed">{A.d}</p>
                <div className="mt-10 grid grid-cols-2 max-w-md gap-6">
                  {A.stats.map(([n, l]) => (
                    <div key={l}>
                      <div className="font-serif text-4xl text-gold">{n}</div>
                      <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
