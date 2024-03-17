"use client";
import { Hero } from "@/components/hero";
import { Body } from "@/components/body";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Hero />
      <Body />
    </motion.div>
  );
}
