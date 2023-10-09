import { ContactForm } from "./ContactForm";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";

export default function KontaktPage() {
  return (
    <Main>
      <PageHeading>Kontakt</PageHeading>
      <div>
        <ContactForm />
      </div>
    </Main>
  );
}
