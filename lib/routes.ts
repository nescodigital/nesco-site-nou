import type { Locale } from "./translations";

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[]; accent?: boolean };

// Exact URL structure matching the existing nescodigital.com site
export const routes = {
  ro: {
    home: "/",
    paidAdsHub: "/reclame-platite/",
    webdesignHub: "/webdesign/",
    digitalMarketingHub: "/marketing-digital/",
    googleAds: "/reclame-platite/google-ads/",
    facebookAds: "/reclame-platite/facebook-ads/",
    instagramAds: "/reclame-platite/instagram-ads/",
    tiktokAds: "/reclame-platite/tiktok-ads/",
    linkedinAds: "/reclame-platite/linkedin-ads/",
    leadGenWebsite: "/website-lead-generation-ro/",
    companyWebsite: "/website-companie-ro/",
    ecommerceStores: "/magazine-online-ro/",
    websiteMaintenance: "/mentenanta-website-ro/",
    digitalStrategy: "/strategie-digitala-ro/",
    emailMarketing: "/solutii-email-marketing-ro/",
    crmSolutions: "/solutii-crm-ro/",
    croSolutions: "/solutii-cro-ro/",
    socialMedia: "/solutii-social-media-ro/",
    seoSolutions: "/solutii-seo-ro/",
    projects: "/proiecte/",
    about: "/despre-nesco-digital/",
    contact: "/contact/",
    growthSprintEducation: "/growth-sprint-educatie/",
    growthSprintEcommerce: "/growth-sprint-ecommerce/",
    privacy: "/politica-de-confidentialitate/",
    terms: "/termeni-si-conditii/",
  },
  en: {
    home: "/en/",
    paidAdsHub: "/en/paid-ads/",
    webdesignHub: "/en/webdesign/",
    digitalMarketingHub: "/en/digital-marketing/",
    googleAds: "/en/google-en/",
    facebookAds: "/en/facebook-en/",
    instagramAds: "/en/instagram-en/",
    tiktokAds: "/en/tiktok-en/",
    linkedinAds: "/en/linkedin-en/",
    leadGenWebsite: "/en/lead-generation-website-en/",
    companyWebsite: "/en/company-website/",
    ecommerceStores: "/en/e-commerce-stores/",
    websiteMaintenance: "/en/website-maintenance/",
    digitalStrategy: "/en/digital-strategy/",
    emailMarketing: "/en/email-marketing-solutions/",
    crmSolutions: "/en/crm-solutions/",
    croSolutions: "/en/cro-solutions/",
    socialMedia: "/en/social-media-solutions/",
    seoSolutions: "/en/seo-solutions/",
    projects: "/en/projects/",
    about: "/en/about-nesco-digital/",
    contact: "/en/lets-talk/",
    growthSprintEducation: "/en/growth-sprint-education/",
    growthSprintEcommerce: "/en/growth-sprint-ecommerce/",
    privacy: "/en/privacy-policy/",
    terms: "/en/terms-and-conditions/",
  },
  de: {
    home: "/ge/",
    paidAdsHub: "/ge/bezahlte-werbung/",
    webdesignHub: "/ge/webdesign/",
    digitalMarketingHub: "/ge/digitales-marketing/",
    googleAds: "/ge/google-de/",
    facebookAds: "/ge/facebook-de/",
    instagramAds: "/ge/instagram-de/",
    tiktokAds: "/ge/tiktok-de/",
    linkedinAds: "/ge/linkedin-de/",
    leadGenWebsite: "/ge/lead-generation-website-de/",
    companyWebsite: "/ge/unternehmens-website/",
    ecommerceStores: "/ge/e-commerce-shops/",
    websiteMaintenance: "/ge/website-wartung/",
    digitalStrategy: "/ge/digitale-strategie/",
    emailMarketing: "/ge/email-marketing-loesungen/",
    crmSolutions: "/ge/crm-loesungen/",
    croSolutions: "/ge/cro-loesungen/",
    socialMedia: "/ge/social-media-loesungen/",
    seoSolutions: "/ge/seo-loesungen/",
    projects: "/ge/projekte/",
    about: "/ge/uber-nesco-digital/",
    contact: "/ge/lass-uns-reden/",
    growthSprintEducation: "/ge/growth-sprint-bildung/",
    growthSprintEcommerce: "/ge/growth-sprint-ecommerce-de/",
    privacy: "/ge/datenschutz/",
    terms: "/ge/nutzungsbedingungen/",
  },
} as const;

// Hreflang mappings for multilingual SEO
export function getHreflangAlternates(
  routeKey: keyof typeof routes.ro
): Record<string, string> {
  const base = "https://nescodigital.com";
  return {
    "x-default": `${base}${routes.ro[routeKey]}`,
    ro: `${base}${routes.ro[routeKey]}`,
    en: `${base}${routes.en[routeKey]}`,
    de: `${base}${routes.de[routeKey]}`,
  };
}

// Navigation structure for Header component
export function getNavLinks(locale: Locale): NavItem[] {
  const r = routes[locale];
  return [
    {
      label:
        locale === "ro"
          ? "Reclame Plătite"
          : locale === "en"
            ? "Paid Ads"
            : "Bezahlte Anzeigen",
      href: r.paidAdsHub,
      children: [
        {
          label: "Google Ads",
          href: r.googleAds,
          desc:
            locale === "ro"
              ? "Campanii Google cu ROAS maxim"
              : locale === "en"
                ? "Max ROAS Google campaigns"
                : "Google-Kampagnen mit maximalem ROAS",
        },
        {
          label: "Facebook Ads",
          href: r.facebookAds,
          desc:
            locale === "ro"
              ? "Audiențe precise, conversii reale"
              : locale === "en"
                ? "Precise audiences, real conversions"
                : "Präzise Zielgruppen, echte Conversions",
        },
        {
          label: "Instagram Ads",
          href: r.instagramAds,
          desc:
            locale === "ro"
              ? "Vizual, impactant, convertibil"
              : locale === "en"
                ? "Visual, impactful, convertible"
                : "Visuell, wirkungsvoll, konvertierend",
        },
        {
          label: "TikTok Ads",
          href: r.tiktokAds,
          desc:
            locale === "ro"
              ? "Reach Gen Z cu creativitate"
              : locale === "en"
                ? "Reach Gen Z creatively"
                : "Gen Z kreativ erreichen",
        },
        {
          label: "LinkedIn Ads",
          href: r.linkedinAds,
          desc:
            locale === "ro"
              ? "B2B lead generation"
              : locale === "en"
                ? "B2B lead generation"
                : "B2B-Lead-Generierung",
        },
      ],
    },
    {
      label: "Webdesign",
      href: r.webdesignHub,
      children: [
        {
          label:
            locale === "ro"
              ? "Website Lead Generation"
              : locale === "en"
                ? "Lead Generation Website"
                : "Lead-Generation-Website",
          href: r.leadGenWebsite,
          desc:
            locale === "ro"
              ? "Transformă vizitatorii în clienți"
              : locale === "en"
                ? "Turn visitors into clients"
                : "Besucher in Kunden umwandeln",
        },
        {
          label:
            locale === "ro"
              ? "Website Companie"
              : locale === "en"
                ? "Company Website"
                : "Unternehmens-Website",
          href: r.companyWebsite,
          desc:
            locale === "ro"
              ? "Prezență profesională online"
              : locale === "en"
                ? "Professional online presence"
                : "Professionelle Online-Präsenz",
        },
        {
          label:
            locale === "ro"
              ? "Magazine Online"
              : locale === "en"
                ? "E-commerce Stores"
                : "E-Commerce-Shops",
          href: r.ecommerceStores,
          desc:
            locale === "ro"
              ? "Shopify, WooCommerce, Magento"
              : locale === "en"
                ? "Shopify, WooCommerce, Magento"
                : "Shopify, WooCommerce, Magento",
        },
        {
          label:
            locale === "ro"
              ? "Mentenanță Website"
              : locale === "en"
                ? "Website Maintenance"
                : "Website-Wartung",
          href: r.websiteMaintenance,
          desc:
            locale === "ro"
              ? "Site mereu performant"
              : locale === "en"
                ? "Always high-performing site"
                : "Immer hochleistungsfähige Website",
        },
      ],
    },
    {
      label:
        locale === "ro"
          ? "Marketing Digital"
          : locale === "en"
            ? "Digital Marketing"
            : "Digitales Marketing",
      href: r.digitalMarketingHub,
      children: [
        {
          label:
            locale === "ro"
              ? "Strategie Digitală"
              : locale === "en"
                ? "Digital Strategy"
                : "Digitale Strategie",
          href: r.digitalStrategy,
          desc:
            locale === "ro"
              ? "Plan clar de creștere"
              : locale === "en"
                ? "Clear growth plan"
                : "Klarer Wachstumsplan",
        },
        {
          label: "Email Marketing",
          href: r.emailMarketing,
          desc:
            locale === "ro"
              ? "ROI 42:1 dovedit"
              : locale === "en"
                ? "Proven 42:1 ROI"
                : "Bewährtes 42:1 ROI",
        },
        {
          label: "CRM Solutions",
          href: r.crmSolutions,
          desc:
            locale === "ro"
              ? "Relații cu clienții optimizate"
              : locale === "en"
                ? "Optimized client relationships"
                : "Optimiertes Kundenbeziehungsmanagement",
        },
        {
          label: "CRO Solutions",
          href: r.croSolutions,
          desc:
            locale === "ro"
              ? "Mai multe conversii, fără buget extra"
              : locale === "en"
                ? "More conversions, no extra budget"
                : "Mehr Conversions ohne Mehrbudget",
        },
        {
          label: "SEO",
          href: r.seoSolutions,
          desc:
            locale === "ro"
              ? "Trafic organic de calitate"
              : locale === "en"
                ? "Quality organic traffic"
                : "Qualitätsorientierter organischer Traffic",
        },
        {
          label:
            locale === "ro"
              ? "Social Media"
              : locale === "en"
                ? "Social Media Solutions"
                : "Social-Media-Lösungen",
          href: r.socialMedia,
          desc:
            locale === "ro"
              ? "Comunitate și engagement"
              : locale === "en"
                ? "Community and engagement"
                : "Community und Engagement",
        },
      ],
    },
    {
      label: "Growth Sprint",
      href: r.growthSprintEducation,
      accent: true,
      children: [
        {
          label:
            locale === "ro"
              ? "Educație Online"
              : locale === "en"
                ? "Online Education"
                : "Online-Bildung",
          href: r.growthSprintEducation,
          desc:
            locale === "ro"
              ? "10k–100k+/lună · 6 săptămâni"
              : locale === "en"
                ? "10k–100k+/month · 6 weeks"
                : "10k–100k+/Monat · 6 Wochen",
        },
        {
          label: "E-commerce",
          href: r.growthSprintEcommerce,
          desc:
            locale === "ro"
              ? "50k–500k+/lună · 6 săptămâni"
              : locale === "en"
                ? "50k–500k+/month · 6 weeks"
                : "50k–500k+/Monat · 6 Wochen",
        },
      ],
    },
    {
      label:
        locale === "ro"
          ? "Proiecte"
          : locale === "en"
            ? "Projects"
            : "Projekte",
      href: r.projects,
    },
    {
      label:
        locale === "ro"
          ? "Despre Noi"
          : locale === "en"
            ? "About Us"
            : "Über uns",
      href: r.about,
    },
  ];
}
