"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  { value: "ecommerce", label: "E-commerce" },
  { value: "educatie-online", label: "Educatie Online" },
  { value: "b2b-servicii", label: "B2B / Servicii" },
  { value: "sanatate-wellness", label: "Sanatate & Wellness" },
  { value: "imobiliare", label: "Imobiliare" },
  { value: "altul", label: "Altul" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "0.875rem",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.2s ease",
};

export function ThankYouProfile() {
  const [open, setOpen] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "", firstName, phone, businessType }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p style={{ fontSize: "0.875rem", color: "#56db84", fontWeight: 500, padding: "10px 0" }}>
        Profil salvat!
      </p>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.8125rem",
          cursor: "pointer",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          transition: "color 0.2s",
          padding: 0,
        }}
      >
        Completeaza profilul (optional) &rarr;
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "360px",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>
        Completeaza profilul (optional):
      </p>
      <select
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
        style={{ ...inputStyle, appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
      >
        <option value="" disabled>
          Tipul tau de business
        </option>
        {BUSINESS_TYPES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Prenume"
        style={inputStyle}
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefon"
        style={inputStyle}
      />
      {status === "error" && (
        <p style={{ fontSize: "0.75rem", color: "rgba(255,100,100,0.8)", margin: 0 }}>
          A aparut o eroare. Incearca din nou.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "10px 18px",
          borderRadius: "10px",
          background: "#56db84",
          color: "#050505",
          fontSize: "0.8125rem",
          fontWeight: 700,
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s ease",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Se salveaza..." : "Salveaza"}
      </button>
    </form>
  );
}
