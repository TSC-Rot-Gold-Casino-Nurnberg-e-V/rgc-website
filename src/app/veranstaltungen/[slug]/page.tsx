import { getSlugs, getVeranstaltung } from "@/api/api";
import { Prose } from "@/components/Prose";
import { Main } from "@/components/Main";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { MapIcon } from "@/components/icons/MapIcon";
import { Button } from "@/components/Button";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("veranstaltungen");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function VeranstaltungPage({ params }: Readonly<Props>) {
  const veranstaltung = await getVeranstaltung(params.slug);
  return (
    <Main className="container-md space-y-4">
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
          </div>
        </div>
      </div>
    </Main>
  );
}
