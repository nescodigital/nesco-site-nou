import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Digitales Marketing | SEO, E-Mail-Marketing, Social Media | Nesco Digital",
  description: "Strategie, Umsetzung und kontinuierliche Optimierung — alles unter einem Dach. SEO, E-Mail-Marketing, Social Media und CRO für messbares, nachhaltiges Wachstum.",
  path: "/ge/digitales-marketing/",
  routeKey: "digitalMarketingHub",
});

const r = routes.de;

export default function DigitalesMarketingDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <HubPageTemplate
          data={{
            locale: "de",
            badge: "Digitales Marketing",
            title: "Digitales Marketing mit Fokus auf Ergebnisse",
            subtitle: "Strategie, Umsetzung und kontinuierliche Optimierung — alles unter einem Dach.",
            services: [
              {
                label: "Digitale Strategie",
                desc: "Klarer digitaler Wachstumsplan, maßgeschneidert auf Ihre Unternehmensziele und Ressourcen.",
                href: r.digitalStrategy,
                accent: "#56db84",
              },
              {
                label: "E-Mail-Marketing",
                desc: "Bewährtes 42:1 ROI. E-Mail-Automation-Kampagnen und Newsletter, die konvertieren und binden.",
                href: r.emailMarketing,
                accent: "#60a5fa",
              },
              {
                label: "CRM-Lösungen",
                desc: "Optimiertes Kundenbeziehungsmanagement. Wir implementieren CRM-Lösungen, die die Retention steigern.",
                href: r.crmSolutions,
                accent: "#a78bfa",
              },
              {
                label: "CRO-Lösungen",
                desc: "Mehr Conversions aus demselben Traffic ohne Mehrbudget. Datengetriebene Optimierung und A/B-Tests.",
                href: r.croSolutions,
                accent: "#fb923c",
              },
              {
                label: "SEO",
                desc: "Qualitätsorientierter organischer Traffic, nachhaltig und langfristig. Technische und Content-SEO-Strategien.",
                href: r.seoSolutions,
                accent: "#f472b6",
              },
              {
                label: "Social Media",
                desc: "Aktive Community und echtes Engagement. Wir verwalten Ihre Präsenz auf allen sozialen Plattformen.",
                href: r.socialMedia,
                accent: "#22d3ee",
              },
            ],
          }}
        />
      </main>
      <Footer locale="de" />
    </>
  );
}
