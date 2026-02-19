import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ locale: "de", title: "TikTok Ads | Gen Z und Millennials kreativ erreichen | Nesco Digital", description: "Erreichen Sie Gen Z und Millennials mit authentischen, kreativen TikTok-Kampagnen, die virales Wachstum und messbare Conversions generieren.", path: "/ge/tiktok-de/", routeKey: "tiktokAds" });

const data: ServicePageData = {
  locale: "de",
  hero: { badge: "TikTok Ads", title: "TikTok Ads", subtitle: "Erreichen Sie Gen Z und Millennials mit authentischen, kreativen Kampagnen, die schnellst wachsende Plattform für die nächste Generation." },
  problems: [{ title: "Fehlen auf der schnellst wachsenden Plattform", desc: "Wettbewerber sind bereits auf TikTok" }, { title: "Geringes Brand-Bewusstsein bei jungen Zielgruppen", desc: "Die nächste Generation von Käufern wird nicht erreicht" }, { title: "Creative-Content-Herausforderungen", desc: "TikTok erfordert nativen, authentischen Content" }, { title: "Unklarer ROI aus TikTok", desc: "Schwierig zu messen und zu optimieren" }],
  solutions: [{ title: "TikTok-Strategie", desc: "Plattformspezifische Strategie für maximalen Impact." }, { title: "Native Creative-Produktion", desc: "Content, der organisch wirkt, nicht wie Werbung." }, { title: "Spark Ads", desc: "Besten organischen Content mit bezahlter Reichweite verstärken." }, { title: "In-Feed & TopView", desc: "Maximale Sichtbarkeitsformate für Markteinführungen." }, { title: "Audience-Targeting", desc: "Präzises Verhaltens- und Interessen-Targeting." }, { title: "Performance-Tracking", desc: "Vollständige Attribution und ROAS-Messung." }],
  cases: [{ metric: "+300%", label: "Brand-Awareness-Lift", industry: "DTC-Konsumentenmarke" }, { metric: "2,5x ROAS", label: "Return on Ad Spend", industry: "Fashion E-Commerce" }, { metric: "+400%", label: "Follower in 60 Tagen", industry: "Lifestyle-Marke" }],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "E-Mail-Marketing", "CRO"],
};

export default function TikTokDePage() {
  return (<><Header locale="de" /><main><ServicePageTemplate data={data} /></main><Footer locale="de" /></>);
}
