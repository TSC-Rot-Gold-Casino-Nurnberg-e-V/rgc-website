import { getNeuigkeit, getSlugs } from "@/api/api";
import { formatDate } from "@/utils/formatDate";
import { Prose } from "@/components/Prose";
import { Main } from "@/components/Main";
import { BackButton } from "./BackButton";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("neuigkeiten");
  return slugs.map((slug) => ({ slug: slug }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const neuigkeit = await getNeuigkeit(params.slug);
  return {
    title: neuigkeit.titel,
    description: neuigkeit.vorschautext,
    openGraph: {
      title: neuigkeit.titel,
      description: neuigkeit.vorschautext,
      type: "article",
      publishedTime: neuigkeit.datum,
      images: [
        {
          url: neuigkeit.vorschaubild.url,
          height: neuigkeit.vorschaubild.height,
          width: neuigkeit.vorschaubild.width,
          alt: neuigkeit.titel,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: neuigkeit.titel,
      description: neuigkeit.vorschautext,
      images: [
        {
          url: neuigkeit.vorschaubild.url,
          height: neuigkeit.vorschaubild.height,
          width: neuigkeit.vorschaubild.width,
          alt: neuigkeit.titel,
        },
      ],
    },
  };
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
      <time className="text-sm text-base-500 sm:text-base">
        {formatDate(new Date(neuigkeit.datum))}
      </time>
      <Prose content={neuigkeit.beschreibung} />
      <BackButton />
    </Main>
  );
}
