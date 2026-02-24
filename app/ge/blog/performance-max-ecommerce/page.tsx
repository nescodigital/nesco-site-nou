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
                background: "rgba(86,219,132,0.10)",
                color: "#56db84",
                border: "1px solid rgba(86,219,132,0.18)",
              }}
            >
              Paid Ads
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              30. Januar 2026 &middot; 11 Min. Lesezeit
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
              Performance Max 2026:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vollstandiger Leitfaden fur Online-Shops
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
              Schritt-fur-Schritt-Setup, haufige Fehler, PMax vs Shopping vs
              Search &mdash; alles uber Googles leistungsstarksten Kampagnentyp
              fur E-Commerce.
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
                Performance Max ist Googles leistungsstarkster &mdash; und
                komplexester &mdash; Kampagnentyp. Er nutzt Googles KI, um
                Anzeigen auf allen verfugbaren Oberflachen auszuspielen: Search,
                Shopping, Display, YouTube, Gmail, Maps und Discover.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Fur Online-Shops ist Performance Max unverzichtbar geworden. Es
                kombiniert die Starke von Google Shopping mit der Reichweite von
                YouTube und Display, alles in einer einzigen automatisierten
                Kampagne. Aber &bdquo;automatisiert&rdquo; bedeutet nicht
                &bdquo;einfach&rdquo; &mdash; es erfordert eine strategische
                Konfiguration, um einen positiven ROAS zu erzielen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In diesem Leitfaden erklaren wir alles, was du wissen musst: wie
                es funktioniert, wie du es richtig einrichtest, welche Fehler du
                vermeiden solltest und wann es sinnvoll ist, es anstelle von
                Standard-Kampagnen zu verwenden.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Was ist Performance Max */}
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
                Was ist Performance Max?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Performance Max (PMax) ist ein Google Ads Kampagnentyp, der
                uber <strong style={{ color: "#fff" }}>alle Google-Kanale</strong> aus einer einzigen
                Kampagne heraus lauft. Anstatt separate Search-, Shopping-,
                Display- und YouTube-Kampagnen zu erstellen, vereint PMax alles
                unter einem KI-gesteuerten Dach.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Googles Algorithmus verwaltet automatisch <strong style={{ color: "#fff" }}>Gebote, Targeting
                und Platzierungen</strong>. Du lieferst: kreative Assets (Texte, Bilder,
                Videos), den Produkt-Feed aus dem Merchant Center, ein Budget
                und dein Conversion-Ziel. Google entscheidet, wo, wann und wem
                deine Anzeigen gezeigt werden.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                PMax erfordert <strong style={{ color: "#fff" }}>Asset Groups</strong> &mdash; Sammlungen
                kreativer Elemente einschliesslich Uberschriften, Beschreibungen,
                Bildern, Logos und Videos. Jede Asset Group kann auf eine
                bestimmte Produktkategorie mit eigenen Zielgruppensignalen
                ausgerichtet werden.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Wie es fur E-Commerce funktioniert */}
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
                Wie PMax fur E-Commerce funktioniert
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Fur Online-Shops ist der <strong style={{ color: "#fff" }}>Produkt-Feed aus dem Google
                Merchant Center</strong> das Herzstuck. Googles Algorithmus analysiert
                jedes Produkt in deinem Feed &mdash; Titel, Beschreibung, Preis,
                Bilder, Verfugbarkeit &mdash; und ordnet es automatisch
                relevanten Suchanfragen und Zielgruppen zu.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Du lieferst vier wesentliche Elemente: <strong style={{ color: "#fff" }}>Produkte</strong> (uber
                den Feed), <strong style={{ color: "#fff" }}>kreative Assets</strong> (Texte, Bilder, Videos),{" "}
                <strong style={{ color: "#fff" }}>Budget</strong> und <strong style={{ color: "#fff" }}>Ziele</strong> (z.B.
                Kaufe mit einem Ziel-ROAS von 400%).
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Google ubernimmt die Kontrolle uber: <strong style={{ color: "#fff" }}>Targeting</strong> (wer
                deine Anzeige sieht), <strong style={{ color: "#fff" }}>Gebote</strong> (wie viel du pro
                Klick/Conversion zahlst) und <strong style={{ color: "#fff" }}>Platzierungen</strong> (auf
                welchen Kanalen deine Anzeigen erscheinen). Der Algorithmus
                verteilt das Budget dynamisch auf die Kombinationen, die den
                besten ROAS erzielen.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Korrektes Setup Schritt fur Schritt */}
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
                Korrektes Setup Schritt fur Schritt
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Eine falsch konfigurierte Performance Max Kampagne kann Budget
                verbrennen, ohne Ergebnisse zu liefern. Befolge diese 8 Schritte
                fur ein optimales Setup:
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
                    step: "1",
                    title: "Optimiere deinen Google Merchant Center Feed",
                    desc: "Titel sollten das Haupt-Keyword + Marke + Schlusselattribut enthalten. Detaillierte Beschreibungen, hochwertige Bilder und vollstandige GTIN-Codes sind essenziell, damit der Algorithmus Produkte korrekt zuordnen kann.",
                  },
                  {
                    step: "2",
                    title: "Richte Conversion-Tracking ein",
                    desc: "Erfasse alle wertvollen Aktionen: Kauf (primar), In den Warenkorb und Checkout beginnen (sekundar). Ohne genaue Conversion-Daten kann der Algorithmus nicht optimieren.",
                  },
                  {
                    step: "3",
                    title: "Erstelle die Kampagne mit dem Ziel \"Sales\"",
                    desc: "Wahle \"Sales\" als primares Ziel und verbinde deinen Merchant Center Feed. Wahle \"Performance Max\" als Kampagnentyp.",
                  },
                  {
                    step: "4",
                    title: "Setze Ziel-ROAS (starte mit 300%)",
                    desc: "Ein Ziel-ROAS von 300% bedeutet, dass du fur jeden investierten Euro 3 Euro Umsatz erwartest. Starte konservativ und passe nach 2\u20134 Wochen realer Daten an.",
                  },
                  {
                    step: "5",
                    title: "Erstelle Asset Groups nach Produktkategorien",
                    desc: "Packe nicht alle Produkte in eine Asset Group. Segmentiere nach Kategorien (z.B. Herrenschuhe, Damenschuhe, Accessoires) mit kreativen Assets und Zielgruppensignalen, die auf jede Kategorie zugeschnitten sind.",
                  },
                  {
                    step: "6",
                    title: "Fuge Zielgruppensignale hinzu",
                    desc: "Lade bestehende Kundenlisten hoch, fuge Website-Besucher hinzu (Remarketing) und wahle relevante In-Market-Segmente. Signale helfen dem Algorithmus, schneller zu lernen, wem deine Anzeigen gezeigt werden sollen.",
                  },
                  {
                    step: "7",
                    title: "Budget: mindestens 50 \u20AC/Tag",
                    desc: "Der Algorithmus braucht genugend Daten zur Optimierung. Mit einem Budget unter 50 \u20AC/Tag verlangert sich die Lernphase und die Performance bleibt suboptimal. Ideal: 80\u2013150 \u20AC/Tag.",
                  },
                  {
                    step: "8",
                    title: "Warte 2\u20134 Wochen (Lernphase)",
                    desc: "Andere in den ersten 2\u20134 Wochen keine Einstellungen. Der Algorithmus testet Kombinationen von Creatives, Zielgruppen und Platzierungen. Vorzeitige Anderungen setzen den Lernprozess zuruck.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "rgba(86,219,132,0.12)",
                          color: "#56db84",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </span>
                      <h3
                        className="font-bold text-white"
                        style={{
                          fontSize: "1rem",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.7,
                        margin: 0,
                        paddingLeft: "40px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Section: 5 haufige Fehler */}
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
                5 haufige Performance Max Fehler
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Die meisten unterperformenden PMax-Kampagnen haben eines dieser
                grundlegenden Probleme:
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
                    title: "1. Schlechter Produkt-Feed",
                    desc: "Generische Titel, fehlende GTINs, minderwertige Bilder oder unvollstandige Beschreibungen. Der Feed ist der Motor jeder E-Commerce PMax-Kampagne \u2014 wenn er schwach ist, leidet die gesamte Kampagne. Investiere Zeit in die Optimierung der Titel mit relevanten Keywords und professionellen Bildern.",
                  },
                  {
                    title: "2. Eine Asset Group fur alles",
                    desc: "Wenn du 500 Produkte in eine einzige Asset Group packst, kann der Algorithmus die Botschaft nicht personalisieren. Segmentiere nach Kategorien \u2014 jede Kategorie verdient eigene kreative Assets und Zielgruppensignale.",
                  },
                  {
                    title: "3. Budget zu niedrig",
                    desc: "Mit 10 \u20AC/Tag hat der Algorithmus nicht genugend Daten zum Lernen. Die Lernphase verlangert sich endlos und die Performance bleibt schlecht. Minimum 50 \u20AC/Tag, ideal 80+ \u20AC/Tag.",
                  },
                  {
                    title: "4. Keine Zielgruppensignale",
                    desc: "Zielgruppensignale sind nicht optional \u2014 sie sind essentielle Hinweise, die dem Algorithmus helfen, schneller zu verstehen, wem deine Anzeigen gezeigt werden sollen. Ohne sie dauert die Lernphase viel langer und kostet mehr.",
                  },
                  {
                    title: "5. Einstellungen wahrend der Lernphase andern",
                    desc: "Das Andern des Budgets, des Ziel-ROAS oder der Assets in den ersten 2\u20134 Wochen setzt den Lernprozess zuruck. Sei geduldig und lass den Algorithmus Daten sammeln, bevor du Anpassungen vornimmst.",
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

          {/* Section: PMax vs Standard Shopping vs Search */}
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
                PMax vs. Standard Shopping vs. Search
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Jeder Kampagnentyp hat unterschiedliche Starken. Hier ist ein
                direkter Vergleich:
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
                      {["Merkmal", "Performance Max", "Standard Shopping", "Search"].map(
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
                      ["Kanale", "Alle Google-Oberflachen", "Nur Shopping", "Nur Search"],
                      ["Kontrolle", "Niedrig (KI-gesteuert)", "Mittel", "Hoch"],
                      ["Setup", "Mittel", "Mittel", "Einfach"],
                      ["Ideal fur", "Skalierung", "Produktspezifisch", "Hohe Kaufabsicht"],
                      ["ROAS-Potenzial", "Hoch", "Mittel-Hoch", "Hoch"],
                      ["Transparenz", "Niedrig", "Mittel", "Hoch"],
                    ].map(([feature, pmax, shopping, search], i) => (
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
                          {feature}
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
                          {pmax}
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
                          {shopping}
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
                          {search}
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
                Unsere Empfehlung: Nutze <strong style={{ color: "#fff" }}>PMax als Hauptkampagne</strong> fur
                die Skalierung, erganzt durch Search-Kampagnen auf Keywords mit
                der hochsten Kaufabsicht. Standard Shopping bleibt nutzlich fur
                Produkte, bei denen du granulare Kontrolle uber die Gebote
                benotigst.
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
                Optimiere deine Google-Kampagnen
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
                Wir richten Performance Max Kampagnen ein und optimieren sie, die
                echte Verkaufe generieren. Kostenlose Analyse deines Google Ads
                Kontos innerhalb von 48 Stunden.
              </p>
              <Link href="/ge/google-de/" className="btn-primary">
                Google Ads entdecken <ArrowRight size={16} />
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
                    Was kostet Google Ads?
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
                      color: "#f59e0b",
                    }}
                  >
                    E-commerce
                  </span>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.0625rem",
                      lineHeight: 1.3,
                      margin: "10px 0",
                    }}
                  >
                    Online-Shop Umsatz steigern
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
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="de" />
    </>
  );
}
