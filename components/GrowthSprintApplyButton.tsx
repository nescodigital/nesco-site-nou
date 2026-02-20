"use client";
import { useState } from "react";
import { GrowthSprintPopup } from "./GrowthSprintPopup";

interface GrowthSprintApplyButtonProps {
  source: "growth-sprint-educatie" | "growth-sprint-ecommerce";
  planLabel: string;
  variant: "primary" | "ghost";
  label?: string;
}

export function GrowthSprintApplyButton({
  source,
  planLabel,
  variant,
  label = "Aplică pentru această opțiune",
}: GrowthSprintApplyButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={variant === "primary" ? "btn-primary" : "btn-ghost"}
        style={{
          width: "100%",
          justifyContent: "center",
          cursor: "pointer",
          ...(variant === "primary" ? { border: "none" } : {}),
        }}
      >
        {label}
      </button>
      {open && (
        <GrowthSprintPopup
          source={source}
          selectedPlan={planLabel}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
