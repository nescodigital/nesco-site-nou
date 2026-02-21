import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "LinkedIn Ads România | B2B Advertising | Nesco Digital",
  description: "Campanii LinkedIn Ads pentru companii B2B. Lead generation, brand awareness, retargeting. Ajungem la decidenți și profesioniști.",
  path: "/reclame-platite/linkedin-ads/",
  routeKey: "linkedinAds",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "Ajunge direct la factorii de decizie cu LinkedIn Ads",
    subtitle: "LinkedIn este singura platformă unde poți targeta după job title, industrie, dimensiunea companiei și senioritate. Dacă vânzarea ta implică mai mulți decidenți și un ciclu lung, LinkedIn transformă modul în care generezi lead-uri B2B.",
  },
  problems: [
    { title: "Lead-urile de pe alte platforme nu au calitate B2B", desc: "Un utilizator de pe Facebook nu este neapărat factorul de decizie pentru un contract enterprise. LinkedIn știe exact cine este CEO, CFO sau IT Director." },
    { title: "Nu poți ajunge la C-suite prin cold email", desc: "Directorii blochează apelurile nesolicitate. Pe LinkedIn, mesajul tău apare în feed-ul lor profesional, în contextul potrivit." },
    { title: "Ciclul de vânzare este lung și ai nevoie de nurturing", desc: "Vânzările B2B complexe iau 3-12 luni. LinkedIn permite construirea relației prin conținut și mesagerie directă pe parcursul întregului ciclu." },
    { title: "Concurenții tăi investesc deja în LinkedIn", desc: "Dacă afacerea ta este B2B și nu ești pe LinkedIn Ads, pierzi vizibilitate în fața decidenților pe care îi urmărești." },
  ],
  solutions: [
    { title: "Targetare exactă B2B", desc: "Job title (CEO, CFO, Head of Marketing), senioritate, industrie, dimensiunea companiei. Nivelul de precizie imposibil de atins pe alte platforme." },
    { title: "Sponsored Content , Thought leadership în feed", desc: "Articole, video-uri și caruseluri care construiesc autoritatea brandului tău în fața publicului B2B vizat." },
    { title: "Message Ads , Direct în inbox", desc: "Mesaje personalizate direct în inbox-ul LinkedIn al decidenților. Rată de deschidere de 50-60% față de 20% la email rece." },
    { title: "Lead Gen Forms , Captare fără fricțiune", desc: "Formulare native pre-completate cu datele profilului LinkedIn. Transformă interesul în lead-uri calificate cu un singur click." },
    { title: "Account-Based Marketing (ABM)", desc: "Targetezi direct companiile de vis după nume. LinkedIn afișează reclamele tale angajaților companiilor selectate." },
    { title: "Retargeting și audiențe similare", desc: "Re-engajăm vizitatorii site-ului și creăm audiențe lookalike bazate pe clienții tăi existenți." },
  ],
  cases: [
    { metric: "+150%", label: "Lead-uri B2B calificate", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL față de alte canale", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Oportunități generate", industry: "B2B Services" },
    { metric: "60%", label: "Rată de deschidere Message Ads", industry: "Consultanță" },
    { metric: "-35%", label: "Cost per oportunitate calificată", industry: "IT Services" },
    { metric: "3x MQL", label: "Marketing Qualified Leads", industry: "SaaS B2B" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Strategie Digitală", "SEO"],
  faq: [
    { q: "De ce LinkedIn este mai scump decât Facebook sau Google?", a: "CPM-ul pe LinkedIn este mai mare, dar calitatea lead-ului este incomparabilă. Un lead B2B calificat din LinkedIn valorează de 5-10x mai mult decât unul de pe Facebook. Calculând costul per oportunitate calificată, LinkedIn este adesea mai ieftin." },
    { q: "De cât buget am nevoie pentru LinkedIn Ads?", a: "Recomandăm minimum 800-1000€/lună în buget de reclame. LinkedIn impune un bid minim mai mare decât alte platforme. Sub această sumă, reach-ul este prea limitat pentru a genera date relevante." },
    { q: "Funcționează pentru companiile mici?", a: "Depinde de ce vinzi. Dacă produsul sau serviciul tău costă minimum 5.000€ pe client, LinkedIn este justificat chiar și pentru IMM-uri. Dacă vinzi produse de volum mic sau mediu, alte platforme sunt mai eficiente cost/beneficiu." },
    { q: "Cum știu că ajung la decidenți reali, nu la angajați juniori?", a: "LinkedIn are verificare de identitate prin contul personal. Putem seta excluderi de senioritate (excluzând entry-level și associate) și targetăm explicit Director, VP, C-level, Owner, Partner. Raportul demografic al campaniei confirmă cine a văzut reclamele." },
    { q: "Cât durează până generez lead-uri?", a: "Primele lead-uri apar de obicei în 2-4 săptămâni. Dar LinkedIn funcționează pe principiul nurturing: decidenții trebuie să vadă brandul tău de mai multe ori înainte de a acționa. Rezultatele complete apar în 60-90 zile." },
    { q: "Pot folosi LinkedIn Ads fără a posta conținut pe pagina companiei?", a: "Da, reclamele Sponsored Content funcționează independent de activitatea organică a paginii. Dar o pagină activă mărește credibilitatea și reduce CPM-ul deoarece utilizatorii pot verifica compania." },
  ],
  testimonial: { quote: "Generam 3-4 lead-uri B2B pe lună din toate sursele. După 90 de zile de LinkedIn Ads cu Nesco, generăm 18-22 de lead-uri calificate lunar, cu un ciclu de vânzare cu 30% mai scurt.", name: "Cristian V.", role: "Sales Director, companie de software enterprise" },
  tools: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Sales Navigator", "Google Analytics 4", "Looker Studio"],
  toolsSectionTitle: "INSTRUMENTELE PE CARE LE FOLOSIM",
  freeAuditBadge: "Audit LinkedIn Ads Gratuit Inclus",
};

export default function LinkedInRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
