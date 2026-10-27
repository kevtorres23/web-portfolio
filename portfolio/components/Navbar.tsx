"use client";

import NavbarLink from "./NavbarLink";
import NormalButton from "./Button";
import { Button } from "./ui/button";
import {
  ListIcon,
  FolderIcon,
  UserCircleIcon,
  ChatCircleDotsIcon,
} from "@phosphor-icons/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="z-9 w-full xl:px-60 md:px-20 md:pt-5 fixed top-0">
      <nav className="gap-3 flex w-full flex-row justify-between items-center bg-white border border-slate-200 backdrop-blur-xs px-5 md:py-3 py-5 md:rounded-full rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <Link
          href={"/"}
          className="text-lg text-slate-900 font-semibold tracking-tighter"
        >
          Kevin Torres
        </Link>

        <div className="links md:flex hidden flex-row items-center place-content-center h-auto justify-center gap-7">
          <Link href={"/#my-work"}>
            <NavbarLink text="Mi trabajo" />
          </Link>

          <Link href={"/#about-me"}>
            <NavbarLink text="Sobre mí" />
          </Link>

          <Link href={"/#contact"}>
            <NavbarLink text="Contacto" />
          </Link>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <NormalButton>Descargar mi CV</NormalButton>
          <NavbarPopover />
        </div>
      </nav>
    </div>
  );
}

function NavbarPopover() {
  return (
    <Popover>
      <PopoverTrigger
        className="md:hidden block"
        render={
          <Button variant="ghost">
            <ListIcon size={24} className="text-slate-800 " />
          </Button>
        }
      />
      <PopoverContent className="w-50 p-4" align="end">
        <div className="flex flex-col items-start gap-4">
          <button className="flex flex-row gap-1.5 items-center">
            <FolderIcon size={18} className="text-slate-700" />
            <NavbarLink text="Mi trabajo" />
          </button>

          <button className="flex flex-row gap-1.5 items-center">
            <UserCircleIcon size={18} className="text-slate-700" />
            <NavbarLink text="Sobre mí" />
          </button>

          <button className="flex flex-row gap-1.5 items-center">
            <ChatCircleDotsIcon size={18} className="text-slate-700" />
            <NavbarLink text="Contacto" />
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
