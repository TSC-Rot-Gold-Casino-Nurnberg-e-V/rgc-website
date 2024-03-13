import { ContactForm } from "./ContactForm";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <Main>
      <PageHeading>Kontakt</PageHeading>
      <ContactForm />
    </Main>
  );
}
