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
                "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
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
                background: "rgba(59,130,246,0.10)",
                color: "#3b82f6",
                border: "1px solid rgba(59,130,246,0.18)",
              }}
            >
              Strategie
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              6. Februar 2026 &middot; 14 Min Lesezeit
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
              Digitale Marketing-Strategie Schritt f&uuml;r Schritt{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                (Leitfaden 2026)
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
              Das vollst&auml;ndige 7-Schritte-Framework zum Aufbau einer
              digitalen Marketing-Strategie von Grund auf &mdash; vom Audit
              bis zur Umsetzung und Berichterstattung.
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
                Die meisten Unternehmen &uuml;berspringen die Strategie und
                springen direkt zu den Taktiken. Sie schalten Meta-Anzeigen,
                ohne ihre Zielgruppe zu kennen, erstellen Inhalte ohne Plan
                und fragen sich, warum nichts funktioniert. Das Fehlen einer
                koh&auml;renten Strategie ist der Grund Nummer eins, warum
                Marketing-Budgets ohne messbare Ergebnisse verpuffen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In diesem Leitfaden teilen wir das exakte Framework, das wir
                bei Nesco Digital verwenden, wenn wir digitale
                Marketing-Strategien f&uuml;r unsere Kunden aufbauen. Es sind
                7 klare Schritte in logischer Reihenfolge, die du unabh&auml;ngig
                von Branche, Budget oder Teamgr&ouml;&szlig;e anwenden kannst.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Das ist keine Theorie aus Lehrb&uuml;chern &mdash; es ist der
                reale Prozess, getestet an Dutzenden von Projekten, von
                Startups mit Budgets von 2.000 &euro;/Monat bis hin zu
                Unternehmen mit &uuml;ber 50.000 &euro;/Monat.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 1: Audit */}
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
                Schritt 1: Audit &mdash; Wo stehst du jetzt?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Bevor du entscheidest, wohin du willst, musst du genau
                verstehen, wo du stehst. Ein vollst&auml;ndiges Digital-Marketing-Audit
                analysiert alles rund um deine Online-Pr&auml;senz &mdash;
                von der Website und Analytics bis hin zu bestehenden Kampagnen
                und der Wettbewerbslandschaft.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Analysiere: aktuellen Traffic (Google Analytics), Performance
                bestehender Kampagnen (ROAS, CPA, CTR), SEO-Positionierung
                (Keywords, Backlinks, Core Web Vitals), Social-Media-Pr&auml;senz
                und das Verhalten direkter Wettbewerber. F&uuml;hre eine
                SWOT-Analyse durch &mdash; St&auml;rken, Schw&auml;chen,
                Chancen und Risiken.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Das Ergebnis dieses Schritts ist ein klares Bild: Was
                funktioniert, was nicht und wo die L&uuml;cken sind. Ohne
                diese Datengrundlage ist jede strategische Entscheidung nur
                Raterei.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 2: SMART-Ziele */}
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
                Schritt 2: SMART-Ziele
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                &bdquo;Ich will mehr Kunden&ldquo; ist kein Ziel &mdash; es
                ist ein Wunsch. Ziele, die wirklich funktionieren, sind
                Spezifisch, Messbar, Erreichbar, Relevant und Zeitgebunden
                (SMART). Jeder Kanal, jede Kampagne muss ein klares Ziel
                haben, das an eine konkrete Zahl gebunden ist.
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
                  Beispiele f&uuml;r SMART-Ziele:
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
                    "Organischen Traffic in 6 Monaten um 50% steigern (von 8.000 auf 12.000 Sitzungen/Monat)",
                    "100 qualifizierte Leads/Monat uber Google Ads bis zum 3. Monat generieren",
                    "Einen ROAS von 5:1 bei Google Shopping innerhalb von 90 Tagen erreichen",
                    "CPA bei Meta Ads von 45 EUR auf 25 EUR innerhalb der nachsten 60 Tage senken",
                  ].map((goal) => (
                    <li
                      key={goal}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ color: "#3b82f6", flexShrink: 0 }}>
                        &#9679;
                      </span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Jedes Ziel muss an einen messbaren KPI gebunden sein. Wenn du
                den w&ouml;chentlichen Fortschritt nicht messen kannst, ist
                das Ziel nicht spezifisch genug.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 3: Buyer Personas */}
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
                Schritt 3: Buyer Personas
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                An wen verkaufst du? Nicht an &bdquo;alle&ldquo; &mdash;
                sondern an 2-3 ideale Kundenprofile, detailliert definiert.
                Ohne klare Buyer Personas wird deine Marketing-Botschaft
                generisch sein und bei niemandem wirklich ankommen.
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
                    title: "Demografische Daten",
                    desc: "Alter, Standort, Einkommen, Position im Unternehmen, Unternehmensgroesse. Beispiel: Mann, 35-45 Jahre, Unternehmer mit einem Jahresumsatz von 500.000-2 Mio. EUR, Sitz in einer Grossstadt.",
                  },
                  {
                    title: "Schmerzpunkte (Pain Points)",
                    desc: "Welche Probleme versucht die Person zu loesen? Nicht genug Leads? Kundenakquisitionskosten zu hoch? Weiss nicht, welche Kanale funktionieren? Identifiziere 3-5 konkrete Schmerzpunkte.",
                  },
                  {
                    title: "Kaufausloeser",
                    desc: "Was bringt sie dazu, jetzt nach einer Loesung zu suchen? Eine wichtige Saison, die naht, ein Wettbewerber, der waechst, eine Kampagne, die nicht mehr funktioniert, Druck von Investoren.",
                  },
                  {
                    title: "Bevorzugte Kanale",
                    desc: "Wo verbringen sie ihre Zeit online? LinkedIn fuer B2B, Instagram und TikTok fuer juengere Verbraucher, Google Search bei aktiver Loesungssuche, YouTube fuer Research.",
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
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Definiere mindestens 2 verschiedene Personas. Deine gesamte
                Strategie f&uuml;r Kan&auml;le, Botschaften und Budget wird
                rund um diese Profile aufgebaut.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 4: Kanalauswahl */}
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
                Schritt 4: Kanalauswahl
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Du musst nicht auf jedem Kanal pr&auml;sent sein &mdash; du
                musst auf den richtigen Kan&auml;len sein. Die Wahl
                h&auml;ngt von deinen Buyer Personas, dem Budget und den
                Zielen ab. Hier ist ein schneller Vergleich:
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
                      {["Kanal", "Am besten fuer", "Budget", "Zeit bis Ergebnisse"].map(
                        (header) => (
                          <th
                            key={header}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #3b82f6",
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
                      ["Google Search Ads", "Kaeufer mit hoher Kaufabsicht", "Mittel-Hoch", "1-2 Wochen"],
                      ["Meta Ads", "Awareness, Retargeting", "Mittel", "2-4 Wochen"],
                      ["SEO", "Langfristiger organischer Traffic", "Niedrig-Mittel", "3-6 Monate"],
                      ["E-Mail-Marketing", "Kundenbindung, Nurture", "Niedrig", "2-4 Wochen"],
                      ["TikTok Ads", "Gen Z / Millennials", "Mittel", "2-4 Wochen"],
                      ["LinkedIn Ads", "B2B-Lead-Generierung", "Hoch", "2-4 Wochen"],
                      ["Content-Marketing", "Autoritaet, SEO", "Niedrig-Mittel", "3-12 Monate"],
                    ].map(([kanal, ideal, budget, zeit], i) => (
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
                          {kanal}
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
                          {budget}
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
                          {zeit}
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
                Faustregel: Starte mit 2-3 Kan&auml;len, die du gut umsetzen
                kannst. Es ist besser, auf 2 Kan&auml;len exzellent zu sein
                als auf 7 mittelmassig. F&uuml;ge neue Kan&auml;le erst hinzu,
                wenn du die bestehenden optimiert hast.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 5: Budgetverteilung */}
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
                Schritt 5: Budgetverteilung &mdash; Die 70-20-10-Regel
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Wie verteilst du dein Marketing-Budget auf die Kan&auml;le?
                Wir verwenden die 70-20-10-Regel:{" "}
                <strong style={{ color: "#fff" }}>70 %</strong> auf bew&auml;hrte
                Kan&auml;le, die Ergebnisse liefern,{" "}
                <strong style={{ color: "#fff" }}>20 %</strong> auf die
                Skalierung vielversprechender Kan&auml;le und{" "}
                <strong style={{ color: "#fff" }}>10 %</strong> auf Experimente
                mit neuen Kan&auml;len oder Taktiken.
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
                  Beispiel-Verteilung f&uuml;r ein Budget von 5.000 &euro;/Monat:
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
                    ["Google Ads (70 %)", "3.500 \u20AC"],
                    ["Meta Ads - Skalierung (20 %)", "1.000 \u20AC"],
                    ["TikTok Ads - Experiment (10 %)", "500 \u20AC"],
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
                      color: "#3b82f6",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Monatlich gesamt</span>
                    <span>5.000 &euro;</span>
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
                F&uuml;r gr&ouml;&szlig;ere Unternehmen (Budget 15.000+
                &euro;/Monat) kann der Experiment-Anteil auf 15-20 % steigen,
                da du eine solide Einnahmenbasis aus den Hauptkan&auml;len
                hast, die dir aggressiveres Testen erlaubt.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 6: Umsetzungskalender */}
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
                Schritt 6: Umsetzungskalender
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Eine Strategie ohne Umsetzungskalender ist nur eine
                h&uuml;bsche PowerPoint-Pr&auml;sentation. Hier ist ein
                realistischer Monatsplan f&uuml;r die ersten 6 Monate:
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
                    title: "Monat 1: Setup & Launch",
                    desc: "Tracking konfigurieren (GA4, GTM, Conversions), Werbekonten erstellen, erste Kampagnen aufsetzen, technisches Website-Audit, UTMs und Reporting-Dashboard definieren.",
                  },
                  {
                    title: "Monat 2-3: Optimieren",
                    desc: "Erste Daten analysieren, A/B-Tests fuer Anzeigen und Landing Pages, Zielgruppen anpassen, Bidding optimieren, erste Creative-Iterationen auf Basis realer Daten.",
                  },
                  {
                    title: "Monat 4-6: Gewinner skalieren",
                    desc: "Budget auf performante Kanale erhoehen, Underperformer stoppen, neue Kanale aus dem 10%-Experiment-Budget testen, Lookalike Audiences erweitern.",
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
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Wichtig: Monat 1 ist immer der langsamste in Bezug auf
                Ergebnisse. Keine Panik &mdash; es ist der Monat, in dem du
                das Fundament baust. Echte Ergebnisse zeigen sich ab Monat
                2-3, und signifikante Skalierung erfolgt ab Monat 4.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 7: KPIs & Reporting */}
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
                Schritt 7: KPIs &amp; Reporting
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ohne Messung gibt es keine Optimierung. Jeder Kanal hat seine
                eigenen spezifischen KPIs, und der Reporting-Rhythmus muss
                konsistent und strukturiert sein.
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
                  Wesentliche KPIs pro Kanal:
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
                    ["Google Ads", "ROAS, CPA, CTR, Quality Score"],
                    ["Meta Ads", "CPM, CPC, CPA, ROAS, Frequency"],
                    ["SEO", "Organischer Traffic, Keyword-Rankings, Backlinks"],
                    ["E-Mail", "Open Rate, CTR, Conversion Rate, Abmelderate"],
                    ["Gesamt", "CAC (Kundenakquisitionskosten), LTV, MQL, SQL"],
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
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Empfohlener Reporting-Rhythmus:{" "}
                <strong style={{ color: "#fff" }}>w&ouml;chentlich</strong> &mdash;
                schnelle Pr&uuml;fung von Ausgaben und Performance,{" "}
                <strong style={{ color: "#fff" }}>monatlich</strong> &mdash;
                detaillierte Analyse mit Optimierungsentscheidungen,{" "}
                <strong style={{ color: "#fff" }}>quartalsweise</strong> &mdash;
                strategische &Uuml;berpr&uuml;fung und Zielanpassung.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Die gr&ouml;&szlig;te Gefahr ist, Daten zu sammeln, ohne
                darauf zu reagieren. Jeder Bericht sollte mit 2-3 konkreten
                Massnahmen enden, die in der folgenden Woche umgesetzt werden.
                Daten ohne Aktion sind nur Zahlen auf einem Bildschirm.
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
                Baue deine Strategie auf
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
                Keine Zeit oder kein Team, um selbst eine vollst&auml;ndige
                Strategie aufzubauen? Das Nesco Digital Team kann einen
                personalisierten digitalen Marketingplan mit klaren Zielen,
                ausgew&auml;hlten Kan&auml;len und einem Umsetzungskalender
                erstellen.
              </p>
              <Link href="/ge/digitale-strategie/" className="btn-primary">
                Ich will eine Strategie <ArrowRight size={16} />
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
                &Auml;hnliche Artikel
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
                    Was ist ein Growth Sprint und warum brauchst du einen?
                  </h3>
                  <Link
                    href="/ge/blog/was-ist-growth-sprint/"
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
                    Warum funktioniert digitales Marketing bei dir nicht?
                  </h3>
                  <Link
                    href="/ge/blog/warum-digitales-marketing-nicht-funktioniert/"
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
