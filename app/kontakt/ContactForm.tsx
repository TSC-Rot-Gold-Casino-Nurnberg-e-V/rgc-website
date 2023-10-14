"use client";

import { Button } from "../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface Inputs {
  email: string;
  message: string;
}

const inputSchema = z.object({
  email: z
    .string()
    .min(1, "Dieses Feld ist ein Pflichtfeld")
    .email("Bitte geben Sie die korrekte E-Mail Adresse an."),
  message: z.string().min(1, "Dieses Feld ist ein Pflichtfeld"),
});
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(inputSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ email: data.email }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="container-md flex items-center justify-between">
      <div>Platzhalter Text</div>
      <form
        className="form-control w-full max-w-xs gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="label">
            <span className="label-text">E-Mail</span>
          </label>
          <input
            type="email"
            className="input-bordered input w-full max-w-xs"
            {...register("email")}
          />
          {errors.email?.message && (
            <span className="label-text-alt text-red-300">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Nachricht</span>
          </label>
          <textarea
            className="h-52 w-full"
            {...register("message", { required: true })}
          />
        </div>
        {errors.message?.message && (
          <span className="label-text-alt text-red-300">
            {errors.message.message}
          </span>
        )}
        <Button type="submit">Abschicken</Button>
      </form>
    </div>
  );
}
