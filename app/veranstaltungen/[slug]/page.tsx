import { getSlugs, getVeranstaltung } from "../../../api/api";
import { Prose } from "../../../components/Prose";
import { Main } from "../../../components/Main";
import { LocationIcon } from "../../../components/icons/LocationIcon";
import { CalendarIcon } from "../../../components/icons/CalendarIcon";
import { MapIcon } from "../../../components/icons/MapIcon";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("veranstaltungen");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function VeranstaltungPage({ params }: Props) {
  const veranstaltung = await getVeranstaltung(params.slug);
  return (
    <Main className="container-md space-y-4">
      <Prose content={veranstaltung.attributes.beschreibung} />

      <div className="flex justify-between gap-4 max-sm:flex-col">
        <div className="flex gap-4">
          <CalendarIcon />
          <div className="flex gap-2">
            <p>
              {new Date(veranstaltung.attributes.start).toLocaleDateString(
                "de-DE",
                {
                  day: "2-digit",
                  month: "2-digit",
                }
              )}
            </p>
            {veranstaltung.attributes.ende && (
              <>
                <p>bis</p>
                {new Date(veranstaltung.attributes.ende).toLocaleDateString(
                  "de-DE",
                  {
                    day: "2-digit",
                    month: "2-digit",
                  }
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <LocationIcon />
          <div className="space-y-4">
            <div>
              <p>{veranstaltung.attributes.ort.data.attributes.name}</p>
              <div className="flex gap-2">
                <p>{veranstaltung.attributes.ort.data.attributes.strasse}</p>
                <p>{veranstaltung.attributes.ort.data.attributes.hausnummer}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  {veranstaltung.attributes.ort.data.attributes.postleitzahl}
                </p>
                <p>{veranstaltung.attributes.ort.data.attributes.stadt}</p>
              </div>
            </div>
            <a
              href={veranstaltung.attributes.ort.data.attributes.maps}
              target="_blank"
              className="flex w-fit gap-2 rounded-lg border border-base-700 px-3 py-2 transition-all hover:scale-[1.01] hover:border-secondary-900 hover:text-accent hover:shadow"
            >
              <MapIcon />
              <span>Routenplanung</span>
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
