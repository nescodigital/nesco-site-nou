import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "SEO-Lösungen | Höher bei Google ranken und organischen Traffic steigern | Nesco Digital", description: "Höher bei Google ranken und qualitätsorientierter organischer Traffic. Top-3-Rankings in 90 Tagen mit bewährten White-Hat-SEO-Strategien.", path: "/ge/seo-loesungen/", routeKey: "seoSolutions" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "SEO-Lösungen", title: "SEO-Lösungen", subtitle: "Höher bei Google ranken, qualitätsorientierter organischer Traffic und nachhaltiges langfristiges Wachstum, ohne für jeden Klick zu bezahlen." },
  problems: [{ title: "Keine Google-Sichtbarkeit", desc: "Ideale Kunden können Sie online nicht finden" }, { title: "Von Wettbewerbern überholt", desc: "Konkurrenten nehmen Traffic, der Ihnen gehören sollte" }, { title: "Niedriger organischer Traffic", desc: "Abhängigkeit von bezahlten Anzeigen ohne organische Basis" }, { title: "Schlechtes technisches SEO", desc: "Site-Probleme verhindern korrektes Google-Ranking" }],
  solutions: [{ title: "Technisches SEO-Audit", desc: "Vollständiger Crawl zur Identifizierung und Behebung jedes technischen Problems." }, { title: "Keyword-Recherche", desc: "Keywords mit hoher Kaufabsicht, nach denen Ihre Käufer suchen." }, { title: "On-Page-Optimierung", desc: "Jede Seite für Rankings und Conversions optimiert." }, { title: "Link Building", desc: "Hochautoritäre Backlinks, die den Unterschied machen." }, { title: "Content-Strategie", desc: "SEO-Content, der rankt und konvertiert." }, { title: "Lokales SEO", desc: "Lokale Suche in Ihrer Region dominieren." }],
  cases: [{ metric: "Top 3", label: "Google-Rankings in 90 Tagen", industry: "SaaS-Plattform" }, { metric: "+200%", label: "Organischer Traffic in 6 Monaten", industry: "E-Commerce" }, { metric: "+150%", label: "Qualifizierte Leads aus SEO", industry: "B2B-Dienstleistungen" }],
  omnichannelServices: ["Google Ads", "CRO", "Webdesign", "E-Mail-Marketing", "Digitale Strategie"],
  faq: [
    { q: "Wie lange dauert es, bis ich SEO-Ergebnisse sehe?", a: "Erste Ranking-Verbesserungen erscheinen in 60-90 Tagen. Bedeutende organische Traffic-Ergebnisse in 4-6 Monaten. SEO ist eine langfristige Investition mit kumulativen Effekten." },
    { q: "Was beinhaltet das kostenlose SEO-Audit?", a: "Wir analysieren die technische Struktur Ihrer Website, Ladegeschwindigkeit, aktuelle Keywords, Backlink-Profil und vergleichen mit Ihren Top-3-Wettbewerbern in Ihrer Nische." },
    { q: "Garantieren Sie Platz 1 bei Google?", a: "Nein. Keine seriöse Agentur garantiert spezifische Positionen — Google erlaubt das nicht. Wir garantieren einen transparenten Prozess, White-Hat-Techniken und messbare organische Traffic-Wachstum." },
    { q: "Was kosten SEO-Dienstleistungen?", a: "SEO-Pakete beginnen ab 800 €/Monat für kleine Sites und skalieren basierend auf der Wettbewerbsfähigkeit der Nische. Wir bieten ein kostenloses Audit vor jedem Angebot." },
    { q: "Funktioniert SEO auch für lokale Unternehmen?", a: "Ja, lokales SEO ist eine der effektivsten Investitionen für Unternehmen mit einem physischen Standort. Wir optimieren das Google Business Profile und targeten lokale Suchanfragen." },
  ],
  testimonial: { quote: "Von Seite 4 auf die Top 3 bei Google für unsere Hauptkeywords, in 5 Monaten. Der organische Traffic wuchs um 180% und wir sind nicht mehr ausschließlich auf bezahlte Anzeigen angewiesen.", name: "Andrea M.", role: "Marketing Managerin, Fashion E-Commerce" },
  tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloses SEO-Audit Inklusive",
};

export default function SEODePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
