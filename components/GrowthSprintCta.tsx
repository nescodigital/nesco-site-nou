"use client";
import { useState, useEffect } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { GrowthSprintPopup } from "./GrowthSprintPopup";

type Locale = "ro" | "en" | "de";

interface GrowthSprintCtaProps {
  source: string;
  locale?: Locale;
}

const CTA_TEXT: Record<Locale, { btn: string; pricing: string; pricingHref: string }> = {
  ro: { btn: "Intră în legătură cu noi", pricing: "Vezi prețuri", pricingHref: "#investitie" },
  en: { btn: "Get in touch", pricing: "See pricing", pricingHref: "#investment" },
  de: { btn: "Kontakt aufnehmen", pricing: "Preise ansehen", pricingHref: "#investition" },
};

export function GrowthSprintCta({ source, locale = "ro" }: GrowthSprintCtaProps) {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();
  const c = CTA_TEXT[locale];

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
      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <button
          onClick={() => { setSelectedPlan(undefined); setOpen(true); }}
          className="btn-primary"
          style={{ border: "none", cursor: "pointer" }}
        >
          <Zap size={16} />
          {c.btn}
          <ArrowRight size={16} />
        </button>
        <a href={c.pricingHref} className="btn-ghost">
          {c.pricing}
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
