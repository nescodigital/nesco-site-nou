import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "ro",
  title: "Webdesign | Website Lead Generation, Companie, Magazine Online | Nesco Digital",
  description: "Servicii complete de webdesign: website lead generation, website companie, magazine online și mentenanță website. Construim site-uri care convertesc.",
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
            title: "Webdesign premium care convertește vizitatorii în clienți",
            subtitle: "Construim site-uri rapide, moderne și optimizate pentru conversii — de la landing pages până la magazine online complete.",
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
