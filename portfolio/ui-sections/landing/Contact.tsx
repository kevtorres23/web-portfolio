"use client";

import Tag from "@/components/Tag";
import { EnvelopeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { motion, easeInOut } from "motion/react";
import Link from "next/link";

export default function Contact() {
  return (
    <main
      id="contact"
      className="w-full flex md:flex-row flex-col items-start justify-between lg:gap-25 gap-14 h-auto bg-slate-900 md:py-30 py-25 lg:px-25 md:px-14 px-8"
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeInOut, delay: 0.25 }}
        className="flex flex-col gap-8 w-full"
      >
        <div className="text flex flex-col gap-4">
          <Tag name="contact" isDark />
          <h1 className="text-4xl/snug font-medium tracking-tighter text-slate-50">
            Let’s talk!
          </h1>
          <p className="text-slate-300">
            I’m always open to working on projects involving frontend or
            backend development, or UI/UX design. Get in touch using the form
            below, and let’s talk about how I can help.
          </p>
        </div>

        <div className="w-full border border-slate-600 h-px"></div>

        <div className="text flex flex-col gap-6 items-start">
          <h1 className="text-xl/snug font-medium tracking-tighter text-slate-50">
            You can also reach me at:
          </h1>

          <div className="flex flex-row items-center justify-start gap-2">
            <EnvelopeIcon size={22} className="text-slate-300" />
            <p className="text-slate-300">kevintu236@gmail.com</p>
          </div>

          <Link href={"https://wa.me/526181889026"} >
            <Button className="bg-emerald-600! hover:bg-emerald-600/80! flex flex-row gap-2 items-center">
              <WhatsappLogoIcon size={24} className="text-slate-300" />
              Message me on WhatsApp
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Contact form */}
      <ContactForm />
    </main>
  );
}
