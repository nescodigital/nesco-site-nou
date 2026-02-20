import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Marketing Digital | SEO, Email Marketing, Social Media | Nesco Digital",
  description: "Strategie, execuție și optimizare continuă — toate sub același acoperiș. SEO, email marketing, social media și CRO pentru creștere măsurabilă.",
  path: "/marketing-digital/",
  routeKey: "digitalMarketingHub",
});

const r = routes.ro;

export default function MarketingDigitalPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <HubPageTemplate
          data={{
            locale: "ro",
            badge: "Marketing Digital",
            title: "Marketing Digital orientat spre rezultate",
            subtitle: "Strategie, execuție și optimizare continuă — toate sub același acoperiș.",
            services: [
              {
                label: "Strategie Digitală",
                desc: "Plan clar de creștere digitală, personalizat pentru obiectivele și resursele afacerii tale.",
                href: r.digitalStrategy,
                accent: "#56db84",
              },
              {
                label: "Email Marketing",
                desc: "ROI 42:1 dovedit. Campanii de email automation și newsletters care convertesc și fidelizează.",
                href: r.emailMarketing,
                accent: "#60a5fa",
              },
              {
                label: "CRM Solutions",
                desc: "Relații cu clienții optimizate. Implementăm și gestionăm soluții CRM care cresc retenția.",
                href: r.crmSolutions,
                accent: "#a78bfa",
              },
              {
                label: "CRO Solutions",
                desc: "Mai multe conversii din același trafic, fără buget extra. Optimizare bazată pe date și teste A/B.",
                href: r.croSolutions,
                accent: "#fb923c",
              },
              {
                label: "SEO",
                desc: "Trafic organic de calitate, sustenabil pe termen lung. Strategii SEO tehnice și de conținut.",
                href: r.seoSolutions,
                accent: "#f472b6",
              },
              {
                label: "Social Media",
                desc: "Comunitate activă și engagement real. Gestionăm prezența ta pe toate platformele sociale.",
                href: r.socialMedia,
                accent: "#22d3ee",
              },
            ],
          }}
        />
      </main>
      <Footer locale="ro" />
    </>
  );
}
