'use client';

import Link from 'next/link';
import { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Real metadata extracted from codebase                              */
/* ------------------------------------------------------------------ */

type PageMeta = {
  path: string;
  title: string;
  description: string;
  robots: 'index' | 'noindex';
  group: 'main' | 'blogRO' | 'blogEN' | 'blogDE' | 'service';
};

const pages: PageMeta[] = [
  // ── Main pages ──────────────────────────────────────────────────
  { path: '/', title: 'Nesco Digital | Experti in Marketing Digital si Web Design', description: 'Partener premium de executie digitala. Google Ads, Facebook Ads, Web Design, SEO si strategii de crestere, livram rezultate masurabile pentru afacerea ta.', robots: 'index', group: 'main' },
  { path: '/en/', title: 'Nesco Digital | Digital Marketing Experts & Web Development', description: 'Premium digital execution partner. Google Ads, Facebook Ads, Web Design, SEO, and growth strategies, we deliver measurable results for your business.', robots: 'index', group: 'main' },
  { path: '/ge/', title: 'Nesco Digital | Experten fur digitales Marketing & Web', description: 'Premium Digital-Wachstumspartner. Google Ads, Facebook Ads, Webdesign, SEO und Wachstumsstrategien, wir liefern messbare Ergebnisse fur Ihr Unternehmen.', robots: 'index', group: 'main' },
  { path: '/contact/', title: 'Contact | Programeaza un apel de discovery gratuit | Nesco Digital', description: 'Gata sa iti cresti afacerea? Programeaza un apel gratuit. Analizam situatia ta si prezentam un plan de actiune concret in 24 de ore.', robots: 'index', group: 'main' },
  { path: '/proiecte/', title: 'Proiecte | Studii de Caz Marketing Digital | Nesco Digital', description: 'Rezultate reale pentru clienti reali. Revenue de 7 cifre, crestere 400%, ROI de 5X, exploreaza studiile noastre de caz.', robots: 'index', group: 'main' },
  { path: '/despre-nesco-digital/', title: 'Despre Nesco Digital | Partener Premium de Marketing Digital', description: '15+ ani de experienta in marketing digital. Partener premium de executie pentru afaceri care vor sa creasca.', robots: 'index', group: 'main' },
  { path: '/cum-lucram/', title: 'Cum Lucram | Procesul Nesco Digital', description: 'Ce se intampla dupa ce ne contactezi. Procesul nostru de lucru pas cu pas — de la primul apel pana la scalare.', robots: 'index', group: 'main' },
  { path: '/cu-cine-nu-lucram/', title: 'Cu cine nu lucram | Nesco Digital', description: 'Suntem sinceri de la inceput. Nu suntem potriviti pentru oricine — si asta e un lucru bun.', robots: 'index', group: 'main' },
  { path: '/politica-de-confidentialitate/', title: 'Politica de Confidentialitate | Nesco Digital', description: 'Afla cum colectam, folosim si protejam datele tale personale. Conformitate GDPR completa.', robots: 'index', group: 'main' },
  { path: '/termeni-si-conditii/', title: 'Termeni si Conditii | Nesco Digital', description: 'Termenii si conditiile de utilizare a site-ului nescodigital.com.', robots: 'index', group: 'main' },
  { path: '/ghid-gratuit/', title: 'Unde se pierd banii — Ghid gratuit — Nesco Digital', description: '7 scurgeri de venituri pe care nu le vezi din interior — si cum le identifici inainte sa te coste si mai mult. Ghid gratuit de la Nesco Digital.', robots: 'index', group: 'main' },
  { path: '/perfect-fit/', title: 'Rezerva apelul de diagnostic — Nesco Digital', description: '', robots: 'noindex', group: 'main' },
  { path: '/blog/', title: 'Blog | Strategii de Marketing Digital | Nesco Digital', description: 'Articole practice despre marketing digital, paid ads, SEO si strategie. Insights testate pe bugete reale de la echipa Nesco Digital.', robots: 'index', group: 'main' },
  { path: '/en/blog/', title: 'Blog | Digital Marketing Strategies | Nesco Digital', description: 'Practical articles about digital marketing, paid ads, SEO and strategy. Real-budget-tested insights from the Nesco Digital team.', robots: 'index', group: 'main' },
  { path: '/ge/blog/', title: 'Blog | Digitale Marketing-Strategien | Nesco Digital', description: 'Praktische Artikel uber digitales Marketing, Paid Ads, SEO und Strategie. Mit echten Budgets getestete Insights vom Nesco Digital Team.', robots: 'index', group: 'main' },
  // EN main
  { path: '/en/lets-talk/', title: 'Contact | Schedule a Free Discovery Call | Nesco Digital', description: 'Ready to grow your business? Schedule a free call. We analyze your situation and present a concrete action plan within 24 hours.', robots: 'index', group: 'main' },
  { path: '/en/projects/', title: 'Projects | Digital Marketing Case Studies | Nesco Digital', description: 'Real results for real clients. 7-figure revenue, 400% growth, 5X ROI — explore our case studies.', robots: 'index', group: 'main' },
  { path: '/en/about-nesco-digital/', title: 'About Nesco Digital | Premium Digital Marketing Partner', description: '15+ years of digital marketing expertise. Premium execution partner for businesses that want to grow, from strategy to campaigns that generate real revenue.', robots: 'index', group: 'main' },
  { path: '/en/how-we-work/', title: 'How We Work | The Nesco Digital Process', description: 'What happens after you contact us. Our step-by-step process — from the first call to scaling.', robots: 'index', group: 'main' },
  { path: '/en/who-we-dont-work-with/', title: "Who We Don't Work With | Nesco Digital", description: "We're honest from the start. We're not the right fit for everyone — and that's a good thing.", robots: 'index', group: 'main' },
  { path: '/en/privacy-policy/', title: 'Privacy Policy | Nesco Digital', description: 'Learn how we collect, use and protect your personal data. Full GDPR compliance.', robots: 'index', group: 'main' },
  { path: '/en/terms-and-conditions/', title: 'Terms and Conditions | Nesco Digital', description: 'Terms and conditions for using the nescodigital.com website.', robots: 'index', group: 'main' },
  // DE main
  { path: '/ge/lass-uns-reden/', title: 'Kontakt | Kostenloses Erstgesprach buchen | Nesco Digital', description: 'Bereit, Ihr Unternehmen zu skalieren? Buchen Sie ein kostenloses Gesprach. Wir analysieren Ihre Situation und prasentieren einen konkreten Aktionsplan.', robots: 'index', group: 'main' },
  { path: '/ge/projekte/', title: 'Projekte | Digitale Marketing Fallstudien | Nesco Digital', description: 'Echte Ergebnisse fur echte Kunden. 7-stelliger Umsatz, 400% Wachstum, 5X ROI — entdecken Sie unsere Fallstudien.', robots: 'index', group: 'main' },
  { path: '/ge/uber-nesco-digital/', title: 'Uber Nesco Digital | Premium Partner fur Digitales Marketing', description: '15+ Jahre Erfahrung im digitalen Marketing. Premium-Ausfuhrungspartner fur Unternehmen, die wachsen wollen, von der Strategie bis zu Kampagnen, die echten Umsatz generieren.', robots: 'index', group: 'main' },
  { path: '/ge/wie-wir-arbeiten/', title: 'Wie wir arbeiten | Der Nesco Digital Prozess', description: 'Was passiert, nachdem Sie uns kontaktieren. Unser Schritt-fur-Schritt-Prozess — vom ersten Anruf bis zur Skalierung.', robots: 'index', group: 'main' },
  { path: '/ge/datenschutz/', title: 'Datenschutzerklarung | Nesco Digital', description: 'Erfahren Sie, wie wir Ihre personlichen Daten sammeln, verwenden und schutzen. Vollstandige DSGVO-Konformitat.', robots: 'index', group: 'main' },
  { path: '/ge/nutzungsbedingungen/', title: 'Nutzungsbedingungen | Nesco Digital', description: 'Nutzungsbedingungen fur die Website nescodigital.com.', robots: 'index', group: 'main' },

  // ── Service pages ───────────────────────────────────────────────
  // RO services
  { path: '/webdesign/', title: 'Webdesign Premium | Website Lead Generation, Shopify, WooCommerce | Nesco Digital', description: 'Design si dezvoltare web premium: website-uri de lead generation, magazine online Shopify/WooCommerce, website-uri corporate si mentenanta. Performanta garantata.', robots: 'index', group: 'service' },
  { path: '/marketing-digital/', title: 'Marketing Digital | Strategie, SEO, Email, CRM, CRO | Nesco Digital', description: 'Agentie de marketing digital full-service: strategie digitala, SEO, email marketing, CRM, CRO, social media. Crestem afaceri cu date si executie impecabila.', robots: 'index', group: 'service' },
  { path: '/reclame-platite/', title: 'Reclame Platite | Google Ads, Facebook Ads, TikTok Ads | Nesco Digital', description: 'Agentie specializata in reclame platite: Google Ads, Facebook Ads, Instagram Ads, TikTok Ads, LinkedIn Ads. ROAS maxim, costuri minime, rezultate reale.', robots: 'index', group: 'service' },
  { path: '/solutii-seo-ro/', title: 'SEO Romania | Optimizare Motoare de Cautare | Nesco Digital', description: 'Servicii SEO complete: audit tehnic, optimizare on-page, link building, SEO local. Crestem traficul organic si vizibilitatea in Google.', robots: 'index', group: 'service' },
  { path: '/strategie-digitala-ro/', title: 'Strategie Digitala | Consultanta Marketing Online | Nesco Digital', description: 'Strategie digitala personalizata pentru obiectivele tale de business. Audit complet, plan de actiune, implementare si optimizare continua.', robots: 'index', group: 'service' },
  { path: '/solutii-crm-ro/', title: 'Solutii CRM | Implementare si Integrare CRM | Nesco Digital', description: 'Implementare si optimizare CRM pentru afacerea ta. HubSpot, Salesforce, solutii custom. Organizam procesele de vanzare si relatia cu clientii.', robots: 'index', group: 'service' },
  { path: '/solutii-email-marketing-ro/', title: 'Email Marketing Romania | Automatizari Email | Nesco Digital', description: 'Servicii email marketing: strategii, automatizari, secvente de nurturing. Crestem revenue din lista ta de email cu campanii targetate.', robots: 'index', group: 'service' },
  { path: '/solutii-social-media-ro/', title: 'Social Media Marketing | Gestionare Retele Sociale | Nesco Digital', description: 'Servicii social media: strategie, content creation, community management. Construim prezenta solida pe Facebook, Instagram, TikTok, LinkedIn.', robots: 'index', group: 'service' },
  { path: '/solutii-cro-ro/', title: 'CRO | Optimizarea Ratei de Conversie | Nesco Digital', description: 'Servicii CRO: audit UX, A/B testing, optimizare landing pages. Crestem rata de conversie a site-ului tau fara sa cresti bugetul de ads.', robots: 'index', group: 'service' },
  { path: '/magazine-online-ro/', title: 'Magazine Online | E-commerce Development | Nesco Digital', description: 'Dezvoltare magazine online performante. Shopify, WooCommerce, solutii custom. UX optimizat pentru conversii si integrari complete de plata si livrare.', robots: 'index', group: 'service' },
  { path: '/website-companie-ro/', title: 'Website Companie | Site de Prezentare Premium | Nesco Digital', description: 'Website-uri de companie premium care reflecta valoarea brandului tau. Design modern, performanta ridicata, optimizat pentru conversii.', robots: 'index', group: 'service' },
  { path: '/website-lead-generation-ro/', title: 'Site Lead Generation | Website care Converteste | Nesco Digital', description: 'Site-uri de lead generation construite strategic. Landing pages optimizate, formulare de contact, integrari CRM. Transformam vizitatorii in lead-uri calificate.', robots: 'index', group: 'service' },
  { path: '/mentenanta-website-ro/', title: '', description: '', robots: 'index', group: 'service' },
  { path: '/geo-optimization/', title: 'GEO Optimizare pentru AI | ChatGPT, Perplexity, Gemini | Nesco Digital', description: 'Fii recomandat de ChatGPT, Perplexity si Gemini cand clientii tai cauta servicii. GEO este noul SEO optimizare pentru motoarele de cautare bazate pe AI.', robots: 'index', group: 'service' },
  { path: '/reclame-platite/google-ads/', title: 'Google Ads Romania | Campanii PPC Profitabile | Nesco Digital', description: 'Servicii Google Ads cu ROI masurabil. Search, Display, Shopping, YouTube. 15 ani experienta, 36M+ bugete gestionate. Solicita audit gratuit.', robots: 'index', group: 'service' },
  { path: '/reclame-platite/facebook-ads/', title: 'Facebook Ads Romania | Meta Ads Agency | Nesco Digital', description: 'Campanii Facebook si Instagram Ads care convertesc. Targeting precis, creative performant, optimizare continua. Agentie Meta cu experienta dovedita.', robots: 'index', group: 'service' },
  { path: '/reclame-platite/instagram-ads/', title: 'Instagram Ads Romania | Reclame Instagram | Nesco Digital', description: 'Campanii Instagram Ads pentru branduri ambitioase. Stories, Reels, Feed. Crestem awareness si generam vanzari direct din Instagram.', robots: 'index', group: 'service' },
  { path: '/reclame-platite/tiktok-ads/', title: 'TikTok Ads Romania | Campanii TikTok | Nesco Digital', description: 'TikTok Ads pentru branduri care vor sa ajunga la audiente noi. Creative native, targeting avansat, rezultate masurabile.', robots: 'index', group: 'service' },
  { path: '/reclame-platite/linkedin-ads/', title: 'LinkedIn Ads Romania | B2B Advertising | Nesco Digital', description: 'Campanii LinkedIn Ads pentru companii B2B. Lead generation, brand awareness, retargeting. Ajungem la decidenti si profesionisti.', robots: 'index', group: 'service' },
  { path: '/growth-sprint-educatie/', title: 'Growth Sprint pentru Educatie Online | Rezolvam Scurgerile de Venituri | Nesco Digital', description: 'Un angajament de 6 saptamani pentru branduri de educatie online cu venituri de 10k-100k+/luna. Auditam intregul sistem de venituri si implementam solutiile cu cel mai mare impact. Nu rapoarte, executie.', robots: 'index', group: 'service' },
  { path: '/growth-sprint-ecommerce/', title: 'Growth Sprint E-commerce | Scalare Profitabila 50k-500k+/luna | Nesco Digital', description: 'Un angajament de 6 saptamani pentru branduri e-commerce cu vanzari de 50k-500k+/luna. Auditam fiecare sistem de revenue si implementam fix-urile cu cel mai mare impact in achizitie, conversie, retentie si operatiuni.', robots: 'index', group: 'service' },
  // EN services
  { path: '/en/webdesign/', title: 'Webdesign & Web Development | Premium Websites | Nesco Digital', description: 'Strategically built websites, not just beautiful ones. Lead generation, e-commerce stores, company websites. Performance guaranteed.', robots: 'index', group: 'service' },
  { path: '/en/digital-marketing/', title: 'Digital Marketing | SEO, Email Marketing, CRM, CRO | Nesco Digital', description: 'Strategy, execution and continuous optimization, all under one roof. SEO, email marketing, social media and CRO for measurable, sustainable growth.', robots: 'index', group: 'service' },
  { path: '/en/paid-ads/', title: 'Paid Ads | Google Ads, Meta Ads, TikTok Ads | Nesco Digital', description: "We don't manage budgets, we build profitable acquisition systems. Google Ads, Meta Ads, TikTok Ads and LinkedIn Ads for ambitious companies.", robots: 'index', group: 'service' },
  { path: '/en/seo-solutions/', title: 'SEO Solutions | Search Engine Optimization | Nesco Digital', description: 'Complete SEO services: technical audit, on-page optimization, link building, local SEO. We grow organic traffic and Google visibility.', robots: 'index', group: 'service' },
  { path: '/en/digital-strategy/', title: 'Digital Strategy | Online Marketing Consulting | Nesco Digital', description: 'Custom digital strategy for your business objectives. Complete audit, action plan, implementation and continuous optimization.', robots: 'index', group: 'service' },
  { path: '/en/crm-solutions/', title: 'CRM Solutions | Implementation & Integration | Nesco Digital', description: 'CRM implementation and optimization for your business. HubSpot, Salesforce, custom solutions. We organize sales processes and client relationships.', robots: 'index', group: 'service' },
  { path: '/en/email-marketing-solutions/', title: 'Email Marketing | Email Automation | Nesco Digital', description: 'Email marketing services: strategies, automations, nurturing sequences. We grow revenue from your email list with targeted campaigns.', robots: 'index', group: 'service' },
  { path: '/en/social-media-solutions/', title: 'Social Media Marketing | Social Media Management | Nesco Digital', description: 'Social media services: strategy, content creation, community management. We build solid presence on Facebook, Instagram, TikTok, LinkedIn.', robots: 'index', group: 'service' },
  { path: '/en/cro-solutions/', title: 'CRO | Conversion Rate Optimization | Nesco Digital', description: 'CRO services: UX audit, A/B testing, landing page optimization. We increase your site conversion rate without increasing ad budget.', robots: 'index', group: 'service' },
  { path: '/en/e-commerce-stores/', title: 'E-commerce Stores | Online Shop Development | Nesco Digital', description: 'High-performance online stores. Shopify, WooCommerce, custom solutions. UX optimized for conversions with complete payment and shipping integrations.', robots: 'index', group: 'service' },
  { path: '/en/company-website/', title: 'Company Website | Premium Business Website | Nesco Digital', description: "Premium company websites that reflect your brand's value. Modern design, high performance, conversion-optimized.", robots: 'index', group: 'service' },
  { path: '/en/lead-generation-website-en/', title: 'Lead Generation Website | Websites that Convert | Nesco Digital', description: 'Strategically built lead generation websites. Optimized landing pages, contact forms, CRM integrations. We turn visitors into qualified leads.', robots: 'index', group: 'service' },
  { path: '/en/website-maintenance/', title: 'Website Maintenance | Professional Support | Nesco Digital', description: 'Professional website maintenance: updates, security, backups, monitoring. Keep your website running fast, safe and up to date.', robots: 'index', group: 'service' },
  { path: '/en/geo-optimization/', title: 'GEO Optimization for AI | ChatGPT, Perplexity, Gemini | Nesco Digital', description: 'Get recommended by ChatGPT, Perplexity and Gemini when your clients search for services. GEO is the new SEO — optimization for AI search engines.', robots: 'index', group: 'service' },
  { path: '/en/paid-ads/google-ads/', title: 'Google Ads Agency | PPC Management | Nesco Digital', description: 'Advanced Google Ads campaign management with data-driven optimization for maximum ROI.', robots: 'index', group: 'service' },
  { path: '/en/paid-ads/facebook-ads/', title: 'Facebook Ads Agency | Meta Ads Management | Nesco Digital', description: 'Facebook and Instagram Ads campaigns that convert. Precise targeting, performant creative, continuous optimization.', robots: 'index', group: 'service' },
  { path: '/en/paid-ads/instagram-ads/', title: 'Instagram Ads | Instagram Advertising | Nesco Digital', description: 'Instagram Ads campaigns for ambitious brands. Stories, Reels, Feed. We grow awareness and generate sales directly from Instagram.', robots: 'index', group: 'service' },
  { path: '/en/paid-ads/tiktok-ads/', title: 'TikTok Ads | TikTok Advertising Agency | Nesco Digital', description: 'TikTok Ads for brands wanting to reach new audiences. Native creative, advanced targeting, measurable results.', robots: 'index', group: 'service' },
  { path: '/en/paid-ads/linkedin-ads/', title: 'LinkedIn Ads | B2B Advertising | Nesco Digital', description: 'LinkedIn Ads campaigns for B2B companies. Lead generation, brand awareness, retargeting. We reach decision-makers.', robots: 'index', group: 'service' },
  { path: '/en/growth-sprint-education/', title: 'Growth Sprint for Online Education | Fix Revenue Leaks | Nesco Digital', description: 'A 6-week engagement for online education brands doing 10k-100k+/month. We audit your entire revenue system and implement the highest-impact fixes.', robots: 'index', group: 'service' },
  { path: '/en/growth-sprint-ecommerce/', title: 'Growth Sprint E-commerce | Profitable Scaling 50k-500k+/month | Nesco Digital', description: 'A 6-week engagement for e-commerce brands doing 50k-500k+/month. We audit every revenue system and implement highest-impact fixes.', robots: 'index', group: 'service' },
  // DE services
  { path: '/ge/webdesign/', title: 'Webdesign & Webentwicklung | Premium-Websites | Nesco Digital', description: 'Strategisch entwickelte Websites, nicht nur schone. Lead-Generation, Online-Shops, Unternehmenswebsites. Leistung garantiert.', robots: 'index', group: 'service' },
  { path: '/ge/digitales-marketing/', title: 'Digitales Marketing | SEO, E-Mail-Marketing, CRM, CRO | Nesco Digital', description: 'Strategie, Umsetzung und kontinuierliche Optimierung, alles unter einem Dach. SEO, E-Mail-Marketing, Social Media und CRO fur messbares, nachhaltiges Wachstum.', robots: 'index', group: 'service' },
  { path: '/ge/bezahlte-werbung/', title: 'Bezahlte Werbung | Google Ads, Meta Ads, TikTok Ads | Nesco Digital', description: 'Wir verwalten keine Budgets, wir bauen profitable Akquisitionssysteme. Google Ads, Meta Ads, TikTok Ads und LinkedIn Ads fur ambitionierte Unternehmen.', robots: 'index', group: 'service' },
  { path: '/ge/seo-loesungen/', title: 'SEO-Losungen | Suchmaschinenoptimierung | Nesco Digital', description: 'Komplette SEO-Dienstleistungen: technisches Audit, On-Page-Optimierung, Linkaufbau, lokales SEO. Wir steigern den organischen Traffic und die Google-Sichtbarkeit.', robots: 'index', group: 'service' },
  { path: '/ge/digitale-strategie/', title: 'Digitale Strategie | Online-Marketing-Beratung | Nesco Digital', description: 'Massgeschneiderte digitale Strategie fur Ihre Geschaftsziele. Komplettes Audit, Aktionsplan, Umsetzung und kontinuierliche Optimierung.', robots: 'index', group: 'service' },
  { path: '/ge/crm-loesungen/', title: 'CRM-Losungen | Implementierung & Integration | Nesco Digital', description: 'CRM-Implementierung und -Optimierung. HubSpot, Salesforce, massgeschneiderte Losungen. Wir organisieren Vertriebsprozesse und Kundenbeziehungen.', robots: 'index', group: 'service' },
  { path: '/ge/email-marketing-loesungen/', title: 'E-Mail-Marketing | E-Mail-Automatisierung | Nesco Digital', description: 'E-Mail-Marketing-Services: Strategien, Automatisierungen, Nurturing-Sequenzen. Wir steigern den Umsatz aus Ihrer E-Mail-Liste.', robots: 'index', group: 'service' },
  { path: '/ge/social-media-loesungen/', title: 'Social Media Marketing | Social Media Management | Nesco Digital', description: 'Social-Media-Services: Strategie, Content-Erstellung, Community Management. Auf Facebook, Instagram, TikTok, LinkedIn.', robots: 'index', group: 'service' },
  { path: '/ge/cro-loesungen/', title: 'CRO | Conversion-Rate-Optimierung | Nesco Digital', description: 'CRO-Services: UX-Audit, A/B-Testing, Landing-Page-Optimierung. Wir steigern Ihre Conversion-Rate ohne hoheres Werbebudget.', robots: 'index', group: 'service' },
  { path: '/ge/e-commerce-shops/', title: 'E-Commerce-Shops | Online-Shop-Entwicklung | Nesco Digital', description: 'Leistungsstarke Online-Shops. Shopify, WooCommerce, massgeschneiderte Losungen. UX-optimiert fur Conversions.', robots: 'index', group: 'service' },
  { path: '/ge/unternehmens-website/', title: 'Unternehmens-Website | Premium-Firmenwebsite | Nesco Digital', description: 'Premium-Unternehmenswebsites, die den Wert Ihrer Marke widerspiegeln. Modernes Design, hohe Leistung, conversion-optimiert.', robots: 'index', group: 'service' },
  { path: '/ge/lead-generation-website-de/', title: 'Lead-Generation-Website | Websites die konvertieren | Nesco Digital', description: 'Strategisch entwickelte Lead-Generation-Websites. Optimierte Landing Pages, Kontaktformulare, CRM-Integrationen.', robots: 'index', group: 'service' },
  { path: '/ge/website-wartung/', title: 'Website-Wartung | Professioneller Support | Nesco Digital', description: 'Professionelle Website-Wartung: Updates, Sicherheit, Backups, Monitoring. Halten Sie Ihre Website schnell, sicher und aktuell.', robots: 'index', group: 'service' },
  { path: '/ge/geo-optimierung/', title: 'GEO-Optimierung fur AI | ChatGPT, Perplexity, Gemini | Nesco Digital', description: 'Werden Sie von ChatGPT, Perplexity und Gemini empfohlen. GEO ist das neue SEO — Optimierung fur KI-Suchmaschinen.', robots: 'index', group: 'service' },
  { path: '/ge/bezahlte-werbung/google-ads/', title: 'Google Ads Agentur | PPC-Management | Nesco Digital', description: 'Fortgeschrittenes Google Ads-Kampagnenmanagement mit datengesteuerter Optimierung fur maximalen ROI.', robots: 'index', group: 'service' },
  { path: '/ge/bezahlte-werbung/facebook-ads/', title: 'Facebook Ads Agentur | Meta Ads Management | Nesco Digital', description: 'Facebook- und Instagram-Ads-Kampagnen die konvertieren. Prazises Targeting, performante Creatives, kontinuierliche Optimierung.', robots: 'index', group: 'service' },
  { path: '/ge/bezahlte-werbung/instagram-ads/', title: 'Instagram Ads | Instagram-Werbung | Nesco Digital', description: 'Instagram-Ads-Kampagnen fur ambitionierte Marken. Stories, Reels, Feed. Wir steigern Awareness und generieren Verkaufe.', robots: 'index', group: 'service' },
  { path: '/ge/bezahlte-werbung/tiktok-ads/', title: 'TikTok Ads | TikTok-Werbeagentur | Nesco Digital', description: 'TikTok Ads fur Marken, die neue Zielgruppen erreichen wollen. Native Creatives, erweitertes Targeting, messbare Ergebnisse.', robots: 'index', group: 'service' },
  { path: '/ge/bezahlte-werbung/linkedin-ads/', title: 'LinkedIn Ads | B2B-Werbung | Nesco Digital', description: 'LinkedIn-Ads-Kampagnen fur B2B-Unternehmen. Lead-Generierung, Markenbekanntheit, Retargeting. Wir erreichen Entscheidungstrager.', robots: 'index', group: 'service' },
  { path: '/ge/growth-sprint-bildung/', title: 'Growth Sprint fur Online-Bildung | Revenue-Lecks beheben | Nesco Digital', description: 'Ein 6-wochiges Engagement fur Online-Bildungsmarken mit 10k-100k+/Monat. Wir auditieren Ihr gesamtes Umsatzsystem und implementieren die wirkungsvollsten Fixes.', robots: 'index', group: 'service' },
  { path: '/ge/growth-sprint-ecommerce-de/', title: 'Growth Sprint E-Commerce | Profitable Skalierung 50k-500k+/Monat | Nesco Digital', description: 'Ein 6-wochiges Engagement fur E-Commerce-Marken mit 50k-500k+/Monat. Wir auditieren jedes Umsatzsystem und implementieren die wirkungsvollsten Fixes.', robots: 'index', group: 'service' },

  // ── Blog RO ─────────────────────────────────────────────────────
  { path: '/blog/cost-specialist-intern-vs-agentie/', title: 'Cat Costa un Specialist Intern vs. o Agentie de Marketing? | Nesco Digital', description: 'Comparatie detaliata de costuri: specialist intern vs. agentie de marketing digital. Salariu, taxe, tools, management — cifrele reale pe care nimeni nu ti le arata.', robots: 'index', group: 'blogRO' },
  { path: '/blog/de-ce-nu-merg-reclamele-meta/', title: 'De Ce Nu-ti Merg Reclamele pe Meta? 7 Greseli Frecvente | Nesco Digital', description: 'Daca arunci bani pe Facebook si Instagram Ads fara rezultate, problema nu e platforma. Descopera cele 7 greseli care iti saboteaza campaniile Meta.', robots: 'index', group: 'blogRO' },
  { path: '/blog/seo-vs-google-ads/', title: 'SEO vs. Google Ads: Ce Alegi Cand Ai Buget Limitat? | Nesco Digital', description: 'Trafic organic sau platit? Analizam costurile, timeline-ul si ROI-ul fiecarei strategii ca sa iei decizia corecta pentru afacerea ta.', robots: 'index', group: 'blogRO' },
  { path: '/blog/geo-optimizare-ai-search/', title: 'Cum sa apari in ChatGPT si Google AI Overviews (GEO) | Nesco Digital', description: 'Ghid complet de Generative Engine Optimization (GEO): cum sa iti optimizezi continutul pentru a aparea in rezultatele ChatGPT, Google AI Overviews si Perplexity in 2026.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cat-costa-un-site-web/', title: 'Cat Costa un Site Web in 2026? Ghid Complet de Preturi | Nesco Digital', description: 'Afla cat costa un site web in 2026: landing page, site de prezentare, magazin online sau aplicatie web. Preturi reale, costuri ascunse si cum sa alegi corect.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cat-costa-google-ads-romania/', title: 'Cat costa Google Ads in Romania? Ghid de bugete 2026 | Nesco Digital', description: 'Afla cat costa Google Ads in Romania in 2026. CPC mediu pe industrii, bugete recomandate pe tip de campanie si cum sa calculezi ROI-ul corect.', robots: 'index', group: 'blogRO' },
  { path: '/blog/abandon-cos-cumparaturi/', title: 'De ce iti abandoneaza clientii cosul (si cum repari) | Nesco Digital', description: 'Rata medie de abandon cos e 70%. Descopera cele 8 strategii dovedite de recuperare a vanzarilor pierdute in e-commerce: email flows, exit-intent, retargeting si mai mult.', robots: 'index', group: 'blogRO' },
  { path: '/blog/seo-local-google-maps/', title: 'SEO local: Cum sa apari primul pe Google in orasul tau | Nesco Digital', description: 'Ghid complet de SEO local: Google Business Profile, recenzii, citari locale si strategii pentru a domina rezultatele Google Maps in orasul tau.', robots: 'index', group: 'blogRO' },
  { path: '/blog/facebook-ads-vs-google-ads-ecommerce/', title: 'Facebook Ads vs Google Ads: Ce alegi pentru magazinul online? | Nesco Digital', description: 'Comparatie completa Facebook Ads vs Google Ads pentru e-commerce. CPC, ROAS, targeting, formate — afla cand sa folosesti fiecare platforma si cum sa le combini.', robots: 'index', group: 'blogRO' },
  { path: '/blog/ai-overviews-impact-seo/', title: 'Cum afecteaza AI Overviews SEO-ul si ce trebuie sa faci | Nesco Digital', description: 'Google AI Overviews schimba regulile SEO. Afla cum afecteaza traficul organic, ce tipuri de cautari sunt vizate si 6 strategii concrete de adaptare.', robots: 'index', group: 'blogRO' },
  { path: '/blog/ce-este-growth-sprint/', title: 'Ce este un Growth Sprint si cum accelereaza cresterea | Nesco Digital', description: 'Descopera modelul Growth Sprint: 6 saptamani intensive de audit, strategie, executie si optimizare. Afla cum comprimi luni de munca intr-un sprint focusat pe rezultate.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cum-alegi-agentie-marketing/', title: 'Cum sa alegi agentia de marketing potrivita: Checklist 10 pasi | Nesco Digital', description: 'Checklist complet in 10 pasi pentru a evalua si alege agentia de marketing digital potrivita. Portofoliu, transparenta, pricing, red flags si cum sa testezi inainte de a semna.', robots: 'index', group: 'blogRO' },
  { path: '/blog/reclame-tiktok-romania/', title: 'Cum sa faci reclame pe TikTok in Romania: Ghid complet | Nesco Digital', description: 'Ghid complet TikTok Ads pentru Romania: formate de anunturi, targetare, bugete, creative best practices si setup pas cu pas. CPM-uri cu 40-60% mai mici decat Meta.', robots: 'index', group: 'blogRO' },
  { path: '/blog/rata-de-conversie-ghid/', title: 'Rata de conversie: Ce este, cum o calculezi, cum o cresti | Nesco Digital', description: 'Ghid complet CRO: definitia ratei de conversie, formula de calcul, benchmark-uri pe industrii si 12 tehnici testate pentru a o imbunatati. Creste vanzarile fara buget suplimentar.', robots: 'index', group: 'blogRO' },
  { path: '/blog/creste-vanzari-magazin-online/', title: '15 strategii testate sa cresti vanzarile in magazinul online | Nesco Digital', description: 'Descopera 15 strategii dovedite de crestere a vanzarilor in e-commerce: Google Shopping, retargeting, optimizare pagini produs, email flows, loyalty programs si mai mult.', robots: 'index', group: 'blogRO' },
  { path: '/blog/strategie-marketing-digital-ghid/', title: 'Strategie de Marketing Digital Pas cu Pas (Ghid 2026) | Nesco Digital', description: 'Ghid complet pentru construirea unei strategii de marketing digital de la zero. Audit, obiective SMART, buyer personas, canale, buget si calendar de executie.', robots: 'index', group: 'blogRO' },
  { path: '/blog/email-marketing-ecommerce/', title: 'Email Marketing pentru Ecommerce: Cum Cresti Vanzarile cu Newslettere | Nesco Digital', description: 'Ghid complet de email marketing pentru magazine online: cele 7 emailuri esentiale, segmentare, A/B testing si tool-uri recomandate. ROI de 36-42x per $1 investit.', robots: 'index', group: 'blogRO' },
  { path: '/blog/de-ce-nu-functioneaza-marketingul/', title: 'De ce nu functioneaza marketingul digital al afacerii tale | Nesco Digital', description: '10 motive reale pentru care campaniile de marketing digital esueaza si cum sa diagnostichezi si rezolvi fiecare problema. Ghid complet cu solutii practice.', robots: 'index', group: 'blogRO' },
  { path: '/blog/linkedin-ads-b2b-romania/', title: 'LinkedIn Ads pentru B2B in Romania: Merita investitia? | Nesco Digital', description: 'LinkedIn Ads pentru companii B2B — targetare avansata, formate de anunturi, bugete realiste si rezultate concrete. Afla cand merita si cand nu.', robots: 'index', group: 'blogRO' },
  { path: '/blog/performance-max-ecommerce/', title: 'Performance Max 2026: Ghid complet pentru magazine online | Nesco Digital', description: 'Ghid complet Performance Max pentru e-commerce: setup pas cu pas, greseli frecvente, PMax vs Shopping vs Search. Totul despre campaniile Google AI pentru magazine online.', robots: 'index', group: 'blogRO' },
  { path: '/blog/ai-in-marketing-2026/', title: 'Cum folosesc companiile AI in marketing in 2026 | Nesco Digital', description: 'Ghid practic de utilizare a AI in marketing: aplicatii reale, tool-uri, ce functioneaza si ce nu. Studii de caz si strategii testate in 2026.', robots: 'index', group: 'blogRO' },
  { path: '/blog/retargeting-remarketing-ghid/', title: 'Retargeting si Remarketing: Cum Recuperezi Clientii Pierduti | Nesco Digital', description: 'Ghid complet de retargeting si remarketing — strategii, platforme, segmente de audienta si bugete recomandate. Recupereaza vizitatorii care au plecat fara sa cumpere.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cum-alegi-crm/', title: 'Cum sa alegi si sa implementezi un CRM in 2026 | Nesco Digital', description: 'Ghid complet pentru alegerea si implementarea unui CRM: comparatie HubSpot, Salesforce, Pipedrive, Monday, Zoho. Criterii de selectie, pasi de implementare si greseli frecvente.', robots: 'index', group: 'blogRO' },
  { path: '/blog/whatsapp-business-vanzari-suport/', title: 'WhatsApp Business: Ghid complet pentru vanzari si suport | Nesco Digital', description: 'Ghid complet de WhatsApp Business API: setup, automatizari, flow-uri de conversie si cele mai bune practici pentru vanzari si suport clienti.', robots: 'index', group: 'blogRO' },
  { path: '/blog/automatizare-marketing-ghid-tools/', title: 'Cum sa-ti automatizezi marketingul: Ghid complet de tools | Nesco Digital', description: 'Ce sa automatizezi la fiecare etapa a afacerii si ce tool-uri sa folosesti — de la email si chatbots la analytics si ad management.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cele-mai-bune-tool-uri-ai-marketing/', title: 'Cele mai bune tool-uri AI pentru marketing digital in 2026 | Nesco Digital', description: 'De la crearea de reclame la SEO si analytics — cele mai bune tool-uri AI organizate pe cazuri de utilizare, cu review-uri detaliate si comparatii.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cum-creezi-vinzi-cursuri-online/', title: 'Cum sa creezi si sa vinzi cursuri online in 2026 | Nesco Digital', description: 'De la validarea ideii la lansare si marketing — ghid complet cu comparatie de platforme si strategii testate pentru crearea si vanzarea cursurilor online.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cum-construiesti-funnel-vanzari/', title: 'Cum sa construiesti un funnel de vanzari complet | Nesco Digital', description: 'Ghid pas cu pas pentru construirea unui funnel de vanzari eficient — de la TOFU la BOFU — cu tool-urile recomandate la fiecare etapa.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cele-mai-bune-platforme-email-marketing/', title: 'Cele mai bune platforme de email marketing in 2026 | Nesco Digital', description: 'Comparatie detaliata intre cele mai populare platforme de email marketing: functionalitati, preturi si pentru cine sunt potrivite.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cele-mai-bune-landing-page-builders/', title: 'Cele mai bune landing page builders pentru conversii mai mari | Nesco Digital', description: 'Cand ai nevoie de un landing page builder, ce feature-uri conteaza si care sunt cele mai bune optiuni — cu comparatie detaliata si review-uri.', robots: 'index', group: 'blogRO' },
  { path: '/blog/cele-mai-bune-chatbot-live-chat/', title: 'Cele mai bune chatbot-uri si tool-uri de live chat | Nesco Digital', description: 'Ghid complet cu comparatie: cand sa folosesti chatbot, cand live chat si care sunt cele mai bune tool-uri pentru fiecare scenariu.', robots: 'index', group: 'blogRO' },

  // ── Blog EN ─────────────────────────────────────────────────────
  { path: '/en/blog/cost-internal-specialist-vs-agency/', title: 'How Much Does an In-House Specialist Cost vs. a Marketing Agency? | Nesco Digital', description: 'Detailed cost comparison: in-house marketing specialist vs. digital marketing agency. Salary, taxes, tools, management — the real numbers nobody shows you.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/why-meta-ads-dont-work/', title: "Why Your Meta Ads Don't Work: 7 Common Mistakes | Nesco Digital", description: "If you're throwing money at Facebook and Instagram Ads without results, the problem isn't the platform. Discover the 7 mistakes sabotaging your Meta campaigns.", robots: 'index', group: 'blogEN' },
  { path: '/en/blog/seo-vs-google-ads/', title: 'SEO vs. Google Ads: What to Choose with a Limited Budget? | Nesco Digital', description: 'Organic or paid traffic? We analyze costs, timeline, and ROI of each strategy to help you make the right choice for your business.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/geo-optimization-ai-search/', title: 'How to Appear in ChatGPT and Google AI Overviews (GEO) | Nesco Digital', description: 'Complete Generative Engine Optimization (GEO) guide: how to optimize your content to appear in ChatGPT, Google AI Overviews and Perplexity results in 2026.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/how-much-does-a-website-cost/', title: 'How Much Does a Website Cost in 2026? Complete Price Guide | Nesco Digital', description: 'Find out how much a website costs in 2026: landing page, business site, online store or web app. Real prices, hidden costs and how to choose right.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/how-much-does-google-ads-cost/', title: 'How Much Does Google Ads Cost? Budget Guide 2026 | Nesco Digital', description: 'How much does Google Ads cost in 2026? Average CPC by industry, recommended budgets by campaign type and how to calculate ROI correctly.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/cart-abandonment-fix/', title: 'Why Customers Abandon Carts (and How to Fix It) | Nesco Digital', description: 'Average cart abandonment rate is 70%. Discover 8 proven recovery strategies for e-commerce: email flows, exit-intent, retargeting and more.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/local-seo-google-maps/', title: 'Local SEO: How to Rank First on Google in Your City | Nesco Digital', description: 'Complete local SEO guide: Google Business Profile, reviews, local citations and strategies to dominate Google Maps results in your city.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/facebook-ads-vs-google-ads-ecommerce/', title: 'Facebook Ads vs Google Ads: Which to Choose for E-commerce? | Nesco Digital', description: 'Complete Facebook Ads vs Google Ads comparison for e-commerce. CPC, ROAS, targeting, formats — learn when to use each platform and how to combine them.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/ai-overviews-seo-impact/', title: 'How AI Overviews Affect SEO and What to Do | Nesco Digital', description: 'Google AI Overviews are changing SEO rules. Learn how they affect organic traffic, which search types are targeted and 6 concrete adaptation strategies.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/what-is-growth-sprint/', title: 'What is a Growth Sprint and How It Accelerates Growth | Nesco Digital', description: 'Discover the Growth Sprint model: 6 intensive weeks of audit, strategy, execution and optimization. Learn how to compress months of work into one focused sprint.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/how-to-choose-marketing-agency/', title: 'How to Choose the Right Marketing Agency: 10-Step Checklist | Nesco Digital', description: 'Complete 10-step checklist for evaluating and choosing the right digital marketing agency. Portfolio, transparency, pricing, red flags.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/tiktok-ads-guide/', title: 'TikTok Ads Guide: Complete Guide for Businesses | Nesco Digital', description: 'Complete TikTok Ads guide: ad formats, targeting, budgets, creative best practices and step-by-step setup. CPMs 40-60% lower than Meta.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/conversion-rate-guide/', title: 'Conversion Rate: What It Is, How to Calculate, How to Improve | Nesco Digital', description: 'Complete CRO guide: conversion rate definition, calculation formula, industry benchmarks and 12 tested techniques to improve it.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/increase-online-store-sales/', title: '15 Tested Strategies to Increase Online Store Sales | Nesco Digital', description: 'Discover 15 proven strategies for e-commerce sales growth: Google Shopping, retargeting, product page optimization, email flows, loyalty programs and more.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/digital-marketing-strategy-guide/', title: 'Digital Marketing Strategy Step by Step (2026 Guide) | Nesco Digital', description: 'Complete guide for building a digital marketing strategy from scratch. Audit, SMART objectives, buyer personas, channels, budget and execution calendar.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/email-marketing-ecommerce/', title: 'Email Marketing for E-commerce: How to Grow Sales | Nesco Digital', description: 'Complete e-commerce email marketing guide: the 7 essential emails, segmentation, A/B testing and recommended tools. ROI of 36-42x per $1 invested.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/why-digital-marketing-not-working/', title: "Why Your Business's Digital Marketing Isn't Working | Nesco Digital", description: '10 real reasons why digital marketing campaigns fail and how to diagnose and fix each problem. Complete guide with practical solutions.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/linkedin-ads-b2b/', title: 'LinkedIn Ads for B2B: Is It Worth the Investment? | Nesco Digital', description: 'LinkedIn Ads for B2B companies — advanced targeting, ad formats, realistic budgets and concrete results. Learn when it is worth it and when not.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/performance-max-ecommerce/', title: 'Performance Max 2026: Complete Guide for Online Stores | Nesco Digital', description: 'Complete Performance Max guide for e-commerce: step-by-step setup, common mistakes, PMax vs Shopping vs Search. Everything about Google AI campaigns.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/ai-in-marketing-2026/', title: 'How Companies Use AI in Marketing in 2026 | Nesco Digital', description: 'Practical guide to using AI in marketing: real applications, tools, what works and what does not. Case studies and tested strategies in 2026.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/retargeting-remarketing-guide/', title: 'Retargeting and Remarketing: How to Win Back Lost Customers | Nesco Digital', description: 'Complete retargeting and remarketing guide — strategies, platforms, audience segments and recommended budgets. Win back visitors who left without buying.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/how-to-choose-crm/', title: 'How to Choose and Implement a CRM in 2026 | Nesco Digital', description: 'Complete guide for choosing and implementing a CRM: comparison of HubSpot, Salesforce, Pipedrive, Monday, Zoho. Selection criteria and implementation steps.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/whatsapp-business-sales-support/', title: 'WhatsApp Business: Complete Guide for Sales and Support | Nesco Digital', description: 'Complete WhatsApp Business API guide: setup, automations, conversion flows and best practices for sales and customer support.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/marketing-automation-tools-guide/', title: 'How to Automate Your Marketing: Complete Tools Guide | Nesco Digital', description: 'What to automate at each business stage and what tools to use — from email and chatbots to analytics and ad management.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/best-ai-tools-digital-marketing/', title: 'Best AI Tools for Digital Marketing in 2026 | Nesco Digital', description: 'From ad creation to SEO and analytics — the best AI tools organized by use case, with detailed reviews and comparisons.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/how-to-create-sell-online-courses/', title: 'How to Create and Sell Online Courses in 2026 | Nesco Digital', description: 'From idea validation to launch and marketing — complete guide with platform comparison and tested strategies for creating and selling online courses.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/how-to-build-sales-funnel/', title: 'How to Build a Complete Sales Funnel | Nesco Digital', description: 'Step-by-step guide for building an efficient sales funnel — from TOFU to BOFU — with recommended tools at each stage.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/best-email-marketing-platforms/', title: 'Best Email Marketing Platforms in 2026 | Nesco Digital', description: 'Detailed comparison of the most popular email marketing platforms: features, prices and who they are best suited for.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/best-landing-page-builders/', title: 'Best Landing Page Builders for Higher Conversions | Nesco Digital', description: 'When you need a landing page builder, what features matter and which are the best options — with detailed comparison and reviews.', robots: 'index', group: 'blogEN' },
  { path: '/en/blog/best-chatbot-live-chat-tools/', title: 'Best Chatbot and Live Chat Tools | Nesco Digital', description: 'Complete guide with comparison: when to use chatbot, when live chat and which are the best tools for each scenario.', robots: 'index', group: 'blogEN' },

  // ── Blog DE ─────────────────────────────────────────────────────
  { path: '/ge/blog/kosten-interner-spezialist-vs-agentur/', title: 'Was kostet ein interner Spezialist vs. eine Marketing-Agentur? | Nesco Digital', description: 'Detaillierter Kostenvergleich: interner Marketing-Spezialist vs. Agentur. Gehalt, Steuern, Tools, Management — die echten Zahlen, die niemand zeigt.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/warum-meta-ads-nicht-funktionieren/', title: 'Warum Ihre Meta Ads nicht funktionieren: 7 haufige Fehler | Nesco Digital', description: 'Wenn Sie Geld fur Facebook- und Instagram-Ads ohne Ergebnisse ausgeben, liegt das Problem nicht an der Plattform. Entdecken Sie die 7 Fehler.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/seo-vs-google-ads/', title: 'SEO vs. Google Ads: Was wahlen bei begrenztem Budget? | Nesco Digital', description: 'Organischer oder bezahlter Traffic? Wir analysieren Kosten, Zeitrahmen und ROI jeder Strategie fur die richtige Entscheidung.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/geo-optimierung-ai-search/', title: 'Wie Sie in ChatGPT und Google AI Overviews erscheinen (GEO) | Nesco Digital', description: 'Kompletter GEO-Leitfaden: wie Sie Ihre Inhalte optimieren, um in ChatGPT, Google AI Overviews und Perplexity Ergebnissen zu erscheinen.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/was-kostet-eine-website/', title: 'Was kostet eine Website 2026? Kompletter Preis-Leitfaden | Nesco Digital', description: 'Erfahren Sie, was eine Website 2026 kostet: Landing Page, Business-Website, Online-Shop oder Web-App. Echte Preise und versteckte Kosten.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/was-kostet-google-ads/', title: 'Was kostet Google Ads? Budget-Leitfaden 2026 | Nesco Digital', description: 'Was kostet Google Ads 2026? Durchschnittlicher CPC nach Branche, empfohlene Budgets nach Kampagnentyp und wie Sie den ROI korrekt berechnen.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/warenkorbabbruch-beheben/', title: 'Warenkorbabbruch: Warum Kunden abbrechen und wie Sie es beheben | Nesco Digital', description: 'Die durchschnittliche Abbruchrate liegt bei 70%. Entdecken Sie 8 bewahrte Strategien zur Ruckgewinnung verlorener E-Commerce-Verkaufe.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/lokales-seo-google-maps/', title: 'Lokales SEO: Wie Sie auf Google Maps in Ihrer Stadt auf Platz 1 kommen | Nesco Digital', description: 'Kompletter lokaler SEO-Leitfaden: Google Business Profile, Bewertungen, lokale Zitierungen und Strategien fur Google Maps.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/facebook-ads-vs-google-ads-ecommerce/', title: 'Facebook Ads vs Google Ads: Was wahlen fur E-Commerce? | Nesco Digital', description: 'Kompletter Vergleich Facebook Ads vs Google Ads fur E-Commerce. CPC, ROAS, Targeting, Formate.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/ai-overviews-seo-auswirkungen/', title: 'Wie AI Overviews SEO beeinflussen und was zu tun ist | Nesco Digital', description: 'Google AI Overviews andern die SEO-Regeln. Erfahren Sie, wie sie den organischen Traffic beeinflussen und 6 konkrete Anpassungsstrategien.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/was-ist-growth-sprint/', title: 'Was ist ein Growth Sprint und wie beschleunigt er das Wachstum | Nesco Digital', description: 'Entdecken Sie das Growth Sprint Modell: 6 intensive Wochen Audit, Strategie, Ausfuhrung und Optimierung.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/wie-marketing-agentur-waehlen/', title: 'Wie Sie die richtige Marketing-Agentur wahlen: 10-Schritte-Checkliste | Nesco Digital', description: 'Komplette 10-Schritte-Checkliste fur die Bewertung und Auswahl der richtigen Digital-Marketing-Agentur.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/tiktok-ads-anleitung/', title: 'TikTok Ads Anleitung: Kompletter Leitfaden fur Unternehmen | Nesco Digital', description: 'Kompletter TikTok Ads Leitfaden: Anzeigenformate, Targeting, Budgets, Creative Best Practices und Schritt-fur-Schritt-Setup.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/conversion-rate-leitfaden/', title: 'Conversion Rate: Was es ist, wie berechnen, wie verbessern | Nesco Digital', description: 'Kompletter CRO-Leitfaden: Conversion-Rate-Definition, Berechnungsformel, Branchen-Benchmarks und 12 getestete Verbesserungstechniken.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/online-shop-umsatz-steigern/', title: '15 getestete Strategien um Online-Shop-Umsatz zu steigern | Nesco Digital', description: 'Entdecken Sie 15 bewahrte E-Commerce-Wachstumsstrategien: Google Shopping, Retargeting, Produktseiten-Optimierung, E-Mail-Flows.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/digitale-marketing-strategie-leitfaden/', title: 'Digitale Marketing-Strategie Schritt fur Schritt (Leitfaden 2026) | Nesco Digital', description: 'Kompletter Leitfaden zum Aufbau einer digitalen Marketingstrategie von Grund auf. Audit, SMART-Ziele, Buyer Personas, Kanale, Budget.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/email-marketing-ecommerce/', title: 'E-Mail-Marketing fur E-Commerce: Wie Sie den Umsatz steigern | Nesco Digital', description: 'Kompletter E-Commerce-E-Mail-Marketing-Leitfaden: die 7 essenziellen E-Mails, Segmentierung, A/B-Testing und empfohlene Tools.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/warum-digitales-marketing-nicht-funktioniert/', title: 'Warum das digitale Marketing Ihres Unternehmens nicht funktioniert | Nesco Digital', description: '10 echte Grunde warum digitale Marketing-Kampagnen scheitern und wie Sie jedes Problem diagnostizieren und losen.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/linkedin-ads-b2b/', title: 'LinkedIn Ads fur B2B: Lohnt sich die Investition? | Nesco Digital', description: 'LinkedIn Ads fur B2B-Unternehmen — erweitertes Targeting, Anzeigenformate, realistische Budgets und konkrete Ergebnisse.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/performance-max-ecommerce/', title: 'Performance Max 2026: Kompletter Leitfaden fur Online-Shops | Nesco Digital', description: 'Kompletter Performance Max Leitfaden fur E-Commerce: Schritt-fur-Schritt-Setup, haufige Fehler, PMax vs Shopping vs Search.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/ki-im-marketing-2026/', title: 'Wie Unternehmen KI im Marketing 2026 nutzen | Nesco Digital', description: 'Praktischer Leitfaden zur Nutzung von KI im Marketing: echte Anwendungen, Tools, was funktioniert und was nicht.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/retargeting-remarketing-leitfaden/', title: 'Retargeting und Remarketing: Wie Sie verlorene Kunden zuruckgewinnen | Nesco Digital', description: 'Kompletter Retargeting- und Remarketing-Leitfaden — Strategien, Plattformen, Zielgruppensegmente und empfohlene Budgets.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/wie-crm-waehlen/', title: 'Wie Sie ein CRM wahlen und implementieren 2026 | Nesco Digital', description: 'Kompletter Leitfaden fur CRM-Auswahl und -Implementierung: Vergleich von HubSpot, Salesforce, Pipedrive, Monday, Zoho.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/whatsapp-business-vertrieb-support/', title: 'WhatsApp Business: Kompletter Leitfaden fur Vertrieb und Support | Nesco Digital', description: 'Kompletter WhatsApp Business API Leitfaden: Setup, Automatisierungen, Konversions-Flows und Best Practices.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/marketing-automatisierung-tools-leitfaden/', title: 'Wie Sie Ihr Marketing automatisieren: Kompletter Tools-Leitfaden | Nesco Digital', description: 'Was in jeder Geschaftsphase automatisiert werden sollte und welche Tools zu verwenden sind.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/beste-ki-tools-digitales-marketing/', title: 'Beste KI-Tools fur digitales Marketing 2026 | Nesco Digital', description: 'Von der Anzeigenerstellung bis zu SEO und Analytics — die besten KI-Tools nach Anwendungsfall organisiert.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/online-kurse-erstellen-verkaufen/', title: 'Online-Kurse erstellen und verkaufen 2026 | Nesco Digital', description: 'Von der Ideen-Validierung bis zu Launch und Marketing — kompletter Leitfaden mit Plattform-Vergleich und getesteten Strategien.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/sales-funnel-aufbauen-anleitung/', title: 'Wie Sie einen kompletten Sales Funnel aufbauen | Nesco Digital', description: 'Schritt-fur-Schritt-Anleitung zum Aufbau eines effizienten Sales Funnels — von TOFU bis BOFU — mit empfohlenen Tools.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/beste-email-marketing-plattformen/', title: 'Beste E-Mail-Marketing-Plattformen 2026 | Nesco Digital', description: 'Detaillierter Vergleich der beliebtesten E-Mail-Marketing-Plattformen: Funktionen, Preise und fur wen sie geeignet sind.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/beste-landing-page-builder/', title: 'Beste Landing Page Builder fur hohere Conversions | Nesco Digital', description: 'Wann Sie einen Landing Page Builder brauchen, welche Features zahlen und welche die besten Optionen sind.', robots: 'index', group: 'blogDE' },
  { path: '/ge/blog/beste-chatbot-live-chat-tools/', title: 'Beste Chatbot- und Live-Chat-Tools | Nesco Digital', description: 'Kompletter Leitfaden mit Vergleich: wann Chatbot, wann Live-Chat und welche die besten Tools fur jedes Szenario sind.', robots: 'index', group: 'blogDE' },
];

/* ------------------------------------------------------------------ */
/*  Helper functions                                                   */
/* ------------------------------------------------------------------ */

function titleColor(len: number): string {
  if (len === 0) return '#ef4444';
  if (len <= 60) return '#56db84';
  if (len <= 70) return '#facc15';
  return '#ef4444';
}

function descColor(len: number): string {
  if (len === 0) return '#ef4444';
  if (len <= 155) return '#56db84';
  if (len <= 160) return '#facc15';
  return '#ef4444';
}

function statusIcon(p: PageMeta): { icon: string; color: string } {
  if (!p.title && !p.description) return { icon: '\u2717', color: '#ef4444' };
  const tLen = p.title.length;
  const dLen = p.description.length;
  if (tLen === 0 || dLen === 0) return { icon: '\u2717', color: '#ef4444' };
  if (tLen > 70 || dLen > 160) return { icon: '\u26A0', color: '#facc15' };
  return { icon: '\u2713', color: '#56db84' };
}

type GroupKey = PageMeta['group'];

const GROUP_LABELS: Record<GroupKey, string> = {
  main: 'Main Pages',
  service: 'Service Pages',
  blogRO: 'Blog RO',
  blogEN: 'Blog EN',
  blogDE: 'Blog DE',
};

const GROUP_ORDER: GroupKey[] = ['main', 'service', 'blogRO', 'blogEN', 'blogDE'];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SeoAuditPage() {
  const [expandedGroup, setExpandedGroup] = useState<GroupKey | null>('main');
  const [search, setSearch] = useState('');

  const filtered = pages.filter(
    (p) =>
      p.path.toLowerCase().includes(search.toLowerCase()) ||
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = pages.length;
  const good = pages.filter((p) => statusIcon(p).icon === '\u2713').length;
  const warnings = pages.filter((p) => statusIcon(p).icon === '\u26A0').length;
  const missing = pages.filter((p) => statusIcon(p).icon === '\u2717').length;

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
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#facc15', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>
            SEO AUDIT
          </div>
          <h1 style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '28px', fontWeight: 800, color: '#dce4e8', letterSpacing: '-0.5px', margin: 0 }}>
            SEO Metadata Audit
          </h1>
          <p style={{ color: '#5a6872', fontSize: '14px', marginTop: '8px' }}>
            Comprehensive scan of all page titles, descriptions, and indexing status
          </p>
        </div>

        {/* Summary stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total Pages', value: totalPages, color: '#facc15' },
            { label: 'Good SEO', value: good, color: '#56db84' },
            { label: 'Warnings', value: warnings, color: '#facc15' },
            { label: 'Missing Meta', value: missing, color: '#ef4444' },
          ].map((s) => (
            <div key={s.label} style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${s.color}, ${s.color}33)` }} />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '8px' }}>{s.label}</div>
              <div style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '32px', fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Search pages by path or title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: '#0a0a0a',
              border: '1px solid #1a1a1a',
              borderRadius: '8px',
              color: '#dce4e8',
              fontSize: '14px',
              fontFamily: "'Inter', sans-serif",
              outline: 'none',
            }}
          />
        </div>

        {/* Groups */}
        {GROUP_ORDER.map((groupKey) => {
          const groupPages = filtered.filter((p) => p.group === groupKey);
          if (groupPages.length === 0) return null;
          const isExpanded = expandedGroup === groupKey;

          return (
            <div key={groupKey} style={{ marginBottom: '16px' }}>
              {/* Group header */}
              <button
                onClick={() => setExpandedGroup(isExpanded ? null : groupKey)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: '#0a0a0a',
                  border: '1px solid #1a1a1a',
                  borderRadius: isExpanded ? '12px 12px 0 0' : '12px',
                  cursor: 'pointer',
                  color: '#dce4e8',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: '16px', fontWeight: 700 }}>
                    {GROUP_LABELS[groupKey]}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#5a6872', background: '#111', padding: '2px 8px', borderRadius: '4px' }}>
                    {groupPages.length} pages
                  </span>
                </div>
                <span style={{ color: '#5a6872', fontSize: '18px', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                  &#9660;
                </span>
              </button>

              {/* Table */}
              {isExpanded && (
                <div style={{ border: '1px solid #1a1a1a', borderTop: 'none', borderRadius: '0 0 12px 12px', overflow: 'hidden' }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ background: '#0d0d0d' }}>
                          <th style={thStyle}>Status</th>
                          <th style={{ ...thStyle, textAlign: 'left' }}>Path</th>
                          <th style={{ ...thStyle, textAlign: 'left' }}>Title</th>
                          <th style={thStyle}>Len</th>
                          <th style={{ ...thStyle, textAlign: 'left' }}>Description</th>
                          <th style={thStyle}>Len</th>
                          <th style={thStyle}>Robots</th>
                        </tr>
                      </thead>
                      <tbody>
                        {groupPages.map((p) => {
                          const s = statusIcon(p);
                          const tLen = p.title.length;
                          const dLen = p.description.length;
                          return (
                            <tr key={p.path} style={{ borderBottom: '1px solid #111' }}>
                              <td style={{ ...tdStyle, textAlign: 'center' }}>
                                <span style={{ color: s.color, fontSize: '16px' }}>{s.icon}</span>
                              </td>
                              <td style={{ ...tdStyle, fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#8899a6', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {p.path}
                              </td>
                              <td style={{ ...tdStyle, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={p.title}>
                                {p.title || <span style={{ color: '#ef4444', fontStyle: 'italic' }}>Missing</span>}
                              </td>
                              <td style={{ ...tdStyle, textAlign: 'center', fontFamily: "'DM Mono', monospace", fontSize: '11px', color: titleColor(tLen) }}>
                                {tLen || '-'}
                              </td>
                              <td style={{ ...tdStyle, maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '12px', color: '#8899a6' }} title={p.description}>
                                {p.description || <span style={{ color: '#ef4444', fontStyle: 'italic' }}>Missing</span>}
                              </td>
                              <td style={{ ...tdStyle, textAlign: 'center', fontFamily: "'DM Mono', monospace", fontSize: '11px', color: descColor(dLen) }}>
                                {dLen || '-'}
                              </td>
                              <td style={{ ...tdStyle, textAlign: 'center' }}>
                                <span style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: '10px',
                                  padding: '2px 6px',
                                  borderRadius: '3px',
                                  background: p.robots === 'index' ? '#56db8420' : '#ef444420',
                                  color: p.robots === 'index' ? '#56db84' : '#ef4444',
                                }}>
                                  {p.robots}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Legend */}
        <div style={{ marginTop: '32px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '20px' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#5a6872', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>Legend</div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', fontSize: '13px' }}>
            <span><span style={{ color: '#56db84' }}>Green</span> Title &le;60 / Desc &le;155 chars</span>
            <span><span style={{ color: '#facc15' }}>Yellow</span> Title 61-70 / Desc 156-160 chars</span>
            <span><span style={{ color: '#ef4444' }}>Red</span> Title &gt;70 / Desc &gt;160 chars or missing</span>
            <span><span style={{ color: '#56db84' }}>{'\u2713'}</span> Good &nbsp; <span style={{ color: '#facc15' }}>{'\u26A0'}</span> Warning &nbsp; <span style={{ color: '#ef4444' }}>{'\u2717'}</span> Missing</span>
          </div>
        </div>
      </div>
    </>
  );
}

const thStyle: React.CSSProperties = {
  padding: '10px 12px',
  fontFamily: "'DM Mono', monospace",
  fontSize: '10px',
  color: '#5a6872',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const tdStyle: React.CSSProperties = {
  padding: '10px 12px',
  verticalAlign: 'middle',
};
