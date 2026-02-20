import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Bezahlte Werbung | Google Ads, Facebook Ads, TikTok & LinkedIn | Nesco Digital",
  description: "Vollständige Dienstleistungen für bezahlte Werbung: Google Ads, Facebook Ads, Instagram Ads, TikTok Ads und LinkedIn Ads. Wir maximieren Ihren ROAS mit bewährten Kampagnenstrategien.",
  path: "/ge/bezahlte-werbung/",
  routeKey: "paidAdsHub",
});

const r = routes.de;

export default function BezahlteWerbungDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <HubPageTemplate
          data={{
            locale: "de",
            badge: "Bezahlte Werbung",
            title: "Bezahlte Kampagnen, die echten Umsatz generieren",
            subtitle: "Von Google Ads bis TikTok — wir verwalten alle bezahlten Werbekanäle mit Fokus auf maximalen ROAS und minimale Kosten pro Conversion.",
            services: [
              {
                label: "Google Ads",
                desc: "Search-, Display- und Shopping-Kampagnen für maximalen ROAS. CPA 38% unter dem Branchendurchschnitt.",
                href: r.googleAds,
                accent: "#56db84",
              },
              {
                label: "Facebook Ads",
                desc: "Präzise Zielgruppen auf Basis Ihrer Daten. Echte Conversions für E-Commerce und Lead-Generierung.",
                href: r.facebookAds,
                accent: "#60a5fa",
              },
              {
                label: "Instagram Ads",
                desc: "Visuell ansprechende, wirkungsvolle Creatives. Wir erreichen Ihre Zielgruppe mit scroll-stoppenden Formaten.",
                href: r.instagramAds,
                accent: "#a78bfa",
              },
              {
                label: "TikTok Ads",
                desc: "Gen Z und Millennials mit nativer Kreativität erreichen. Videoformate für Brand Awareness und Conversions.",
                href: r.tiktokAds,
                accent: "#fb923c",
              },
              {
                label: "LinkedIn Ads",
                desc: "Premium B2B-Lead-Generierung. Wir erreichen Entscheider in Ihren Zielunternehmen mit relevanten Botschaften.",
                href: r.linkedinAds,
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
