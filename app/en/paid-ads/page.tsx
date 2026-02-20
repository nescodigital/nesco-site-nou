import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Paid Ads Services | Google Ads, Facebook Ads, TikTok & LinkedIn | Nesco Digital",
  description: "Full-service paid advertising: Google Ads, Facebook Ads, Instagram Ads, TikTok Ads and LinkedIn Ads. We maximize your ROAS with proven campaign strategies.",
  path: "/en/paid-ads/",
  routeKey: "paidAdsHub",
});

const r = routes.en;

export default function PaidAdsEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <HubPageTemplate
          data={{
            locale: "en",
            badge: "Paid Ads",
            title: "Paid campaigns that generate real revenue",
            subtitle: "From Google Ads to TikTok, we manage all paid advertising channels with a focus on maximum ROAS and minimum cost per conversion.",
            services: [
              {
                label: "Google Ads",
                desc: "Search, Display and Shopping campaigns optimized for maximum ROAS. CPA 38% lower than the industry average.",
                href: r.googleAds,
                accent: "#56db84",
              },
              {
                label: "Facebook Ads",
                desc: "Precise audiences built on your data. Real conversions for e-commerce and lead generation.",
                href: r.facebookAds,
                accent: "#60a5fa",
              },
              {
                label: "Instagram Ads",
                desc: "Visually compelling and convertible creatives. We reach your audience with scroll-stopping formats.",
                href: r.instagramAds,
                accent: "#a78bfa",
              },
              {
                label: "TikTok Ads",
                desc: "Reach Gen Z and Millennials with native creativity. Video formats that drive brand awareness and conversions.",
                href: r.tiktokAds,
                accent: "#fb923c",
              },
              {
                label: "LinkedIn Ads",
                desc: "Premium B2B lead generation. We reach decision-makers at your target companies with relevant messaging.",
                href: r.linkedinAds,
                accent: "#22d3ee",
              },
            ],
          }}
        />
      </main>
      <Footer locale="en" />
    </>
  );
}
