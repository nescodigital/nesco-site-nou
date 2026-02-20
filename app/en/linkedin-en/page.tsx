import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "LinkedIn Ads Agency | B2B Advertising | Nesco Digital",
  description: "LinkedIn Ads campaigns for B2B companies. Lead generation, brand awareness, retargeting. We reach decision-makers and professionals.",
  path: "/en/linkedin-en/",
  routeKey: "linkedinAds",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "paidAds",
  hero: {
    badge: "LinkedIn Ads",
    title: "LinkedIn Ads",
    subtitle: "The most powerful B2B advertising platform. We help you reach decision-makers, generate qualified leads, and build enterprise-level pipelines.",
  },
  problems: [
    { title: "Low quality B2B leads", desc: "Getting leads that don't match your ICP" },
    { title: "High cost per enterprise lead", desc: "Expensive leads without the right targeting" },
    { title: "Wrong audience targeting", desc: "Not reaching decision-makers and budget holders" },
    { title: "No C-suite reach", desc: "Can't get in front of the right level seniority" },
  ],
  solutions: [
    { title: "Decision-maker targeting", desc: "Job title, seniority, company size, industry, precise B2B targeting." },
    { title: "Sponsored Content", desc: "Thought leadership content that builds trust with your ICP." },
    { title: "InMail campaigns", desc: "Direct outreach to decision-makers in their inbox." },
    { title: "Lead Gen Forms", desc: "Native LinkedIn forms for frictionless lead capture." },
    { title: "Account-Based Marketing", desc: "Target your dream accounts by company name." },
    { title: "LinkedIn retargeting", desc: "Re-engage website visitors and video viewers." },
  ],
  cases: [
    { metric: "+150%", label: "B2B leads from LinkedIn", industry: "SaaS Platform" },
    { metric: "-40%", label: "CPL vs other channels", industry: "Enterprise Software" },
    { metric: "5x pipeline", label: "Revenue pipeline from LinkedIn", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Email Marketing", "CRM Solutions", "Digital Strategy", "SEO"],
};

export default function LinkedInEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
