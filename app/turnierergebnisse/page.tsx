import Link from "next/link";
import { getTurnierergebnisse } from "../../api/api";
import { formatDate } from "../../utils/formatDate";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";

export default async function Turnierergebnisse() {
  const turnierergebnisse = await getTurnierergebnisse();
  const allYears: Array<number> = turnierergebnisse.map((turnierergebnis) =>
    new Date(turnierergebnis.start).getFullYear()
  );
  const uniqueYears: Array<number> = [...new Set(allYears)];
  uniqueYears.sort((a, b) => b - a);

  return (
    <Main>
      <PageHeading>Turnier&shy;ergebnisse</PageHeading>
      <div className="container-md space-y-8">
        {uniqueYears.map((uniqueYear) => (
          <section key={uniqueYear} className="space-y-2">
            <h2 className="heading-normal text-accent">
              Turniere {uniqueYear}
            </h2>
            <div className="space-y-2">
              {turnierergebnisse
                .filter((turnierergebnis) =>
                  turnierergebnis.start.includes(uniqueYear.toString())
                )
                .map((turnierergebnis) => (
                  <Link
                    target="_blank"
                    key={turnierergebnis.id}
                    href={turnierergebnis.link}
                    className="hover:text-accent block w-fit rounded-full"
                  >
                    {turnierergebnis.ende !== null ? (
                      <div>
                        {formatDate(new Date(turnierergebnis.start))} bis{" "}
                        {formatDate(new Date(turnierergebnis.ende))}
                        {": "}
                        {turnierergebnis.titel}
                      </div>
                    ) : (
                      <div>
                        {formatDate(new Date(turnierergebnis.start))}
                        {": "}
                        {turnierergebnis.titel}
                      </div>
                    )}
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </Main>
  );
}
