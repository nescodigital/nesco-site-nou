import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "SEO Agency | Search Engine Optimization | Nesco Digital",
  description: "Full SEO services: technical audit, on-page optimization, link building, local SEO. We grow organic traffic and Google visibility.",
  path: "/en/seo-solutions/",
  routeKey: "seoSolutions",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "digitalMarketing",
  hero: {
    badge: "SEO Solutions",
    title: "SEO Solutions",
    subtitle: "Rank higher on Google, drive quality organic traffic, and build sustainable long-term growth, without paying for every click.",
  },
  problems: [
    { title: "No Google visibility", desc: "Your ideal customers can't find you online" },
    { title: "Outranked by competitors", desc: "Competitors take traffic that should be yours" },
    { title: "Low organic traffic", desc: "Dependence on paid ads with no organic foundation" },
    { title: "Poor technical SEO", desc: "Site issues preventing Google from ranking you" },
  ],
  solutions: [
    { title: "Technical SEO Audit", desc: "Full crawl to identify and fix every technical issue." },
    { title: "Keyword Research", desc: "High-intent keywords your buyers actually search for." },
    { title: "On-Page Optimization", desc: "Every page optimized for rankings and conversions." },
    { title: "Link Building", desc: "High-authority backlinks that move the needle." },
    { title: "Content Strategy", desc: "SEO content that ranks and converts." },
    { title: "Local SEO", desc: "Dominate local search for your region." },
  ],
  cases: [
    { metric: "Top 3", label: "Google rankings in 90 days", industry: "SaaS Platform" },
    { metric: "+200%", label: "Organic traffic in 6 months", industry: "E-commerce" },
    { metric: "+150%", label: "Qualified leads from SEO", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "CRO", "Web Design", "Email Marketing", "Digital Strategy"],
  faq: [
    { q: "How long until I see SEO results?", a: "First ranking improvements appear in 60-90 days. Significant organic traffic results in 4-6 months. SEO is a long-term investment with cumulative effects." },
    { q: "What does the free SEO audit include?", a: "We analyze your site's technical structure, loading speed, current keywords, backlink profile, and compare against your top 3 competitors in your niche." },
    { q: "Do you guarantee #1 ranking on Google?", a: "No. No serious agency guarantees specific positions, Google doesn't allow that. We guarantee a transparent process, white-hat techniques, and measurable organic traffic growth." },
    { q: "How much do SEO services cost?", a: "SEO packages start from €800/month for small sites and scale based on niche competitiveness and workload required. We provide a free audit before any proposal." },
    { q: "Does SEO work for local businesses?", a: "Yes, local SEO is one of the most effective investments for businesses with a physical location. We optimize Google Business Profile, cite NAP consistently, and target local searches." },
  ],
  testimonial: { quote: "From page 4 to top 3 in Google for our main keywords, in 5 months. Organic traffic grew by 180% and we're no longer exclusively dependent on paid ads.", name: "Andrea M.", role: "Marketing Manager, Fashion E-commerce" },
  tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free SEO Audit Included",
};

export default function SEOEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
