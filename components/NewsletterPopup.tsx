"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const SESSION_KEY = "newsletter_popup_dismissed";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "0.9375rem",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const BUSINESS_TYPES = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "educatie-online", label: "Educație Online" },
  { value: "b2b-servicii", label: "B2B / Servicii" },
  { value: "sanatate-wellness", label: "Sănătate & Wellness" },
  { value: "imobiliare", label: "Imobiliare" },
  { value: "productie-industrie", label: "Producție / Industrie" },
  { value: "horeca", label: "HoReCa" },
  { value: "retail-fizic", label: "Retail Fizic" },
  { value: "consultanta-coaching", label: "Consultanță / Coaching" },
  { value: "altul", label: "Altul" },
];

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [step, setStep] = useState<1 | 2>(1);
  const [businessType, setBusinessType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileStatus, setProfileStatus] = useState<"idle" | "loading" | "saved">("idle");

  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;
    if (sessionStorage.getItem("admin_auth") === "true") return;
    const isRomanianPage = !window.location.pathname.startsWith("/en") && !window.location.pathname.startsWith("/ge");
    if (!isRomanianPage) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const id = setTimeout(() => setVisible(true), 60_000);
    return () => clearTimeout(id);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !email) return;
    setStatus("loading");
    try {
      const params = new URLSearchParams(window.location.search);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          utm_source: params.get("utm_source") || undefined,
          utm_medium: params.get("utm_medium") || undefined,
          utm_campaign: params.get("utm_campaign") || undefined,
          referrer: document.referrer || undefined,
          landingPage: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStep(2);
    } catch {
      setStatus("error");
    }
  };

  const handleProfile = async () => {
    setProfileStatus("loading");
    try {
      const res = await fetch("/api/newsletter-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, phone, businessType }),
      });
      if (!res.ok) throw new Error("failed");
      setProfileStatus("saved");
      setTimeout(() => {
        window.location.href = "/multumim?type=newsletter";
      }, 1000);
    } catch {
      setProfileStatus("idle");
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 9998,
          animation: "fadeIn 0.25s ease",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Newsletter signup"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          width: "min(480px, calc(100vw - 32px))",
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "40px",
          animation: "popupIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Închide"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: 32,
            height: 32,
            borderRadius: "8px",
            background: "rgba(255,255,255,0.06)",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
        >
          <X size={14} />
        </button>

        {/* Badge */}
        <span className="badge" style={{ display: "inline-flex", marginBottom: "20px" }}>
          Newsletter
        </span>

        {/* Heading */}
        <h2
          className="font-black text-white"
          style={{ fontSize: "1.5rem", lineHeight: 1.2, marginBottom: "10px" }}
        >
          Resurse gratuite pentru creștere
        </h2>
        <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: "28px" }}>
          Tips de marketing, studii de caz și strategii direct în inbox-ul tău. Fără spam.
        </p>

        {step === 1 ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adresa@email.com"
              style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(86,219,132,0.35)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            />
            <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer", userSelect: "none" }}>
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ marginTop: "3px", flexShrink: 0, accentColor: "#56db84", cursor: "pointer" }}
              />
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>
                Sunt de acord cu{" "}
                <Link href="/politica-de-confidentialitate" onClick={dismiss} style={{ color: "rgba(86,219,132,0.6)", textDecoration: "underline" }}>
                  Politica de Confidențialitate
                </Link>
              </span>
            </label>
            {status === "error" && (
              <p style={{ fontSize: "0.75rem", color: "rgba(255,100,100,0.8)", margin: 0 }}>A apărut o eroare. Încearcă din nou.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading" || !agreed}
              className="btn-primary"
              style={{ marginTop: "4px", width: "100%", justifyContent: "center", opacity: agreed ? 1 : 0.45, cursor: agreed ? "pointer" : "not-allowed" }}
            >
              {status === "loading" ? "Se procesează..." : "Abonează-te"}
            </button>
          </form>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {profileStatus === "saved" ? (
              <p style={{ fontSize: "0.9375rem", color: "#56db84", margin: 0 }}>
                ✓ Profil completat! Ne vedem în inbox.
              </p>
            ) : (
              <>
                <p style={{ fontSize: "0.9375rem", color: "#56db84", margin: 0, marginBottom: "4px" }}>
                  ✓ Email confirmat! Completează profilul tău (opțional):
                </p>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  style={{ ...inputStyle, cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}
                >
                  <option value="" disabled>Domeniu de activitate</option>
                  {BUSINESS_TYPES.map((bt) => (
                    <option key={bt.value} value={bt.value}>{bt.label}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Prenume"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(86,219,132,0.35)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefon"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(86,219,132,0.35)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                />
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={handleProfile}
                    disabled={profileStatus === "loading"}
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    {profileStatus === "loading" ? "Se salvează..." : "Salvează profilul"}
                  </button>
                  <button
                    onClick={() => { window.location.href = "/multumim?type=newsletter"; }}
                    style={{
                      flex: 1,
                      padding: "12px 20px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    Sari peste
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
