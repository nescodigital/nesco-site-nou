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
              13. Februar 2026 &middot; 7 Min Lesezeit
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
              Was ist ein Growth Sprint und wie{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                beschleunigt er das Wachstum?
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
              6 Wochen. Ein einziges Ziel. Audit, Strategie, Umsetzung,
              Optimierung und Ergebnisse &mdash; komprimiert in einen
              intensiven Sprint, der Monate des Wartens ersetzt.
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
                Traditionelle Agenturmodelle basieren auf monatlichen Retainern.
                Du zahlst monatlich, erh&auml;ltst Deliverables und wartest auf
                Ergebnisse. Das Problem? Keine Dringlichkeit. Die Strategie
                zieht sich &uuml;ber Monate, die Umsetzung ist fragmentiert,
                und die ersten echten Ergebnisse zeigen sich erst nach 3 bis 6
                Monaten &mdash; wenn &uuml;berhaupt.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ein <strong style={{ color: "#fff" }}>Growth Sprint</strong> ist
                das Gegenteil dieses Modells. Es ist ein intensives 6-w&ouml;chiges
                Engagement, strukturiert in klare Phasen: Audit &rarr; Strategie
                &rarr; Umsetzung &rarr; Optimierung &rarr; Ergebnisse. Jede
                Woche hat konkrete Ziele und messbare Deliverables.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Es ist f&uuml;r Unternehmen konzipiert, die es sich nicht
                leisten k&ouml;nnen zu warten. Diejenigen, die schnelles,
                messbares Wachstum mit einem festen Budget und einem straffen
                Zeitplan brauchen. Statt 3 Monate f&uuml;r
                &bdquo;Onboarding&ldquo; zu verlieren, bist du in einem Growth
                Sprint bereits in der dritten Woche in der Umsetzung.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Das Problem mit dem traditionellen Modell */}
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
                Das Problem mit dem traditionellen Agenturmodell
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Monatliche Retainer sind seit &uuml;ber einem Jahrzehnt der
                Branchenstandard. Aber f&uuml;r viele Unternehmen &mdash;
                insbesondere solche in fr&uuml;hen Phasen oder
                Skalierungsphasen &mdash; bringt dieses Modell strukturelle
                Probleme mit sich:
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
                    title: "Kein Gef\u00fchl der Dringlichkeit",
                    desc: "Wenn der Vertrag \u00fcber 6 bis 12 Monate l\u00e4uft, gibt es keinen Druck f\u00fcr schnelle Ergebnisse. Deliverables werden gestreckt, Meetings h\u00e4ufen sich, aber die echte Wirkung verz\u00f6gert sich.",
                  },
                  {
                    title: "Strategie ist von der Umsetzung getrennt",
                    desc: "Ein Team erstellt die Strategie, ein anderes setzt sie um. Informationen gehen zwischen Abteilungen verloren und die urspr\u00fcngliche Vision verw\u00e4ssert sich.",
                  },
                  {
                    title: "2-3 Monate Onboarding",
                    desc: "Bevor die echte Arbeit beginnt, brauchen traditionelle Agenturen Monate des \"Kennenlernens\", ausgedehnte Audits und Abstimmungsmeetings. W\u00e4hrenddessen zahlst du, ohne Ergebnisse zu sehen.",
                  },
                  {
                    title: "Diffuse Verantwortlichkeit",
                    desc: "KPIs sind vage, Berichte zeigen Vanity-Metriken (Impressionen, Reichweite), und wenn du fragst \"welche konkreten Ergebnisse haben wir?\", ist die Antwort immer \"wir brauchen mehr Zeit\".",
                  },
                  {
                    title: "H\u00f6heres finanzielles Risiko",
                    desc: "Du verpflichtest dich f\u00fcr 6 bis 12 Monate mit einer monatlichen Geb\u00fchr, ohne Garantie, dass das Modell zu dir passt. Wenn es nicht funktioniert, hast du Monate an Budget verloren.",
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

          {/* Section: Wie ein Growth Sprint funktioniert */}
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
                Wie ein Growth Sprint funktioniert
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Ein Nesco Digital Growth Sprint folgt einem festen 6-Wochen-Zeitplan
                mit klar definierten Phasen. Jede Woche hat spezifische Ziele
                und konkrete Deliverables:
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
                    week: "Woche 1",
                    title: "Tiefenaudit",
                    desc: "Vollst\u00e4ndige Analyse der bestehenden Analytics, Wettbewerber, Marktlandschaft und aktuellen Performance. Wir identifizieren L\u00fccken, Chancen und Quick Wins. Ergebnis: umsetzbarer Audit-Bericht mit klaren Schlussfolgerungen.",
                  },
                  {
                    week: "Woche 2",
                    title: "Strategie & Roadmap",
                    desc: "Basierend auf dem Audit erstellen wir die Strategie: priorit\u00e4re Kan\u00e4le, Budgetverteilung, Ziel-KPIs, kreative Richtung und Umsetzungskalender. Alles dokumentiert in einer klaren Roadmap.",
                  },
                  {
                    week: "Woche 3-4",
                    title: "Schnelle Umsetzung",
                    desc: "Kampagnen gehen live. Optimierte Landing Pages, vollst\u00e4ndiges Tracking-Setup, getestete Creatives, konfigurierte Zielgruppen. Innerhalb von zwei Wochen haben wir bereits echte Performance-Daten.",
                  },
                  {
                    week: "Woche 5",
                    title: "Optimierung",
                    desc: "A/B-Tests f\u00fcr Creatives und Landing Pages, Budget-Umverteilung auf das, was funktioniert, Iteration bei Messaging und Zielgruppen. Jede Entscheidung basiert auf Daten, nicht auf Annahmen.",
                  },
                  {
                    week: "Woche 6",
                    title: "Ergebnis-Review + Skalierungsplan",
                    desc: "Wir analysieren, was funktioniert hat, was nicht, und erstellen den Skalierungsplan: welche Kan\u00e4le verst\u00e4rken, was stoppen, was weiter testen. Du erh\u00e4ltst ein vollst\u00e4ndiges Playbook.",
                  },
                ].map((item) => (
                  <div
                    key={item.week}
                    style={{
                      padding: "24px",
                      background: "#0a0a0a",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#3b82f6",
                      }}
                    >
                      {item.week}
                    </span>
                    <h3
                      className="font-bold text-white"
                      style={{
                        fontSize: "1rem",
                        marginBottom: "8px",
                        marginTop: "8px",
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

          {/* Section: Growth Sprint vs Traditioneller Retainer */}
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
                Growth Sprint vs. Traditioneller Retainer
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Um die Unterschiede besser zu verstehen, hier ein
                direkter Vergleich beider Modelle:
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
                        "Aspekt",
                        "Growth Sprint",
                        "Traditioneller Retainer",
                      ].map((header) => (
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
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Dauer", "6 fokussierte Wochen", "Laufend (3-12 Monate)"],
                      ["Geschwindigkeit bis Ergebnisse", "2-3 Wochen", "2-3 Monate"],
                      ["Bindung", "Festes Projekt", "Monatlich wiederkehrend"],
                      ["Risiko", "Gering (definierter Umfang)", "H\u00f6her (lange Bindung)"],
                      ["Fokus", "1-2 priorit\u00e4re Kan\u00e4le", "Alle Kan\u00e4le gleichzeitig"],
                      ["Verantwortlichkeit", "Klare KPIs ab Tag 1", "Oft vage Deliverables"],
                      ["Investition", "Festes Budget", "Variable monatliche Geb\u00fchren"],
                      ["Ideal f\u00fcr", "Testen, Pivotieren, Skalieren", "Etablierte, stabile Marken"],
                    ].map(([aspect, sprint, retainer], i) => (
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
                          {aspect}
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
                          {sprint}
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
                          {retainer}
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
                Ein Growth Sprint ersetzt nicht unbedingt einen langfristigen
                Retainer. Aber er ist der ideale Weg, um{" "}
                <strong style={{ color: "#fff" }}>schnell zu validieren</strong>,
                was funktioniert, bevor du dich f&uuml;r Monate verpflichtest.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Fuer wen ist es geeignet */}
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
                F&uuml;r wen ist ein Growth Sprint geeignet
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ein Growth Sprint ist nicht f&uuml;r jeden. Aber wenn du dich
                in mindestens zwei der folgenden Szenarien wiederfindest, ist
                es wahrscheinlich das richtige Modell f&uuml;r dich:
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
                  "Du launchst ein neues Produkt oder eine neue Dienstleistung und brauchst schnelle Traktion",
                  "Du wechselst die Agentur und willst sofortige Ergebnisse, nicht noch 3 Monate Onboarding",
                  "Du bist ein Startup, das schnelle Marktvalidierung braucht",
                  "Du hast einen E-Commerce-Shop und betrittst einen neuen Markt oder ein neues Segment",
                  "Du m\u00f6chtest den ROI von bezahlter Werbung testen, bevor du ein gro\u00dfes Budget investierst",
                  "Du hast eine saisonale Spitze, die sich n\u00e4hert, und musst jetzt bereit sein",
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
                Wenn du hingegen eine etablierte Marke mit festen
                Marketing-Prozessen hast und kontinuierliche Betreuung
                &uuml;ber 5+ Kan&auml;le ben&ouml;tigst, k&ouml;nnte ein
                traditioneller Retainer besser passen. Der Growth Sprint ist
                f&uuml;r diejenigen, die{" "}
                <strong style={{ color: "#fff" }}>
                  Geschwindigkeit und Klarheit
                </strong>{" "}
                brauchen, nicht Autopilot-Kontinuit&auml;t.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Typische Ergebnisse */}
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
                Typische Ergebnisse nach 6 Wochen
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Jedes Unternehmen ist anders, aber am Ende eines Growth Sprints
                haben unsere Kunden typischerweise:
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
                    gap: "14px",
                  }}
                >
                  {[
                    "Klare Daten dar\u00fcber, welche Kan\u00e4le funktionieren und welche nicht \u2014 ohne Ratespiele",
                    "Erste Conversions und Leads aus bezahlten Kampagnen, mit dokumentiertem Cost-per-Lead",
                    "Optimierte Landing Pages mit echten A/B-Test-Daten",
                    "Eine dokumentierte Skalierungsstrategie: was verst\u00e4rken, was stoppen, was weiter testen",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "rgba(255,255,255,0.5)",
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
              </div>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                Das Ziel ist nicht nur, in 6 Wochen Ergebnisse zu erzielen,
                sondern ein{" "}
                <strong style={{ color: "#fff" }}>getestetes Playbook</strong>{" "}
                zu haben, das du in den folgenden Monaten nutzen kannst &mdash;
                ob du mit uns weiterarbeitest oder die Umsetzung
                internalisierst.
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
                Starte einen Growth Sprint
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
                Erfahre, wie das Growth-Sprint-Modell funktioniert, was es
                beinhaltet und wie du Monate an Wachstum in nur 6 fokussierte
                Wochen komprimieren kannst.
              </p>
              <Link
                href="/ge/growth-sprint-bildung/"
                className="btn-primary"
              >
                Growth Sprint entdecken <ArrowRight size={16} />
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
                    Digitale Marketing-Strategie Schritt f&uuml;r Schritt
                    (Leitfaden 2026)
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
