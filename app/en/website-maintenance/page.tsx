import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicePageTemplate, type ServicePageData } from "@/components/sections/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Website Maintenance | Keep your site fast, secure and always online | Nesco Digital",
  description: "Keep your website fast, secure, and always performing at its peak. 99.9% uptime guaranteed. We handle the technical side so you can focus on business.",
  path: "/en/website-maintenance/",
  routeKey: "websiteMaintenance",
});

const data: ServicePageData = {
  locale: "en",
  breadcrumbCategory: "webdesign",
  hero: {
    badge: "Website Maintenance",
    title: "Website Maintenance",
    subtitle: "Keep your website fast, secure, and always performing at its peak. We handle the technical side so you can focus on growing your business.",
  },
  problems: [
    { title: "Security vulnerabilities", desc: "Outdated plugins and CMS create hacking risks" },
    { title: "Slow loading times", desc: "Performance degradation over time kills conversions" },
    { title: "Plugin conflicts", desc: "Updates break functionality without warning" },
    { title: "No backup strategy", desc: "One incident could mean losing everything" },
  ],
  solutions: [
    { title: "Security monitoring", desc: "24/7 malware scanning and firewall protection." },
    { title: "Performance optimization", desc: "Regular speed audits and optimization." },
    { title: "Regular updates", desc: "CMS, plugins, themes kept up to date safely." },
    { title: "Daily backups", desc: "Automated backups with 30-day history." },
    { title: "Uptime monitoring", desc: "Instant alerts if your site goes down." },
    { title: "Technical support", desc: "Priority support for any technical issues." },
  ],
  cases: [
    { metric: "99.9%", label: "Uptime guarantee", industry: "E-commerce Store" },
    { metric: "-60%", label: "Page load time reduction", industry: "Corporate Site" },
    { metric: "0 incidents", label: "Security breaches prevented", industry: "SaaS Platform" },
  ],
  omnichannelServices: ["Web Design", "SEO", "CRO", "Google Ads", "Email Marketing"],
};

export default function WebsiteMaintenanceEnPage() {
  return (
    <>
      <Header locale="en" />
      <main><ServicePageTemplate data={data} /></main>
      <Footer locale="en" />
    </>
  );
}
