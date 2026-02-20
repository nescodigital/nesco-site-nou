"use client";
import { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { GrowthSprintPopup } from "./GrowthSprintPopup";

interface GrowthSprintCtaProps {
  source: "growth-sprint-educatie" | "growth-sprint-ecommerce";
}

export function GrowthSprintCta({ source }: GrowthSprintCtaProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-16">
        <button
          onClick={() => setOpen(true)}
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

      {open && <GrowthSprintPopup source={source} onClose={() => setOpen(false)} />}
    </>
  );
}
