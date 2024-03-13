import { getImpressum } from "@/api/api";
import { Prose } from "@/components/Prose";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default async function ImpressumPage() {
  const impressum = await getImpressum();
  return (
    <Main>
      <PageHeading>Impressum</PageHeading>
      <Prose className="container-md" content={impressum.inhalt} />
    </Main>
  );
}
