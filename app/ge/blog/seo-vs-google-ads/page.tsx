import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FadeInSection } from "@/components/ui/FadeInSection";

const CATEGORY_COLOR = "#14b8a6";

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
    slug: "/ge/blog/warum-meta-ads-nicht-funktionieren/",
    title: "Warum funktionieren deine Meta Ads nicht? 7 häufige Fehler",
    categoryLabel: "Paid Ads",
    categoryColor: "#56db84",
    image: "/blog/de-ce-nu-merg-meta-ads.jpg",
    date: "18. Feb 2026",
    readTime: "10 Min",
  },
];

export default function SeoVsGoogleAdsPage() {
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
                "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #050505, transparent)",
            }}
          />
          <div className="relative page-container" style={{ maxWidth: "820px" }}>
            <span className="badge mb-4">SEO</span>
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
                15. Feb 2026
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
                9 Min Lesezeit
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
              SEO vs. Google Ads: Was wählen bei{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #14b8a6 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                begrenztem Budget?
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
              Organischer oder bezahlter Traffic? Wir analysieren Kosten, Timeline
              und ROI jeder Strategie, damit du die richtige Entscheidung für dein
              Unternehmen triffst.
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
              &ldquo;Sollen wir in SEO oder in Google Ads investieren?&rdquo; — diese Frage hören wir in fast jedem Erstgespräch. Und die ehrliche Antwort lautet: Es kommt darauf an. Beide Strategien können extrem profitabel sein — aber sie funktionieren grundlegend verschieden, liefern zu unterschiedlichen Zeitpunkten Ergebnisse und erfordern unterschiedliche Investitionen.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              In diesem Artikel vergleichen wir SEO und Google Ads in allen relevanten Dimensionen: Kosten, Timeline, ROI, Skalierbarkeit und Nachhaltigkeit. Am Ende weißt du genau, welche Strategie zu deiner aktuellen Situation passt — oder warum die Kombination aus beiden oft die beste Antwort ist.
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
              Was ist SEO?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              SEO (Search Engine Optimization) ist die Optimierung deiner Website, damit sie in den organischen Suchergebnissen von Google möglichst weit oben erscheint. Das umfasst technische Optimierung (Ladezeit, Seitenstruktur, Mobile-Friendliness), Content-Erstellung (Blog-Artikel, Ratgeber, Landingpages) und Offpage-Maßnahmen (Backlinks, Erwähnungen, lokale Verzeichnisse).
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Der große Vorteil von SEO: Einmal aufgebaute Rankings liefern langfristig Traffic — ohne dass du für jeden einzelnen Klick bezahlen musst. Ein Blogartikel, der auf Position 1 rankt, kann über Monate oder sogar Jahre hinweg konstant qualifizierte Besucher auf deine Website bringen. Der Nachteil: SEO ist eine langfristige Investition. Bis erste signifikante Ergebnisse sichtbar werden, vergehen in der Regel 3 bis 6 Monate, bei kompetitiven Keywords auch 6 bis 12 Monate.
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
              Was ist Google Ads?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Google Ads (früher Google AdWords) ist Googles Werbeplattform. Du bietest auf Keywords, und deine Anzeige erscheint oberhalb oder unterhalb der organischen Suchergebnisse. Du bezahlst pro Klick (Pay-per-Click / PPC). Je nach Branche und Keyword liegt der Klickpreis zwischen 0,50 Euro und 15 Euro oder mehr.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Der große Vorteil von Google Ads: Sofortige Sichtbarkeit. Du kannst heute eine Kampagne aufsetzen und morgen die ersten Klicks erhalten. Der Traffic fließt, sobald du Budget investierst. Ideal für neue Websites ohne organische Rankings, saisonale Angebote oder Produkt-Launches. Der Nachteil: Sobald du das Budget stoppst, stoppt auch der Traffic. Es gibt keinen nachhaltigen Effekt — du mietest Sichtbarkeit, statt sie aufzubauen.
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
              Timeline-Vergleich: Monat für Monat
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Die folgende Tabelle zeigt, was du realistisch von jeder Strategie erwarten kannst — Monat für Monat:
            </p>
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
                      Zeitraum
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      SEO
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Google Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monat 1", "Audit, technische Fixes, Content-Strategie", "Sofortige Klicks und Conversions"],
                    ["Monat 2-3", "Erste Indexierungen, minimale Sichtbarkeit", "Optimierung der Kampagnen, stabile Kosten"],
                    ["Monat 4-6", "Rankings steigen, erste organische Klicks", "Konstante Ergebnisse bei gleichem Budget"],
                    ["Monat 7-9", "Signifikanter Traffic-Anstieg", "Performance stabil, aber nicht wachsend"],
                    ["Monat 10-12", "Exponentielles Wachstum möglich", "Gleiche Kosten für gleiche Ergebnisse"],
                    ["Nach 12 Monaten", "Selbsttragender Traffic ohne laufende Kosten", "Traffic stoppt wenn Budget stoppt"],
                  ].map(([period, seo, ads], i) => (
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
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {period}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {seo}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "0.875rem",
                        }}
                      >
                        {ads}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              ROI-Vergleich: Was bringt mehr Rendite?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Nehmen wir ein konkretes Beispiel: Du investierst 2.000 Euro pro Monat — entweder in SEO oder in Google Ads. So könnten die Ergebnisse nach 6 und 12 Monaten aussehen:
            </p>
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
                      Metrik
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      SEO (nach 6 Mon.)
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      SEO (nach 12 Mon.)
                    </th>
                    <th
                      style={{
                        padding: "14px 18px",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 600,
                      }}
                    >
                      Google Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Gesamtinvestition", "12.000 \u20AC", "24.000 \u20AC", "12.000 / 24.000 \u20AC"],
                    ["Monatliche Besucher", "~800", "~3.500", "~1.200 (konstant)"],
                    ["Cost per Click", "Sinkend über Zeit", "Nahe 0 \u20AC", "1,50 - 5 \u20AC (konstant)"],
                    ["Traffic nach Stopp", "Weiterhin vorhanden", "Weiterhin vorhanden", "Sofort auf 0"],
                    ["ROI-Tendenz", "Steigend", "Exponentiell steigend", "Gleichbleibend"],
                  ].map(([label, seo6, seo12, ads], i) => (
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
                        {label}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {seo6}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: CATEGORY_COLOR,
                          fontWeight: 500,
                        }}
                      >
                        {seo12}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          textAlign: "center",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {ads}
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
              Die Zahlen zeigen klar: Kurzfristig liefert Google Ads schnellere Ergebnisse. Aber langfristig gewinnt SEO mit deutlich besserem ROI. Nach 12 Monaten SEO-Arbeit bekommst du mehr Traffic als mit Google Ads — und der Cost-per-Click tendiert gegen Null, weil organische Klicks nichts kosten.
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
              Wann solltest du SEO wählen?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              SEO ist die richtige Wahl, wenn du langfristig denkst und bereit bist, 3 bis 6 Monate zu investieren, bevor die Ergebnisse sichtbar werden. Es eignet sich besonders für Unternehmen mit einem klaren Content-Potenzial: Wenn Menschen nach deinen Dienstleistungen, Produkten oder Branchenthemen suchen, kannst du über SEO genau diese Suchintention bedienen. SEO ist auch die bessere Wahl, wenn dein Customer Lifetime Value hoch genug ist, um die anfängliche Investitionsphase zu tragen, und wenn du eine nachhaltige Traffic-Quelle aufbauen willst, die nicht von einem laufenden Werbebudget abhängt.
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
              Wann solltest du Google Ads wählen?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Google Ads ist die richtige Wahl, wenn du sofortige Ergebnisse brauchst. Ein neues Produkt launchen, ein saisonales Angebot bewerben, Leads für ein zeitkritisches Projekt generieren — in all diesen Fällen ist die Geschwindigkeit von Google Ads unschlagbar. Auch wenn du ein neues Geschäftsmodell validieren willst, sind Google Ads perfekt: Du kannst innerhalb weniger Tage testen, ob dein Angebot auf Nachfrage trifft, bevor du in langfristige SEO-Maßnahmen investierst. Und in Branchen mit extrem hohem Wettbewerb, wo organische Top-Positionen Jahre dauern, können Google Ads die einzige realistische Option für schnelle Sichtbarkeit sein.
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
              Die ideale Kombination: SEO + Google Ads
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              In der Praxis raten wir den meisten unserer Kunden zu einer Kombination beider Strategien. Der Ansatz funktioniert so: In den ersten 3 bis 6 Monaten setzt du den Großteil deines Budgets auf Google Ads, um sofort Traffic und Conversions zu generieren. Parallel startest du mit SEO-Maßnahmen: technische Optimierung, Content-Aufbau, Backlink-Strategie.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Ab Monat 6 beginnen die SEO-Maßnahmen zu greifen. Organischer Traffic steigt, und du kannst das Google-Ads-Budget sukzessive reduzieren. Nach 12 Monaten liefert SEO bereits mehr Traffic als Google Ads — und du kannst das frei gewordene Budget in neue Wachstumskanäle investieren oder das Ads-Budget auf besonders profitable Keywords konzentrieren.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Diese Strategie gibt dir das Beste aus beiden Welten: sofortige Ergebnisse durch Google Ads und langfristiges, nachhaltiges Wachstum durch SEO. Und hier ist der Bonus-Effekt: Die Daten aus deinen Google-Ads-Kampagnen — welche Keywords konvertieren, welche Landingpages performen, welche Suchintentionen den höchsten Wert haben — fließen direkt in deine SEO-Strategie ein. Du optimierst also nicht blind, sondern basierend auf echten Conversion-Daten.
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
              Fazit: Es geht nicht um Entweder-Oder
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Wenn du nur ein begrenztes Budget hast und dich für eine der beiden Strategien entscheiden musst, dann wähle basierend auf deinem Zeithorizont: Brauchst du in den nächsten 30 Tagen Ergebnisse, geh mit Google Ads. Denkst du in 6 bis 12 Monaten, investiere in SEO. Doch die schlaueste Strategie ist fast immer die Kombination: Google Ads für sofortige Traktion, SEO für nachhaltiges Wachstum.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Egal wofür du dich entscheidest — das Wichtigste ist, dass du die Investition als das siehst, was sie ist: kein Kostenpunkt, sondern ein Wachstumshebel. Jeder Euro, den du heute strategisch in Marketing investierst, kann dir morgen ein Vielfaches zurückbringen. Die Frage ist nicht ob, sondern wie du investierst.
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
                Lass uns die richtige Strategie aufbauen
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
                Ob SEO, Google Ads oder beides — wir analysieren deine Situation
                und entwickeln eine maßgeschneiderte Strategie, die zu deinem Budget
                und deinen Zielen passt.
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
                Kostenlose Beratung buchen
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
