import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import doc1 from "@/assets/doc-1.jpg";
import doc2 from "@/assets/doc-2.jpg";
import doc3 from "@/assets/doc-3.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/doctors")({
  component: Doctors,
  head: () => ({ meta: [{ title: "Find a Doctor — Apollo Hospitals" }, { name: "description", content: "Meet world-renowned physicians and surgeons across cardiology, neurosurgery and oncology." }] }),
});

const doctors = [
  { img: doc1, name: "Dr. Arvind Menon", spec: "Interventional Cardiology", credit: "MBBS, MD, DM · 24 years", bio: "Pioneer of minimally-invasive coronary procedures across South Asia." },
  { img: doc2, name: "Dr. Sneha Iyer", spec: "Neurosurgery", credit: "MBBS, MCh · 18 years", bio: "Specialist in awake-craniotomy and complex skull-base surgery." },
  { img: doc3, name: "Dr. Rajiv Kapoor", spec: "Surgical Oncology", credit: "MS, FRCS · 30 years", bio: "Leads integrated cancer care; published over 120 peer-reviewed papers." },
];

function Doctors() {
  return (
    <Layout>
      <PageHero eyebrow="Our Physicians" title="Trained globally. Caring locally." lede="Meet a few of the 10,000+ clinicians who make Apollo home for healing." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <article className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/40 transition shadow-sm hover:shadow-elegant">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={d.img} alt={d.name} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-gold">{d.spec}</p>
                  <h3 className="font-serif text-3xl mt-2">{d.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{d.credit}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    Book consultation <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
