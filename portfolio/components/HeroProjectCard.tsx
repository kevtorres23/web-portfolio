"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroProjectCard({projectUrl}: {projectUrl: string}) {
  return (
    <motion.div
      className={`w-65 h-84 rounded-lg shadow-xl/20 ${projectUrl} bg-cover bg-no-repeat`}
      drag
      dragSnapToOrigin
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      whileDrag={{ scale: 1.2 }}
    />
  );
}
