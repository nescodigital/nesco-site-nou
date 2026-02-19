import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Digital Strategy | We build a strong and coherent online presence | Nesco Digital",
  description: "Customized digital strategies that maximize ROI. Companies with a well-defined digital strategy are twice as likely to increase revenues.",
  path: "/en/digital-strategy/",
  routeKey: "digitalStrategy" as any,
});

const data: ServicePageData = {
  locale: "en",
  hero: {
    badge: "Digital Strategy",
    title: "Digital Strategy",
    subtitle: "We build a strong and coherent online presence that generates measurable results and takes your business to the next level.",
  },
  problems: [
    { title: "No Clear Direction", desc: "Without a well-defined digital strategy, your marketing efforts are scattered and fail to produce consistent results." },
    { title: "Poor Campaign Results", desc: "Campaigns that lack strategic alignment underperform, wasting budget without delivering meaningful ROI." },
    { title: "Difficulty Attracting Customers", desc: "Without the right strategy, reaching and converting your ideal customers becomes an ongoing challenge." },
    { title: "Inconsistent Presence", desc: "An inconsistent online presence confuses your audience and weakens trust in your brand." },
  ],
  solutions: [
    { title: "Analysis & Consulting", desc: "We conduct a thorough analysis of your current digital presence, competitors, and market opportunities." },
    { title: "Defining Objectives", desc: "We set clear, measurable goals aligned with your business vision and growth targets." },
    { title: "Target Audience Identification", desc: "We define your ideal customer profiles and map their journey to better reach and convert them." },
    { title: "Choosing Channels", desc: "We identify the most effective digital channels for your business and allocate budget accordingly." },
    { title: "Action Plan", desc: "We build a detailed, prioritized roadmap with timelines, responsibilities, and KPIs." },
    { title: "Monitoring & Optimization", desc: "We continuously track performance and refine your strategy to maximize results over time." },
  ],
  cases: [
    { metric: "2x", label: "revenue chance for strategy clients", industry: "Strategy clients" },
    { metric: "+35%", label: "increase in qualified leads", industry: "Retail" },
    { metric: "+60%", label: "improvement in online visibility", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
};

export default function DigitalStrategyPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
