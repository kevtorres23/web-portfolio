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
    <div className="flex flex-col gap-5 cursor-pointer">
      <div className="w-full lg:min-h-87 min-h-50 rounded-lg">
        <Image src={props.imageUrl} unoptimized={true} quality={100} alt="" width={0} height={0} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px"}} />
      </div>

      <div className="stack flex flex-row flex-wrap gap-3">
        {props.roles.map((role, id) => (
          <Tag name={role} key={id} isDark={props.isDark} />
        ))}
      </div>

      <div className="details flex flex-col md:gap-2 gap-1">
        <p className="md:text-3xl text-2xl font-semibold tracking-tighter text-slate-900">
          {props.name}
        </p>
        <p className="text-sm font-normal text-slate-600">{props.cardDesc}</p>
      </div>
    </div>
  );
}
