'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

/* ------------------------------------------------------------------ */
/*  Blog image references — all 3 languages share the same images     */
/* ------------------------------------------------------------------ */

type BlogArticle = {
  slug: string;
  title: string;
  lang: 'RO' | 'EN' | 'DE';
  imageRef: string;        // the path referenced in code (e.g. /blog/foo.jpg)
  imageActual?: string;    // the actual file found on disk (may differ in extension)
  imageExists: boolean;    // computed dynamically
};

// All referenced images from blog listing pages (slug → base name without extension)
const imageRefs: { slug: string; baseName: string }[] = [
  { slug: 'cum-construiesti-funnel-vanzari', baseName: 'cum-construiesti-funnel-vanzari' },
  { slug: 'whatsapp-business-vanzari-suport', baseName: 'whatsapp-business-vanzari-suport' },
  { slug: 'cele-mai-bune-tool-uri-ai-marketing', baseName: 'cele-mai-bune-tool-uri-ai-marketing' },
  { slug: 'cum-creezi-vinzi-cursuri-online', baseName: 'cum-creezi-vinzi-cursuri-online' },
  { slug: 'cele-mai-bune-landing-page-builders', baseName: 'cele-mai-bune-landing-page-builders' },
  { slug: 'automatizare-marketing-ghid-tools', baseName: 'automatizare-marketing-ghid-tools' },
  { slug: 'cele-mai-bune-chatbot-live-chat', baseName: 'cele-mai-bune-chatbot-live-chat' },
  { slug: 'cele-mai-bune-platforme-email-marketing', baseName: 'cele-mai-bune-platforme-email-marketing' },
  { slug: 'geo-optimizare-ai-search', baseName: 'geo-optimizare-ai-search' },
  { slug: 'cat-costa-un-site-web', baseName: 'cat-costa-un-site-web' },
  { slug: 'cat-costa-google-ads-romania', baseName: 'cat-costa-google-ads-romania' },
  { slug: 'cost-specialist-intern-vs-agentie', baseName: 'cost-specialist-vs-agentie' },
  { slug: 'abandon-cos-cumparaturi', baseName: 'abandon-cos-cumparaturi' },
  { slug: 'de-ce-nu-merg-reclamele-meta', baseName: 'de-ce-nu-merg-meta-ads' },
  { slug: 'seo-local-google-maps', baseName: 'seo-local-google-maps' },
  { slug: 'facebook-ads-vs-google-ads-ecommerce', baseName: 'facebook-ads-vs-google-ads-ecommerce' },
  { slug: 'seo-vs-google-ads', baseName: 'seo-vs-google-ads' },
  { slug: 'ai-overviews-impact-seo', baseName: 'ai-overviews-impact-seo' },
  { slug: 'ce-este-growth-sprint', baseName: 'ce-este-growth-sprint' },
  { slug: 'reclame-tiktok-romania', baseName: 'reclame-tiktok-romania' },
  { slug: 'cum-alegi-agentie-marketing', baseName: 'cum-alegi-agentie-marketing' },
  { slug: 'rata-de-conversie-ghid', baseName: 'rata-de-conversie-ghid' },
  { slug: 'creste-vanzari-magazin-online', baseName: 'creste-vanzari-magazin-online' },
  { slug: 'strategie-marketing-digital-ghid', baseName: 'strategie-marketing-digital-ghid' },
  { slug: 'email-marketing-ecommerce', baseName: 'email-marketing-ecommerce' },
  { slug: 'de-ce-nu-functioneaza-marketingul', baseName: 'de-ce-nu-functioneaza-marketingul' },
  { slug: 'linkedin-ads-b2b-romania', baseName: 'linkedin-ads-b2b-romania' },
  { slug: 'performance-max-ecommerce', baseName: 'performance-max-ecommerce' },
  { slug: 'ai-in-marketing-2026', baseName: 'ai-in-marketing-2026' },
  { slug: 'retargeting-remarketing-ghid', baseName: 'retargeting-remarketing' },
  { slug: 'cum-alegi-crm', baseName: 'cum-alegi-crm' },
];

// Static article definitions — imageExists will be computed on mount
const articleDefs: Omit<BlogArticle, 'imageExists' | 'imageActual'>[] = [
  // RO
  { slug: '/blog/cost-specialist-intern-vs-agentie/', title: 'Cat Costa un Specialist Intern vs. o Agentie de Marketing?', lang: 'RO', imageRef: '/blog/cost-specialist-vs-agentie.jpg' },
  { slug: '/blog/de-ce-nu-merg-reclamele-meta/', title: 'De Ce Nu-ti Merg Reclamele pe Meta? 7 Greseli Frecvente', lang: 'RO', imageRef: '/blog/de-ce-nu-merg-meta-ads.jpg' },
  { slug: '/blog/seo-vs-google-ads/', title: 'SEO vs. Google Ads: Ce Alegi Cand Ai Buget Limitat?', lang: 'RO', imageRef: '/blog/seo-vs-google-ads.jpg' },
  { slug: '/blog/geo-optimizare-ai-search/', title: 'Cum sa apari in ChatGPT si Google AI Overviews (GEO)', lang: 'RO', imageRef: '/blog/geo-optimizare-ai-search.png' },
  { slug: '/blog/cat-costa-un-site-web/', title: 'Cat Costa un Site Web in 2026? Ghid Complet de Preturi', lang: 'RO', imageRef: '/blog/cat-costa-un-site-web.png' },
  { slug: '/blog/cat-costa-google-ads-romania/', title: 'Cat costa Google Ads in Romania? Ghid de bugete 2026', lang: 'RO', imageRef: '/blog/cat-costa-google-ads-romania.png' },
  { slug: '/blog/abandon-cos-cumparaturi/', title: 'De ce iti abandoneaza clientii cosul (si cum repari)', lang: 'RO', imageRef: '/blog/abandon-cos-cumparaturi.png' },
  { slug: '/blog/seo-local-google-maps/', title: 'SEO local: Cum sa apari primul pe Google in orasul tau', lang: 'RO', imageRef: '/blog/seo-local-google-maps.png' },
  { slug: '/blog/facebook-ads-vs-google-ads-ecommerce/', title: 'Facebook Ads vs Google Ads: Ce alegi pentru magazinul online?', lang: 'RO', imageRef: '/blog/facebook-ads-vs-google-ads-ecommerce.png' },
  { slug: '/blog/ai-overviews-impact-seo/', title: 'Cum afecteaza AI Overviews SEO-ul si ce trebuie sa faci', lang: 'RO', imageRef: '/blog/ai-overviews-impact-seo.png' },
  { slug: '/blog/ce-este-growth-sprint/', title: 'Ce este un Growth Sprint si cum accelereaza cresterea', lang: 'RO', imageRef: '/blog/ce-este-growth-sprint.png' },
  { slug: '/blog/cum-alegi-agentie-marketing/', title: 'Cum sa alegi agentia de marketing potrivita: Checklist 10 pasi', lang: 'RO', imageRef: '/blog/cum-alegi-agentie-marketing.png' },
  { slug: '/blog/reclame-tiktok-romania/', title: 'Cum sa faci reclame pe TikTok in Romania: Ghid complet', lang: 'RO', imageRef: '/blog/reclame-tiktok-romania.png' },
  { slug: '/blog/rata-de-conversie-ghid/', title: 'Rata de conversie: Ce este, cum o calculezi, cum o cresti', lang: 'RO', imageRef: '/blog/rata-de-conversie-ghid.jpg' },
  { slug: '/blog/creste-vanzari-magazin-online/', title: '15 strategii testate sa cresti vanzarile in magazinul online', lang: 'RO', imageRef: '/blog/creste-vanzari-magazin-online.png' },
  { slug: '/blog/strategie-marketing-digital-ghid/', title: 'Strategie de Marketing Digital Pas cu Pas (Ghid 2026)', lang: 'RO', imageRef: '/blog/strategie-marketing-digital-ghid.jpg' },
  { slug: '/blog/email-marketing-ecommerce/', title: 'Email Marketing pentru Ecommerce: Cum Cresti Vanzarile', lang: 'RO', imageRef: '/blog/email-marketing-ecommerce.png' },
  { slug: '/blog/de-ce-nu-functioneaza-marketingul/', title: 'De ce nu functioneaza marketingul digital al afacerii tale', lang: 'RO', imageRef: '/blog/de-ce-nu-functioneaza-marketingul.png' },
  { slug: '/blog/linkedin-ads-b2b-romania/', title: 'LinkedIn Ads pentru B2B in Romania: Merita investitia?', lang: 'RO', imageRef: '/blog/linkedin-ads-b2b-romania.png' },
  { slug: '/blog/performance-max-ecommerce/', title: 'Performance Max 2026: Ghid complet pentru magazine online', lang: 'RO', imageRef: '/blog/performance-max-ecommerce.png' },
  { slug: '/blog/ai-in-marketing-2026/', title: 'Cum folosesc companiile AI in marketing in 2026', lang: 'RO', imageRef: '/blog/ai-in-marketing-2026.png' },
  { slug: '/blog/retargeting-remarketing-ghid/', title: 'Retargeting si Remarketing: Cum Recuperezi Clientii Pierduti', lang: 'RO', imageRef: '/blog/retargeting-remarketing.png' },
  { slug: '/blog/cum-alegi-crm/', title: 'Cum sa alegi si sa implementezi un CRM in 2026', lang: 'RO', imageRef: '/blog/cum-alegi-crm.png' },
  { slug: '/blog/whatsapp-business-vanzari-suport/', title: 'WhatsApp Business: Ghid complet pentru vanzari si suport', lang: 'RO', imageRef: '/blog/whatsapp-business-vanzari-suport.png' },
  { slug: '/blog/automatizare-marketing-ghid-tools/', title: 'Cum sa-ti automatizezi marketingul: Ghid complet de tools', lang: 'RO', imageRef: '/blog/automatizare-marketing-ghid-tools.png' },
  { slug: '/blog/cele-mai-bune-tool-uri-ai-marketing/', title: 'Cele mai bune tool-uri AI pentru marketing digital in 2026', lang: 'RO', imageRef: '/blog/cele-mai-bune-tool-uri-ai-marketing.jpg' },
  { slug: '/blog/cum-creezi-vinzi-cursuri-online/', title: 'Cum sa creezi si sa vinzi cursuri online in 2026', lang: 'RO', imageRef: '/blog/cum-creezi-vinzi-cursuri-online.jpg' },
  { slug: '/blog/cum-construiesti-funnel-vanzari/', title: 'Cum sa construiesti un funnel de vanzari complet', lang: 'RO', imageRef: '/blog/cum-construiesti-funnel-vanzari.jpg' },
  { slug: '/blog/cele-mai-bune-platforme-email-marketing/', title: 'Cele mai bune platforme de email marketing in 2026', lang: 'RO', imageRef: '/blog/cele-mai-bune-platforme-email-marketing.png' },
  { slug: '/blog/cele-mai-bune-landing-page-builders/', title: 'Cele mai bune landing page builders pentru conversii mai mari', lang: 'RO', imageRef: '/blog/cele-mai-bune-landing-page-builders.png' },
  { slug: '/blog/cele-mai-bune-chatbot-live-chat/', title: 'Cele mai bune chatbot-uri si tool-uri de live chat', lang: 'RO', imageRef: '/blog/cele-mai-bune-chatbot-live-chat.png' },
  // EN
  { slug: '/en/blog/cost-internal-specialist-vs-agency/', title: 'How Much Does an In-House Specialist Cost vs. a Marketing Agency?', lang: 'EN', imageRef: '/blog/cost-specialist-vs-agentie.jpg' },
  { slug: '/en/blog/why-meta-ads-dont-work/', title: "Why Your Meta Ads Don't Work: 7 Common Mistakes", lang: 'EN', imageRef: '/blog/de-ce-nu-merg-meta-ads.jpg' },
  { slug: '/en/blog/seo-vs-google-ads/', title: 'SEO vs. Google Ads: What to Choose with a Limited Budget?', lang: 'EN', imageRef: '/blog/seo-vs-google-ads.jpg' },
  { slug: '/en/blog/geo-optimization-ai-search/', title: 'How to Appear in ChatGPT and Google AI Overviews (GEO)', lang: 'EN', imageRef: '/blog/geo-optimizare-ai-search.png' },
  { slug: '/en/blog/how-much-does-a-website-cost/', title: 'How Much Does a Website Cost in 2026?', lang: 'EN', imageRef: '/blog/cat-costa-un-site-web.png' },
  { slug: '/en/blog/how-much-does-google-ads-cost/', title: 'How Much Does Google Ads Cost? Budget Guide 2026', lang: 'EN', imageRef: '/blog/cat-costa-google-ads-romania.png' },
  { slug: '/en/blog/cart-abandonment-fix/', title: 'Why Customers Abandon Carts (and How to Fix It)', lang: 'EN', imageRef: '/blog/abandon-cos-cumparaturi.png' },
  { slug: '/en/blog/local-seo-google-maps/', title: 'Local SEO: How to Rank First on Google in Your City', lang: 'EN', imageRef: '/blog/seo-local-google-maps.png' },
  { slug: '/en/blog/facebook-ads-vs-google-ads-ecommerce/', title: 'Facebook Ads vs Google Ads: Which to Choose for E-commerce?', lang: 'EN', imageRef: '/blog/facebook-ads-vs-google-ads-ecommerce.png' },
  { slug: '/en/blog/ai-overviews-seo-impact/', title: 'How AI Overviews Affect SEO and What to Do', lang: 'EN', imageRef: '/blog/ai-overviews-impact-seo.png' },
  { slug: '/en/blog/what-is-growth-sprint/', title: 'What is a Growth Sprint and How It Accelerates Growth', lang: 'EN', imageRef: '/blog/ce-este-growth-sprint.png' },
  { slug: '/en/blog/how-to-choose-marketing-agency/', title: 'How to Choose the Right Marketing Agency: 10-Step Checklist', lang: 'EN', imageRef: '/blog/cum-alegi-agentie-marketing.png' },
  { slug: '/en/blog/tiktok-ads-guide/', title: 'TikTok Ads Guide: Complete Guide for Businesses', lang: 'EN', imageRef: '/blog/reclame-tiktok-romania.png' },
  { slug: '/en/blog/conversion-rate-guide/', title: 'Conversion Rate: What It Is, How to Calculate, How to Improve', lang: 'EN', imageRef: '/blog/rata-de-conversie-ghid.jpg' },
  { slug: '/en/blog/increase-online-store-sales/', title: '15 Tested Strategies to Increase Online Store Sales', lang: 'EN', imageRef: '/blog/creste-vanzari-magazin-online.png' },
  { slug: '/en/blog/digital-marketing-strategy-guide/', title: 'Digital Marketing Strategy Step by Step (2026 Guide)', lang: 'EN', imageRef: '/blog/strategie-marketing-digital-ghid.jpg' },
  { slug: '/en/blog/email-marketing-ecommerce/', title: 'Email Marketing for E-commerce: How to Grow Sales', lang: 'EN', imageRef: '/blog/email-marketing-ecommerce.png' },
  { slug: '/en/blog/why-digital-marketing-not-working/', title: "Why Your Business's Digital Marketing Isn't Working", lang: 'EN', imageRef: '/blog/de-ce-nu-functioneaza-marketingul.png' },
  { slug: '/en/blog/linkedin-ads-b2b/', title: 'LinkedIn Ads for B2B: Is It Worth the Investment?', lang: 'EN', imageRef: '/blog/linkedin-ads-b2b-romania.png' },
  { slug: '/en/blog/performance-max-ecommerce/', title: 'Performance Max 2026: Complete Guide for Online Stores', lang: 'EN', imageRef: '/blog/performance-max-ecommerce.png' },
  { slug: '/en/blog/ai-in-marketing-2026/', title: 'How Companies Use AI in Marketing in 2026', lang: 'EN', imageRef: '/blog/ai-in-marketing-2026.png' },
  { slug: '/en/blog/retargeting-remarketing-guide/', title: 'Retargeting and Remarketing: How to Win Back Lost Customers', lang: 'EN', imageRef: '/blog/retargeting-remarketing.png' },
  { slug: '/en/blog/how-to-choose-crm/', title: 'How to Choose and Implement a CRM in 2026', lang: 'EN', imageRef: '/blog/cum-alegi-crm.png' },
  { slug: '/en/blog/whatsapp-business-sales-support/', title: 'WhatsApp Business: Complete Guide for Sales and Support', lang: 'EN', imageRef: '/blog/whatsapp-business-vanzari-suport.png' },
  { slug: '/en/blog/marketing-automation-tools-guide/', title: 'How to Automate Your Marketing: Complete Tools Guide', lang: 'EN', imageRef: '/blog/automatizare-marketing-ghid-tools.png' },
  { slug: '/en/blog/best-ai-tools-digital-marketing/', title: 'Best AI Tools for Digital Marketing in 2026', lang: 'EN', imageRef: '/blog/cele-mai-bune-tool-uri-ai-marketing.jpg' },
  { slug: '/en/blog/how-to-create-sell-online-courses/', title: 'How to Create and Sell Online Courses in 2026', lang: 'EN', imageRef: '/blog/cum-creezi-vinzi-cursuri-online.jpg' },
  { slug: '/en/blog/how-to-build-sales-funnel/', title: 'How to Build a Complete Sales Funnel', lang: 'EN', imageRef: '/blog/cum-construiesti-funnel-vanzari.jpg' },
  { slug: '/en/blog/best-email-marketing-platforms/', title: 'Best Email Marketing Platforms in 2026', lang: 'EN', imageRef: '/blog/cele-mai-bune-platforme-email-marketing.png' },
  { slug: '/en/blog/best-landing-page-builders/', title: 'Best Landing Page Builders for Higher Conversions', lang: 'EN', imageRef: '/blog/cele-mai-bune-landing-page-builders.png' },
  { slug: '/en/blog/best-chatbot-live-chat-tools/', title: 'Best Chatbot and Live Chat Tools', lang: 'EN', imageRef: '/blog/cele-mai-bune-chatbot-live-chat.png' },
  // DE
  { slug: '/ge/blog/kosten-interner-spezialist-vs-agentur/', title: 'Was kostet ein interner Spezialist vs. eine Marketing-Agentur?', lang: 'DE', imageRef: '/blog/cost-specialist-vs-agentie.jpg' },
  { slug: '/ge/blog/warum-meta-ads-nicht-funktionieren/', title: 'Warum Ihre Meta Ads nicht funktionieren: 7 haufige Fehler', lang: 'DE', imageRef: '/blog/de-ce-nu-merg-meta-ads.jpg' },
  { slug: '/ge/blog/seo-vs-google-ads/', title: 'SEO vs. Google Ads: Was wahlen bei begrenztem Budget?', lang: 'DE', imageRef: '/blog/seo-vs-google-ads.jpg' },
  { slug: '/ge/blog/geo-optimierung-ai-search/', title: 'Wie Sie in ChatGPT und Google AI Overviews erscheinen (GEO)', lang: 'DE', imageRef: '/blog/geo-optimizare-ai-search.png' },
  { slug: '/ge/blog/was-kostet-eine-website/', title: 'Was kostet eine Website 2026? Kompletter Preis-Leitfaden', lang: 'DE', imageRef: '/blog/cat-costa-un-site-web.png' },
  { slug: '/ge/blog/was-kostet-google-ads/', title: 'Was kostet Google Ads? Budget-Leitfaden 2026', lang: 'DE', imageRef: '/blog/cat-costa-google-ads-romania.png' },
  { slug: '/ge/blog/warenkorbabbruch-beheben/', title: 'Warenkorbabbruch: Warum Kunden abbrechen und wie Sie es beheben', lang: 'DE', imageRef: '/blog/abandon-cos-cumparaturi.png' },
  { slug: '/ge/blog/lokales-seo-google-maps/', title: 'Lokales SEO: Wie Sie auf Google Maps in Ihrer Stadt auf Platz 1 kommen', lang: 'DE', imageRef: '/blog/seo-local-google-maps.png' },
  { slug: '/ge/blog/facebook-ads-vs-google-ads-ecommerce/', title: 'Facebook Ads vs Google Ads: Was wahlen fur E-Commerce?', lang: 'DE', imageRef: '/blog/facebook-ads-vs-google-ads-ecommerce.png' },
  { slug: '/ge/blog/ai-overviews-seo-auswirkungen/', title: 'Wie AI Overviews SEO beeinflussen und was zu tun ist', lang: 'DE', imageRef: '/blog/ai-overviews-impact-seo.png' },
  { slug: '/ge/blog/was-ist-growth-sprint/', title: 'Was ist ein Growth Sprint und wie beschleunigt er das Wachstum', lang: 'DE', imageRef: '/blog/ce-este-growth-sprint.png' },
  { slug: '/ge/blog/wie-marketing-agentur-waehlen/', title: 'Wie Sie die richtige Marketing-Agentur wahlen: 10-Schritte-Checkliste', lang: 'DE', imageRef: '/blog/cum-alegi-agentie-marketing.png' },
  { slug: '/ge/blog/tiktok-ads-anleitung/', title: 'TikTok Ads Anleitung: Kompletter Leitfaden fur Unternehmen', lang: 'DE', imageRef: '/blog/reclame-tiktok-romania.png' },
  { slug: '/ge/blog/conversion-rate-leitfaden/', title: 'Conversion Rate: Was es ist, wie berechnen, wie verbessern', lang: 'DE', imageRef: '/blog/rata-de-conversie-ghid.jpg' },
  { slug: '/ge/blog/online-shop-umsatz-steigern/', title: '15 getestete Strategien um Online-Shop-Umsatz zu steigern', lang: 'DE', imageRef: '/blog/creste-vanzari-magazin-online.png' },
  { slug: '/ge/blog/digitale-marketing-strategie-leitfaden/', title: 'Digitale Marketing-Strategie Schritt fur Schritt (Leitfaden 2026)', lang: 'DE', imageRef: '/blog/strategie-marketing-digital-ghid.jpg' },
  { slug: '/ge/blog/email-marketing-ecommerce/', title: 'E-Mail-Marketing fur E-Commerce: Wie Sie den Umsatz steigern', lang: 'DE', imageRef: '/blog/email-marketing-ecommerce.png' },
  { slug: '/ge/blog/warum-digitales-marketing-nicht-funktioniert/', title: 'Warum das digitale Marketing Ihres Unternehmens nicht funktioniert', lang: 'DE', imageRef: '/blog/de-ce-nu-functioneaza-marketingul.png' },
  { slug: '/ge/blog/linkedin-ads-b2b/', title: 'LinkedIn Ads fur B2B: Lohnt sich die Investition?', lang: 'DE', imageRef: '/blog/linkedin-ads-b2b-romania.png' },
  { slug: '/ge/blog/performance-max-ecommerce/', title: 'Performance Max 2026: Kompletter Leitfaden fur Online-Shops', lang: 'DE', imageRef: '/blog/performance-max-ecommerce.png' },
  { slug: '/ge/blog/ki-im-marketing-2026/', title: 'Wie Unternehmen KI im Marketing 2026 nutzen', lang: 'DE', imageRef: '/blog/ai-in-marketing-2026.png' },
  { slug: '/ge/blog/retargeting-remarketing-leitfaden/', title: 'Retargeting und Remarketing: Wie Sie verlorene Kunden zuruckgewinnen', lang: 'DE', imageRef: '/blog/retargeting-remarketing.png' },
  { slug: '/ge/blog/wie-crm-waehlen/', title: 'Wie Sie ein CRM wahlen und implementieren 2026', lang: 'DE', imageRef: '/blog/cum-alegi-crm.png' },
  { slug: '/ge/blog/whatsapp-business-vertrieb-support/', title: 'WhatsApp Business: Kompletter Leitfaden fur Vertrieb und Support', lang: 'DE', imageRef: '/blog/whatsapp-business-vanzari-suport.png' },
  { slug: '/ge/blog/marketing-automatisierung-tools-leitfaden/', title: 'Wie Sie Ihr Marketing automatisieren: Kompletter Tools-Leitfaden', lang: 'DE', imageRef: '/blog/automatizare-marketing-ghid-tools.png' },
  { slug: '/ge/blog/beste-ki-tools-digitales-marketing/', title: 'Beste KI-Tools fur digitales Marketing 2026', lang: 'DE', imageRef: '/blog/cele-mai-bune-tool-uri-ai-marketing.jpg' },
  { slug: '/ge/blog/online-kurse-erstellen-verkaufen/', title: 'Online-Kurse erstellen und verkaufen 2026', lang: 'DE', imageRef: '/blog/cum-creezi-vinzi-cursuri-online.jpg' },
  { slug: '/ge/blog/sales-funnel-aufbauen-anleitung/', title: 'Wie Sie einen kompletten Sales Funnel aufbauen', lang: 'DE', imageRef: '/blog/cum-construiesti-funnel-vanzari.jpg' },
  { slug: '/ge/blog/beste-email-marketing-plattformen/', title: 'Beste E-Mail-Marketing-Plattformen 2026', lang: 'DE', imageRef: '/blog/cele-mai-bune-platforme-email-marketing.png' },
  { slug: '/ge/blog/beste-landing-page-builder/', title: 'Beste Landing Page Builder fur hohere Conversions', lang: 'DE', imageRef: '/blog/cele-mai-bune-landing-page-builders.png' },
  { slug: '/ge/blog/beste-chatbot-live-chat-tools/', title: 'Beste Chatbot- und Live-Chat-Tools', lang: 'DE', imageRef: '/blog/cele-mai-bune-chatbot-live-chat.png' },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Extract base name from a path like /blog/foo.jpg → foo */
function baseName(path: string): string {
  const file = path.split('/').pop() || '';
  return file.replace(/\.[^.]+$/, '');
}

/** Build a map: baseName → actual path (from live file list) */
function buildExistingMap(images: string[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const img of images) {
    map.set(baseName(img), img);
  }
  return map;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const LANG_COLORS: Record<string, string> = {
  RO: '#3b82f6',
  EN: '#f59e0b',
  DE: '#ef4444',
};

type FilterLang = 'ALL' | 'RO' | 'EN' | 'DE';
type FilterStatus = 'ALL' | 'HAS' | 'MISSING';

export default function BlogImagesPage() {
  const [langFilter, setLangFilter] = useState<FilterLang>('ALL');
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('ALL');
  const [search, setSearch] = useState('');
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch existing images from API on mount
  useEffect(() => {
    fetch('/api/blog-images')
      .then((r) => r.json())
      .then((data) => setExistingImages(data.images || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Build lookup from existing images
  const existingMap = buildExistingMap(existingImages);

  // Compute articles with live imageExists
  const allArticles: BlogArticle[] = articleDefs.map((a) => {
    const base = baseName(a.imageRef);
    const actual = existingMap.get(base);
    return {
      ...a,
      imageExists: !!actual,
      imageActual: actual,
    };
  });

  const filtered = allArticles.filter((a) => {
    if (langFilter !== 'ALL' && a.lang !== langFilter) return false;
    if (statusFilter === 'HAS' && !a.imageExists) return false;
    if (statusFilter === 'MISSING' && a.imageExists) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase()) && !a.slug.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const roArticles = allArticles.filter((a) => a.lang === 'RO');
  const enArticles = allArticles.filter((a) => a.lang === 'EN');
  const deArticles = allArticles.filter((a) => a.lang === 'DE');
  const totalArticles = allArticles.length;
  const withImages = allArticles.filter((a) => a.imageExists).length;
  const missingImages = totalArticles - withImages;
  const uniqueImages = new Set(allArticles.map((a) => baseName(a.imageRef)));
  const uniqueExisting = new Set(allArticles.filter((a) => a.imageExists).map((a) => baseName(a.imageRef)));
  const uniqueMissing = uniqueImages.size - uniqueExisting.size;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #050505;
          color: #dce4e8;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        }
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
      `}} />

      <div style={{ position: 'relative', zIndex: 1, padding: '48px 40px 100px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Back link */}
        <Link href="/admin" style={{ color: '#5a6872', fontSize: '13px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px', fontFamily: "'DM Mono', monospace" }}>
          <span style={{ fontSize: '16px' }}>&larr;</span> Dashboard
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#f472b6', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>
            BLOG IMAGES
          </div>
          <h1 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '28px', fontWeight: 800, color: '#dce4e8', letterSpacing: '-0.5px', margin: 0 }}>
            Blog Image Status
          </h1>
          <p style={{ color: '#5a6872', fontSize: '14px', marginTop: '8px' }}>
            Image availability for all blog articles across RO, EN, DE — auto-detected from /public/blog/
          </p>
        </div>

        {loading ? (
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: '#5a6872', padding: '40px 0' }}>
            Scanning /public/blog/ ...
          </div>
        ) : (
          <>
            {/* Summary stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'Total Articles', value: totalArticles, sub: `${roArticles.length} RO / ${enArticles.length} EN / ${deArticles.length} DE`, color: '#f472b6' },
                { label: 'With Images', value: withImages, sub: `${uniqueExisting.size} unique files`, color: '#56db84' },
                { label: 'Missing Images', value: missingImages, sub: `${uniqueMissing} unique files needed`, color: '#ef4444' },
                { label: 'Files on Disk', value: existingImages.length, sub: 'in /public/blog/', color: '#facc15' },
              ].map((s) => (
                <div key={s.label} style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${s.color}, ${s.color}33)` }} />
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>{s.label}</div>
                  <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '32px', fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872', marginTop: '4px' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {(['ALL', 'RO', 'EN', 'DE'] as FilterLang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLangFilter(l)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      border: `1px solid ${langFilter === l ? '#f472b6' : '#1a1a1a'}`,
                      background: langFilter === l ? '#f472b620' : '#0a0a0a',
                      color: langFilter === l ? '#f472b6' : '#5a6872',
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '11px',
                      cursor: 'pointer',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '4px' }}>
                {([
                  { key: 'ALL', label: 'All' },
                  { key: 'HAS', label: 'Has image' },
                  { key: 'MISSING', label: 'Missing' },
                ] as { key: FilterStatus; label: string }[]).map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setStatusFilter(s.key)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      border: `1px solid ${statusFilter === s.key ? '#f472b6' : '#1a1a1a'}`,
                      background: statusFilter === s.key ? '#f472b620' : '#0a0a0a',
                      color: statusFilter === s.key ? '#f472b6' : '#5a6872',
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '11px',
                      cursor: 'pointer',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '8px 14px',
                  background: '#0a0a0a',
                  border: '1px solid #1a1a1a',
                  borderRadius: '6px',
                  color: '#dce4e8',
                  fontSize: '13px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                }}
              />
            </div>

            {/* Results count */}
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#5a6872', marginBottom: '16px' }}>
              Showing {filtered.length} of {totalArticles} articles
            </div>

            {/* Articles grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
              {filtered.map((article) => (
                <div
                  key={article.slug}
                  style={{
                    background: '#0a0a0a',
                    border: '1px solid #1a1a1a',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                >
                  {/* Image area */}
                  <div style={{
                    height: '160px',
                    background: article.imageExists ? '#111' : '#0d0d0d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid #1a1a1a',
                  }}>
                    {article.imageExists ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={article.imageActual || article.imageRef}
                          alt={article.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).nextElementSibling?.removeAttribute('style');
                          }}
                        />
                        <div style={{ display: 'none', textAlign: 'center' }}>
                          <div style={{ fontSize: '32px', marginBottom: '4px' }}>&#128247;</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#56db84' }}>Image exists</div>
                        </div>
                      </>
                    ) : (
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '32px', marginBottom: '4px', opacity: 0.3 }}>&#128247;</div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#ef4444' }}>Image missing</div>
                      </div>
                    )}

                    {/* Status badge */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontFamily: "'DM Mono', monospace",
                      fontWeight: 500,
                      background: article.imageExists ? '#56db8420' : '#ef444420',
                      color: article.imageExists ? '#56db84' : '#ef4444',
                      border: `1px solid ${article.imageExists ? '#56db8440' : '#ef444440'}`,
                    }}>
                      {article.imageExists ? '\u2713 Has image' : '\u2717 Missing'}
                    </div>

                    {/* Language badge */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontFamily: "'DM Mono', monospace",
                      fontWeight: 500,
                      background: `${LANG_COLORS[article.lang]}20`,
                      color: LANG_COLORS[article.lang],
                      border: `1px solid ${LANG_COLORS[article.lang]}40`,
                    }}>
                      {article.lang}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '16px' }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#dce4e8',
                      lineHeight: 1.4,
                      marginBottom: '8px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {article.title}
                    </div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      color: '#5a6872',
                      wordBreak: 'break-all',
                    }}>
                      {article.imageActual || article.imageRef}
                      {article.imageActual && article.imageActual !== article.imageRef && (
                        <span style={{ color: '#f59e0b', marginLeft: '6px' }}>
                          (ref: {article.imageRef.split('/').pop()})
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Missing images file list */}
            {uniqueMissing > 0 && (
              <div style={{ marginTop: '40px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#ef4444', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
                  MISSING IMAGE FILES ({uniqueMissing})
                </div>
                <p style={{ fontSize: '13px', color: '#5a6872', marginBottom: '16px' }}>
                  These base names are referenced but no matching file (.jpg, .png, .webp) exists in <code style={{ color: '#f472b6', fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>/public/blog/</code>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[...uniqueImages].filter((base) => !existingMap.has(base)).sort().map((base) => (
                    <div key={base} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '12px',
                      color: '#ef4444',
                      padding: '8px 12px',
                      background: '#ef444408',
                      border: '1px solid #ef444420',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{ opacity: 0.5 }}>{'\u2717'}</span>
                      {base}.*
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Existing images file list */}
            <div style={{ marginTop: '16px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#56db84', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
                EXISTING IMAGE FILES ({existingImages.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[...existingImages].sort().map((img) => (
                  <div key={img} style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '12px',
                    color: '#56db84',
                    padding: '8px 12px',
                    background: '#56db8408',
                    border: '1px solid #56db8420',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <span>{'\u2713'}</span>
                    {img}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
