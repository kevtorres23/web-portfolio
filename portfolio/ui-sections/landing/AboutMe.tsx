"use client";

import Tag from "@/components/Tag";
import ToolCard from "@/components/ToolCard";
import { motion, easeInOut } from "motion/react";

export default function AboutMe() {
  const frontendStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ];

  const backendStack = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Stripe",
    "NestJS",
  ];

  return (
    <main
      id="about-me"
      className="w-full flex flex-col items-start gap-10 h-auto bg-slate-900 md:py-30 py-25 md:px-25 px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
        className="flex md:flex-row flex-col gap-10 w-full md:items-center items-start justify-between"
      >
        <section className="flex flex-col gap-4 lg:max-w-xl">
          <Tag name="aboutme" isDark />
          <h1 className="text-4xl/snug font-medium tracking-tighter text-slate-50">
            I get involved in every stage of web development
          </h1>
          <p className="text-slate-300">
            I’ve had the opportunity to work on software products through every
            stage, and I always find something exciting and new in the process.
            That’s why I love web development so much. These are the tools I use
            in my workflow.
          </p>
        </section>

        <div className="md:w-45 md:h-45 w-40 h-40 rounded-full bg-[url(../public/me.jpeg)] bg-cover bg-no-repeat bg-center"></div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-2xl/snug font-medium tracking-tighter text-slate-100">
          Frontend technologies
        </h1>
        <div className="flex flex-row gap-4 flex-wrap">
          {frontendStack.map((tool, id) => {
            return <ToolCard key={id} toolName={tool} />;
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-2xl/snug font-medium tracking-tighter text-slate-100">
          Backend technologies
        </h1>
        <div className="flex flex-row gap-4 flex-wrap">
          {backendStack.map((tool, id) => {
            return <ToolCard key={id} toolName={tool} />;
          })}
        </div>
      </motion.section>
    </main>
  );
}
