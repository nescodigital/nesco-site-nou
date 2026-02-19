import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "Social-Media-Lösungen | Markensichtbarkeit durch Social Media steigern | Nesco Digital", description: "Wir steigern die Sichtbarkeit Ihrer Marke, bauen Communities auf und steigern den Umsatz durch maßgeschneiderte Social-Media-Strategien.", path: "/ge/social-media-loesungen/", routeKey: "socialMedia" });

const data: ServicePageData = {
  locale: "de",
  hero: { badge: "Social Media", title: "Social-Media-Lösungen", subtitle: "Wir steigern die Sichtbarkeit Ihrer Marke, bauen Communities auf und steigern den Umsatz durch maßgeschneiderte Social-Media-Strategien mit messbaren Ergebnissen." },
  problems: [{ title: "Unklare Strategie", desc: "Posting ohne Plan, keine Ergebnisse" }, { title: "Schlechte Inhaltsqualität", desc: "Content, der nicht engagiert oder konvertiert" }, { title: "Niedriges Engagement", desc: "Follower, die nicht interagieren oder kaufen" }, { title: "Schwache Social-Anzeigen", desc: "Paid-Social-Ausgaben ohne klaren ROI" }],
  solutions: [{ title: "Analyse & Strategie", desc: "Maßgeschneiderte Social-Media-Strategie basierend auf Zielgruppe und Zielen." }, { title: "Ansprechenden Content erstellen", desc: "Visueller und geschriebener Content, der den Scroll stoppt." }, { title: "Account-Management", desc: "Professionelle und konsistente Verwaltung Ihrer Konten." }, { title: "Bezahlte Kampagnen", desc: "Social-Ads, die konvertieren, nicht nur Impressions." }, { title: "Monitoring & Analyse", desc: "Wöchentliches Reporting, was funktioniert." }, { title: "Community-Wachstum", desc: "Aufbau einer treuen Community rund um Ihre Marke." }],
  cases: [{ metric: "+150%", label: "Follower-Wachstum", industry: "Fashion-Marke" }, { metric: "+80%", label: "Engagement-Rate", industry: "Lifestyle-Marke" }, { metric: "+45%", label: "Traffic aus Social", industry: "E-Commerce" }],
  omnichannelServices: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "E-Mail-Marketing", "CRO"],
};

export default function SocialMediaDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
