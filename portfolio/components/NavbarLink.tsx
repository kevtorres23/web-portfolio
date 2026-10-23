"use client";

import { motion } from "motion/react";

type LinkProps = {
  text: string;
  isActive?: boolean;
};

export default function NavbarLink(props: LinkProps) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className={`h-auto relative block overflow-hidden whitespace-nowrap text-sm font-normal text-slate-700 cursor-pointer`}
    >
      <motion.div transition={{duration: 0.2}} variants={{ initial: { y: "50%" }, hovered: { y: "-100%" } }}>
        {props.text}
      </motion.div>

      <motion.div transition={{duration: 0.2}} variants={{ initial: { y: "100%" }, hovered: { y: "-50%" } }}>
        {props.text}
      </motion.div>
    </motion.a>
  );
}
