import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata, buildServiceSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Company Website | Your professional website tailored to your company | Nesco Digital",
  description: "A professional website tailored to your company needs and brand values. +70% appointments, attracted new investors, +60% quote requests.",
  path: "/en/company-website/",
  routeKey: "companyWebsite",
});

const data: ServicePageData = {
  locale: "en",
  hero: {
    badge: "Company Website",
    title: "Company Website",
    subtitle: "Your professional website, tailored to your company's needs and brand values. We create credible, functional, and conversion-optimized websites.",
  },
  problems: [
    { title: "No online credibility", desc: "Potential clients don't trust you without a professional presence" },
    { title: "Hard to navigate", desc: "Visitors can't find what they need and leave" },
    { title: "Unprofessional appearance", desc: "Outdated design hurts your brand perception" },
    { title: "Weak lead generation", desc: "Your site gets traffic but doesn't generate business" },
  ],
  solutions: [
    { title: "Personalized consulting", desc: "We understand your business goals and target audience." },
    { title: "Strategic architecture", desc: "Site structure designed for both UX and SEO." },
    { title: "Unique design", desc: "Custom design that reflects your brand identity." },
    { title: "Functional development", desc: "Fast, secure, mobile-first development." },
    { title: "Mobile optimization", desc: "Perfect experience on all devices." },
    { title: "Business tool integration", desc: "CRM, email, analytics, all connected." },
  ],
  cases: [
    { metric: "+70%", label: "Appointments booked", industry: "Medical Clinic" },
    { metric: "Attracted investors", label: "Brand credibility uplift", industry: "Tech Startup" },
    { metric: "+60%", label: "Quote requests", industry: "B2B Services" },
  ],
  omnichannelServices: ["Google Ads", "Facebook Ads", "SEO", "Email Marketing", "CRO"],
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

export default function CompanyWebsiteEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({ name: "Company Website Design", description: data.hero.subtitle, url: "https://nescodigital.com/en/company-website/" })) }} />
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
