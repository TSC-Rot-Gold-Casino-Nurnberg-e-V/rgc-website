import { getVereinsgeschichte } from "@/api/api";
import { PageHeading } from "@/components/PageHeading";
import { Prose } from "@/components/Prose";
import { Main } from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vereinsgeschichte",
  description:
    "Die Geschichte des 1961 gegründeten TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default async function VereinsgeschichtePage() {
  const vereinsgeschichte = await getVereinsgeschichte();
  return (
    <Main>
      <PageHeading>Vereinsgeschichte</PageHeading>
      <Prose className="container-md" content={vereinsgeschichte.inhalt} />
    </Main>
  );
}
