import { getDatenschutzerklaerung } from "../../api/api";
import { Prose } from "../../components/Prose";
import { PageHeading } from "../../components/PageHeading";

export default async function DatenschutzerklaerungPage() {
  const datenschutzerklaerung = await getDatenschutzerklaerung();
  return (
    <main>
      <PageHeading>Datenschutz&shy;erklärung</PageHeading>
      <Prose
        className="default-padding mx-auto max-w-screen-md"
        content={datenschutzerklaerung.attributes.inhalt}
      />
    </main>
  );
}
