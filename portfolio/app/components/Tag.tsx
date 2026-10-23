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
  name: string;
  isDark: boolean;
};

type TagContent = {
  icon: React.ReactNode;
  name: string;
};

type TagName = "aboutme" | "fullstack" | "design" | "frontend" | "contact";

export default function Tag(props: TagProps) {
  const tagVariants: Record<TagName, TagContent> = {
    aboutme: {
      icon: <UserListIcon size={20} className="text-main" />,
      name: "Sobre mí",
    },
    fullstack: {
      icon: <StackIcon size={20} className="text-main" />,
      name: "Desarrollador full-stack",
    },
    design: {
      icon: <PaletteIcon size={20} className="text-main" />,
      name: "Diseñador UI/UX",
    },
    frontend: {
      icon: <LaptopIcon size={20} className="text-main" />,
      name: "Desarrollador frontend",
    },
    contact: {
      icon: <ChatCircleDotsIcon size={20} className="text-main" />,
      name: "Contacto",
    },
  };

  return (
    <div
      className={`bg-white px-3 py-1.5 self-start items-center justify-center flex rounded-full flex-row gap-2 ${props.isDark ? "bg-white/10" : "border border-main"}`}
    >
      {tagVariants[props.name as keyof Record<TagName, TagContent>].icon}

      <p
        className={`text-sm ${props.isDark ? "text-white" : "text-slate-600"}`}
      >
        {tagVariants[props.name as keyof Record<TagName, TagContent>].name}
      </p>
    </div>
  );
}
