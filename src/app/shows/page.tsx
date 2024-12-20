import Image from "next/image";
import { Main } from "@/components/Main";
import { ContactForm } from "@/app/kontakt/ContactForm";

import background_standard from "../../../public/showanfrage/formation_standard_1.png";
import background_latein from "../../../public/showanfrage/formation_latein_2.png";

import paartanz_standard from "../../../public/showanfrage/paartanz_standard_1.webp";
import paartanz_latein from "../../../public/showanfrage/paartanz_latein_1.webp";
import formation_latein from "../../../public/showanfrage/formation_latein_1.webp";
import formation_standard from "../../../public/showanfrage/formation_standard_2.webp";

export const metadata = {
  title: "Shows",
  description:
    "Tanzhighlights für Ihr Event! Verleihen Sie Ihrer Veranstaltung das gewisse Etwas mit atemberaubenden Showtanz-Darbietungen in Standard oder Latein! Buchen Sie uns für Ihre Veranstaltung!",
};

export default async function ShowsPage() {
  return (
    <Main className="relative mx-auto w-full text-pretty bg-base-900 text-base-100 md:text-lg">
      <div className="mb-20">
        <div className="relative max-w-full overflow-hidden">
          <Image
            src={background_standard}
            alt=""
            width={500}
            height={500}
            className="absolute -right-40 bottom-0 max-w-[80vw] opacity-80 blur-xs sm:right-0 sm:max-w-[45vw]"
          />
          <Image
            src={background_latein}
            alt=""
            width={500}
            height={500}
            className="absolute -left-40 bottom-0 max-w-[80vw] opacity-80 blur-xs sm:left-0 sm:max-w-[45vw]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-900 to-10%" />
          <section className="relative mx-auto max-w-screen-sm p-4 text-center sm:py-12 md:py-20">
            <h1 className="text-base-50">
              <span className="text-6xl font-bold sm:text-7xl">
                Tanz&shy;highlights
              </span>
              <br />
              <span className="block pt-4 text-4xl font-bold uppercase sm:text-5xl">
                für ihr Event!
              </span>
            </h1>
            <p className="mx-auto max-w-md pt-8 text-lg font-semibold sm:text-xl">
              Verleihen Sie Ihrer Veranstaltung das gewisse Etwas mit
              atemberaubenden Tanzdarbietungen!
            </p>
            <p className="mx-auto max-w-md pt-4 text-lg font-semibold sm:text-xl">
              Lassen Sie Ihr Publikum durch unsere Formationsteams aus der
              ersten Bundesliga oder durch unsere hochklassigen Tanzpaare mit
              Eleganz, Leidenschaft und Perfektion verzaubern.
            </p>
          </section>
        </div>
        <div className="mx-auto mt-8 grid max-w-screen-lg gap-4 hyphens-auto max-md:max-w-md md:grid-cols-2 md:gap-6 md:p-4">
          <section className="overflow-hidden rounded-xl bg-base-800 md:order-1 md:rounded-tl-[4rem] md:text-right">
            <div className="p-6 !pb-2 md:p-8">
              <h2 className="text-gold mb-4 text-2xl font-bold uppercase md:text-3xl">
                Formation Standard
              </h2>
              <p className="text-base-200">
                Unser Standard A-Team zahlt seit Jahren zur deutschen Spitze und
                hat bereits Bronze bei der Deutschen Meisterschaft sowie Silber
                bei der Europameisterschaft 2022 gewonnen.
              </p>
              <p className="mt-4">
                Mit einer Auswahl an Musikstücken und Choreografien sorgen
                sowohl das A-Team als auch unser Nachwuchsteam in der 2.
                Bundesliga für beeindruckende Showmomente.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-base-800 to-10%" />
              <Image src={formation_standard} alt="" width={500} height={500} />
            </div>
          </section>
          <section className="overflow-hidden rounded-xl bg-base-800 md:order-4 md:rounded-br-[4rem]">
            <div className="p-6 !pb-2 md:p-8">
              <h2 className="text-gold mb-4 text-2xl font-bold uppercase md:text-3xl">
                Formation Latein
              </h2>
              <p className="text-base-200">
                Unser Latein-A-Team gehört zu den Top 5 Deutschlands und
                begeistert in der ersten Bundesliga.
              </p>
              <p className="mt-4">
                Mit einer Vielfalt an Musikstücken und dynamischen Choreografien
                sorgen das A-Team sowie unsere ambitionierten Nachwuchsteams in
                der 2. Bundesliga und Regionalliga für unvergessliche
                Showeinlagen voller Energie und Leidenschaft.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-base-800 to-10%" />
              <Image src={formation_latein} alt="" width={500} height={500} />
            </div>
          </section>
          <section className="rounded-xl bg-secondary-600 p-6 md:order-3 md:rounded-bl-[4rem] md:p-8">
            <h2 className="text-gold mb-4 text-2xl font-bold uppercase md:text-right md:text-3xl">
              Paartanz Standard
            </h2>
            <Image
              src={paartanz_standard}
              alt=""
              width={500}
              height={500}
              style={{
                float: "left",
                shapeOutside: `url(${paartanz_standard.src})`,
                shapeMargin: "8px",
                maxWidth: "75%",
                minWidth: "250px",
                marginLeft: "-1rem",
              }}
            />
            <p className="text-right text-base-950">
              Mit Anmut und Präzision bringen unsere exzellenten Tanzpaare die
              klassischen Standardtänze - Langsamer Walzer, Tango, Wiener
              Walzer, Slowfox und Quickstep - auf Ihr Event.
            </p>
            <p className="mt-4 text-right text-base-950">
              Erleben Sie Eleganz und Perfektion in Bewegung.
            </p>
          </section>
          <section className="rounded-xl bg-secondary-600 p-6 md:order-2 md:rounded-tr-[4rem] md:p-8">
            <h2 className="text-gold mb-4 text-2xl font-bold uppercase md:text-3xl">
              Paartanz Latein
            </h2>
            <Image
              src={paartanz_latein}
              alt=""
              width={500}
              height={500}
              style={{
                float: "right",
                shapeOutside: `url(${paartanz_latein.src})`,
                shapeMargin: "8px",
                maxWidth: "75%",
                minWidth: "250px",
                marginRight: "-1rem",
              }}
            />
            <p className="text-base-950">
              Unsere hochklassigen Tanzpaare entfachen mit leidenschaftlichen
              lateinamerikanischen Tänzen wie Samba, Cha-Cha-Cha, Rumba, Paso
              Doble und Jive das Feuer auf Ihrer Veranstaltung und ziehen das
              Publikum in ihren Bann.
            </p>
          </section>
        </div>
      </div>
      <div className="bg-base-50 text-base-900">
        <ContactForm />
      </div>
    </Main>
  );
}
