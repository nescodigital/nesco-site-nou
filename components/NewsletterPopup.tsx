"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const SESSION_KEY = "newsletter_popup_dismissed";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
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
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
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

        {status === "success" ? (
          <p style={{ fontSize: "1rem", color: "#56db84", fontWeight: 600, padding: "12px 0" }}>
            ✓ Te-ai abonat cu succes!
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adresa@email.com"
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "12px 16px",
                fontSize: "0.9375rem",
                color: "#fff",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
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
              <p style={{ fontSize: "0.75rem", color: "rgba(255,100,100,0.8)", margin: 0 }}>
                A apărut o eroare. Încearcă din nou.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !agreed}
              className="btn-primary"
              style={{
                marginTop: "4px",
                width: "100%",
                justifyContent: "center",
                opacity: agreed ? 1 : 0.45,
                cursor: agreed ? "pointer" : "not-allowed",
              }}
            >
              {status === "loading" ? "Se procesează..." : "Abonează-te"}
            </button>
          </form>
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
