import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "Digitale Strategie | Starke und kohärente Online-Präsenz aufbauen | Nesco Digital", description: "Wir erstellen maßgeschneiderte digitale Strategien, die ROI maximieren. Unternehmen mit einer klar definierten digitalen Strategie haben doppelt so gute Chancen, ihren Umsatz zu steigern.", path: "/ge/digitale-strategie/", routeKey: "digitalStrategy" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "Digitale Strategie", title: "Digitale Strategie", subtitle: "Wir bauen eine starke und kohärente Online-Präsenz auf, die messbare Ergebnisse generiert und Ihr Unternehmen auf die nächste Stufe bringt." },
  problems: [{ title: "Keine klare Online-Richtung", desc: "Unklar, auf welche Kanäle man sich konzentrieren soll" }, { title: "Schlechte Kampagnenergebnisse", desc: "Investiertes Geld ohne konkrete Ergebnisse" }, { title: "Schwierigkeiten bei der Neukundengewinnung", desc: "Wachstum ist langsam oder stagniert" }, { title: "Inkonsistente Online-Präsenz", desc: "Verschiedene Botschaften auf verschiedenen Kanälen" }],
  solutions: [{ title: "Analyse & Beratung", desc: "Wir verstehen Ihr Unternehmen, Ihren Markt und Ihre Wettbewerber." }, { title: "Zieldefinition", desc: "SMART-Ziele, die mit Ihrer Geschäftsvision übereinstimmen." }, { title: "Zielgruppenidentifikation", desc: "Detaillierte Buyer-Persona-Profile." }, { title: "Kanalauswahl", desc: "Wir wählen Kanäle mit dem größten Potenzial für Sie." }, { title: "Aktionsplan", desc: "Klare Roadmap mit Schritten, Fristen und KPIs." }, { title: "Monitoring & Optimierung", desc: "Wir verfolgen den Fortschritt und passen kontinuierlich an." }],
  cases: [{ metric: "2x", label: "Umsatzwachstumschancen", industry: "Strategie-Kunden-Durchschnitt" }, { metric: "+35%", label: "Lead-Wachstum", industry: "Einzelhandel" }, { metric: "+60%", label: "Online-Sichtbarkeit", industry: "B2B-Dienstleistungen" }],
  omnichannelServices: ["Google Ads", "Facebook Ads", "E-Mail-Marketing", "CRO", "SEO"],
};

export default function DigitaleStrategieDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
