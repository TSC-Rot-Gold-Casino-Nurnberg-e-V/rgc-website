"use client";

import { Button } from "../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { twJoin, twMerge } from "tailwind-merge";
import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { LocationIcon } from "../../components/icons/LocationIcon";
import { MailIcon } from "../../components/icons/MailIcon";
import { HouseIcon } from "../../components/icons/HouseIcon";
import { Dialog } from "../../components/Dialog";
import { UnexpectedErrorDialog } from "../../components/UnexpectedErrorDialog";
import Link from "next/link";
import { LoadingSpinnerIcon } from "../../components/icons/LoadingSpinnerIcon";
import { SendIcon } from "../../components/icons/SendIcon";

const inputSchema = z.object({
  name: z.string().min(1, "Dieses Feld ist ein Pflichtfeld"),
  email: z
    .string()
    .min(1, "Dieses Feld ist ein Pflichtfeld")
    .email("Ungültiges E-Mail-Format"),
  subject: z.string().optional(),
  message: z.string().min(1, "Dieses Feld ist ein Pflichtfeld"),
  hasAgreedToPrivacyPolicy: z.boolean().refine((hasAgreed) => hasAgreed, {
    message: "Bitte akzeptiere unsere Datenschutzerklärung",
  }),
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
          name: input.name,
          email: input.email,
          subject: input.subject,
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
    <div className="container-md grid gap-10 max-sm:max-w-sm sm:grid-cols-2">
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
      <section className="space-y-6">
        <h2 className="heading-small text-accent">Kontaktiere uns</h2>
        <div className="paragraph">
          Wir freuen uns über dein Interesse an unserem Verein. Hinterlasse
          deine Nachricht an uns und wir melden uns so schnell wie möglich bei
          dir.
        </div>
        <div className="space-y-4">
          <div className="text-normal flex items-center gap-2">
            <HouseIcon />
            <span>TSC Rot-Gold-Casino Nürnberg e.V.</span>
          </div>
          <a
            className="text-normal hover:text-accent flex w-fit items-center gap-2 rounded-full transition-colors"
            href="https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28"
            target="_blank"
          >
            <LocationIcon />
            <span>Venusweg 7, 90763 Fürth</span>
          </a>
          <a
            className="text-normal hover:text-accent flex w-fit items-center gap-2 rounded-full transition-colors"
            href="mailto:info@rot-gold-casino.de"
          >
            <MailIcon />
            <span>info@rot-gold-casino.de</span>
          </a>
        </div>
      </section>

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Input
          {...register("name")}
          label="Name *"
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          label="E-Mail *"
          error={errors.email?.message}
        />
        <Input
          {...register("subject")}
          label="Betreff"
          error={errors.subject?.message}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Nachricht *</label>
          <textarea
            id="message"
            rows={5}
            className={twJoin(
              "rounded-md border-base-300 focus:border-secondary-900 focus:ring-secondary-900",
              errors.message?.message &&
                "border-red-500 focus:border-red-500 focus:ring-red-500",
            )}
            {...register("message")}
          />
          {errors.message?.message && (
            <span className="text-small text-red-500">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacyPolicy"
              {...register("hasAgreedToPrivacyPolicy")}
              className="size-5 cursor-pointer rounded-md text-secondary-900 focus:ring-secondary-900"
            />
            <label htmlFor="privacyPolicy" className="space-x-1.5">
              <Link
                href="datenschutzerklaerung"
                target="_blank"
                className="text-accent rounded-md"
              >
                Datenschutzerklärung
              </Link>
              <span>akzeptieren</span>
            </label>
          </div>
          {errors.hasAgreedToPrivacyPolicy?.message && (
            <span className="text-small text-red-500">
              {errors.hasAgreedToPrivacyPolicy.message}
            </span>
          )}
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          className="self-end"
          startIcon={isLoading ? <LoadingSpinnerIcon /> : <SendIcon />}
        >
          Nachricht senden
        </Button>
      </form>
    </div>
  );
}

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...inputProps }, ref) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputProps.name}>{label}</label>
      <input
        id={inputProps.name}
        ref={ref}
        className={twMerge(
          "rounded-md border-base-300 focus:border-secondary-900 focus:ring-secondary-900",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className,
        )}
        {...inputProps}
      />
      {error && <span className="text-small text-red-500">{error}</span>}
    </div>
  ),
);

Input.displayName = "Input";
