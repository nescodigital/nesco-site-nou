import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { CrmLogoTicker } from "@/components/ui/CrmLogoTicker";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Soluții CRM | Implementare și Integrare CRM | Nesco Digital",
  description: "Implementare și optimizare CRM pentru afacerea ta. HubSpot, Salesforce, soluții custom. Organizăm procesele de vânzare și relația cu clienții.",
  path: "/solutii-crm-ro/",
  routeKey: "crmSolutions",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "Soluții CRM", title: "Soluții CRM", subtitle: "Optimizează relațiile cu clienții, eficientizează procesele de vânzare și crește veniturile cu implementări CRM personalizate pentru afacerea ta." },
  problems: [
    { title: "Date dispersate despre clienți", desc: "Fără o sursă unică de adevăr pentru informațiile clienților" },
    { title: "Comunicare ineficientă", desc: "Lead-uri pierdute, follow-up-uri ratate" },
    { title: "Proces de vânzare greoi", desc: "Echipa de vânzări pierde timp pe sarcini manuale" },
    { title: "Fără vizibilitate operațională", desc: "Managementul nu poate vedea pipeline-ul sau prognoza" },
  ],
  solutions: [
    { title: "Analiză și Consultanță", desc: "Mapăm procesele actuale și identificăm soluția CRM potrivită." },
    { title: "Configurare și Personalizare", desc: "Configurăm CRM-ul pentru a se potrivi cu workflow-urile tale." },
    { title: "Integrare cu alte sisteme", desc: "Conectăm cu email, instrumente marketing, ERP și altele." },
    { title: "Migrare Date", desc: "Migrare sigură și completă a tuturor datelor existente." },
    { title: "Training și Suport", desc: "Echipa ta instruită și încrezătoare din prima zi." },
    { title: "Dezvoltare Custom", desc: "Funcționalități și automatizări personalizate când e nevoie." },
  ],
  cases: [
    { metric: "+25%", label: "Marketing Qualified Leads", industry: "IT Services" },
    { metric: "+15%", label: "Rata de retenție clienți", industry: "Retail B2C" },
    { metric: "+20%", label: "Eficiență operațională", industry: "Consultanță Business" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "Strategie Digitală"],
};

export default function CRMRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /><CrmLogoTicker /></main><Footer locale="ro" /></>);
}
