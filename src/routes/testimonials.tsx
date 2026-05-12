import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
  head: () => ({ meta: [{ title: "Patient Stories — Apollo Hospitals" }, { name: "description", content: "Real stories from patients touched by Apollo's care." }] }),
});

const stories = [
  { name: "Meera S.", from: "Bengaluru", spec: "Cardiac Surgery", quote: "I came to Apollo after two opinions told me a transplant was my only option. Their team found a path I didn't know existed. Two years on, I'm running again." },
  { name: "James O.", from: "Lagos, Nigeria", spec: "Proton Therapy", quote: "The international concierge made everything feel familiar. The treatment felt human, not clinical. Apollo gave my family a future." },
  { name: "Riya K.", from: "Chennai", spec: "Maternity", quote: "Three trimesters of unhurried care. The team remembered my name, my anxieties, my hopes. I left with a healthy daughter and a quiet heart." },
];

function Testimonials() {
  return (
    <Layout>
      <PageHero eyebrow="Voices" title="The lives behind the numbers." lede="200 million stories. Three of them, told in their own words." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 120}>
              <figure className="h-full rounded-2xl bg-card border border-border p-8 hover:border-gold/40 hover:shadow-elegant transition relative">
                <Quote className="text-gold/40" size={32} />
                <blockquote className="mt-4 font-serif text-xl leading-snug text-balance">"{s.quote}"</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-serif text-lg">{s.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.spec} · {s.from}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["98%", "would recommend"], ["4.9/5", "patient rating"], ["120+", "countries served"], ["24×7", "patient liaison"]].map(([n, l]) => (
            <Reveal key={l}>
              <div className="font-serif text-5xl text-primary">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
