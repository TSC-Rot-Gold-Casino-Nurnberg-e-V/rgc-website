import { ContactForm } from "./ContactForm";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";

export default function KontaktPage() {
  return (
    <Main className="flex flex-col content-center bg-base-900">
      <PageHeading>Kontakt</PageHeading>
      <div className="mx-auto">
        <ContactForm />
      </div>
    </Main>
  );
}
