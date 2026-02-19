import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Lead Generation Website | Turn visitors into valuable potential customers | Nesco Digital",
  description: "An effective lead generation website increases your conversion rate by up to 40%, generating more qualified leads.",
  path: "/en/lead-generation-website-en/",
  routeKey: "leadGenWebsite" as any,
});

const data: ServicePageData = {
  locale: "en",
  hero: {
    badge: "Lead Generation Website",
    title: "Lead Generation Website",
    subtitle: "Turn visitors into valuable potential clients. We build high-converting websites that generate qualified leads 24/7.",
  },
  problems: [
    { title: "High Traffic, Low Conversions", desc: "Thousands of visitors arrive at your site but leave without taking any action, wasting your ad spend." },
    { title: "Unattractive Design", desc: "An outdated or visually poor website fails to build trust and drives potential clients away." },
    { title: "No Clear Message", desc: "When visitors can't quickly understand what you offer and why it matters, they bounce without converting." },
    { title: "Complex Forms", desc: "Long, complicated forms discourage users from completing inquiries, killing your lead volume." },
  ],
  solutions: [
    { title: "Analysis & Research", desc: "We audit your current site, study your audience, and benchmark against top competitors in your space." },
    { title: "Lead Gen Strategy", desc: "We design a conversion-focused strategy tailored to your business goals and target customer profiles." },
    { title: "Engaging Content", desc: "We craft compelling copy and visuals that communicate your value proposition clearly and persuasively." },
    { title: "Optimized Forms", desc: "We design frictionless, multi-step forms that maximize completion rates and capture quality data." },
    { title: "Conversion Landing Pages", desc: "We build dedicated landing pages optimized for specific campaigns to drive maximum conversions." },
    { title: "Tracking & Optimization", desc: "We set up full analytics and continuously A/B test to improve conversion rates over time." },
  ],
  cases: [
    { metric: "+50%", label: "increase in booked appointments", industry: "Dental Clinic" },
    { metric: "+47%", label: "increase in quote requests", industry: "IT Consulting" },
    { metric: "+160%", label: "increase in newsletter signups", industry: "Gym" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "Email Marketing", "CRO", "SEO"],
  faq: [
    { q: "How long does it take to build a website?", a: "A presentation site: 3-4 weeks. An average e-commerce site: 6-8 weeks. It depends on the complexity and how quickly we receive materials from you." },
    { q: "What platform do you build on?", a: "WordPress for flexibility and ease of management, or Next.js for maximum performance and PageSpeed 95+. We recommend based on your specific needs." },
    { q: "Do you include SEO in the website price?", a: "We include basic technical SEO — URL structure, meta tags, loading speed, sitemap. Ongoing SEO (content, link building) is a separate service." },
    { q: "Can I edit the content myself after launch?", a: "Yes, every site includes a 1-hour training session and documentation. You can edit texts, images, and add new pages without technical knowledge." },
    { q: "What happens after launch?", a: "We provide 30 days of free technical support. Afterwards, maintenance packages include updates, backups, and minor monthly modifications." },
  ],
  testimonial: { quote: "The new site loaded 4x faster and the conversion rate increased by 35% in the first month. It looks exactly how we imagined it, maybe even better.", name: "Elena P.", role: "Director, private medical clinic" },
  tools: ["Figma", "Next.js", "WordPress", "Shopify", "GTmetrix", "PageSpeed Insights"],
  toolsSectionTitle: "TOOLS WE USE",
  freeAuditBadge: "Free Website Audit Included",
};

export default function LeadGenerationWebsitePage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
