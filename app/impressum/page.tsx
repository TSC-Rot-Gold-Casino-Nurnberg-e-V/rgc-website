import { getImpressum } from "../../api/api";
import { Prose } from "../../components/Prose";
import { PageHeading } from "../../components/PageHeading";

export default async function ImpressumPage() {
  const impressum = await getImpressum();
  return (
    <main>
      <PageHeading>Impressum</PageHeading>
      <Prose
        className="default-padding mx-auto max-w-screen-md"
        content={impressum.attributes.inhalt}
      />
    </main>
  );
}
