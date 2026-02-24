import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function ArticlePage() {
  return (
    <>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505" }}>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: "#050505",
            paddingTop: "140px",
            paddingBottom: "80px",
          }}
        >
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-20%",
              right: "-10%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div
            className="relative page-container"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            <span
              className="badge mb-4"
              style={{
                background: "rgba(168,85,247,0.10)",
                color: "#a855f7",
                border: "1px solid rgba(168,85,247,0.18)",
              }}
            >
              Web Design
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              22. Februar 2026 &middot; 10 Min Lesezeit
            </p>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Was kostet eine Website in 2026?{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #a855f7 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vollstandiger Preisleitfaden
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Von Landing Pages bis hin zu komplexen Webanwendungen &mdash; die
              Preise reichen von 500&nbsp;&euro; bis 100.000&nbsp;&euro;+.
              Erfahre genau, was du zahlen solltest und warum.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <article
          className="page-container"
          style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "80px" }}
        >
          {/* Intro */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &bdquo;Was kostet eine Website?&ldquo; &mdash; das ist die
                Frage Nummer eins, die wir von Unternehmern, Start-ups und
                etablierten Firmen gleichermassen horen. Die ehrliche Antwort
                lautet: Es kommt darauf an. Der Preis einer Website kann 2026
                von <strong style={{ color: "#fff" }}>500&nbsp;&euro;</strong>{" "}
                fur eine einfache Landing Page bis zu{" "}
                <strong style={{ color: "#fff" }}>100.000&nbsp;&euro;+</strong>{" "}
                fur eine komplexe Webanwendung reichen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Diese enorme Preisspanne ist kein Zufall &mdash; sie hangt vom
                Website-Typ, der Design-Komplexitat, den benotigten Funktionen
                und davon ab, wer die Website erstellt. In diesem Leitfaden
                schlusseln wir jede Website-Kategorie auf, zeigen die realen
                Kosten auf dem europaischen Markt und decken die versteckten
                Ausgaben auf, die die meisten Kunden erst nach der
                Vertragsunterzeichnung entdecken.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Preisfaktoren */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Faktoren, die den Website-Preis beeinflussen
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Bevor wir uns die konkreten Zahlen ansehen, musst du verstehen,
                was eine Website 2.000&nbsp;&euro; oder 20.000&nbsp;&euro;
                kosten lasst. Hier sind die wichtigsten Faktoren, die das
                endgultige Budget bestimmen:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    title: "Website-Typ",
                    desc: "Eine einseitige Landing Page ist grundlegend anders als ein Onlineshop mit 5.000 Produkten. Die strukturelle Komplexitat ist der grosste Kostentreiber.",
                  },
                  {
                    title: "Design: Template vs. Custom",
                    desc: "Ein vorgefertigtes Template kostet zwischen 50\u2013200 \u20AC und lasst sich schnell anpassen. Ein Custom-Design, von Grund auf erstellt, beginnt bei 1.500 \u20AC und kann Zehntausende erreichen.",
                  },
                  {
                    title: "Seitenanzahl",
                    desc: "Jede zusatzliche Seite bedeutet Design, Copywriting, SEO-Optimierung und Testing. Eine 5-Seiten-Website dauert Tage, eine mit 50 Seiten dauert Monate.",
                  },
                  {
                    title: "Spezielle Funktionalitaten",
                    desc: "Buchungssysteme, Zahlungsgateways, CRM-Integrationen, Live-Chat, Kundenportale, Dashboards \u2014 jedes Element erhoht die Komplexitat und die Kosten.",
                  },
                  {
                    title: "CMS-Wahl",
                    desc: "WordPress ist die gunstigste Option. Shopify vereinfacht E-Commerce, bringt aber monatliche Gebuhren mit sich. Custom-Losungen (Next.js, Laravel) bieten maximale Flexibilitat, erfordern aber spezialisierte Entwickler.",
                  },
                  {
                    title: "SEO & Performance-Optimierung",
                    desc: "Eine schnelle, suchmaschinenoptimierte Website erfordert zusatzliche technische Arbeit: URL-Struktur, Meta-Tags, Schema-Markup, Core Web Vitals, Bildkomprimierung.",
                  },
                  {
                    title: "Content-Erstellung",
                    desc: "Professionelles Copywriting, Produktfotografie, Videos \u2014 hochwertiger Content macht den Unterschied zwischen einer Website, die konvertiert, und einer, die nur existiert.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Section: Preistabelle nach Website-Typ */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Preistabelle nach Website-Typ
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Wir haben die Durchschnittspreise auf dem europaischen Markt fur
                2026 zusammengestellt, basierend auf unserer Erfahrung und
                Branchendaten:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "640px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Website-Typ", "Preis (EUR)", "Zeitrahmen", "Ideal fur"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #a855f7",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Landing Page",
                        "500 \u2013 2.000 \u20AC",
                        "1\u20132 Wochen",
                        "Kampagnen, Produktlaunches",
                      ],
                      [
                        "Prasentationsseite (5\u201310 Seiten)",
                        "2.000 \u2013 5.000 \u20AC",
                        "3\u20136 Wochen",
                        "KMUs, Dienstleister",
                      ],
                      [
                        "Unternehmenswebsite",
                        "5.000 \u2013 15.000 \u20AC",
                        "6\u201312 Wochen",
                        "Mittlere Unternehmen",
                      ],
                      [
                        "E-Commerce (Shopify/WooCommerce)",
                        "3.000 \u2013 15.000 \u20AC",
                        "4\u201310 Wochen",
                        "Online-Einzelhandel",
                      ],
                      [
                        "Custom E-Commerce",
                        "10.000 \u2013 50.000+ \u20AC",
                        "12\u201324 Wochen",
                        "Grosse Produktkataloge",
                      ],
                      [
                        "Webanwendung",
                        "15.000 \u2013 100.000+ \u20AC",
                        "12\u201340 Wochen",
                        "SaaS, Plattformen",
                      ],
                    ].map(([type, price, timeline, bestFor], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {type}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {price}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {timeline}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Diese Preise beinhalten Design, Entwicklung und
                Grundkonfiguration, decken aber in der Regel nicht den Content
                (Texte, Fotografie) oder das Post-Launch-Marketing ab. Eine
                solide Prasentationsseite beginnt bei rund{" "}
                <strong style={{ color: "#fff" }}>2.000&nbsp;&euro;</strong>,
                wahrend ein professioneller Shopify- oder WooCommerce-Shop
                zwischen{" "}
                <strong style={{ color: "#fff" }}>
                  3.000 und 15.000&nbsp;&euro;
                </strong>{" "}
                liegt, je nach Kataloggrosse und individuellen Funktionen.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Versteckte Kosten */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Versteckte Kosten, die dir niemand verrat
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der anfangliche Website-Preis ist nur die Spitze des Eisbergs.
                Die meisten Unternehmen entdecken erst nach dem Launch, dass es
                wiederkehrende Kosten gibt, die sich schnell summieren. Hier ist,
                was du monatlich einplanen solltest:
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Wiederkehrende monatliche Kosten:
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    ["Hosting", "10 \u2013 100 \u20AC/Monat"],
                    ["Domain (.de / .com)", "10 \u2013 30 \u20AC/Jahr"],
                    ["SSL-Zertifikat", "Kostenlos \u2013 200 \u20AC/Jahr"],
                    ["Wartung & Updates", "50 \u2013 300 \u20AC/Monat"],
                    ["Content-Aktualisierungen", "100 \u2013 500 \u20AC/Monat"],
                    ["Premium-Plugins & Lizenzen", "20 \u2013 200 \u20AC/Monat"],
                    ["Sicherheitsuberwachung", "30 \u2013 150 \u20AC/Monat"],
                    ["Automatische Backups", "10 \u2013 50 \u20AC/Monat"],
                  ].map(([label, value]) => (
                    <li
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span>{label}</span>
                      <span
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#a855f7",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Geschatztes monatliches Gesamt</span>
                    <span>230 &ndash; 1.300 &euro;/Monat</span>
                  </li>
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Eine &bdquo;kostenlose&ldquo; oder extrem gunstige Website beim
                Launch kann langfristig teuer werden, wenn du diese laufenden
                Ausgaben nicht von Anfang an eingeplant hast. Professionelle
                Agenturen bieten in der Regel ein Wartungspaket an, das die
                Budgetplanung vereinfacht und sicherstellt, dass deine Website{" "}
                <strong style={{ color: "#fff" }}>
                  sicher, schnell und aktuell
                </strong>{" "}
                bleibt.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Freelancer vs. Agentur vs. DIY */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Freelancer vs. Agentur vs. DIY
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Neben dem Website-Typ hat auch die Frage, wer sie erstellt,
                einen grossen Einfluss auf Preis, Qualitat und Lieferzeit. So
                vergleichen sich die drei Hauptoptionen:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "540px",
                  }}
                >
                  <thead>
                    <tr>
                      {["Kriterium", "DIY (Wix, Squarespace)", "Freelancer", "Agentur"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #a855f7",
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                            }}
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Preis",
                        "0 \u2013 500 \u20AC",
                        "500 \u2013 5.000 \u20AC",
                        "2.000 \u2013 50.000+ \u20AC",
                      ],
                      [
                        "Designqualitat",
                        "Begrenzte Templates",
                        "Gut, aber personenabhangig",
                        "Premium, massgeschneidert von Grund auf",
                      ],
                      [
                        "Lieferzeit",
                        "Einige Tage",
                        "2\u20136 Wochen",
                        "4\u201316 Wochen",
                      ],
                      [
                        "Support nach Launch",
                        "Self-Service",
                        "Begrenzt, keine Garantien",
                        "Wartungsvertrag, SLA",
                      ],
                      [
                        "SEO & Performance",
                        "Grundlegend",
                        "Variabel",
                        "Vollstandige Optimierung inklusive",
                      ],
                      [
                        "Skalierbarkeit",
                        "Durch Plattform begrenzt",
                        "Mittel",
                        "Maximal \u2013 skalierbare Architektur",
                      ],
                      [
                        "Ideal fur",
                        "Hobby, schneller Ideentest",
                        "Kleines Budget, einfache Projekte",
                        "Serioses Business, langfristiger ROI",
                      ],
                    ].map(([kriterium, diy, freelancer, agentur], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {kriterium}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {diy}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {freelancer}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {agentur}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Eine DIY-Plattform kann fur einen personlichen Blog oder einen
                schnellen Markttest eine gute Losung sein. Aber wenn deine
                Website Leads oder Umsatz fur dein Unternehmen generieren soll,
                zahlt sich die Investition in einen erfahrenen Freelancer oder
                eine Agentur schnell aus &mdash; durch{" "}
                <strong style={{ color: "#fff" }}>
                  hohere Conversions, besseres SEO und ein professionelles
                  Erscheinungsbild
                </strong>
                , das Vertrauen bei potenziellen Kunden schafft.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Warum die Preise so stark variieren */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.625rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Warum variieren die Preise so stark?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Eine Website fur 1.000&nbsp;&euro; und eine fur
                10.000&nbsp;&euro; konnen oberflachlich ahnlich aussehen &mdash;
                aber die Unterschiede unter der Haube sind enorm. Gunstige
                Websites kommen typischerweise mit{" "}
                <strong style={{ color: "#fff" }}>unoptimiertem Code</strong>,
                der langsam ladt,{" "}
                <strong style={{ color: "#fff" }}>
                  ohne korrekte SEO-Struktur
                </strong>
                , ohne Mobile-Testing, ohne angemessene Sicherheit und ohne
                Dokumentation.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Eine professionelle Website beinhaltet:{" "}
                <strong style={{ color: "#fff" }}>
                  datengetriebene UX-Architektur
                </strong>
                , responsives Design getestet auf 10+ Geraten, Ladezeit unter 2
                Sekunden, vollstandige SEO-Struktur (Schema-Markup, XML-Sitemap,
                Canonical Tags), Analytics- und CRM-Integrationen sowie sauberen
                Code, der zukunftige Erweiterungen ermoglicht.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Denk so daruber nach: Eine gunstige Website ist eine Ausgabe.
                Eine professionelle Website ist eine{" "}
                <strong style={{ color: "#fff" }}>Investition</strong>, die uber
                Jahre Umsatz generiert. Eine gut gebaute Prasentationsseite kann
                Leads im Wert von Zehntausenden Euro pro Jahr generieren &mdash;
                und amortisiert sich oft innerhalb der ersten 3&ndash;6 Monate.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Ausserdem erfordert eine gunstige Website haufig einen{" "}
                <strong style={{ color: "#fff" }}>kompletten Neubau</strong>{" "}
                nach 1&ndash;2 Jahren, wenn die Limitierungen offensichtlich
                werden. Eine professionelle Website hat mit entsprechender
                Wartung eine Lebensdauer von 4&ndash;5 Jahren &mdash; die
                tatsachlichen Kosten pro Jahr sind am Ende geringer.
              </p>
            </div>
          </FadeInSection>

          {/* CTA Box */}
          <FadeInSection>
            <div
              style={{
                padding: "40px",
                background: "#0a0a0a",
                borderRadius: "20px",
                border: "1px solid rgba(86,219,132,0.2)",
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Mochtest du eine professionelle Website?
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  margin: "0 auto 28px",
                }}
              >
                Wir erstellen Websites, die grossartig aussehen, blitzschnell
                laden und Besucher in Kunden verwandeln. Von Landing Pages bis
                hin zu komplexen E-Commerce-Plattformen.
              </p>
              <Link href="/ge/webdesign/" className="btn-primary">
                Webdesign-Services ansehen <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* Related Articles */}
          <FadeInSection>
            <div style={{ marginBottom: "40px" }}>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "24px",
                }}
              >
                Ahnliche Artikel
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#56db84",
                    }}
                  >
                    Paid Ads
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Was kostet Google Ads? Vollstandiger Preisleitfaden
                  </h3>
                  <Link
                    href="/ge/blog/was-kostet-google-ads/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Lesen <ArrowRight size={14} />
                  </Link>
                </div>
                <div
                  style={{
                    padding: "28px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3b82f6",
                    }}
                  >
                    Strategie
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Was kostet ein interner Spezialist vs. eine
                    Marketing-Agentur?
                  </h3>
                  <Link
                    href="/ge/blog/kosten-interner-spezialist-vs-agentur/"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                      textDecoration: "none",
                    }}
                  >
                    Lesen <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="de" />
    </>
  );
}
