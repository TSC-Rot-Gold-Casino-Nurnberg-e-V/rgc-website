import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import trophyImage from "../../public/trophy.jpg";
import eventImage from "../../public/eventImage.png";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default function Events({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <main className="mx-auto max-w-3xl grow bg-stone-50">
      <div className="flex w-full items-center justify-between gap-8">
        <Link
          href="/events/competitionResults"
          className="group relative flex grow flex-col items-center justify-center"
        >
          <div className="relative h-80 w-full">
            <Image
              src={trophyImage}
              alt=""
              fill
              className="rounded-md bg-center object-cover"
            />
          </div>
          <div className="absolute flex h-full w-full flex-col justify-center rounded-md backdrop-brightness-50 duration-700 group-hover:backdrop-brightness-75">
            <h2 className="w-full px-2 py-5 text-center text-2xl font-bold text-white">
              Turnierergebnisse
            </h2>
          </div>
        </Link>

        <Link
          href="/events/eventsOverview"
          className="group relative flex grow flex-col items-center justify-center"
        >
          <div className="relative h-80 w-full">
            <Image
              src={eventImage}
              alt=""
              fill
              className="rounded-md bg-center object-cover"
            />
          </div>
          <div className="absolute flex h-full w-full flex-col justify-center rounded-md backdrop-brightness-50 duration-700 group-hover:backdrop-brightness-75">
            <h2 className="w-full px-2 py-5 text-center text-2xl font-bold text-white">
              Veranstaltungen
            </h2>
          </div>
        </Link>
      </div>
    </main>
  );
}
