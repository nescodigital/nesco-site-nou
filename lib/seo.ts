import type { Metadata } from "next";
import type { Locale } from "./translations";
import { routes } from "./routes";

const BASE_URL = "https://nescodigital.com";

export function buildMetadata({
  locale,
  title,
  description,
  path,
  routeKey,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  routeKey?: keyof typeof routes.ro;
}): Metadata {
  const canonical = `${BASE_URL}${path}`;

  const alternates: Record<string, string> = {};
  if (routeKey) {
    alternates[`${BASE_URL}${routes.ro[routeKey]}`] = "ro";
    alternates[`${BASE_URL}${routes.en[routeKey]}`] = "en";
    alternates[`${BASE_URL}${routes.de[routeKey]}`] = "de";
  }

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical,
      languages: routeKey
        ? {
            ro: `${BASE_URL}${routes.ro[routeKey]}`,
            en: `${BASE_URL}${routes.en[routeKey]}`,
            de: `${BASE_URL}${routes.de[routeKey]}`,
            "x-default": `${BASE_URL}${routes.ro[routeKey]}`,
          }
        : undefined,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Nesco Digital",
      type: "website",
      locale:
        locale === "ro" ? "ro_RO" : locale === "en" ? "en_US" : "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Organization schema - used on all pages
export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nesco Digital",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo-nesco-square.jpg`,
    width: "500",
    height: "500",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Argentina 25 st.",
      addressLocality: "Bucharest",
      addressCountry: "RO",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Maximilianstraße 13",
      addressLocality: "München",
      addressCountry: "DE",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/nescodigital",
    "https://www.facebook.com/nescodigital",
    "https://www.instagram.com/nescodigital",
  ],
  foundingDate: "2010",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

// WebSite schema - used on homepages
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL,
  name: "Nesco Digital",
};

// Build WebPage schema for each page
export function buildWebPageSchema({
  url,
  title,
  datePublished = "2024-10-10",
  dateModified = new Date().toISOString().split("T")[0],
}: {
  url: string;
  title: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    datePublished,
    dateModified,
    isPartOf: { "@id": BASE_URL },
    about: { "@id": BASE_URL },
  };
}

// Service schema for service pages
export function buildServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Nesco Digital",
      url: BASE_URL,
    },
  };
}

// BreadcrumbList schema
export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
