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
              3. Februar 2026 &middot; 8 Min Lesezeit
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
              Warum dein{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digitales Marketing nicht funktioniert
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
              10 echte Gr&uuml;nde, warum Kampagnen scheitern, und wie du jedes
              Problem diagnostizierst und l&ouml;st &mdash; Schritt f&uuml;r
              Schritt.
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
                &bdquo;Wir haben Google Ads ausprobiert und es hat nicht
                funktioniert.&ldquo; &bdquo;Wir haben 3 Monate in SEO
                investiert und nichts ist passiert.&ldquo; &bdquo;Social Media
                Marketing ist Geldverschwendung.&ldquo; Kommt dir das bekannt
                vor?
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Das Problem liegt meistens nicht am Kanal &mdash; sondern an der
                Umsetzung. Nach Jahren der Zusammenarbeit mit Dutzenden von
                Unternehmen, die &bdquo;verbrannt&ldquo; von fr&uuml;heren
                Erfahrungen mit digitalem Marketing zu uns kamen, haben wir ein
                klares Muster erkannt: Dieselben 10 Fehler tauchen immer wieder
                auf, unabh&auml;ngig von Branche oder Budget.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In diesem Artikel analysieren wir jeden Grund im Detail und
                geben dir die konkrete L&ouml;sung f&uuml;r jeden einzelnen.
                Wenn du dich in mindestens 3 der folgenden Punkte
                wiedererkennst, hast du gefunden, warum dein digitales Marketing
                nicht funktioniert.
              </p>
            </div>
          </FadeInSection>

          {/* 10 echte Gruende */}
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
                10 echte Gr&uuml;nde, warum digitales Marketing scheitert
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Jeder Grund kommt mit einem konkreten Problem und einer
                umsetzbaren L&ouml;sung. Lies sie alle &mdash; du wirst dich
                vermutlich in mehr Punkten wiederfinden, als du erwartest.
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
                    title: "1. Keine klare Strategie",
                    problem:
                      "Anzeigen ohne eine dokumentierte Strategie zu schalten ist wie Autofahren ohne Navi \u2014 du landest irgendwo, aber selten dort, wo du hinmusst. Ohne einen klaren Plan wird dein Budget f\u00FCr zusammenhanglose Aktionen verschwendet.",
                    solution:
                      "Beginne mit SMART-Zielen, definiere deine Zielgruppe, w\u00E4hle Kan\u00E4le auf Basis von Daten und erstelle einen Redaktionskalender. Eine Strategie muss kein 50-Seiten-Dokument sein \u2014 aber sie muss existieren und konsequent umgesetzt werden.",
                  },
                  {
                    title: "2. Du targetierst alle",
                    problem:
                      "\"Alle M\u00E4nner und Frauen zwischen 18 und 65\" ist kein Targeting. Wenn du versuchst, an alle zu verkaufen, verkaufst du an niemanden. Die Botschaft wird generisch, die CTR sinkt und die Kosten pro Conversion explodieren.",
                    solution:
                      "Erstelle 2\u20133 Buyer Personas mit spezifischen Demografien, Interessen, Schmerzpunkten und Motivationen. Segmentiere Kampagnen nach diesen Profilen und passe die Botschaft f\u00FCr jedes an. Eine relevante Botschaft f\u00FCr 1.000 Menschen schl\u00E4gt eine generische f\u00FCr 100.000.",
                  },
                  {
                    title: "3. Deine Website konvertiert nicht",
                    problem:
                      "Hervorragende Anzeigen, die auf eine schlechte Landing Page f\u00FChren = verschwendetes Budget. Wenn deine Seite langsam l\u00E4dt, nicht mobiloptimiert ist oder keine klaren CTAs hat, verlassen Besucher sie innerhalb von 3 Sekunden. Eine Absprungrate von 80%+ ist ein deutliches Zeichen.",
                    solution:
                      "Optimiere Landing Pages, bevor du dein Anzeigenbudget skalierst. Pr\u00FCfe Ladegeschwindigkeit (unter 3 Sekunden), Responsive Design, konsistente Botschaften mit Anzeigen und sichtbare CTAs above the fold. Teste mit Google PageSpeed Insights.",
                  },
                  {
                    title: "4. Kein korrektes Tracking",
                    problem:
                      "Wenn du nicht messen kannst, kannst du nicht verbessern. Viele Unternehmen schalten Kampagnen ohne korrekt konfiguriertes Google Analytics 4, ohne Conversion-Tracking oder ohne UTM-Parameter. Du wirfst im Grunde Geld ins Dunkel.",
                    solution:
                      "Richte Google Analytics 4 mit benutzerdefinierten Events ein, installiere Conversion-Pixel auf allen Plattformen, verwende UTM-Parameter f\u00FCr jede Kampagne und erstelle ein Reporting-Dashboard. Korrekte Daten sind das Fundament jeder Optimierung.",
                  },
                  {
                    title: "5. Budget zu klein",
                    problem:
                      "200 \u20AC/Monat f\u00FCr Google Ads generieren nicht genug Daten, um zu lernen, was funktioniert. Ein kleines Budget, aufgeteilt auf 5 Kan\u00E4le, bedeutet, dass keiner genug Treibstoff bekommt, um messbare Ergebnisse zu liefern.",
                    solution:
                      "Konzentriere dein Budget auf einen Kanal, erreiche statistische Signifikanz, optimiere und skaliere dann. Es ist besser, 500 \u20AC/Monat in einen funktionierenden Kanal zu investieren als 100 \u20AC/Monat in 5 Kan\u00E4le mit unzureichenden Daten.",
                  },
                  {
                    title: "6. Unrealistische Erwartungen",
                    problem:
                      "SEO liefert Ergebnisse in 6\u201312 Monaten, nicht in 2 Wochen. Google Ads braucht eine 2\u20134-w\u00F6chige Lernphase. Markenaufbau dauert Jahre. Wenn die Erwartungen nicht mit der Realit\u00E4t \u00FCbereinstimmen, sieht jeder Kanal so aus, als \u201Efunktioniert er nicht\u201C.",
                    solution:
                      "Setze realistische Zeitrahmen pro Kanal: Google Ads (2\u20134 Wochen Lernphase + 2\u20133 Monate Optimierung), SEO (6\u201312 Monate f\u00FCr signifikante Ergebnisse), organische Social Media (3\u20136 Monate f\u00FCr Traktion). Vergleiche mit Branchen-Benchmarks, nicht mit Wunschdenken.",
                  },
                  {
                    title: "7. Generischer Content",
                    problem:
                      "\u201EWir sind die beste Agentur\u201C oder \u201EQualit\u00E4t zum besten Preis\u201C spricht niemanden an. Generischer Content adressiert nicht die spezifischen Schmerzpunkte deiner Zielgruppe und unterscheidet dich nicht von der Konkurrenz. Das Ergebnis? Endloses Scrollen und null Engagement.",
                    solution:
                      "Erstelle Content, der spezifische Probleme mit Daten und konkreten Beispielen adressiert. Verwende die Sprache deiner Zielgruppe, keinen Unternehmens-Jargon. Erz\u00E4hle echte Geschichten, zeige Fallstudien und biete Mehrwert, bevor du etwas im Gegenzug verlangst.",
                  },
                  {
                    title: "8. Kein A/B-Testing",
                    problem:
                      "Du r\u00E4tst, statt zu testen. Du l\u00E4sst eine einzige Headline-Variante, einen CTA, eine Zielgruppe laufen \u2014 und wenn es nicht funktioniert, \u00E4nderst du alles. Ohne systematisches Testen ist Optimierung unm\u00F6glich.",
                    solution:
                      "Teste ein Element nach dem anderen: Headlines, CTAs, Zielgruppen, Creatives. Lass Tests laufen, bis sie statistische Signifikanz erreichen (mindestens 100 Conversions pro Variante). Dokumentiere Ergebnisse und wende Erkenntnisse auf k\u00FCnftige Kampagnen an.",
                  },
                  {
                    title: "9. Daten ignorieren",
                    problem:
                      "Entscheidungen auf Basis von Gef\u00FChlen statt Analytics treffen. \u201EIch mag dieses Creative\u201C oder \u201EIch habe das Gef\u00FChl, Facebook ist besser als Google\u201C sind keine g\u00FCltigen Argumente. Subjektive Verzerrungen sind der Feind Nr. 1 der Performance.",
                    solution:
                      "Implementiere w\u00F6chentliche Daten-Reviews. Analysiere CTR, CPC, Conversion-Rate, ROAS und CPA pro Kanal, Zielgruppe und Creative. Triff datenbasierte Entscheidungen, keine meinungsbasierten. Ein klares Dashboard und definierte KPIs machen den Unterschied.",
                  },
                  {
                    title: "10. Strategie zu oft wechseln",
                    problem:
                      "Diesen Monat Google Ads, n\u00E4chsten Monat TikTok, zwei Wochen sp\u00E4ter SEO. Wenn du jeden Monat den Kanal oder die Strategie wechselst, hat keiner Zeit, Ergebnisse zu liefern. Es ist das digitale \u00C4quivalent zum Pflanzen eines Baumes und Ausgraben nach einer Woche, um zu pr\u00FCfen, ob er gewachsen ist.",
                    solution:
                      "Verpflichte dich f\u00FCr mindestens 3 Monate zu einer Strategie, bevor du pivotierst. Definiere Zwischen-KPIs (nicht nur finale Verk\u00E4ufe) und bewerte den Fortschritt monatlich. Wenn die Daten nach 3 Monaten zeigen, dass es nicht funktioniert, pivotiere basierend auf dem, was du gelernt hast, nicht aus Frustration.",
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
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        marginBottom: "12px",
                      }}
                    >
                      <strong style={{ color: "rgba(255,255,255,0.6)" }}>
                        Problem:
                      </strong>{" "}
                      {item.problem}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      <strong style={{ color: "#3b82f6" }}>
                        L&ouml;sung:
                      </strong>{" "}
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Schnelldiagnose */}
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
                Schnelldiagnose: Checkliste in 2 Minuten
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Beantworte jede Frage mit Ja oder Nein. Jedes
                &bdquo;Nein&ldquo; zeigt einen Problembereich an, der
                vorrangig gel&ouml;st werden muss.
              </p>

              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    "Hast du eine dokumentierte Marketingstrategie mit klaren Zielen?",
                    "Hast du 2\u20133 spezifische Buyer Personas definiert?",
                    "Laden deine Landing Pages in unter 3 Sekunden und sind sie mobiloptimiert?",
                    "Ist Google Analytics 4 mit aktivem Conversion-Tracking konfiguriert?",
                    "Ist dein Anzeigenbudget auf 1\u20132 Hauptkan\u00E4le konzentriert?",
                    "Hast du realistische Erwartungen, die auf die Zeitrahmen jedes Kanals abgestimmt sind?",
                    "Adressiert dein Content spezifische Schmerzpunkte deiner Zielgruppe?",
                    "F\u00FChrst du systematische A/B-Tests bei deinen Kampagnen durch?",
                    "Hast du w\u00F6chentliche Daten- und KPI-Reviews?",
                    "Wird deine aktuelle Strategie seit mindestens 3 Monaten konsequent umgesetzt?",
                  ].map((question, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        paddingBottom: "12px",
                        borderBottom:
                          i < 9
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          color: "#3b82f6",
                          fontWeight: 700,
                          flexShrink: 0,
                          minWidth: "24px",
                        }}
                      >
                        {i + 1}.
                      </span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginTop: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>8&ndash;10 Ja:</strong> Deine
                Strategie ist solide &mdash; suche nach granularen
                Optimierungen.{" "}
                <strong style={{ color: "#fff" }}>5&ndash;7 Ja:</strong> Du hast
                das Fundament, aber es gibt wichtige L&uuml;cken zu
                schlie&szlig;en.{" "}
                <strong style={{ color: "#fff" }}>Unter 5 Ja:</strong> Dein
                digitales Marketing braucht eine komplette Restrukturierung,
                bevor du mehr investierst.
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
                M&ouml;chtest du eine kostenlose Diagnose?
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
                Unser Team analysiert deine aktuellen Kampagnen, identifiziert
                die Probleme und liefert dir einen konkreten Aktionsplan &mdash;
                kostenlos und unverbindlich.
              </p>
              <Link href="/ge/lass-uns-reden/" className="btn-primary">
                Kontaktiere uns <ArrowRight size={16} />
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
                    Wie man die richtige Marketing-Agentur w&auml;hlt:
                    10-Schritte-Checkliste
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
                    Digitale Marketing-Strategie: Der vollst&auml;ndige
                    Leitfaden f&uuml;r 2026
                  </h3>
                  <Link
                    href="/ge/blog/digitale-marketing-strategie-leitfaden/"
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
