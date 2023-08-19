import { getNeuigkeit, getSlugs } from "../../../api/api";
import { formatDate } from "../../../utils/formatDate";
import Link from "next/link";
import { Prose } from "../../../components/Prose";
import { Main } from "../../../components/Main";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("neuigkeiten");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function NeuigkeitPage({ params }: Props) {
  const neuigkeit = await getNeuigkeit(params.slug);

  return (
    <Main className="container-md space-y-4">
      <time className="text-normal text-base-500">
        {formatDate(new Date(neuigkeit.datum))}
      </time>
      <Prose content={neuigkeit.beschreibung} />
      <Link
        href="/neuigkeiten"
        className="flex w-fit items-center gap-2 p-1 text-accent no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="mt-0.5 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span className="text-large">zurück</span>
      </Link>
    </Main>
  );
}
