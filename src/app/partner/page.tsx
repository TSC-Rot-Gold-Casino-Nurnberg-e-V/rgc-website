import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { Prose } from "@/components/Prose";
import { getPartner } from "@/api/api";

export const metadata = {
  title: "Partner",
  description: "Unsere Partner und Sponsoren",
};

export default async function SponsorenPage() {
  const partner = await getPartner();
  return (
    <Main>
      <PageHeading>Partner</PageHeading>
      <Prose className="container-md" content={partner.inhalt} />
    </Main>
  );
}
