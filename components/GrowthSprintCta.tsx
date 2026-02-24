"use client";
import { useState, useEffect } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { GrowthSprintPopup } from "./GrowthSprintPopup";

type Locale = "ro" | "en" | "de";

interface GrowthSprintCtaProps {
  source: string;
  locale?: Locale;
}

const CTA_TEXT: Record<Locale, string> = {
  ro: "Intră în legătură cu noi",
  en: "Get in touch",
  de: "Kontakt aufnehmen",
};

const SECONDARY_CTA: Record<Locale, { text: string; href: string }> = {
  ro: { text: "Nu ești sigur? Fă diagnosticul →", href: "/quiz" },
  en: { text: "Not sure yet? Take the diagnostic →", href: "/quiz" },
  de: { text: "Noch unsicher? Mach die Diagnose →", href: "/quiz" },
};

export function GrowthSprintCta({ source, locale = "ro" }: GrowthSprintCtaProps) {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  useEffect(() => {
    const handler = (e: Event) => {
      const plan = (e as CustomEvent<{ plan?: string }>).detail?.plan;
      setSelectedPlan(plan || undefined);
      setOpen(true);
    };
    window.addEventListener("open-growth-sprint-popup", handler);
    return () => window.removeEventListener("open-growth-sprint-popup", handler);
  }, []);

  function handleClose() {
    setOpen(false);
    setSelectedPlan(undefined);
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <button
          onClick={() => { setSelectedPlan(undefined); setOpen(true); }}
          className="btn-primary"
          style={{ border: "none", cursor: "pointer" }}
        >
          <Zap size={16} />
          {CTA_TEXT[locale]}
          <ArrowRight size={16} />
        </button>
        <a
          href={SECONDARY_CTA[locale].href}
          className="text-sm text-[var(--brand-green)] hover:underline transition-colors"
          style={{ opacity: 0.85 }}
        >
          {SECONDARY_CTA[locale].text}
        </a>
      </div>

      {open && (
        <GrowthSprintPopup
          source={source}
          selectedPlan={selectedPlan}
          locale={locale}
          onClose={handleClose}
        />
      )}
    </>
  );
}
