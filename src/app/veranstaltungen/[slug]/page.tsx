import { getSlugs, getVeranstaltung } from "@/api/api";
import { Prose } from "@/components/Prose";
import { Main } from "@/components/Main";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { MapIcon } from "@/components/icons/MapIcon";
import { Button } from "@/components/Button";
import { Metadata, ResolvingMetadata } from "next";
import { InfoIcon } from "@/components/icons/InfoIcon";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("veranstaltungen");
  return slugs.map((slug) => ({ slug: slug }));
};

export const generateMetadata = async (
  { params }: Props,
  resolvingMetadata: ResolvingMetadata,
): Promise<Metadata> => {
  const slug = (await params).slug;
  const veranstaltung = await getVeranstaltung(slug);
  const resolvedMetadata = await resolvingMetadata;
  return {
    title: veranstaltung.titel,
    description: veranstaltung.beschreibung
      .replace(/<[^>]*>/g, " ") // remove HTML tags
      .replace(/\s+/g, " "), // replace multiple spaces with a single space
    openGraph: {
      type: "article",
      locale: resolvedMetadata.openGraph?.locale,
      siteName: resolvedMetadata.openGraph?.siteName,
      title: veranstaltung.titel,
      url: `https://rot-gold-casino.de/veranstaltungen/${slug}`,
      images: resolvedMetadata.openGraph?.images,
    },
    twitter: {
      card: "summary",
      title: veranstaltung.titel,
      site: resolvedMetadata.twitter?.site ?? undefined,
      creator: resolvedMetadata.twitter?.creator ?? undefined,
      creatorId: resolvedMetadata.twitter?.creatorId ?? undefined,
      images: resolvedMetadata.twitter?.images,
    },
  };
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function VeranstaltungPage({ params }: Readonly<Props>) {
  const slug = (await params).slug;
  const veranstaltung = await getVeranstaltung(slug);
  return (
    <Main className="container-md space-y-16">
      <Prose content={veranstaltung.beschreibung} />

      <div className="flex justify-between gap-4 max-sm:flex-col">
        <div className="flex gap-4">
          <CalendarIcon />
          <div className="flex gap-2">
            <p>
              {new Date(veranstaltung.start).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
              })}
            </p>
            {veranstaltung.ende && (
              <>
                <p>bis</p>
                {new Date(veranstaltung.ende).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <LocationIcon />
          <div className="space-y-4">
            <div>
              <p>{veranstaltung.ort.name}</p>
              <div className="flex gap-2">
                <p>{veranstaltung.ort.strasse}</p>
                <p>{veranstaltung.ort.hausnummer}</p>
              </div>
              <div className="flex gap-2">
                <p>{veranstaltung.ort.postleitzahl}</p>
                <p>{veranstaltung.ort.stadt}</p>
              </div>
            </div>
            <a
              href={veranstaltung.ort.maps}
              target="_blank"
              className="block w-fit rounded-full"
            >
              <Button tabIndex={-1} variant="secondary" startIcon={<MapIcon />}>
                Routenplanung
              </Button>
            </a>
            {veranstaltung.ort.parken !== null && (
              <a
                href={veranstaltung.ort.parken}
                target="_blank"
                className="block w-fit rounded-full"
              >
                <Button
                  tabIndex={-1}
                  variant="secondary"
                  startIcon={<InfoIcon />}
                >
                  Parkplätze
                </Button>
              </a>
            )}
            {veranstaltung.helfertool && (
              <a
                href={veranstaltung.helfertool}
                target="_blank"
                className="block w-fit rounded-full"
              >
                <Button
                  tabIndex={-1}
                  variant="secondary"
                  startIcon={<InfoIcon />}
                >
                  Helfer
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
}
