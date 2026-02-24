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
              26. Januar 2026 &middot; 10 Min. Lesezeit
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
              Retargeting und Remarketing: So gewinnen Sie{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fff 0%, #56db84 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                verlorene Kunden
              </span>{" "}
              zur&uuml;ck
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Der vollst&auml;ndige Retargeting- und Remarketing-Leitfaden &mdash; Strategien,
              Plattformen, Zielgruppensegmentierung und empfohlene Budgets, um
              Ihre verlorenen Besucher zur&uuml;ckzugewinnen.
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
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                <strong style={{ color: "#fff" }}>97&nbsp;% der Erstbesucher</strong> verlassen Ihre Website, ohne zu kaufen, ohne ein Formular auszuf&uuml;llen, ohne irgendetwas zu tun. Das ist normal &mdash; sie kennen Sie noch nicht gut genug. Aber das bedeutet nicht, dass sie f&uuml;r immer verloren sind.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Retargeting und Remarketing sind die Strategien, die sie zur&uuml;ckholen. Und sie stellen die Form digitaler Werbung mit dem h&ouml;chsten ROI dar &mdash; aus einem einfachen Grund: Sie versuchen nicht, Fremde zu &uuml;berzeugen, sondern sprechen Menschen an, die Ihre Website bereits besucht, Ihre Produkte gesehen und echtes Interesse gezeigt haben.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                In diesem umfassenden Leitfaden zeigen wir Ihnen genau, wie Retargeting technisch funktioniert, welche Zielgruppensegmente Sie erstellen sollten, welche Strategien auf jeder Plattform gelten und wie viel Budget Sie f&uuml;r maximale Ergebnisse einplanen sollten.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Retargeting vs Remarketing */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.625rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Retargeting vs. Remarketing &mdash; Was ist der Unterschied?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Obwohl viele diese Begriffe synonym verwenden, gibt es einen wichtigen technischen Unterschied zwischen den beiden:
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                <strong style={{ color: "#fff" }}>Retargeting</strong> bezeichnet bezahlte Anzeigen, die Ihren fr&uuml;heren Besuchern auf anderen Websites oder in sozialen Netzwerken angezeigt werden. Google Display Network, Meta Ads (Facebook und Instagram), YouTube Pre-Roll &mdash; das sind alles Retargeting-Kan&auml;le. Besucher werden &uuml;ber Pixel (Cookies) identifiziert und bekommen personalisierte Anzeigen zu sehen, w&auml;hrend sie im Internet surfen.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                <strong style={{ color: "#fff" }}>Remarketing</strong> bezeichnet die erneute Ansprache von Besuchern per E-Mail. Automatisierte E-Mail-Sequenzen, die an jene gesendet werden, die ihren Warenkorb abgebrochen haben, die sich f&uuml;r Ihren Newsletter angemeldet, aber nie gekauft haben, oder an ehemalige Kunden, die l&auml;ngere Zeit nicht bestellt haben.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                Beide verfolgen dasselbe Ziel &mdash; verlorene Besucher zur&uuml;ckzugewinnen &mdash; jedoch &uuml;ber unterschiedliche Kan&auml;le. Die besten Ergebnisse erzielen Sie, wenn Sie beide strategisch kombinieren.
              </p>
            </div>
          </FadeInSection>

          {/* Section: How it works technically */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.625rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Wie Retargeting technisch funktioniert
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Der Mechanismus ist einfach, aber wirkungsvoll. Sie installieren ein <strong style={{ color: "#fff" }}>Tracking-Pixel</strong> (ein kleines Code-Snippet) auf Ihrer Website &mdash; Meta Pixel, Google Tag, TikTok Pixel usw. Wenn ein Besucher auf Ihre Seite gelangt, identifiziert ihn das Pixel &uuml;ber einen Cookie und f&uuml;gt ihn einer Zielgruppenliste hinzu.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Sp&auml;ter, wenn dieser Besucher auf Facebook, Instagram, YouTube oder anderen Seiten im Google Display Network surft, erkennen ihn die Werbeplattformen und zeigen Ihre personalisierten Anzeigen. Es ist wie eine dezente Erinnerung: &bdquo;Hey, Sie waren bei uns, Sie haben Produkt X gesehen &mdash; immer noch interessiert?&ldquo;
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Mit der schrittweisen Abschaffung von Drittanbieter-Cookies wird <strong style={{ color: "#fff" }}>serverseitiges Tracking</strong> immer wichtiger. Anstatt sich ausschlie&szlig;lich auf den Browser des Besuchers zu verlassen, werden Daten direkt von Ihrem Server an die Werbeplattformen gesendet &mdash; genauer, zuverl&auml;ssiger und resistenter gegen Ad-Blocker.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                Conversions API (Meta), Enhanced Conversions (Google) und Events API (TikTok) sind die L&ouml;sungen, die Sie jetzt implementieren sollten, um Ihre Retargeting-F&auml;higkeiten langfristig zu sichern.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Essential audience segments */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.625rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Wichtige Zielgruppensegmente
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
                Nicht alle Besucher sind gleich. Jemand, der Ihre Startseite nach einer Sekunde wieder verlassen hat, unterscheidet sich grundlegend von jemandem, der 3 Produkte in den Warenkorb gelegt und die Kasse erreicht hat. Die richtige Zielgruppensegmentierung ist der Schl&uuml;ssel zu profitablem Retargeting:
              </p>
              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                  <thead>
                    <tr>
                      {["Segment", "Zeitfenster", "Strategie", "Erwarteter ROAS"].map((h) => (
                        <th key={h} style={{ background: "#111", color: "#fff", padding: "14px 18px", borderBottom: "2px solid #56db84", textAlign: "left", fontSize: "0.875rem", fontWeight: 700 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Alle Besucher (keine Aktion)", "1\u20137 Tage", "Markenerinnerung, Wertversprechen", "3\u20135x"],
                      ["Produktbetrachter", "1\u201314 Tage", "Dynamische Produktanzeigen mit angesehenen Artikeln", "5\u20138x"],
                      ["Warenkorb (kein Kauf)", "1\u20137 Tage", "Dringlichkeit, Social Proof, begrenzte Verf\u00fcgbarkeit", "8\u201312x"],
                      ["Kaufabbrecher (Checkout)", "1\u20133 Tage", "Rabatt/Anreiz, Garantie, kostenloser Versand", "10\u201315x"],
                      ["Fr\u00fchere K\u00e4ufer", "30\u201390 Tage", "Cross-Selling, Upselling, erg\u00e4nzende Produkte", "6\u201310x"],
                      ["Newsletter-Abonnenten (kein Kauf)", "7\u201330 Tage", "Aufkl\u00e4rung, Testimonials, Fallstudien", "4\u20136x"],
                    ].map(([segment, window_, strategy, roas], i) => (
                      <tr key={i}>
                        <td style={{ background: "#0a0a0a", color: "#fff", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem", fontWeight: 600 }}>{segment}</td>
                        <td style={{ background: "#0a0a0a", color: "rgba(255,255,255,0.6)", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem" }}>{window_}</td>
                        <td style={{ background: "#0a0a0a", color: "rgba(255,255,255,0.6)", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem" }}>{strategy}</td>
                        <td style={{ background: "#0a0a0a", color: "#56db84", padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem", fontWeight: 600 }}>{roas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                Beachten Sie das Muster: Je n&auml;her ein Besucher an der Conversion ist, desto h&ouml;her der erwartete ROAS. Deshalb ist es entscheidend, nicht alle Besucher gleich zu behandeln &mdash; die Botschaft, das Angebot und die Dringlichkeit m&uuml;ssen auf jedes Segment zugeschnitten sein.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Platform strategies */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.625rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Plattformspezifische Strategien
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "24px" }}>
                Jede Plattform hat ihre eigenen Vorteile f&uuml;r Retargeting. So setzen Sie sie strategisch ein:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                {[
                  { title: "Meta Retargeting (Facebook & Instagram)", desc: "Die leistungsst\u00e4rksten Retargeting-Optionen dank enormer Nutzerzahlen und reichhaltiger Daten. Verwenden Sie Dynamic Product Ads (DPA), um genau die Produkte zu zeigen, die Besucher angesehen haben. Erstellen Sie Custom Audiences basierend auf spezifischen Aktionen auf Ihrer Website. Schlie\u00dfen Sie K\u00e4ufer der letzten 7\u201314 Tage aus, um Budget nicht zu verschwenden. Begrenzen Sie die Frequenz auf 3\u20135 Impressionen pro Woche, um Werbem\u00fcdigkeit zu vermeiden." },
                  { title: "Google Display & YouTube", desc: "Responsive Display Ads erm\u00f6glichen es Ihnen, Millionen von Websites im Google Display Network zu erreichen. YouTube Pre-Roll-Anzeigen f\u00fcr Besucher, die Zeit auf Produktseiten verbracht haben, sind \u00e4u\u00dferst effektiv \u2014 Video schafft emotionale Bindung. Google Discovery Ads erscheinen in Gmail, auf der YouTube-Startseite und in Google Discover \u2014 perfekt f\u00fcr Markenbekanntheit bei k\u00fcrzlichen Besuchern." },
                  { title: "E-Mail-Remarketing", desc: "Automatisierte Warenkorb-Abbruch-Sequenzen (3 E-Mails in 72 Stunden) sind der Goldstandard. Browse-Abandonment-E-Mails \u2014 gesendet an Besucher, die Produkte angesehen, aber nicht in den Warenkorb gelegt haben \u2014 erzielen eine Conversion-Rate von 5\u201310\u00a0%. R\u00fcckgewinnungskampagnen nach 30\u201360\u201390 Tagen f\u00fcr inaktive Kunden mit schrittweise steigenden Angeboten." },
                  { title: "Cross-Plattform (sequenziell)", desc: "Die wirkungsvollste Strategie kombiniert alle Kan\u00e4le sequenziell: Aufmerksamkeit \u00fcber Google Display (Tage 1\u20133) \u2192 Produktanzeigen auf Meta (Tage 3\u20137) \u2192 E-Mail-Follow-up mit Sonderangebot (Tage 7\u201314). Die Botschaft entwickelt sich von Markenerinnerung zu Dringlichkeit und Anreiz und f\u00fchrt den Besucher schrittweise zur Conversion." },
                ].map((item) => (
                  <div key={item.title} style={{ padding: "24px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px" }}>
                    <h3 className="font-bold text-white" style={{ fontSize: "1rem", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Section: Frequency and duration */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.625rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Frequenz und Dauer &mdash; Wann ist es zu viel?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Werbem&uuml;digkeit ist real und gef&auml;hrlich. Wenn ein Besucher dieselbe Anzeige 20 Mal in einer Woche sieht, wird er nicht nur nicht konvertieren &mdash; er wird Ihre Marke mit Spam verbinden. Hier sind die Regeln, die wir empfehlen:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                {[
                  "Frequenz auf 3\u20135 Impressionen pro Woche und Nutzer begrenzen",
                  "Creatives alle 2 Wochen erneuern \u2014 Bilder, Texte und CTAs \u00e4ndern",
                  "Nicht l\u00e4nger als 30\u201360 Tage retargeten \u2014 wer in diesem Zeitraum nicht konvertiert hat, ist wahrscheinlich nicht Ihr Kunde",
                  "Nutzer, die bereits konvertiert haben, immer ausschlie\u00dfen \u2014 niemand m\u00f6chte Werbung f\u00fcr ein Produkt sehen, das er schon gekauft hat",
                  "Verschiedene Formate testen: Carousel, Video, Einzelbild \u2014 um das Interesse \u00fcber den gesamten Retargeting-Zeitraum aufrechtzuerhalten",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                    <span style={{ color: "#56db84", flexShrink: 0 }}>&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                Die Einhaltung dieser Regeln sch&uuml;tzt sowohl Ihr Budget als auch Ihre Markenwahrnehmung. Aggressives Retargeting hat genau den gegenteiligen Effekt von dem, was Sie erreichen wollen.
              </p>
            </div>
          </FadeInSection>

          {/* Section: Recommended budgets */}
          <FadeInSection>
            <div style={{ marginBottom: "48px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.625rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Empfohlene Retargeting-Budgets
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                Retargeting sollte <strong style={{ color: "#fff" }}>10&ndash;20&nbsp;% Ihres gesamten Werbebudgets</strong> ausmachen. Ein h&auml;ufiger Fehler ist es, 100&nbsp;% des Budgets in die Neukundengewinnung zu investieren und 0&nbsp;% in die R&uuml;ckgewinnung bestehender Besucher.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px" }}>
                F&uuml;r die meisten E-Commerce-Shops bedeutet das ein dediziertes Retargeting-Budget von <strong style={{ color: "#fff" }}>&euro;500 &ndash; &euro;1.500/Monat</strong>. Mit diesem Budget k&ouml;nnen Sie Retargeting auf Meta, Google Display und eine automatisierte E-Mail-Remarketing-Sequenz abdecken.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                Die Rendite ist nahezu garantiert: Retargeting liefert konstant einen ROAS von <strong style={{ color: "#fff" }}>5&ndash;12x</strong> &mdash; deutlich &uuml;ber dem Durchschnitt von Prospecting-Kampagnen. Jeder in Retargeting investierte Euro bringt mehr Geld zur&uuml;ck als jede andere Art digitaler Werbekampagne.
              </p>
            </div>
          </FadeInSection>

          {/* CTA Box */}
          <FadeInSection>
            <div style={{ padding: "40px", background: "#0a0a0a", borderRadius: "20px", border: "1px solid rgba(86,219,132,0.2)", textAlign: "center", marginBottom: "64px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
                Verlorene Besucher zur&uuml;ckgewinnen
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Wir richten Retargeting-Kampagnen auf Meta, Google und per E-Mail ein, die Besucher zur&uuml;ckbringen, die ohne Kauf gegangen sind &mdash; mit einem ROAS von 5&ndash;15x.
              </p>
              <Link href="/ge/bezahlte-werbung/" className="btn-primary">
                Professionelles Retargeting starten <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* Related Articles */}
          <FadeInSection>
            <div style={{ marginBottom: "40px" }}>
              <h2 className="font-bold text-white" style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "24px" }}>
                Verwandte Artikel
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div style={{ padding: "28px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f59e0b" }}>E-Commerce</span>
                  <h3 className="font-bold text-white" style={{ fontSize: "1.0625rem", lineHeight: 1.3, margin: "10px 0" }}>Warum Kunden den Warenkorb verlassen (und wie man es behebt)</h3>
                  <Link href="/ge/blog/warenkorbabbruch-beheben/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8125rem", fontWeight: 600, color: "#56db84", textDecoration: "none" }}>Weiterlesen <ArrowRight size={14} /></Link>
                </div>
                <div style={{ padding: "28px", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#56db84" }}>Paid Ads</span>
                  <h3 className="font-bold text-white" style={{ fontSize: "1.0625rem", lineHeight: 1.3, margin: "10px 0" }}>Facebook Ads vs Google Ads: Was ist besser f&uuml;r den Online-Shop?</h3>
                  <Link href="/ge/blog/facebook-ads-vs-google-ads-ecommerce/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8125rem", fontWeight: 600, color: "#56db84", textDecoration: "none" }}>Weiterlesen <ArrowRight size={14} /></Link>
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
