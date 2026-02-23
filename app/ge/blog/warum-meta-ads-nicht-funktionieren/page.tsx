import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#56db84";

const RELATED_ARTICLES = [
  {
    slug: "/ge/blog/kosten-interner-spezialist-vs-agentur/",
    title: "Was kostet ein interner Spezialist vs. eine Marketing-Agentur?",
    categoryLabel: "Strategie",
    categoryColor: "#3b82f6",
    image: "/blog/cost-specialist-vs-agentie.jpg",
    date: "20. Feb 2026",
    readTime: "8 Min",
  },
  {
    slug: "/ge/blog/seo-vs-google-ads/",
    title: "SEO vs. Google Ads: Was wählen bei begrenztem Budget?",
    categoryLabel: "SEO",
    categoryColor: "#14b8a6",
    image: "/blog/seo-vs-google-ads.jpg",
    date: "15. Feb 2026",
    readTime: "9 Min",
  },
];

export default function WarumMetaAdsNichtFunktionierenPage() {
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
                "radial-gradient(circle, rgba(86,219,132,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span className="badge mb-4">Paid Ads</span>
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
                18. Feb 2026
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
                10 Min Lesezeit
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
              Warum funktionieren deine Meta Ads{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                nicht?
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
              Wenn du Geld für Facebook- und Instagram-Ads ohne Ergebnisse
              ausgibst, ist die Plattform nicht das Problem. Hier sind die
              7 Fehler, die deine Kampagnen sabotieren.
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
          <FadeInSection>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Meta Ads — also Werbeanzeigen auf Facebook und Instagram — sind nach wie vor einer der effektivsten Kanäle im Performance Marketing. Milliarden von Nutzern, granulares Targeting, leistungsstarke Algorithmen. Und trotzdem hören wir jede Woche denselben Satz: &ldquo;Wir haben es probiert, aber es funktioniert nicht.&rdquo;
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die Wahrheit? In 95 Prozent der Fälle liegt das Problem nicht an der Plattform. Es liegt an der Umsetzung. Nach der Analyse von hunderten Werbekonten haben wir die 7 häufigsten Fehler identifiziert, die Unternehmen daran hindern, profitabel auf Meta zu werben. Wenn du auch nur zwei oder drei dieser Fehler machst, kann das den Unterschied zwischen einem ROAS von 0,5 und 5,0 bedeuten.
            </p>
          </FadeInSection>

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
              1. Zu breites Targeting
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Der häufigste Fehler ist paradoxerweise der Versuch, so viele Menschen wie möglich zu erreichen. &ldquo;Unser Produkt ist für alle&rdquo; — das mag stimmen, aber dein Budget ist es nicht. Wenn du mit 500 Euro Budget eine Zielgruppe von 10 Millionen Menschen ansprichst, bekommt der Algorithmus nicht genug Daten, um zu lernen, wer wirklich konvertiert.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die Lösung: Starte mit einer klar definierten Kernzielgruppe. Nutze Interessen, Verhaltensweisen und demografische Eingrenzungen, um deine Audience auf 500.000 bis 2 Millionen zu reduzieren. Sobald der Algorithmus innerhalb dieser Gruppe gelernt hat, wer konvertiert, kannst du schrittweise erweitern. Broad Targeting funktioniert — aber erst mit ausreichend Conversion-Daten.
            </p>
          </FadeInSection>

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
              2. Generische Creatives ohne Hook
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Deine Anzeige konkurriert im Feed mit Urlaubsfotos, Memes und Stories von Freunden. Und du zeigst ein Stockfoto mit deinem Logo darauf? Das wird ignoriert. Punkt. Der Feed ist ein Aufmerksamkeits-Schlachtfeld, und generische Creatives verlieren diesen Kampf sofort.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Was funktioniert: Dein Creative braucht einen starken Hook in den ersten 3 Sekunden. Das kann eine provokante Frage sein, ein überraschender Fakt, ein Before-After-Vergleich oder ein echter Testimonial. Nutze UGC (User Generated Content), native Formate und Reels-Style-Videos. Die besten Meta Ads sehen nicht wie Werbung aus — sie sehen wie Content aus, der zufällig auch etwas verkauft.
            </p>
          </FadeInSection>

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
              3. Pixel nicht korrekt konfiguriert
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Das Meta Pixel ist das Gehirn deiner Kampagnen. Es trackt, wer auf deine Website kommt, was er tut und ob er konvertiert. Ohne korrekt eingerichtetes Pixel fährt der Algorithmus blind — und ein blinder Algorithmus verbrennt dein Budget.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Häufige Pixel-Fehler: Der Pixel ist nur auf der Startseite installiert, nicht auf allen Unterseiten. Events wie &ldquo;Add to Cart&rdquo;, &ldquo;Initiate Checkout&rdquo; oder &ldquo;Purchase&rdquo; sind nicht konfiguriert. Der Conversion-API-Server-Side-Tracking fehlt komplett. Oder das Pixel feuert mehrfach auf derselben Seite und verfälscht die Daten. Prüfe dein Pixel-Setup mit dem Meta Pixel Helper Chrome-Extension und stelle sicher, dass die Conversions API aktiviert ist.
            </p>
          </FadeInSection>

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
              4. Budget zu klein für die Lernphase
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Der Meta-Algorithmus braucht Daten, um zu lernen. Konkret: Jede Anzeigengruppe benötigt ungefähr 50 Conversions pro Woche, um die Lernphase zu verlassen und stabil zu performen. Wenn dein Cost-per-Conversion bei 20 Euro liegt, brauchst du also mindestens 1.000 Euro pro Woche und Anzeigengruppe — nur um überhaupt optimiert ausliefern zu können.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die meisten Unternehmen verteilen ein kleines Budget auf zu viele Anzeigengruppen und wundern sich, warum keine einzige die Lernphase schafft. Die Lösung: Konzentriere dein Budget auf weniger Anzeigengruppen. Lieber eine Anzeigengruppe mit 700 Euro Wochenbudget als sieben mit jeweils 100 Euro. Wenn dein Gesamtbudget zu klein für direkte Conversion-Optimierung ist, starte mit einem oberen Funnel-Ziel wie Traffic oder Engagement und baue erst Daten auf.
            </p>
          </FadeInSection>

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
              5. Keine Varianten getestet — kein A/B-Testing
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Du schaltest eine Anzeige, sie performt nicht, und du gibst auf. Das ist kein Meta-Problem — das ist ein Testing-Problem. Professionelle Advertiser testen systematisch: verschiedene Headlines, verschiedene Bilder und Videos, verschiedene Call-to-Actions, verschiedene Zielgruppen. Mindestens 3 bis 5 Creative-Varianten pro Kampagne sind Standard.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Nutze Metas integriertes A/B-Testing-Tool oder erstelle manuell Split-Tests. Teste immer nur eine Variable gleichzeitig: Wenn du gleichzeitig Bild und Text änderst, weißt du nicht, was den Unterschied gemacht hat. Dokumentiere deine Ergebnisse und baue systematisch auf den Gewinnern auf. Die besten Kampagnen sind nie die ersten — sie sind das Ergebnis von 10, 20 oder 50 getesteten Varianten.
            </p>
          </FadeInSection>

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
              6. Die Landing Page konvertiert nicht
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Du kannst die perfekte Anzeige haben — wenn deine Landing Page den Besucher nicht überzeugt, ist alles umsonst. Die häufigsten Landing-Page-Fehler: zu langsame Ladezeit (über 3 Sekunden = 50 Prozent Absprung), kein klarer Call-to-Action above the fold, zu viele Ablenkungen und Navigationsoptionen, kein Mobile-First-Design und fehlende Trust-Signale wie Bewertungen oder Zertifikate.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die Faustregel: Deine Landing Page sollte genau eine Handlung fördern. Nicht drei, nicht fünf — eine. Reduziere Navigation, entferne ablenkende Elemente und stelle sicher, dass dein Angebot in den ersten 5 Sekunden klar erkennbar ist. Nutze Tools wie Hotjar oder Microsoft Clarity, um zu sehen, wo Besucher abspringen, und optimiere kontinuierlich.
            </p>
          </FadeInSection>

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
              7. Keine Geduld mit dem Algorithmus
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Der Algorithmus braucht Zeit. Die Lernphase dauert in der Regel 3 bis 7 Tage, manchmal länger. In dieser Phase schwankt die Performance stark — das ist normal und gewollt. Der Algorithmus experimentiert, um die optimale Auslieferung zu finden. Wenn du währenddessen das Budget änderst, die Zielgruppe anpasst oder die Anzeige pausierst, wirfst du den Lernprozess zurück auf Null.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die goldene Regel: Lass jede signifikante Änderung mindestens 48 bis 72 Stunden laufen, bevor du Schlüsse ziehst. Nimm keine Anpassungen während der Lernphase vor. Wenn eine Anzeigengruppe nach 7 Tagen und ausreichend Budget nicht performt, dann kannst du optimieren oder pausieren. Aber gib dem Algorithmus die Chance, seine Arbeit zu machen.
            </p>
          </FadeInSection>

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
              Schnelle Checkliste: Sind deine Meta Ads richtig eingerichtet?
            </h2>
            <div style={{ overflowX: "auto", marginBottom: "32px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.9375rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#111",
                      borderBottom: `2px solid ${CATEGORY_COLOR}`,
                    }}
                  >
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "left",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Prüfpunkt
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                        width: "100px",
                      }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Meta Pixel auf allen Seiten installiert",
                    "Conversions API (Server-Side) aktiv",
                    "Standard-Events korrekt konfiguriert",
                    "Zielgruppe unter 2 Mio. Personen",
                    "Mindestens 3 Creative-Varianten aktiv",
                    "Budget ausreichend für Lernphase",
                    "Landing Page lädt unter 3 Sekunden",
                    "Klarer CTA above the fold",
                    "Mobile-optimierte Landing Page",
                    "Keine Änderungen während der Lernphase",
                  ].map((item, i) => (
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
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {item}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.25)",
                        }}
                      >
                        &#9744;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Wenn du bei mehr als drei Punkten &ldquo;Nein&rdquo; oder &ldquo;Unsicher&rdquo; ankreuzen musst, hast du deine Antwort, warum deine Meta Ads nicht funktionieren. Die gute Nachricht: Jeder dieser Punkte lässt sich beheben. Und oft reicht es, zwei oder drei der häufigsten Fehler zu korrigieren, um die Performance deiner Kampagnen deutlich zu verbessern.
            </p>
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
                Willst du ein kostenloses Meta-Kampagnen-Audit?
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
                Wir analysieren dein Werbekonto, identifizieren die Schwachstellen
                und zeigen dir genau, wo dein Budget verloren geht — kostenlos und
                unverbindlich.
              </p>
              <Link
                href="/ge/lass-uns-reden/"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Kostenloses Audit anfordern
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
            {RELATED_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group"
                style={{
                  display: "block",
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    background: "#111",
                  }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "28px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: article.categoryColor,
                      }}
                    >
                      {article.categoryLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      {article.date} · {article.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-white"
                    style={{
                      fontSize: "1.1875rem",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                      marginBottom: "16px",
                    }}
                  >
                    {article.title}
                  </h3>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#56db84",
                    }}
                  >
                    Lesen
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer locale="de" />
    </>
  );
}
