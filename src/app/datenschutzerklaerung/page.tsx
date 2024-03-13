import { getDatenschutzerklaerung } from "@/api/api";
import { Prose } from "@/components/Prose";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default async function DatenschutzerklaerungPage() {
  const datenschutzerklaerung = await getDatenschutzerklaerung();
  return (
    <Main>
      <PageHeading>Datenschutz&shy;erklärung</PageHeading>
      <Prose className="container-md" content={datenschutzerklaerung.inhalt} />
    </Main>
  );
}
