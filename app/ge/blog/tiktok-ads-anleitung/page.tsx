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
              12. Februar 2026 &middot; 12 Min Lesezeit
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
              TikTok Ads schalten:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vollstandiger Leitfaden fur 2026
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
              Anzeigenformate, Targeting, Budgets, kreative Best Practices und
              Schritt-fur-Schritt-Setup &mdash; alles, was du brauchst, um
              profitable TikTok-Ads-Kampagnen zu starten.
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
                TikTok hat weltweit uber <strong style={{ color: "#fff" }}>1 Milliarde monatlich aktive
                Nutzer</strong> uberschritten. Das Werbesystem der Plattform hat sich in
                den letzten zwei Jahren erheblich weiterentwickelt. Fur Marken, die
                die Altersgruppe 18-45 ansprechen, konnen TikTok Ads CPMs liefern,
                die <strong style={{ color: "#fff" }}>40-60% niedriger als bei Meta</strong> sind.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der Wettbewerb auf TikTok Ads ist in den meisten Markten noch
                deutlich geringer als auf Meta oder Google, was niedrigere Kosten
                und ein hoheres organisches Reichweitenpotenzial bedeutet. Die
                Fahigkeit des Algorithmus, die richtige Zielgruppe fur deine Inhalte
                zu finden, ist wohl die beste in der Branche.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In diesem vollstandigen Leitfaden zeigen wir dir, wie du deine
                erste TikTok-Ads-Kampagne einrichtest, welche Formate am besten
                funktionieren, wie du effektiv targetierst und welches Budget du
                fur echte Ergebnisse brauchst.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Warum TikTok Ads */}
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
                Warum TikTok Ads in 2026?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Wenn du immer noch denkst, TikTok sei nur fur Teenager, erzahlen
                die Zahlen eine andere Geschichte. Die durchschnittliche
                Engagement-Rate auf TikTok betragt <strong style={{ color: "#fff" }}>6%</strong>, verglichen
                mit <strong style={{ color: "#fff" }}>1-2% auf Instagram</strong>. Das bedeutet, dass dein Content
                3-6x hohere Chancen hat, gesehen zu werden und Interaktion zu
                erzeugen.
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
                  "Geringerer Wettbewerb als auf Meta oder Google in den meisten Markten",
                  "Deutlich niedrigere CPMs (€3-8 vs. €8-15 auf Meta)",
                  "6% Engagement-Rate — 3-6x hoher als auf Instagram",
                  "Authentischer Content performt besser als polierte Werbung",
                  "Hervorragend fur Product Discovery — Nutzer entdecken aktiv neue Produkte",
                  "Algorithmus verbreitet Content auch an Nicht-Follower organisch",
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
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
                      &#10003;
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
                TikTok ersetzt weder Meta noch Google &mdash; aber es fugt einen
                kostengunstigen Kanal mit hoher Reichweite hinzu, der jede Paid-Ads-Strategie
                erganzen kann.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Anzeigenformate */}
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
                TikTok-Anzeigenformate
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                TikTok bietet mehrere Anzeigenformate, die jeweils fur ein
                anderes Ziel optimiert sind. Hier ist ein vollstandiger Vergleich:
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
                      {["Format", "Ideal fur", "Spezifikationen", "CPM Durchschn."].map(
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
                        "In-Feed Ads",
                        "Conversions, Traffic",
                        "9:16 Video, 5-60s",
                        "€3 – 8",
                      ],
                      [
                        "TopView",
                        "Markenbekanntheit",
                        "Erste Anzeige, 60s",
                        "€15 – 30",
                      ],
                      [
                        "Spark Ads",
                        "Engagement, Authentizitat",
                        "Organische Posts boosten",
                        "€2 – 6",
                      ],
                      [
                        "Shopping Ads",
                        "E-Commerce-Verkaufe",
                        "Produktkatalog",
                        "€4 – 10",
                      ],
                      [
                        "Branded Effects",
                        "Markeninteraktion",
                        "AR-Filter, Sticker",
                        "Individuell",
                      ],
                    ].map(([format, bestFor, specs, cpm], i) => (
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
                          {bestFor}
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
                          {specs}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#56db84",
                            padding: "14px 18px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {cpm}
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
                Fur die meisten Unternehmen empfehlen wir, mit <strong style={{ color: "#fff" }}>Spark
                Ads</strong> (Boosting von leistungsstarkem organischem Content)
                oder <strong style={{ color: "#fff" }}>In-Feed Ads</strong> mit Conversion-Ziel zu starten.
                Sie sind am budgetfreundlichsten und am einfachsten zu testen.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Kampagne einrichten */}
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
                So richtest du deine erste TikTok-Ads-Kampagne ein
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Das Setup einer TikTok-Ads-Kampagne ist einfacher als du denkst.
                Folge diesen 8 Schritten:
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
                    title: "1. Erstelle ein TikTok Business-Konto",
                    desc: "Gehe zu ads.tiktok.com und registriere dich mit einer Business-E-Mail. Fullst du die Unternehmensdetails aus und warte auf die Kontoverifizierung (dauert normalerweise 24-48 Stunden).",
                  },
                  {
                    title: "2. Installiere den TikTok Pixel auf deiner Website",
                    desc: "Der TikTok Pixel funktioniert ahnlich wie der Meta Pixel. Du kannst ihn manuell oder uber den Google Tag Manager installieren. Ohne Pixel kannst du keine Conversions messen und der Algorithmus kann nicht optimieren.",
                  },
                  {
                    title: "3. Richte Events ein",
                    desc: "Konfiguriere die wichtigsten Events: ViewContent (Produktansicht), AddToCart (In den Warenkorb), InitiateCheckout (Checkout starten) und Purchase (Kauf). Diese Signale helfen dem Algorithmus, Kaufer zu finden.",
                  },
                  {
                    title: "4. Erstelle eine Kampagne mit Conversion-Ziel",
                    desc: "Wahle das Ziel 'Conversions' und wahle Purchase oder AddToCart als primares Optimierungsevent. Vermeide Traffic-Ziele — sie sind gunstiger, bringen aber keine Conversions.",
                  },
                  {
                    title: "5. Setze breites Targeting",
                    desc: "Starte nur mit Land und Alter (18-45). Fuge keine Interessen oder Verhaltensweisen hinzu — lass den TikTok-Algorithmus die optimale Zielgruppe finden. Er ist uberraschend gut darin.",
                  },
                  {
                    title: "6. Budget: mindestens €20/Tag pro Anzeigengruppe",
                    desc: "Unter diesem Schwellenwert hat der Algorithmus nicht genug Daten zum Optimieren. Setze ein Tagesbudget von €20-50 pro Anzeigengruppe und ein Gesamtkampagnenbudget fur mindestens 7 Tage.",
                  },
                  {
                    title: "7. Lade 3-5 kreative Varianten hoch",
                    desc: "TikTok testet automatisch mehrere Varianten und weist den Top-Performern Budget zu. Bereite 3-5 verschiedene Videos mit unterschiedlichen Hooks, Blickwinkeln und Formaten vor — Vielfalt ist der Schlussel.",
                  },
                  {
                    title: "8. Starte und warte 3-5 Tage",
                    desc: "Andere in den ersten 3-5 Tagen nichts. Der Algorithmus befindet sich in der Lernphase und jede Anderung setzt den Prozess zuruck. Bewerte die Leistung erst, nachdem du mindestens 50 Conversions pro Anzeigengruppe hast.",
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

          {/* Section: Kreative Best Practices */}
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
                Kreative Best Practices: Was auf TikTok funktioniert
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                TikTok unterscheidet sich grundlegend von Meta oder Google.
                Content, der funktioniert, sieht aus wie ein organisches TikTok,
                nicht wie ein TV-Werbespot. Hier sind die goldenen Regeln:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(86,219,132,0.15)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Was FUNKTIONIERT:
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
                    "Nativer Content — sieht organisch aus, nicht wie Werbung",
                    "Hook in den ersten 2 Sekunden — Aufmerksamkeit sofort fesseln",
                    "UGC-Stil (User-Generated Content) — Testimonials, Unboxing, Reviews",
                    "Trending Sounds — der Algorithmus bevorzugt Content mit popularem Audio",
                    "Text-Overlays — viele Nutzer schauen ohne Ton",
                    "15-30 Sekunden Dauer — der Sweet Spot fur Engagement",
                    "Produkt in der Anwendung zeigen — nicht nur statische Bilder",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#56db84", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,100,100,0.15)",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "16px",
                  }}
                >
                  Was NICHT funktioniert:
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
                    "Polierte, TV-artige Werbung — Nutzer scrollen sofort weiter",
                    "Generisches Stockmaterial — wirkt unecht und irrelevant",
                    "Video ohne Ton — TikTok ist eine Audio-first-Plattform",
                    "Unternehmenssprache — der Ton muss conversational sein",
                    "Statische Creatives (Bilder) — Video ist Konig auf TikTok",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#ff6464", flexShrink: 0 }}>&#10007;</span>
                      {item}
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
                Die Regel Nummer eins auf TikTok: <strong style={{ color: "#fff" }}>&bdquo;Don&apos;t make ads,
                make TikToks.&ldquo;</strong> Je naturlicher sich dein Content in den Feed
                einfugt, desto besser performt er und desto weniger kostet er.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Targeting */}
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
                Targeting-Tipps: Lass den Algorithmus arbeiten
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Einer der grossten Fehler bei TikTok Ads ist Uber-Targeting.
                Anders als bei Meta, wo Interessen und Verhaltensweisen helfen,
                funktioniert auf TikTok breites Targeting am besten. Hier ist die
                empfohlene Strategie:
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
                  "Starte breit: nur Alter + Land. TikToks Algorithmus ist aussergewohnlich gut darin, Kaufer zu finden",
                  "Nutze Custom Audiences fur Retargeting: Website-Besucher, Add-to-Cart, TikTok-Engager",
                  "Erstelle Lookalike Audiences basierend auf dem Purchase-Event — nicht auf Traffic oder Engagement",
                  "Schranke Interessen in den Anfangsphasen nicht ein — lass den Algorithmus Daten sammeln",
                  "Nach 2-4 Wochen analysiere die konvertierenden Zielgruppen und nimm minimale Anpassungen vor",
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
                    <span style={{ color: "#56db84", flexShrink: 0 }}>
                      &#10003;
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
                TikToks Algorithmus analysiert das Nutzerverhalten auf einer
                Tiefe, die manuelles Targeting einfach nicht replizieren kann.
                Dem Algorithmus zu vertrauen ist der Schlussel zu starken
                Ergebnissen auf dieser Plattform.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Budgets und Erwartungen */}
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
                Budgets und realistische Erwartungen
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                TikTok Ads ist keine magische Losung &mdash; es erfordert
                Investition und Geduld. Hier ist, was du in Bezug auf Budget und
                Zeitrahmen erwarten kannst:
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
                    ["Minimales Testbudget", "€600/Monat"],
                    ["Empfohlenes Budget", "€1.500 – 3.000/Monat"],
                    ["Lernphase", "2 – 4 Wochen"],
                    ["CPA vs. Meta (nach Optimierung)", "20 – 40% niedriger"],
                    ["Mindestanzahl Creatives", "3 – 5 Varianten"],
                    ["Empfohlener Creative-Refresh", "Alle 2 – 3 Wochen"],
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
                      color: "#56db84",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Zeit bis zu stabilen Ergebnissen</span>
                    <span>6 – 8 Wochen</span>
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
                Wichtig: Die ersten 2-4 Wochen sind die Lernphase. Beurteile die
                Leistung in dieser Zeit nicht. Der Algorithmus sammelt Daten und
                optimiert die Verteilung. Echte Ergebnisse kommen, nachdem genug
                Conversions gesammelt wurden, damit der Algorithmus das ideale
                Kauferprofil versteht.
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
                TikTok-Kampagnen starten
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
                Unser Team verwaltet TikTok-Ads-Kampagnen fur Marken in ganz
                Europa. Strategie, Creatives, Targeting und Optimierung &mdash;
                alles inklusive.
              </p>
              <Link href="/ge/tiktok-de/" className="btn-primary">
                TikTok Ads entdecken <ArrowRight size={16} />
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
                    Facebook Ads vs. Google Ads fur E-Commerce
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
                    Was kostet Google Ads? Budget-Leitfaden 2026
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
              </div>
            </div>
          </FadeInSection>
        </article>
      </main>
      <Footer locale="de" />
    </>
  );
}
