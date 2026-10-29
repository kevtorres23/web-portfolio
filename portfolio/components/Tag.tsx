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
      icon: <UserListIcon size={18} className="text-main" />,
      name: "About me",
    },
    fullstack: {
      icon: <StackIcon size={18} className="text-main" />,
      name: "Full-stack developer",
    },
    design: {
      icon: <PaletteIcon size={18} className="text-main" />,
      name: "UI/UX designer",
    },
    frontend: {
      icon: <LaptopIcon size={18} className="text-main" />,
      name: "Frontend developer",
    },
    contact: {
      icon: <ChatCircleDotsIcon size={18} className="text-main" />,
      name: "Contact",
    },
  };

  return (
    <div
      className={`bg-white px-2.5 py-1 self-start items-center justify-center flex rounded-full flex-row gap-1.5 ${props.isDark ? "bg-white/10" : "border border-main/80"}`}
    >
      {tagVariants[props.name as keyof Record<TagName, TagContent>].icon}

      <p
        className={`text-xs tracking-normal ${props.isDark ? "text-white" : "text-slate-700 font-medium"}`}
      >
        {tagVariants[props.name as keyof Record<TagName, TagContent>].name}
      </p>
    </div>
  );
}
