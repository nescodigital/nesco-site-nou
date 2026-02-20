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

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Nesco Digital | Experți în Marketing Digital și Web Design",
  description:
    "Partener premium de execuție digitală. Google Ads, Facebook Ads, Web Design, SEO și strategii de creștere, livrăm rezultate măsurabile pentru afacerea ta.",
  path: "/",
  routeKey: "home",
});

export default function HomePage() {
  const schemas = [
    orgSchema,
    websiteSchema,
    buildWebPageSchema({
      url: "https://nescodigital.com/",
      title: "Nesco Digital | Experți în Marketing Digital și Web Design",
    }),
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
