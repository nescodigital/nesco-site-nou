import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Webdesign | Lead Generation Websites, Company Sites & E-commerce | Nesco Digital",
  description: "Complete webdesign services: lead generation websites, company websites, e-commerce stores and website maintenance. We build sites that convert.",
  path: "/en/webdesign/",
  routeKey: "webdesignHub",
});

const r = routes.en;

export default function WebdesignEnPage() {
  return (
    <>
      <Header locale="en" />
      <main>
        <HubPageTemplate
          data={{
            locale: "en",
            badge: "Webdesign",
            title: "Premium webdesign that turns visitors into clients",
            subtitle: "We build fast, modern websites optimized for conversions — from landing pages to full e-commerce stores.",
            services: [
              {
                label: "Lead Generation Website",
                desc: "Websites built with one purpose: turning visitors into qualified leads for your sales team.",
                href: r.leadGenWebsite,
                accent: "#56db84",
              },
              {
                label: "Company Website",
                desc: "Professional online presence that reflects your brand values and inspires trust in potential clients.",
                href: r.companyWebsite,
                accent: "#60a5fa",
              },
              {
                label: "E-commerce Stores",
                desc: "Shopify, WooCommerce, Magento — scalable online stores with UX optimized for maximum conversions.",
                href: r.ecommerceStores,
                accent: "#a78bfa",
              },
              {
                label: "Website Maintenance",
                desc: "Your site always performing, secure and up to date. Fast interventions and continuous monitoring.",
                href: r.websiteMaintenance,
                accent: "#fb923c",
              },
            ],
          }}
        />
      </main>
      <Footer locale="en" />
    </>
  );
}
