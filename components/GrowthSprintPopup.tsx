"use client";
import { useState } from "react";
import { X, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface GrowthSprintPopupProps {
  source: "growth-sprint-educatie" | "growth-sprint-ecommerce";
  onClose: () => void;
}

const QUESTIONS = [
  {
    id: "revenue",
    label: "Care sunt veniturile lunare actuale?",
    options: ["Sub 10.000€", "10.000–50.000€", "50.000–100.000€", "Peste 100.000€"],
  },
  {
    id: "problem",
    label: "Ce problemă principală vrei să rezolvi?",
    options: ["Creștere vânzări", "Optimizare costuri ads", "Automatizare vânzări", "Altele"],
  },
  {
    id: "timeline",
    label: "Când vrei să începi?",
    options: ["Imediat", "În 30 de zile", "Explorez opțiunile"],
  },
];

export function GrowthSprintPopup({ source, onClose }: GrowthSprintPopupProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [fields, setFields] = useState({ name: "", email: "", phone: "", message: "" });
  const [contactPrefs, setContactPrefs] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const allAnswered = QUESTIONS.every((q) => answers[q.id]);

  function handleAnswer(id: string, option: string) {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.name.trim()) e.name = "Câmp obligatoriu.";
    if (!fields.email.trim()) e.email = "Câmp obligatoriu.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Email invalid.";
    if (!fields.phone.trim()) e.phone = "Câmp obligatoriu.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitError(null);
    setSubmitting(true);
    try {
      const nameParts = fields.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ");

      const payload = {
        firstName,
        lastName,
        email: fields.email,
        phone: fields.phone,
        message: fields.message,
        contactPrefs,
        source,
        qualifications: {
          revenue: answers.revenue,
          problem: answers.problem,
          timeline: answers.timeline,
        },
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setSuccess(true);
    } catch {
      setSubmitError("Ceva nu a mers. Te rugăm să încerci din nou.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "0.875rem",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.6875rem",
    color: "rgba(255,255,255,0.35)",
    fontWeight: 600,
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  };

  const errorStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    color: "#f87171",
    marginTop: "4px",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          maxWidth: "520px",
          width: "100%",
          padding: "48px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Green top line */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.5), transparent)",
            borderRadius: "20px 20px 0 0",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "transparent", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,0.3)", padding: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          aria-label="Închide"
        >
          <X size={18} />
        </button>

        {/* Success state */}
        {success ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "rgba(86,219,132,0.1)",
                border: "1px solid rgba(86,219,132,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <CheckCircle size={28} style={{ color: "#56db84" }} />
            </div>
            <h3
              className="font-black text-white"
              style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "12px" }}
            >
              Mulțumim!
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px" }}>
              Te contactăm în maximum 24 de ore.
            </p>
            <button onClick={onClose} className="btn-primary" style={{ margin: "0 auto", justifyContent: "center" }}>
              Închide
            </button>
          </div>
        ) : (
          <>
            {/* Step indicator */}
            <div style={{ marginBottom: "28px" }}>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#56db84",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {step} / 2
              </span>
              <div
                style={{
                  marginTop: "8px",
                  height: 2,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: step === 1 ? "50%" : "100%",
                    background: "#56db84",
                    borderRadius: 2,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>

            {/* Step 1 — Qualification */}
            {step === 1 && (
              <div>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "8px" }}
                >
                  Spune-ne mai multe despre tine
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "32px", lineHeight: 1.6 }}>
                  3 întrebări rapide pentru a personaliza apelul de discovery.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {QUESTIONS.map((q) => (
                    <div key={q.id}>
                      <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, marginBottom: "12px" }}>
                        {q.label}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {q.options.map((opt) => {
                          const selected = answers[q.id] === opt;
                          return (
                            <button
                              key={opt}
                              onClick={() => handleAnswer(q.id, opt)}
                              style={{
                                padding: "8px 18px",
                                borderRadius: "9999px",
                                fontSize: "0.8125rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "all 0.15s ease",
                                background: selected ? "#56db84" : "transparent",
                                border: selected ? "1px solid #56db84" : "1px solid rgba(255,255,255,0.12)",
                                color: selected ? "#000" : "rgba(255,255,255,0.55)",
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "36px" }}>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!allAnswered}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      opacity: allAnswered ? 1 : 0.35,
                      cursor: allAnswered ? "pointer" : "not-allowed",
                      border: "none",
                    }}
                  >
                    Continuă
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 — Contact details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} noValidate>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "8px" }}
                >
                  Date de contact
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "32px", lineHeight: 1.6 }}>
                  Completează datele și te contactăm în 24 de ore.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Nume complet *</label>
                    <input
                      type="text" name="name" value={fields.name}
                      onChange={handleChange} placeholder="Ion Popescu"
                      style={{ ...inputStyle, borderColor: errors.name ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.name && <div style={errorStyle}>{errors.name}</div>}
                  </div>

                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email" name="email" value={fields.email}
                      onChange={handleChange} placeholder="ion@companie.ro"
                      style={{ ...inputStyle, borderColor: errors.email ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.email && <div style={errorStyle}>{errors.email}</div>}
                  </div>

                  <div>
                    <label style={labelStyle}>Telefon *</label>
                    <input
                      type="text" name="phone" value={fields.phone}
                      onChange={handleChange} placeholder="+40 7xx xxx xxx"
                      style={{ ...inputStyle, borderColor: errors.phone ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                  </div>

                  <div>
                    <label style={labelStyle}>Cum preferi să fii contactat?</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "2px" }}>
                      {["Telefon", "WhatsApp", "Email"].map((opt) => {
                        const checked = contactPrefs.includes(opt);
                        return (
                          <div
                            key={opt}
                            onClick={() => setContactPrefs((prev) =>
                              prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
                            )}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "10px 12px",
                              background: checked ? "rgba(86,219,132,0.06)" : "#111111",
                              border: `1px solid ${checked ? "rgba(86,219,132,0.25)" : "rgba(255,255,255,0.08)"}`,
                              borderRadius: "10px",
                              cursor: "pointer",
                              userSelect: "none",
                              transition: "background 0.15s, border-color 0.15s",
                            }}
                          >
                            <div style={{
                              width: 15, height: 15, borderRadius: "4px", flexShrink: 0,
                              display: "flex", alignItems: "center", justifyContent: "center",
                              background: checked ? "#56db84" : "transparent",
                              border: checked ? "none" : "1px solid rgba(255,255,255,0.2)",
                              transition: "background 0.15s",
                            }}>
                              {checked && (
                                <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4L3.5 6.5L9 1" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            <span style={{ fontSize: "0.8125rem", color: checked ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)", transition: "color 0.15s" }}>
                              {opt}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Mesaj scurt (opțional)</label>
                    <textarea
                      name="message" value={fields.message}
                      onChange={handleChange}
                      placeholder="Spune-ne ceva despre situația ta actuală..."
                      rows={3}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        fontFamily: "inherit",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      border: "none",
                      cursor: submitting ? "not-allowed" : "pointer",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        Programează Discovery Call
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.8125rem",
                      color: "rgba(255,255,255,0.3)",
                      padding: "4px",
                    }}
                  >
                    ← Înapoi
                  </button>
                  {submitError && (
                    <p style={{ fontSize: "0.8125rem", color: "#f87171", textAlign: "center", margin: 0 }}>
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            )}
          </>
        )}

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
