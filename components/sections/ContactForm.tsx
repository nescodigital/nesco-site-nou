"use client";
import { useState, useRef } from "react";
import { ArrowRight, X, CheckCircle, Loader2 } from "lucide-react";
import Image from "next/image";

type Locale = "ro" | "en" | "de";

interface ContactFormProps {
  locale?: Locale;
}

const labels = {
  ro: {
    firstName: "Prenume", firstPlaceholder: "Ion",
    lastName: "Nume", lastPlaceholder: "Popescu",
    company: "Companie", companyPlaceholder: "Compania Ta",
    email: "Email *", emailPlaceholder: "ion@companie.ro",
    phone: "Telefon", phonePlaceholder: "+40 7xx xxx xxx",
    website: "Website", websitePlaceholder: "nescodigital.ro",
    services: "Servicii necesare *", servicesDefault: "Selectează un serviciu",
    budget: "Buget lunar", budgetDefault: "Selectează bugetul",
    serviceList: ["Google Ads", "Facebook Ads", "Magazine Online", "Website Lead Generation", "Email Marketing", "SEO", "CRO", "Strategie Digitală", "Growth Sprint", "Altele"],
    budgetList: ["€1.000 – €3.000 / lună", "€3.000 – €5.000 / lună", "€5.000 – €10.000 / lună", "€10.000 – €30.000 / lună", "€30.000 – €100.000 / lună", "€100.000+ / lună"],
    submit: "Vreau o ofertă!",
    submitting: "Se trimite...",
    successTitle: "Mulțumim pentru mesaj!",
    successText: "Am primit cererea ta și îți vom răspunde în maximum 24 de ore. Verifică și folderul de spam dacă nu primești răspunsul nostru.",
    closeBtn: "Închide",
    errorEmail: "Adresa de email nu este validă.",
    errorRequired: "Câmp obligatoriu.",
  },
  en: {
    firstName: "First Name", firstPlaceholder: "John",
    lastName: "Last Name", lastPlaceholder: "Smith",
    company: "Company", companyPlaceholder: "Your Company",
    email: "Email *", emailPlaceholder: "john@company.com",
    phone: "Phone", phonePlaceholder: "+44 7xx xxx xxx",
    website: "Website", websitePlaceholder: "yourwebsite.com",
    services: "Services Needed *", servicesDefault: "Select a service",
    budget: "Monthly Budget", budgetDefault: "Select budget",
    serviceList: ["Google Ads", "Facebook Ads", "E-Commerce Store", "Lead Generation Website", "Email Marketing", "SEO", "CRO", "Digital Strategy", "Growth Sprint", "Other"],
    budgetList: ["€1,000 – €3,000 / month", "€3,000 – €5,000 / month", "€5,000 – €10,000 / month", "€10,000 – €30,000 / month", "€30,000 – €100,000 / month", "€100,000+ / month"],
    submit: "Get a free offer!",
    submitting: "Sending...",
    successTitle: "Thank you!",
    successText: "We've received your request and will get back to you within 24 hours. Check your spam folder if you don't hear from us.",
    closeBtn: "Close",
    errorEmail: "Please enter a valid email address.",
    errorRequired: "This field is required.",
  },
  de: {
    firstName: "Vorname", firstPlaceholder: "Hans",
    lastName: "Nachname", lastPlaceholder: "Müller",
    company: "Unternehmen", companyPlaceholder: "Ihr Unternehmen",
    email: "E-Mail *", emailPlaceholder: "hans@unternehmen.de",
    phone: "Telefon", phonePlaceholder: "+49 7xx xxx xxx",
    website: "Website", websitePlaceholder: "ihrewebsite.de",
    services: "Benötigte Services *", servicesDefault: "Service auswählen",
    budget: "Monatsbudget", budgetDefault: "Budget auswählen",
    serviceList: ["Google Ads", "Facebook Ads", "E-Commerce-Shop", "Lead-Generation-Website", "E-Mail-Marketing", "SEO", "CRO", "Digitale Strategie", "Growth Sprint", "Sonstiges"],
    budgetList: ["€1.000 – €3.000 / Monat", "€3.000 – €5.000 / Monat", "€5.000 – €10.000 / Monat", "€10.000 – €30.000 / Monat", "€30.000 – €100.000 / Monat", "€100.000+ / Monat"],
    submit: "Angebot anfordern!",
    submitting: "Wird gesendet...",
    successTitle: "Vielen Dank!",
    successText: "Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden. Überprüfen Sie auch Ihren Spam-Ordner.",
    closeBtn: "Schließen",
    errorEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    errorRequired: "Pflichtfeld.",
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
    services: "", budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const firstErrorRef = useRef<HTMLDivElement>(null);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.03)",
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
    if (!fields.services) newErrors.services = l.errorRequired;
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
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
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submit failed");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFields({ first_name: "", last_name: "", company: "", email: "", phone: "", website: "", services: "", budget: "" });
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

            <div style={{ marginBottom: "20px" }}>
              <Image
                src="/logo mare Nesco.avif"
                alt="Nesco Digital"
                width={100}
                height={40}
                style={{ filter: "invert(1) hue-rotate(180deg) contrast(1.8) brightness(2)", opacity: 0.7, margin: "0 auto 16px" }}
              />
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
            <label style={labelStyle}>{l.firstName}</label>
            <input
              type="text" name="first_name" value={fields.first_name}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.firstPlaceholder}
              style={{ ...inputStyle, borderColor: fieldBorder("first_name") }}
            />
          </div>
          <div>
            <label style={labelStyle}>{l.lastName}</label>
            <input
              type="text" name="last_name" value={fields.last_name}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.lastPlaceholder}
              style={{ ...inputStyle, borderColor: fieldBorder("last_name") }}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>{l.company}</label>
          <input
            type="text" name="company" value={fields.company}
            onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
            placeholder={l.companyPlaceholder}
            style={{ ...inputStyle, borderColor: fieldBorder("company") }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div ref={errors.email ? firstErrorRef : null}>
            <label style={labelStyle}>{l.email}</label>
            <input
              type="email" name="email" value={fields.email}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.emailPlaceholder} required
              style={{ ...inputStyle, borderColor: fieldBorder("email") }}
            />
            {errors.email && <div style={errorStyle}>{errors.email}</div>}
          </div>
          <div>
            <label style={labelStyle}>{l.phone}</label>
            <input
              type="text" name="phone" value={fields.phone}
              onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
              placeholder={l.phonePlaceholder}
              style={{ ...inputStyle, borderColor: fieldBorder("phone") }}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>{l.website}</label>
          <input
            type="text" name="website" value={fields.website}
            onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
            placeholder={l.websitePlaceholder}
            style={{ ...inputStyle, borderColor: fieldBorder("website") }}
          />
        </div>

        <div ref={errors.services ? firstErrorRef : null}>
          <label style={labelStyle}>{l.services}</label>
          <select
            name="services" value={fields.services}
            onChange={handleChange} onFocus={onFocus} onBlur={onBlur}
            style={{ ...inputStyle, color: fields.services ? "#ffffff" : "rgba(255,255,255,0.45)", appearance: "none", borderColor: fieldBorder("services") }}
          >
            <option value="">{l.servicesDefault}</option>
            {l.serviceList.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
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
