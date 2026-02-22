import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HomeFaqSection } from "@/components/sections/HomeFaqSection";
import { buildMetadata, orgSchema, websiteSchema, buildWebPageSchema } from "@/lib/seo";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CalculatorTeaser } from "@/components/sections/CalculatorTeaser";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Nesco Digital | Experți în Marketing Digital și Web Design",
  description:
    "Partener premium de execuție digitală. Google Ads, Facebook Ads, Web Design, SEO și strategii de creștere, livrăm rezultate măsurabile pentru afacerea ta.",
  path: "/",
  routeKey: "home",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cu ce tip de companii lucrați?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lucrăm cu companii care au deja un produs validat și vor să scaleze , branduri de educație online, e-commerce și B2B cu bugete de marketing de minim 3.000€/lună." },
    },
    {
      "@type": "Question",
      "name": "Cât durează până văd rezultate concrete?",
      "acceptedAnswer": { "@type": "Answer", "text": "Primele semnale apar în 2-4 săptămâni. Rezultate semnificative și măsurabile în 60-90 de zile, în funcție de serviciu și industrie." },
    },
    {
      "@type": "Question",
      "name": "Ce este Growth Sprint?",
      "acceptedAnswer": { "@type": "Answer", "text": "Growth Sprint este un engagement concentrat de 6 săptămâni în care Nesco Digital operează direct în afacerea ta , auditând și implementând cele mai importante îmbunătățiri. Nu producem rapoarte. Implementăm." },
    },
    {
      "@type": "Question",
      "name": "De ce să lucrez cu o agenție în loc să angajez intern?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un specialist senior costă 2.500-3.500€/lună plus beneficii, acoperă o singură disciplină și poate pleca oricând. Cu Nesco Digital ai o echipă cu experiență pe toate canalele, fără costuri fixe și fără să o iei de la zero când cineva pleacă." },
    },
  ],
};

export default function HomePage() {
  const schemas = [
    orgSchema,
    websiteSchema,
    buildWebPageSchema({
      url: "https://nescodigital.com/",
      title: "Nesco Digital | Experți în Marketing Digital și Web Design",
    }),
    faqSchema,
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header locale="ro" />
      <main style={{ width: "100%", display: "block" }}>
        <Hero locale="ro" />
        <ClientLogos />
        <CalculatorTeaser />
        <Solutions locale="ro" />
        <ServicesGrid locale="ro" />
        <Portfolio locale="ro" />
        <Testimonials locale="ro" />
        <HomeFaqSection locale="ro" />
        <CtaBanner locale="ro" />
      </main>
      <Footer locale="ro" />
    </>
  );
}
