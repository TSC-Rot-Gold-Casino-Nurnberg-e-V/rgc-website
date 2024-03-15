import { ContactForm } from "./ContactForm";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktformular und andere Kontaktmöglichkeiten zum TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default function KontaktPage() {
  return (
    <Main>
      <PageHeading>Kontakt</PageHeading>
      <ContactForm />
    </Main>
  );
}
