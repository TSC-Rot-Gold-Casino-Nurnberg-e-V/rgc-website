import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-stone-50 grow flex items-center">
        <main className="mx-auto max-w-3xl bg-stone-50 grow">
          <div className="flex justify-between items-center w-full gap-8">
            <Link
              href="/events/competitionResults"
              className="relative flex flex-col items-center justify-center group grow"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={trophyImage}
                  alt=""
                  fill
                  className="object-cover bg-center rounded rounded-md"
                />
              </div>
              <div className="backdrop-brightness-50 group-hover:backdrop-brightness-75 duration-700 absolute h-full flex flex-col justify-center w-full rounded-md">
                <h2 className="text-white text-2xl font-bold text-center py-5 px-2 w-full">
                  Turnierergebnisse
                </h2>
              </div>
            </Link>

            <Link
              href="/events/eventsOverview"
              className="relative flex flex-col items-center justify-center group grow"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={eventImage}
                  alt=""
                  fill
                  className="object-cover bg-center rounded rounded-md"
                />
              </div>
              <div className="backdrop-brightness-50 group-hover:backdrop-brightness-75 duration-700 absolute h-full flex flex-col justify-center w-full rounded-md">
                <h2 className="text-white text-2xl font-bold text-center py-5 px-2 w-full">
                  Veranstaltungen
                </h2>
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
