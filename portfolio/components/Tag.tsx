"use client";

import {
  UserListIcon,
  StackIcon,
  LaptopIcon,
  PaletteIcon,
  ChatCircleDotsIcon,
} from "@phosphor-icons/react";
import React from "react";

type TagProps = {
  text: string;
  icon: React.ReactNode;
  isDark: boolean;
};

type Icons = "aboutme" | "fullstack" | "design" | "frontend" | "contact";

export default function Tag(props: TagProps) {
  const icons: Record<Icons, React.ReactNode> = {
    aboutme: <UserListIcon size={20} className="text-main" />,
    fullstack: <StackIcon size={20} className="text-main" />,
    design: <PaletteIcon size={20} className="text-main" />,
    frontend: <LaptopIcon size={20} className="text-main" />,
    contact: <ChatCircleDotsIcon size={20} className="text-main" />,
  };

  return (
    <div
      className={`bg-white px-3 py-1.5 self-start items-center justify-center flex rounded-full flex-row gap-2 ${props.isDark ? "bg-white/10" : "border border-main"}`}
    >
      {icons[props.icon as keyof Record<Icons, React.ReactNode>]}

      <p
        className={`text-sm ${props.isDark ? "text-white" : "text-slate-600"}`}
      >
        {props.text}
      </p>
    </div>
  );
}
