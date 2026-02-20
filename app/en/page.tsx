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
  locale: "en",
  title: "Nesco Digital | Digital Marketing Experts & Web Development",
  description:
    "Premium digital execution partner. Google Ads, Facebook Ads, Web Design, SEO, and growth strategies, we deliver measurable results for your business.",
  path: "/en/",
  routeKey: "home",
});

export default function EnHomePage() {
  const schemas = [
    orgSchema,
    buildWebPageSchema({
      url: "https://nescodigital.com/en/",
      title: "Nesco Digital | Digital Marketing Experts & Web Development",
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
      <Header locale="en" />
      <main style={{ width: "100%", display: "block" }}>
        <Hero locale="en" />
        <Solutions locale="en" />
        <ServicesGrid locale="en" />
        <Portfolio locale="en" />
        <Testimonials locale="en" />
        <HomeFaqSection locale="en" />
        <CtaBanner locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
