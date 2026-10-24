"use client";

import Tag from "@/components/Tag";
import { EnvelopeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="w-full flex md:flex-row flex-col items-start justify-between lg:gap-25 gap-14 h-auto bg-slate-900 md:py-30 py-25 lg:px-25 md:px-14 px-8">
      <section className="flex flex-col gap-8 w-full">
        <div className="text flex flex-col gap-4">
          <Tag name="contact" isDark />
          <h1 className="text-4xl/snug font-medium tracking-tighter text-slate-50">
            ¡Hablemos!
          </h1>
          <p className="text-slate-300">
            Estoy siempre abierto a trabajar en proyectos que requieran código
            frontend, backend, o diseño UI/UX. Puedes contactarme a través del
            siguiente formulario y hablemos sobre las maneras en las que puedo
            colaborar.
          </p>
        </div>

        <div className="w-full border border-slate-600 h-px"></div>

        <div className="text flex flex-col gap-6 items-start">
          <h1 className="text-xl/snug font-medium tracking-tighter text-slate-50">
            También puedes contactarme por:
          </h1>

          <div className="flex flex-row items-center justify-start gap-2">
            <EnvelopeIcon size={22} className="text-slate-300" />
            <p className="text-slate-300">kevintu236@gmail.com</p>
          </div>

          <Button className="bg-emerald-600! hover:bg-emerald-600/80! flex flex-row gap-2 items-center">
            <WhatsappLogoIcon size={24} className="text-slate-300" />
            Envíame un WhatsApp
          </Button>
        </div>
      </section>

      {/*Formulario de Contacto*/}
      <ContactForm/>
    </main>
  );
}
