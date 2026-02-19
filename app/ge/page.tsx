import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { buildMetadata, orgSchema, buildWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Nesco Digital | Experten für digitales Marketing & Web",
  description:
    "Premium Digital-Wachstumspartner. Google Ads, Facebook Ads, Webdesign, SEO und Wachstumsstrategien, wir liefern messbare Ergebnisse für Ihr Unternehmen.",
  path: "/ge/",
  routeKey: "home",
});

export default function DeHomePage() {
  const schemas = [
    orgSchema,
    buildWebPageSchema({
      url: "https://nescodigital.com/ge/",
      title: "Nesco Digital | Experten für digitales Marketing & Web",
    }),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header locale="de" />
      <main>
        <Hero locale="de" />
        <Solutions locale="de" />
        <ServicesGrid locale="de" />
        <Portfolio locale="de" />
        <Testimonials locale="de" />
        <CtaBanner locale="de" />
      </main>
      <Footer locale="de" />
    </>
  );
}
