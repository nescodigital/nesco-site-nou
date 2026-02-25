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

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

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
      window.location.href = "/multumim?type=newsletter";
    } catch {
      setStatus("error");
    }
  };

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
