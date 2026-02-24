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
              16. Februar 2026 &middot; 11 Min Lesezeit
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
              Facebook Ads vs Google Ads: Was wahlen fur den{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Online-Shop?
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
              Zwei Plattformen, zwei komplett unterschiedliche Ansatze.
              Vollstandiger Vergleich mit CPCs, ROAS, Formaten und der
              optimalen Strategie, die beide kombiniert.
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
                &bdquo;Sollen wir auf Facebook Ads oder Google Ads
                setzen?&ldquo; &mdash; das ist die ewige Debatte fur jeden
                Online-Shop. Beide Plattformen konnen ernsthaften Umsatz
                generieren, aber sie funktionieren grundlegend
                unterschiedlich. Die eine bringt dir Kunden, die nicht einmal
                wussten, dass du existierst. Die andere fangt sie genau in dem
                Moment ein, in dem sie nach deinem Produkt suchen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Die richtige Antwort ist nicht &bdquo;die eine oder die
                andere&ldquo; &mdash; sondern zu wissen,{" "}
                <strong style={{ color: "#fff" }}>wann du welche
                einsetzt</strong>. In diesem Leitfaden vergleichen wir die
                beiden Plattformen direkt miteinander, mit echten Zahlen aus
                den Kampagnen, die wir taglich fur Online-Shops in Europa
                verwalten.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Wie jede Plattform funktioniert */}
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
                Wie jede Plattform funktioniert
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der grundlegende Unterschied ist einfach:{" "}
                <strong style={{ color: "#fff" }}>Facebook Ads ist
                Unterbrechungsmarketing (Push)</strong>, wahrend{" "}
                <strong style={{ color: "#fff" }}>Google Ads
                Intentionsmarketing (Pull)</strong> ist.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Facebook (Meta) zeigt Anzeigen Personen, die{" "}
                <strong style={{ color: "#fff" }}>moglicherweise
                interessiert</strong> an deinem Produkt sind &mdash; basierend
                auf Demografie, Interessen, Verhalten und Lookalike-Zielgruppen.
                Der Nutzer sucht nicht aktiv nach deinem Produkt, aber die
                Anzeige &bdquo;unterbricht&ldquo; ihn, wahrend er durch seinen
                Feed scrollt.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads hingegen zeigt Anzeigen Personen, die{" "}
                <strong style={{ color: "#fff" }}>aktiv suchen</strong>, was
                du verkaufst. Wenn jemand &bdquo;Laufschuhe Herren
                kaufen&ldquo; bei Google eingibt, ist die Kaufabsicht bereits
                vorhanden. Du bezahlst dafur, genau in diesem Moment zu
                erscheinen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Dieser Unterschied verandert alles: von der kreativen
                Botschaft uber das Budget bis hin zu den Produkttypen, die auf
                jeder Plattform am besten funktionieren.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Direkter Vergleich */}
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
                Direkter Vergleich: Facebook Ads vs Google Ads
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Wir haben die beiden Plattformen bei den wichtigsten Kriterien
                fur E-Commerce gegenubergestellt:
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
                      {["Kriterium", "Facebook Ads", "Google Ads"].map(
                        (header) => (
                          <th
                            key={header}
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
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Targeting",
                        "Demografie, Interessen, Verhalten, Lookalikes",
                        "Keywords, Suchabsicht, Remarketing",
                      ],
                      [
                        "Am besten fur",
                        "Entdeckung, neue Produkte, Markenbekanntheit",
                        "Kaufbereite Nutzer, spezifische Suchen",
                      ],
                      [
                        "Durchschn. CPC (E-Commerce)",
                        "\u20AC0,30 \u2013 \u20AC1,50",
                        "\u20AC0,50 \u2013 \u20AC3,00",
                      ],
                      ["Durchschn. ROAS", "3-5x", "4-8x"],
                      [
                        "Kreativformat",
                        "Visual-first (Video, Carousel, UGC)",
                        "Textanzeigen, Shopping, Video",
                      ],
                      [
                        "Lernkurve",
                        "Mittel",
                        "Mittel-Hoch",
                      ],
                      [
                        "Beste Funnel-Phase",
                        "Top & Middle Funnel",
                        "Middle & Bottom Funnel",
                      ],
                      [
                        "Skalierung",
                        "Einfach, aber abnehmende Ertrage",
                        "Keyword-begrenzt, aber hohe Kaufabsicht",
                      ],
                    ].map(([kriterium, fb, google], i) => (
                      <tr key={i}>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "#fff",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {kriterium}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {fb}
                        </td>
                        <td
                          style={{
                            background: "#0a0a0a",
                            color: "rgba(255,255,255,0.6)",
                            padding: "14px 18px",
                            borderBottom:
                              "1px solid rgba(255,255,255,0.06)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {google}
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
                Beachte: Google Ads hat einen hoheren durchschnittlichen ROAS,
                aber auch einen hoheren CPC. Facebook Ads ist gunstiger pro
                Klick, erfordert aber mehr kreative Arbeit, um einen Nutzer zu
                konvertieren, der nicht aktiv nach deinem Produkt sucht.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Wann Facebook Ads wahlen */}
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
                Wann du Facebook Ads wahlen solltest
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Facebook Ads (Meta Ads) glanzt, wenn du{" "}
                <strong style={{ color: "#fff" }}>Nachfrage
                erzeugen</strong> musst, anstatt sie nur einzufangen. Es ist
                die ideale Plattform in diesen Szenarien:
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
                    title: "Neues oder unbekanntes Produkt",
                    desc: "Niemand sucht bei Google nach einem Produkt, von dem er nicht weiss, dass es existiert. Facebook ermoglicht es dir, es der richtigen Zielgruppe zu zeigen und Interesse von Grund auf zu wecken. Ideal fur Produktlaunches, innovative Produkte oder aufkommende Nischen.",
                  },
                  {
                    title: "Visuelle Produkte (Mode, Wohnen, Beauty)",
                    desc: "Wenn dein Produkt in Bildern und Videos gut aussieht, ist Facebook dein Spielfeld. Carousel-, Reels- und UGC-Formate funktionieren aussergewohnlich gut fur Produkte, bei denen Asthetik zahlt.",
                  },
                  {
                    title: "Niedriger Preis, Impulskaufe (unter \u20AC50)",
                    desc: "Produkte mit niedrigem Preis konvertieren gut auf Facebook, weil die Kaufentscheidung schnell fallt. Der Nutzer sieht die Anzeige, mag das Produkt und kauft in 2\u20133 Klicks, ohne umfangreichen Vergleich.",
                  },
                  {
                    title: "E-Mail-Listen aufbauen",
                    desc: "Facebook Lead Ads sind ausserst effektiv fur die Sammlung von E-Mail-Adressen. Sobald du die Liste hast, kannst du E-Mail-Marketing mit hohem ROI betreiben, ohne von Werbeplattformen abhangig zu sein.",
                  },
                  {
                    title: "Retargeting von Website-Besuchern",
                    desc: "Das Facebook Pixel ermoglicht es dir, Besucher erneut anzusprechen, die Produkte angesehen, aber nicht gekauft haben. Mit Custom Audiences und Dynamic Product Ads kannst du bis zu 20\u201330% der abgebrochenen Warenkörbe zuruckgewinnen.",
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

          {/* Section: Wann Google Ads wahlen */}
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
                Wann du Google Ads wahlen solltest
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Google Ads glanzt, wenn du{" "}
                <strong style={{ color: "#fff" }}>bestehende Nachfrage
                einfangen</strong> musst. Die Leute suchen bereits nach dem,
                was du verkaufst &mdash; du musst nur vor ihnen erscheinen:
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
                    title: "Hohes Suchvolumen fur deine Produkte",
                    desc: "Wenn Menschen aktiv \u201E[dein Produkt] kaufen\u201C bei Google suchen, hast du bereits validierte Nachfrage. Google Ads platziert dich genau im Moment der maximalen Kaufabsicht vor ihnen.",
                  },
                  {
                    title: "Hohere Preispunkte (uberlegte Kaufe)",
                    desc: "Bei Produkten uber \u20AC100\u2013200 vergleichen Kunden vor dem Kauf. Google Shopping und Search Ads positionieren dich in dieser Vergleichsphase, wenn die Kaufabsicht hoch und die Entscheidung fast getroffen ist.",
                  },
                  {
                    title: "Dienstleistungsbasierter E-Commerce",
                    desc: "Wenn du Online-Dienste verkaufst (Kurse, Beratung, Software), funktioniert Google Ads hervorragend. Menschen suchen nach Losungen fur spezifische Probleme, und du lieferst die Antwort.",
                  },
                  {
                    title: "Google Shopping fur Produktkataloge",
                    desc: "Wenn du einen Katalog mit Hunderten oder Tausenden von Produkten hast, zeigt Google Shopping (Performance Max) automatisch die relevanten Produkte basierend auf den Suchanfragen der Nutzer an. Die skalierbarste Losung fur E-Commerce mit grossem Katalog.",
                  },
                  {
                    title: "Wettbewerber-Targeting",
                    desc: "Du kannst auf die Markennamen deiner Konkurrenten bieten und deren Kunden genau in dem Moment anziehen, in dem sie nach ihnen suchen. Eine aggressive Strategie, aber effektiv, wenn du ein uberlegenes Produkt oder bessere Preise hast.",
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

          {/* Section: Die optimale Strategie */}
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
                Die optimale Strategie: nutze beide
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Die profitabelsten Online-Shops, die wir betreuen, wahlen
                nicht zwischen Facebook und Google &mdash; sie nutzen beide{" "}
                <strong style={{ color: "#fff" }}>zusammen,
                strategisch</strong>. Jede Plattform deckt eine andere Phase
                des Verkaufsfunnels ab:
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
                  Der vollstandige Facebook + Google Funnel:
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
                    [
                      "1. Top of Funnel (Awareness)",
                      "Facebook Ads \u2014 Video, Carousel, UGC fur kalte Zielgruppen",
                    ],
                    [
                      "2. Middle of Funnel (Consideration)",
                      "Google Search + Shopping fur Produktsuchen",
                    ],
                    [
                      "3. Bottom of Funnel (Conversion)",
                      "Google Brand Search + Shopping mit Kaufabsicht",
                    ],
                    [
                      "4. Wiedergewinnung",
                      "Facebook Retargeting + Google Remarketing fur abgebrochene Warenkörbe",
                    ],
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
                        flexWrap: "wrap",
                        gap: "8px",
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
                <strong style={{ color: "#fff" }}>Wie das Budget
                aufteilen?</strong> Fur die meisten Online-Shops empfehlen wir
                eine Aufteilung von{" "}
                <strong style={{ color: "#fff" }}>60% Google / 40%
                Facebook</strong>, wenn bereits Suchnachfrage fur deine
                Produkte besteht. Wenn du ein neues Produkt launchst oder in
                einer aufkommenden Nische bist, drehe es um:{" "}
                <strong style={{ color: "#fff" }}>60% Facebook / 40%
                Google</strong>.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der Schlussel ist, den{" "}
                <strong style={{ color: "#fff" }}>kombinierten
                ROAS</strong> zu messen, nicht jede Plattform isoliert.
                Facebook generiert oft die erste Markeninteraktion, und Google
                schliesst den Verkauf ab. Wenn du Facebook nur nach direkten
                Conversions bewertest, wirst du den tatsachlichen Impact
                unterschatzen.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Verwende ein Multi-Touch-Attributionsmodell (oder zumindest
                First-Click vs. Last-Click), um den wahren Beitrag jeder
                Plattform zu verstehen. Tools wie Google Analytics 4 und Meta
                Attribution helfen dir, das Gesamtbild zu sehen.
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
                Optimiere deine Kampagnen
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
                Wir verwalten Facebook Ads und Google Ads Kampagnen fur
                Online-Shops mit nachgewiesenem ROAS. Erfahre, wie wir den
                Umsatz deines Shops skalieren konnen.
              </p>
              <Link href="/ge/bezahlte-werbung/" className="btn-primary">
                Paid Ads Services entdecken <ArrowRight size={16} />
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
                    Was kostet Google Ads? Echte Budgets und Ergebnisse
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
                    Retargeting und Remarketing: Vollstandiger Leitfaden fur
                    E-Commerce
                  </h3>
                  <Link
                    href="/ge/blog/retargeting-remarketing-leitfaden/"
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
