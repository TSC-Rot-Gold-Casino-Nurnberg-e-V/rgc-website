"use client";

import { Button } from "../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twJoin } from "tailwind-merge";
import { useState } from "react";
import { ContactInquiryConfirmationDialog } from "./ContactInquiryConfirmationDialog";

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
    reset,
  } = useForm<Inputs>({ resolver: zodResolver(inputSchema) });

  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (input) => {
    setIsLoading(true);
    await fetch("/api/contact-inquiry", {
      method: "POST",
      body: JSON.stringify({
        email: input.email,
        message: input.message,
      }),
    });
    setIsLoading(false);
    setShowConfirmationDialog(true);
    reset();
  };

  return (
    <div className="container-md flex items-center justify-between">
      <ContactInquiryConfirmationDialog
        isOpen={showConfirmationDialog}
        onClose={() => setShowConfirmationDialog(false)}
      />
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
        <Button
          disabled={isLoading}
          type="submit"
          className={twJoin(
            isLoading && "loading",
            "flex h-fit w-full items-center gap-2"
          )}
        >
          Abschicken
        </Button>
      </form>
    </div>
  );
}
