"use client";
import { useState } from "react";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  flex: 1,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "0.875rem",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.2s ease",
  width: "100%",
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

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [step, setStep] = useState<1 | 2>(1);
  const [businessType, setBusinessType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileStatus, setProfileStatus] = useState<"idle" | "loading" | "saved">("idle");

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

  if (step === 2) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {profileStatus === "saved" ? (
          <p style={{ fontSize: "0.875rem", color: "#56db84", margin: 0 }}>
            ✓ Profil completat! Ne vedem în inbox.
          </p>
        ) : (
          <>
            <p style={{ fontSize: "0.875rem", color: "#56db84", margin: 0 }}>
              ✓ Abonat! Completează profilul (opțional):
            </p>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              style={{ ...inputStyle, flex: "none", cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}
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
              style={{ ...inputStyle, flex: "none" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(86,219,132,0.35)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefon"
              style={{ ...inputStyle, flex: "none" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(86,219,132,0.35)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            />
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={handleProfile}
                disabled={profileStatus === "loading"}
                style={{
                  flex: 1,
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "#56db84",
                  color: "#050505",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {profileStatus === "loading" ? "Se salvează..." : "Salvează"}
              </button>
              <button
                onClick={() => { window.location.href = "/multumim?type=newsletter"; }}
                style={{
                  flex: 1,
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.8125rem",
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
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Email row */}
      <div style={{ display: "flex", gap: "8px" }}>
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
        <button
          type="submit"
          disabled={status === "loading" || !agreed}
          style={{
            flexShrink: 0,
            padding: "10px 18px",
            borderRadius: "10px",
            background: agreed ? "#56db84" : "rgba(86,219,132,0.2)",
            color: agreed ? "#050505" : "rgba(86,219,132,0.5)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            border: "none",
            cursor: agreed ? "pointer" : "not-allowed",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "..." : "Abonează-te"}
        </button>
      </div>

      {/* Consent checkbox */}
      <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer", userSelect: "none" }}>
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{ marginTop: "2px", flexShrink: 0, accentColor: "#56db84", cursor: "pointer" }}
        />
        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>
          Sunt de acord cu{" "}
          <Link href="/politica-de-confidentialitate" style={{ color: "rgba(86,219,132,0.6)", textDecoration: "underline" }}>
            Politica de Confidențialitate
          </Link>
        </span>
      </label>

      {/* Error */}
      {status === "error" && (
        <p style={{ fontSize: "0.75rem", color: "rgba(255,100,100,0.8)", margin: 0 }}>
          A apărut o eroare. Încearcă din nou.
        </p>
      )}
    </form>
  );
}
