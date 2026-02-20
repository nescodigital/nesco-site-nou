"use client";
import { useState } from "react";
import { X, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type Locale = "ro" | "en" | "de";

interface ContactPopupProps {
  source: string;
  locale?: Locale;
  onClose: () => void;
}

const T = {
  ro: {
    step1Title: "Ce ai nevoie?",
    step1Sub: "Selectează serviciile care te interesează și bugetul estimat.",
    servicesLabel: "Servicii necesare *",
    services: [
      "Reclame Plătite",
      "Social Media",
      "Email Marketing",
      "SEO",
      "Strategie Digitală",
      "Webdesign",
      "Magazin Online",
      "Mentenanță Website",
    ],
    budgetLabel: "Buget lunar de marketing",
    budgetPlaceholder: "Selectează bugetul",
    budgets: ["Sub 1.000€", "1.000 – 3.000€", "3.000 – 5.000€", "Peste 5.000€"],
    continueBtn: "Continuă",
    step2Title: "Date de contact",
    step2Sub: "Completează datele și te contactăm în maxim 24 de ore.",
    firstNamePlaceholder: "Prenume *",
    lastNamePlaceholder: "Nume *",
    companyPlaceholder: "Companie *",
    emailPlaceholder: "Email *",
    phonePlaceholder: "Telefon *",
    websitePlaceholder: "Website (opțional)",
    submitBtn: "Hai să ne cunoaștem",
    back: "← Înapoi",
    sending: "Se trimite...",
    successTitle: "Mulțumim!",
    successText: "Te contactăm în maximum 24 de ore.",
    closeBtn: "Închide",
    errRequired: "Câmp obligatoriu.",
    errEmail: "Email invalid.",
    errService: "Selectează cel puțin un serviciu.",
    errGeneral: "Ceva nu a mers. Te rugăm să încerci din nou.",
  },
  en: {
    step1Title: "What do you need?",
    step1Sub: "Select the services you're interested in and your estimated budget.",
    servicesLabel: "Services needed *",
    services: [
      "Paid Ads",
      "Social Media",
      "Email Marketing",
      "SEO",
      "Digital Strategy",
      "Web Design",
      "Online Store",
      "Website Maintenance",
    ],
    budgetLabel: "Monthly marketing budget",
    budgetPlaceholder: "Select budget",
    budgets: ["Under €1,000", "€1,000 – €3,000", "€3,000 – €5,000", "Over €5,000"],
    continueBtn: "Continue",
    step2Title: "Contact details",
    step2Sub: "Fill in your details and we'll reach out within 24 hours.",
    firstNamePlaceholder: "First name *",
    lastNamePlaceholder: "Last name *",
    companyPlaceholder: "Company *",
    emailPlaceholder: "Email *",
    phonePlaceholder: "Phone *",
    websitePlaceholder: "Website (optional)",
    submitBtn: "Let's get acquainted",
    back: "← Back",
    sending: "Sending...",
    successTitle: "Thank you!",
    successText: "We'll contact you within 24 hours.",
    closeBtn: "Close",
    errRequired: "Required field.",
    errEmail: "Invalid email.",
    errService: "Select at least one service.",
    errGeneral: "Something went wrong. Please try again.",
  },
  de: {
    step1Title: "Was benötigen Sie?",
    step1Sub: "Wählen Sie die gewünschten Dienstleistungen und Ihr geschätztes Budget.",
    servicesLabel: "Benötigte Leistungen *",
    services: [
      "Bezahlte Anzeigen",
      "Social Media",
      "E-Mail-Marketing",
      "SEO",
      "Digitale Strategie",
      "Webdesign",
      "Online-Shop",
      "Website-Wartung",
    ],
    budgetLabel: "Monatliches Marketingbudget",
    budgetPlaceholder: "Budget auswählen",
    budgets: ["Unter 1.000€", "1.000 – 3.000€", "3.000 – 5.000€", "Über 5.000€"],
    continueBtn: "Weiter",
    step2Title: "Kontaktdaten",
    step2Sub: "Füllen Sie die Daten aus und wir melden uns innerhalb von 24 Stunden.",
    firstNamePlaceholder: "Vorname *",
    lastNamePlaceholder: "Nachname *",
    companyPlaceholder: "Unternehmen *",
    emailPlaceholder: "E-Mail *",
    phonePlaceholder: "Telefon *",
    websitePlaceholder: "Website (optional)",
    submitBtn: "Lass uns kennenlernen",
    back: "← Zurück",
    sending: "Wird gesendet...",
    successTitle: "Danke!",
    successText: "Wir melden uns innerhalb von 24 Stunden.",
    closeBtn: "Schließen",
    errRequired: "Pflichtfeld.",
    errEmail: "Ungültige E-Mail.",
    errService: "Bitte mindestens eine Leistung auswählen.",
    errGeneral: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "#111111",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  color: "#ffffff",
  fontSize: "0.875rem",
  outline: "none",
  fontFamily: "inherit",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "#f87171",
  marginTop: "4px",
};

export function ContactPopup({ source, locale = "ro", onClose }: ContactPopupProps) {
  const t = T[locale];
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [fields, setFields] = useState({
    firstName: "", lastName: "", company: "", email: "", phone: "", website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function toggleService(svc: string) {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
    if (errors.services) setErrors((e) => { const n = { ...e }; delete n.services; return n; });
  }

  function handleContinue() {
    if (selectedServices.length === 0) {
      setErrors({ services: t.errService });
      return;
    }
    setErrors({});
    setStep(2);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.firstName.trim()) e.firstName = t.errRequired;
    if (!fields.lastName.trim()) e.lastName = t.errRequired;
    if (!fields.company.trim()) e.company = t.errRequired;
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
      const payload = {
        firstName: fields.firstName.trim(),
        lastName: fields.lastName.trim(),
        company: fields.company.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        website: fields.website.trim(),
        services: selectedServices,
        budget,
        source,
        locale,
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
      setSubmitError(t.errGeneral);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9998,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          position: "relative", background: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px",
          maxWidth: "540px", width: "100%", padding: "48px",
          maxHeight: "90vh", overflowY: "auto",
        }}
      >
        {/* Green top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.5), transparent)",
          borderRadius: "20px 20px 0 0",
        }} />

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

        {/* Success state */}
        {success ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "rgba(86,219,132,0.1)", border: "1px solid rgba(86,219,132,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <CheckCircle size={28} style={{ color: "#56db84" }} />
            </div>
            <h3 className="font-black text-white" style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              {t.successTitle}
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px" }}>
              {t.successText}
            </p>
            <button onClick={onClose} className="btn-primary" style={{ margin: "0 auto", justifyContent: "center", border: "none", cursor: "pointer" }}>
              {t.closeBtn}
            </button>
          </div>
        ) : (
          <>
            {/* Step indicator */}
            <div style={{ marginBottom: "28px" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#56db84", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {step} / 2
              </span>
              <div style={{ marginTop: "8px", height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{
                  height: "100%", width: step === 1 ? "50%" : "100%",
                  background: "#56db84", borderRadius: 2, transition: "width 0.3s ease",
                }} />
              </div>
            </div>

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <div>
                <h2 className="font-black text-white" style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  {t.step1Title}
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "28px", lineHeight: 1.6 }}>
                  {t.step1Sub}
                </p>

                {/* Services grid */}
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                  {t.servicesLabel}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
                  {t.services.map((svc) => {
                    const checked = selectedServices.includes(svc);
                    return (
                      <div
                        key={svc}
                        onClick={() => toggleService(svc)}
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          padding: "11px 14px",
                          background: checked ? "rgba(86,219,132,0.06)" : "#111111",
                          border: `1px solid ${checked ? "rgba(86,219,132,0.25)" : "rgba(255,255,255,0.08)"}`,
                          borderRadius: "12px", cursor: "pointer", userSelect: "none",
                          transition: "background 0.15s, border-color 0.15s",
                        }}
                      >
                        <div style={{
                          width: 16, height: 16, borderRadius: "5px", flexShrink: 0,
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
                          {svc}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {errors.services && <div style={{ ...errorStyle, marginTop: "-12px", marginBottom: "12px" }}>{errors.services}</div>}

                {/* Budget dropdown */}
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                  {t.budgetLabel}
                </p>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    cursor: "pointer",
                    color: budget ? "#ffffff" : "rgba(255,255,255,0.35)",
                    marginBottom: "28px",
                  }}
                >
                  <option value="" disabled style={{ background: "#111", color: "rgba(255,255,255,0.35)" }}>
                    {t.budgetPlaceholder}
                  </option>
                  {t.budgets.map((b) => (
                    <option key={b} value={b} style={{ background: "#111", color: "#fff" }}>{b}</option>
                  ))}
                </select>

                <button
                  onClick={handleContinue}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", border: "none", cursor: "pointer" }}
                >
                  {t.continueBtn}
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <form onSubmit={handleSubmit} noValidate>
                <h2 className="font-black text-white" style={{ fontSize: "1.375rem", letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  {t.step2Title}
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", marginBottom: "20px", lineHeight: 1.6 }}>
                  {t.step2Sub}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* First + Last name */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div>
                      <input
                        type="text" name="firstName" value={fields.firstName}
                        onChange={handleChange} placeholder={t.firstNamePlaceholder}
                        style={{ ...inputStyle, borderColor: errors.firstName ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                      />
                      {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
                    </div>
                    <div>
                      <input
                        type="text" name="lastName" value={fields.lastName}
                        onChange={handleChange} placeholder={t.lastNamePlaceholder}
                        style={{ ...inputStyle, borderColor: errors.lastName ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                      />
                      {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text" name="company" value={fields.company}
                      onChange={handleChange} placeholder={t.companyPlaceholder}
                      style={{ ...inputStyle, borderColor: errors.company ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                    />
                    {errors.company && <div style={errorStyle}>{errors.company}</div>}
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div>
                      <input
                        type="email" name="email" value={fields.email}
                        onChange={handleChange} placeholder={t.emailPlaceholder}
                        style={{ ...inputStyle, borderColor: errors.email ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                      />
                      {errors.email && <div style={errorStyle}>{errors.email}</div>}
                    </div>
                    <div>
                      <input
                        type="text" name="phone" value={fields.phone}
                        onChange={handleChange} placeholder={t.phonePlaceholder}
                        style={{ ...inputStyle, borderColor: errors.phone ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)" }}
                      />
                      {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <input
                      type="text" name="website" value={fields.website}
                      onChange={handleChange} placeholder={t.websitePlaceholder}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.7 : 1 }}
                  >
                    {submitting ? (
                      <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />{t.sending}</>
                    ) : (
                      <>{t.submitBtn}<ArrowRight size={16} /></>
                    )}
                  </button>
                  <button
                    type="button" onClick={() => setStep(1)}
                    style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", padding: "4px" }}
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
          </>
        )}

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
