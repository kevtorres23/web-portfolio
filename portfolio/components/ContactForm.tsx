import Button from "./Button";
import { NormalInput } from "./NormalInput";
import TextareaField from "./Textarea";
import { motion, easeInOut } from "motion/react";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: easeInOut, delay: 0.4 }}
      className="bg-white rounded-xl flex flex-col md:p-8 p-6 h-auto gap-5 lg:max-w-lg w-full"
    >
      <h1 className="text-slate-950 text-xl font-semibold tracking-tighter">
        Formulario de contacto
      </h1>

      <form action="" className="flex flex-col gap-5 w-full">
        <div className="flex md:flex-row flex-col w-full gap-5">
          <NormalInput placeholder="" label="Tu nombre" type="text" id="name" />
          <NormalInput
            placeholder=""
            label="Tu apellido"
            type="text"
            id="lastname"
          />
        </div>

        <NormalInput
          placeholder=""
          label="Correo electrónico"
          type="email"
          id="email"
        />

        <TextareaField placeholder="" label="Comentario" id="comment" />

        <Button className="flex flex-row gap-2 items-center justify-center">
          Enviar mensaje
        </Button>
      </form>
    </motion.div>
  );
}
