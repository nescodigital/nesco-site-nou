"use client";
import { useState } from "react";
import { Shield, Zap, Database, Bell, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPopup } from "@/components/ContactPopup";

type Duration = "3luni" | "6luni" | "12luni";

const prices = {
  basic: { "3luni": 95, "6luni": 79, "12luni": 67 },
  standard: { "3luni": 179, "6luni": 149, "12luni": 127 },
  premium: { "3luni": 299, "6luni": 249, "12luni": 212 },
};

const annualTotals = { basic: 804, standard: 1524, premium: 2544 };

const basicFeatures = [
  { included: true, text: "Actualizări WordPress + plugins" },
  { included: true, text: "Backup săptămânal" },
  { included: true, text: "Monitorizare uptime 24/7" },
  { included: true, text: "Suport email (răspuns 48h)" },
  { included: false, text: "Backup zilnic" },
  { included: false, text: "Scanare malware" },
  { included: false, text: "Modificări incluse" },
];

const standardFeatures = [
  { included: true, text: "Tot ce include Basic" },
  { included: true, text: "Backup zilnic" },
  { included: true, text: "Securitate și scanare malware" },
  { included: true, text: "Modificări mici (2h/lună)" },
  { included: true, text: "Suport prioritar (răspuns 24h)" },
  { included: false, text: "Optimizare viteză lunară" },
  { included: false, text: "Raport lunar de performanță" },
];

const premiumFeatures = [
  { included: true, text: "Tot ce include Standard" },
  { included: true, text: "Backup în timp real" },
  { included: true, text: "Optimizare viteză lunară" },
  { included: true, text: "Modificări extinse (5h/lună)" },
  { included: true, text: "Raport lunar de performanță" },
  { included: true, text: "Suport urgent (răspuns 4h)" },
];

const faqItems = [
  {
    q: "Am nevoie de mentenanță dacă site-ul meu e mic?",
    a: "Da , mărimea site-ului nu contează pentru hackeri. Plugin-urile vulnerabile sunt exploatate automat, indiferent dacă ai 100 sau 100.000 de vizitatori pe lună.",
  },
  {
    q: "Ce se întâmplă dacă site-ul meu cade în weekend?",
    a: "Monitorizăm 24/7, inclusiv weekend și sărbători. La pachetul Premium răspundem în maxim 4 ore, la Standard în 24 de ore.",
  },
  {
    q: "Pot să îmi gestionez singur site-ul după ce semnez contractul?",
    a: "Absolut. Accesul la WordPress rămâne al tău. Noi lucrăm în spate , tu poți adăuga conținut, modifica texte, orice dorești.",
  },
  {
    q: "Ce înseamnă \"modificări incluse\"?",
    a: "Modificări mici de conținut, text, imagini sau setări , fără să plătești extra. La Standard ai 2 ore/lună, la Premium 5 ore/lună. Dacă depășești, tariful orar e 60€.",
  },
  {
    q: "Pot schimba pachetul după ce am semnat?",
    a: "Da, poți face upgrade oricând. Downgrade-ul e posibil la finalul perioadei contractuale.",
  },
  {
    q: "Ce se întâmplă cu datele mele dacă nu mai colaborăm?",
    a: "Toate backup-urile sunt ale tale. La finalul colaborării îți livrăm un backup complet al site-ului și bazei de date.",
  },
];

const whatWeDoItems = [
  {
    icon: <Zap size={28} color="#56db84" />,
    title: "Actualizări complete",
    desc: "WordPress core, teme și toate plugin-urile actualizate și testate după fiecare update pentru a evita conflictele.",
  },
  {
    icon: <Bell size={28} color="#56db84" />,
    title: "Monitorizare continuă",
    desc: "Site-ul tău monitorizat 24/7. Dacă ceva cade, știm înaintea ta și acționăm imediat.",
  },
  {
    icon: <Shield size={28} color="#56db84" />,
    title: "Securitate activă",
    desc: "Scanare regulată pentru malware, cod malițios și vulnerabilități. Firewall activ și protecție împotriva atacurilor brute-force.",
  },
  {
    icon: <Database size={28} color="#56db84" />,
    title: "Backup automat",
    desc: "Copii de siguranță automate stocate în cloud. În caz de incident, restaurăm site-ul la ultima versiune funcțională.",
  },
];

export default function MentenantaWebsiteRoPage() {
  const [duration, setDuration] = useState<Duration>("6luni");
  const [popupSource, setPopupSource] = useState<string | null>(null);

  const savings3vs12 = {
    basic: (prices.basic["3luni"] - prices.basic["12luni"]) * 12,
    standard: (prices.standard["3luni"] - prices.standard["12luni"]) * 12,
    premium: (prices.premium["3luni"] - prices.premium["12luni"]) * 12,
  };

  return (
    <>
      <Header locale="ro" />
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
              Mentenanță Website
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
              Mentenanță Website ,{" "}
              <span style={{ color: "#56db84" }}>site-ul tău în siguranță</span>, mereu la zi
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
              Nu te mai gândi la actualizări, securitate sau backup. Noi avem grijă de tot, tu te concentrezi pe business.
            </p>
            <a
              href="#pricing"
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
            >
              Alege un pachet
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
              De ce ai nevoie de mentenanță website?
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {/* Card 1 , Security */}
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
                Un site neactualizat e o țintă ușoară
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                Peste 40% din site-urile WordPress sparte au plugins neactualizate. Hackerii scanează automat internetul după vulnerabilități cunoscute.
              </p>
            </div>

            {/* Card 2 , Speed */}
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
                Viteza site-ului afectează direct vânzările
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                1 secundă în plus la încărcare = 7% mai puține conversii. Un site lent pierde clienți înainte ca aceștia să vadă ce oferi.
              </p>
            </div>

            {/* Card 3 , Backup */}
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
                Fără backup, un incident înseamnă totul pierdut
              </h3>
              <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                Server crash, atac malware, eroare umană , fără backup zilnic poți pierde ani de conținut și date despre clienți.
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
              Alege pachetul potrivit
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem" }}>
              Prețuri transparente, fără costuri ascunse
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
              {(["3luni", "6luni", "12luni"] as Duration[]).map((d) => (
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
                  {d === "3luni" ? "3 luni" : d === "6luni" ? "6 luni" : "12 luni"}
                  {d === "6luni" && (
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
                        display: duration === "6luni" ? "none" : "block",
                      }}
                    >
                      REC.
                    </span>
                  )}
                  {d === "12luni" && (
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
                  <span style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>/lună</span>
                </div>
                {duration === "12luni" && (
                  <p style={{ color: "#56db84", fontSize: "0.8rem", fontWeight: 600 }}>
                    {annualTotals.basic}€/an · Economisești {savings3vs12.basic}€
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 12 }}>
                  Pentru site-uri de prezentare cu trafic redus
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
                Alege Basic
              </button>
            </div>

            {/* STANDARD , highlighted */}
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
                Cel mai popular
              </div>
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: "#56db84", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Standard</p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
                  <span className="font-black text-white" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                    {prices.standard[duration]}€
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>/lună</span>
                </div>
                {duration === "12luni" && (
                  <p style={{ color: "#56db84", fontSize: "0.8rem", fontWeight: 600 }}>
                    {annualTotals.standard}€/an · Economisești {savings3vs12.standard}€
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 12 }}>
                  Pentru site-uri active cu actualizări frecvente
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
                Alege Standard
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
                  <span style={{ color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>/lună</span>
                </div>
                {duration === "12luni" && (
                  <p style={{ color: "#56db84", fontSize: "0.8rem", fontWeight: 600 }}>
                    {annualTotals.premium}€/an · Economisești {savings3vs12.premium}€
                  </p>
                )}
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 12 }}>
                  Pentru magazine online și site-uri business-critical
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
                Alege Premium
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
                Ce facem în fiecare lună
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
                Întrebări frecvente
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
              Lasă tehnicul pe seama noastră
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 40 }}>
              Alege pachetul potrivit și noi ne ocupăm de tot. Tu te concentrezi pe business.
            </p>
            <button
              onClick={() => setPopupSource("mentenanta-cta-final")}
              className="btn-primary"
              style={{ border: "none", cursor: "pointer", fontSize: "1rem", padding: "18px 40px" }}
            >
              Hai să vorbim
              <ArrowRight size={16} style={{ marginLeft: 8 }} />
            </button>
          </div>
        </section>

      </main>
      <Footer locale="ro" />

      {popupSource && (
        <ContactPopup
          source={popupSource}
          locale="ro"
          onClose={() => setPopupSource(null)}
        />
      )}
    </>
  );
}
