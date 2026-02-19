import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "TikTok Ads | Reach Gen Z and Millennials with creative campaigns | Nesco Digital",
  description: "Reach Gen Z and Millennials with authentic, creative TikTok campaigns that drive viral growth and measurable conversions. +300% brand awareness.",
  path: "/en/tiktok-en/",
  routeKey: "tiktokAds",
});

const data: ServicePageData = {
  locale: "en",
  hero: {
    badge: "TikTok Ads",
    title: "TikTok Ads",
    subtitle: "Reach Gen Z and Millennials with authentic, creative campaigns that drive viral growth and measurable conversions, where the next billion-dollar brands are built.",
  },
  problems: [
    { title: "Missing the fastest growing platform", desc: "Your competitors are already on TikTok" },
    { title: "Low brand awareness in young demographics", desc: "Not reaching the next generation of buyers" },
    { title: "Creative content challenges", desc: "TikTok requires native-feeling, authentic content" },
    { title: "Unclear ROI from TikTok", desc: "Unsure how to measure and optimize TikTok performance" },
  ],
  solutions: [
    { title: "TikTok Strategy", desc: "Platform-specific strategy for maximum impact." },
    { title: "Native creative production", desc: "Content that feels organic, not like an ad." },
    { title: "Spark Ads", desc: "Amplify your best organic content with paid reach." },
    { title: "In-Feed & TopView campaigns", desc: "Maximum visibility formats for brand launches." },
    { title: "Audience targeting", desc: "Precise behavioral and interest targeting." },
    { title: "Performance tracking", desc: "Full attribution and ROAS measurement." },
  ],
  cases: [
    { metric: "+300%", label: "Brand awareness lift", industry: "DTC Consumer Brand" },
    { metric: "2.5x ROAS", label: "Return on ad spend", industry: "Fashion E-commerce" },
    { metric: "+400%", label: "Followers in 60 days", industry: "Lifestyle Brand" },
  ],
  omnichannelServices: ["Instagram Ads", "Facebook Ads", "Google Ads", "Email Marketing", "CRO"],
};

export default function TikTokEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
