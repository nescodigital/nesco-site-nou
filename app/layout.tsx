import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ArrowPattern } from "@/components/ArrowPattern";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
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
      </head>
      <body className="antialiased text-white" style={{ backgroundColor: "#050505" }}>
        <ArrowPattern />
        {children}
      </body>
    </html>
  );
}
