import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "Instagram Ads | Visuell wirkungsvolle Kampagnen | Nesco Digital", description: "Visuell, wirkungsvoll, konvertierend. Wir erstellen Instagram-Kampagnen, die den Scroll stoppen und echte Ergebnisse liefern.", path: "/ge/instagram-de/", routeKey: "instagramAds" });

const data: ServicePageData = {
  locale: "de",
  breadcrumbCategory: "paidAds",
  hero: { badge: "Instagram Ads", title: "Instagram Ads", subtitle: "Visuell, wirkungsvoll, konvertierend. Wir erstellen Instagram-Kampagnen, die den Scroll stoppen, Markenwunsch aufbauen und echte Conversions erzielen." },
  problems: [{ title: "Schlechtes visuelles Targeting", desc: "Anzeigen erreichen falsche Zielgruppen" }, { title: "Niedriges Engagement", desc: "Inhalt stoppt den Scroll nicht" }, { title: "Falsche Demografien", desc: "Echte Käufer werden nicht erreicht" }, { title: "Hoher CPM, niedriger ROI", desc: "Teure Impressions, die nicht konvertieren" }],
  solutions: [{ title: "Creative-First-Strategie", desc: "Scroll-stoppende Visuals und Copy." }, { title: "Präzises Audience-Targeting", desc: "Lookalike Audiences, Interessen und Retargeting." }, { title: "Stories & Reels Ads", desc: "Native Formate, die organisch wirken." }, { title: "Shopping-Integration", desc: "Instagram Shopping für nahtlosen Kauffluss." }, { title: "Retargeting-Funnels", desc: "Warme Zielgruppen mit personalisierten Botschaften konvertieren." }, { title: "Creative A/B-Testing", desc: "Kontinuierliches Testen für das beste Creative." }],
  cases: [{ metric: "+45%", label: "ROAS-Verbesserung", industry: "Fashion E-Commerce" }, { metric: "+120%", label: "Profilbesuche & Saves", industry: "Lifestyle-Marke" }, { metric: "-30%", label: "Cost per Lead", industry: "Beauty-Marke" }],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "E-Mail-Marketing"],
};

export default function InstagramDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
