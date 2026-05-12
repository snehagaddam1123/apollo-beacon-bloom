import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-ink text-cream">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 pt-28 pb-24 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">{eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] text-balance">
            {title}
          </h1>
          {lede && <p className="mt-6 mx-auto max-w-2xl text-cream/70 text-lg leading-relaxed">{lede}</p>}
          <div className="divider-gold mt-10 mx-auto max-w-xs" />
        </Reveal>
      </div>
    </section>
  );
}
