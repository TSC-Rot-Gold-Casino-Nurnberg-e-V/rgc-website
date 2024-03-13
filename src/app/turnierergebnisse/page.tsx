import Link from "next/link";
import { getTurnierergebnisse } from "@/api/api";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnierergebnisse",
};

export default async function Turnierergebnisse() {
  const turnierergebnisse = await getTurnierergebnisse();
  turnierergebnisse.sort((a, b) => {
    return new Date(b.start).getTime() - new Date(a.start).getTime();
  });
  const allYears = turnierergebnisse.map(({ start }) =>
    new Date(start).getFullYear(),
  );
  const uniqueYears = [...Array.from(new Set(allYears))];
  uniqueYears.sort((a, b) => b - a);

  return (
    <Main>
      <PageHeading>Turnier&shy;ergebnisse</PageHeading>
      <div className="container-md space-y-8">
        {uniqueYears.map((uniqueYear) => (
          <section key={uniqueYear} className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Turniere {uniqueYear}
            </h2>
            <div>
              {turnierergebnisse
                .filter(({ start }) => start.includes(uniqueYear.toString()))
                .map(({ ende, id, link, start, titel }) => (
                  <Link
                    target="_blank"
                    key={id}
                    href={link}
                    className="block w-full p-2 hover:text-secondary-900"
                  >
                    <div className="grid grid-cols-[1fr_8rem] gap-4">
                      <div>{titel}</div>
                      {ende === null ? (
                        <div className="text-right">
                          {formatDate(new Date(start))}
                        </div>
                      ) : (
                        <div className="flex justify-end gap-1">
                          <div>{formatDate(new Date(start))}</div>
                          <div>-</div>
                          <div>{formatDate(new Date(ende))}</div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </Main>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
  });
}
