"use client";
import dynamic from "next/dynamic";

const ArrowPatternDynamic = dynamic(
  () => import("@/components/ArrowPattern").then((m) => ({ default: m.ArrowPattern })),
  { ssr: false }
);

export function LazyArrowPattern() {
  return <ArrowPatternDynamic />;
}
