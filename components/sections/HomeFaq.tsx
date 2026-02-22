import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { type Locale } from "@/lib/translations";

const FAQ_CONTENT: Record<Locale, { heading: string; items: { q: string; a: string }[] }> = {
  ro: {
    heading: "Întrebări frecvente",
    items: [
      {
        q: "Cum ne poate ajuta Nesco Digital să îmi cresc afacerea online?",
        a: "Printr-o strategie personalizată care combină reclame plătite (Google, Meta, TikTok), SEO, webdesign orientat spre conversii și marketing prin email. Ne concentrăm exclusiv pe rezultate măsurabile , trafic calificat, lead-uri și vânzări, nu vanity metrics.",
      },
      {
        q: "Ce rezultate pot să mă aștept și în cât timp?",
        a: "Campaniile plătite generează primele rezultate în 24–48 ore. Optimizarea completă durează 2–4 săptămâni. Pentru SEO și strategii pe termen lung, impactul semnificativ se vede în 3–6 luni. Fiecare proiect primește un plan de acțiune cu obiective clare și termene realiste.",
      },
      {
        q: "Care este bugetul minim recomandat pentru a lucra cu voi?",
        a: "Depinde de serviciu. Pentru campanii de reclame plătite recomandăm minimum 1.000€/lună în buget media. Serviciile de webdesign, SEO și strategie digitală au costuri fixe lunare sau de proiect, discutate transparent înainte de orice angajament.",
      },
      {
        q: "Cum măsurați succesul și ce raportare oferiți?",
        a: "Lucrăm cu KPI-uri clare agreate înainte de start: ROAS, CPL, rata de conversie, trafic organic, revenue generat. Oferim acces la dashboard-uri live și rapoarte lunare detaliate, cu explicații în limbaj simplu, fără jargon.",
      },
      {
        q: "Ce diferențiază Nesco Digital de alte agenții de marketing digital?",
        a: "Lucrăm ca un partener de execuție, nu ca o agenție clasică. Nu vindem pachete standard , fiecare strategie e construită pe specificul afacerii tale. Avem peste 15 ani de experiență, am gestionat peste 36M€ în bugete media și lucrăm cu companii care vor să crească serios, nu să bifeze prezența online.",
      },
    ],
  },
  en: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "How can Nesco Digital help me grow my business online?",
        a: "Through a tailored strategy combining paid ads (Google, Meta, TikTok), SEO, conversion-focused web design, and email marketing. We focus exclusively on measurable outcomes , qualified traffic, leads, and sales, not vanity metrics.",
      },
      {
        q: "What results can I expect and how quickly?",
        a: "Paid campaigns generate first results within 24–48 hours of launch. Full optimization takes 2–4 weeks. For SEO and long-term strategies, significant impact is visible within 3–6 months. Every project receives an action plan with clear objectives and realistic timelines.",
      },
      {
        q: "What is the minimum budget recommended to work with you?",
        a: "It depends on the service. For paid advertising we recommend a minimum of €1,000/month in media spend. Web design, SEO, and digital strategy services have fixed monthly or project fees, discussed transparently before any commitment.",
      },
      {
        q: "How do you measure success and what reporting do you provide?",
        a: "We work with clearly agreed KPIs before we start: ROAS, CPL, conversion rate, organic traffic, revenue generated. You get access to live dashboards and detailed monthly reports, explained in plain language without jargon.",
      },
      {
        q: "What sets Nesco Digital apart from other digital marketing agencies?",
        a: "We work as an execution partner, not a traditional agency. We don't sell standard packages , every strategy is built around your specific business. With over 15 years of experience, €36M+ in managed media budgets, we work with companies that are serious about growth.",
      },
    ],
  },
  de: {
    heading: "Häufig gestellte Fragen",
    items: [
      {
        q: "Wie kann Nesco Digital mir helfen, mein Unternehmen online zu skalieren?",
        a: "Durch eine maßgeschneiderte Strategie, die bezahlte Werbung (Google, Meta, TikTok), SEO, konversionsorientiertes Webdesign und E-Mail-Marketing kombiniert. Wir konzentrieren uns ausschließlich auf messbare Ergebnisse , qualifizierten Traffic, Leads und Umsatz, keine Eitelkeitskennzahlen.",
      },
      {
        q: "Welche Ergebnisse kann ich erwarten und wie schnell?",
        a: "Bezahlte Kampagnen liefern erste Ergebnisse innerhalb von 24–48 Stunden nach dem Start. Die vollständige Optimierung dauert 2–4 Wochen. Für SEO und langfristige Strategien ist der signifikante Einfluss in 3–6 Monaten sichtbar. Jedes Projekt erhält einen Aktionsplan mit klaren Zielen und realistischen Zeitplänen.",
      },
      {
        q: "Welches Mindestbudget wird für die Zusammenarbeit empfohlen?",
        a: "Das hängt vom Service ab. Für bezahlte Werbung empfehlen wir mindestens 1.000 €/Monat Mediabudget. Webdesign-, SEO- und Digitalstrategieservices haben feste monatliche oder projektbezogene Kosten, die vor jeder Verpflichtung transparent besprochen werden.",
      },
      {
        q: "Wie messen Sie den Erfolg und welche Berichte erhalten wir?",
        a: "Wir arbeiten mit klar vereinbarten KPIs: ROAS, CPL, Konversionsrate, organischer Traffic, generierter Umsatz. Sie erhalten Zugang zu Live-Dashboards und detaillierten monatlichen Berichten, erklärt in einfacher Sprache ohne Fachjargon.",
      },
      {
        q: "Was unterscheidet Nesco Digital von anderen Digitalagenturen?",
        a: "Wir arbeiten als Umsetzungspartner, nicht als klassische Agentur. Wir verkaufen keine Standardpakete , jede Strategie wird auf Ihr spezifisches Unternehmen zugeschnitten. Mit über 15 Jahren Erfahrung und mehr als 36 Mio. € verwaltetem Mediabudget arbeiten wir mit Unternehmen, die ernsthaft wachsen wollen.",
      },
    ],
  },
};

interface HomeFaqProps {
  locale: Locale;
}

export function HomeFaq({ locale }: HomeFaqProps) {
  const { heading, items } = FAQ_CONTENT[locale];

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "100px 0" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.2), transparent)" }}
      />
      <div className="page-container">
        <FadeInSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="badge mb-6">FAQ</span>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginTop: "20px",
              }}
            >
              {heading}
            </h2>
          </div>
        </FadeInSection>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
