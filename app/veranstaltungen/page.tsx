import { getVeranstaltungen } from "../../api/api";
import { VeranstaltungCard } from "./VeranstaltungCard";
import { PageHeading } from "../../components/PageHeading";

// FIXME: revalidate will not work with static export (https://github.com/orgs/TSC-Rot-Gold-Casino-Nurnberg-e-V/projects/1/views/1?pane=issue&itemId=32092768)
export const revalidate = 86400;

export default async function VeranstaltungenPage() {
  const veranstaltungen = await getVeranstaltungen();
  return (
    <main className="bg-base-100">
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
    </main>
  );
}
