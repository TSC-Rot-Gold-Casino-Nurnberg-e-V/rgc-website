import { getNeuigkeit, getSlugs } from "@/api/api";
import { formatDate } from "@/utils/formatDate";
import { Prose } from "@/components/Prose";
import { Main } from "@/components/Main";
import { BackButton } from "./BackButton";
import { Metadata, ResolvingMetadata } from "next";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("neuigkeiten");
  return slugs.map((slug) => ({ slug: slug }));
};

export const generateMetadata = async (
  { params }: Props,
  resolvingMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const slug = (await params).slug;
  const neuigkeit = await getNeuigkeit(slug);
  const resolvedMetadata = await resolvingMetadata;
  return {
    title: neuigkeit.titel,
    description: neuigkeit.vorschautext,
    openGraph: {
      type: "article",
      locale: resolvedMetadata.openGraph?.locale,
      siteName: resolvedMetadata.openGraph?.siteName,
      title: neuigkeit.titel,
      description: neuigkeit.vorschautext,
      publishedTime: neuigkeit.datum,
      images: neuigkeit.vorschaubild
        ? [
            {
              url: neuigkeit.vorschaubild.url,
              height: neuigkeit.vorschaubild.height,
              width: neuigkeit.vorschaubild.width,
              alt: neuigkeit.titel,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: neuigkeit.titel,
      description: neuigkeit.vorschautext,
      site: resolvedMetadata.twitter?.site ?? undefined,
      creator: resolvedMetadata.twitter?.creator ?? undefined,
      creatorId: resolvedMetadata.twitter?.creatorId ?? undefined,
      images: neuigkeit.vorschaubild
        ? [
            {
              url: neuigkeit.vorschaubild.url,
              height: neuigkeit.vorschaubild.height,
              width: neuigkeit.vorschaubild.width,
              alt: neuigkeit.titel,
            },
          ]
        : undefined,
    },
  };
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NeuigkeitPage({ params }: Readonly<Props>) {
  const slug = (await params).slug;
  const neuigkeit = await getNeuigkeit(slug);

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
