"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { GrowthSprintPopup } from "@/components/GrowthSprintPopup";

type Locale = "ro" | "en" | "de";

interface ServicePageCtaButtonProps {
  locale: Locale;
  source: string;
  label: string;
}

export function ServicePageCtaButton({ locale, source, label }: ServicePageCtaButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-primary"
        style={{ border: "none", cursor: "pointer" }}
      >
        {label}
        <ArrowRight size={16} />
      </button>
      {open && (
        <GrowthSprintPopup
          source={source}
          locale={locale}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
