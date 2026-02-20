import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Webdesign & Dezvoltare Web | Site-uri Premium | Nesco Digital",
  description: "Site-uri construite strategic, nu doar frumoase. Webdesign și dezvoltare web pentru companii ambițioase — lead generation, magazine online, website-uri de companie.",
  path: "/webdesign/",
  routeKey: "webdesignHub",
});

const r = routes.ro;

export default function WebdesignPage() {
  return (
    <>
      <Header locale="ro" />
      <main>
        <HubPageTemplate
          data={{
            locale: "ro",
            badge: "Webdesign",
            title: "Webdesign care convertește vizitatori în clienți",
            subtitle: "Site-uri construite strategic — nu doar frumoase. Fiecare element servește un obiectiv de business.",
            services: [
              {
                label: "Website Lead Generation",
                desc: "Site-uri construite cu un singur scop: să transforme vizitatorii în lead-uri calificate pentru echipa ta de vânzări.",
                href: r.leadGenWebsite,
                accent: "#56db84",
              },
              {
                label: "Website Companie",
                desc: "Prezență profesională online care reflectă valorile brandului tău și inspiră încredere clienților potențiali.",
                href: r.companyWebsite,
                accent: "#60a5fa",
              },
              {
                label: "Magazine Online",
                desc: "Shopify, WooCommerce, Magento — magazine online scalabile cu UX optimizat pentru conversii maxime.",
                href: r.ecommerceStores,
                accent: "#a78bfa",
              },
              {
                label: "Mentenanță Website",
                desc: "Site-ul tău mereu performant, securizat și actualizat. Intervenții rapide și monitorizare continuă.",
                href: r.websiteMaintenance,
                accent: "#fb923c",
              },
            ],
          }}
        />
      </main>
      <Footer locale="ro" />
    </>
  );
}
