import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Social Media Solutions | Increase brand visibility through social media | Nesco Digital",
  description: "We increase your brand visibility, build communities, and drive sales through social media. 4.7 billion people use social media, are you reaching them?",
  path: "/en/social-media-solutions/",
  routeKey: "socialMedia",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "digitalMarketing",
  hero: {
    badge: "Social Media",
    title: "Social Media Solutions",
    subtitle: "We increase your brand's visibility, build communities, and drive sales through customized social media strategies that deliver measurable results.",
  },
  problems: [
    { title: "Unclear strategy", desc: "Posting without a plan, getting no results" },
    { title: "Poor content quality", desc: "Content that doesn't engage or convert" },
    { title: "Low engagement", desc: "Followers who don't interact or buy" },
    { title: "Underperforming ads", desc: "Paid social spend with no clear ROI" },
  ],
  solutions: [
    { title: "Analysis & Strategy", desc: "Custom social media strategy based on your audience and goals." },
    { title: "Creating Engaging Content", desc: "Visual and written content that stops the scroll." },
    { title: "Account Management", desc: "We manage your accounts professionally and consistently." },
    { title: "Paid Campaigns", desc: "Social ads that convert, not just impressions." },
    { title: "Monitoring & Analysis", desc: "Weekly reporting on what's working and what's not." },
    { title: "Community Growth", desc: "Build a loyal community around your brand." },
  ],
  cases: [
    { metric: "+150%", label: "Follower growth", industry: "Fashion Brand" },
    { metric: "+80%", label: "Engagement rate", industry: "Lifestyle Brand" },
    { metric: "+45%", label: "Traffic from social", industry: "E-commerce" },
  ],
  omnichannelServices: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Email Marketing", "CRO"],
};

export default function SocialMediaEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
