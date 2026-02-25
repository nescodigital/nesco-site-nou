import type { Metadata } from "next";
import type { Locale } from "./translations";
import { routes } from "./routes";

const BASE_URL = "https://nescodigital.com";

// Shared constants for schema.org
export const nescoPublisher = {
  "@type": "Organization",
  name: "Nesco Digital",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo-nesco-square.jpg`,
    width: "500",
    height: "500",
  },
};

export const nescoAuthor = {
  "@type": "Person",
  name: "Nesco Digital Team",
  url: BASE_URL,
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  routeKey,
  image,
  article,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  routeKey?: keyof typeof routes.ro;
  image?: string;
  article?: {
    publishedTime: string;
    authors: string[];
    section: string;
    tags: string[];
  };
}): Metadata {
  const canonical = `${BASE_URL}${path}`;
  const ogImage = image ? `${BASE_URL}${image}` : undefined;

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
      type: article ? "article" : "website",
      locale:
        locale === "ro" ? "ro_RO" : locale === "en" ? "en_US" : "de_DE",
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
      ...(article && {
        publishedTime: article.publishedTime,
        authors: article.authors,
        section: article.section,
        tags: article.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
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

// Article schema for blog posts
export function buildArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  section,
  tags,
  locale,
}: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  section: string;
  tags: string[];
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    image: `${BASE_URL}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: nescoAuthor,
    publisher: nescoPublisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: section,
    keywords: tags,
    inLanguage:
      locale === "ro" ? "ro-RO" : locale === "en" ? "en-US" : "de-DE",
  };
}

// FAQPage schema
export function buildFaqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// HowTo schema for guide articles
export function buildHowToSchema({
  name,
  description,
  url,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Review schema for testimonials
export function buildReviewSchema({
  reviewBody,
  authorName,
  ratingValue,
  itemReviewed,
}: {
  reviewBody: string;
  authorName: string;
  ratingValue: number;
  itemReviewed: { name: string; url: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody,
    author: {
      "@type": "Person",
      name: authorName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "Service",
      name: itemReviewed.name,
      url: itemReviewed.url,
    },
  };
}
