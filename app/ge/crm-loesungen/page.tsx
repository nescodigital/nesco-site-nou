import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { CrmLogoTicker } from "@/components/ui/CrmLogoTicker";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "CRM Lösungen | CRM Implementierung | Nesco Digital", description: "CRM-Implementierung und -Optimierung für Ihr Unternehmen. HubSpot, Salesforce, individuelle Lösungen.", path: "/ge/crm-loesungen/", routeKey: "crmSolutions" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "CRM-Lösungen", title: "CRM-Lösungen", subtitle: "Optimieren Sie Kundenbeziehungen, rationalisieren Sie Verkaufsprozesse und steigern Sie Einnahmen mit maßgeschneiderten CRM-Implementierungen für Ihr Unternehmen." },
  problems: [{ title: "Verstreute Kundendaten", desc: "Keine einheitliche Quelle für Kundeninformationen" }, { title: "Ineffiziente Kommunikation", desc: "Leads gehen verloren, Follow-ups werden verpasst" }, { title: "Umständlicher Verkaufsprozess", desc: "Vertriebsteam verliert Zeit mit manuellen Aufgaben" }, { title: "Keine operationale Übersicht", desc: "Management kann Pipeline nicht sehen" }],
  solutions: [{ title: "Analyse & Beratung", desc: "Wir kartieren aktuelle Prozesse und identifizieren die richtige CRM-Lösung." }, { title: "Konfiguration & Anpassung", desc: "CRM wird an Ihre genauen Workflows angepasst." }, { title: "Integration mit anderen Systemen", desc: "Verbindung mit E-Mail, Marketing-Tools, ERP und mehr." }, { title: "Datenmigration", desc: "Sichere, vollständige Migration aller vorhandenen Daten." }, { title: "Training & Support", desc: "Ihr Team vom ersten Tag an trainiert und sicher." }, { title: "Custom-Entwicklung", desc: "Benutzerdefinierte Funktionen und Automatisierungen bei Bedarf." }],
  cases: [{ metric: "+25%", label: "Marketing Qualified Leads", industry: "IT-Services" }, { metric: "+15%", label: "Kundenbindungsrate", industry: "B2C-Einzelhandel" }, { metric: "+20%", label: "Operative Effizienz", industry: "Business Consulting" }],
  omnichannelServices: ["Google Ads", "Facebook Ads", "E-Mail-Marketing", "CRO", "Digitale Strategie"],
};

export default function CRMDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /><CrmLogoTicker locale="de" /></main><Footer locale="de" /></>);
}
