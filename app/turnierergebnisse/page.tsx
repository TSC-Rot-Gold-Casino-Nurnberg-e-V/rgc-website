import Link from "next/link";
import { getTurnierergebnisse } from "../../api/api";
import { formatDate } from "../../utils/formatDate";
import { PageHeading } from "../../components/PageHeading";

export default async function Turnierergebnisse() {
  const turnierergebnisse = await getTurnierergebnisse();
  const allYears: Array<number> = turnierergebnisse.map((turnierergebnis) =>
    new Date(turnierergebnis.attributes.start).getFullYear()
  );
  const uniqueYears: Array<number> = [...new Set(allYears)];

  return (
    <main>
      <PageHeading>Turnier&shy;ergebnisse</PageHeading>
      <div className="container-md space-y-8">
        {uniqueYears.map((uniqueYear) => (
          <section key={uniqueYear} className="space-y-2">
            <h2 className="heading-normal text-accent">
              Turniere {uniqueYear}
            </h2>
            <div className="flex flex-col gap-2">
              {turnierergebnisse
                .filter((turnierergebnis) =>
                  turnierergebnis.attributes.start.includes(
                    uniqueYear.toString()
                  )
                )
                .map((turnierergebnis) => (
                  <Link
                    target="_blank"
                    key={turnierergebnis.id}
                    href={turnierergebnis.attributes.link}
                    className="hover:text-accent"
                  >
                    {turnierergebnis.attributes.ende !== null ? (
                      <div>
                        {formatDate(new Date(turnierergebnis.attributes.start))}{" "}
                        bis{" "}
                        {formatDate(new Date(turnierergebnis.attributes.ende))}
                        {": "}
                        {turnierergebnis.attributes.titel}
                      </div>
                    ) : (
                      <div>
                        {formatDate(new Date(turnierergebnis.attributes.start))}
                        {": "}
                        {turnierergebnis.attributes.titel}
                      </div>
                    )}
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
