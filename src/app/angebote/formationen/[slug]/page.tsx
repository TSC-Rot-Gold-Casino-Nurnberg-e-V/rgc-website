import { getFormation, getSlugs } from "@/api/api";
import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { Prose } from "@/components/Prose";
import { FormationTabs } from "../FormationTabs";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("formationen");
  return slugs.map((slug) => ({ slug: slug }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  const formation = await getFormation(slug);
  return {
    title: formation.titel,
    description: formation.beschreibung,
  };
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FormationPage({ params }: Readonly<Props>) {
  const slug = (await params).slug;
  const formation = await getFormation(slug);

  return (
    <Main>
      <PageHeading>{formation.titel}</PageHeading>
      <Prose content={formation.beschreibung} className="container-lg pb-0" />
      <FormationTabs teams={formation.teams} />
    </Main>
  );
}
