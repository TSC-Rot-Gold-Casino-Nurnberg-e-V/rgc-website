import Image from "next/image";
import Link from "next/link";
import { getVorstandsmitglieder } from "../../api/api";
import { PageHeading } from "../../components/PageHeading";

export default async function VereinsgeschichtePage() {
  const vorstandsmitglieder = await getVorstandsmitglieder();
  return (
    <main>
      <PageHeading>Der Verein</PageHeading>
      <section className="container-md space-y-4">
        <h2 className="heading-normal text-accent">Über uns</h2>
        <p>
          Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und hat sich
          seitdem einen Namen sowohl in der deutschen Tanzsportszene durch
          sportliche Erfolge gemacht, als auch in der Region als wesentlicher
          Faktor des gesellschaftlichen Lebens. Mit etwa 600 Mitgliedern zählt
          er zu den größten Tanzsportclubs in Bayern und Deutschland.
        </p>
        <Link
          href="/vereinsgeschichte"
          className="block font-semibold text-accent"
        >
          Zur kompletten Geschichte unseres Vereins
        </Link>
      </section>
      <section className="container-md space-y-4">
        <h2 className="heading-normal text-accent">Vorstandschaft</h2>
        <div className="flex flex-wrap justify-between gap-y-10">
          {vorstandsmitglieder.map((vorstandsmitglied) => (
            <div className="space-y-3" key={vorstandsmitglied.id}>
              <div className="relative h-60 w-60 rounded-md">
                <Image
                  src={vorstandsmitglied.attributes.bild.data.attributes.url}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <div className="max-w-[240px] space-y-1">
                <div className="text-large font-bold">
                  {vorstandsmitglied.attributes.rolle}
                </div>
                <div className="text-small">
                  {vorstandsmitglied.attributes.name}
                </div>
                <div className="text-small">
                  Tel: {vorstandsmitglied.attributes.telefonnummer}
                </div>
                <div className="text-small">
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
