"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroProjectCard({projectCover}: {projectCover: string}) {
  return (
    <motion.div
      className="w-65 h-84 rounded-lg cursor-pointer bg-[url(../public/project-covers/rentapp.png)] bg-cover bg-no-repeat"
      drag
      dragSnapToOrigin
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      whileDrag={{ scale: 1.2 }}
    />
  );
}
