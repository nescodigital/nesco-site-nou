import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function LinkedInAdsB2BPage() {
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
                "radial-gradient(circle, rgba(86,219,132,0.05) 0%, transparent 70%)",
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
                background: "rgba(86,219,132,0.10)",
                color: "#56db84",
                border: "1px solid rgba(86,219,132,0.18)",
              }}
            >
              Paid Ads
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
                1. Februar 2026
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
                10 Min Lesezeit
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
              LinkedIn Ads fur B2B:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Lohnt sich die Investition?
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
              Die teuerste Paid-Social-Plattform, aber auch die mit den
              hochwertigsten B2B-Leads. Wann sich die Investition lohnt und
              wann du dein Budget besser anderswo einsetzt.
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
              LinkedIn Ads ist ohne Frage die teuerste Social-Advertising-Plattform auf dem Markt. Mit
              einem durchschnittlichen CPC zwischen{" "}
              <strong style={{ color: "#fff" }}>3 und 12 Euro</strong> zahlst du pro Klick 5- bis 10-mal
              mehr als bei Meta oder Google Display. Und trotzdem: Fur B2B-Unternehmen, die hochpreisige
              Produkte oder Dienstleistungen verkaufen, kann die Qualitat der uber LinkedIn generierten
              Leads von keiner anderen Plattform erreicht werden.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              In diesem umfassenden Leitfaden analysieren wir, wann sich LinkedIn Ads lohnen, welche
              Anzeigenformate funktionieren, wie du dein Budget realistisch planst und &mdash; ebenso
              wichtig &mdash; wann du dein Geld besser woanders investierst. Alles basierend auf echten
              Daten aus B2B-Kampagnen, die wir fur unsere Kunden betreuen.
            </p>
          </FadeInSection>

          {/* Section: Warum LinkedIn fur B2B */}
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
              Warum LinkedIn fur B2B?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              LinkedIn hat weltweit uber{" "}
              <strong style={{ color: "#fff" }}>900 Millionen Mitglieder</strong>, und was die Plattform
              einzigartig macht: Entscheidungstrager sind hier tatsachlich aktiv. Sie haben nicht nur ein
              Profil &mdash; sie posten, kommentieren und interagieren regelmasig mit Business-Inhalten.
              Das bedeutet, deine Anzeigen erscheinen in einem Kontext, in dem Menschen bereits uber
              professionelle Losungen und Geschaftsentscheidungen nachdenken.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Im Vergleich zu Meta Ads liefert LinkedIn eine bis zu{" "}
              <strong style={{ color: "#fff" }}>4-fach hohere Lead-Qualitat fur B2B</strong>. Der Grund
              ist einfach: Das Targeting basiert auf echten beruflichen Daten &mdash; Jobtitel,
              Senioritat, Unternehmensgrose, Branche &mdash; nicht auf geschatzten Interessen oder
              Scroll-Verhalten. Wenn du &quot;VP of Engineering bei SaaS-Unternehmen mit 50-200
              Mitarbeitern&quot; targetest, bekommst du genau das.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Fur Unternehmen im DACH-Raum, die B2B-Losungen mit Auftragswerten uber 5.000 Euro
              verkaufen, ist LinkedIn oft der effektivste bezahlte Kanal, um qualifizierte
              Entscheidungstrager zu erreichen. Die hoheren Kosten pro Klick werden durch deutlich hohere
              Conversion-Raten und Auftragswerte mehr als ausgeglichen.
            </p>
          </FadeInSection>

          {/* Section: Anzeigenformate */}
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
              LinkedIn-Anzeigenformate im Vergleich
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              LinkedIn bietet verschiedene Anzeigenformate, jedes mit unterschiedlichen Starken und
              Kostenprofilen. Hier ist ein vollstandiger Vergleich:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "24px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "600px",
                }}
              >
                <thead>
                  <tr>
                    {["Format", "Ideal fur", "Durchschn. CPC", "Durchschn. CTR"].map(
                      (h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #56db84",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Sponsored Content (Bild)",
                      "Awareness, Leads",
                      "3\u20138 \u20AC",
                      "0,4\u20130,8%",
                    ],
                    [
                      "Sponsored Content (Video)",
                      "Brand Storytelling",
                      "2\u20136 \u20AC",
                      "0,5\u20131,0%",
                    ],
                    [
                      "Message Ads (InMail)",
                      "Direktansprache",
                      "0,30\u20130,80 \u20AC/Versand",
                      "25\u201335% Offnungsrate",
                    ],
                    [
                      "Lead Gen Forms",
                      "Lead-Generierung",
                      "5\u201315 \u20AC/Lead",
                      "10\u201315% Ausfullung",
                    ],
                    [
                      "Document Ads",
                      "Thought Leadership",
                      "3\u20137 \u20AC",
                      "0,5\u20131,5%",
                    ],
                    [
                      "Text Ads",
                      "Budget-freundlich",
                      "2\u20135 \u20AC",
                      "0,02\u20130,05%",
                    ],
                  ].map(([format, ideal, cpc, ctr], i) => (
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
                        {format}
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
                        {ideal}
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
                        {cpc}
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
                        {ctr}
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
              Unsere Empfehlung: Starte mit{" "}
              <strong style={{ color: "#fff" }}>Sponsored Content (Bild)</strong> fur Awareness und
              teste <strong style={{ color: "#fff" }}>Lead Gen Forms</strong> fur direkte Conversions.
              Video funktioniert hervorragend fur Marken, die bereits eine gewisse Bekanntheit im Markt
              haben und das Engagement mit ihrer Zielgruppe vertiefen wollen.
            </p>
          </FadeInSection>

          {/* Section: Erweitertes Targeting */}
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
              Erweitertes Targeting: LinkedIns Geheimwaffe
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Was LinkedIn Ads wirklich einzigartig macht, sind die Targeting-Optionen. Keine andere
              Plattform ermoglicht es dir, deine B2B-Zielgruppe mit dieser Prazision zu erreichen:
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
                  title: "Jobtitel, Funktion und Senioritat",
                  desc: "Targetiere direkt CEOs, CFOs, Heads of Marketing, VP Sales oder jeden anderen Jobtitel. Kombiniere mit Senioritatslevel (Entry, Senior, Director, C-Suite) fur eine laserfokussierte Zielgruppe.",
                },
                {
                  title: "Unternehmen: Name, Grose und Branche",
                  desc: "Targetiere Mitarbeiter bestimmter Unternehmen (Account-Based Marketing), Unternehmen einer bestimmten Grose (1-10, 11-50, 51-200, 201-500, 500+) oder innerhalb einer bestimmten Branche.",
                },
                {
                  title: "Skills und Gruppenmitgliedschaft",
                  desc: "Targetiere Personen, die bestimmte Skills auf ihrem Profil gelistet haben (z.B. 'SaaS', 'Supply Chain Management') oder die Mitglieder relevanter Fachgruppen sind.",
                },
                {
                  title: "Matched Audiences",
                  desc: "Retargeting von Website-Besuchern, Upload von E-Mail-Listen fur direktes Targeting und Erstellung von Lookalike Audiences basierend auf deinen bestehenden Kunden. Kombiniert mit den obigen Filtern werden diese extrem prazise.",
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

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}
            >
              <strong style={{ color: "#fff" }}>Praxisbeispiel:</strong> Wenn du HR-Software an
              Unternehmen mit 50-500 Mitarbeitern verkaufst, kannst du gezielt HR-Manager, HR-Direktoren
              und CHROs in Unternehmen genau dieser Grose und aus relevanten Branchen ansprechen. Bei
              Meta Ads ist dieses Niveau an Prazision schlicht nicht moglich.
            </p>
          </FadeInSection>

          {/* Section: Realistische Budgets und Erwartungen */}
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
              Realistische Budgets und Erwartungen
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Hier geben viele Unternehmen vorschnell auf. Das Mindestbudget, um aussagekraftige Daten zu
              generieren und Kampagnen richtig zu optimieren, liegt bei etwa{" "}
              <strong style={{ color: "#fff" }}>1.500 Euro pro Monat</strong>. Unter dieser Schwelle hat
              der Algorithmus nicht genugend Daten zum Lernen, und du hast nicht genugend Conversions, um
              belastbare Schlusse zu ziehen.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die Kosten pro Lead auf LinkedIn liegen typischerweise zwischen{" "}
              <strong style={{ color: "#fff" }}>20 und 80 Euro</strong>. Ja, das ist deutlich mehr als
              bei Meta (wo ein B2B-Lead 5-25 Euro kostet). Aber der entscheidende Unterschied liegt in
              der Qualitat: Ein LinkedIn-Lead ist in der Regel ein echter Entscheidungstrager mit Titel,
              Unternehmen und Budget. Ein Meta-Lead kann jeder sein, der auf ein Formular geklickt hat.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Wenn du die{" "}
              <strong style={{ color: "#fff" }}>Kosten pro qualifizierte Opportunity</strong>{" "}
              berechnest, wird LinkedIn oft kosteneffizienter als Meta und Google fur B2B. Wenn 1 von 5
              LinkedIn-Leads eine qualifizierte Opportunity wird vs. 1 von 20 bei Meta, dreht sich die
              Rechnung komplett um.
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
                LinkedIn Ads B2B Benchmarks:
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
                  ["Empfohlenes Mindestbudget", "1.500 \u20AC/Monat"],
                  ["Kosten pro Lead (CPL)", "20\u201380 \u20AC"],
                  ["Kosten pro qualifizierte Opportunity", "100\u2013400 \u20AC"],
                  ["Lead \u2192 Opportunity Conversion-Rate", "15\u201330%"],
                  ["Durchschn. CPC (Sponsored Content)", "3\u201312 \u20AC"],
                  ["Durchschn. CTR (Sponsored Content)", "0,4\u20130,8%"],
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
              </ul>
            </div>
          </FadeInSection>

          {/* Section: Wann LinkedIn Ads NICHT sinnvoll sind */}
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
              Wann LinkedIn Ads NICHT sinnvoll sind
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              Nicht jedes B2B-Unternehmen sollte LinkedIn Ads schalten. In den folgenden Situationen ist
              dein Budget auf anderen Kanalen besser aufgehoben:
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
                "B2C-Produkte oder Dienstleistungen mit einem durchschnittlichen Ticketwert unter 500 Euro — die Akquisitionskosten werden zu hoch",
                "Werbebudget unter 1.000 Euro/Monat — du wirst nicht genugend Daten fur eine effektive Optimierung haben",
                "Breites Targeting ohne klar definierte Buyer Persona — du verschwendest Budget an irrelevante Zielgruppen",
                "Lokale Dienstleistungen mit begrenztem geografischem Einzugsgebiet — Google Ads Local oder Meta Ads sind effizienter",
                "Produkte, die Impulskaufe erfordern — LinkedIn ist fur rationale, langfristige Kaufentscheidungen",
                "Keine werthaltigen Content-Assets (Case Studies, Whitepapers) — ohne starken Lead-Magneten werden die Conversion-Raten niedrig bleiben",
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
                  <span style={{ color: "#ef4444", flexShrink: 0 }}>
                    &#10007;
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
              In diesen Fallen empfehlen wir eine Kombination aus{" "}
              <strong style={{ color: "#fff" }}>Google Ads (Search)</strong> fur aktive Kaufabsicht und{" "}
              <strong style={{ color: "#fff" }}>Meta Ads</strong> fur Awareness und Retargeting. Dein
              Cost per Lead wird deutlich niedriger und das Volumen hoher sein &mdash; auch wenn die
              Qualifizierungsrate geringer ausfallt.
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
                Generiere B2B-Leads
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
                Mochtest du Entscheidungstrager in deiner Branche erreichen?
                Unser LinkedIn-Ads-Team baut B2B-Kampagnen mit prazisem
                Targeting und optimierten Kosten pro Lead.
              </p>
              <Link
                href="/ge/linkedin-de/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                LinkedIn Ads entdecken
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
                Facebook Ads vs Google Ads: Was wahlen fur den Online-Shop?
              </h3>
              <Link
                href="/ge/blog/facebook-ads-vs-google-ads-ecommerce/"
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
                Wie wahlt man eine Digital-Marketing-Agentur in 2026
              </h3>
              <Link
                href="/ge/blog/wie-marketing-agentur-waehlen/"
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
