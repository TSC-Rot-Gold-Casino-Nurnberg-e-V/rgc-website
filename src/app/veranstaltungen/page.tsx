import { getVeranstaltungen } from "@/api/api";
import { VeranstaltungCard } from "./VeranstaltungCard";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";

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
                slug={veranstaltung.slug}
                titel={veranstaltung.titel}
                start={new Date(veranstaltung.start)}
                ende={
                  veranstaltung.ende !== null
                    ? new Date(veranstaltung.ende)
                    : null
                }
                ort={veranstaltung.ort}
                key={veranstaltung.slug}
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
