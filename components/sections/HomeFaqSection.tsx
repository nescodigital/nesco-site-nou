"use client";
import { useState } from "react";
import Link from "next/link";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { type Locale } from "@/lib/translations";

interface FaqItem {
  q: string;
  a: string;
}

const CONTACT_HREF: Record<Locale, string> = {
  ro: "/contact/",
  en: "/en/lets-talk/",
  de: "/ge/lass-uns-reden/",
};

const CONTACT_LABEL: Record<Locale, string> = {
  ro: "Contactează-ne",
  en: "Contact us",
  de: "Kontakt aufnehmen",
};

const FAQ_HEADING: Record<Locale, string> = {
  ro: "Întrebări frecvente",
  en: "Frequently asked questions",
  de: "Häufig gestellte Fragen",
};

const FAQ_ITEMS: Record<Locale, FaqItem[]> = {
  ro: [
    {
      q: "Cum ne poate ajuta Nesco Digital să îmi cresc afacerea online?",
      a: "Printr-o strategie personalizată care combină reclame plătite (Google, Meta, TikTok), SEO, webdesign orientat spre conversii și marketing prin email. Ne concentrăm exclusiv pe rezultate măsurabile, trafic calificat, lead-uri și vânzări, nu vanity metrics.",
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
      a: "Lucrăm ca un partener de execuție, nu ca o agenție clasică. Nu vindem pachete standard, fiecare strategie e construită pe specificul afacerii tale. Avem peste 15 ani de experiență, am gestionat peste 36M€ în bugete media și lucrăm cu companii care vor să crească serios, nu să bifeze prezența online.",
    },
    {
      q: "Cum pot începe colaborarea cu Nesco Digital?",
      a: "Simplu: programează un apel de discovery gratuit. Analizăm situația ta, îți explicăm ce putem face concret și îți prezentăm un plan de acțiune, fără obligații și fără jargon de marketing.",
    },
  ],
  en: [
    {
      q: "How can Nesco Digital help me grow my business online?",
      a: "Through a tailored strategy combining paid ads (Google, Meta, TikTok), SEO, conversion-focused web design, and email marketing. We focus exclusively on measurable outcomes, qualified traffic, leads, and sales, not vanity metrics.",
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
      a: "We work as an execution partner, not a traditional agency. We don't sell standard packages, every strategy is built around your specific business. With over 15 years of experience and €36M+ in managed media budgets, we work with companies that are serious about growth.",
    },
    {
      q: "How do I get started with Nesco Digital?",
      a: "Simply schedule a free discovery call. We'll analyze your situation, explain exactly what we can do, and present a concrete action plan, no obligations, no marketing jargon.",
    },
  ],
  de: [
    {
      q: "Wie kann Nesco Digital mir helfen, mein Unternehmen online zu skalieren?",
      a: "Durch eine maßgeschneiderte Strategie, die bezahlte Werbung (Google, Meta, TikTok), SEO, konversionsorientiertes Webdesign und E-Mail-Marketing kombiniert. Wir konzentrieren uns ausschließlich auf messbare Ergebnisse, qualifizierten Traffic, Leads und Umsatz, keine Eitelkeitskennzahlen.",
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
      a: "Wir arbeiten als Umsetzungspartner, nicht als klassische Agentur. Wir verkaufen keine Standardpakete, jede Strategie wird auf Ihr spezifisches Unternehmen zugeschnitten. Mit über 15 Jahren Erfahrung und mehr als 36 Mio. € verwaltetem Mediabudget arbeiten wir mit Unternehmen, die ernsthaft wachsen wollen.",
    },
    {
      q: "Wie starte ich die Zusammenarbeit mit Nesco Digital?",
      a: "Ganz einfach: Vereinbaren Sie ein kostenloses Discovery-Call. Wir analysieren Ihre Situation, erklären genau, was wir tun können, und präsentieren einen konkreten Aktionsplan, ohne Verpflichtungen und ohne Marketing-Jargon.",
    },
  ],
};

interface HomeFaqSectionProps {
  locale: Locale;
}

function FaqItem({ item, locale, isOpen, onToggle }: {
  item: FaqItem;
  locale: Locale;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        padding: "20px 24px",
        background: "#0a0a0a",
        border: `1px solid ${isOpen ? "rgba(86,219,132,0.2)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "12px",
        marginBottom: "8px",
        cursor: "pointer",
        transition: "border-color 0.2s ease",
      }}
      onClick={onToggle}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <span
          style={{
            fontSize: "0.9375rem",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            fontSize: "1.25rem",
            color: "#56db84",
            fontWeight: 300,
            flexShrink: 0,
            lineHeight: 1,
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "600px" : "0px",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p style={{ marginTop: "12px", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
          {item.a}{" "}
          <Link
            href={CONTACT_HREF[locale]}
            onClick={(e) => e.stopPropagation()}
            style={{
              color: "#56db84",
              textDecoration: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            → {CONTACT_LABEL[locale]}
          </Link>
        </p>
      </div>
    </div>
  );
}

function FaqAccordionHome({ items, locale }: { items: FaqItem[]; locale: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, idx) => (
        <FaqItem
          key={idx}
          item={item}
          locale={locale}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}

export function HomeFaqSection({ locale }: HomeFaqSectionProps) {
  const heading = FAQ_HEADING[locale];
  const items = FAQ_ITEMS[locale];

  return (
    <section className="relative" style={{ backgroundColor: "#050505", padding: "120px 0" }}>
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
          <FaqAccordionHome items={items} locale={locale} />
        </div>
      </div>
    </section>
  );
}
