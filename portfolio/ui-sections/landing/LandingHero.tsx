"use client";

import HeroProjectCard from "@/components/HeroProjectCard";
import { easeInOut, motion } from "motion/react";

export default function LandingHero() {
  const projectCards = [
    "bg-[url(../public/project-covers/rentapp.png)]",
    "bg-[url(../public/project-covers/artex.png)]",
    "bg-[url(../public/project-covers/aguamia.png)]",
    "bg-[url(../public/project-covers/correos.png)]",
    "bg-[url(../public/project-covers/sadasi.png)]",
    "bg-[url(../public/project-covers/hemisferios.png)]",
  ];

  const carouselItems = [...projectCards, ...projectCards, ...projectCards];

  return (
    <main className="flex overflow-hidden flex-col gap-20 w-full h-auto pb-30 lg:pt-45 sm:pt-40 pt-35 px-8 items-center justify-center">
      <div className="central-text flex flex-col gap-5 items-center justify-center xl:max-w-xl">
        <motion.h1
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="sm:text-5xl/tight text-4xl/tight tracking-[-3.5px] font-medium text-center text-slate-900"
        >
          ¡Hola! Soy Kevin. Diseño y desarrollo{" "}
          <span className="text-main font-semibold">soluciones web</span>.
        </motion.h1>
        <motion.p
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
          className="text-center text-slate-600"
        >
          Me fascina el proceso completo de desarrollar soluciones web.
          Combino herramientas de diseño con habilidades de código para crear
          productos web completos y funcionales.
        </motion.p>
      </div>

      <div className="w-auto flex flex-row gap-5 infin">
        {carouselItems.map((item, id) => {
          return <HeroProjectCard key={id} projectUrl={item} />;
        })}
      </div>
    </main>
  );
}
