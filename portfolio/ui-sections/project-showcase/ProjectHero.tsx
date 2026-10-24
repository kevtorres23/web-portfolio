"use client";

import { easeInOut, motion } from "motion/react";

type HeroProps = {
    name: string;
    desc: string;
    mainImg: string;
}

export default function ProjectHero(props: HeroProps) {
  return (
    <main className="flex overflow-hidden flex-col gap-20 w-full h-auto pb-30 lg:pt-45 sm:pt-40 pt-35 px-8 items-center justify-center">
      <div className="central-text flex flex-col gap-5 items-center justify-center xl:max-w-xl">
        <motion.h1
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="sm:text-5xl/tight text-4xl/tight tracking-[-3.5px] font-medium text-center text-slate-900"
        >
            {props.name}
        </motion.h1>
        <motion.p
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
          className="text-center text-slate-600"
        >
          {props.desc}
        </motion.p>
      </div>
    </main>
  );
}
