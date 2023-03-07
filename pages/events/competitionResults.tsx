import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Competition } from "../../model/Competition";
import { getCompetitionResults } from "../../api/api";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="space-y-8 max-w-3xl m-auto py-8 grow">
        <h1 className="text-red-900 font-bold text-2xl text-center">
          Turnierergebnisse
        </h1>
        {uniqueYears.map((uniqueYear) => (
          <div key={uniqueYear} className="space-y-2">
            <div className="text-red-900 font-bold text-xl">
              Turniere {uniqueYear}
            </div>
            <div className="flex flex-col gap-2 max-w-3xl m-auto">
              {competitions
                .filter((competition) =>
                  competition.attributes.startDate.includes(
                    uniqueYear.toString()
                  )
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
                        bis{" "}
                        {formatDate(new Date(competition.attributes.endDate))}
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
      <Footer />
    </div>
  );
}
