"use client";
import { useState } from "react";
import Link from "next/link";

const BUSINESS_TYPES = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "educatie-online", label: "Educație Online" },
  { value: "b2b-servicii", label: "B2B / Servicii" },
  { value: "sanatate-wellness", label: "Sănătate & Wellness" },
  { value: "imobiliare", label: "Imobiliare" },
  { value: "altul", label: "Altul" },
];

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

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [step, setStep] = useState<1 | 2>(1);
  const [businessType, setBusinessType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileStatus, setProfileStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setStep(2);
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  };

  const handleProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileStatus("loading");
    try {
      const res = await fetch("/api/newsletter-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, phone, businessType }),
      });
      if (!res.ok) throw new Error("failed");
      setProfileStatus("done");
    } catch {
      setProfileStatus("error");
    }
  };

  if (profileStatus === "done") {
    return (
      <p style={{ fontSize: "0.875rem", color: "#56db84", fontWeight: 500, padding: "10px 0" }}>
        ✓ Profil salvat! Ne vedem în inbox.
      </p>
    );
  }

  if (step === 2) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontSize: "0.8125rem", color: "#56db84", fontWeight: 500, marginBottom: "4px" }}>
          ✓ Abonat! Completează profilul (opțional):
        </p>
        <form onSubmit={handleProfile} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(86,219,132,0.35)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <option value="" disabled>Tipul tău de business</option>
            {BUSINESS_TYPES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
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
          {profileStatus === "error" && (
            <p style={{ fontSize: "0.75rem", color: "rgba(255,100,100,0.8)", margin: 0 }}>A apărut o eroare. Încearcă din nou.</p>
          )}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              type="submit"
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
              {profileStatus === "loading" ? "..." : "Salvează"}
            </button>
            <button
              type="button"
              onClick={() => setProfileStatus("done")}
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.8125rem",
                cursor: "pointer",
              }}
            >
              Sari
            </button>
          </div>
        </form>
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
