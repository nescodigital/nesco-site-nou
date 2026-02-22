import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "Unternehmenswebsite | Premium Business Website | Nesco Digital", description: "Premium Unternehmenswebsites, die den Wert Ihrer Marke widerspiegeln. Modernes Design, hohe Performance, konversionsoptimiert.", path: "/ge/unternehmens-website/", routeKey: "companyWebsite" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "webdesign",
  hero: { badge: "Unternehmens-Website", title: "Unternehmens-Website", subtitle: "Ihre professionelle Website, maßgeschneidert für die Bedürfnisse Ihres Unternehmens und Ihre Markenwerte. Digitale Präsenz, die Vertrauen aufbaut." },
  problems: [{ title: "Keine Online-Glaubwürdigkeit", desc: "Potenzielle Kunden vertrauen ohne professionelle Präsenz nicht" }, { title: "Schwer zu navigieren", desc: "Besucher finden nicht, was sie brauchen" }, { title: "Unprofessionelles Erscheinungsbild", desc: "Veraltetes Design schadet der Markenwahrnehmung" }, { title: "Schwache Lead-Generierung", desc: "Website bekommt Traffic, generiert aber kein Geschäft" }],
  solutions: [{ title: "Persönliche Beratung", desc: "Wir verstehen Ihre Geschäftsziele und Zielgruppe." }, { title: "Strategische Architektur", desc: "Site-Struktur für UX und SEO konzipiert." }, { title: "Einzigartiges Design", desc: "Custom-Design, das Ihre Markenidentität widerspiegelt." }, { title: "Funktionale Entwicklung", desc: "Schnelle, sichere, mobile-first Entwicklung." }, { title: "Mobile-Optimierung", desc: "Perfekte Erfahrung auf allen Geräten." }, { title: "Business-Tool-Integration", desc: "CRM, E-Mail, Analytics, alles verbunden." }],
  cases: [{ metric: "+70%", label: "Gebuchte Termine", industry: "Medizinische Klinik" }, { metric: "Investoren gewonnen", label: "Marken-Glaubwürdigkeit", industry: "Tech-Startup" }, { metric: "+60%", label: "Angebotsanfragen", industry: "B2B-Dienstleistungen" }],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "E-Mail-Marketing", "CRO"],
  faq: [
    { q: "Wie lange dauert es, eine Website zu bauen?", a: "Eine Präsentationswebsite: 3-4 Wochen. Eine durchschnittliche E-Commerce-Website: 6-8 Wochen. Es hängt von der Komplexität und der Geschwindigkeit ab, mit der wir Materialien von Ihnen erhalten." },
    { q: "Auf welcher Plattform bauen Sie?", a: "WordPress für Flexibilität und einfache Verwaltung, oder Next.js für maximale Performance und PageSpeed 95+. Wir empfehlen basierend auf Ihren spezifischen Bedürfnissen." },
    { q: "Ist SEO im Website-Preis inbegriffen?", a: "Wir beinhalten grundlegendes technisches SEO, URL-Struktur, Meta-Tags, Ladegeschwindigkeit, Sitemap. Kontinuierliches SEO (Content, Link Building) ist ein separater Service." },
    { q: "Kann ich den Content nach dem Launch selbst bearbeiten?", a: "Ja, jede Website beinhaltet eine 1-stündige Schulung und Dokumentation. Sie können Texte, Bilder bearbeiten und neue Seiten ohne technische Kenntnisse hinzufügen." },
    { q: "Was passiert nach dem Launch?", a: "Wir bieten 30 Tage kostenlosen technischen Support. Danach beinhalten Wartungspakete Updates, Backups und kleinere monatliche Änderungen." },
  ],
  testimonial: { quote: "Die neue Website lud 4x schneller und die Conversion-Rate stieg im ersten Monat um 35%. Es sieht genau so aus, wie wir es uns vorgestellt haben, vielleicht sogar besser.", name: "Elena P.", role: "Direktorin, private Privatklinik" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "UNSERE TOOLS",
  freeAuditBadge: "Kostenloses Website-Audit Inklusive",
};

export default function UnternehmensWebsiteDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
