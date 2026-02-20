import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "Lead-Generation-Website | Besucher in wertvolle potenzielle Kunden umwandeln | Nesco Digital", description: "Eine effektive Lead-Generation-Website erhöht Ihre Conversion-Rate um bis zu 40% und generiert mehr qualifizierte Leads.", path: "/ge/lead-generation-website-de/", routeKey: "leadGenWebsite" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "webdesign",
  hero: { badge: "Lead-Generation-Website", title: "Lead-Generation-Website", subtitle: "Besucher in wertvolle potenzielle Kunden umwandeln. Wir bauen hochkonvertierende Websites, die rund um die Uhr qualifizierte Leads generieren." },
  problems: [{ title: "Hoher Traffic, niedrige Conversions", desc: "Tausende Besucher werden keine Leads" }, { title: "Unattraktives oder veraltetes Design", desc: "Website spiegelt Servicequalität nicht wider" }, { title: "Keine klare Botschaft", desc: "Besucher verstehen nicht, was Sie anbieten" }, { title: "Zu komplexe Formulare", desc: "Potenzielle Kunden geben vor dem Absenden auf" }],
  solutions: [{ title: "Analyse & Recherche", desc: "Wir verstehen Ihre Zielgruppe und ihr Kaufverhalten." }, { title: "Lead-Gen-Strategie", desc: "Klarer Plan zur Gewinnung und Konvertierung qualifizierter Leads." }, { title: "Ansprechender Content", desc: "Copy und Design, die Besucher zum Handeln überzeugen." }, { title: "Optimierte Formulare", desc: "Einfache Formulare, die Ausfüllungen maximieren." }, { title: "Conversion-Landing-Pages", desc: "Seiten, die ausschließlich für maximale Conversions gebaut sind." }, { title: "Tracking & Optimierung", desc: "Jede Conversion verfolgen und kontinuierlich optimieren." }],
  cases: [{ metric: "+50%", label: "Steigerung Online-Termine", industry: "Zahnarztpraxis" }, { metric: "+47%", label: "Steigerung Angebotsanfragen", industry: "IT-Beratung" }, { metric: "+160%", label: "Newsletter-Abonnenten-Wachstum", industry: "Fitnessstudio" }],
  omnichannelServices: ["Google Ads", "Facebook Ads", "E-Mail-Marketing", "CRO", "SEO"],
  faq: [
    { q: "Wie lange dauert es, eine Website zu bauen?", a: "Eine Präsentationswebsite: 3-4 Wochen. Eine durchschnittliche E-Commerce-Website: 6-8 Wochen. Es hängt von der Komplexität und der Geschwindigkeit ab, mit der wir Materialien von Ihnen erhalten." },
    { q: "Auf welcher Plattform bauen Sie?", a: "WordPress für Flexibilität und einfache Verwaltung, oder Next.js für maximale Performance und PageSpeed 95+. Wir empfehlen basierend auf Ihren spezifischen Bedürfnissen." },
    { q: "Ist SEO im Website-Preis inbegriffen?", a: "Wir beinhalten grundlegendes technisches SEO — URL-Struktur, Meta-Tags, Ladegeschwindigkeit, Sitemap. Kontinuierliches SEO (Content, Link Building) ist ein separater Service." },
    { q: "Kann ich den Content nach dem Launch selbst bearbeiten?", a: "Ja, jede Website beinhaltet eine 1-stündige Schulung und Dokumentation. Sie können Texte, Bilder bearbeiten und neue Seiten ohne technische Kenntnisse hinzufügen." },
    { q: "Was passiert nach dem Launch?", a: "Wir bieten 30 Tage kostenlosen technischen Support. Danach beinhalten Wartungspakete Updates, Backups und kleinere monatliche Änderungen." },
  ],
  testimonial: { quote: "Die neue Website lud 4x schneller und die Conversion-Rate stieg im ersten Monat um 35%. Es sieht genau so aus, wie wir es uns vorgestellt haben, vielleicht sogar besser.", name: "Elena P.", role: "Direktorin, private Privatklinik" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloses Website-Audit Inklusive",
};

export default function LeadGenDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
