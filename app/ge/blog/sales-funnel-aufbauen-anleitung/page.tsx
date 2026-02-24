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
              3. M&auml;rz 2026 &middot; 13 Min Lesezeit
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
              Wie man einen kompletten{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #3b82f6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sales Funnel
              </span>{" "}
              aufbaut
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Schritt-f&uuml;r-Schritt-Anleitung zum Aufbau eines effektiven
              Sales Funnels &mdash; von der Zielgruppenansprache (TOFU) bis
              zum Verkaufsabschluss (BOFU) &mdash; mit empfohlenen Tools in
              jeder Phase.
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
                Ein Sales Funnel (Verkaufstrichter) ist der Weg, den ein
                potenzieller Kunde vom ersten Kontakt mit deinem Unternehmen
                bis zum Kauf zur&uuml;cklegt. Jede Phase dieser Reise erfordert
                eine andere Botschaft, eine andere Art von Inhalten und ein
                anderes Ziel.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Das Problem? Die meisten Unternehmen konzentrieren sich
                ausschliesslich auf den oberen Teil des Funnels &mdash;
                Traffic generieren. Sie investieren in Anzeigen, SEO und Social
                Media, haben aber kein System, um Besucher in Leads und Leads
                in Kunden umzuwandeln. Das Ergebnis: Geld, das f&uuml;r
                Traffic ausgegeben wird, der nie konvertiert.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                }}
              >
                In diesem Leitfaden zeigen wir dir, wie du einen kompletten
                Funnel von Grund auf aufbaust, mit den richtigen Tools in jeder
                Phase. Das ist keine abstrakte Theorie &mdash; es ist ein
                umsetzbarer Plan, den du sofort implementieren kannst.
              </p>
            </div>
          </FadeInSection>

          {/* Funnel Framework */}
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
                Das Funnel-Framework: TOFU &rarr; MOFU &rarr; BOFU
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Bevor du mit dem Aufbau beginnst, musst du die 3 Phasen jedes
                Sales Funnels verstehen. Jede Phase hat einen eigenen Zweck
                und erfordert spezifische Taktiken:
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
                    title: "TOFU (Top of Funnel) — Bewusstsein",
                    desc: "Ziel: Die Aufmerksamkeit der richtigen Zielgruppe gewinnen. Die Menschen kennen dich noch nicht und wissen vielleicht nicht einmal, dass sie ein Problem haben, das du loesen kannst. Taktiken: Blogartikel, Social-Media-Inhalte, bezahlte Anzeigen, SEO, edukativer Content.",
                  },
                  {
                    title: "MOFU (Middle of Funnel) — Erwaegung",
                    desc: "Ziel: Besucher in Leads umwandeln und die Beziehung pflegen. Die Menschen wissen, dass sie ein Problem haben, und suchen nach Loesungen. Taktiken: Lead Magnets (E-Books, Checklisten), E-Mail-Nurture-Sequenzen, Webinare, Fallstudien, vertiefende Inhalte.",
                  },
                  {
                    title: "BOFU (Bottom of Funnel) — Entscheidung",
                    desc: "Ziel: Leads in zahlende Kunden umwandeln. Die Menschen sind kaufbereit, brauchen aber den letzten Anstoss. Taktiken: Verkaufsseiten, Demos, kostenlose Testversionen, Testimonials, zeitlich begrenzte Angebote.",
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
                Der kritische Fehler, den die meisten Unternehmen machen: Sie
                springen direkt von TOFU zu BOFU &mdash; und versuchen, sofort
                an einen Besucher zu verkaufen, der sie gerade erst entdeckt
                hat. Ohne die MOFU-Phase wird die Conversion Rate immer niedrig
                bleiben.
              </p>
            </div>
          </FadeInSection>

          {/* Building TOFU */}
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
                TOFU aufbauen: Die richtige Zielgruppe anziehen
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Der obere Teil des Funnels hat einen einzigen Zweck: die
                richtigen Personen auf dich aufmerksam zu machen. Nicht
                irgendein Traffic &mdash; sondern relevanter Traffic von
                Menschen, die zu Kunden werden k&ouml;nnten. Es gibt 3
                Hauptkan&auml;le f&uuml;r TOFU:
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
                    title: "Organische Inhalte (Blog, Video, Social Media)",
                    desc: "Erstelle Artikel, die die Fragen beantworten, die deine potenziellen Kunden stellen. Anleitungen, Tutorials, Ressourcenlisten — alles, was ihnen hilft, das Problem zu verstehen, das sie haben. Optimiere deine Inhalte fuer SEO, um langfristigen organischen Traffic zu gewinnen.",
                  },
                  {
                    title: "Bezahlte Akquise (Google Ads, Meta Ads)",
                    desc: "Bezahlte Anzeigen sind der schnellste Weg, TOFU-Traffic zu generieren. Google Search Ads erfassen Menschen mit Suchintention, waehrend Meta Ads (Facebook und Instagram) hervorragend fuer Awareness und das Erreichen neuer Zielgruppen funktionieren.",
                  },
                  {
                    title: "SEO und organischer Traffic",
                    desc: "Suchmaschinenoptimierung ist die langfristige Investition. Optimierte Blogartikel, Kategorieseiten und Evergreen-Content generieren konstanten Traffic ohne wiederkehrende Cost-per-Click-Kosten.",
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

              {/* Tool: Unbounce */}
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
                  Empfohlenes TOFU-Tool:{" "}
                  <a
                    href="#AFFILIATE_UNBOUNCE"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Unbounce
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Unbounce erm&ouml;glicht es dir, schnell Landing Pages zur
                  Lead-Erfassung zu erstellen, ohne Entwickler. Es bietet
                  integriertes A/B-Testing, Smart Traffic (leitet Besucher
                  automatisch zur Variante mit der h&ouml;chsten Conversion
                  Rate) und f&uuml;r Lead-Generierung optimierte Templates.
                  Ideal, um TOFU-Traffic in MOFU-Leads umzuwandeln.
                </p>
                <a
                  href="#AFFILIATE_UNBOUNCE"
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
                  Unbounce testen <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Building MOFU */}
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
                MOFU aufbauen: Leads pflegen und qualifizieren
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Du hast Traffic. Jetzt musst du Besucher in Leads umwandeln
                und eine Beziehung zu ihnen aufbauen, bis sie kaufbereit sind.
                MOFU ist die Phase, in der du Mehrwert im Austausch gegen
                Kontaktdaten bietest und diese Beziehung dann durch relevante
                Inhalte pflegst.
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
                    title: "Lead Magnets (E-Books, Checklisten, kostenlose Tools)",
                    desc: "Biete etwas Wertvolles im Austausch gegen eine E-Mail-Adresse. Ein PDF-Leitfaden, eine Checkliste, ein Online-Rechner, ein Template — alles, was ein konkretes Problem deiner Zielgruppe loest. Der Lead Magnet muss direkt mit dem Produkt oder der Dienstleistung zusammenhaengen, die du verkaufst.",
                  },
                  {
                    title: "E-Mail-Nurture-Sequenzen",
                    desc: "Nachdem du einen Lead erfasst hast, versuche nicht sofort zu verkaufen. Sende eine Sequenz von 5-7 E-Mails, die aufklaeren, Mehrwert bieten und Vertrauen aufbauen. Teile Fallstudien, biete praktische Tipps und positioniere dich als Experte in deinem Bereich.",
                  },
                  {
                    title: "Webinare und Demos",
                    desc: "Webinare sind extrem effektiv fuer B2B und komplexe Dienstleistungen. Biete eine kostenlose 30-45-minuetige Session an, die ein spezifisches Problem loest. Am Ende praesentiere deine Loesung als den logischen naechsten Schritt.",
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

              {/* Tool: ActiveCampaign */}
              <div
                style={{
                  padding: "24px",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="font-bold text-white"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "8px",
                  }}
                >
                  Empfohlenes Tool:{" "}
                  <a
                    href="#AFFILIATE_ACTIVECAMPAIGN"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    ActiveCampaign
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  ActiveCampaign ist eine der leistungsst&auml;rksten
                  Plattformen f&uuml;r E-Mail-Marketing und Automatisierung.
                  Es bietet integriertes Lead Scoring (vergibt Punkte an
                  Kontakte basierend auf ihren Aktionen), visuelle
                  Automatisierungssequenzen, erweiterte Segmentierung und ein
                  integriertes CRM. Perfekt f&uuml;r die MOFU-Phase, in der du
                  Leads pflegen und automatisch qualifizieren musst.
                </p>
                <a
                  href="#AFFILIATE_ACTIVECAMPAIGN"
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
                  ActiveCampaign testen <ArrowRight size={14} />
                </a>
              </div>

              {/* Tool: Manychat */}
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
                  Empfohlenes Tool:{" "}
                  <a
                    href="#AFFILIATE_MANYCHAT"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Manychat
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Manychat erm&ouml;glicht Conversational Marketing &uuml;ber
                  WhatsApp, Instagram-DMs und Facebook Messenger. Du kannst
                  automatisierte Flows erstellen, die auf Kommentare reagieren,
                  DMs senden, Leads qualifizieren und sie zur n&auml;chsten
                  Phase deines Funnels weiterleiten. Die &Ouml;ffnungsrate im
                  Chat liegt bei 80 %+ vs. 20-25 % bei E-Mail, was es ideal
                  f&uuml;r schnelles Nurturing macht.
                </p>
                <a
                  href="#AFFILIATE_MANYCHAT"
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
                  Manychat testen <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Building BOFU */}
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
                BOFU aufbauen: In Kunden konvertieren
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Deine Leads sind qualifiziert, sie vertrauen dir und sind fast
                kaufbereit. Jetzt brauchst du ein makelloses
                Conversion-Erlebnis, das jedes verbleibende Z&ouml;gern
                beseitigt. Hier sind die Schl&uuml;sselelemente eines
                effektiven BOFU:
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
                    title: "Optimierte Verkaufsseite",
                    desc: "Eine gute Verkaufsseite beantwortet alle Fragen und Einwaende des potenziellen Kunden. Struktur: klare Problemstellung, deine Loesung, konkrete Vorteile (nicht Features), Social Proof, Garantie und ein starker Call-to-Action. Jedes Element sollte den Besucher zur Entscheidung draengen.",
                  },
                  {
                    title: "Dringlichkeit und Verknappung (ethisch eingesetzt)",
                    desc: "Menschen schieben Entscheidungen von Natur aus auf. Zeitlich begrenzte Angebote, limitierte Plaetze oder Boni, die nur kurze Zeit verfuegbar sind, beschleunigen die Entscheidung. Wichtig: Die Dringlichkeit muss echt sein, nicht erfunden. Menschen spueren fehlende Authentizitaet.",
                  },
                  {
                    title: "Social Proof und Testimonials",
                    desc: "Bewertungen, Fallstudien, konkrete Zahlen (bediente Kunden, erzielte Ergebnisse), Kundenlogos. Nichts ueberzeugt besser als Geschichten anderer Kunden, die dasselbe Problem hatten und Ergebnisse erzielt haben. Video-Testimonials haben die groesste Wirkung.",
                  },
                  {
                    title: "Zahlungs- und Checkout-Optimierung",
                    desc: "Der Zahlungsprozess sollte so einfach wie moeglich sein. Reduziere die Anzahl der Schritte, verwende kurze Formulare, biete mehrere Zahlungsoptionen an, zeige Sicherheitssiegel und habe eine klare Rueckgabepolitik. Jedes zusaetzliche Formularfeld reduziert die Conversion Rate um 10-15 %.",
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

              {/* Tool: Kartra */}
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
                  Empfohlenes BOFU-Tool:{" "}
                  <a
                    href="#AFFILIATE_KARTRA"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{ color: CATEGORY_COLOR, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Kartra
                  </a>
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Kartra ist eine All-in-One-Plattform f&uuml;r den Aufbau
                  kompletter Funnels. Es umfasst einen Landing-Page-Builder,
                  E-Mail-Marketing, Checkout und Zahlungsabwicklung,
                  Membership-Sites und Analytics &mdash; alles an einem Ort.
                  Keine Integration von 5-6 verschiedenen Tools notwendig.
                  Ideal f&uuml;r Unternehmer und kleine Teams, die einen
                  kompletten Funnel ohne technische Komplexit&auml;t wollen.
                </p>
                <a
                  href="#AFFILIATE_KARTRA"
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
                  Kartra testen <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Funnel Metrics */}
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
                Funnel-Metriken, die du verfolgen solltest
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Jede Phase des Funnels hat ihre eigenen spezifischen Metriken.
                Wenn du nicht misst, kannst du nicht optimieren. Hier ist, was
                du auf jeder Ebene verfolgen solltest:
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
                      {["Phase", "Wichtige Metriken"].map(
                        (header) => (
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
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["TOFU", "Gesamttraffic, Click-through-Rate (CTR), Cost per Click (CPC), Reichweite"],
                      ["MOFU", "Lead-Conversion-Rate, E-Mail-Open/Click-Rate, Engagement, Cost per Lead"],
                      ["BOFU", "Verkaufs-Conversion-Rate, Durchschnittlicher Bestellwert (AOV), Kundenakquisitionskosten (CAC), ROI"],
                    ].map(([phase, metriken], i) => (
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
                          {phase}
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
                          {metriken}
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
                Die wichtigste Metrik, die nur wenige Unternehmen verfolgen:
                die &Uuml;bergangsraten zwischen den Phasen. Welcher
                Prozentsatz der TOFU-Besucher wird zu MOFU-Leads? Welcher
                Prozentsatz der MOFU-Leads wird zu BOFU-Kunden? Diese Raten
                zeigen dir genau, wo dein Funnel Menschen verliert.
              </p>
            </div>
          </FadeInSection>

          {/* Common Mistakes */}
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
                H&auml;ufige Funnel-Fehler
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Selbst ein gut durchdachter Funnel kann scheitern, wenn du
                einen dieser h&auml;ufigen Fehler machst:
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
                    gap: "10px",
                  }}
                >
                  {[
                    "Kein klares Wertversprechen — wenn Besucher nicht innerhalb von 5 Sekunden verstehen, warum sie dich waehlen sollten, gehen sie",
                    "Zu viele Schritte im Funnel — jeder zusaetzliche Schritt verliert 20-40 % der Menschen. Vereinfache so weit wie moeglich",
                    "Kein Follow-up fuer Nicht-Konvertierer — ohne Retargeting und Recovery-E-Mails verlierst du Leads dauerhaft",
                    "Ignorieren der mobilen Erfahrung — ueber 70 % des Traffics kommen vom Handy. Wenn dein Funnel nicht mobil-optimiert ist, verlierst du Geld",
                    "Inkonsistente Botschaft zwischen den Phasen — wenn deine Anzeige etwas verspricht und die Landing Page etwas anderes sagt, verschwindet das Vertrauen sofort",
                  ].map((mistake) => (
                    <li
                      key={mistake}
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
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
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
                Du m&ouml;chtest einen kompletten Sales Funnel aufbauen, weisst
                aber nicht, wo du anfangen sollst? Das Nesco Digital Team kann
                eine personalisierte digitale Strategie mit dem passenden
                Funnel f&uuml;r dein Unternehmen erstellen.
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
                    Conversion Rate: Der vollst&auml;ndige Optimierungs-Leitfaden
                  </h3>
                  <Link
                    href="/ge/blog/conversion-rate-leitfaden/"
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
