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
                "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)",
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
                background: "rgba(20,184,166,0.10)",
                color: "#14b8a6",
                border: "1px solid rgba(20,184,166,0.18)",
              }}
            >
              SEO
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              14. Februar 2026 &middot; 8 Min. Lesezeit
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
              Wie AI Overviews SEO{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                beeinflussen und was du tun solltest
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
              Google AI Overviews verandern die SEO-Landschaft grundlegend.
              KI-generierte Zusammenfassungen erscheinen jetzt uber den
              organischen Ergebnissen und reduzieren Klicks auf Websites
              &mdash; wenn du dich nicht anpasst.
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
                Google AI Overviews (fruher bekannt als Search Generative
                Experience oder SGE) verandern grundlegend, wie Nutzer mit
                Suchergebnissen interagieren. KI-generierte Zusammenfassungen
                erscheinen jetzt uber den traditionellen organischen
                Ergebnissen bei etwa 30% aller Suchanfragen und liefern
                direkte Antworten, ohne dass Nutzer auf eine Website klicken
                mussen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Was bedeutet das fur dein Unternehmen? Weniger Klicks,
                weniger organischer Traffic und die dringende Notwendigkeit,
                deine SEO-Strategie anzupassen. In diesem Artikel erklaren
                wir genau, was passiert, welche Suchtypen betroffen sind und
                &mdash; am wichtigsten &mdash; was du konkret tun kannst, um
                sichtbar und relevant zu bleiben.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Was sind AI Overviews */}
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
                Was sind AI Overviews?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI Overviews sind von Google automatisch generierte Antworten
                mithilfe kunstlicher Intelligenz, die in einem eigenen Block
                oben auf der Suchergebnisseite (SERP) angezeigt werden. Im
                Gegensatz zu herkommlichen Featured Snippets, die ein
                einzelnes Fragment aus einer Quelle extrahieren,
                synthetisieren AI Overviews Informationen aus mehreren
                Websites und prasentieren sie in einem dialogorientierten
                Format.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Praktisch erhalt der Nutzer eine umfassende Zusammenfassung
                direkt auf der Suchseite &mdash; mit Links zu den
                verwendeten Quellen, aber in einem Format, das die
                Notwendigkeit zum Weiterklicken erheblich reduziert. Der AI
                Overview-Block nimmt typischerweise den Platz von 3-5
                traditionellen organischen Ergebnissen ein und drangt
                klassische Ergebnisse weit nach unten auf der Seite.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google hat AI Overviews zunachst im Mai 2024 in den USA
                gestartet und sie schrittweise auf uber 100 Lander
                ausgeweitet. Die Funktion ist auch in Europa aktiv, wenn auch
                mit einigen Einschrankungen im Zusammenhang mit den AI
                Act-Regulierungen. In der DACH-Region sind AI Overviews
                bereits fur viele Suchanfragen sichtbar und werden
                kontinuierlich ausgebaut.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Auswirkungen auf den organischen Traffic */}
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
                Auswirkungen auf den organischen Traffic
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Studien aus 2025 zeigen, dass AI Overviews die
                Klickrate (CTR) um{" "}
                <strong style={{ color: "#fff" }}>20-40%</strong> bei
                informationellen Suchanfragen reduzieren. Die Auswirkungen
                sind jedoch nicht einheitlich &mdash; sie hangen stark vom
                Suchtyp ab. Transaktionale und lokale Suchanfragen sind
                weit weniger betroffen, wahrend &bdquo;Was ist...&ldquo;-
                und &bdquo;Wie geht...&ldquo;-Anfragen am starksten
                betroffen sind.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Hier ist eine detaillierte Aufschlusselung der Auswirkungen
                nach Suchtyp:
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
                      {[
                        "Suchtyp",
                        "AI Overview-Haufigkeit",
                        "CTR-Auswirkung",
                      ].map((h) => (
                        <th
                          key={h}
                          style={{
                            background: "#111",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom: "2px solid #14b8a6",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Informationell ("Was ist...")',
                        "Sehr hoch (60%+)",
                        "-30% bis -40%",
                      ],
                      [
                        'Kommerziell ("Bestes X fur...")',
                        "Hoch (40%+)",
                        "-15% bis -25%",
                      ],
                      [
                        'Transaktional ("X kaufen")',
                        "Niedrig (10%)",
                        "-5% bis -10%",
                      ],
                      [
                        'Lokal ("X in meiner Nahe")',
                        "Mittel (25%)",
                        "-10% bis -15%",
                      ],
                      [
                        'Navigational ("Markenname")',
                        "Sehr niedrig (5%)",
                        "Minimal",
                      ],
                    ].map(([typ, haufigkeit, auswirkung], i) => (
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
                          {typ}
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
                          {haufigkeit}
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
                          {auswirkung}
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
                Die Schlussfolgerung ist klar: Wenn deine SEO-Strategie stark
                auf generischem informationellem Content basiert, bist du am
                starksten betroffen. Wenn du dich jedoch auf transaktionale,
                lokale oder markenbezogene Suchanfragen konzentrierst, ist
                der Einfluss deutlich geringer.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Gewinner und Verlierer */}
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
                Gewinner und Verlierer
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                AI Overviews treffen nicht alle gleich. Es gibt klare
                Gewinner und vorhersehbare Verlierer in dieser neuen
                SEO-Realitat.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(20,184,166,0.15)",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      color: "#14b8a6",
                    }}
                  >
                    Gewinner
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Websites mit hoher Autoritat und starken E-E-A-T-Signalen",
                      "Nischenexperten mit originalem Content und einzigartigen Daten",
                      "Starke Marken mit haufigen Marken-Suchanfragen",
                      "Websites mit interaktivem Content (Tools, Rechner)",
                      "Lokale Unternehmen mit optimiertem Google Business Profil",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "#14b8a6", flexShrink: 0 }}>
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    padding: "24px",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                  }}
                >
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "1rem",
                      marginBottom: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    Verlierer
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {[
                      "Websites mit dunnem, oberflachlichem Content",
                      "Informationsaggregatoren ohne Mehrwert",
                      "Generische \"Top 10\"-Artikel ohne eigene Daten",
                      "Websites, die zu 100% von informationellem Traffic abhangen",
                      "KI-generierter Content ohne echte Expertise dahinter",
                    ].map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: "8px",
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: "rgba(255,255,255,0.25)",
                            flexShrink: 0,
                          }}
                        >
                          &#10007;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Das Muster ist eindeutig: Google bevorzugt in AI Overviews
                Quellen, die echte Expertise, direkte Erfahrung und
                Domanenautoritat nachweisen. Wenn du originalen Content hast,
                der auf eigenen Daten basiert, bist du in einer viel besseren
                Position als Wettbewerber, die bereits verfugbare
                Informationen wiederverwerten.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 6 Anpassungsstrategien */}
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
                6 Strategien zur Anpassung an AI Overviews
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                AI Overviews sind keine Katastrophe &mdash; sie sind eine
                Veranderung, die kluge Akteure begunstigt. Hier ist, was du
                jetzt konkret tun kannst:
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
                    title:
                      "1. Ziele auf Suchanfragen, bei denen AI Overviews NICHT erscheinen",
                    desc: "Konzentriere dich auf transaktionale, Long-Tail- und Nischen-Suchanfragen, bei denen Google noch keine AI Overviews anzeigt. Suchanfragen mit \"kaufen\", \"Preis\", \"Dienstleistungen\" und sehr spezifische Begriffe sind weit weniger betroffen. Analysiere deine aktuellen Keywords und identifiziere, welche AI Overviews auslosen und welche nicht.",
                  },
                  {
                    title:
                      "2. Erstelle Content, der zu komplex fur eine KI-Zusammenfassung ist",
                    desc: "Originalforschung, eigene Daten, detaillierte Fallstudien, nuancierte Analysen und Expertenmeinungen — das sind die Content-Typen, die KI nicht in eine einfache Zusammenfassung komprimieren kann. Wenn deine Informationen Kontext erfordern, um verstanden zu werden, klicken Nutzer weiter, um den vollstandigen Artikel zu lesen.",
                  },
                  {
                    title: "3. Baue Marken-Suchanfragen auf",
                    desc: "Wenn Menschen direkt nach deinem Markennamen suchen, kann KI diese Suchanfrage nicht abfangen. Investiere in Markenbekanntheit durch Social Media, PR, Podcasts und Partnerschaften. Eine starke Marke generiert direkten Traffic, den kein AI Overview stehlen kann.",
                  },
                  {
                    title:
                      "4. Optimiere, um die Quelle zu SEIN, die KI zitiert",
                    desc: "Wenn du AI Overviews nicht vermeiden kannst, stelle sicher, dass die KI deine Website als Quelle zitiert. Strukturiere deinen Content klar mit Uberschriften, konkreten Daten, Statistiken und autoritativen Informationen. Websites, die in AI Overviews zitiert werden, erhalten weiterhin Traffic — weniger als zuvor, aber qualitativ hochwertigeren.",
                  },
                  {
                    title: "5. Diversifiziere deine Traffic-Quellen",
                    desc: "Verlasse dich nicht zu 100% auf Google. Baue alternative Kanale auf: E-Mail-Marketing, organische Social Media, Communities, YouTube, Podcasts. Unternehmen mit diversifiziertem Traffic sind weit widerstandsfahiger gegenuber Googles algorithmischen Anderungen.",
                  },
                  {
                    title: "6. Fokussiere dich auf Conversion-Optimierung",
                    desc: "Wenn du weniger Besuche von Google erhaltst, stelle sicher, dass jeder Besuch mehr zahlt. Optimiere Conversion-Raten, verbessere die UX, erstelle dedizierte Landing Pages und teste A/B jedes wichtige Element. Weniger Besuche mit hoherer Conversion konnen mehr Umsatz generieren als viel Traffic mit schwacher Conversion.",
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

          {/* Section: Was du NICHT tun solltest */}
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
                Was du NICHT tun solltest
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Genauso wichtig wie zu wissen, was du tun sollst, ist zu
                wissen, was du{" "}
                <strong style={{ color: "#fff" }}>nicht</strong> tun sollst.
                Hier sind die falschen Reaktionen, die wir haufig bei
                Unternehmen sehen, die wegen AI Overviews in Panik geraten:
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
                  "Gerate nicht in Panik und gib SEO nicht auf. Organische Suche bleibt der grosste Traffic-Kanal im Internet, selbst mit AI Overviews. SEO stirbt nicht — es entwickelt sich weiter.",
                  "Versuche nicht, KI-Crawler zu blockieren (Googlebot, GPTBot). Das Blockieren schutzt dich nicht vor AI Overviews und kann deine Sichtbarkeit in traditionellen Ergebnissen sogar verringern.",
                  "Erstelle keinen dunnen, KI-generierten Content, um mit der KI zu \"konkurrieren\". Google bestraft Content ohne Mehrwert, unabhangig davon, ob er von einem Menschen oder einer KI geschrieben wurde. Qualitat schlagt Quantitat.",
                  "Ignoriere das Problem nicht in der Hoffnung, dass es verschwindet. AI Overviews sind gekommen, um zu bleiben, und werden einen immer grosseren Prozentsatz der Suchanfragen abdecken. Proaktive Anpassung ist die einzige sinnvolle Strategie.",
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
                    <span
                      style={{ color: "#ef4444", flexShrink: 0 }}
                    >
                      &#10007;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Die Unternehmen, die in der Ara der AI Overviews erfolgreich
                sein werden, sind diejenigen, die diese Veranderung als
                Chance betrachten, sich durch Qualitat, Expertise und kluge
                Strategie zu differenzieren &mdash; nicht diejenigen, die
                versuchen, gegen das Unvermeidliche anzukampfen.
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
                Passe deine SEO-Strategie an
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
                AI Overviews andern die Regeln, aber mit der richtigen
                Strategie kannst du sichtbar und relevant bleiben. Entdecke,
                wie GEO-Optimierung dir hilft, in KI-gesteuerten Ergebnissen
                zu erscheinen.
              </p>
              <Link href="/ge/geo-optimierung/" className="btn-primary">
                GEO Optimization entdecken <ArrowRight size={16} />
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    So erscheinst du in ChatGPT und Perplexity: Kompletter
                    GEO-Leitfaden
                  </h3>
                  <Link
                    href="/ge/blog/geo-optimierung-ai-search/"
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
                    Weiterlesen <ArrowRight size={14} />
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
                      color: "#14b8a6",
                    }}
                  >
                    SEO
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    SEO vs. Google Ads: Was wahlen bei begrenztem Budget?
                  </h3>
                  <Link
                    href="/ge/blog/seo-vs-google-ads/"
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
                    Weiterlesen <ArrowRight size={14} />
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
