import Image from "next/image";
import Link from "next/link";
import { getDokumente, getVorstandsmitglieder } from "../../api/api";
import { PageHeading } from "../../components/PageHeading";

export default async function VereinsgeschichtePage() {
  const dokumente = await getDokumente();
  const vorstandsmitglieder = await getVorstandsmitglieder();
  return (
    <main>
      <PageHeading>Der Verein</PageHeading>
      <section className="default-padding mx-auto flex max-w-screen-md flex-col gap-4 py-6">
        <h2 className="heading-normal heading-color">Über uns</h2>
        <p>
          Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und hat sich
          seitdem einen Namen sowohl in der deutschen Tanzsportszene durch
          sportliche Erfolge gemacht, als auch in der Region als wesentlicher
          Faktor des gesellschaftlichen Lebens. Mit etwa 600 Mitgliedern zählt
          er zu den größten Tanzsportclubs in Bayern und Deutschland.
        </p>
        <Link href="/vereinsgeschichte" className="font-semibold text-red-900">
          Zur kompletten Geschichte unseres Vereins
        </Link>
      </section>
      <section className="default-padding mx-auto flex max-w-screen-md flex-col gap-2">
        <h2 className="heading-normal heading-color">Dokumente</h2>
        {dokumente.map((dokument) => {
          return (
            <Link
              href={dokument.attributes.datei.data.attributes.url}
              key={dokument.id}
              className="hover:text-red-900"
              target="_blank"
            >
              {dokument.attributes.titel}
            </Link>
          );
        })}
      </section>
      <section className="default-padding mx-auto flex max-w-screen-md flex-col gap-4">
        <h2 className="heading-normal heading-color">Vorstandschaft</h2>
        <div className="flex flex-wrap justify-between gap-y-10">
          {vorstandsmitglieder.map((vorstandsmitglied) => (
            <div className="flex flex-col gap-3" key={vorstandsmitglied.id}>
              <div className="relative h-60 w-60 rounded-md">
                <Image
                  src={vorstandsmitglied.attributes.bild.data.attributes.url}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex max-w-[240px] flex-col gap-1">
                <div className="flex w-fit items-center text-xl font-bold">
                  {vorstandsmitglied.attributes.rolle}
                </div>
                <div className="w-fit text-sm text-base-500">
                  {vorstandsmitglied.attributes.name}
                </div>
                <div className="w-fit text-sm text-base-500">
                  Tel: {vorstandsmitglied.attributes.telefonnummer}
                </div>
                <div className="w-fit text-sm text-base-500">
                  E-Mail: {vorstandsmitglied.attributes.email}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
