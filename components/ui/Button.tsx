"use client";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  primary:
    "bg-brand-green text-dark-900 font-bold hover:bg-brand-green-light active:scale-95 shadow-green hover:shadow-green-lg",
  secondary:
    "bg-dark-400 text-white border border-dark-200 hover:border-brand-green/30 hover:bg-dark-300",
  ghost: "text-white hover:text-brand-green",
  outline:
    "border border-brand-green/40 text-brand-green hover:bg-brand-green/10 hover:border-brand-green",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
  xl: "px-8 py-4 text-base rounded-full",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
