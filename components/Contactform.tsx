import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const forminputs = z.object({
  name: z.string().min(1, "Bitte füllen Sie dieses Feld aus"),
  mail: z
    .string()
    .min(1, "Bitte füllen Sie dieses Feld aus")
    .email("Dies ist keine valide Mailadresse."),
  phone: z.number().min(1, "Bitte füllen Sie dieses Feld aus"),
  message: z.string().min(1, "Bitte füllen Sie dieses Feld aus"),
});

type Forminputs = z.infer<typeof forminputs>;

export const Contactform = () => {
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
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl text-red-900 font-bold">Kontaktformular</h1>
      <div className="text-xl">
        <p>Rot-Gold-Casino e.V.</p>
        <p>Venusweg 7</p>
        <p>90763 Fürth</p>
      </div>
      <p className="text-xl">Eure Nachricht an uns.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              {...register("name")}
              className={`p-2 text-md w-full max-w-md ring-1 ring-inset ring-gray-200 rounded-md ${
                errors.name ? "text-red-900 ring-red-900" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-900 text-sm font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="mail">Email *</label>
            <input
              id="mail"
              {...register("mail")}
              className={`p-2 text-md ring-1 ring-inset ring-gray-200 rounded-md w-full max-w-md  ${
                errors.mail ? "text-red-900 ring-red-900" : ""
              }`}
            />
            {errors.mail && (
              <p className="text-red-900 text-sm font-semibold">
                {errors.mail.message}
              </p>
            )}
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Telefon</label>
            <input
              type="number"
              id="phone"
              {...register("phone", { valueAsNumber: true })}
              className={`p-2 text-md ring-1 ring-inset ring-gray-200 rounded-md w-full max-w-md ${
                errors.phone ? "text-red-900 ring-red-900" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-900 text-sm font-semibold">
                {errors.phone.message}
              </p>
            )}
          </div>{" "}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Nachricht</label>
            <textarea
              id="message"
              {...register("message")}
              className={`p-2 text-md ring-1 ring-inset ring-gray-200 rounded-md w-full max-w-md ${
                errors.message ? "text-red-900 ring-red-900" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-900 text-sm font-semibold">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="rounded rounded-2xl bg-red-900 text-white font-semibold w-fit px-8 py-2"
        >
          Senden
        </button>
      </form>
    </div>
  );
};
