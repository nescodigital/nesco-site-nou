"use client";

interface GrowthSprintApplyButtonProps {
  planLabel: string;
  variant: "primary" | "ghost";
  label?: string;
}

export function GrowthSprintApplyButton({
  planLabel,
  variant,
  label = "Aplică pentru această opțiune",
}: GrowthSprintApplyButtonProps) {
  function handleClick() {
    window.dispatchEvent(
      new CustomEvent("open-growth-sprint-popup", { detail: { plan: planLabel } })
    );
  }

  return (
    <button
      onClick={handleClick}
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
  );
}
