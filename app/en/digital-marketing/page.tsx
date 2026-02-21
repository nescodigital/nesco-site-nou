import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Digital Marketing | SEO, Email Marketing, Social Media | Nesco Digital",
  description: "Strategy, execution and continuous optimization , all under one roof. SEO, email marketing, social media and CRO for measurable, sustainable growth.",
  path: "/en/digital-marketing/",
  routeKey: "digitalMarketingHub",
});

const r = routes.en;

export default function DigitalMarketingEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <HubPageTemplate
          data={{
            locale: "en",
            badge: "Digital Marketing",
            title: "Digital Marketing focused on results",
            subtitle: "Strategy, execution and continuous optimization , all under one roof.",
            services: [
              {
                label: "Digital Strategy",
                desc: "Clear digital growth plan, tailored to your business goals and resources.",
                href: r.digitalStrategy,
                accent: "#56db84",
              },
              {
                label: "Email Marketing",
                desc: "Proven 42:1 ROI. Email automation campaigns and newsletters that convert and retain customers.",
                href: r.emailMarketing,
                accent: "#60a5fa",
              },
              {
                label: "CRM Solutions",
                desc: "Optimized client relationships. We implement and manage CRM solutions that increase retention.",
                href: r.crmSolutions,
                accent: "#a78bfa",
              },
              {
                label: "CRO Solutions",
                desc: "More conversions from the same traffic, without extra budget. Data-driven optimization and A/B testing.",
                href: r.croSolutions,
                accent: "#fb923c",
              },
              {
                label: "SEO",
                desc: "Quality organic traffic, sustainable long-term. Technical and content SEO strategies.",
                href: r.seoSolutions,
                accent: "#f472b6",
              },
              {
                label: "Social Media",
                desc: "Active community and real engagement. We manage your presence across all social platforms.",
                href: r.socialMedia,
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
