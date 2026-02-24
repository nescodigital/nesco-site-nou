import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#ec4899";

export default function EmailMarketingEcommercePage() {
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
                "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span
              className="badge mb-4"
              style={{
                background: "rgba(236,72,153,0.10)",
                color: "#ec4899",
                border: "1px solid rgba(236,72,153,0.18)",
              }}
            >
              Automatisierung
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                5. Februar 2026
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                ·
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                11 Min Lesezeit
              </span>
            </div>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                maxWidth: "700px",
              }}
            >
              E-Mail-Marketing f&uuml;r E-Commerce: Wie man den{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Umsatz mit Newslettern steigert
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.42)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Die 7 E-Mails, die jeder Online-Shop versenden muss, die richtige
              Listensegmentierung und die Tools, die alles automatisch laufen lassen.
            </p>
          </div>
        </section>

        {/* ── Article Content ── */}
        <section
          className="page-container"
          style={{
            maxWidth: "720px",
            paddingBottom: "80px",
          }}
        >
          {/* Intro */}
          <FadeInSection>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              E-Mail-Marketing generiert zwischen <strong style={{ color: "#fff" }}>36 und 42 Dollar pro investiertem Dollar</strong> &mdash;
              den h&ouml;chsten Return on Investment aller digitalen Kan&auml;le. F&uuml;r E-Commerce-Unternehmen ist
              E-Mail nicht optional. Es ist das R&uuml;ckgrat der Kundenbeziehung und die berechenbarste Quelle
              wiederkehrender Ums&auml;tze.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Dennoch versenden die meisten Online-Shops nur gelegentlich einen Newsletter und lassen Geld auf dem Tisch
              liegen. Keine automatisierten Flows, keine Segmentierung, keine Post-Purchase-Sequenzen. Das Ergebnis? Eine
              Liste, die kalt wird, sinkende &Ouml;ffnungsraten und null Umsatz aus E-Mail. Dieser Leitfaden zeigt dir
              genau, welche E-Mails du versenden musst, wie du deine Liste segmentierst und welche Tools du nutzen
              solltest, um E-Mail-Marketing in eine automatisierte Umsatzmaschine zu verwandeln.
            </p>
          </FadeInSection>

          {/* Section: Die 7 wichtigsten E-Mails */}
          <FadeInSection delay={100}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Die 7 wichtigsten E-Mails f&uuml;r jeden Online-Shop
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Jeder dieser Flows l&auml;uft automatisch, rund um die Uhr, und generiert Umsatz ohne manuellen Eingriff.
              Wenn du sie nicht eingerichtet hast, verlierst du jeden Tag Geld.
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
                  title: "1. Welcome Series (3 E-Mails)",
                  desc: "Erste E-Mail: deine Markengeschichte und Werte. Zweite: Bestseller und bestbewertete Produkte. Dritte: ein Anreiz f\u00FCr den Erstkauf (10-15% Rabatt, kostenloser Versand). Dieser Flow hat eine \u00D6ffnungsrate von \u00FCber 50% und eine Konversionsrate von ca. 10% \u2014 der mit Abstand leistungsst\u00E4rkste Flow, den du einrichten kannst.",
                },
                {
                  title: "2. Warenkorb-Abbruch (3 E-Mails)",
                  desc: "Erste E-Mail 1 Stunde nach dem Abbruch: eine einfache Erinnerung mit den Warenkorbprodukten. Zweite nach 24 Stunden: Social Proof hinzuf\u00FCgen (Bewertungen, Kundenzahl). Dritte nach 48-72 Stunden: einen Dringlichkeitsrabatt anbieten. Dieser Flow stellt 5-15% der abgebrochenen Warenk\u00F6rbe wieder her \u2014 Geld, das sonst komplett verloren w\u00E4re.",
                },
                {
                  title: "3. Post-Purchase (3 E-Mails)",
                  desc: "Erste E-Mail: Danke plus Bestellbest\u00E4tigung mit Versanddetails. Zweite 3-5 Tage nach Lieferung: Produktanleitung oder Pflegehinweise. Dritte nach 7-10 Tagen: Bewertungsanfrage. Dieser Flow baut Loyalit\u00E4t auf und erh\u00F6ht die Wiederkaufrate um 20-30%.",
                },
                {
                  title: "4. Browse Abandonment",
                  desc: "\"Du hast dir X angesehen, immer noch interessiert?\" \u2014 ausgel\u00F6st 1 Stunde nachdem ein Besucher eine Produktseite besucht hat, ohne in den Warenkorb zu legen. Mit Produktbild, Preis und einem direkten CTA. Konversionsrate: 2-5%, aber das Volumen kann bei Shops mit hohem Traffic erheblich sein.",
                },
                {
                  title: "5. Win-Back (2 E-Mails)",
                  desc: "F\u00FCr Kunden, die seit 60-90 Tagen inaktiv sind. Erste E-Mail: \"Wir vermissen dich\" mit personalisierten Empfehlungen basierend auf fr\u00FCheren K\u00E4ufen. Zweite E-Mail: ein exklusiver Anreiz (Rabatt, Geschenk, kostenloser Versand). Die Reaktivierung von nur 5-10% der inaktiven Kunden kann einen erheblichen Umsatzeinfluss haben.",
                },
                {
                  title: "6. Geburtstag / Jahrestag",
                  desc: "Eine personalisierte E-Mail zum Geburtstag des Kunden oder zum Jahrestag des ersten Kaufs, gepaart mit einem exklusiven Angebot (Sonderrabatt, Geschenk). Konvertiert 2-3x h\u00F6her als regul\u00E4re E-Mails dank der emotionalen Komponente und dem Gef\u00FChl der Exklusivit\u00E4t.",
                },
                {
                  title: "7. Re-Engagement",
                  desc: "F\u00FCr Abonnenten, die seit 90+ Tagen keine E-Mail ge\u00F6ffnet haben. Das Ziel ist doppelt: entweder reaktivieren oder von der Liste entfernen. Eine saubere Liste bedeutet bessere Zustellbarkeit und niedrigere Kosten. Sende eine E-Mail mit einer direkten Betreffzeile (\"M\u00F6chtest du weiterhin von uns h\u00F6ren?\") und einem einzigen klaren CTA.",
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
          </FadeInSection>

          {/* Section: Segmentierung */}
          <FadeInSection delay={100}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Segmentierung: die richtige Nachricht an die richtige Person
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Eine generische E-Mail an die gesamte Liste hat minimale Wirkung. Segmentierung bedeutet, deine Liste in
              Gruppen basierend auf Verhalten und Wert aufzuteilen und dann relevante Nachrichten an jedes Segment zu
              senden. Hier sind die wesentlichen Segmente:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#111",
                      borderBottom: `2px solid ${CATEGORY_COLOR}`,
                    }}
                  >
                    {["Segment", "Kriterien", "Strategie"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "14px 18px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 600,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["VIP-Kunden", "Top 10% nach Umsatz", "Exklusiver Zugang, fr\u00FCher Zugang zu Sales"],
                    ["Neukunden", "Erstkauf < 30 Tage", "Markenwissen aufbauen, Cross-Sell"],
                    ["Gef\u00E4hrdete Kunden", "Kein Kauf seit 60+ Tagen", "Win-Back-Angebote"],
                    ["Hoher AOV", "\u00DCber durchschnittlichem Bestellwert", "Premium-Produktempfehlungen"],
                    ["Stammk\u00E4ufer", "3+ K\u00E4ufe", "Treueprogramm, Belohnungen"],
                    ["Warenkorbabbrecher", "In den Warenkorb gelegt, nicht gekauft", "Wiederherstellungssequenz"],
                  ].map(([segment, kriterien, strategie], i) => (
                    <tr
                      key={i}
                      style={{
                        background: "#0a0a0a",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 600,
                        }}
                      >
                        {segment}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {kriterien}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {strategie}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              Segmentierte E-Mails generieren <strong style={{ color: "#fff" }}>760% mehr Umsatz</strong> als
              E-Mails, die an die gesamte Liste gesendet werden. Das ist nicht optional &mdash; es ist der Unterschied
              zwischen E-Mail-Marketing, das funktioniert, und E-Mail-Marketing, das ignoriert wird.
            </p>
          </FadeInSection>

          {/* Section: A/B-Testing */}
          <FadeInSection delay={100}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              E-Mail A/B-Testing: was du testen solltest und warum
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Jede E-Mail, die du versendest, ist eine Gelegenheit zu lernen, was bei deiner Zielgruppe ankommt.
              A/B-Testing bedeutet, zwei Varianten derselben E-Mail an gleich gro&szlig;e Segmente zu senden und zu
              messen, welche besser abschneidet. Hier ist, was du testen solltest:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              {[
                "Betreffzeilen — Tests der Betreffzeile allein k\u00F6nnen die \u00D6ffnungsraten um 20-30% verbessern. Teste L\u00E4nge, Emotion, Dringlichkeit vs. Neugier, Emojis vs. ohne.",
                "Versandzeitpunkt — morgens vs. abends, Wochentag vs. Wochenende. Das variiert je nach Branche und Zielgruppe.",
                "CTA-Button — Farbe, Text (\"Jetzt kaufen\" vs. \"Angebot ansehen\"), Position in der E-Mail, Gr\u00F6\u00DFe.",
                "E-Mail-L\u00E4nge — kurz und direkt vs. ausf\u00FChrlich mit Storytelling. H\u00E4ngt von Produkttyp und Segment ab.",
                "Personalisierung — mit Kundennamen vs. ohne, verhaltensbasierte Empfehlungen vs. generische Auswahl.",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  <span style={{ color: "#ec4899", flexShrink: 0 }}>
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              Goldene Regel: teste <strong style={{ color: "#fff" }}>jeweils nur ein Element</strong>. Wenn du
              gleichzeitig die Betreffzeile und den CTA &auml;nderst, wei&szlig;t du nicht, was den Unterschied
              gemacht hat. F&uuml;hre jeden Test mit mindestens 1.000 Abonnenten durch, um statistisch signifikante
              Ergebnisse zu erhalten.
            </p>
          </FadeInSection>

          {/* Section: Empfohlene Tools */}
          <FadeInSection delay={100}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Empfohlene Tools f&uuml;r E-Commerce E-Mail-Marketing
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Nicht alle E-Mail-Marketing-Plattformen sind gleich. F&uuml;r E-Commerce brauchst du native
              Integrationen mit deiner Shop-Plattform, erweiterte automatisierte Flows und verhaltensbasierte
              Segmentierung.
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
                  title: "Klaviyo",
                  desc: "Das beste Tool f\u00FCr E-Commerce, ohne Frage. Native Integration mit Shopify, WooCommerce und Magento. Erweiterte Segmentierung basierend auf Kaufverhalten, Predictive Analytics, vorgefertigte Flows f\u00FCr jedes Szenario. Preis ab 20$/Monat f\u00FCr bis zu 500 Kontakte.",
                },
                {
                  title: "Mailchimp",
                  desc: "Die beliebteste und zug\u00E4nglichste Option. Gut f\u00FCr kleine Shops, die gerade mit E-Mail-Marketing anfangen. Kostenloser Plan bis 500 Kontakte. Einschr\u00E4nkungen: Erweiterte Segmentierung und automatisierte Flows sind nur in den kostenpflichtigen Pl\u00E4nen verf\u00FCgbar (ab 13$/Monat).",
                },
                {
                  title: "ActiveCampaign",
                  desc: "Hervorragend f\u00FCr komplexe Automatisierungen und integriertes CRM. Ideal, wenn du einen l\u00E4ngeren Verkaufszyklus hast oder auch B2B verkaufst. Ab 29$/Monat. Der Automatisierungs-Builder ist der leistungsst\u00E4rkste auf dem Markt, hat aber eine steilere Lernkurve.",
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
          </FadeInSection>

          {/* Section: Wichtige Metriken */}
          <FadeInSection delay={100}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "16px",
              }}
            >
              Die wichtigsten Metriken, die du verfolgen musst
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Was du nicht misst, kannst du nicht verbessern. Hier sind die wichtigsten Metriken und ihre
              E-Commerce-Benchmarks:
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
                  ["\u00D6ffnungsrate", "Benchmark: 20-25%"],
                  ["Klickrate (CTR)", "Benchmark: 2-5%"],
                  ["Konversionsrate", "Benchmark: 1-3%"],
                  ["Umsatz pro E-Mail", "Variiert je nach Branche, Trend verfolgen"],
                  ["Listenwachstumsrate", "Ziel: 2-5% pro Monat"],
                  ["Abmelderate", "Unter 0,5% pro Versand"],
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
                    <span style={{ color: "#fff", fontWeight: 600 }}>
                      {label}
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              Die wichtigste Metrik ist der <strong style={{ color: "#fff" }}>Umsatz pro E-Mail</strong> &mdash;
              wie viel Umsatz jede gesendete E-Mail generiert. Wenn diese Zahl von Monat zu Monat steigt,
              funktioniert deine Strategie. Die anderen Metriken sind Vorlaufindikatoren, die dir helfen zu
              verstehen, warum es funktioniert oder nicht.
            </p>
          </FadeInSection>

          {/* ── CTA Box ── */}
          <FadeInSection delay={100}>
            <div
              style={{
                marginTop: "56px",
                padding: "40px",
                background: "#0a0a0a",
                border: "1px solid rgba(86,219,132,0.2)",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <h3
                className="font-black text-white"
                style={{
                  fontSize: "1.375rem",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Automatisiere dein E-Mail-Marketing
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  maxWidth: "480px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Richte automatisierte Flows ein, die rund um die Uhr Umsatz generieren.
                Wir k&uuml;mmern uns um Strategie, Setup und kontinuierliche Optimierung.
              </p>
              <Link
                href="/ge/email-marketing-loesungen/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                E-Mail-Marketing-L&ouml;sungen entdecken
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </section>

        {/* ── Related Articles ── */}
        <section
          className="page-container"
          style={{ paddingBottom: "120px" }}
        >
          <h2
            className="font-black text-white"
            style={{
              fontSize: "1.5rem",
              letterSpacing: "-0.02em",
              marginBottom: "32px",
            }}
          >
            Weitere Artikel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  color: "#f59e0b",
                }}
              >
                E-Commerce
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  margin: "10px 0",
                }}
              >
                Warum Kunden den Warenkorb abbrechen (und wie man es behebt)
              </h3>
              <Link
                href="/ge/blog/warenkorbabbruch-beheben/"
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
                  color: "#f59e0b",
                }}
              >
                E-Commerce
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  margin: "10px 0",
                }}
              >
                Wie man den Online-Shop-Umsatz 2026 steigert
              </h3>
              <Link
                href="/ge/blog/online-shop-umsatz-steigern/"
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
        </section>
      </main>
      <Footer locale="de" />
    </>
  );
}
