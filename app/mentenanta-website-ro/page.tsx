import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Mentenanță Website | Site-ul tău mereu rapid, sigur și online | Nesco Digital",
  description: "Mentenanță website profesională, securitate, performanță, backup și suport tehnic. Uptime 99.9% garantat.",
  path: "/mentenanta-website-ro/",
  routeKey: "websiteMaintenance",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "webdesign",
  hero: { badge: "Mentenanță Website", title: "Mentenanță Website", subtitle: "Menținem site-ul tău rapid, sigur și mereu la performanță maximă. Gestionăm aspectul tehnic ca tu să te poți concentra pe afacere." },
  problems: [
    { title: "Vulnerabilități de securitate", desc: "Plugin-uri și CMS depășite creează riscuri de hacking" },
    { title: "Timpi de încărcare lenți", desc: "Degradarea performanței în timp ucide conversiile" },
    { title: "Conflicte de plugin-uri", desc: "Update-urile strică funcționalitățile fără avertisment" },
    { title: "Fără strategie de backup", desc: "Un incident poate însemna pierderea totală" },
  ],
  solutions: [
    { title: "Monitorizare Securitate", desc: "Scanare malware 24/7 și protecție firewall." },
    { title: "Optimizare Performanță", desc: "Audituri periodice de viteză și optimizare." },
    { title: "Update-uri Regulate", desc: "CMS, plugin-uri, teme menținute la zi în siguranță." },
    { title: "Backup-uri Zilnice", desc: "Backup-uri automate cu istoric de 30 zile." },
    { title: "Monitorizare Uptime", desc: "Alerte instant dacă site-ul se oprește." },
    { title: "Suport Tehnic", desc: "Suport prioritar pentru orice problemă tehnică." },
  ],
  cases: [
    { metric: "99.9%", label: "Uptime garantat", industry: "Magazine Online" },
    { metric: "-60%", label: "Reducere timp de încărcare", industry: "Site Corporativ" },
    { metric: "0 incidente", label: "Breșe de securitate prevenite", industry: "SaaS Platform" },
  ],
  omnichannelServices: ["Web Design", "SEO", "CRO", "Google Ads", "Email Marketing"],
};

export default function MentenantaWebsiteRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
