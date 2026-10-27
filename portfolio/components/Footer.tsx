"use client";

import Link from "next/link";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  DiscordLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full h-auto py-12 md:px-25 px-8 flex md:flex-row flex-col gap-10 md:items-center items-start justify-between">
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tighter text-slate-800">
          Kevin Torres
        </h1>
        <p className="text-sm font-normal text-slate-600">
          Diseñador y desarrollador web
        </p>
      </section>

      <div className="links flex flex-row gap-5">
        <Link href="https://www.linkedin.com/in/kevin-torres-urbina/">
          <LinkedinLogoIcon
            size={28}
            className="text-slate-600 hover:text-main/80 cursor-pointer"
          />
        </Link>

        <Link href="https://github.com/kevtorres23">
          <GithubLogoIcon
            size={28}
            className="text-slate-600 hover:text-main/80 cursor-pointer"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/kevin-torres-urbina/">
          <DiscordLogoIcon
            size={28}
            className="text-slate-600 hover:text-main/80 cursor-pointer"
          />
        </Link>
      </div>
    </footer>
  );
}
