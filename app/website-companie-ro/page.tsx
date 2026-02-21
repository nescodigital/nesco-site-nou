import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Website Companie | Site de Prezentare Premium | Nesco Digital",
  description: "Website-uri de companie premium care reflectă valoarea brandului tău. Design modern, performanță ridicată, optimizat pentru conversii.",
  path: "/website-companie-ro/",
  routeKey: "companyWebsite",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Website Companie",
    title: "Prima impresie a companiei tale , de cele mai multe ori, site-ul tău",
    subtitle: "80% dintre potențialii clienți caută online o companie înainte de a lua legătura. Un website profesional nu este o cheltuială , este cel mai eficient agent de vânzări care lucrează pentru tine 24/7, chiar și când dormi.",
  },
  problems: [
    { title: "Potențialii clienți te caută și nu găsesc nimic convingător", desc: "Dacă site-ul tău are 5 ani sau nu există, pierzi credibilitate în fața concurenților care arată bine online. Prima impresie contează mai mult decât orice altceva." },
    { title: "Ai o pagină de Facebook, dar fără site nu ești luat în serios", desc: "O pagină de Facebook poate fi ștearsă sau blocată oricând. Un site propriu este fundamental pentru credibilitatea unui business serios." },
    { title: "Vizitatorii nu înțeleg ce faci sau de ce să te aleagă", desc: "Dacă mesajul de pe site nu este clar și convingător, potențialii clienți pleacă în 8 secunde , media de atenție a unui utilizator web." },
    { title: "Concurenții tăi arată mai profesional online", desc: "O primă impresie proastă este dificil de recuperat. Dacă site-ul tău nu exprimă încredere și profesionalism, pierzi clienți înainte să apuci să vorbești cu ei." },
  ],
  solutions: [
    { title: "Design care comunică profesionalism instantaneu", desc: "Folosim principii de psihologie vizuală pentru o primă impresie care inspiră încredere. Culorile, fonturile și imaginile sunt alese strategic." },
    { title: "Mesaj clar: ce faci, cui te adresezi, de ce tu", desc: "Scriem copy care răspunde în primele 5 secunde la întrebarea vizitatorului: \"Sunt la locul potrivit?\" și \"Îmi rezolvă asta problema mea?\"" },
    { title: "Optimizat pentru mobil , 70% din trafic vine de pe telefon", desc: "Un site care nu arată perfect pe telefon pierde majoritate traficului. Toate site-urile noastre sunt mobile-first." },
    { title: "Rapid , fiecare secundă în plus scade conversiile cu 7%", desc: "Optimizare imagini, hosting premium, cod curat. PageSpeed 90+ garantat." },
    { title: "SEO de bază inclus", desc: "Structura URL-urilor, meta tags, sitemap, Google Search Console. De la zi 1, Google poate indexa site-ul tău corect." },
    { title: "Ușor de administrat", desc: "Tu adaugi știri, case studies, angajați noi fără să știi programare. Training inclus la livrare." },
  ],
  cases: [
    { metric: "+70%", label: "Programări rezervate", industry: "Clinică Medicală" },
    { metric: "+60%", label: "Cereri de ofertă", industry: "B2B Services" },
    { metric: "Investitori atrași", label: "Credibilitate brand sporită", industry: "Tech Startup" },
    { metric: "+45%", label: "Timp petrecut pe site", industry: "Agenție de Arhitectură" },
    { metric: "4x", label: "Mai multe contacte din site", industry: "Firma de Avocatură" },
    { metric: "-55%", label: "Rată de respingere", industry: "Companie de Consultanță" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing", "CRO"],
  faq: [
    { q: "Am nevoie de un site dacă am pagină de Facebook?", a: "Absolut. O pagină de Facebook poate fi dezactivată, restricționată sau penalizată de algoritm fără avertisment. Un site propriu este singurul spațiu digital pe care îl controlezi 100%. Plus că site-ul tău poate fi găsit pe Google , Facebook nu poate fi indexat la fel." },
    { q: "Cât costă un website de companie?", a: "Depinde de complexitate: un site de 5-8 pagini (Acasă, Despre, Servicii, Blog, Contact) pornește de la 1.500-3.000€. Un site cu funcționalități avansate (calculator de ofertă, portal client, multi-limbă) poate ajunge la 5.000-15.000€. Facem estimare detaliată după discuția inițială." },
    { q: "Cât de des trebuie actualizat un site?", a: "Conținutul (știri, case studies) ar trebui actualizat lunar pentru SEO și credibilitate. Actualizările tehnice (securitate, plugin-uri) se fac lunar de noi dacă ești pe un pachet de mentenanță." },
    { q: "Pot să îmi fac singur site-ul pe Wix sau Squarespace?", a: "Poți, dar vei obține un site cu aspect semi-profesional care nu se diferențiază de concurenții care fac la fel. Site-urile custom convertesc cu 30-50% mai bine decât template-urile standard pentru că sunt construite specific pentru audiența ta și obiectivele tale de business." },
    { q: "Ce conținut trebuie să am pe site?", a: "Minim: pagina Acasă cu mesaj clar, pagina Despre cu echipa și povestea, pagina Servicii/Produse detaliată, pagina Contact cu multiple modalități de contact. Plus: testimoniale de la clienți reali, cifre și rezultate, blog cu conținut util." },
    { q: "În cât timp voi vedea rezultate?", a: "Un site bine construit îmbunătățește credibilitatea imediat (de la lansare). Traficul organic crește în 3-6 luni prin SEO. Dacă rulezi și publicitate (Google Ads, Facebook Ads), poți vedea lead-uri în prima săptămână de la lansare." },
  ],
  testimonial: { quote: "Site-ul nou s-a încărcat de 4x mai repede și rata de conversie a crescut cu 35% în prima lună. Arată exact cum ne-am imaginat, poate chiar mai bine.", name: "Elena P.", role: "Director, clinică medicală privată" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit Website Gratuit Inclus",
};

export default function WebsiteCompanieRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
