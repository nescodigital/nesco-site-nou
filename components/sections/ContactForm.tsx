"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, X, CheckCircle, Loader2 } from "lucide-react";

type Locale = "ro" | "en" | "de";

interface ContactFormProps {
  locale?: Locale;
}

const labels = {
  ro: {
    firstName: "Prenume", firstPlaceholder: "Prenume",
    lastName: "Nume", lastPlaceholder: "Nume",
    company: "Companie", companyPlaceholder: "Companie",
    email: "Email *", emailPlaceholder: "Email",
    phone: "Telefon", phonePlaceholder: "Telefon",
    website: "Website", websitePlaceholder: "Website (opțional)",
    services: "Servicii necesare *",
    serviceOptions: ["Reclame Plătite", "Social Media", "Email Marketing", "SEO", "Strategie Digitală", "Webdesign", "Magazin Online", "Mentenanță Website"],
    budget: "Buget lunar de marketing", budgetDefault: "Selectează bugetul",
    budgetList: ["€1.000 – €3.000 / lună", "€3.000 – €5.000 / lună", "€5.000 – €10.000 / lună", "€10.000 – €30.000 / lună", "€30.000 – €100.000 / lună", "€100.000+ / lună"],
    submit: "Vreau o ofertă!",
    submitting: "Se trimite...",
    successTitle: "Mulțumim pentru mesaj!",
    successText: "Am primit cererea ta și îți vom răspunde în maximum 24 de ore. Verifică și folderul de spam dacă nu primești răspunsul nostru.",
    closeBtn: "Închide",
    errorEmail: "Adresa de email nu este validă.",
    errorRequired: "Câmp obligatoriu.",
    errorServices: "Selectează cel puțin un serviciu.",
  },
  en: {
    firstName: "First Name", firstPlaceholder: "First name",
    lastName: "Last Name", lastPlaceholder: "Last name",
    company: "Company", companyPlaceholder: "Company",
    email: "Email *", emailPlaceholder: "Email",
    phone: "Phone", phonePlaceholder: "Phone",
    website: "Website", websitePlaceholder: "Website (optional)",
    services: "Services needed *",
    serviceOptions: ["Paid Ads", "Social Media", "Email Marketing", "SEO", "Digital Strategy", "Webdesign", "E-commerce", "Website Maintenance"],
    budget: "Monthly marketing budget", budgetDefault: "Select budget",
    budgetList: ["€1,000 – €3,000 / month", "€3,000 – €5,000 / month", "€5,000 – €10,000 / month", "€10,000 – €30,000 / month", "€30,000 – €100,000 / month", "€100,000+ / month"],
    submit: "Get a free offer!",
    submitting: "Sending...",
    successTitle: "Thank you!",
    successText: "We've received your request and will get back to you within 24 hours. Check your spam folder if you don't hear from us.",
    closeBtn: "Close",
    errorEmail: "Please enter a valid email address.",
    errorRequired: "This field is required.",
    errorServices: "Please select at least one service.",
  },
  de: {
    firstName: "Vorname", firstPlaceholder: "Vorname",
    lastName: "Nachname", lastPlaceholder: "Nachname",
    company: "Unternehmen", companyPlaceholder: "Unternehmen",
    email: "E-Mail *", emailPlaceholder: "E-Mail",
    phone: "Telefon", phonePlaceholder: "Telefon",
    website: "Website", websitePlaceholder: "Website (optional)",
    services: "Benötigte Leistungen *",
    serviceOptions: ["Bezahlte Werbung", "Social Media", "E-Mail-Marketing", "SEO", "Digitale Strategie", "Webdesign", "E-Commerce", "Website-Wartung"],
    budget: "Monatliches Marketingbudget", budgetDefault: "Budget auswählen",
    budgetList: ["€1.000 – €3.000 / Monat", "€3.000 – €5.000 / Monat", "€5.000 – €10.000 / Monat", "€10.000 – €30.000 / Monat", "€30.000 – €100.000 / Monat", "€100.000+ / Monat"],
    submit: "Angebot anfordern!",
    submitting: "Wird gesendet...",
    successTitle: "Vielen Dank!",
    successText: "Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden. Überprüfen Sie auch Ihren Spam-Ordner.",
    closeBtn: "Schließen",
    errorEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    errorRequired: "Pflichtfeld.",
    errorServices: "Bitte wählen Sie mindestens eine Leistung aus.",
  },
};

function normalizeUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return "https://" + trimmed;
}

export function ContactForm({ locale = "ro" }: ContactFormProps) {
  const l = labels[locale];
  const [fields, setFields] = useState({
    first_name: "", last_name: "", company: "",
    email: "", phone: "", website: "",
    services: [] as string[], budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [source, setSource] = useState("");
  const firstErrorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("source");
    if (s) setSource(s);
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
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

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!fields.email) newErrors.email = l.errorRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) newErrors.email = l.errorEmail;
    if (fields.services.length === 0) newErrors.services = l.errorServices;
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function toggleService(value: string) {
    setFields((prev) => {
      const next = prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value];
      return { ...prev, services: next };
    });
    if (errors.services) setErrors((prev) => { const n = { ...prev }; delete n.services; return n; });
  }

  function onFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    e.currentTarget.style.borderColor = errors[e.currentTarget.name]
      ? "rgba(248,113,113,0.5)"
      : "rgba(86,219,132,0.35)";
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    e.currentTarget.style.borderColor = errors[e.currentTarget.name]
      ? "rgba(248,113,113,0.4)"
      : "rgba(255,255,255,0.08)";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => firstErrorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...fields,
        website: normalizeUrl(fields.website),
        locale,
        source,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submit failed");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFields({ first_name: "", last_name: "", company: "", email: "", phone: "", website: "", services: [], budget: "" });
    } catch {
      // silent — form stays open for retry
    } finally {
      setSubmitting(false);
    }
  }

  const fieldBorder = (name: string) =>
    errors[name] ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.08)";

  return (
    <>
      {/* ── Success Modal ── */}
      {showSuccess && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowSuccess(false)}
        >
          <div
            style={{
              position: "relative",
              background: "#0a0a0a",
              border: "1px solid rgba(86,219,132,0.2)",
              borderRadius: "24px",
              padding: "48px 40px",
              maxWidth: "440px",
              width: "100%",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(86,219,132,0.5), transparent)" }}
            />
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                position: "absolute", top: 16, right: 16,
                background: "transparent", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.3)", padding: 4,
              }}
            >
              <X size={18} />
            </button>

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
              {l.successTitle}
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px" }}>
              {l.successText}
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="btn-primary"
              style={{ margin: "0 auto", justifyContent: "center" }}
            >
              {l.closeBtn}
            </button>
          </div>
        </div>
      )}

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <input
              type="text" name="first_name" value={fields.first_name}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.firstPlaceholder}
              style={{ ...inputStyle, borderColor: fieldBorder("first_name") }}
            />
          </div>
          <div>
            <input
              type="text" name="last_name" value={fields.last_name}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.lastPlaceholder}
              style={{ ...inputStyle, borderColor: fieldBorder("last_name") }}
            />
          </div>
        </div>

        <input
          type="text" name="company" value={fields.company}
          onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
          placeholder={l.companyPlaceholder}
          style={{ ...inputStyle, borderColor: fieldBorder("company") }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div ref={errors.email ? firstErrorRef : null}>
            <input
              type="email" name="email" value={fields.email}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.emailPlaceholder} required
              style={{ ...inputStyle, borderColor: fieldBorder("email") }}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>
          <div>
            <input
              type="text" name="phone" value={fields.phone}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.phonePlaceholder}
              style={{ ...inputStyle, borderColor: fieldBorder("phone") }}
            />
          </div>
        </div>

        <input
          type="text" name="website" value={fields.website}
          onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
          placeholder={l.websitePlaceholder}
          style={{ ...inputStyle, borderColor: fieldBorder("website") }}
        />

        {/* ── Services checkbox group ── */}
        <div ref={errors.services ? firstErrorRef : null}>
          <label style={labelStyle}>{l.services}</label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            {l.serviceOptions.map((option) => {
              const checked = fields.services.includes(option);
              return (
                <div
                  key={option}
                  onClick={() => toggleService(option)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px",
                    background: checked ? "rgba(86,219,132,0.06)" : "#0f0f0f",
                    border: `1px solid ${checked ? "rgba(86,219,132,0.25)" : errors.services ? "rgba(248,113,113,0.3)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "10px",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "background 0.15s ease, border-color 0.15s ease",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "4px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: checked ? "#56db84" : "transparent",
                      border: checked ? "none" : "1px solid rgba(255,255,255,0.2)",
                      transition: "background 0.15s ease",
                    }}
                  >
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#050505" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: checked ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
                      lineHeight: 1.3,
                      transition: "color 0.15s ease",
                    }}
                  >
                    {option}
                  </span>
                </div>
              );
            })}
          </div>
          {errors.services && <div style={errorStyle}>{errors.services}</div>}
        </div>

        <div>
          <label style={labelStyle}>{l.budget}</label>
          <select
            name="budget" value={fields.budget}
            onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
            style={{ ...inputStyle, color: fields.budget ? "#ffffff" : "rgba(255,255,255,0.45)", appearance: "none", borderColor: fieldBorder("budget") }}
          >
            <option value="">{l.budgetDefault}</option>
            {l.budgetList.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={submitting}
          style={{ width: "100%", justifyContent: "center", marginTop: "4px", border: "none", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.7 : 1 }}
        >
          {submitting ? (
            <>
              <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
              {l.submitting}
            </>
          ) : (
            <>
              {l.submit}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
