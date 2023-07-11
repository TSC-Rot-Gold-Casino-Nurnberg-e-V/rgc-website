import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getVeranstaltungen } from "../../api/api";
import { Veranstaltung } from "../../model/Veranstaltung";
import { VeranstaltungCard } from "../../components/VeranstaltungCard";

export const getStaticProps: GetStaticProps<{
  veranstaltungen: Array<Veranstaltung>;
}> = async () => {
  const veranstaltungen = await getVeranstaltungen();
  const dayInSeconds = 60 * 60 * 24;
  return {
    props: { veranstaltungen: veranstaltungen, revalidate: dayInSeconds },
  };
};

export default function VeranstaltungenPage({
  veranstaltungen,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
