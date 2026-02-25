import type { Locale } from "./translations";

export interface BlogArticleMeta {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  section: string;
  tags: string[];
  isHowTo: boolean;
  alternates: {
    ro: string;
    en: string;
    de: string;
  };
}

const BASE_URL = "https://nescodigital.com";

// Each "group" represents the same article across all 3 locales.
// Order matches the ARTICLES arrays in the blog index pages.
interface ArticleGroup {
  image: string;
  datePublished: string;
  section: string;
  tags: string[];
  isHowTo: boolean;
  ro: { slug: string; title: string; description: string };
  en: { slug: string; title: string; description: string };
  de: { slug: string; title: string; description: string };
}

const ARTICLE_GROUPS: ArticleGroup[] = [
  {
    image: "/blog/cum-construiesti-funnel-vanzari.jpg",
    datePublished: "2026-03-03",
    section: "Strategy",
    tags: ["sales funnel", "marketing strategy", "TOFU", "BOFU", "conversion"],
    isHowTo: true,
    ro: { slug: "/blog/cum-construiesti-funnel-vanzari/", title: "Cum sa construiesti un funnel de vanzari complet | Nesco Digital", description: "Ghid pas cu pas pentru construirea unui funnel de vanzari eficient — de la TOFU la BOFU — cu tool-urile recomandate la fiecare etapa." },
    en: { slug: "/en/blog/how-to-build-sales-funnel/", title: "How to Build a Complete Sales Funnel | Nesco Digital", description: "Step-by-step guide to building an effective sales funnel — from TOFU to BOFU — with recommended tools at every stage." },
    de: { slug: "/ge/blog/sales-funnel-aufbauen-anleitung/", title: "Wie man einen kompletten Sales Funnel aufbaut | Nesco Digital", description: "Schritt-fuer-Schritt-Anleitung zum Aufbau eines effektiven Sales Funnels — von TOFU bis BOFU — mit empfohlenen Tools in jeder Phase." },
  },
  {
    image: "/blog/whatsapp-business-vanzari-suport.png",
    datePublished: "2026-03-02",
    section: "Automation",
    tags: ["WhatsApp Business", "sales", "customer support", "chatbot", "automation"],
    isHowTo: true,
    ro: { slug: "/blog/whatsapp-business-vanzari-suport/", title: "Cum sa folosesti WhatsApp Business pentru vanzari si suport | Nesco Digital", description: "Ghid complet de WhatsApp Business API: setup, automatizari, flow-uri de conversie si cele mai bune practici pentru vanzari si suport clienti." },
    en: { slug: "/en/blog/whatsapp-business-sales-support/", title: "How to Use WhatsApp Business for Sales and Support | Nesco Digital", description: "Complete WhatsApp Business API guide: setup, automation flows, conversion strategies, and best practices for sales and customer support." },
    de: { slug: "/ge/blog/whatsapp-business-vertrieb-support/", title: "WhatsApp Business für Vertrieb und Support nutzen | Nesco Digital", description: "Kompletter WhatsApp Business API Leitfaden: Setup, Automatisierungs-Flows, Konversionsstrategien und Best Practices für Vertrieb und Kundenservice." },
  },
  {
    image: "/blog/cele-mai-bune-tool-uri-ai-marketing.jpg",
    datePublished: "2026-03-01",
    section: "Automation",
    tags: ["AI tools", "marketing", "automation", "digital marketing", "2026"],
    isHowTo: false,
    ro: { slug: "/blog/cele-mai-bune-tool-uri-ai-marketing/", title: "Cele mai bune tool-uri AI pentru marketing digital in 2026 | Nesco Digital", description: "De la crearea de reclame la SEO si analytics — cele mai bune tool-uri AI organizate pe cazuri de utilizare, cu review-uri detaliate si comparatii." },
    en: { slug: "/en/blog/best-ai-tools-digital-marketing/", title: "Best AI Tools for Digital Marketing in 2026 | Nesco Digital", description: "From ad creative to SEO and analytics — the best AI tools organized by use case, with detailed reviews and comparisons." },
    de: { slug: "/ge/blog/beste-ki-tools-digitales-marketing/", title: "Beste KI-Tools für digitales Marketing 2026 | Nesco Digital", description: "Von Anzeigenerstellung bis SEO und Analytics — die besten KI-Tools nach Anwendungsfall organisiert, mit detaillierten Reviews und Vergleichen." },
  },
  {
    image: "/blog/cum-creezi-vinzi-cursuri-online.jpg",
    datePublished: "2026-02-28",
    section: "Strategy",
    tags: ["online courses", "e-learning", "digital products", "marketing", "monetization"],
    isHowTo: true,
    ro: { slug: "/blog/cum-creezi-vinzi-cursuri-online/", title: "Cum sa creezi si sa vinzi cursuri online in 2026 | Nesco Digital", description: "De la validarea ideii la lansare si marketing — ghid complet cu comparatie de platforme si strategii testate pentru crearea si vanzarea cursurilor online." },
    en: { slug: "/en/blog/how-to-create-sell-online-courses/", title: "How to Create and Sell Online Courses in 2026 | Nesco Digital", description: "From idea validation to launch and marketing — complete guide with platform comparison and tested strategies for creating and selling online courses." },
    de: { slug: "/ge/blog/online-kurse-erstellen-verkaufen/", title: "Online-Kurse erstellen und verkaufen in 2026 | Nesco Digital", description: "Von der Ideenvalidierung bis zur Vermarktung — kompletter Leitfaden mit Plattformvergleich und getesteten Strategien für Online-Kurse." },
  },
  {
    image: "/blog/cele-mai-bune-landing-page-builders.png",
    datePublished: "2026-02-27",
    section: "Web Design",
    tags: ["landing page", "builder", "conversion", "web design", "tools"],
    isHowTo: false,
    ro: { slug: "/blog/cele-mai-bune-landing-page-builders/", title: "Cele mai bune landing page builders pentru conversii mai mari | Nesco Digital", description: "Cand ai nevoie de un landing page builder, ce feature-uri conteaza si care sunt cele mai bune optiuni — cu comparatie detaliata si review-uri." },
    en: { slug: "/en/blog/best-landing-page-builders/", title: "Best Landing Page Builders for Higher Conversions | Nesco Digital", description: "When you need a landing page builder, what features matter, and which are the best options — with detailed comparison and reviews." },
    de: { slug: "/ge/blog/beste-landing-page-builder/", title: "Beste Landing Page Builder für höhere Conversions | Nesco Digital", description: "Wann du einen Landing Page Builder brauchst, welche Features wichtig sind und welche die besten Optionen sind — mit Vergleich und Reviews." },
  },
  {
    image: "/blog/automatizare-marketing-ghid-tools.png",
    datePublished: "2026-02-26",
    section: "Automation",
    tags: ["marketing automation", "tools", "email marketing", "chatbot", "analytics"],
    isHowTo: true,
    ro: { slug: "/blog/automatizare-marketing-ghid-tools/", title: "Cum sa-ti automatizezi marketingul: Ghid complet de tools | Nesco Digital", description: "Ce sa automatizezi la fiecare etapa a afacerii si ce tool-uri sa folosesti — de la email si chatbots la analytics si ad management." },
    en: { slug: "/en/blog/marketing-automation-tools-guide/", title: "How to Automate Your Marketing: Complete Tools Guide | Nesco Digital", description: "What to automate at each business stage and which tools to use — from email and chatbots to analytics and ad management." },
    de: { slug: "/ge/blog/marketing-automatisierung-tools-leitfaden/", title: "Marketing automatisieren: Kompletter Tools-Leitfaden | Nesco Digital", description: "Was du in jeder Geschäftsphase automatisieren solltest und welche Tools du nutzen kannst — von E-Mail und Chatbots bis Analytics und Ad Management." },
  },
  {
    image: "/blog/cele-mai-bune-chatbot-live-chat.png",
    datePublished: "2026-02-25",
    section: "Automation",
    tags: ["chatbot", "live chat", "customer support", "website", "tools"],
    isHowTo: false,
    ro: { slug: "/blog/cele-mai-bune-chatbot-live-chat/", title: "Cele mai bune chatbot-uri si tool-uri de live chat pentru site-uri | Nesco Digital", description: "Ghid complet cu comparatie: cand sa folosesti chatbot, cand live chat si care sunt cele mai bune tool-uri pentru fiecare scenariu." },
    en: { slug: "/en/blog/best-chatbot-live-chat-tools/", title: "Best Chatbot and Live Chat Tools for Websites | Nesco Digital", description: "Complete guide with comparison: when to use a chatbot, when live chat, and which are the best tools for each scenario." },
    de: { slug: "/ge/blog/beste-chatbot-live-chat-tools/", title: "Beste Chatbot- und Live-Chat-Tools für Websites | Nesco Digital", description: "Kompletter Leitfaden mit Vergleich: wann Chatbot, wann Live-Chat und welche die besten Tools für jedes Szenario sind." },
  },
  {
    image: "/blog/cele-mai-bune-platforme-email-marketing.png",
    datePublished: "2026-02-24",
    section: "Automation",
    tags: ["email marketing", "platforms", "newsletter", "automation", "comparison"],
    isHowTo: false,
    ro: { slug: "/blog/cele-mai-bune-platforme-email-marketing/", title: "Cele mai bune platforme de email marketing in 2026 | Nesco Digital", description: "Comparatie detaliata intre cele mai populare platforme de email marketing: functionalitati, preturi si pentru cine sunt potrivite." },
    en: { slug: "/en/blog/best-email-marketing-platforms/", title: "Best Email Marketing Platforms in 2026 | Nesco Digital", description: "Detailed comparison of the most popular email marketing platforms: features, pricing, and who each one is best for." },
    de: { slug: "/ge/blog/beste-email-marketing-plattformen/", title: "Beste E-Mail-Marketing-Plattformen 2026 | Nesco Digital", description: "Detaillierter Vergleich der beliebtesten E-Mail-Marketing-Plattformen: Funktionen, Preise und für wen sie am besten geeignet sind." },
  },
  {
    image: "/blog/geo-optimizare-ai-search.png",
    datePublished: "2026-02-23",
    section: "SEO",
    tags: ["GEO", "AI search", "ChatGPT", "Google AI Overviews", "optimization"],
    isHowTo: true,
    ro: { slug: "/blog/geo-optimizare-ai-search/", title: "Cum să apari în ChatGPT și Google AI Overviews (GEO) | Nesco Digital", description: "Ghid complet de Generative Engine Optimization: cum să-ți optimizezi conținutul ca să apari în rezultatele AI — de la ChatGPT la Google AI Overviews." },
    en: { slug: "/en/blog/geo-optimization-ai-search/", title: "How to Appear in ChatGPT and Google AI Overviews (GEO) | Nesco Digital", description: "Complete guide to Generative Engine Optimization: how to optimize your content to appear in AI results — from ChatGPT to Google AI Overviews." },
    de: { slug: "/ge/blog/geo-optimierung-ai-search/", title: "Wie man in ChatGPT und Google AI Overviews erscheint (GEO) | Nesco Digital", description: "Vollständiger Leitfaden zur Generative Engine Optimization: So optimierst du deinen Content für KI-Ergebnisse — von ChatGPT bis Google AI Overviews." },
  },
  {
    image: "/blog/cat-costa-un-site-web.png",
    datePublished: "2026-02-22",
    section: "Web Design",
    tags: ["website cost", "web development", "pricing", "web design", "2026"],
    isHowTo: false,
    ro: { slug: "/blog/cat-costa-un-site-web/", title: "Cât costă un site web în 2026? Ghid complet de prețuri | Nesco Digital", description: "De la site de prezentare la magazin online — analizăm prețurile reale pentru dezvoltare web în România și ce influențează costul final." },
    en: { slug: "/en/blog/how-much-does-a-website-cost/", title: "How Much Does a Website Cost in 2026? Complete Price Guide | Nesco Digital", description: "From presentation sites to online stores — we analyze real web development prices and what influences the final cost." },
    de: { slug: "/ge/blog/was-kostet-eine-website/", title: "Was kostet eine Website in 2026? Vollständiger Preisleitfaden | Nesco Digital", description: "Von der Präsentationswebsite bis zum Online-Shop — wir analysieren reale Webentwicklungspreise und was den Endpreis beeinflusst." },
  },
  {
    image: "/blog/cat-costa-google-ads-romania.png",
    datePublished: "2026-02-21",
    section: "Paid Ads",
    tags: ["Google Ads", "cost", "CPC", "budget", "ROI"],
    isHowTo: false,
    ro: { slug: "/blog/cat-costa-google-ads-romania/", title: "Cât costă Google Ads în România? Ghid de bugete 2026 | Nesco Digital", description: "CPC mediu pe industrii, bugete minime recomandate și cum să-ți calculezi ROI-ul înainte de a investi primul leu în Google Ads." },
    en: { slug: "/en/blog/how-much-does-google-ads-cost/", title: "How Much Does Google Ads Cost? Budget Guide 2026 | Nesco Digital", description: "Average CPC by industry, recommended minimum budgets, and how to calculate your ROI before investing your first dollar in Google Ads." },
    de: { slug: "/ge/blog/was-kostet-google-ads/", title: "Was kostet Google Ads? Budget-Leitfaden 2026 | Nesco Digital", description: "Durchschnittlicher CPC nach Branche, empfohlene Mindestbudgets und wie du deinen ROI berechnest, bevor du den ersten Euro in Google Ads investierst." },
  },
  {
    image: "/blog/cost-specialist-vs-agentie.jpg",
    datePublished: "2026-02-20",
    section: "Strategy",
    tags: ["marketing agency", "in-house", "cost comparison", "hiring", "digital marketing"],
    isHowTo: false,
    ro: { slug: "/blog/cost-specialist-intern-vs-agentie/", title: "Cât costă un specialist intern vs. o agenție de marketing digital? | Nesco Digital", description: "Comparație detaliată: salariu, taxe, tools, management — vs. un pachet de agenție all-inclusive. Cifrele reale pe care nimeni nu ți le arată." },
    en: { slug: "/en/blog/cost-internal-specialist-vs-agency/", title: "How Much Does an In-House Specialist Cost vs. a Marketing Agency? | Nesco Digital", description: "Detailed cost comparison: salary, taxes, tools, management — vs. an all-inclusive agency package. The real numbers nobody shows you." },
    de: { slug: "/ge/blog/kosten-interner-spezialist-vs-agentur/", title: "Was kostet ein interner Spezialist vs. eine Marketing-Agentur? | Nesco Digital", description: "Detaillierter Kostenvergleich: Gehalt, Steuern, Tools, Management — vs. ein All-Inclusive-Agenturpaket. Die echten Zahlen, die niemand zeigt." },
  },
  {
    image: "/blog/abandon-cos-cumparaturi.png",
    datePublished: "2026-02-19",
    section: "E-commerce",
    tags: ["cart abandonment", "e-commerce", "conversion", "recovery", "optimization"],
    isHowTo: true,
    ro: { slug: "/blog/abandon-cos-cumparaturi/", title: "De ce îți abandonează clienții coșul (și cum repari) | Nesco Digital", description: "73% din coșuri sunt abandonate. Descoperă cele mai frecvente cauze și 8 strategii dovedite pentru a recupera vânzările pierdute." },
    en: { slug: "/en/blog/cart-abandonment-fix/", title: "Why Customers Abandon Their Cart (And How to Fix It) | Nesco Digital", description: "73% of carts are abandoned. Discover the most common causes and 8 proven strategies to recover lost sales." },
    de: { slug: "/ge/blog/warenkorbabbruch-beheben/", title: "Warum Kunden den Warenkorb verlassen (und wie man es behebt) | Nesco Digital", description: "73% der Warenkörbe werden verlassen. Entdecke die häufigsten Ursachen und 8 bewährte Strategien zur Rückgewinnung verlorener Verkäufe." },
  },
  {
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    datePublished: "2026-02-18",
    section: "Paid Ads",
    tags: ["Meta Ads", "Facebook Ads", "Instagram Ads", "mistakes", "optimization"],
    isHowTo: false,
    ro: { slug: "/blog/de-ce-nu-merg-reclamele-meta/", title: "De ce nu-ți merg reclamele pe Meta? 7 greșeli frecvente | Nesco Digital", description: "Dacă arunci bani pe Facebook și Instagram Ads fără rezultate, problema nu e platforma. Descoperă cele 7 greșeli care îți sabotează campaniile." },
    en: { slug: "/en/blog/why-meta-ads-dont-work/", title: "Why Your Meta Ads Aren't Working: 7 Common Mistakes | Nesco Digital", description: "If you're throwing money at Facebook and Instagram Ads with no results, the platform isn't the problem. Discover the 7 mistakes sabotaging your campaigns." },
    de: { slug: "/ge/blog/warum-meta-ads-nicht-funktionieren/", title: "Warum funktionieren deine Meta Ads nicht? 7 häufige Fehler | Nesco Digital", description: "Wenn du Geld für Facebook- und Instagram-Ads ohne Ergebnisse ausgibst, ist die Plattform nicht das Problem. Entdecke die 7 Fehler, die deine Kampagnen sabotieren." },
  },
  {
    image: "/blog/seo-local-google-maps.png",
    datePublished: "2026-02-17",
    section: "SEO",
    tags: ["local SEO", "Google Maps", "Google Business Profile", "local search", "citations"],
    isHowTo: true,
    ro: { slug: "/blog/seo-local-google-maps/", title: "SEO local: Cum să apari primul pe Google în orașul tău | Nesco Digital", description: "De la Google Business Profile la recenzii și citări locale — ghid pas cu pas pentru a domina rezultatele locale și Google Maps." },
    en: { slug: "/en/blog/local-seo-google-maps/", title: "Local SEO: How to Rank First on Google in Your City | Nesco Digital", description: "From Google Business Profile to reviews and local citations — step-by-step guide to dominating local results and Google Maps." },
    de: { slug: "/ge/blog/lokales-seo-google-maps/", title: "Lokales SEO: Wie man in seiner Stadt auf Google Platz 1 erreicht | Nesco Digital", description: "Von Google Business Profile bis Bewertungen und lokale Zitate — Schritt-für-Schritt-Anleitung zur Dominanz in lokalen Ergebnissen und Google Maps." },
  },
  {
    image: "/blog/facebook-ads-vs-google-ads-ecommerce.png",
    datePublished: "2026-02-16",
    section: "Paid Ads",
    tags: ["Facebook Ads", "Google Ads", "e-commerce", "comparison", "advertising"],
    isHowTo: false,
    ro: { slug: "/blog/facebook-ads-vs-google-ads-ecommerce/", title: "Facebook Ads vs Google Ads: Ce alegi pentru magazinul online? | Nesco Digital", description: "Comparație directă între cele două platforme de advertising pentru e-commerce: costuri, audiențe, formate, ROI și când să le folosești pe fiecare." },
    en: { slug: "/en/blog/facebook-ads-vs-google-ads-ecommerce/", title: "Facebook Ads vs Google Ads: Which to Choose for Your Online Store? | Nesco Digital", description: "Direct comparison between the two advertising platforms for e-commerce: costs, audiences, formats, ROI and when to use each one." },
    de: { slug: "/ge/blog/facebook-ads-vs-google-ads-ecommerce/", title: "Facebook Ads vs Google Ads: Was wählen für den Online-Shop? | Nesco Digital", description: "Direkter Vergleich der beiden Werbeplattformen für E-Commerce: Kosten, Zielgruppen, Formate, ROI und wann man welche nutzen sollte." },
  },
  {
    image: "/blog/seo-vs-google-ads.jpg",
    datePublished: "2026-02-15",
    section: "SEO",
    tags: ["SEO", "Google Ads", "organic traffic", "paid traffic", "budget"],
    isHowTo: false,
    ro: { slug: "/blog/seo-vs-google-ads/", title: "SEO vs. Google Ads: Ce alegi când ai buget limitat? | Nesco Digital", description: "Trafic organic sau plătit? Analizăm costurile, timeline-ul și ROI-ul fiecărei strategii ca să iei decizia corectă pentru afacerea ta." },
    en: { slug: "/en/blog/seo-vs-google-ads/", title: "SEO vs. Google Ads: What to Choose on a Limited Budget? | Nesco Digital", description: "Organic or paid traffic? We analyze the costs, timeline, and ROI of each strategy so you can make the right decision for your business." },
    de: { slug: "/ge/blog/seo-vs-google-ads/", title: "SEO vs. Google Ads: Was wählen bei begrenztem Budget? | Nesco Digital", description: "Organischer oder bezahlter Traffic? Wir analysieren Kosten, Timeline und ROI jeder Strategie, damit du die richtige Entscheidung für dein Unternehmen triffst." },
  },
  {
    image: "/blog/ai-overviews-impact-seo.png",
    datePublished: "2026-02-14",
    section: "SEO",
    tags: ["AI Overviews", "SEO", "Google", "organic traffic", "AI search"],
    isHowTo: false,
    ro: { slug: "/blog/ai-overviews-impact-seo/", title: "Cum afectează AI Overviews SEO-ul și ce trebuie să faci | Nesco Digital", description: "Google AI Overviews schimbă regulile jocului. Află cum influențează traficul organic și ce strategii noi trebuie să adopți pentru a rămâne vizibil." },
    en: { slug: "/en/blog/ai-overviews-seo-impact/", title: "How AI Overviews Affect SEO and What You Should Do | Nesco Digital", description: "Google AI Overviews are changing the rules. Learn how they impact organic traffic and what new strategies you need to adopt to stay visible." },
    de: { slug: "/ge/blog/ai-overviews-seo-auswirkungen/", title: "Wie AI Overviews SEO beeinflussen und was du tun solltest | Nesco Digital", description: "Google AI Overviews ändern die Spielregeln. Erfahre, wie sie den organischen Traffic beeinflussen und welche neuen Strategien du anwenden musst." },
  },
  {
    image: "/blog/ce-este-growth-sprint.png",
    datePublished: "2026-02-13",
    section: "Strategy",
    tags: ["growth sprint", "framework", "strategy", "execution", "optimization"],
    isHowTo: false,
    ro: { slug: "/blog/ce-este-growth-sprint/", title: "Ce este un Growth Sprint și cum accelerează creșterea | Nesco Digital", description: "Framework-ul de 6 săptămâni care combină strategie, execuție și optimizare într-un singur sprint focusat pe rezultate măsurabile." },
    en: { slug: "/en/blog/what-is-growth-sprint/", title: "What Is a Growth Sprint and How It Accelerates Growth | Nesco Digital", description: "The 6-week framework that combines strategy, execution, and optimization into a single sprint focused on measurable results." },
    de: { slug: "/ge/blog/was-ist-growth-sprint/", title: "Was ist ein Growth Sprint und wie beschleunigt er das Wachstum | Nesco Digital", description: "Das 6-Wochen-Framework, das Strategie, Ausführung und Optimierung in einem einzigen Sprint kombiniert, der auf messbare Ergebnisse fokussiert ist." },
  },
  {
    image: "/blog/reclame-tiktok-romania.png",
    datePublished: "2026-02-12",
    section: "Paid Ads",
    tags: ["TikTok Ads", "advertising", "social media", "creative", "targeting"],
    isHowTo: true,
    ro: { slug: "/blog/reclame-tiktok-romania/", title: "Cum să faci reclame pe TikTok în România: Ghid complet | Nesco Digital", description: "De la setup-ul contului la formate creative și targetare — tot ce trebuie să știi pentru a lansa campanii TikTok Ads profitabile în România." },
    en: { slug: "/en/blog/tiktok-ads-guide/", title: "How to Run TikTok Ads: Complete Guide for 2026 | Nesco Digital", description: "From account setup to creative formats and targeting — everything you need to know to launch profitable TikTok Ads campaigns." },
    de: { slug: "/ge/blog/tiktok-ads-anleitung/", title: "TikTok Ads schalten: Vollständiger Leitfaden für 2026 | Nesco Digital", description: "Vom Konto-Setup bis zu kreativen Formaten und Targeting — alles, was du wissen musst, um profitable TikTok-Ads-Kampagnen zu starten." },
  },
  {
    image: "/blog/cum-alegi-agentie-marketing.png",
    datePublished: "2026-02-11",
    section: "Strategy",
    tags: ["marketing agency", "selection", "checklist", "digital marketing", "hiring"],
    isHowTo: true,
    ro: { slug: "/blog/cum-alegi-agentie-marketing/", title: "Cum să alegi agenția de marketing potrivită: Checklist 10 pași | Nesco Digital", description: "Criterii obiective, red flags de evitat și întrebările pe care trebuie să le pui înainte de a semna contractul cu o agenție de marketing digital." },
    en: { slug: "/en/blog/how-to-choose-marketing-agency/", title: "How to Choose the Right Marketing Agency: 10-Step Checklist | Nesco Digital", description: "Objective criteria, red flags to avoid, and the questions you need to ask before signing a contract with a digital marketing agency." },
    de: { slug: "/ge/blog/wie-marketing-agentur-waehlen/", title: "Wie man die richtige Marketing-Agentur wählt: 10-Schritte-Checkliste | Nesco Digital", description: "Objektive Kriterien, Warnsignale und die Fragen, die du stellen musst, bevor du einen Vertrag mit einer Marketing-Agentur unterschreibst." },
  },
  {
    image: "/blog/rata-de-conversie-ghid.jpg",
    datePublished: "2026-02-09",
    section: "E-commerce",
    tags: ["conversion rate", "CRO", "optimization", "e-commerce", "benchmarks"],
    isHowTo: true,
    ro: { slug: "/blog/rata-de-conversie-ghid/", title: "Rata de conversie: Ce este, cum o calculezi, cum o crești | Nesco Digital", description: "Ghid complet CRO: de la definiție și benchmark-uri pe industrii la cele 12 tehnici testate care cresc rata de conversie a site-ului tău." },
    en: { slug: "/en/blog/conversion-rate-guide/", title: "Conversion Rate: What It Is, How to Calculate It, How to Improve It | Nesco Digital", description: "Complete CRO guide: from definition and industry benchmarks to 12 tested techniques that increase your website's conversion rate." },
    de: { slug: "/ge/blog/conversion-rate-leitfaden/", title: "Conversion Rate: Was sie ist, wie man sie berechnet und verbessert | Nesco Digital", description: "Vollständiger CRO-Leitfaden: von Definition und Branchen-Benchmarks bis zu 12 getesteten Techniken zur Steigerung der Conversion Rate." },
  },
  {
    image: "/blog/creste-vanzari-magazin-online.png",
    datePublished: "2026-02-08",
    section: "E-commerce",
    tags: ["e-commerce", "sales", "online store", "strategies", "optimization"],
    isHowTo: true,
    ro: { slug: "/blog/creste-vanzari-magazin-online/", title: "15 strategii testate să crești vânzările în magazinul online | Nesco Digital", description: "De la optimizarea paginilor de produs la email flows automate — strategii concrete, cu exemple reale, pentru creșterea veniturilor în e-commerce." },
    en: { slug: "/en/blog/increase-online-store-sales/", title: "15 Proven Strategies to Increase Online Store Sales | Nesco Digital", description: "From product page optimization to automated email flows — concrete strategies with real examples for growing e-commerce revenue." },
    de: { slug: "/ge/blog/online-shop-umsatz-steigern/", title: "15 bewährte Strategien zur Umsatzsteigerung im Online-Shop | Nesco Digital", description: "Von der Produktseitenoptimierung bis zu automatisierten E-Mail-Flows — konkrete Strategien mit echten Beispielen für E-Commerce-Wachstum." },
  },
  {
    image: "/blog/strategie-marketing-digital-ghid.jpg",
    datePublished: "2026-02-06",
    section: "Strategy",
    tags: ["digital marketing", "strategy", "planning", "KPI", "channels"],
    isHowTo: true,
    ro: { slug: "/blog/strategie-marketing-digital-ghid/", title: "Strategie de marketing digital pas cu pas (Ghid 2026) | Nesco Digital", description: "Cum construiești o strategie de marketing digital de la zero: obiective, canale, buget, KPI și calendar de execuție — totul într-un singur framework." },
    en: { slug: "/en/blog/digital-marketing-strategy-guide/", title: "Digital Marketing Strategy Step by Step (2026 Guide) | Nesco Digital", description: "How to build a digital marketing strategy from scratch: objectives, channels, budget, KPIs and execution calendar — all in one framework." },
    de: { slug: "/ge/blog/digitale-marketing-strategie-leitfaden/", title: "Digitale Marketing-Strategie Schritt für Schritt (Leitfaden 2026) | Nesco Digital", description: "Wie du eine digitale Marketing-Strategie von Grund auf aufbaust: Ziele, Kanäle, Budget, KPIs und Ausführungskalender — alles in einem Framework." },
  },
  {
    image: "/blog/email-marketing-ecommerce.png",
    datePublished: "2026-02-05",
    section: "Automation",
    tags: ["email marketing", "e-commerce", "newsletter", "automation", "flows"],
    isHowTo: true,
    ro: { slug: "/blog/email-marketing-ecommerce/", title: "Email marketing pentru ecommerce: Cum crești vânzările cu newslettere | Nesco Digital", description: "Flows automate, segmentare, A/B testing și cele 7 emailuri esențiale pe care orice magazin online trebuie să le aibă configurate." },
    en: { slug: "/en/blog/email-marketing-ecommerce/", title: "Email Marketing for Ecommerce: How to Boost Sales with Newsletters | Nesco Digital", description: "Automated flows, segmentation, A/B testing, and the 7 essential emails every online store needs to have configured." },
    de: { slug: "/ge/blog/email-marketing-ecommerce/", title: "E-Mail-Marketing für E-Commerce: Wie man den Umsatz mit Newslettern steigert | Nesco Digital", description: "Automatisierte Flows, Segmentierung, A/B-Testing und die 7 wichtigsten E-Mails, die jeder Online-Shop konfiguriert haben sollte." },
  },
  {
    image: "/blog/de-ce-nu-functioneaza-marketingul.png",
    datePublished: "2026-02-03",
    section: "Strategy",
    tags: ["digital marketing", "problems", "troubleshooting", "campaigns", "solutions"],
    isHowTo: false,
    ro: { slug: "/blog/de-ce-nu-functioneaza-marketingul/", title: "De ce nu funcționează marketingul digital al afacerii tale | Nesco Digital", description: "10 motive reale pentru care campaniile tale nu aduc rezultate — și soluțiile concrete pentru fiecare problemă, testate pe zeci de clienți." },
    en: { slug: "/en/blog/why-digital-marketing-not-working/", title: "Why Your Digital Marketing Isn't Working | Nesco Digital", description: "10 real reasons your campaigns aren't delivering results — and concrete solutions for each problem, tested across dozens of clients." },
    de: { slug: "/ge/blog/warum-digitales-marketing-nicht-funktioniert/", title: "Warum dein digitales Marketing nicht funktioniert | Nesco Digital", description: "10 echte Gründe, warum deine Kampagnen keine Ergebnisse liefern — und konkrete Lösungen für jedes Problem, getestet bei dutzenden Kunden." },
  },
  {
    image: "/blog/linkedin-ads-b2b-romania.png",
    datePublished: "2026-02-01",
    section: "Paid Ads",
    tags: ["LinkedIn Ads", "B2B", "lead generation", "advertising", "targeting"],
    isHowTo: false,
    ro: { slug: "/blog/linkedin-ads-b2b-romania/", title: "LinkedIn Ads pentru B2B în România: Merită investiția? | Nesco Digital", description: "Costuri reale, formate de anunțuri, targetare avansată și studii de caz — tot ce trebuie să știi despre LinkedIn Ads pentru generare de leaduri B2B." },
    en: { slug: "/en/blog/linkedin-ads-b2b/", title: "LinkedIn Ads for B2B: Is It Worth the Investment? | Nesco Digital", description: "Real costs, ad formats, advanced targeting, and case studies — everything you need to know about LinkedIn Ads for B2B lead generation." },
    de: { slug: "/ge/blog/linkedin-ads-b2b/", title: "LinkedIn Ads für B2B: Lohnt sich die Investition? | Nesco Digital", description: "Echte Kosten, Anzeigenformate, erweitertes Targeting und Fallstudien — alles über LinkedIn Ads zur B2B-Leadgenerierung." },
  },
  {
    image: "/blog/performance-max-ecommerce.png",
    datePublished: "2026-01-30",
    section: "Paid Ads",
    tags: ["Performance Max", "Google Ads", "e-commerce", "campaigns", "optimization"],
    isHowTo: true,
    ro: { slug: "/blog/performance-max-ecommerce/", title: "Performance Max 2026: Ghid complet pentru magazine online | Nesco Digital", description: "Cum funcționează campaniile Performance Max, cum le setezi corect pentru e-commerce și cele 5 greșeli care îți consumă bugetul degeaba." },
    en: { slug: "/en/blog/performance-max-ecommerce/", title: "Performance Max 2026: Complete Guide for Online Stores | Nesco Digital", description: "How Performance Max campaigns work, how to set them up correctly for e-commerce, and the 5 mistakes wasting your budget." },
    de: { slug: "/ge/blog/performance-max-ecommerce/", title: "Performance Max 2026: Vollständiger Leitfaden für Online-Shops | Nesco Digital", description: "Wie Performance Max Kampagnen funktionieren, wie man sie richtig für E-Commerce einrichtet und die 5 Fehler, die dein Budget verschwenden." },
  },
  {
    image: "/blog/ai-in-marketing-2026.png",
    datePublished: "2026-01-28",
    section: "Automation",
    tags: ["AI", "marketing", "artificial intelligence", "automation", "2026"],
    isHowTo: false,
    ro: { slug: "/blog/ai-in-marketing-2026/", title: "Cum folosesc companiile AI în marketing în 2026 | Nesco Digital", description: "De la generare de content la optimizare de campanii — cum implementezi inteligența artificială în marketingul tău fără să pierzi controlul." },
    en: { slug: "/en/blog/ai-in-marketing-2026/", title: "How Companies Use AI in Marketing in 2026 | Nesco Digital", description: "From content generation to campaign optimization — how to implement artificial intelligence in your marketing without losing control." },
    de: { slug: "/ge/blog/ki-im-marketing-2026/", title: "Wie Unternehmen KI im Marketing 2026 einsetzen | Nesco Digital", description: "Von Content-Erstellung bis Kampagnenoptimierung — wie du künstliche Intelligenz in dein Marketing implementierst, ohne die Kontrolle zu verlieren." },
  },
  {
    image: "/blog/retargeting-remarketing.png",
    datePublished: "2026-01-26",
    section: "Paid Ads",
    tags: ["retargeting", "remarketing", "advertising", "conversion", "audiences"],
    isHowTo: true,
    ro: { slug: "/blog/retargeting-remarketing-ghid/", title: "Retargeting și remarketing: Cum recuperezi clienții pierduți | Nesco Digital", description: "Strategii de retargeting pe Google, Meta și email care transformă vizitatorii care au plecat în clienți plătitori — cu exemple concrete de audiențe." },
    en: { slug: "/en/blog/retargeting-remarketing-guide/", title: "Retargeting and Remarketing: How to Win Back Lost Customers | Nesco Digital", description: "Retargeting strategies on Google, Meta, and email that turn visitors who left into paying customers — with concrete audience examples." },
    de: { slug: "/ge/blog/retargeting-remarketing-leitfaden/", title: "Retargeting und Remarketing: Wie man verlorene Kunden zurückgewinnt | Nesco Digital", description: "Retargeting-Strategien auf Google, Meta und E-Mail, die abgesprungene Besucher in zahlende Kunden verwandeln — mit konkreten Zielgruppen-Beispielen." },
  },
  {
    image: "/blog/cum-alegi-crm.png",
    datePublished: "2026-01-24",
    section: "Automation",
    tags: ["CRM", "HubSpot", "Salesforce", "Pipedrive", "implementation"],
    isHowTo: true,
    ro: { slug: "/blog/cum-alegi-crm/", title: "Cum să alegi și să implementezi un CRM în 2026 | Nesco Digital", description: "Comparație HubSpot vs Salesforce vs Pipedrive, criterii de selecție și ghid de implementare pas cu pas pentru echipe mici și medii." },
    en: { slug: "/en/blog/how-to-choose-crm/", title: "How to Choose and Implement a CRM in 2026 | Nesco Digital", description: "HubSpot vs Salesforce vs Pipedrive comparison, selection criteria, and step-by-step implementation guide for small and medium teams." },
    de: { slug: "/ge/blog/wie-crm-waehlen/", title: "Wie man ein CRM auswählt und implementiert | Nesco Digital", description: "HubSpot vs Salesforce vs Pipedrive Vergleich, Auswahlkriterien und Schritt-für-Schritt-Implementierungsleitfaden für kleine und mittlere Teams." },
  },
];

// Build a lookup map keyed by path for fast access
const articleMap = new Map<string, BlogArticleMeta>();

for (const group of ARTICLE_GROUPS) {
  for (const locale of ["ro", "en", "de"] as Locale[]) {
    const localeData = group[locale];
    const meta: BlogArticleMeta = {
      slug: localeData.slug,
      locale,
      title: localeData.title,
      description: localeData.description,
      path: localeData.slug,
      image: group.image,
      datePublished: group.datePublished,
      section: group.section,
      tags: group.tags,
      isHowTo: group.isHowTo,
      alternates: {
        ro: `${BASE_URL}${group.ro.slug}`,
        en: `${BASE_URL}${group.en.slug}`,
        de: `${BASE_URL}${group.de.slug}`,
      },
    };
    articleMap.set(localeData.slug, meta);
  }
}

export function getArticleByPath(path: string): BlogArticleMeta | undefined {
  return articleMap.get(path);
}
