"use client";
import { useState } from "react";
import { X, ArrowRight, Loader2 } from "lucide-react";

type Locale = "ro" | "en" | "de";

interface GrowthSprintPopupProps {
  source: string;
  onClose: () => void;
  selectedPlan?: string;
  locale?: Locale;
}

const T = {
  ro: {
    questions: [
      { id: "revenue", label: "Care sunt veniturile lunare actuale?", options: ["Sub 10.000€", "10.000–50.000€", "50.000–100.000€", "Peste 100.000€"] },
      { id: "problem", label: "Ce problemă principală vrei să rezolvi?", options: ["Creștere vânzări", "Optimizare costuri ads", "Automatizare vânzări", "Altele"] },
      { id: "timeline", label: "Când vrei să începi?", options: ["Imediat", "În 30 de zile", "Explorez opțiunile"] },
    ],
    step1Title: "Spune-ne mai multe despre tine",
    step1Sub: "3 întrebări rapide pentru a personaliza apelul de discovery.",
    continueBtn: "Continuă",
    step2Title: "Date de contact",
    step2Sub: "Completează datele și te contactăm în 24 de ore.",
    namePlaceholder: "Nume complet *",
    contactPrefLabel: "Cum preferi să fii contactat?",
    contactPrefs: ["Telefon", "WhatsApp", "Email"],
    msgPlaceholder: "Mesaj scurt (opțional)",
    submitBtn: "Programează Discovery Call",
    back: "← Înapoi",
    sending: "Se trimite...",
    successTitle: "Mulțumim!",
    successText: "Te contactăm în maximum 24 de ore.",
    closeBtn: "Închide",
    planBadgeLabel: "Opțiunea aleasă:",
    errRequired: "Câmp obligatoriu.",
    errEmail: "Email invalid.",
    errGeneral: "Ceva nu a mers. Te rugăm să încerci din nou.",
  },
  en: {
    questions: [
      { id: "revenue", label: "What are your current monthly revenues?", options: ["Under €10K", "€10K–€50K", "€50K–€100K", "Over €100K"] },
      { id: "problem", label: "What's the main problem to solve?", options: ["Grow sales", "Optimize ad costs", "Automate sales", "Other"] },
      { id: "timeline", label: "When do you want to start?", options: ["Immediately", "Within 30 days", "Just exploring"] },
    ],
    step1Title: "Tell us more about you",
    step1Sub: "3 quick questions to personalize the discovery call.",
    continueBtn: "Continue",
    step2Title: "Contact details",
    step2Sub: "Fill in your details and we'll contact you within 24 hours.",
    namePlaceholder: "Full name *",
    contactPrefLabel: "How do you prefer to be contacted?",
    contactPrefs: ["Phone", "WhatsApp", "Email"],
    msgPlaceholder: "Short message (optional)",
    submitBtn: "Schedule Discovery Call",
    back: "← Back",
    sending: "Sending...",
    successTitle: "Thank you!",
    successText: "We'll contact you within 24 hours.",
    closeBtn: "Close",
    planBadgeLabel: "Selected option:",
    errRequired: "Required field.",
    errEmail: "Invalid email.",
    errGeneral: "Something went wrong. Please try again.",
  },
  de: {
    questions: [
      { id: "revenue", label: "Was sind Ihre aktuellen monatlichen Einnahmen?", options: ["Unter 10.000€", "10.000–50.000€", "50.000–100.000€", "Über 100.000€"] },
      { id: "problem", label: "Was ist das Hauptproblem, das Sie lösen möchten?", options: ["Umsatz steigern", "Werbekosten optimieren", "Verkauf automatisieren", "Sonstiges"] },
      { id: "timeline", label: "Wann möchten Sie starten?", options: ["Sofort", "In 30 Tagen", "Ich erkunde Optionen"] },
    ],
    step1Title: "Erzählen Sie uns mehr über sich",
    step1Sub: "3 schnelle Fragen zur Personalisierung des Discovery Calls.",
    continueBtn: "Weiter",
    step2Title: "Kontaktdaten",
    step2Sub: "Füllen Sie die Daten aus und wir melden uns innerhalb von 24 Stunden.",
    namePlaceholder: "Vollständiger Name *",
    contactPrefLabel: "Wie möchten Sie kontaktiert werden?",
    contactPrefs: ["Telefon", "WhatsApp", "E-Mail"],
    msgPlaceholder: "Kurze Nachricht (optional)",
    submitBtn: "Discovery-Call vereinbaren",
    back: "← Zurück",
    sending: "Wird gesendet...",
    successTitle: "Danke!",
    successText: "Wir melden uns innerhalb von 24 Stunden.",
    closeBtn: "Schließen",
    planBadgeLabel: "Gewählte Option:",
    errRequired: "Pflichtfeld.",
    errEmail: "Ungültige E-Mail.",
    errGeneral: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },
};

export function GrowthSprintPopup({ source, onClose, selectedPlan, locale = "ro" }: GrowthSprintPopupProps) {
  const t = T[locale];
  const [step, setStep] = useState<1 | 2>(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [fields, setFields] = useState({ name: "", email: "", phone: "", message: "" });
  const [contactPrefs, setContactPrefs] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const allAnswered = t.questions.every((q) => answers[q.id]);

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
    if (!fields.name.trim()) e.name = t.errRequired;
    if (!fields.email.trim()) e.email = t.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = t.errEmail;
    if (!fields.phone.trim()) e.phone = t.errRequired;
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

      const params = new URLSearchParams(window.location.search);
      const payload = {
        firstName,
        lastName,
        email: fields.email,
        phone: fields.phone,
        message: fields.message,
        contactPrefs,
        source,
        selectedPlan,
        qualifications: {
          revenue: answers.revenue,
          problem: answers.problem,
          timeline: answers.timeline,
        },
        utm_source: params.get("utm_source") || undefined,
        utm_medium: params.get("utm_medium") || undefined,
        utm_campaign: params.get("utm_campaign") || undefined,
        referrer: document.referrer || undefined,
        landingPage: window.location.pathname,
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
      window.location.href = "/multumim?type=growth-sprint";
    } catch {
      setSubmitError(t.errGeneral);
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

        {/* Selected plan badge */}
        {selectedPlan && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              background: "rgba(86,219,132,0.08)",
              border: "1px solid rgba(86,219,132,0.2)",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#56db84",
              marginBottom: "20px",
            }}
          >
            <span style={{ opacity: 0.6 }}>{t.planBadgeLabel}</span> {selectedPlan}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "transparent", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,0.3)", padding: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          aria-label={t.closeBtn}
        >
          <X size={18} />
        </button>

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

            {/* Step 1, Qualification */}
            {step === 1 && (
              <div>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "8px" }}
                >
                  {t.step1Title}
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "32px", lineHeight: 1.6 }}>
                  {t.step1Sub}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {t.questions.map((q) => (
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
                    {t.continueBtn}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2, Contact details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} noValidate>
                <h2
                  className="font-black text-white"
                  style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "8px" }}
                >
                  {t.step2Title}
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "20px", lineHeight: 1.6 }}>
                  {t.step2Sub}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div>
                    <input
                      type="text" name="name" value={fields.name}
                      onChange={handleChange} placeholder={t.namePlaceholder}
                      style={{ ...inputStyle, borderColor: errors.name ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.name && <div style={errorStyle}>{errors.name}</div>}
                  </div>

                  <div>
                    <input
                      type="email" name="email" value={fields.email}
                      onChange={handleChange} placeholder="Email *"
                      style={{ ...inputStyle, borderColor: errors.email ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.email && <div style={errorStyle}>{errors.email}</div>}
                  </div>

                  <div>
                    <input
                      type="text" name="phone" value={fields.phone}
                      onChange={handleChange} placeholder={locale === "de" ? "Telefon *" : locale === "en" ? "Phone *" : "Telefon *"}
                      style={{ ...inputStyle, borderColor: errors.phone ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                  </div>

                  <div>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                      {t.contactPrefLabel}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                      {t.contactPrefs.map((opt) => {
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
                    <textarea
                      name="message" value={fields.message}
                      onChange={handleChange}
                      placeholder={t.msgPlaceholder}
                      rows={2}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        fontFamily: "inherit",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
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
                        {t.sending}
                      </>
                    ) : (
                      <>
                        {t.submitBtn}
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
                    {t.back}
                  </button>
                  {submitError && (
                    <p style={{ fontSize: "0.8125rem", color: "#f87171", textAlign: "center", margin: 0 }}>
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            )}
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
