import { getImpressum } from "../../api/api";
import { Prose } from "../../components/Prose";
import { PageHeading } from "../../components/PageHeading";

export default async function ImpressumPage() {
  const impressum = await getImpressum();
  return (
    <main>
      <PageHeading>Impressum</PageHeading>
      <Prose className="container-md" content={impressum.attributes.inhalt} />
    </main>
  );
}
