import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Globe2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({ meta: [{ title: "Book an Appointment — Apollo Hospitals" }, { name: "description", content: "Schedule a consultation with an Apollo specialist. International patients welcome." }] }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z.string().trim().min(7, "Phone required").max(20),
  specialty: z.string().min(1, "Choose a specialty"),
  message: z.string().trim().max(800).optional(),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Appointment request received. Our liaison will call within 2 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <Toaster richColors position="top-center" />
      <PageHero eyebrow="Get in Touch" title="Begin your care journey." lede="Tell us a little, and our patient liaison will be in touch within two hours — anywhere in the world." />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Specialty</label>
                  <select name="specialty" required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="">Select a specialty…</option>
                    <option>Cardiac Sciences</option>
                    <option>Neurosciences</option>
                    <option>Oncology</option>
                    <option>Orthopedics</option>
                    <option>Women & Child</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">How can we help?</label>
                <textarea name="message" rows={4} maxLength={800} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Tell us about your concern (optional)" />
              </div>
              <button type="submit" disabled={submitting} className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-95 transition disabled:opacity-60">
                {submitting ? "Sending…" : "Request Appointment"}
              </button>
              <p className="text-xs text-muted-foreground">By submitting you agree to be contacted by an Apollo patient liaison.</p>
            </form>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="space-y-5">
              <InfoCard icon={Phone} title="Emergency Hotline" lines={["1066 — 24×7", "Ambulance under 8 minutes"]} accent />
              <InfoCard icon={MapPin} title="Apollo Main Hospital" lines={["21, Greams Lane, Off Greams Road", "Chennai 600 006, India"]} />
              <InfoCard icon={Mail} title="Patient Liaison" lines={["contact@apollohospitals.com", "international@apollohospitals.com"]} />
              <InfoCard icon={Globe2} title="International Concierge" lines={["Visa, travel & stay support", "Translators in 14 languages"]} />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} maxLength={160} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}

function InfoCard({ icon: I, title, lines, accent }: { icon: any; title: string; lines: string[]; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-6 ${accent ? "bg-ink text-cream border-ink shadow-elegant" : "bg-card border-border"}`}>
      <div className="flex items-center gap-3">
        <I size={18} className={accent ? "text-gold" : "text-primary"} />
        <h3 className="font-serif text-xl">{title}</h3>
      </div>
      <div className={`mt-3 space-y-1 text-sm ${accent ? "text-cream/75" : "text-muted-foreground"}`}>
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
}
