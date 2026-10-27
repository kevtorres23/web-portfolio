"use client";
import { TagName } from "@/lib/types";
import Tag from "@/components/Tag";
import { easeInOut, motion } from "motion/react";
import Image from "next/image";

type HeroProps = {
  name: string;
  desc: string;
  mainImg: string;
  roles: TagName[];
};

export default function ProjectHero(props: HeroProps) {
  return (
    <main className="flex overflow-hidden flex-col md:gap-14 gap-8 w-full h-auto lg:pt-40 sm:pt-35 pt-30 lg:px-25 md:px-12 px-8 items-center justify-center">
      <div className="central-text flex flex-col md:gap-3 gap-4 items-center justify-center xl:max-w-xl">
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className="stack flex flex-row flex-wrap gap-3 items-center justify-center"
        >
          {props.roles.map((role, id) => (
            <Tag name={role} key={id} isDark={false} />
          ))}
        </motion.div>
        <motion.h1
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
          className="sm:text-5xl/tight text-3xl/tight tracking-[-3.5px] font-medium text-center text-slate-900"
        >
          {props.name}
        </motion.h1>
        <motion.p
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeInOut, delay: 0.3 }}
          className="text-center md:text-base text-sm -mt-2 text-slate-600"
        >
          {props.desc}
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        className="lg:h-150 md:h-100 h-70 bg-slate-200 w-full rounded-2xl"
      >
        <Image
          src={props.mainImg}
          unoptimized={true}
          quality={100}
          alt=""
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </motion.div>
    </main>
  );
}
