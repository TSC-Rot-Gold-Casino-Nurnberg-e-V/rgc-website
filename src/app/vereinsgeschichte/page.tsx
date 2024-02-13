import { getVereinsgeschichte } from "@/api/api";
import { PageHeading } from "@/components/PageHeading";
import { Prose } from "@/components/Prose";
import { Main } from "@/components/Main";

export default async function VereinsgeschichtePage() {
  const vereinsgeschichte = await getVereinsgeschichte();
  return (
    <Main>
      <PageHeading>Vereinsgeschichte</PageHeading>
      <Prose className="container-md" content={vereinsgeschichte.inhalt} />
    </Main>
  );
}
