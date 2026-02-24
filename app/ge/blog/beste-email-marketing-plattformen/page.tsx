import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#ec4899";

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
                "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
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
            style={{ maxWidth: "820px" }}
          >
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
                24. Februar 2026
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                &middot;
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                12 Min Lesezeit
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
              Die besten E-Mail-Marketing-Plattformen{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #ec4899 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                im Jahr 2026
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
              Ein ehrlicher Vergleich der beliebtesten E-Mail-Marketing-Plattformen:
              Funktionen, Preise, St&auml;rken und Schw&auml;chen &mdash; damit du
              das richtige Tool f&uuml;r dein Unternehmen findest.
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
              E-Mail-Marketing bleibt der digitale Kanal mit dem h&ouml;chsten ROI &mdash;
              zwischen <strong style={{ color: "#fff" }}>36 und 42 Dollar pro investiertem Dollar</strong>,
              laut DMA- und Litmus-Studien aus 2025. Aber dieser ROI kommt nicht von selbst.
              Er kommt von der Plattform, die du w&auml;hlst, davon, wie du sie konfigurierst,
              und wie gut sie zu deinen Gesch&auml;ftsanforderungen passt.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Im Jahr 2026 ist der E-Mail-Marketing-Markt wettbewerbsintensiver als je zuvor.
              Es gibt Dutzende von Plattformen, jede mit unterschiedlichen St&auml;rken und
              Schw&auml;chen. Einige gl&auml;nzen bei komplexen Automatisierungen, andere bei
              der Benutzerfreundlichkeit und wieder andere beim Preis-Leistungs-Verh&auml;ltnis.
              Wir haben die sechs relevantesten Plattformen analysiert und sie anhand konkreter
              Kriterien verglichen: Funktionen, Preise, Skalierbarkeit und f&uuml;r wen sie am
              besten geeignet sind.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Ob du einen Online-Shop gerade aufbaust, eine Agentur bist, die mehrere Kunden
              betreut, oder ein B2B-Unternehmen mit langen Verkaufszyklen &mdash; dieser
              Leitfaden hilft dir, eine fundierte Entscheidung zu treffen.
            </p>
          </FadeInSection>

          {/* Comparison Table */}
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
              Schnellvergleich: alle 6 Plattformen
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Bevor wir ins Detail gehen, hier ein &Uuml;berblick, der dir hilft, die
              Angebote der einzelnen Plattformen schnell zu vergleichen:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                  minWidth: "640px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#111",
                      borderBottom: `2px solid ${CATEGORY_COLOR}`,
                    }}
                  >
                    {["Plattform", "Am besten f\u00FCr", "Hauptfunktion", "Startpreis", "Gratis-Plan?"].map((h) => (
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
                    ["ActiveCampaign", "Komplexe Automatisierungen + CRM", "Visueller Automation Builder", "Ab 29$/Monat", "Nein (14-Tage-Test)"],
                    ["Brevo", "Preis-Leistung", "E-Mail + SMS + WhatsApp", "Gratis / 25$/Monat", "Ja (300 E-Mails/Tag)"],
                    ["Sender", "Kleines Budget / Einsteiger", "Einfache UI + Automatisierungen", "Gratis / 15$/Monat", "Ja (15.000 E-Mails/Monat)"],
                    ["Kit (ConvertKit)", "Content Creator", "Landing Pages + Sequenzen", "Gratis / 25$/Monat", "Ja (10.000 Abonnenten)"],
                    ["Mailchimp", "Kleine-mittlere Marken", "Templates + Integrationen", "Gratis / 13$/Monat", "Ja (500 Kontakte)"],
                    ["Klaviyo", "Fortgeschrittener E-Commerce", "Verhaltensbasierte Segmentierung", "Gratis / 20$/Monat", "Ja (250 Kontakte)"],
                  ].map(([plattform, bestFor, feature, preis, free], i) => (
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
                        {plattform}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {bestFor}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {feature}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {preis}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {free}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Detailed Reviews */}
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
              Detaillierter Test: jede Plattform im &Uuml;berblick
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Wir haben jede Plattform getestet und nach Funktionen, Benutzerfreundlichkeit,
              Kundensupport und Preis-Leistungs-Verh&auml;ltnis bewertet. Hier sind unsere
              Ergebnisse:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {/* ActiveCampaign */}
              <div
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
                  <a
                    href="#AFFILIATE_ACTIVECAMPAIGN"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    ActiveCampaign
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  ActiveCampaign ist der klare Marktf&uuml;hrer bei komplexen Automatisierungen.
                  Der visuelle Automation Builder erm&ouml;glicht es dir, Flows mit
                  Verzweigungen, Bedingungen und mehreren Aktionen zu erstellen &mdash; Dinge,
                  die die meisten konkurrierenden Plattformen auf diesem Niveau nicht bieten
                  k&ouml;nnen. Au&szlig;erdem enth&auml;lt es ein integriertes CRM, was es
                  ideal f&uuml;r Vertriebsteams macht, die E-Mail-Marketing mit ihrer
                  Vertriebspipeline kombinieren m&ouml;chten. Der Preis beginnt bei 29$/Monat
                  und steigt mit wachsender Liste, was es f&uuml;r kleine Teams teurer macht
                  als Alternativen. Die Lernkurve ist steiler, aber sobald du die Plattform
                  beherrschst, sind die M&ouml;glichkeiten nahezu grenzenlos. Am besten
                  geeignet f&uuml;r B2B-Unternehmen, SaaS-Firmen und Teams, die ausgefeilte
                  Automatisierungen kombiniert mit CRM ben&ouml;tigen.
                </p>
                <a
                  href="#AFFILIATE_ACTIVECAMPAIGN"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  ActiveCampaign testen <ArrowRight size={14} />
                </a>
              </div>

              {/* Brevo */}
              <div
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
                  <a
                    href="https://get.brevo.com/bvspkphc2pke"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Brevo
                  </a>{" "}
                  (ehemals Sendinblue)
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Brevo hat sich von einem einfachen E-Mail-Tool zu einer vollst&auml;ndigen
                  Marketing-Plattform entwickelt, die E-Mail, SMS, WhatsApp und Live-Chat
                  umfasst. Das Preismodell unterscheidet sich von den meisten Wettbewerbern:
                  Du zahlst pro Anzahl der versendeten E-Mails, nicht pro Kontaktanzahl, was
                  es extrem kosteneffizient f&uuml;r Unternehmen mit gro&szlig;en Listen aber
                  geringerer Versandh&auml;ufigkeit macht. Der kostenlose Plan umfasst 300
                  E-Mails pro Tag. Bei den Automatisierungen deckt Brevo die g&auml;ngigsten
                  Szenarien ab, erreicht aber nicht die Komplexit&auml;t von ActiveCampaign.
                  Die Oberfl&auml;che ist sauber und intuitiv. Am besten geeignet f&uuml;r
                  kleine und mittlere Unternehmen, die ein All-in-One-Tool m&ouml;chten, ohne
                  separat f&uuml;r SMS und E-Mail zu bezahlen.
                </p>
                <a
                  href="https://get.brevo.com/bvspkphc2pke"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Brevo testen <ArrowRight size={14} />
                </a>
              </div>

              {/* Sender */}
              <div
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
                  <a
                    href="#AFFILIATE_SENDER"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Sender
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Sender ist eine der am meisten untersch&auml;tzten E-Mail-Marketing-Plattformen.
                  Der kostenlose Plan bietet bis zu 2.500 Abonnenten und 15.000 E-Mails pro
                  Monat &mdash; deutlich gro&szlig;z&uuml;giger als Mailchimp oder Brevo. Die
                  Oberfl&auml;che ist unkompliziert und direkt. Es umfasst grundlegende
                  Automatisierungen (Welcome Series, Warenkorb-Abbruch), Popup-Formulare und
                  Integrationen mit den wichtigsten E-Commerce-Plattformen. Auf der Negativseite
                  fehlen erweiterte Segmentierungsfunktionen und detailliertes Reporting, und
                  die E-Mail-Templates sind weniger zahlreich und einfacher als bei der
                  Konkurrenz. Am besten geeignet f&uuml;r Startups, Freelancer und kleine
                  Unternehmen, die ein funktionales Tool ohne hohe Kosten suchen.
                </p>
                <a
                  href="#AFFILIATE_SENDER"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Sender testen <ArrowRight size={14} />
                </a>
              </div>

              {/* Kit (ConvertKit) */}
              <div
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
                  <a
                    href="#AFFILIATE_KIT"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: "#ec4899", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Kit
                  </a>{" "}
                  (ehemals ConvertKit)
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Kit (das ConvertKit-Rebranding) wurde speziell f&uuml;r Content Creator
                  entwickelt: Blogger, YouTuber, Kursersteller und Autoren. Die Kernst&auml;rke
                  liegt in der Einfachheit von E-Mail-Sequenzen und Landing Pages &mdash; du
                  kannst einen kompletten Funnel aufbauen, ohne eine separate Website zu
                  ben&ouml;tigen. Der kostenlose Plan umfasst bis zu 10.000 Abonnenten (mit
                  eingeschr&auml;nkten Funktionen). Automatisierungen sind visuell und einfach
                  einzurichten, bieten aber nicht die gleiche Flexibilit&auml;t wie
                  ActiveCampaign. E-Mail-Templates sind bewusst minimalistisch &mdash; Kit
                  f&ouml;rdert Text-first-E-Mails, die wie pers&ouml;nliche Nachrichten
                  aussehen, nicht wie Werbung. Nicht ideal f&uuml;r E-Commerce (es fehlen
                  native Integrationen mit Shop-Plattformen), aber f&uuml;r Content Creator
                  ist es eine der besten verf&uuml;gbaren Optionen.
                </p>
                <a
                  href="#AFFILIATE_KIT"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px",
                    padding: "8px 16px",
                    background: "rgba(236,72,153,0.10)",
                    border: "1px solid rgba(236,72,153,0.18)",
                    borderRadius: "8px",
                    color: "#ec4899",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Kit testen <ArrowRight size={14} />
                </a>
              </div>

              {/* Mailchimp (non-affiliate) */}
              <div
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
                  Mailchimp
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Mailchimp ist wahrscheinlich die bekannteste E-Mail-Marketing-Plattform der
                  Welt, und das aus gutem Grund: Die Oberfl&auml;che ist intuitiv, es gibt
                  Hunderte von Integrationen und ein ausgereiftes &Ouml;kosystem aus Templates
                  und Ressourcen. Der kostenlose Plan ist auf 500 Kontakte und 1.000 E-Mails
                  pro Monat begrenzt &mdash; deutlich weniger gro&szlig;z&uuml;gig als fr&uuml;her.
                  Bei den bezahlten Pl&auml;nen (ab 13$/Monat) schaltest du Automatisierungen,
                  A/B-Tests und erweiterte Segmentierung frei. Der gr&ouml;&szlig;te Nachteil:
                  Die Preise steigen schnell mit wachsender Liste, und einige wesentliche
                  Funktionen (wie Send Time Optimization) sind nur im Premium-Plan
                  (350$/Monat) verf&uuml;gbar. F&uuml;r kleine Unternehmen, die gerade
                  anfangen, bleibt Mailchimp eine solide Option, aber es gibt
                  kosteng&uuml;nstigere Alternativen.
                </p>
              </div>

              {/* Klaviyo (non-affiliate) */}
              <div
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
                  Klaviyo
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Klaviyo ist der K&ouml;nig des E-Mail-Marketings f&uuml;r E-Commerce.
                  Die native Integration mit Shopify, WooCommerce und Magento bedeutet,
                  dass du Zugang zu detaillierten Daten &uuml;ber das Kaufverhalten jedes
                  Kunden hast: angesehene Produkte, abgebrochene Warenk&ouml;rbe,
                  durchschnittlicher Bestellwert, Kaufh&auml;ufigkeit. Die Segmentierung
                  auf Basis dieser Daten ist unerreicht. Es enth&auml;lt Predictive
                  Analytics (Vorhersagen f&uuml;r das n&auml;chste Bestelldatum, Customer
                  Lifetime Value) und vorgefertigte Flows f&uuml;r jedes E-Commerce-Szenario.
                  Der Nachteil: der Preis. Der kostenlose Plan ist auf 250 Kontakte und 500
                  E-Mails begrenzt. Bei bezahlten Pl&auml;nen steigen die Kosten schnell
                  &mdash; ein Shop mit 10.000 Kontakten zahlt circa 150$/Monat. Wenn du einen
                  ernsthaften Online-Shop betreibst und E-Mail-Marketing ein strategischer
                  Kanal ist, ist Klaviyo die Investition, die sich selbst bezahlt.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* How to Choose */}
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
              Wie du die richtige Plattform w&auml;hlst
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Es gibt keine universell &bdquo;beste&rdquo; Plattform &mdash; nur die, die
              am besten zu deiner Situation passt. Hier sind die Kriterien, die du bewerten
              solltest:
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
                "Listengr\u00F6\u00DFe \u2014 wenn du unter 1.000 Abonnenten hast, reicht ein kostenloser Plan von Sender oder Kit. \u00DCber 10.000 solltest du die Kosten beim Skalieren sorgf\u00E4ltig pr\u00FCfen.",
                "Budget \u2014 f\u00FCr minimales Budget bieten Sender und Brevo das beste Preis-Leistungs-Verh\u00E4ltnis. Wenn Budget kein Problem ist, geben dir ActiveCampaign und Klaviyo die leistungsst\u00E4rksten Tools.",
                "Unternehmenstyp \u2014 E-Commerce bedeutet Klaviyo oder Brevo. Content Creator bedeutet Kit. B2B und SaaS bedeutet ActiveCampaign. Allgemeine kleine Unternehmen bedeutet Mailchimp oder Sender.",
                "Ben\u00F6tigte Funktionen \u2014 brauchst du komplexe Automatisierungen mit Verzweigungen? ActiveCampaign. Brauchst du SMS + E-Mail in einem Tool? Brevo. Brauchst du Landing Pages? Kit.",
                "Integrationen \u2014 pr\u00FCfe, ob die Plattform sich mit den Tools integriert, die du bereits nutzt: CMS, E-Commerce-Plattform, CRM, Analytics-Tools.",
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
              Ein praktischer Tipp: <strong style={{ color: "#fff" }}>W&auml;hle nicht nur nach dem Einstiegspreis</strong>.
              Berechne die Kosten bei der Listengr&ouml;&szlig;e, die du in 12 Monaten erwartest.
              Viele Plattformen erscheinen am Anfang g&uuml;nstig, werden aber beim Wachstum
              erheblich teurer. Au&szlig;erdem ist die Migration von einer Plattform zur anderen
              ein kostspieliger und zeitaufwendiger Prozess &mdash; es lohnt sich also, von
              Anfang an die richtige Wahl zu treffen.
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
                Entdecke unsere E-Mail-Marketing-L&ouml;sungen
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
                Wir helfen dir, die richtige E-Mail-Marketing-Plattform f&uuml;r dein
                Unternehmen auszuw&auml;hlen, einzurichten und zu optimieren. Von der
                Strategie bis zur vollst&auml;ndigen Implementierung.
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
                  color: "#ec4899",
                }}
              >
                Automatisierung
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  margin: "10px 0",
                }}
              >
                E-Mail-Marketing f&uuml;r E-Commerce: Wie man den Umsatz mit Newslettern steigert
              </h3>
              <Link
                href="/ge/blog/email-marketing-ecommerce/"
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
                  color: "#ec4899",
                }}
              >
                Automatisierung
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  margin: "10px 0",
                }}
              >
                Marketing-Automatisierung: Kompletter Tool-Leitfaden
              </h3>
              <Link
                href="/ge/blog/marketing-automatisierung-tools-leitfaden/"
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
