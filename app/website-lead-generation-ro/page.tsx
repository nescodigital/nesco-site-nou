import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Site Lead Generation | Website care Convertește | Nesco Digital",
  description: "Site-uri de lead generation construite strategic. Landing pages optimizate, formulare de contact, integrări CRM. Transformăm vizitatorii în lead-uri calificate.",
  path: "/website-lead-generation-ro/",
  routeKey: "leadGenWebsite",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Website Lead Generation",
    title: "Transformă site-ul tău în cel mai bun agent de vânzări , activ 24/7",
    subtitle: "Un site de lead generation nu este un site de prezentare cu un formular de contact. Este un sistem construit strategic pentru a atrage vizitatori, a le construi încrederea și a-i transforma în clienți potențiali calificați , non-stop.",
  },
  problems: [
    { title: "Site-ul tău e o broșură digitală, nu un motor de vânzări", desc: "Prezintă cine ești și ce faci, dar nu convinge vizitatorul să ia o acțiune. Lipsesc elementele care transformă curiozitatea în contact." },
    { title: "Vizitatorii vin și pleacă fără să lase date", desc: "Fără un mecanism clar de captare (formular, număr vizibil, chat live), 98% din vizitatori dispar pentru totdeauna." },
    { title: "Mesajul nu răspunde la \"De ce tu?\"", desc: "Dacă vizitatorul nu înțelege în primele 5 secunde ce beneficiu unic îi oferi, va căuta la concurenți." },
    { title: "Nu știi câte lead-uri generează (sau nu generează) site-ul", desc: "Fără tracking și analytics corecte, conduci cu ochii închiși , nu știi ce pagini atrag și care resping vizitatorii." },
  ],
  solutions: [
    { title: "Strategie de conversie bazată pe date", desc: "Analizăm comportamentul vizitatorilor existenți, identificăm unde pleacă și proiectăm un site care ghidează natural spre acțiune." },
    { title: "Copy persuasiv , cuvintele care conving", desc: "Nu scriem \"Suntem lideri cu experiență\". Scriem mesaje clare, centrate pe beneficii, care răspund la obiecțiile reale ale clienților tăi." },
    { title: "Design centrat pe conversie", desc: "Structura vizuală ghidează ochiul vizitatorului spre CTA. Butoane strategice, formulare simple, dovezi sociale (testimoniale, cifre, logo-uri clienți)." },
    { title: "Landing pages specializate", desc: "Pentru fiecare serviciu sau produs, o pagina cu un singur scop: conversie. Performanța este de 2-3x mai bună față de paginile generale." },
    { title: "Formulare inteligente", desc: "Formulare multi-step care cer mai puțin la fiecare pas, convertesc mai mult. Integrăm cu CRM-ul tău sau cu email pentru notificări instant." },
    { title: "Analytics și optimizare continuă", desc: "Instalăm tracking complet (Google Analytics, heatmaps) și optimizăm continuu: titluri, imagini, formulare, CTA-uri bazat pe comportamentul real." },
  ],
  cases: [
    { metric: "+47%", label: "Cereri de ofertă", industry: "Consultanță IT" },
    { metric: "+80%", label: "Lead-uri calificate", industry: "Clinică Stomatologică" },
    { metric: "3.8x ROI", label: "Return din publicitate", industry: "Servicii B2B" },
    { metric: "+50%", label: "Programări online", industry: "Clinică Medicală" },
    { metric: "+160%", label: "Abonați newsletter", industry: "Sală de Fitness" },
    { metric: "-42%", label: "Cost per lead", industry: "Agenție Imobiliară" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
  faq: [
    { q: "Care e diferența dintre un site de prezentare și un site de lead generation?", a: "Un site de prezentare spune cine ești. Un site de lead generation convinge un vizitator nehotărât să ia acțiune , să sune, să trimită un formular, să rezerve o întâlnire. Diferența stă în: copy convingător, structura paginilor, formulare optimizate și dovezi sociale strategice." },
    { q: "Am deja un site, trebuie să-l fac de la zero?", a: "Nu întotdeauna. Uneori e suficient un redesign strategic: schimbăm structura, îmbunătățim copywriting-ul și optimizăm formulare. Facem audit gratuit și îți spunem cinstit dacă ai nevoie de un site nou sau de îmbunătățiri." },
    { q: "Pe ce platformă construiți site-ul?", a: "Recomandăm WordPress pentru flexibilitate și ușurință de administrare, sau Next.js pentru performanță maximă și PageSpeed 95+. Alegem platforma după nevoile tale , nu o recomandare universală." },
    { q: "Cât durează să construiți un site de lead generation?", a: "Tipic: 4-6 săptămâni pentru un site cu 5-10 pagini. Aceasta include: audit și strategie (1 săptămână), design (1-2 săptămâni), dezvoltare (1-2 săptămâni) și testare/lansare (1 săptămână). Durata exactă depinde de complexitate." },
    { q: "Ce se întâmplă dacă site-ul nou nu generează mai multe lead-uri?", a: "Avem o politică de transparență totală. Dacă în 60 de zile de la lansare rata de conversie nu s-a îmbunătățit, refacem gratuit orice element identificat ca problemă , bazat pe date, nu pe opinii." },
    { q: "Includeți SEO în prețul site-ului?", a: "Includem SEO tehnic de bază: structura URL-urilor, meta tags, viteza de încărcare, sitemap și configurare Google Search Console. SEO continuu (crearea de conținut, link building) este un serviciu separat, dar recomandat pentru sustenabilitate pe termen lung." },
    { q: "Pot edita singur conținutul după lansare?", a: "Da. Fiecare site include training de 1 oră și documentație scrisă. Poți edita texte, imagini și adăuga pagini noi fără cunoștințe tehnice. Pentru modificări mai complexe, avem pachete de suport lunar." },
  ],
  testimonial: { quote: "Site-ul nou s-a încărcat de 4x mai repede și rata de conversie a crescut cu 35% în prima lună. Arată exact cum ne-am imaginat, poate chiar mai bine.", name: "Elena P.", role: "Director, clinică medicală privată" },
  tools: ["Figma", "Next.js", "WordPress", "Hotjar", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Website Gratuit Inclus",
};

export default function LeadGenRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
