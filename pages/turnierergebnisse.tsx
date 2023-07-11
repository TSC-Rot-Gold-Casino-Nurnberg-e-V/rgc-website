import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Turnierergebnis } from "../model/Turnierergebnis";
import { getTurnierergebnisse } from "../api/api";
import { formatDate } from "../utils/formatDate";

export const getStaticProps: GetStaticProps<{
  turnierergebnisse: Array<Turnierergebnis>;
}> = async () => {
  const turnierergebnisse = await getTurnierergebnisse();
  return { props: { turnierergebnisse: turnierergebnisse } };
};

export default function Turnierergebnisse({
  turnierergebnisse,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const allYears: Array<number> = turnierergebnisse.map((turnierergebnis) =>
    new Date(turnierergebnis.attributes.start).getFullYear()
  );
  const uniqueYears: Array<number> = [...new Set(allYears)];

  return (
    <main className="m-auto max-w-3xl grow space-y-8 py-8">
      <h1 className="text-center text-2xl font-bold text-red-900">
        Turnierergebnisse
      </h1>
      {uniqueYears.map((uniqueYear) => (
        <div key={uniqueYear} className="space-y-2">
          <div className="text-xl font-bold text-red-900">
            Turniere {uniqueYear}
          </div>
          <div className="m-auto flex max-w-3xl flex-col gap-2">
            {turnierergebnisse
              .filter((turnierergebnis) =>
                turnierergebnis.attributes.start.includes(uniqueYear.toString())
              )
              .map((turnierergebnis) => (
                <Link
                  target="_blank"
                  key={turnierergebnis.id}
                  href={turnierergebnis.attributes.link}
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
          </div>{" "}
        </div>
      ))}
    </main>
  );
}
