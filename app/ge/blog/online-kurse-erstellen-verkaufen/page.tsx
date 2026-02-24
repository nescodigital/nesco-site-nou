import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#3b82f6"; // Strategie blue

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
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
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
                color: CATEGORY_COLOR,
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
              28. Februar 2026 &middot; 14 Min Lesezeit
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
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Online-Kurse
              </span>{" "}
              erstellen und verkaufen in 2026
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Von der Ideenvalidierung bis zum Launch und zur Vermarktung
              &mdash; ein vollst&auml;ndiger Leitfaden mit Plattformvergleich
              und bew&auml;hrten Strategien, um Ihr Fachwissen in
              wiederkehrende Einnahmen umzuwandeln.
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
                Der Markt f&uuml;r Online-Bildung hat 2026 weltweit 375
                Milliarden Dollar &uuml;berschritten und w&auml;chst weiterhin
                mit &uuml;ber 14% pro Jahr. Das ist kein Trend mehr &mdash; es
                ist eine reife Branche, und Ersteller, die jetzt mit einem gut
                strukturierten Produkt einsteigen, haben eine echte Chance, eine
                wiederkehrende, skalierbare Einnahmequelle aufzubauen, die nicht
                von der Anzahl der Arbeitsstunden abh&auml;ngt.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der Unterschied zwischen einem Kurs, der konstante
                Verk&auml;ufe generiert, und einem, der auf einer Plattform
                verstaubt, liegt nicht in der Menge des Inhalts. Es geht darum,
                die Idee zu validieren, bevor man mit der Aufnahme beginnt, die
                richtige Plattform f&uuml;r das eigene Gesch&auml;ftsmodell zu
                w&auml;hlen und eine Launch-Strategie zu haben, die Nachfrage
                erzeugt, bevor das Produkt fertig ist.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In diesem Leitfaden gehen wir den kompletten Prozess in 5
                Schritten durch &mdash; von der Validierung bis zum
                fortlaufenden Marketing &mdash; mit einem detaillierten
                Vergleich der beliebtesten Online-Kurs-Plattformen.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 1: Validiere deine Kursidee */}
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
                Schritt 1: Validiere deine Kursidee
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der gr&ouml;sste Fehler, den Kursersteller machen, ist
                monatelang Inhalte f&uuml;r eine Idee zu produzieren, f&uuml;r
                die niemand bereit ist zu zahlen. Die Validierung kommt vor der
                Produktion, nicht danach.
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
                  So validierst du die Nachfrage:
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
                    "Recherchiere in Google Trends, ob dein Thema einen aufsteigenden oder stabilen Trend hat, keinen absteigenden",
                    "Analysiere direkte Wettbewerber — wenn es aehnliche Kurse gibt, die sich verkaufen, existiert der Markt",
                    "Erstelle eine Landingpage mit einem Early-Bird-Angebot und sieh, wie viele sich auf die Warteliste setzen",
                    "Fuehre ein Pilotprojekt mit 10-15 Teilnehmern zu einem reduzierten Preis durch und sammle echtes Feedback",
                    "Definiere deinen einzigartigen Ansatz — was machst du anders als die 50 bereits existierenden Kurse zum selben Thema",
                  ].map((item) => (
                    <li
                      key={item}
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
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
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
                Wenn du 50-100 Wartelisten-Anmeldungen sammelst oder 10-15
                Pilotpl&auml;tze verkaufst, hast du ausreichende Validierung.
                Du brauchst nicht Tausende von Abonnenten &mdash; du brauchst
                Menschen, die jetzt bereit sind zu zahlen.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 2: Strukturiere deinen Inhalt */}
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
                Schritt 2: Strukturiere deinen Kursinhalt
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Denke vom Ergebnis zum Inhalt, nicht umgekehrt. Frage dich:
                &bdquo;Was wird der Teilnehmer nach Abschluss dieses Moduls
                wissen oder k&ouml;nnen?&ldquo; Jedes Modul braucht ein klares,
                messbares Ergebnis, das du auf der Verkaufsseite versprechen
                kannst.
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
                    title: "Einf\u00FChrungsmodul",
                    desc: "Setze Erwartungen, pr\u00E4sentiere die Struktur und liefere einen Quick Win — ein kleines, aber konkretes Ergebnis, das der Teilnehmer in den ersten 30 Minuten erzielt. Das steigert die Abschlussrate dramatisch.",
                  },
                  {
                    title: "Kernmodule",
                    desc: "Der Hauptinhalt des Kurses. Jede Lektion l\u00F6st ein spezifisches Problem. Kombiniere Video (5-15 Min), Begleittexte, praktische \u00DCbungen und Quizze. \u00DCberschreite nicht 15 Minuten pro Video — die Aufmerksamkeit l\u00E4sst danach nach.",
                  },
                  {
                    title: "Fortgeschrittene Module",
                    desc: "Gehe tiefer in die Themen, die am wichtigsten sind. Fallstudien, fortgeschrittene Strategien, echte Templates. Diese trennen einen guten Kurs von einem aussergewoehnlichen.",
                  },
                  {
                    title: "Bonus-Ressourcen",
                    desc: "Herunterladbare Templates, Checklisten, Community-Zugang, Live-Q&A-Sitzungen. Boni erhoehen den wahrgenommenen Wert und rechtfertigen einen hoeheren Preis.",
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
                Die ideale Formel f&uuml;r einen 4-8 Wochen Kurs: 6-10 Module
                mit 3-5 Videolektionen pro Modul (jeweils 5-15 Min), begleitet
                von praktischen &Uuml;bungen und einem Abschlussprojekt, das
                die Kompetenz nachweist.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 3: Waehle die richtige Plattform */}
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
                Schritt 3: W&auml;hle die richtige Plattform
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Die Plattform, die du w&auml;hlst, bestimmt die
                Teilnehmererfahrung, die verf&uuml;gbaren Funktionen und wie
                einfach es ist zu skalieren. Hier ist ein schneller Vergleich
                der 5 wichtigsten Plattformen:
              </p>

              {/* Comparison Table */}
              <div style={{ overflowX: "auto", marginBottom: "32px" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "700px",
                  }}
                >
                  <thead>
                    <tr>
                      {[
                        "Plattform",
                        "Ideal f\u00FCr",
                        "Schl\u00FCsselfunktion",
                        "Startpreis",
                        "Transaktionsgeb\u00FChr?",
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
                      [
                        "LearnWorlds",
                        "Interaktives Lernen",
                        "SCORM, Quizze, Zertifikate",
                        "$24/Monat",
                        "Nein (ab Pro-Plan)",
                      ],
                      [
                        "Thinkific",
                        "Anf\u00E4nger",
                        "Grossz\u00FCgiger kostenloser Plan, einfache Einrichtung",
                        "Kostenlos / $49/Monat",
                        "Nein",
                      ],
                      [
                        "Teachable",
                        "Mid-Range-Ersteller",
                        "Integrierte Marketing-Tools",
                        "$59/Monat",
                        "Ja (Basic-Plan)",
                      ],
                      [
                        "Udemy",
                        "Eingebautes Publikum",
                        "Marktplatz mit Millionen Nutzern",
                        "Kostenlos",
                        "Ja (50-75%)",
                      ],
                      [
                        "Kajabi",
                        "Premium All-in-One",
                        "Kurse + Website + E-Mail + Funnels",
                        "$149/Monat",
                        "Nein",
                      ],
                    ].map(
                      ([plattform, ideal, funktion, preis, gebuehr], i) => (
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
                            {plattform}
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
                            {ideal}
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
                            {funktion}
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
                            {preis}
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
                            {gebuehr}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* Platform Review Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* LearnWorlds (affiliate) */}
                <div
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
                    <a
                      href="https://get.learnworlds.com/c6ygklqwgfl2"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        color: CATEGORY_COLOR,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      LearnWorlds
                    </a>{" "}
                    &mdash; Am besten f&uuml;r interaktives Lernen
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Wenn du wirklich interaktive Kurse erstellen m&ouml;chtest,
                    ist LearnWorlds die Top-Wahl. Es unterst&uuml;tzt
                    SCORM-Inhalte, fortgeschrittene Quizze mit bedingtem
                    Feedback, anpassbare Zertifikate und einen interaktiven
                    Videoplayer, der es erm&ouml;glicht, Fragen direkt in
                    Videos einzubetten. Ideal f&uuml;r Zertifizierungskurse,
                    Unternehmensschulungen oder jedes Programm, bei dem die
                    Wissens&uuml;berpr&uuml;fung wichtig ist. Die
                    Erstellungsoberfl&auml;che ist intuitiv, und der integrierte
                    Website-Builder erm&ouml;glicht es, eine komplette Website
                    ohne Entwickler zu erstellen.
                  </p>
                  <a
                    href="https://get.learnworlds.com/c6ygklqwgfl2"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(59,130,246,0.10)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "8px",
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    LearnWorlds testen <ArrowRight size={14} />
                  </a>
                </div>

                {/* Thinkific (affiliate) */}
                <div
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
                    <a
                      href="#AFFILIATE_THINKIFIC"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        color: CATEGORY_COLOR,
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Thinkific
                    </a>{" "}
                    &mdash; Am besten f&uuml;r Anf&auml;nger
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Wenn du deinen ersten Kurs startest und etwas Einfaches,
                    aber Professionelles suchst, ist Thinkific schwer zu
                    schlagen. Der kostenlose Plan erm&ouml;glicht die
                    Ver&ouml;ffentlichung eines Kurses ohne Vorabkosten, und
                    das Upgrade auf einen bezahlten Plan schaltet eine
                    benutzerdefinierte Domain, Drip Content und erweiterte
                    Integrationen frei. Die Drag-and-Drop-Oberfl&auml;che macht
                    die Kurserstellung extrem intuitiv. Es erhebt keine
                    Transaktionsgeb&uuml;hren auf keinem Plan, was bedeutet,
                    dass du 100% deiner Einnahmen beh&auml;ltst (abz&uuml;glich
                    der Geb&uuml;hren des Zahlungsanbieters).
                  </p>
                  <a
                    href="#AFFILIATE_THINKIFIC"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "12px",
                      padding: "8px 16px",
                      background: "rgba(59,130,246,0.10)",
                      border: "1px solid rgba(59,130,246,0.18)",
                      borderRadius: "8px",
                      color: CATEGORY_COLOR,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Thinkific testen <ArrowRight size={14} />
                  </a>
                </div>

                {/* Teachable (non-affiliate) */}
                <div
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
                    Teachable &mdash; Beliebte Mid-Range-Option
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Teachable nimmt einen soliden Mittelplatz auf dem Markt ein.
                    Es bietet integrierte Marketing-Tools (Upsells, Order Bumps,
                    Affiliate-Programme), einen gut optimierten Checkout und
                    Unterst&uuml;tzung f&uuml;r 1:1-Coaching neben Kursen.
                    Der Nachteil ist, dass der Basic-Plan eine
                    Transaktionsgeb&uuml;hr von 5% erhebt, die sich bei hohem
                    Volumen schnell summiert.
                  </p>
                </div>

                {/* Udemy (non-affiliate) */}
                <div
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
                    Udemy &mdash; Grosses Publikum, wenig Kontrolle
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Udemy funktioniert als Marktplatz &mdash; das Publikum ist
                    bereits da, mit &uuml;ber 70 Millionen Studenten. Das
                    Problem ist, dass du keine Kontrolle &uuml;ber die
                    Preisgestaltung hast (Udemy f&uuml;hrt h&auml;ufig
                    aggressive Rabatte durch), du keinen Zugang zu den E-Mails
                    der Studenten hast und die Provision 50-75% der
                    plattformgenerierten Verk&auml;ufe betr&auml;gt. Es kann als
                    Sichtbarkeitstool n&uuml;tzlich sein, aber nicht als
                    prim&auml;re Einnahmequelle.
                  </p>
                </div>

                {/* Kajabi (non-affiliate) */}
                <div
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
                    Kajabi &mdash; Premium All-in-One
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Kajabi vereint alles auf einer einzigen Plattform:
                    Online-Kurse, Website-Builder, E-Mail-Marketing,
                    Verkaufstrichter, Communities und Podcasting. Es ist die
                    ideale L&ouml;sung, wenn du die Notwendigkeit von
                    Integrationen mit anderen Tools komplett eliminieren
                    m&ouml;chtest. Der grosse Nachteil ist der Preis &mdash; ab
                    $149/Monat, was es nur f&uuml;r Ersteller geeignet macht,
                    die bereits konstante Einnahmen haben und alles auf einer
                    Plattform konsolidieren m&ouml;chten.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Schritt 4: Erstelle deinen Inhalt */}
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
                Schritt 4: Erstelle deinen Kursinhalt
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Du brauchst kein professionelles Studio, um einen
                qualitativ hochwertigen Kurs zu erstellen. Du brauchst
                anst&auml;ndige Ausr&uuml;stung, eine klare Methode und die
                Disziplin, konsistent zu liefern.
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
                  Wesentliche Ausr&uuml;stung:
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
                    "Kamera: eine moderne Laptop-Webcam (1080p) reicht fuer den Anfang. Upgrade auf eine DSLR/Mirrorless-Kamera, wenn das Budget es erlaubt",
                    "Mikrofon: die wichtigste Investition. Ein USB-Mikrofon fuer 50-100 EUR macht den Unterschied zwischen Amateur und Profi",
                    "Beleuchtung: ein Ringlicht oder zwei Softboxen. Natuerliches Licht von einem grossen Fenster funktioniert auch",
                    "Aufnahmesoftware: OBS (kostenlos) fuer Bildschirmaufnahmen, Loom fuer schnelle Tutorials, Camtasia zum Bearbeiten",
                    "Hintergrund: ein sauberer Hintergrund, kein Durcheinander. Eine einfache Wand oder ein Greenscreen reichen aus",
                  ].map((item) => (
                    <li
                      key={item}
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
                      <span style={{ color: CATEGORY_COLOR, flexShrink: 0 }}>
                        &#9679;
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
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "#fff" }}>Aufnahmetipps:</strong>{" "}
                Filme in Batches &mdash; nimm 3-5 Lektionen in einer einzigen
                Sitzung auf. Verwende ein Skript oder zumindest Stichpunkte
                f&uuml;r jede Lektion. Sprich direkt in die Kamera und halte
                ein energisches Tempo. Perfektioniere nicht zu viel &mdash; ein
                guter Kurs, der jetzt geliefert wird, ist wertvoller als ein
                perfekter Kurs, der nie fertig wird.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: "#fff" }}>
                  Bearbeitungs-Workflow:
                </strong>{" "}
                Schneide lange Pausen und offensichtliche Fehler, f&uuml;ge
                Folien oder Bildschirmaufnahmen hinzu, wenn du komplexe
                Konzepte erkl&auml;rst, f&uuml;ge Untertitel hinzu (erh&ouml;ht
                die Zug&auml;nglichkeit und das Engagement um 40%) und
                exportiere in 1080p. F&uuml;ge keine unn&ouml;tigen Effekte
                hinzu &mdash; Inhalt z&auml;hlt mehr als Produktion.
              </p>
            </div>
          </FadeInSection>

          {/* Schritt 5: Starte und vermarkte deinen Kurs */}
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
                Schritt 5: Starte &amp; vermarkte deinen Kurs
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Ein Launch ist kein eint&auml;giges Event &mdash; es ist ein
                Prozess, der Wochen vorher beginnt und Monate danach
                weitergeht. Hier ist die Strategie in 3 Phasen:
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
                    title: "Pre-Launch (2-4 Wochen vorher)",
                    desc: "Baue eine E-Mail-Liste mit kostenlosem, wertvollem Inhalt auf (Mini-Kurs, E-Book, kostenloses Webinar). Veroeffentliche Social-Media-Inhalte, die deine Expertise zum Thema demonstrieren. Sammle Testimonials von Pilotteilnehmern. Schaffe Dringlichkeit mit einem zeitlich begrenzten Early-Bird-Angebot.",
                  },
                  {
                    title: "Launch-Woche",
                    desc: "Sende eine E-Mail-Sequenz (3-5 E-Mails in 7 Tagen): Ankuendigung, Vorteile, Testimonials, Deadline, letzte Erinnerung. Biete einen Early-Bird-Preis mit echtem Countdown. Veranstalte ein Live-Launch-Webinar, bei dem du Mehrwert lieferst und den Kurs praesentierst. Aktiviere dein Netzwerk — bitte Partner und Freunde um Verbreitung.",
                  },
                  {
                    title: "Fortlaufende Promotion (nach dem Launch)",
                    desc: "SEO: Erstelle Blogartikel zu Themen rund um deinen Kurs mit Links zur Verkaufsseite. Bezahlte Werbung: Teste Facebook Ads und Google Ads mit spezifischen Zielgruppen. Affiliate-Programm: Biete 20-40% Provision anderen Erstellern, die deinen Kurs bewerben. Monatliche Webinare: Veranstalte kostenlose Sessions, die mit einem Angebot fuer den Kurs enden.",
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
                Die goldene Regel: Verlasse dich nicht auf nur einen
                Promotionskanal. Kurse, die konstante Einnahmen generieren,
                kombinieren mindestens 3 Traffic-Quellen &mdash; typischerweise
                E-Mail-Marketing, organischen Content (SEO + Social Media) und
                bezahlte Werbung. Diversifikation sch&uuml;tzt dich vor
                Algorithmus-&Auml;nderungen oder Kostensteigerungen auf einem
                einzelnen Kanal.
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
                Entdecke deine digitale Strategie
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
                Hast du einen Online-Kurs und m&ouml;chtest ihn effektiv
                bewerben? Oder brauchst du eine komplette digitale Strategie,
                die auch die Kurserstellung als Teil deines Funnels einschliesst?
                Das Nesco Digital Team kann dir helfen.
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
                      color: CATEGORY_COLOR,
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
                      color: CATEGORY_COLOR,
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
                    Sales Funnel aufbauen &mdash; Anleitung
                  </h3>
                  <Link
                    href="/ge/blog/sales-funnel-aufbauen-anleitung/"
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
