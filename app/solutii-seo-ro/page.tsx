import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "SEO România | Optimizare Motoare de Căutare | Nesco Digital",
  description: "Servicii SEO complete: audit tehnic, optimizare on-page, link building, SEO local. Creștem traficul organic și vizibilitatea în Google.",
  path: "/solutii-seo-ro/",
  routeKey: "seoSolutions",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "Soluții SEO", title: "Soluții SEO", subtitle: "Clasează-te mai sus pe Google, atrage trafic organic de calitate și construiește creștere durabilă pe termen lung, fără să plătești pentru fiecare click." },
  problems: [
    { title: "Fără vizibilitate pe Google", desc: "Clienții ideali nu te pot găsi online" },
    { title: "Concurența te depășește", desc: "Competitorii iau traficul care ar trebui să fie al tău" },
    { title: "Trafic organic scăzut", desc: "Dependență de reclame plătite fără fundație organică" },
    { title: "SEO tehnic slab", desc: "Probleme de site care împiedică Google să te indexeze corect" },
  ],
  solutions: [
    { title: "Audit SEO Tehnic", desc: "Crawl complet pentru a identifica și rezolva orice problemă tehnică." },
    { title: "Cercetare Cuvinte Cheie", desc: "Cuvinte cheie cu intenție ridicată pe care cumpărătorii le caută." },
    { title: "Optimizare On-Page", desc: "Fiecare pagină optimizată pentru clasamente și conversii." },
    { title: "Link Building", desc: "Backlink-uri de autoritate înaltă care fac diferența." },
    { title: "Strategie de Conținut", desc: "Conținut SEO care se clasează și convertește." },
    { title: "SEO Local", desc: "Domină căutările locale pentru zona ta." },
  ],
  cases: [
    { metric: "Top 3", label: "Clasamente Google în 90 zile", industry: "SaaS Platform" },
    { metric: "+200%", label: "Trafic organic în 6 luni", industry: "E-commerce" },
    { metric: "+150%", label: "Lead-uri calificate din SEO", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "CRO", "Web Design", "Email Marketing", "Strategie Digitală"],
  faq: [
    { q: "Cât durează până văd rezultate SEO?", a: "Primele îmbunătățiri de ranking apar în 60-90 de zile. Rezultate semnificative de trafic organic în 4-6 luni. SEO este o investiție pe termen lung cu efecte cumulative." },
    { q: "Ce include auditul SEO gratuit?", a: "Analizăm structura tehnică a site-ului, viteza de încărcare, cuvintele cheie curente, profilul de backlink-uri și comparăm cu top 3 competitori din nișa ta." },
    { q: "Garantați poziția 1 în Google?", a: "Nu. Nicio agenție serioasă nu garantează poziții specifice , Google nu permite asta. Garantăm un proces transparent, tehnici white-hat și creștere măsurabilă a traficului organic." },
    { q: "Cât costă serviciile SEO?", a: "Pachetele SEO încep de la 800€/lună pentru site-uri mici și cresc în funcție de competitivitatea nișei și volumul de muncă necesar. Oferim audit gratuit înainte de orice propunere." },
    { q: "Funcționează SEO și pentru business-uri locale?", a: "Da, SEO local este una dintre cele mai eficiente investiții pentru business-uri cu locație fizică. Optimizăm Google Business Profile, cităm NAP consistent și targetăm căutări locale." },
  ],
  testimonial: { quote: "De la pagina 4 la top 3 în Google pentru cuvintele noastre cheie principale, în 5 luni. Traficul organic a crescut cu 180% și nu mai depindem exclusiv de reclame plătite.", name: "Andreea M.", role: "Marketing Manager, e-commerce fashion" },
  tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit SEO Gratuit Inclus",
};

export default function SEORoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
