import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HubPageTemplate } from "@/components/sections/HubPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  locale: "de",
  title: "Webdesign & Webentwicklung | Premium-Websites | Nesco Digital",
  description: "Strategisch entwickelte Websites — nicht nur schöne. Webdesign und Webentwicklung für ambitionierte Unternehmen — Lead-Generation, Online-Shops, Unternehmenswebsites.",
  path: "/ge/webdesign/",
  routeKey: "webdesignHub",
});

const r = routes.de;

export default function WebdesignDePage() {
  return (
    <>
      <Header locale="de" />
      <main>
        <HubPageTemplate
          data={{
            locale: "de",
            badge: "Webdesign",
            title: "Webdesign, das Besucher in Kunden verwandelt",
            subtitle: "Strategisch entwickelte Websites — nicht nur schöne. Jedes Element dient einem Business-Ziel.",
            services: [
              {
                label: "Lead-Generation-Website",
                desc: "Websites mit einem Ziel: Besucher in qualifizierte Leads für Ihr Vertriebsteam zu verwandeln.",
                href: r.leadGenWebsite,
                accent: "#56db84",
              },
              {
                label: "Unternehmens-Website",
                desc: "Professionelle Online-Präsenz, die Ihre Markenwerte widerspiegelt und das Vertrauen potenzieller Kunden weckt.",
                href: r.companyWebsite,
                accent: "#60a5fa",
              },
              {
                label: "E-Commerce-Shops",
                desc: "Shopify, WooCommerce, Magento — skalierbare Online-Shops mit UX für maximale Conversions.",
                href: r.ecommerceStores,
                accent: "#a78bfa",
              },
              {
                label: "Website-Wartung",
                desc: "Ihre Website immer leistungsfähig, sicher und aktuell. Schnelle Eingriffe und kontinuierliches Monitoring.",
                href: r.websiteMaintenance,
                accent: "#fb923c",
              },
            ],
          }}
        />
      </main>
      <Footer locale="de" />
    </>
  );
}
