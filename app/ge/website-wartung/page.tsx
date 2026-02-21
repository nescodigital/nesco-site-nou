"use client";
import { useState } from "react";
import { Shield, Zap, Database, Bell, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPopup } from "@/components/ContactPopup";

type Duration = "3monate" | "6monate" | "12monate";

const prices = {
  basic: { "3monate": 95, "6monate": 79, "12monate": 67 },
  standard: { "3monate": 179, "6monate": 149, "12monate": 127 },
  premium: { "3monate": 299, "6monate": 249, "12monate": 212 },
};

const annualTotals = { basic: 804, standard: 1524, premium: 2544 };

const basicFeatures = [
  { included: true, text: "WordPress + Plugin-Updates" },
  { included: true, text: "Woechentliches Backup" },
  { included: true, text: "24/7 Uptime-Monitoring" },
  { included: true, text: "E-Mail-Support (48h Antwortzeit)" },
  { included: false, text: "Taegliches Backup" },
  { included: false, text: "Malware-Scanning" },
  { included: false, text: "Inbegriffene Inhaltsaenderungen" },
];

const standardFeatures = [
  { included: true, text: "Alles aus Basic" },
  { included: true, text: "Taegliches Backup" },
  { included: true, text: "Sicherheit und Malware-Scanning" },
  { included: true, text: "Kleine Aenderungen (2h/Monat)" },
  { included: true, text: "Priority-Support (24h Antwortzeit)" },
  { included: false, text: "Monatliche Geschwindigkeitsoptimierung" },
  { included: false, text: "Monatlicher Performance-Bericht" },
];

const premiumFeatures = [
  { included: true, text: "Alles aus Standard" },
  { included: true, text: "Echtzeit-Backup" },
  { included: true, text: "Monatliche Geschwindigkeitsoptimierung" },
  { included: true, text: "Erweiterte Aenderungen (5h/Monat)" },
  { included: true, text: "Monatlicher Performance-Bericht" },
  { included: true, text: "Urgent-Support (4h Antwortzeit)" },
];

const faqItems = [
  {
    q: "Brauche ich Wartung, wenn meine Website klein ist?",
    a: "Ja, die Groesse der Website ist fuer Hacker irrelevant. Angreifbare Plugins werden automatisch ausgenutzt, unabhaengig davon, ob Sie 100 oder 100.000 monatliche Besucher haben.",
  },
  {
    q: "Was passiert, wenn meine Website am Wochenende ausfaellt?",
    a: "Wir ueberwachen 24/7, einschliesslich Wochenenden und Feiertagen. Mit Premium antworten wir innerhalb von 4 Stunden, mit Standard innerhalb von 24 Stunden.",
  },
  {
    q: "Kann ich meine Website nach der Anmeldung noch selbst verwalten?",
    a: "Absolut. Der WordPress-Zugriff bleibt Ihrer. Wir arbeiten im Hintergrund, Sie koennen Inhalte hinzufuegen, Texte bearbeiten, alles was Sie benoetigen.",
  },
  {
    q: "Was bedeuten 'inbegriffene Aenderungen'?",
    a: "Kleine Inhaltsaenderungen, Text, Bilder oder Einstellungen, ohne zusaetzliche Kosten. Standard beinhaltet 2h/Monat, Premium 5h/Monat. Darueber hinaus betraegt der Stundensatz 60 EUR.",
  },
  {
    q: "Kann ich den Plan nach der Anmeldung wechseln?",
    a: "Ja, Sie koennen jederzeit upgraden. Ein Downgrade ist am Ende der Vertragslaufzeit moeglich.",
  },
  {
    q: "Was passiert mit meinen Daten, wenn wir nicht mehr zusammenarbeiten?",
    a: "Alle Backups gehoeren Ihnen. Am Ende der Zusammenarbeit liefern wir ein vollstaendiges Backup Ihrer Website und Datenbank.",
  },
];

const whatWeDoItems = [
  {
    icon: <Zap size={28} color="#56db84" />,
    title: "Vollstaendige Updates",
    desc: "WordPress Core, Themes und alle Plugins werden nach jedem Update aktualisiert und getestet, um Konflikte zu vermeiden.",
  },
  {
    icon: <Bell size={28} color="#56db84" />,
    title: "Kontinuierliches Monitoring",
    desc: "Ihre Website wird 24/7 ueberwacht. Wenn etwas ausfaellt, wissen wir es vor Ihnen und handeln sofort.",
  },
  {
    icon: <Shield size={28} color="#56db84" />,
    title: "Aktive Sicherheit",
    desc: "Regelmaessiges Scanning auf Malware, boeswilligen Code und Schwachstellen. Aktive Firewall und Schutz vor Brute-Force-Angriffen.",
  },
  {
    icon: <Database size={28} color="#56db84" />,
    title: "Automatisches Backup",
    desc: "Automatisierte Backups in der Cloud gespeichert. Im Falle eines Vorfalls stellen wir Ihre Website auf die letzte funktionierende Version wieder her.",
  },
];

export default function WebsiteWartungDePage() {
  const [duration, setDuration] = useState<Duration>("6monate");
  const [popupSource, setPopupSource] = useState<string | null>(null);

  const savings3vs12 = {
    basic: (prices.basic["3monate"] - prices.basic["12monate"]) * 12,
    standard: (prices.standard["3monate"] - prices.standard["12monate"]) * 12,
    premium: (prices.premium["3monate"] - prices.premium["12monate"]) * 12,
  };

  const durationLabels: Record<Duration, string> = {
    "3monate": "3 Monate",
    "6monate": "6 Monate",
    "12monate": "12 Monate",
  };

  return (
    <>
      <Header locale="de" />
      <main style={{ backgroundColor: "#050505", minHeight: "100vh" }}>

        {/* HERO */}
        <section
          style={{
            padding: "140px 24px 100px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center top, rgba(86,219,132,0.07) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>
            <span className="badge" style={{ display: "inline-flex", marginBottom: 24 }}>
              Website-Wartung
            </span>
            <h1
              className="font-black text-white"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              Website-Wartung,{" "}
              <span style={{ color: "#56db84" }}>Ihre Website sicher</span> und immer aktuell
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 560,
                margin: "0 auto 40px",
              }}
            >
              Kein Stress mehr mit Updates, Sicherheit oder Backups. Wir kuemmern uns um alles, Sie konzentrieren sich auf Ihr Wachstum.
            </p>
            <a
              href="#pricing"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
            >
              Paket waehlen
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", marginBottom: 16 }}
            >
              Warum braucht Ihre Website Wartung?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {/* Card 1, Sicherheit */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                width="120"
                height="120"
                style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.08 }}
                aria-hidden="true"
              >
                <path d="M50 5 L90 20 L90 55 C90 75 72 90 50 97 C28 90 10 75 10 55 L10 20 Z" fill="none" stroke="#ef4444" strokeWidth="5" />
                <line x1="35" y1="35" x2="65" y2="65" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
                <line x1="65" y1="35" x2="35" y2="65" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <div style={{ marginBottom: 16 }}>
                <Shield size={32} color="#ef4444" />
              </div>
              <h3 className="font-black text-white" style={{ fontSize: "1.2rem", marginBottom: 12 }}>
                Eine veraltete Website ist ein leichtes Ziel
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                Ueber 40% der gehackten WordPress-Websites haben veraltete Plugins. Hacker durchsuchen das Internet automatisch nach bekannten Schwachstellen.
              </p>
            </div>

            {/* Card 2, Geschwindigkeit */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                width="120"
                height="120"
                style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.08 }}
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="5" />
                <line x1="50" y1="50" x2="50" y2="20" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
                <line x1="50" y1="50" x2="70" y2="60" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <line x1="50" y1="12" x2="50" y2="20" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <div style={{ marginBottom: 16 }}>
                <Zap size={32} color="#f59e0b" />
              </div>
              <h3 className="font-black text-white" style={{ fontSize: "1.2rem", marginBottom: 12 }}>
                Website-Geschwindigkeit beeinflusst direkt Ihren Umsatz
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                1 Sekunde mehr Ladezeit = 7% weniger Conversions. Eine langsame Website verliert Kunden, bevor sie sehen, was Sie anbieten.
              </p>
            </div>

            {/* Card 3, Backup */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                width="120"
                height="120"
                style={{ position: "absolute", bottom: "-10px", right: "-10px", opacity: 0.08 }}
                aria-hidden="true"
              >
                <rect x="20" y="30" width="60" height="50" rx="6" fill="none" stroke="#56db84" strokeWidth="5" />
                <path d="M35 30 L35 20 L65 20 L65 30" fill="none" stroke="#56db84" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="50" y1="45" x2="50" y2="65" stroke="#56db84" strokeWidth="5" strokeLinecap="round" />
                <polyline points="40,55 50,65 60,55" fill="none" stroke="#56db84" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ marginBottom: 16 }}>
                <Database size={32} color="#56db84" />
              </div>
              <h3 className="font-black text-white" style={{ fontSize: "1.2rem", marginBottom: 12 }}>
                Ohne Backup bedeutet ein Vorfall alles verloren
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                Server-Absturz, Malware-Angriff, menschlicher Fehler, ohne taegliche Backups koennen Sie Jahre an Inhalten und Kundendaten verlieren.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" style={{ padding: "80px 24px 100px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", marginBottom: 12 }}
            >
              Das passende Paket waehlen
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>
              Transparente Preise, keine versteckten Kosten
            </p>
          </div>

          {/* Duration Toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
            <div
              style={{
                display: "inline-flex",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: 4,
                gap: 4,
              }}
            >
              {(["3monate", "6monate", "12monate"] as Duration[]).map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    transition: "all 0.2s",
                    background: duration === d ? "#56db84" : "transparent",
                    color: duration === d ? "#000" : "rgba(255,255,255,0.5)",
                    position: "relative",
                  }}
                >
                  {durationLabels[d]}
                  {d === "6monate" && (
                    <span
                      style={{
                        position: "absolute",
                        top: -10,
                        right: -4,
                        background: "#56db84",
                        color: "#000",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        padding: "2px 6px",
                        borderRadius: 4,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        display: duration === "6monate" ? "none" : "block",
                      }}
                    >
                      EMP.
                    </span>
                  )}
                  {d === "12monate" && (
                    <span
                      style={{
                        position: "absolute",
                        top: -10,
                        right: -4,
                        background: "#f59e0b",
                        color: "#000",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        padding: "2px 6px",
                        borderRadius: 4,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      -30%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              maxWidth: 1100,
              margin: "0 auto",
              alignItems: "start",
            }}
          >
            {/* BASIC */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "36px 32px",
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Basic</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
                  <span className="font-black text-white" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {prices.basic[duration]}€
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>/Monat</span>
                </div>
                {duration === "12monate" && (
                  <p style={{ color: "#56db84", fontSize: "0.8rem", fontWeight: 600 }}>
                    {annualTotals.basic}€/Jahr · Sparen Sie {savings3vs12.basic}€
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 12 }}>
                  Fuer Praesentationswebsites mit niedrigem Traffic
                </p>
              </div>
              <div style={{ marginBottom: 28 }}>
                {basicFeatures.map((f) => (
                  <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    {f.included ? (
                      <CheckCircle size={16} color="#56db84" style={{ flexShrink: 0 }} />
                    ) : (
                      <XCircle size={16} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />
                    )}
                    <span style={{ fontSize: "0.875rem", color: f.included ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)" }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPopupSource("mentenanta-basic")}
                className="btn-ghost"
                style={{ width: "100%", cursor: "pointer", justifyContent: "center" }}
              >
                Basic waehlen
              </button>
            </div>

            {/* STANDARD, highlighted */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid #56db84",
                borderRadius: 20,
                padding: "36px 32px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#56db84",
                  color: "#000",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: 6,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Am beliebtesten
              </div>
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: "#56db84", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Standard</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
                  <span className="font-black text-white" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {prices.standard[duration]}€
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>/Monat</span>
                </div>
                {duration === "12monate" && (
                  <p style={{ color: "#56db84", fontSize: "0.8rem", fontWeight: 600 }}>
                    {annualTotals.standard}€/Jahr · Sparen Sie {savings3vs12.standard}€
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 12 }}>
                  Fuer aktive Websites mit haeufigen Updates
                </p>
              </div>
              <div style={{ marginBottom: 28 }}>
                {standardFeatures.map((f) => (
                  <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    {f.included ? (
                      <CheckCircle size={16} color="#56db84" style={{ flexShrink: 0 }} />
                    ) : (
                      <XCircle size={16} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />
                    )}
                    <span style={{ fontSize: "0.875rem", color: f.included ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)" }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPopupSource("mentenanta-standard")}
                className="btn-primary"
                style={{ width: "100%", cursor: "pointer", justifyContent: "center", border: "none" }}
              >
                Standard waehlen
              </button>
            </div>

            {/* PREMIUM */}
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "36px 32px",
              }}
            >
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Premium</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
                  <span className="font-black text-white" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {prices.premium[duration]}€
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>/Monat</span>
                </div>
                {duration === "12monate" && (
                  <p style={{ color: "#56db84", fontSize: "0.8rem", fontWeight: 600 }}>
                    {annualTotals.premium}€/Jahr · Sparen Sie {savings3vs12.premium}€
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 12 }}>
                  Fuer Online-Shops und geschaeftskritische Websites
                </p>
              </div>
              <div style={{ marginBottom: 28 }}>
                {premiumFeatures.map((f) => (
                  <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    {f.included ? (
                      <CheckCircle size={16} color="#56db84" style={{ flexShrink: 0 }} />
                    ) : (
                      <XCircle size={16} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />
                    )}
                    <span style={{ fontSize: "0.875rem", color: f.included ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)" }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPopupSource("mentenanta-premium")}
                className="btn-ghost"
                style={{ width: "100%", cursor: "pointer", justifyContent: "center" }}
              >
                Premium waehlen
              </button>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2
                className="font-black text-white"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                Was wir jeden Monat tun
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
              }}
            >
              {whatWeDoItems.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16,
                    padding: "28px 24px",
                  }}
                >
                  <div style={{ marginBottom: 16 }}>{item.icon}</div>
                  <h3 className="font-black text-white" style={{ fontSize: "1rem", marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2
                className="font-black text-white"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                Haeufig gestellte Fragen
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16,
                    padding: "24px 28px",
                  }}
                >
                  <h3 className="font-black text-white" style={{ fontSize: "1rem", marginBottom: 10 }}>
                    {item.q}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            padding: "100px 24px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(86,219,132,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 560, margin: "0 auto" }}>
            <h2
              className="font-black text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", marginBottom: 16 }}
            >
              Ueberlassen Sie uns das Technische
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 40 }}>
              Waehlen Sie das passende Paket und wir kuemmern uns um alles. Sie konzentrieren sich auf Ihr Business.
            </p>
            <button
              onClick={() => setPopupSource("mentenanta-cta-final")}
              className="btn-primary"
              style={{ border: "none", cursor: "pointer", fontSize: "1rem", padding: "18px 40px" }}
            >
              Lassen Sie uns sprechen
              <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </button>
          </div>
        </section>

      </main>
      <Footer locale="de" />

      {popupSource && (
        <ContactPopup
          source={popupSource}
          locale="de"
          onClose={() => setPopupSource(null)}
        />
      )}
    </>
  );
}
