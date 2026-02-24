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
                background: "rgba(245,158,11,0.10)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              E-Commerce
            </span>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "18px",
                marginTop: "16px",
              }}
            >
              9. Februar 2026 &middot; 10 Min. Lesezeit
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
              Conversion Rate: Was sie ist, wie man sie berechnet{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #f59e0b 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                und verbessert
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
              Deine Website bekommt Traffic, aber konvertieren die Besucher
              wirklich? Die Conversion Rate ist die wichtigste Kennzahl zur
              Messung der Marketing-Effektivitat. Schon eine Verbesserung von
              nur 1% kann Tausende Euro zusatzlichen Umsatz bedeuten.
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
                Du investierst in Google Ads, Meta Ads, SEO, E-Mail-Marketing
                &mdash; aber wie viele dieser Besucher tun tatsachlich das, was
                du willst? Ein Formular ausfullen, in den Warenkorb legen,
                kaufen? Wenn du deine Conversion Rate nicht misst, fliegst du
                im Blindflug.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                In diesem umfassenden Leitfaden erklaren wir, was die
                Conversion Rate ist, wie du sie korrekt berechnest, welche
                Branchen-Benchmarks gelten und &mdash; am wichtigsten &mdash;{" "}
                <strong style={{ color: "#fff" }}>
                  12 getestete CRO-Techniken
                </strong>
                , die du ab heute umsetzen kannst.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Was ist die Conversion Rate */}
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
                Was ist die Conversion Rate?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Die Conversion Rate ist der Prozentsatz der Website-Besucher,
                die eine gewunschte Aktion ausfuhren. Die Formel ist einfach:
              </p>
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "#f59e0b",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Conversion Rate = (Anzahl Conversions / Gesamtbesucher)
                  &times; 100
                </p>
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Es gibt zwei Haupttypen von Conversions:
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
                  "Makro-Conversions: primare Aktionen (Kauf, Lead generiert, bezahltes Abonnement)",
                  "Mikro-Conversions: Zwischenschritte (Newsletter-Anmeldung, In den Warenkorb, Ressourcen-Download)",
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
                    <span style={{ color: "#f59e0b", flexShrink: 0 }}>
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
                <strong style={{ color: "#fff" }}>Beispiel:</strong> Wenn dein
                Online-Shop 10.000 Besucher pro Monat hat und 250 davon kaufen,
                betragt deine Conversion Rate{" "}
                <strong style={{ color: "#fff" }}>2,5%</strong>.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Branchen-Benchmarks */}
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
                Branchen-Benchmarks
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Eine &bdquo;gute&rdquo; Conversion Rate hangt von der Branche,
                dem Geschaftsmodell und dem Conversion-Typ ab. Hier sind die
                aktuellen Durchschnittswerte:
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
                      {["Branche", "Durchschnitt", "Gut", "Exzellent"].map(
                        (h) => (
                          <th
                            key={h}
                            style={{
                              background: "#111",
                              color: "#fff",
                              padding: "14px 18px",
                              borderBottom: "2px solid #f59e0b",
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
                      ["E-Commerce (gesamt)", "2,5 – 3,0%", "3,5%+", "5%+"],
                      ["Mode / Bekleidung", "1,5 – 2,5%", "3%+", "4,5%+"],
                      ["Elektronik", "1,0 – 2,0%", "2,5%+", "4%+"],
                      ["Gesundheit / Beauty", "3,0 – 4,0%", "5%+", "7%+"],
                      ["B2B SaaS (Trial)", "3,0 – 5,0%", "7%+", "10%+"],
                      ["Lead-Generierung", "2,5 – 5,0%", "8%+", "12%+"],
                      ["Lebensmittel / Grocery", "4,0 – 6,0%", "8%+", "10%+"],
                    ].map(([branche, durchschnitt, gut, exzellent], i) => (
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
                          {durchschnitt}
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
                          {gut}
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
                          {exzellent}
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
                Wenn du unter dem Branchendurchschnitt liegst, gibt es enormes
                Wachstumspotenzial. Wenn du auf &bdquo;gutem&rdquo; Niveau
                bist, konnen inkrementelle Optimierungen den Unterschied
                zwischen Gewinn und Verlust ausmachen.
              </p>
            </div>
          </FadeInSection>

          {/* Section: 12 getestete CRO-Techniken */}
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
                12 getestete CRO-Techniken
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Diese Techniken sind uber Hunderte von Projekten und
                Fallstudien validiert. Setze sie nacheinander um und miss die
                Auswirkung jeder einzelnen:
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
                    title: "1. Geschwindigkeitsoptimierung",
                    desc: "Jede Sekunde Verzogerung reduziert die Conversions um ~7%. Komprimiere Bilder, nutze ein CDN, minimiere CSS/JS und strebe einen LCP unter 2,5 Sekunden an.",
                  },
                  {
                    title: "2. Navigation vereinfachen",
                    desc: "Das Paradox der Wahl: Je mehr Optionen du anbietest, desto schwerer fallt die Entscheidung. Halte dein Menu sauber mit maximal 5-7 Hauptkategorien.",
                  },
                  {
                    title: "3. Social Proof",
                    desc: "Bewertungen, Testimonials, Vertrauens-Badges, Anzahl bedienter Kunden. 92% der Verbraucher lesen Bewertungen, bevor sie kaufen.",
                  },
                  {
                    title: "4. Klare und sichtbare CTAs",
                    desc: "Eine primare Aktion pro Seite. Der Button muss sichtbar sein, mit nutzenorientiertem Text (nicht nur 'Absenden', sondern 'Kostenloses Angebot erhalten').",
                  },
                  {
                    title: "5. Mobile-First-Design",
                    desc: "Uber 60% des Traffics kommt von Mobilgeraten. Wenn die mobile Erfahrung schlecht ist, verlierst du die meisten Besucher, bevor sie den Checkout erreichen.",
                  },
                  {
                    title: "6. Formularfelder reduzieren",
                    desc: "Jedes entfernte Feld erhoht die Abschlussrate um 5-10%. Frage nur nach unbedingt notwendigen Informationen; den Rest kannst du spater erfassen.",
                  },
                  {
                    title: "7. Dringlichkeit erzeugen",
                    desc: "Begrenzter Bestand, Countdown-Timer, 24h-Angebote. Echte Dringlichkeit (nicht gefalschte) lost sofortiges Handeln aus und reduziert das Aufschieben.",
                  },
                  {
                    title: "8. Kostenlose Versandschwelle",
                    desc: "Zeige an, wie viel noch bis zum kostenlosen Versand fehlt. Der durchschnittliche Bestellwert steigt um 15-30%, wenn die Schwelle strategisch gesetzt wird.",
                  },
                  {
                    title: "9. Gast-Checkout-Option",
                    desc: "28% der Kunden brechen den Warenkorb ab, wenn sie gezwungen werden, ein Konto zu erstellen. Biete Gast-Checkout an und schlage die Kontoerstellung nach der Bestellung vor.",
                  },
                  {
                    title: "10. Hochwertige Produktbilder",
                    desc: "360-Grad-Ansichten, Zoom, Lifestyle-Bilder. Kunden konnen das Produkt nicht anfassen — Bilder sind ihre einzige Referenz. Die Investition rechnet sich schnell.",
                  },
                  {
                    title: "11. Live-Chat / Chatbot",
                    desc: "Beantworte Einwande in Echtzeit, genau im Moment der Entscheidung. Ein gut konfigurierter Chatbot kann die Conversions um 10-20% steigern.",
                  },
                  {
                    title: "12. Alles A/B-testen",
                    desc: "Headlines, CTAs, Layouts, Farben, Bilder. Nicht vermuten — testen. Datengetriebene Entscheidungen schlagen immer die Intuition.",
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

          {/* Section: Wie man A/B-Tests richtig durchfuhrt */}
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
                Wie man A/B-Tests richtig durchfuhrt
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                A/B-Testing ist der Motor von CRO. Ohne es sind Optimierungen
                nur Raterei. Hier ist der Prozess in 4 Schritten:
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
                  "Wahle ein einzelnes Element zum Testen (Headline, CTA, Bild, Layout) — niemals mehrere gleichzeitig",
                  "Verwende ein spezialisiertes Tool: VWO, Optimizely oder Google Analytics 4 mit der Experiment-Funktion",
                  "Berechne die erforderliche Stichprobengrosse vor dem Start (mindestens 1.000 Besucher pro Variante)",
                  "Warte auf eine statistische Signifikanz von 95%+, bevor du eine Entscheidung triffst. Beende den Test nicht vorzeitig",
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
                    <span style={{ color: "#f59e0b", flexShrink: 0 }}>
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
                Unternehmen, die systematisch testen, haben Conversion Rates,
                die{" "}
                <strong style={{ color: "#fff" }}>2-3x hoher</strong> sind als
                die von Unternehmen, die sich auf Intuition verlassen. CRO ist
                kein einmaliges Projekt &mdash; es ist ein kontinuierlicher
                Prozess.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Die CRO-ROI-Formel */}
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
                Die CRO-ROI-Formel
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Schauen wir uns die konkreten Auswirkungen einer Verbesserung
                der Conversion Rate um nur 1% an:
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
                    ["Monatliche Besucher", "10.000"],
                    ["Durchschn. Bestellwert", "50 \u20AC"],
                    ["Aktuelle Conversion Rate (2%)", "200 Bestellungen = 10.000 \u20AC/Monat"],
                    ["Verbesserte Conversion Rate (3%)", "300 Bestellungen = 15.000 \u20AC/Monat"],
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
                      <span style={{ color: "#fff", fontWeight: 600 }}>
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
                      color: "#f59e0b",
                      paddingTop: "6px",
                    }}
                  >
                    <span>Zusatzlicher Monatsumsatz</span>
                    <span>+5.000 &euro; / Monat</span>
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
                <strong style={{ color: "#fff" }}>
                  5.000 &euro; mehr pro Monat aus dem GLEICHEN Traffic.
                </strong>{" "}
                Das sind 60.000 &euro; pro Jahr &mdash; ohne dein Werbebudget um
                einen einzigen Cent zu erhohen. CRO ist der profitabelste
                &bdquo;Akquise&rdquo;-Kanal, der existiert.
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
                Steigere deine Conversion Rate
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
                Unser CRO-Team analysiert deine Website, identifiziert
                Absprungpunkte und implementiert Optimierungen mit messbarem
                Einfluss. Mehr Conversions, ohne zusatzliches Budget.
              </p>
              <Link href="/ge/cro-loesungen/" className="btn-primary">
                CRO-Losungen entdecken <ArrowRight size={16} />
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
                    Warum Kunden den Warenkorb abbrechen (und wie du es behebst)
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
                    Wie du den Umsatz deines Online-Shops steigerst
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
