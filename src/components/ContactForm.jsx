import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form
        action="https://formsubmit.co/marlonchca3@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Nueva cotizacion web" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Solicita una cotizacion
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nombre" name="name" autoComplete="name" required />
          <TextInput
            label="Correo"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="Telefono"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput label="Mensaje" name="message" required />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Presupuesto estimado
              </legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="US$100 - US$500" name="budget" value="100-500 USD" />
              <RadioInput label="US$500 - US$1,500" name="budget" value="500-1500 USD" />
              <RadioInput label="US$1,500 - US$3,000" name="budget" value="1500-3000 USD" />
              <RadioInput label="Mas de US$3,000" name="budget" value="3000+ USD" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Enviar solicitud
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
