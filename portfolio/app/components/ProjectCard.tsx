"use client";

import Image from "next/image";
import Tag from "./Tag";

type Roles = "frontend" | "fullstack" | "design";

type CardProps = {
  name: string;
  cardDesc: string;
  imageUrl: string;
  roles: Roles[];
  isDark: boolean;
};

export default function ProjectCard(props: CardProps) {
  return (
    <div className="flex flex-col gap-5">
      <Image src={props.imageUrl} alt="" className="w-full h-87 rounded-lg" />

      <div className="stack flex flex-row flex-wrap gap-3">
        {props.roles.map((role, id) => (
          <Tag name={role} key={id} isDark={props.isDark} />
        ))}
      </div>

      <div className="details flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tighter text-slate-900">{props.name}</h1>
        <p className="text-sm font-normal text-slate-600">{props.cardDesc}</p>
      </div>
    </div>
  );
}
