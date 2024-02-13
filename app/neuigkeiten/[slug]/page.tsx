import { getNeuigkeit, getSlugs } from "../../../api/api";
import { formatDate } from "../../../utils/formatDate";
import { Prose } from "../../../components/Prose";
import { Main } from "../../../components/Main";
import { BackButton } from "./BackButton";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("neuigkeiten");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function NeuigkeitPage({ params }: Readonly<Props>) {
  const neuigkeit = await getNeuigkeit(params.slug);

  return (
    <Main className="container-md space-y-4">
      <time className="text-normal text-base-500">
        {formatDate(new Date(neuigkeit.datum))}
      </time>
      <Prose content={neuigkeit.beschreibung} />
      <BackButton />
    </Main>
  );
}
