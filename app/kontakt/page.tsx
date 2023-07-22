import { ContactForm } from "./ContactForm";
import { PageHeading } from "../../components/PageHeading";

export default function KontaktPage() {
  return (
    <main className="flex flex-col content-center bg-base-950">
      <PageHeading>Kontakt</PageHeading>
      <div className="mx-auto">
        <ContactForm />
      </div>
    </main>
  );
}
