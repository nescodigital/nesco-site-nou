import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function OnlineShopUmsatzSteigernPage() {
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
                "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span className="badge mb-4">E-Commerce</span>
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
                8. Februar 2026
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
                13 Min Lesezeit
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
              15 bew&auml;hrte Strategien zur{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Umsatzsteigerung im Online-Shop
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
              Einen Online-Shop zu skalieren funktioniert nicht mit einem einzigen
              Trick &mdash; sondern durch die Kombination vieler kleiner
              Verbesserungen, die sich zu massivem Wachstum addieren. Hier sind
              15 Strategien, die wir bei Dutzenden E-Commerce-Kunden getestet haben.
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
              Die erfolgreichsten Online-Shops, die wir betreuen, verlassen sich
              nicht auf einen einzigen Kanal oder einen viralen Moment. Sie wachsen
              kontinuierlich, weil sie gleichzeitig auf drei Achsen optimieren:
              Akquisition, Konversion und Kundenbindung. Vernachl&auml;ssigst du eine
              davon, k&ouml;nnen die anderen beiden das nicht kompensieren.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              In diesem Leitfaden haben wir 15 Strategien zusammengestellt, die wir
              bei unseren E-Commerce-Kunden angewendet und validiert haben &mdash; von
              Start-up-Marken bis hin zu Shops mit Millionenums&auml;tzen pro Monat.
              Jede Strategie kommt mit einer Aufwandseinsch&auml;tzung und einem
              erwarteten Impact, damit du wei&szlig;t, wo du anfangen solltest.
            </p>
          </FadeInSection>

          {/* ── AKQUISITION (1-5) ── */}
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
              Akquisition: Mehr qualifizierte K&auml;ufer gewinnen
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Ohne relevanten Traffic kann kein Shop wachsen. Aber nicht jeder
              Traffic ist gleich wertvoll &mdash; entscheidend ist, Menschen mit
              Kaufabsicht anzuziehen. Das sind die effektivsten Akquisitionskan&auml;le:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {[
                {
                  num: "1",
                  title: "Google Shopping Ads mit optimiertem Produkt-Feed",
                  desc: "Google Shopping ist der Akquisitionskanal mit der h\u00F6chsten Kaufabsicht im E-Commerce. Nutzer, die nach einem bestimmten Produkt suchen und Preis, Bild und Bewertung direkt in den Suchergebnissen sehen, sind kaufbereit. Der Schl\u00FCssel ist ein einwandfreier Produkt-Feed: keyword-optimierte Titel, vollst\u00E4ndige Beschreibungen, hochwertige Bilder und Preise in Echtzeit. Ein optimierter Feed kann den CPC um 20-30% senken und die CTR um 40%+ steigern.",
                },
                {
                  num: "2",
                  title: "Meta Dynamic Product Ads mit Retargeting",
                  desc: "Dynamische Produktanzeigen auf Meta (Facebook und Instagram) zeigen jedem Nutzer genau die Produkte, die er auf deiner Website angesehen hat. Das ist der einfachste Weg, Besucher zur\u00FCckzugewinnen, die ohne Kauf gegangen sind. Richte Retargeting-Zielgruppen f\u00FCr 7, 14 und 30 Tage mit unterschiedlichen Botschaften ein (Erinnerung, Angebot, Social Proof). Der durchschnittliche ROAS bei Retargeting-Kampagnen liegt bei 5-10x.",
                },
                {
                  num: "3",
                  title: "SEO f\u00FCr Produkt- und Kategorieseiten",
                  desc: "Die SEO-Optimierung von Kategorie- und Produktseiten bringt hochrelevanten organischen Traffic ohne Klickkosten. Konzentriere dich auf keyword-optimierte H1-Titel, \u00FCberzeugende Meta-Beschreibungen, einzigartigen Content auf jeder Kategorieseite (mindestens 300 W\u00F6rter), Produkt-Schema-Markup (Preis, Verf\u00FCgbarkeit, Bewertungen) und saubere, beschreibende URLs. Dieser Kanal baut sich \u00FCber die Zeit auf und reduziert die Abh\u00E4ngigkeit von bezahlter Werbung.",
                },
                {
                  num: "4",
                  title: "Influencer- und UGC-Partnerschaften",
                  desc: "User-Generated Content und Mikro-Influencer-Partnerschaften (5k-50k Follower) liefern authentischen Social Proof zu deutlich geringeren Kosten als Studioproduktionen. Ein Unboxing-Video oder ein echtes Review konvertiert 3-5x besser als eine polierte Studioanzeige. Verhandle provisionsbasierte Deals, um das Vorabrisiko zu minimieren und die Anreize an die tats\u00E4chliche Verkaufsleistung zu koppeln.",
                },
                {
                  num: "5",
                  title: "E-Mail-Liste aufbauen mit Lead Magnets (10% Rabatt-Popup)",
                  desc: "Ein gut gestaltetes Popup mit 10% Rabatt auf die erste Bestellung klingt simpel, funktioniert aber hervorragend. Die durchschnittliche Conversion-Rate eines optimierten Popups liegt bei 3-5% aller Besucher. Bei 10.000 monatlichen Besuchern bedeutet das 300-500 neue E-Mail-Abonnenten jeden Monat. Diese Abonnenten haben einen 3-5x h\u00F6heren Lifetime Value als anonyme Besucher, weil du sie ohne Zusatzkosten erneut ansprechen kannst.",
                },
              ].map((item) => (
                <div
                  key={item.num}
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
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.10)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      #{item.num}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", margin: 0 }}
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── KONVERSION (6-10) ── */}
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
              Konversion: Besucher zu K&auml;ufern machen
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Der teuerste Traffic der Welt ist wertlos, wenn dein Shop nicht
              konvertiert. Die durchschnittliche E-Commerce-Conversion-Rate liegt
              bei 2-3%, aber optimierte Shops erreichen konstant 4-6%. So geht es:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {[
                {
                  num: "6",
                  title: "Produktseiten optimieren (bessere Fotos, Videos, Beschreibungen)",
                  desc: "Die Produktseite ist der Ort, an dem die Kaufentscheidung f\u00E4llt. Investiere in professionelle Fotografie aus mehreren Winkeln, Produktvideos (steigern die Conversions um 20-40%), nutzenorientierte Beschreibungen statt reiner Spezifikationen, klare Versand- und R\u00FCckgabeinformationen und einen CTA-Button, der ohne Scrollen sichtbar ist. Jedes Element auf der Seite sollte eine Frage beantworten: Warum sollte ich bei dir kaufen?",
                },
                {
                  num: "7",
                  title: "Social Proof hinzuf\u00FCgen (Bewertungen, Ratings, UGC-Fotos)",
                  desc: "92% der Verbraucher lesen Bewertungen vor dem Kauf. Zeige Sternebewertungen direkt unter dem Produkttitel an, erm\u00F6gliche Kunden das Hochladen von Fotos des erhaltenen Produkts und zeige die Anzahl verkaufter Einheiten oder zufriedener Kunden. Ein Produkt mit 5+ Bewertungen hat eine 270% h\u00F6here Conversion-Rate als eines ohne Bewertungen. Social Proof beseitigt Zweifel und baut Vertrauen genau im Moment der Entscheidung auf.",
                },
                {
                  num: "8",
                  title: "Checkout vereinfachen (maximal 3 Schritte, Gast-Checkout)",
                  desc: "Jeder zus\u00E4tzliche Schritt im Checkout verliert 10-15% der K\u00E4ufer. Biete Gast-Checkout an (erzwinge niemals eine Kontoerstellung), beschr\u00E4nke das Formular auf wesentliche Felder, zeige einen klaren Fortschrittsbalken (Schritt 1 von 3), biete mehrere Zahlungsmethoden an (Karte, PayPal, Kauf auf Rechnung) und halte die Versandkosten ab dem Warenkorb sichtbar \u2014 keine \u00DCberraschungen im letzten Schritt.",
                },
                {
                  num: "9",
                  title: "Versandkostenfrei-Schwelle (20% \u00FCber durchschnittlichem Bestellwert)",
                  desc: "Kostenloser Versand ist der st\u00E4rkste Conversion-Anreiz im E-Commerce. Setze die Schwelle 20% \u00FCber deinem durchschnittlichen Bestellwert (AOV). Wenn dein AOV bei 50\u20AC liegt, setze die Grenze bei 60\u20AC. Zeige einen Fortschrittsbalken im Warenkorb: Noch 10\u20AC bis zum kostenlosen Versand. Diese Strategie erh\u00F6ht den AOV durchschnittlich um 10-15% und reduziert gleichzeitig die Warenkorbabbruchrate.",
                },
                {
                  num: "10",
                  title: "Dringlichkeit und Knappheit (begrenzter Bestand, Countdown bei Aktionen)",
                  desc: "Psychologische Dringlichkeit funktioniert, wenn sie authentisch ist. Zeige den realen Bestand an, wenn er unter 10 Einheiten liegt (Nur noch 3 auf Lager!), f\u00FCge einen Countdown-Timer f\u00FCr Aktionen mit echtem Ablaufdatum hinzu und zeige, wie viele Personen das Produkt gerade ansehen. Fabriziere niemals falsche Dringlichkeit \u2014 Kunden erkennen das und du verlierst Vertrauen, was langfristig mehr kostet als jeder kurzfristige Conversion-Gewinn.",
                },
              ].map((item) => (
                <div
                  key={item.num}
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
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.10)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      #{item.num}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", margin: 0 }}
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── KUNDENBINDUNG (11-15) ── */}
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
              Kundenbindung: Customer Lifetime Value maximieren
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die Akquisition eines Neukunden kostet 5-7x mehr als die Bindung
              eines bestehenden Kunden. Shops mit nur 5% h&ouml;herer
              Kundenbindung generieren 25-95% mehr Gewinn. Hier wird echte
              Profitabilit&auml;t aufgebaut:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              {[
                {
                  num: "11",
                  title: "Post-Purchase E-Mail-Flow (Danke, Review-Anfrage, Cross-Sell)",
                  desc: "Nach jeder Bestellung triggere eine automatisierte Sequenz: Bestätigungs- und Danke-E-Mail (sofort), Produktnutzungstipps (Tag 3), Review-Anfrage mit direktem Link (Tag 7-10), Cross-Sell-Empfehlungen für ergänzende Produkte (Tag 14) und ein Nachkauf-Angebot bei Verbrauchsprodukten (Tag 30). Allein dieser Flow kann 15-25% des gesamten E-Mail-Umsatzes generieren.",
                },
                {
                  num: "12",
                  title: "Treue- und Belohnungsprogramm",
                  desc: "Ein punktebasiertes oder gestuftes Programm (Bronze, Silber, Gold) erh\u00F6ht die Kauffrequenz um 20-30%. Vergib Punkte f\u00FCr jede Bestellung, Bewertung, Empfehlung und Social-Media-Share. Kunden in Treueprogrammen haben einen 3-5x h\u00F6heren Lifetime Value als normale Kunden und werden organisch zu den st\u00E4rksten Markenbotschaftern deines Shops.",
                },
                {
                  num: "13",
                  title: "Win-Back-Kampagnen f\u00FCr inaktive Kunden",
                  desc: "Kunden, die seit 60-90 Tagen nicht mehr gekauft haben, sind nicht verloren \u2014 sie sind nur inaktiv. Sende einen Win-Back-Flow mit: einer Reconnection-E-Mail (Wir vermissen dich), einer E-Mail mit den meistverkauften neuen Produkten und einem exklusiven Angebot mit Deadline (10% Rabatt, g\u00FCltig 48 Stunden). Die durchschnittliche R\u00FCckgewinnungsrate liegt bei 5-10% der inaktiven Kunden, was praktisch kostenlosen Umsatz aus einer bereits akquirierten Zielgruppe darstellt.",
                },
                {
                  num: "14",
                  title: "Abonnements und Auto-Replenish f\u00FCr Verbrauchsprodukte",
                  desc: "Wenn du Verbrauchsprodukte verkaufst (Nahrungserg\u00E4nzungsmittel, Kosmetik, Kaffee, Tiernahrung), biete eine Abo-Option mit 10-15% Rabatt an. Das Abo-Modell erh\u00F6ht die Umsatzplanbarkeit, reduziert die langfristigen Akquisitionskosten auf nahezu null und steigert den Lifetime Value jedes Kunden dramatisch. Abo-Kunden haben eine 3-4x h\u00F6here Retention als Einmalk\u00E4ufer.",
                },
                {
                  num: "15",
                  title: "Personalisierte Produktempfehlungen",
                  desc: "Personalisierte Empfehlungen (Kunden, die X gekauft haben, kauften auch Y) generieren durchschnittlich 10-30% des gesamten Online-Shop-Umsatzes. Implementiere sie auf Produktseiten, im Warenkorb, in Post-Purchase-E-Mails und auf der Startseite. Empfehlungsalgorithmen erh\u00F6hen AOV, Conversion-Rate und Kundenzufriedenheit gleichzeitig \u2014 und geh\u00F6ren damit zu den Investitionen mit dem h\u00F6chsten Hebel im E-Commerce.",
                },
              ].map((item) => (
                <div
                  key={item.num}
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
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#f59e0b",
                        background: "rgba(245,158,11,0.10)",
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      #{item.num}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{ fontSize: "1rem", margin: 0 }}
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
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── Impact-Tabelle ── */}
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
              Gesch&auml;tzter Impact pro Strategie
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Nicht alle Strategien haben das gleiche Aufwand-zu-Impact-Verh&auml;ltnis.
              Hier ist ein &Uuml;berblick, damit du wei&szlig;t, womit du anfangen solltest:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "32px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                  minWidth: "540px",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#111",
                      borderBottom: "2px solid #f59e0b",
                    }}
                  >
                    {["Strategie", "Aufwand", "Erwarteter Impact", "Zeitrahmen"].map(
                      (header) => (
                        <th
                          key={header}
                          style={{
                            padding: "14px 18px",
                            textAlign: "left",
                            color: "#fff",
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
                    ["Google Shopping", "Mittel", "+20-40% Umsatz", "1-2 Monate"],
                    ["Meta Retargeting", "Niedrig", "+10-20% Umsatz", "2-4 Wochen"],
                    [
                      "Produktseitenoptimierung",
                      "Mittel",
                      "+15-30% Conversion",
                      "2-4 Wochen",
                    ],
                    ["E-Mail-Flows", "Mittel", "+15-25% Umsatz", "1-2 Monate"],
                    [
                      "Versandkostenfrei-Schwelle",
                      "Niedrig",
                      "+10-15% AOV",
                      "Sofort",
                    ],
                  ].map(([strategie, aufwand, impact, zeitrahmen], i) => (
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
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      >
                        {strategie}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {aufwand}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#f59e0b",
                          fontWeight: 600,
                        }}
                      >
                        {impact}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {zeitrahmen}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                Steigere deinen Shop-Umsatz
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
                Wir implementieren die passenden Strategien f&uuml;r deinen
                Online-Shop &mdash; von Google Shopping und Meta Ads bis hin zu
                E-Mail-Flows und Conversion-Optimierung.
              </p>
              <Link
                href="/ge/e-commerce-shops/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                E-Commerce-L&ouml;sungen ansehen
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
                  color: "#f59e0b",
                }}
              >
                E-Commerce
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  margin: "10px 0",
                }}
              >
                Warum Kunden den Warenkorb verlassen (und wie du es behebst)
              </h3>
              <Link
                href="/ge/blog/warenkorbabbruch-beheben/"
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
                  color: "#ec4899",
                }}
              >
                Automatisierung
              </span>
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  margin: "10px 0",
                }}
              >
                E-Mail-Marketing f&uuml;r E-Commerce: Der komplette Leitfaden
              </h3>
              <Link
                href="/ge/blog/email-marketing-ecommerce/"
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
