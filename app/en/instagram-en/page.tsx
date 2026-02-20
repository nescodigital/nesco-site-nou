import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Instagram Ads | Instagram Advertising Agency | Nesco Digital",
  description: "Instagram Ads campaigns for ambitious brands. Stories, Reels, Feed. We grow awareness and drive direct sales from Instagram.",
  path: "/en/instagram-en/",
  routeKey: "instagramAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "Instagram Ads",
    title: "Instagram Ads",
    subtitle: "Visual, impactful, convertible. We create Instagram campaigns that stop the scroll, build brand desire, and drive real conversions.",
  },
  problems: [
    { title: "Poor visual targeting", desc: "Ads shown to wrong audiences wasting budget" },
    { title: "Low engagement", desc: "Content doesn't stop the scroll" },
    { title: "Wrong demographics", desc: "Not reaching your actual buyers" },
    { title: "High CPM with low ROI", desc: "Expensive impressions that don't convert" },
  ],
  solutions: [
    { title: "Creative-first strategy", desc: "We lead with scroll-stopping visuals and copy." },
    { title: "Precision audience targeting", desc: "Lookalike audiences, interest targeting, and retargeting." },
    { title: "Stories & Reels Ads", desc: "Native-format ads that feel organic." },
    { title: "Shopping integration", desc: "Instagram Shopping for seamless purchase flow." },
    { title: "Retargeting funnels", desc: "Warm audiences converted with personalized messaging." },
    { title: "Creative A/B testing", desc: "Continuous testing to find the winning creative." },
  ],
  cases: [
    { metric: "+45%", label: "ROAS improvement", industry: "Fashion E-commerce" },
    { metric: "+120%", label: "Profile visits & saves", industry: "Lifestyle Brand" },
    { metric: "-30%", label: "Cost per lead", industry: "Beauty Brand" },
  ],
  omnichannelServices: ["Facebook Ads", "TikTok Ads", "Google Ads", "CRO", "Email Marketing"],
};

export default function InstagramEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
