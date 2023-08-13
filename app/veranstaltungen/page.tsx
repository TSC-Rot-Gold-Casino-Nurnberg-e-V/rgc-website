import { getVeranstaltungen } from "../../api/api";
import { VeranstaltungCard } from "./VeranstaltungCard";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";

export default async function VeranstaltungenPage() {
  const veranstaltungen = await getVeranstaltungen();
  return (
    <Main className="bg-base-100">
      <PageHeading>Veranstaltungen</PageHeading>
      <div className="container-lg space-y-4">
        {veranstaltungen.length > 0 ? (
          <>
            {veranstaltungen.map((veranstaltung) => (
              <VeranstaltungCard
                slug={veranstaltung.attributes.slug}
                titel={veranstaltung.attributes.titel}
                start={new Date(veranstaltung.attributes.start)}
                ende={
                  veranstaltung.attributes.ende !== null
                    ? new Date(veranstaltung.attributes.ende)
                    : null
                }
                ort={veranstaltung.attributes.ort.data}
                key={veranstaltung.attributes.slug}
              />
            ))}
          </>
        ) : (
          <div>Keine Veranstaltungen verfügbar</div>
        )}
      </div>
    </Main>
  );
}
