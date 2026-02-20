import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Website Lead Generation | Transformă vizitatorii în clienți valoroși | Nesco Digital",
  description: "Un website eficient de lead generation crește rata de conversie cu până la 40%, generând mai multe lead-uri calificate. Investiție pe termen lung.",
  path: "/website-lead-generation-ro/",
  routeKey: "leadGenWebsite",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "webdesign",
  hero: { badge: "Website Lead Generation", title: "Website Lead Generation", subtitle: "Transformăm vizitatorii în clienți valoroși. Construim website-uri cu conversie ridicată care generează lead-uri calificate 24/7." },
  problems: [
    { title: "Trafic mare, conversii mici", desc: "Mii de vizitatori care nu devin lead-uri" },
    { title: "Design neatractiv sau depășit", desc: "Site-ul nu reflectă calitatea serviciilor tale" },
    { title: "Mesaj neclar și nepersuasiv", desc: "Vizitatorii nu înțeleg ce oferi sau de ce să te aleagă" },
    { title: "Formulare prea complexe", desc: "Potențialii clienți abandoneaza înainte de a trimite" },
  ],
  solutions: [
    { title: "Analiză și Cercetare", desc: "Înțelegem audiența ta și comportamentul de cumpărare." },
    { title: "Strategie Lead Generation", desc: "Plan clar pentru a atrage și converti lead-uri calificate." },
    { title: "Conținut Angajant", desc: "Copy și design care conving vizitatorii să acționeze." },
    { title: "Formulare Optimizate", desc: "Formulare simple care maximizează completările." },
    { title: "Landing Pages de Conversie", desc: "Pagini construite exclusiv pentru conversii maxime." },
    { title: "Tracking și Optimizare", desc: "Urmărim fiecare conversie și optimizăm continuu." },
  ],
  cases: [
    { metric: "+50%", label: "Creștere programări online", industry: "Clinică Dentară" },
    { metric: "+47%", label: "Creștere cereri de ofertă", industry: "Consultanță IT" },
    { metric: "+160%", label: "Creștere abonați newsletter", industry: "Sală de Fitness" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
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

export default function LeadGenRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
