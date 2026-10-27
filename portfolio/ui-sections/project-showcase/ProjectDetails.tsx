"use client";

import TechnologyCard from "@/components/TechnologyCard";
import {
  CalendarBlankIcon,
  GlobeIcon,
  HammerIcon,
  PaletteIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

type DetailsProps = {
  date: string;
  stack: string[];
  website: string;
  design: string;
  longDesc: string;
  objective: string;
  results: string;
};

export default function ProjectDetails(props: DetailsProps) {
  return (
    <main className="w-full h-auto flex lg:flex-row flex-col lg:gap-40 sm:gap-25 gap-15 items-start justify-start lg:px-25 md:px-12 px-8">
      <section className="lateral flex flex-col md:gap-8 gap-6 lg:w-xl w-full">
        <div className="date flex flex-col gap-2 w-auto">
          <div className="flex flex-row gap-1.5 items-center">
            <HammerIcon
              strokeWidth="bold"
              size={20}
              className="text-slate-950"
            />
            <h3 className="text-base font-semibold text-slate-900 tracking-tight">
              Tecnologías
            </h3>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            {props.stack.map((technology, id) => (
              <TechnologyCard key={id} toolName={technology} />
            ))}
          </div>
        </div>

        <div className="date flex flex-col gap-1.5">
          <div className="flex flex-row gap-1.5 items-center w-auto">
            <CalendarBlankIcon
              strokeWidth="bold"
              size={20}
              className="text-slate-950"
            />
            <h3 className="text-base font-semibold text-slate-900 tracking-tight">
              Fecha
            </h3>
          </div>
          <p className="text-slate-600 text-sm">{props.date}</p>
        </div>

        <div className="date flex flex-col gap-1.5">
          <div className="flex flex-row gap-1.5 items-center w-auto">
            <GlobeIcon
              strokeWidth="bold"
              size={20}
              className="text-slate-950"
            />
            <h3 className="text-base font-semibold text-slate-900 tracking-tight">
              Sitio web
            </h3>
          </div>
          <Link href={props.website}>
            <p className="text-slate-600 text-sm underline">{props.website}</p>
          </Link>
        </div>

        <div className="date flex flex-col gap-1.5">
          <div className="flex flex-row gap-1.5 items-center w-auto">
            <PaletteIcon
              strokeWidth="bold"
              size={20}
              className="text-slate-950"
            />
            <h3 className="text-base font-semibold text-slate-900 tracking-tight">
              Archivo de diseño
            </h3>
          </div>
          <Link href={props.website}>
            <p className="text-slate-600 text-sm underline">figma.com</p>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tighter">
            Descripción
          </h1>
          <p className="text-slate-600 w-full text-base">{props.longDesc}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tighter">
            Objetivo
          </h1>
          <p className="text-slate-600 w-full text-base">{props.objective}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tighter">
            Resultados
          </h1>
          <p className="text-slate-600 w-full text-base">{props.results}</p>
        </div>
      </section>
    </main>
  );
}
