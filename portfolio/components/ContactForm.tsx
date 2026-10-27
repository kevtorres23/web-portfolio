import { CheckIcon, ExclamationMarkIcon } from "@phosphor-icons/react";
import NormalButton from "./Button";
import { NormalInput } from "./NormalInput";
import TextareaField from "./Textarea";
import { motion, easeInOut } from "motion/react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [isFormSent, setIsFormSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const form = useRef(null);

  function onSendMessage(e: React.SubmitEvent) {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_1467m9r",
        "template_p5sh9oj",
        form.current ? form.current : "",
        {
          publicKey: "KHAjGcDY4i0l8bXsO",
        },
      )
      .then(
        () => {
          setFormError("");
          setIsLoading(false);
          setIsFormSent(true);
        },
        (error) => {
          setFormError(
            "Un error ocurrió y no fue posible enviar tu mensaje. Por favor, inténtalo de nuevo.",
          );
          setIsLoading(false);
          console.log(error);
        },
      );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: easeInOut, delay: 0.4 }}
      className="bg-white rounded-xl flex flex-col md:p-8 p-6 h-auto gap-5 lg:max-w-lg w-full"
    >
      {!isFormSent && formError === "" && (
        <form
          ref={form}
          onSubmit={onSendMessage}
          action=""
          className="flex flex-col gap-5 w-full"
        >
          <h1 className="text-slate-950 text-xl font-semibold tracking-tighter">
            Formulario de contacto
          </h1>

          <div className="flex md:flex-row flex-col w-full gap-5">
            <NormalInput
              placeholder=""
              label="Tu nombre"
              type="text"
              id="name"
            />
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

          <TextareaField placeholder="" label="Comentario" id="message" />

          <NormalButton className={`flex flex-row gap-2 items-center justify-center ${isLoading ? "opacity-75 cursor-progress!" : "opacity-100"}`}>
            {isLoading ? "Enviando..." : "Enviar mensaje"}
          </NormalButton>
        </form>
      )}

      {isFormSent && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-auto h-auto p-4 items-center justify-center bg-main rounded-full">
            <CheckIcon weight="bold" size={30} className="text-white" />
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="font-semibold text-xl tracking-tight text-slate-900 text-center">
              ¡Gracias por contactarme!
            </h1>
            <p className="font-normal text-sm text-slate-600 text-center">
              Me pondré en contacto contigo cuanto antes para responder a tu
              solicitud, mensaje o comentario.
            </p>
          </div>

          <Button
            onClick={() => setIsFormSent(false)}
            variant="ghost"
            className="flex flex-row gap-2 text-main hover:text-main! font-semibold cursor-pointer items-center justify-center"
          >
            Enviar otro mensaje
          </Button>
        </div>
      )}

      {!isFormSent && formError != "" && (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-auto h-auto p-4 items-center justify-center bg-main rounded-full">
            <ExclamationMarkIcon weight="bold" size={30} className="text-white" />
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="font-semibold text-xl tracking-tight text-slate-900 text-center">
              Ocurrió un error inesperado
            </h1>
            <p className="font-normal text-sm text-slate-600 text-center">
              {formError}
            </p>
          </div>

          <Button
            onClick={() => setIsFormSent(false)}
            variant="ghost"
            className="flex flex-row gap-2 text-main hover:text-main! font-semibold cursor-pointer items-center justify-center"
          >
            Intentarlo de nuevo
          </Button>
        </div>
      )}
    </motion.div>
  );
}
