import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Button } from "./Button";

const forminputs = z.object({
  name: z.string().min(1, "Bitte füllen Sie dieses Feld aus."),
  mail: z
    .string()
    .min(1, "Bitte füllen Sie dieses Feld aus.")
    .email("Dies ist keine valide Mailadresse."),
  phone: z.coerce.number().min(1, "Bitte füllen Sie dieses Feld aus."),
  message: z.string().min(1, "Bitte füllen Sie dieses Feld aus."),
  privacyPolicy: z.literal(true, {
    errorMap: () => ({
      message: "Bitte akzeptieren Sie die Datenschutzerklärung.",
    }),
  }),
});

type Forminputs = z.infer<typeof forminputs>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Forminputs>({
    mode: "all",
    resolver: zodResolver(forminputs),
  });

  const onSubmit: SubmitHandler<Forminputs> = (formInputs) => {
    console.log("onSubmit");
    console.log(formInputs);
    reset();
  };

  return (
    <div className="flex flex-col gap-8 text-base-50">
      <h1 className="text-3xl font-bold">Kontaktformular</h1>
      <div className="text-xl">
        <p>Rot-Gold-Casino e.V.</p>
        <p>Venusweg 7</p>
        <p>90763 Fürth</p>
      </div>
      <p className="text-xl">Eure Nachricht an uns.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              {...register("name")}
              className={`text-normal w-full max-w-md rounded-md p-2 ${
                errors.name
                  ? "text-secondary-400 outline outline-2 outline-offset-4 outline-secondary-400"
                  : ""
              }`}
            />
            {errors.name && (
              <p className="text-sm font-semibold text-secondary-400">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail">Email</label>
            <input
              id="mail"
              {...register("mail")}
              className={`text-normal w-full max-w-md rounded-md p-2 ${
                errors.mail
                  ? "text-secondary-400 outline outline-2 outline-offset-4 outline-secondary-400"
                  : ""
              }`}
            />
            {errors.mail && (
              <p className="text-sm font-semibold text-secondary-400">
                {errors.mail.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Telefon</label>
            <input
              type="number"
              id="phone"
              {...register("phone")}
              className={`text-normal w-full max-w-md rounded-md p-2 ${
                errors.phone
                  ? "text-secondary-400 outline outline-2 outline-offset-4 outline-secondary-400"
                  : ""
              }`}
            />
            {errors.phone && (
              <p className="text-sm font-semibold text-secondary-400">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Nachricht</label>
            <textarea
              id="message"
              {...register("message")}
              className={`text-normal w-full max-w-md rounded-md p-2 ${
                errors.message
                  ? "text-secondary-400 outline outline-2 outline-offset-4 outline-secondary-400"
                  : ""
              }`}
            />
            {errors.message && (
              <p className="text-sm font-semibold text-secondary-400">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="privacyPilocy">Datenschutz</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="privacyPolicy"
                {...register("privacyPolicy")}
              />
              <span>
                Hiermit akzeptiere ich die
                <Link href="/privacyPolicy" className="text-primary-300">
                  {" "}
                  Datenschutzerklärung.
                </Link>
              </span>
            </div>
            {errors.privacyPolicy && (
              <p className="text-sm font-semibold text-secondary-400">
                {errors.privacyPolicy.message}
              </p>
            )}
          </div>
        </div>
        <Button type="submit">Senden</Button>
      </form>
    </div>
  );
};
