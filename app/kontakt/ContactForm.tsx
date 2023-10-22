"use client";

import { Button } from "../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twJoin } from "tailwind-merge";
import { useState } from "react";
import { LocationIcon } from "../../components/icons/LocationIcon";
import { MailIcon } from "../../components/icons/MailIcon";
import { HouseIcon } from "../../components/icons/HouseIcon";
import { Dialog } from "../../components/Dialog";
import { UnexpectedErrorDialog } from "../../components/UnexpectedErrorDialog";

const inputSchema = z.object({
  email: z
    .string()
    .min(1, "Dieses Feld ist ein Pflichtfeld")
    .email("Ungültiges E-Mail-Format"),
  subject: z.string().optional(),
  message: z.string().min(1, "Dieses Feld ist ein Pflichtfeld"),
});

type Inputs = z.infer<typeof inputSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ resolver: zodResolver(inputSchema) });

  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (input) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact-inquiry", {
        method: "POST",
        body: JSON.stringify({
          email: input.email,
          message: input.message,
        }),
      });
      if (response.ok) {
        setShowConfirmationDialog(true);
        reset();
      } else {
        setShowErrorDialog(true);
      }
    } catch (error) {
      setShowErrorDialog(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="container-md flex gap-10 max-sm:max-w-md max-sm:flex-col">
      <Dialog
        isOpen={showConfirmationDialog}
        onClose={() => setShowConfirmationDialog(false)}
        title="Anfrage erhalten"
        content="Vielen Dank für deine Anfrage. Unser Team wird sich schnellstmöglich mit dir in Verbindung setzten."
      />
      <UnexpectedErrorDialog
        isOpen={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
      />
      <div className="grow space-y-8">
        <h2 className="heading-small text-accent">Kontaktiere uns</h2>
        <div className="paragraph max-w-sm">
          Wir freuen uns über dein Interesse an unserem Verein. Hinterlasse
          deine Nachricht an uns und wir melden uns so schnell wie möglich bei
          dir.
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
          <label className="label" htmlFor="email">
            <span className="label-text">E-Mail</span>
          </label>
          <div className="flex flex-col gap-2">
            <input
              id="email"
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
          <label className="label" htmlFor="subject">
            <span className="label-text">Betreff</span>
          </label>
          <div className="flex flex-col gap-2">
            <input
              id="subject"
              type="text"
              className="input w-full border border-base-400 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-secondary-800"
              {...register("subject")}
            />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="message">
            <span className="label-text">Nachricht</span>
          </label>
          <div className="flex flex-col gap-2">
            <textarea
              id="message"
              rows={5}
              className="textarea rounded-lg border border-base-400 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-secondary-800"
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
          className={twJoin(isLoading && "loading", "self-end")}
        >
          Nachricht senden
        </Button>
      </form>
    </div>
  );
}
