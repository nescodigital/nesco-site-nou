"use client";
import { useState, useEffect } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { GrowthSprintPopup } from "./GrowthSprintPopup";

interface GrowthSprintCtaProps {
  source: "growth-sprint-educatie" | "growth-sprint-ecommerce";
}

export function GrowthSprintCta({ source }: GrowthSprintCtaProps) {
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
      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <button
          onClick={() => { setSelectedPlan(undefined); setOpen(true); }}
          className="btn-primary"
          style={{ border: "none", cursor: "pointer" }}
        >
          <Zap size={16} />
          Programează un Apel
          <ArrowRight size={16} />
        </button>
        <a href="#investitie" className="btn-ghost">
          Vezi prețuri
        </a>
      </div>

      {open && (
        <GrowthSprintPopup
          source={source}
          selectedPlan={selectedPlan}
          onClose={handleClose}
        />
      )}
    </>
  );
}
