import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6";

const RELATED_ARTICLES = [
  {
    slug: "/ge/blog/warum-meta-ads-nicht-funktionieren/",
    title: "Warum funktionieren deine Meta Ads nicht? 7 häufige Fehler",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "18. Feb 2026",
    readTime: "10 Min",
  },
  {
    slug: "/ge/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: Was wählen bei begrenztem Budget?",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "15. Feb 2026",
    readTime: "9 Min",
  },
];

export default function KostenInternerSpezialistVsAgenturPage() {
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
                20. Feb 2026
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
                8 Min Lesezeit
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
              Was kostet ein interner Spezialist vs. eine{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Marketing-Agentur?
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
              Detaillierter Kostenvergleich: Gehalt, Steuern, Tools, Management
              — vs. ein All-Inclusive-Agenturpaket. Die echten Zahlen, die
              niemand zeigt.
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
          <FadeInSection>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die Entscheidung zwischen einem internen Marketing-Spezialisten und einer externen Agentur ist eine der wichtigsten strategischen Weichenstellungen für wachsende Unternehmen. Auf den ersten Blick scheint die Rechnung einfach: Ein Mitarbeiter kostet ein Gehalt, eine Agentur ein Monatspaket. Doch in der Realität verbergen sich hinter beiden Optionen deutlich mehr Kostenpositionen, als die meisten Unternehmer vermuten.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              In diesem Artikel rechnen wir transparent vor, was dich beide Varianten wirklich kosten — mit konkreten Zahlen aus dem DACH-Markt. Keine Schönrechnerei, keine versteckten Kosten. Am Ende weißt du genau, welche Option für dein Unternehmen die richtige ist.
            </p>
          </FadeInSection>

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
              Reale Kosten eines internen Marketing-Spezialisten
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Ein qualifizierter Marketing-Spezialist in Deutschland verdient zwischen 3.000 und 5.500 Euro brutto pro Monat — je nach Erfahrungslevel, Spezialisierung und Standort. In Metropolregionen wie München, Frankfurt oder Hamburg liegen die Gehälter am oberen Ende. Aber das Bruttogehalt ist nur die Spitze des Eisbergs.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Dazu kommen die Arbeitgebernebenkosten von durchschnittlich 30 Prozent: Sozialversicherung, Krankenversicherung, Rentenversicherung, Arbeitslosenversicherung und Pflegeversicherung. Bei einem Bruttogehalt von 4.000 Euro zahlst du als Arbeitgeber also rund 5.200 Euro monatlich — nur für die Personalkosten.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Dann kommen die Tools. Professionelles Marketing erfordert professionelle Software: SEO-Tools wie Ahrefs oder SEMrush (ab 99 Euro/Monat), Analytics-Plattformen, Design-Software wie die Adobe Creative Suite (ab 60 Euro/Monat), E-Mail-Marketing-Plattformen, Social-Media-Management-Tools, CRM-Systeme und Ads-Management-Tools. Realistisch bewegen sich die Tool-Kosten zwischen 500 und 1.500 Euro pro Monat — abhängig von der Anzahl der bespielten Kanäle.
            </p>
          </FadeInSection>

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
              Kostenaufstellung: Interner Spezialist (monatlich)
            </h2>
            <div style={{ overflowX: "auto", marginBottom: "32px" }}>
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
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Kostenposition
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "right",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Monatlich
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Bruttogehalt", "3.000 - 5.500 \u20AC"],
                    ["Arbeitgebernebenkosten (~30%)", "900 - 1.650 \u20AC"],
                    ["Software & Tools", "500 - 1.500 \u20AC"],
                    ["Arbeitsplatz & Equipment", "200 - 400 \u20AC"],
                    ["Weiterbildung (anteilig)", "100 - 250 \u20AC"],
                    ["Management-Overhead", "300 - 600 \u20AC"],
                  ].map(([label, cost], i) => (
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
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {label}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "right",
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 600,
                        }}
                      >
                        {cost}
                      </td>
                    </tr>
                  ))}
                  <tr
                    style={{
                      background: "#111",
                      borderTop: `2px solid ${CATEGORY_COLOR}`,
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 18px",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      Gesamtkosten
                    </td>
                    <td
                      style={{
                        padding: "14px 18px",
                        textAlign: "right",
                        color: CATEGORY_COLOR,
                        fontWeight: 700,
                      }}
                    >
                      5.000 - 9.900 &euro;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

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
              Vergleichstabelle: Intern vs. Agentur
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Jetzt kommt der direkte Vergleich. Wir setzen einen mittelständischen Marketing-Spezialisten neben ein vergleichbares Agenturpaket:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "32px" }}>
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
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Kriterium
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Interner Spezialist
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Agentur
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monatliche Gesamtkosten", "5.000 - 9.900 \u20AC", "1.500 - 5.000 \u20AC"],
                    ["Expertise-Breite", "1-2 Kanäle", "5-8+ Kanäle"],
                    ["Abgedeckte Kanäle", "Begrenzt", "SEO, Ads, Social, E-Mail, CRO"],
                    ["Skalierbarkeit", "Begrenzt", "Flexibel skalierbar"],
                    ["Risiko bei Kündigung", "Hoch (Wissensverlust)", "Niedrig (Team dahinter)"],
                    ["Enthaltene Tools", "Zusatzkosten", "Im Paket enthalten"],
                    ["Strategische Beratung", "Einzelperspektive", "Branchenübergreifendes Know-how"],
                    ["Verfügbarkeit", "40 Std/Woche", "Nach Vereinbarung"],
                  ].map(([label, intern, agentur], i) => (
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
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {label}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {intern}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 500,
                        }}
                      >
                        {agentur}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

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
              Die versteckten Kosten, über die niemand spricht
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die größten Kostenfallen beim internen Spezialisten sind nicht in der Gehaltsabrechnung sichtbar. Hier die Positionen, die regelmäßig übersehen werden:
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Recruiting-Kosten:</strong> Die Suche nach einem qualifizierten Marketing-Spezialisten dauert durchschnittlich 2 bis 3 Monate. In dieser Zeit entstehen Kosten für Stellenausschreibungen, Personalberater (15-25% des Jahresgehalts) und den internen Zeitaufwand für Bewerbungsgespräche. Rechne mit 5.000 bis 15.000 Euro einmaliger Recruiting-Kosten.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Einarbeitung:</strong> Selbst ein erfahrener Spezialist braucht 3 bis 6 Monate, um dein Geschäftsmodell, deine Zielgruppe und deine Branche vollständig zu verstehen. In dieser Phase arbeitet er mit deutlich reduzierter Effizienz — du zahlst volles Gehalt bei halber Leistung.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Fluktuationsrisiko:</strong> Die durchschnittliche Verweildauer im Marketing liegt bei 2,5 Jahren. Wenn dein Spezialist geht, verlierst du nicht nur einen Mitarbeiter — du verlierst das gesamte aufgebaute Wissen über deine Kampagnen, Zielgruppen und Strategien. Und der Recruiting-Prozess beginnt von vorn.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Tool-Lizenzen:</strong> Ein einzelner Spezialist benötigt im Schnitt 6 bis 10 verschiedene Software-Tools. Die Kosten summieren sich schnell auf 500 bis 1.500 Euro pro Monat. Bei einer Agentur sind diese Tools bereits im Paketpreis enthalten, da sie über mehrere Kunden verteilt werden.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,0.8)" }}>Managementzeit:</strong> Dein interner Spezialist braucht Führung, regelmäßige Feedbackgespräche, Zielvereinbarungen und strategische Abstimmung. Das sind 4 bis 8 Stunden deiner Zeit pro Woche — Zeit, die du nicht für dein Kerngeschäft nutzen kannst.
            </p>
          </FadeInSection>

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
              Wann macht ein interner Spezialist Sinn?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Trotz der höheren Kosten gibt es Situationen, in denen ein interner Spezialist die bessere Wahl ist. Wenn dein Marketing-Budget über 15.000 Euro monatlich liegt und du eine komplexe, multi-channel Strategie fährst, die tägliche Anpassungen erfordert, kann sich die Investition lohnen. Auch wenn du in einer stark regulierten Branche arbeitest, in der tiefes Branchenwissen unverzichtbar ist, kann ein interner Spezialist Vorteile bieten. Und natürlich: Wenn du langfristig ein vollständiges Marketing-Team aufbauen willst, ist der erste interne Spezialist der logische Startpunkt.
            </p>
          </FadeInSection>

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
              Wann macht eine Agentur mehr Sinn?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Für die Mehrheit kleiner und mittelständischer Unternehmen ist die Agenturlösung nicht nur günstiger, sondern strategisch klüger. Du erhältst sofort Zugang zu einem Team aus Spezialisten — SEO-Experten, Ads-Manager, Designer, Content-Strategen — statt dich auf die Kompetenzen einer einzigen Person zu verlassen. Die Agentur bringt branchenübergreifendes Know-how mit, arbeitet mit bewährten Prozessen und kann bei Bedarf schnell skalieren. Kein Recruiting, keine Einarbeitung, kein Fluktuationsrisiko. Und die Kosten sind ab Tag 1 transparent und planbar.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Besonders wenn dein monatliches Marketing-Budget zwischen 1.500 und 10.000 Euro liegt, bietet eine Agentur das deutlich bessere Preis-Leistungs-Verhältnis. Du bezahlst für Ergebnisse, nicht für Anwesenheit. Und du kannst die Zusammenarbeit jederzeit anpassen oder beenden — ohne Kündigungsfristen, Abfindungen oder den Verlust von aufgebautem Wissen.
            </p>
          </FadeInSection>

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
              Fazit: Die Zahlen sprechen eine klare Sprache
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Ein interner Marketing-Spezialist kostet dich realistisch 5.000 bis 9.900 Euro pro Monat — zuzüglich einmaliger Recruiting- und Einarbeitungskosten. Eine vergleichbare Agenturleistung erhältst du ab 1.500 bis 5.000 Euro monatlich, mit breiterer Expertise, eingeschlossenen Tools und ohne Nebenkosten. Für die meisten Unternehmen unter 50 Mitarbeitern ist die Agenturlösung damit nicht nur wirtschaftlicher, sondern auch strategisch sinnvoller.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die wichtigste Erkenntnis: Es geht nicht darum, die billigste Option zu wählen. Es geht darum, den höchsten Return on Investment zu erzielen. Und wenn du die versteckten Kosten ehrlich einrechnest, liegt die Agentur in den meisten Fällen deutlich vorne.
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
                Berechne die echten Kosten
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
                Nutze unseren Kostenrechner, um die realen Kosten für dein Unternehmen
                zu vergleichen — intern vs. Agentur, mit allen versteckten Positionen.
              </p>
              <Link
                href="/ge/calculator/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Zum Kostenrechner
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
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    background: "#111",
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
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
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      {article.date} · {article.readTime}
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
