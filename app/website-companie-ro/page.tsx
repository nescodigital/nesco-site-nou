import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Website Companie | Website-ul tău profesional adaptat la valorile brandului | Nesco Digital",
  description: "Un website profesional adaptat nevoilor companiei și valorilor brandului tău. +70% programări, +60% cereri de ofertă.",
  path: "/website-companie-ro/",
  routeKey: "companyWebsite",
});

const data: ServicePageData = {
  locale: "ro",
  hero: { badge: "Website Companie", title: "Website Companie", subtitle: "Website-ul tău profesional, adaptat la nevoile companiei și valorile brandului tău. Prezență digitală care inspiră încredere și generează business." },
  problems: [
    { title: "Fără credibilitate online", desc: "Potențialii clienți nu au încredere fără o prezență profesională" },
    { title: "Greu de navigat", desc: "Vizitatorii nu găsesc ce caută și pleacă" },
    { title: "Aspect neprofesional", desc: "Design depășit care afectează percepția brandului" },
    { title: "Generare slabă de lead-uri", desc: "Site-ul primește trafic dar nu generează business" },
  ],
  solutions: [
    { title: "Consultanță Personalizată", desc: "Înțelegem obiectivele de business și audiența ta." },
    { title: "Arhitectură Strategică", desc: "Structura site-ului proiectată pentru UX și SEO." },
    { title: "Design Unic", desc: "Design custom care reflectă identitatea brandului tău." },
    { title: "Dezvoltare Funcțională", desc: "Dezvoltare rapidă, sigură, mobile-first." },
    { title: "Optimizare Mobile", desc: "Experiență perfectă pe toate dispozitivele." },
    { title: "Integrare Instrumente Business", desc: "CRM, email, analytics, totul conectat." },
  ],
  cases: [
    { metric: "+70%", label: "Programări rezervate", industry: "Clinică Medicală" },
    { metric: "Investitori atrași", label: "Credibilitate brand", industry: "Tech Startup" },
    { metric: "+60%", label: "Cereri de ofertă", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing", "CRO"],
  faq: [
    { q: "Cât durează să construiți un site?", a: "Un site de prezentare: 3-4 săptămâni. Un site e-commerce mediu: 6-8 săptămâni. Depinde de complexitate și cât de rapid primim materialele de la voi." },
    { q: "Pe ce platformă construiți?", a: "WordPress pentru flexibilitate și ușurință de administrare, sau Next.js pentru performanță maximă și PageSpeed 95+. Recomandăm în funcție de nevoile tale specifice." },
    { q: "Includeți și SEO în prețul site-ului?", a: "Includem SEO tehnic de bază — structura URL, meta tags, viteza de încărcare, sitemap. SEO continuu (conținut, link building) este un serviciu separat." },
    { q: "Pot să editez singur conținutul după lansare?", a: "Da, fiecare site include training de 1 oră și documentație. Poți edita texte, imagini și adăuga pagini noi fără cunoștințe tehnice." },
    { q: "Ce se întâmplă după lansare?", a: "Oferim suport tehnic 30 zile gratuit. Ulterior, pachetele de mentenanță includ actualizări, backup-uri și modificări minore lunare." },
  ],
  testimonial: { quote: "Site-ul nou s-a încărcat de 4x mai repede și rata de conversie a crescut cu 35% în prima lună. Arată exact cum ne-am imaginat, poate chiar mai bine.", name: "Elena P.", role: "Director, clinică medicală privată" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Website Gratuit Inclus",
};

export default function WebsiteCompanieRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
