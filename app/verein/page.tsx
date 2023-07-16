import Image from "next/image";
import Link from "next/link";
import { getDokumente, getVorstandsmitglieder } from "../../api/api";

export default async function VereinsgeschichtePage() {
  const dokumente = await getDokumente();
  const vorstandsmitglieder = await getVorstandsmitglieder();
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 py-8 max-md:p-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-red-900">Der Verein</h2>
        <h3 className="text-2xl font-semibold">Über uns</h3>
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
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">Dokumente</h3>

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
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Vorstandschaft</h3>
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
      </div>
    </main>
  );
}
