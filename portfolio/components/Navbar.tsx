"use client"

import NavbarLink from "./NavbarLink";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="z-999 w-full xl:px-60 md:px-20 md:pt-5 fixed top-0">
      <nav className="gap-3 flex w-full flex-row justify-between items-center bg-white border border-slate-200 px-7 md:py-3 py-5 md:rounded-full rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <p className="text-lg text-slate-900 font-semibold tracking-tighter">
          Kevin Torres
        </p>

        <div className="links md:flex hidden flex-row gap-7">
          <NavbarLink text="Mi trabajo" />
          <NavbarLink text="Sobre mí" />
          <NavbarLink text="Contacto" />
        </div>

        <Button>Descargar mi CV</Button>
      </nav>
    </div>
  );
}
