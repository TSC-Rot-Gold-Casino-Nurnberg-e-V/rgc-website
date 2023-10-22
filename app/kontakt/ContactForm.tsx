"use client";

import { Button } from "../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twJoin } from "tailwind-merge";
import { useState } from "react";
import { ContactInquiryConfirmationDialog } from "./ContactInquiryConfirmationDialog";
import { LocationIcon } from "../../components/icons/LocationIcon";
import { MailIcon } from "../../components/icons/MailIcon";
import { HouseIcon } from "../../components/icons/HouseIcon";

export interface Inputs {
  email: string;
  message: string;
}

const inputSchema = z.object({
  email: z
    .string()
    .min(1, "Dieses Feld ist ein Pflichtfeld")
    .email("Bitte gebe eine korrekte E-Mail Adresse an."),
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
    <div className="container-md flex items-center justify-between gap-6 max-md:flex-col md:gap-14">
      <ContactInquiryConfirmationDialog
        isOpen={showConfirmationDialog}
        onClose={() => setShowConfirmationDialog(false)}
      />
      <div className="flex h-full flex-col gap-10">
        <div className="heading-small text-accent">Kontaktiere uns</div>
        <div className="paragraph max-w-sm">
          Wir freuen uns über dein Interesse an unserem Verein. Hinterlasse
          deine Nachricht an uns und wir melden uns so schnell wie möglich bei
          dir zurück.
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-normal flex items-center gap-2">
            <HouseIcon />
            <div>TSC Rot-Gold-Casino Nürnberg e.V.</div>
          </div>
          <div className="text-normal flex items-center gap-2">
            <LocationIcon />
            <div>Venusweg 7, 90763 Fürth</div>
          </div>
          <div className="text-normal flex items-center gap-2">
            <MailIcon />
            <div>info@rot-gold-casino.de</div>
          </div>
        </div>
      </div>

      <form
        className="flex w-full flex-col gap-4 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label className="label">
            <span className="label-text">E-Mail</span>
          </label>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              className="input w-full border border-base-400 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-secondary-800"
              {...register("email")}
            />
            {errors.email?.message && (
              <span className="label-text-alt text-secondary-800">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Nachricht</span>
          </label>
          <div className="flex flex-col gap-2">
            <textarea
              className="h-52 w-full rounded-lg border border-base-400"
              {...register("message", { required: true })}
            />
            {errors.message?.message && (
              <span className="label-text-alt w-full text-secondary-800">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          className={twJoin(isLoading && "loading", "w-full")}
        >
          Abschicken
        </Button>
      </form>
    </div>
  );
}
