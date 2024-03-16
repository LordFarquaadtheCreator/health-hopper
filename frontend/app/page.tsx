import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { Body } from "@/components/body";
import { useEffect } from "react";
export const metadata: Metadata = {
  title: "HealthHopper",
  description: "Simplify medical tourism.",
};

export default function MusicPage() {
  return (
    <>
      <Hero />
      {/* <DentalTab /> */}
      <Body />
    </>
  );
}
