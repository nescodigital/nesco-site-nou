import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6";

const RELATED_ARTICLES = [
  {
    slug: "/ge/blog/kosten-interner-spezialist-vs-agentur/",
    title:
      "Was kostet ein interner Spezialist vs. eine Marketing-Agentur?",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
  },
  {
    slug: "/ge/blog/warum-digitales-marketing-nicht-funktioniert/",
    title:
      "Warum funktioniert dein digitales Marketing nicht?",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
  },
];

export default function WieMarketingAgenturWaehlenPage() {
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
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span className="badge mb-4">Strategie</span>
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
                11. Februar 2026
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
                9 Min Lesezeit
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
              Wie man die richtige Marketing-Agentur w&auml;hlt:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                10-Schritte-Checkliste
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
              Die falsche Agentur kostet Monate und Tausende Euro. Nach
              Hunderten von Agentur-Kunden-Beziehungen sind dies die 10
              Kriterien, die wirklich z&auml;hlen.
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
              Der Markt f&uuml;r digitale Marketing-Agenturen im DACH-Raum ist un&uuml;bersichtlich.
              Hunderte Agenturen, Freelancer und selbsternannte &bdquo;Growth-Experten&ldquo; versprechen
              Ergebnisse. Das Problem? Die meisten Unternehmen w&auml;hlen auf Basis eines
              gl&auml;nzenden Pitches oder des niedrigsten Preises &mdash; und verlieren am Ende Zeit,
              Geld und das Vertrauen ins Marketing.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Wir haben in den letzten Jahren Hunderte Agentur-Kunden-Beziehungen beobachtet.
              Partnerschaften, die Unternehmen transformiert haben, aber auch Kooperationen, die Budgets
              verbrannt haben, ohne ein einziges Ergebnis zu liefern. Der Unterschied liegt fast immer im
              Auswahlprozess. Deshalb haben wir diese 10-Schritte-Checkliste erstellt &mdash; die
              Kriterien, die bei der Wahl einer Marketing-Agentur wirklich z&auml;hlen.
            </p>
          </FadeInSection>

          {/* 10 Steps heading */}
          <FadeInSection delay={100}>
            <h2
              className="font-black text-white"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginTop: "48px",
                marginBottom: "24px",
              }}
            >
              Die 10 Schritte zur richtigen Agenturwahl
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {/* Schritt 1 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>1.</span> Pr&uuml;fe das echte Portfolio
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Nicht nur h&uuml;bsche Screenshots oder Kundenlogos. Fordere Fallstudien mit echten
                  Metriken: ROAS, CPA, Umsatzwachstum, generierte Leads. Eine seri&ouml;se Agentur kann
                  messbare Ergebnisse vorweisen. Wenn sie keine Zahlen teilen k&ouml;nnen, ist das ein
                  klares Warnsignal. Frage auch, wie lange sie mit jedem Kunden zusammengearbeitet haben
                  und welche Herausforderungen es gab.
                </p>
              </div>

              {/* Schritt 2 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>2.</span> Frage nach aktiven Kundenreferenzen
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Nicht ehemalige Kunden &mdash; aktive. Ruf sie an. Frage nach Kommunikation,
                  Transparenz und Ergebnissen. Ein aktiver Kunde wird dir genau sagen, wie die
                  t&auml;gliche Zusammenarbeit abl&auml;uft: ob die Agentur rechtzeitig antwortet,
                  korrekt berichtet und sich strategisch einbringt oder nur mechanisch ausf&uuml;hrt.
                  Wenn eine Agentur keine Referenzen nennen will, ist das ein klares Zeichen, dass etwas
                  nicht stimmt.
                </p>
              </div>

              {/* Schritt 3 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>3.</span> Bewerte die Transparenz
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Teilen sie den Zugang zu Werbekonten? Geh&ouml;ren dir deine Daten? Liefern sie
                  detaillierte Berichte mit echten Metriken, nicht nur Vanity-Zahlen? Arbeite niemals mit
                  einer Agentur, die deine Werbekonten gesperrt h&auml;lt. Deine Daten geh&ouml;ren dir
                  &mdash; Punkt. Eine transparente Agentur gibt dir vollen Zugang zu Google Analytics,
                  Google Ads, Meta Business Manager und jeder anderen verwendeten Plattform.
                </p>
              </div>

              {/* Schritt 4 */}
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
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>4.</span> Verstehe das Preismodell
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  Festes Monatshonorar, Prozentsatz des Werbebudgets oder leistungsbasiert? Jedes Modell
                  hat Vor- und Nachteile. Sei vorsichtig bei &bdquo;zu g&uuml;nstigen&ldquo; Angeboten
                  &mdash; Qualit&auml;t kostet Geld. Eine Agentur, die 500 Euro im Monat f&uuml;r
                  Kampagnenmanagement verlangt, wird deinem Konto wahrscheinlich nicht genug Zeit widmen.
                </p>
                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: "480px",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "12px 16px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
                            textAlign: "left",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                          }}
                        >
                          Modell
                        </th>
                        <th
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "12px 16px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
                            textAlign: "left",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                          }}
                        >
                          Typischer Bereich
                        </th>
                        <th
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "12px 16px",
                            borderBottom: `2px solid ${CATEGORY_COLOR}`,
                            textAlign: "left",
                            fontSize: "0.8125rem",
                            fontWeight: 700,
                          }}
                        >
                          Am besten f&uuml;r
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Festes Monatshonorar", "1.500 - 5.000 \u20AC", "Planbare Budgets"],
                        ["% des Werbebudgets", "10 - 20%", "Wachsende Budgets"],
                        ["Leistungsbasiert", "Variabel", "Etablierte Unternehmen"],
                        ["Hybrid (fest + %)", "1.000 \u20AC + 10%", "Wachsende Unternehmen"],
                      ].map(([model, range, bestFor], i) => (
                        <tr key={i}>
                          <td
                            style={{
                              background: "#0a0a0a",
                              color: "#fff",
                              padding: "12px 16px",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                            }}
                          >
                            {model}
                          </td>
                          <td
                            style={{
                              background: "#0a0a0a",
                              color: "rgba(255,255,255,0.6)",
                              padding: "12px 16px",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontSize: "0.8125rem",
                            }}
                          >
                            {range}
                          </td>
                          <td
                            style={{
                              background: "#0a0a0a",
                              color: "rgba(255,255,255,0.6)",
                              padding: "12px 16px",
                              borderBottom: "1px solid rgba(255,255,255,0.06)",
                              fontSize: "0.8125rem",
                            }}
                          >
                            {bestFor}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Schritt 5 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>5.</span> Pr&uuml;fe die Spezialisierung
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Eine Generalistentuagentur wird einem Spezialisten nicht das Wasser reichen k&ouml;nnen.
                  Wenn du Google Ads brauchst, suche einen zertifizierten Google Partner. Wenn du einen
                  Shopify-Shop betreibst, finde einen Shopify Partner. Frage, welche Kan&auml;le sie
                  abdecken, wo ihre St&auml;rken liegen und welche Zertifizierungen sie haben. Eine gute
                  Agentur sagt dir auch ehrlich, wo sie nicht die Beste ist.
                </p>
              </div>

              {/* Schritt 6 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>6.</span> Bewerte das Team
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Wer wird tats&auml;chlich an deinem Konto arbeiten? Lerne das Team kennen, nicht nur
                  den Vertriebsmitarbeiter. Frage nach ihrer Erfahrung mit deiner Branche, wie viele
                  Kunden jeder Spezialist betreut und wer dein dedizierter Ansprechpartner sein wird. Eine
                  Agentur, die einen unerfahrenen Junior auf dein Konto setzt, wird nicht dieselben
                  Ergebnisse liefern wie eine, die erfahrene Seniors mit nachgewiesenem Track Record
                  einsetzt.
                </p>
              </div>

              {/* Schritt 7 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>7.</span> Frage nach der Strategie
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Vor der Unterschrift sollte eine gute Agentur eine grobe Strategie oder ein Audit
                  anbieten. Wenn die einzige Frage &bdquo;Wie hoch ist dein Budget?&ldquo; ist, ohne dein
                  Gesch&auml;ft, deine Zielgruppe und deine Wettbewerber zu verstehen, geh weiter. Eine
                  professionelle Agentur kommt zum ersten Gespr&auml;ch mit Fragen zu deinen Zielen,
                  KPIs und deiner Zielgruppe und schl&auml;gt einen klaren strategischen Ansatz vor.
                </p>
              </div>

              {/* Schritt 8 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>8.</span> Pr&uuml;fe den Vertrag
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Achte auf Lock-in-Perioden (maximal 3 Monate zu Beginn), K&uuml;ndigungsbedingungen,
                  geistiges Eigentum und Wettbewerbsklauseln. Ein fairer Vertrag erm&ouml;glicht dir den
                  Ausstieg mit angemessener K&uuml;ndigungsfrist, garantiert dir das Eigentum an deinen
                  Daten und Creatives und hindert dich nicht daran, mit anderen Agenturen an
                  erg&auml;nzenden Dienstleistungen zu arbeiten.
                </p>
              </div>

              {/* Schritt 9 */}
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
                  style={{ fontSize: "1rem", marginBottom: "12px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>9.</span> Red Flags, die du vermeiden solltest
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
                    "Garantierte Ergebnisse (\u201EWir bringen dich auf Platz 1 bei Google\u201C)",
                    "Kein Reporting oder vage Berichte ohne klare Metriken",
                    "Sehr g\u00FCnstige Preise im Vergleich zum Markt",
                    "Keine Fallstudien oder nachweisbares Portfolio",
                    "Aggressive Verkaufstaktiken und Druck, schnell zu unterschreiben",
                    "Einheitspakete f\u00FCr jeden Unternehmenstyp (One-Size-Fits-All)",
                    "Verweigerung des Zugangs zu deinen eigenen Werbekonten",
                  ].map((flag) => (
                    <li
                      key={flag}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: "#ef4444", flexShrink: 0 }}>
                        &#10005;
                      </span>
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schritt 10 */}
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
                  style={{ fontSize: "1rem", marginBottom: "8px" }}
                >
                  <span style={{ color: CATEGORY_COLOR }}>10.</span> Teste mit einem kleinen Projekt
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Bevor du dich auf einen langen Retainer einl&auml;sst, starte mit einem Growth Sprint
                  oder einem kleinen Projekt. Beobachte, wie sie kommunizieren, liefern und
                  Herausforderungen meistern. In 4-6 Wochen hast du ein klares Bild, ob sie der richtige
                  Partner sind. Dieser Ansatz minimiert das Risiko und erm&ouml;glicht es dir, die
                  Qualit&auml;t der Arbeit zu bewerten, bevor du eine gr&ouml;&szlig;ere finanzielle
                  Verpflichtung eingehst.
                </p>
              </div>
            </div>
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
                Lass uns &uuml;ber deine Ziele sprechen
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
                Du willst sichergehen, dass du die richtige Agentur w&auml;hlst? Vereinbare ein
                kostenloses Erstgespr&auml;ch mit unserem Team und erfahre, wie wir deinem Unternehmen
                beim Wachstum helfen k&ouml;nnen.
              </p>
              <Link
                href="/ge/lass-uns-reden/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Kontakt aufnehmen
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
            {RELATED_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group"
                style={{
                  display: "block",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease",
                }}
              >
                <div style={{ padding: "28px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: article.categoryColor,
                      }}
                    >
                      {article.categoryLabel}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.1875rem",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                      marginBottom: "16px",
                    }}
                  >
                    {article.title}
                  </h3>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                    }}
                  >
                    Lesen
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer locale="de" />
    </>
  );
}
