import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Reclame Plătite | Google Ads, Meta Ads, TikTok Ads | Nesco Digital",
  description: "Nu gestionăm bugete — construim sisteme de achiziție profitabile. Google Ads, Meta Ads, TikTok Ads și LinkedIn Ads pentru companii ambițioase.",
  path: "/reclame-platite/",
  routeKey: "paidAdsHub",
});

const r = routes.ro;

export default function ReclamePlatitePage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <HubPageTemplate
          data={{
            locale: "ro",
            badge: "Reclame Plătite",
            title: "Reclame Plătite care generează revenue real",
            subtitle: "Nu gestionăm bugete. Construim sisteme de achiziție profitabile pentru companii ambițioase.",
            services: [
              {
                label: "Google Ads",
                desc: "Campanii Search, Display și Shopping optimizate pentru ROAS maxim. CPA cu 38% mai mic față de media industriei.",
                href: r.googleAds,
                accent: "#56db84",
              },
              {
                label: "Facebook Ads",
                desc: "Audiențe precise construite pe baza datelor tale. Conversii reale pentru e-commerce și lead generation.",
                href: r.facebookAds,
                accent: "#60a5fa",
              },
              {
                label: "Instagram Ads",
                desc: "Creativ vizual, impactant și convertibil. Ajungem la audiența ta cu formate care opresc scroll-ul.",
                href: r.instagramAds,
                accent: "#a78bfa",
              },
              {
                label: "TikTok Ads",
                desc: "Reach Gen Z și Millennials cu creativitate nativă. Formate video care generează brand awareness și conversii.",
                href: r.tiktokAds,
                accent: "#fb923c",
              },
              {
                label: "LinkedIn Ads",
                desc: "B2B lead generation premium. Ajungem la decidenții din companiile țintă cu mesaje relevante.",
                href: r.linkedinAds,
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
