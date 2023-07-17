import { getVeranstaltungen } from "../../api/api";
import { VeranstaltungCard } from "./VeranstaltungCard";

// FIXME: revalidate will not work with static export (https://github.com/orgs/TSC-Rot-Gold-Casino-Nurnberg-e-V/projects/1/views/1?pane=issue&itemId=32092768)
export const revalidate = 86400;

export default async function VeranstaltungenPage() {
  const veranstaltungen = await getVeranstaltungen();
  return (
    <main className="default-padding mx-auto">
      <div className="m-auto flex max-w-3xl flex-col gap-8">
        {veranstaltungen.length !== 0 ? (
          <div>
            {veranstaltungen.map((veranstaltung) => (
              <VeranstaltungCard
                slug={veranstaltung.attributes.slug}
                titel={veranstaltung.attributes.titel}
                vorschautext={veranstaltung.attributes.vorschautext}
                start={new Date(veranstaltung.attributes.start)}
                ende={
                  veranstaltung.attributes.ende !== null
                    ? new Date(veranstaltung.attributes.ende)
                    : null
                }
                key={veranstaltung.attributes.slug}
              />
            ))}
          </div>
        ) : (
          <div>Keine Veranstaltungen verfügbar</div>
        )}
      </div>
    </main>
  );
}
