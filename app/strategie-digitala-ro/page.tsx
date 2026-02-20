import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Strategie Digitală | Construim o prezență online coerentă și eficientă | Nesco Digital",
  description: "Creăm strategii digitale personalizate care maximizează ROI. Companiile cu o strategie digitală bine definită au de 2x mai multe șanse să crească veniturile.",
  path: "/strategie-digitala-ro/",
  routeKey: "digitalStrategy",
});

const data: ServicePageData = {
  locale: "ro",
  breadcrumbCategory: "digitalMarketing",
  hero: { badge: "Strategie Digitală", title: "Strategie Digitală", subtitle: "Construim o prezență online puternică și coerentă care generează rezultate măsurabile și duce afacerea ta la nivelul următor." },
  problems: [
    { title: "Fără direcție online clară", desc: "Nu știi pe ce canale să te concentrezi sau cum să prioritizezi" },
    { title: "Rezultate slabe din campanii", desc: "Bani investiți fără rezultate concrete" },
    { title: "Dificultăți în atragerea clienților noi", desc: "Creșterea este lentă sau stagnantă" },
    { title: "Prezență online inconsistentă", desc: "Mesaje diferite pe canale diferite, fără coerență" },
  ],
  solutions: [
    { title: "Analiză și Consultanță", desc: "Înțelegem afacerea, piața și concurența ta." },
    { title: "Definirea Obiectivelor", desc: "Obiective SMART aliniate cu viziunea ta de business." },
    { title: "Identificarea Publicului Țintă", desc: "Profiluri detaliate de buyer persona." },
    { title: "Alegerea Canalelor de Promovare", desc: "Alegem canalele cu cel mai mare potențial pentru tine." },
    { title: "Crearea Planului de Acțiune", desc: "Roadmap clar cu pași, termene și KPI-uri." },
    { title: "Monitorizare și Optimizare", desc: "Urmărim progresul și ajustăm continuu." },
  ],
  cases: [
    { metric: "2x", label: "Șanse de creștere venituri", industry: "Medie clienți cu strategie" },
    { metric: "+35%", label: "Creștere lead-uri", industry: "Retail" },
    { metric: "+60%", label: "Vizibilitate online", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
};

export default function StrategieDigitalaRoPage() {
  return (<><Header locale="ro" /><main><ServicePageTemplate data={data} /></main><Footer locale="ro" /></>);
}
