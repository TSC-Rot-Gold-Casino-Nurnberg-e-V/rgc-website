import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Competition } from "../../model/Competition";
import { getCompetitionResults } from "../../api/api";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";

export const getStaticProps: GetStaticProps<{
  competitions: Competition[];
}> = async () => {
  const competitions = await getCompetitionResults();
  return { props: { competitions: competitions } };
};

export default function CompetitionResults({
  competitions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const allYears: Array<number> = competitions.map((competition) =>
    new Date(competition.attributes.startDate).getFullYear()
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
            {competitions
              .filter((competition) =>
                competition.attributes.startDate.includes(uniqueYear.toString())
              )
              .map((competition) => (
                <Link
                  target="_blank"
                  key={competition.id}
                  href={competition.attributes.resultLink}
                >
                  {competition.attributes.endDate !== null ? (
                    <div>
                      {formatDate(new Date(competition.attributes.startDate))}{" "}
                      bis {formatDate(new Date(competition.attributes.endDate))}
                      {": "}
                      {competition.attributes.name}
                    </div>
                  ) : (
                    <div>
                      {formatDate(new Date(competition.attributes.startDate))}
                      {": "}
                      {competition.attributes.name}
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
