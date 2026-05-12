import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8z" />
        </svg>
        <span className="absolute -inset-1 rounded-full border border-primary/40 animate-ping" />
      </span>
      <span className="leading-tight">
        <span className={`block font-serif text-xl font-semibold tracking-tight ${light ? "text-cream" : "text-foreground"}`}>
          Apollo
        </span>
        <span className={`block text-[0.6rem] uppercase tracking-[0.25em] ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          Touching Lives · Est. 1983
        </span>
      </span>
    </Link>
  );
}
