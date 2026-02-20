import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Instagram Ads România | Reclame Instagram | Nesco Digital",
  description: "Campanii Instagram Ads pentru branduri ambițioase. Stories, Reels, Feed. Creștem awareness și generăm vânzări direct din Instagram.",
  path: "/instagram-ro/",
  routeKey: "instagramAds",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "paidAds",
  hero: { badge: "Instagram Ads", title: "Instagram Ads", subtitle: "Vizual, impactant, convertibil. Creăm campanii Instagram care opresc scroll-ul, construiesc dorința de brand și generează conversii reale." },
  problems: [
    { title: "Targetare vizuală greșită", desc: "Reclamele ajung la audiențe greșite, bugetul se irosește" },
    { title: "Engagement scăzut", desc: "Conținutul nu oprește scroll-ul" },
    { title: "Demografic greșit", desc: "Nu ajungi la cumpărătorii reali" },
    { title: "CPM ridicat, ROI slab", desc: "Impresii scumpe care nu convertesc" },
  ],
  solutions: [
    { title: "Strategie creative-first", desc: "Vizualuri și copy care opresc scroll-ul." },
    { title: "Targetare precisă a audienței", desc: "Lookalike audiences, interese și retargeting." },
    { title: "Reclame Stories & Reels", desc: "Formate native care par organice." },
    { title: "Integrare Shopping", desc: "Instagram Shopping pentru flux de cumpărare fluid." },
    { title: "Funneluri de retargeting", desc: "Audiențe calde convertite cu mesaje personalizate." },
    { title: "A/B testing creative", desc: "Testare continuă pentru a găsi creativul câștigător." },
  ],
  cases: [
    { metric: "+45%", label: "Îmbunătățire ROAS", industry: "E-commerce Fashion" },
    { metric: "+120%", label: "Vizite profil și salvări", industry: "Brand Lifestyle" },
    { metric: "-30%", label: "Cost per lead", industry: "Brand Beauty" },
  ],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "Email Marketing"],
};

export default function InstagramRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
