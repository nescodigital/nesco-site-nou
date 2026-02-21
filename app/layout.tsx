import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LazyArrowPattern } from "@/components/ui/LazyArrowPattern";
import { CookieConsent } from "@/components/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nescodigital.com"),
  title: {
    default: "Nesco Digital | Experți în Marketing Digital și Web Design",
    template: "%s | Nesco Digital",
  },
  description:
    "Partener premium de execuție digitală, de la strategie la campanii care generează revenue real. Google Ads, Facebook Ads, Web Design, SEO.",
  keywords: [
    "marketing digital",
    "google ads",
    "facebook ads",
    "web design",
    "SEO",
    "nesco digital",
  ],
  authors: [{ name: "Nesco Digital", url: "https://nescodigital.com" }],
  creator: "Nesco Digital",
  publisher: "Nesco Digital",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Nesco Digital",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nescodigital",
  },
  verification: {
    // Add Google Search Console verification token here
    // google: "your-verification-token",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nesco Digital",
  "url": "https://www.nescodigital.com",
  "logo": "https://www.nescodigital.com/logo.png",
  "description": "Agenție de marketing digital și webdesign din București. Specializată în reclame plătite, webdesign premium și Growth Sprint.",
  "email": "hello@nescodigital.com",
  "foundingDate": "2010",
  "address": [
    { "@type": "PostalAddress", "addressLocality": "București", "addressCountry": "RO" },
    { "@type": "PostalAddress", "addressLocality": "München", "addressCountry": "DE" },
  ],
  "sameAs": [
    "https://www.linkedin.com/company/nesco-digital",
    "https://www.facebook.com/nescodigital",
    "https://www.instagram.com/nescodigital",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicii Nesco Digital",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Sprint Educație Online", "description": "Engagement de 6 săptămâni pentru branduri de educație online cu venituri de 10k-100k+/lună" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Growth Sprint E-commerce", "description": "Engagement de 6 săptămâni pentru branduri e-commerce cu venituri de 50k-500k+/lună" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reclame Plătite", "description": "Google Ads, Facebook Ads, TikTok Ads, LinkedIn Ads" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Webdesign Premium", "description": "Site-uri de prezentare, magazine online, website-uri lead generation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Digital", "description": "SEO, Email Marketing, Social Media, CRO, Strategie Digitală" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,800,900&display=swap"
        />
        <link rel="icon" href="/logo mare Nesco.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo mare Nesco.svg" />
        <meta name="theme-color" content="#080b0f" />
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PSFGPWEJV1" />
        <script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PSFGPWEJV1');
` }} />
        {/* Meta Pixel */}
        <script dangerouslySetInnerHTML={{ __html: `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1163980934680660');
  fbq('track', 'PageView');
` }} />
        <noscript dangerouslySetInnerHTML={{ __html: `
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1163980934680660&ev=PageView&noscript=1"/>
` }} />
      </head>
      <body className="antialiased text-white" style={{ backgroundColor: "#050505" }}>
        <LazyArrowPattern />
        <CookieConsent />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
