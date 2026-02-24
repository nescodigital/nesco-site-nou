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
              21. Februar 2026 &middot; 9 Min. Lesezeit
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
              Was kostet Google Ads?{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Budget-Leitfaden 2026
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
              Durchschnittlicher CPC nach Branche, empfohlene Budgets nach
              Kampagnentyp, ROI-Berechnung &mdash; alles in einem aktuellen
              Leitfaden fur deine Google Ads Investition.
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
                Google Ads ist der schnellste Weg, auf der ersten Seite von
                Google zu erscheinen &mdash; aber wie viel solltest du
                tatsachlich einplanen? Die Antwort hangt von deiner Branche,
                dem Wettbewerbsniveau und dem gewahlten Kampagnentyp ab.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In diesem Leitfaden schlusseln wir die realen Kosten von
                Google Ads im Jahr 2026 auf &mdash; von durchschnittlichen
                Cost-per-Click-Benchmarks nach Branche bis hin zu empfohlenen
                Mindestbudgets und den ROI-Formeln, die wir taglich fur unsere
                Kunden verwenden.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Die Kosten variieren erheblich &mdash; eine E-Commerce-Kampagne
                kann unter 0,50&nbsp;&euro; pro Klick kosten, wahrend ein
                einzelner Klick auf ein juristisches Keyword 5&nbsp;&euro; oder
                mehr erreichen kann. Der Unterschied liegt in der Strategie
                hinter jeder Kampagne.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Wie die Preisgestaltung bei Google Ads funktioniert */}
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
                Wie die Preisgestaltung bei Google Ads funktioniert
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads funktioniert nach einem <strong style={{ color: "#fff" }}>Echtzeit-Auktionsmodell</strong>.
                Jedes Mal, wenn jemand nach einem Keyword sucht, auf das du
                bietest, fuhrt Google eine sofortige Auktion zwischen allen
                Werbetreibenden durch, die auf diesen Begriff bieten.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der Cost-per-Click (CPC), den du zahlst, hangt nicht nur davon
                ab, wie viel du bietest, sondern auch von deinem <strong style={{ color: "#fff" }}>Quality Score</strong> &mdash;
                einer Bewertung von 1 bis 10, die Google jedem Keyword basierend
                auf Anzeigenrelevanz, Landing-Page-Erfahrung und erwarteter
                Klickrate zuweist.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Die vereinfachte Formel lautet: <strong style={{ color: "#fff" }}>Ad Rank = Max. CPC &times; Quality Score</strong>.
                Das bedeutet, dass ein Werbetreibender mit einem Quality Score
                von 9 und einem Gebot von 0,60&nbsp;&euro; jemanden ubertreffen
                kann, der 1,20&nbsp;&euro; bietet, aber einen Quality Score von
                4 hat.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Bei Search-Kampagnen zahlst du <strong style={{ color: "#fff" }}>pro Klick</strong> &mdash;
                nicht pro Impression. Wenn deine Anzeige 1.000 Mal erscheint,
                aber niemand klickt, zahlst du nichts. Die Ausnahme sind
                Display- und YouTube-Kampagnen, bei denen du auch pro 1.000
                Impressionen (CPM) zahlen kannst.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Durchschnittlicher CPC nach Branche */}
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
                Durchschnittlicher CPC nach Branche in Europa
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Die folgenden Daten spiegeln die durchschnittlichen CPCs wider,
                die wir in Kundenkonten und Google Ads Benchmarks auf
                europaischen Markten im Jahr 2026 beobachten. Die Spannen
                variieren je nach Saisonalitat, Standort und Kampagnenqualitat.
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
                      {["Branche", "Durchschn. CPC (EUR)", "Wettbewerb"].map(
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
                      ["E-Commerce (allgemein)", "0,40 – 1,20", "Mittel"],
                      ["Immobilien", "0,80 – 2,50", "Hoch"],
                      ["Rechtsdienstleistungen", "1,50 – 5,00", "Sehr hoch"],
                      ["Medizin / Zahnmedizin", "1,00 – 3,50", "Hoch"],
                      ["B2B-Dienstleistungen", "0,80 – 3,00", "Mittel-Hoch"],
                      ["Bildung", "0,50 – 1,80", "Mittel"],
                      ["Tourismus / Reisen", "0,60 – 2,00", "Mittel"],
                      ["Beauty / Wellness", "0,40 – 1,50", "Mittel"],
                    ].map(([branche, eur, wettbewerb], i) => (
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
                          {branche}
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
                          {eur}
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
                          {wettbewerb}
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
                Beachte, dass Rechts- und Medizindienstleistungen die hochsten
                CPCs haben &mdash; der Wettbewerb ist hart und der Lifetime
                Value eines neuen Kunden rechtfertigt die Investition. Im
                Gegensatz dazu profitiert der allgemeine E-Commerce von
                erschwinglichen CPCs, was ihn ideal fur Tests mit kleineren
                Budgets macht.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Empfohlene Budgets nach Kampagnentyp */}
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
                Empfohlene Budgets nach Kampagnentyp
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Es gibt kein universelles Budget &mdash; jeder Kampagnentyp hat
                eine Mindestschwelle, unter der du nicht genugend Daten fur die
                Optimierung sammelst. Hier sind unsere Empfehlungen basierend
                auf Hunderten verwalteter Kampagnen:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    type: "Search Ads",
                    budget: "min. 500 \u20AC/Monat",
                    note: "Ideal zum Testen. 1.000+ \u20AC/Monat fur die Skalierung bei wettbewerbsintensiven Keywords.",
                  },
                  {
                    type: "Shopping Ads",
                    budget: "min. 700 \u20AC/Monat",
                    note: "Unverzichtbar fur E-Commerce. Erfordert einen optimierten Produkt-Feed und gesunde Margen.",
                  },
                  {
                    type: "Display Ads",
                    budget: "min. 350 \u20AC/Monat",
                    note: "Markenbekanntheit und Remarketing. Niedrige CPCs, aber indirekte Conversions.",
                  },
                  {
                    type: "Performance Max",
                    budget: "min. 1.000 \u20AC/Monat",
                    note: "Automatisierte Cross-Channel-Kampagne. Braucht ein hohes Datenvolumen, um gut zu performen.",
                  },
                  {
                    type: "YouTube Ads",
                    budget: "min. 500 \u20AC/Monat",
                    note: "Video-Anzeigen mit grosser Reichweite. Cost per View (CPV) zwischen 0,01 – 0,04 \u20AC.",
                  },
                ].map((item) => (
                  <div
                    key={item.type}
                    style={{
                      padding: "20px 24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <span
                        className="font-bold"
                        style={{ color: "#fff", fontSize: "1rem" }}
                      >
                        {item.type}
                      </span>
                      <span
                        style={{
                          color: "#56db84",
                          fontSize: "0.875rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.budget}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.note}
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
                Diese Budgets sind empfohlene Mindestwerte, um statistisch
                relevante Daten zu sammeln. Ein kleineres Budget bedeutet
                weniger Klicks, weniger Conversions und Entscheidungen, die
                auf Rauschen statt auf echten Daten basieren.
              </p>
            </div>
          </FadeInSection>

          {/* Section: So berechnest du den ROI */}
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
                So berechnest du den ROI deiner Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der Cost-per-Click allein sagt nichts aus. Was wirklich zahlt,
                sind deine <strong style={{ color: "#fff" }}>Kosten pro Akquisition (CPA)</strong> und
                der <strong style={{ color: "#fff" }}>Return on Ad Spend (ROAS)</strong>.
                Hier ist die Formel, die wir verwenden:
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
                  Beispiel zur ROI-Berechnung:
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
                    ["Durchschnittlicher CPC", "0,60 \u20AC"],
                    ["Conversion-Rate", "3%"],
                    ["Durchschnittlicher Bestellwert", "60 \u20AC"],
                    ["Klicks pro Conversion", "33 Klicks"],
                    ["Kosten pro Akquisition (CPA)", "20 \u20AC"],
                    ["Umsatz pro Akquisition", "60 \u20AC"],
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
                    <span>ROAS</span>
                    <span>3:1</span>
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
                Ein ROAS von 3:1 bedeutet, dass du fur jeden investierten Euro
                in Google Ads 3 Euro Umsatz erzielst. Im Allgemeinen gilt ein
                ROAS von mindestens <strong style={{ color: "#fff" }}>2:1</strong> als profitabel fur
                E-Commerce, wahrend fur Dienstleistungen (wo die Margen hoher
                sind) sogar ein ROAS von 1,5:1 hervorragend sein kann.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 5 Fehler, die die Kosten erhohen */}
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
                5 Fehler, die deine Google Ads Kosten erhohen
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Die meisten verschwendeten Google Ads Budgets sind nicht die
                Schuld der Plattform &mdash; sie sind das Ergebnis von
                Konfigurationsfehlern. Hier sind die 5 haufigsten Fehler,
                die wir sehen:
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
                    title: "1. Zu breite Keywords (Broad Match ohne Kontrolle)",
                    desc: "Die Verwendung von Broad Match ohne Smart-Bidding-Strategien oder negative Keywords bedeutet, dass Google deine Anzeige fur irrelevante Suchanfragen ausspielt. Wir haben Kunden gesehen, die fur vollig unverbundene Suchanfragen zahlten \u2014 und 30\u201350% ihres Budgets verschwendeten.",
                  },
                  {
                    title: "2. Fehlende negative Keywords",
                    desc: "Negative Keywords sind genauso wichtig wie positive. Ohne sie zahlst du fur Klicks von Personen, die nach kostenlosen Informationen, Jobs in deiner Branche oder vollig anderen Produkten suchen.",
                  },
                  {
                    title: "3. Schlechte Landing Pages",
                    desc: "Google bestraft Anzeigen, die auf langsame, irrelevante oder schlecht gestaltete Seiten fuhren. Ein niedriger Quality Score bedeutet hoheren CPC und schlechtere Positionen \u2014 du zahlst mehr fur weniger.",
                  },
                  {
                    title: "4. Kein Conversion-Tracking eingerichtet",
                    desc: "Ohne Tracking weiss der Google-Algorithmus nicht, wie ein wertvoller Kunde aussieht. Es ist, als wurde man mit verbundenen Augen fahren \u2014 du kannst nicht optimieren, was du nicht misst.",
                  },
                  {
                    title: "5. Quality Score ignorieren",
                    desc: "Ein Quality Score von 3 statt 7 kann deinen Cost-per-Click verdoppeln. Die Verbesserung der Anzeigenrelevanz, der Landing-Page-Qualitat und der CTR kann die Kosten um 30\u201350% senken, ohne das Budget zu andern.",
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
                Die Behebung dieser 5 Fehler kann die Kosten um <strong style={{ color: "#fff" }}>30&ndash;60%</strong> senken
                und die Conversions steigern, ohne das Budget zu erhohen. Es
                ist die erste Massnahme, die wir ergreifen, wenn wir ein
                bestehendes Google Ads Konto ubernehmen.
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
                Mochtest du eine individuelle Schatzung?
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
                Wir analysieren kostenlos deine Branche, den Wettbewerb und das
                Wachstumspotenzial durch Google Ads. Du erhaltst ein
                individuelles Budget und eine Ergebnisprognose innerhalb von
                48 Stunden.
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
                    Performance Max fur E-Commerce: Vollstandiger Leitfaden
                  </h3>
                  <Link
                    href="/ge/blog/performance-max-ecommerce/"
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
