import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "Website Wartung | Technischer Support | Nesco Digital", description: "Website-Wartungsservices: Updates, Sicherheit, Backup, Geschwindigkeitsoptimierung. Ihre Website sicher und leistungsfähig.", path: "/ge/website-wartung/", routeKey: "websiteMaintenance" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "webdesign",
  hero: { badge: "Website-Wartung", title: "Website-Wartung", subtitle: "Halten Sie Ihre Website schnell, sicher und immer auf Hochleistung. Wir kümmern uns um die technische Seite, damit Sie sich auf Ihr Wachstum konzentrieren können." },
  problems: [{ title: "Sicherheitslücken", desc: "Veraltete Plugins und CMS schaffen Hacking-Risiken" }, { title: "Langsame Ladezeiten", desc: "Leistungsabfall schadet Conversions" }, { title: "Plugin-Konflikte", desc: "Updates brechen Funktionalitäten ohne Warnung" }, { title: "Keine Backup-Strategie", desc: "Ein Vorfall könnte alles bedeuten" }],
  solutions: [{ title: "Sicherheitsüberwachung", desc: "24/7 Malware-Scanning und Firewall-Schutz." }, { title: "Leistungsoptimierung", desc: "Regelmäßige Geschwindigkeitsaudits und Optimierung." }, { title: "Regelmäßige Updates", desc: "CMS, Plugins, Themes sicher auf dem neuesten Stand gehalten." }, { title: "Tägliche Backups", desc: "Automatisierte Backups mit 30-Tage-Verlauf." }, { title: "Uptime-Monitoring", desc: "Sofortige Benachrichtigungen, wenn Ihre Website ausfällt." }, { title: "Technischer Support", desc: "Prioritätssupport für alle technischen Probleme." }],
  cases: [{ metric: "99,9%", label: "Uptime-Garantie", industry: "E-Commerce-Shop" }, { metric: "-60%", label: "Reduzierung der Ladezeit", industry: "Unternehmenswebsite" }, { metric: "0 Vorfälle", label: "Verhinderte Sicherheitsverletzungen", industry: "SaaS-Plattform" }],
  omnichannelServices: ["Webdesign", "SEO", "CRO", "Google Ads", "E-Mail-Marketing"],
};

export default function WebsiteWartungDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
