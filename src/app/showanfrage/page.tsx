import Image from "next/image";
import { Main } from "@/components/Main";
import { ContactForm } from "@/app/kontakt/ContactForm";

import einzel_standard from "../../../public/showanfrage/einzel_standard_1.webp";
import einzel_latein from "../../../public/showanfrage/einzel_latein_1.webp";
import formation_latein from "../../../public/showanfrage/formation_latein_1.webp";

export const metadata = {
  title: "Showanfrage",
  description: "Buchen Sie uns für Ihre Veranstaltung",
};

export default async function ShowanfragePage() {
  return (
    <Main className="mx-auto w-full hyphens-auto bg-base-900 text-base-100 md:text-lg">
      <div className="mx-auto max-w-screen-lg pb-20">
        <section className="mx-auto max-w-screen-sm p-4 text-center">
          <h1 className="text-base-50">
            <span className="text-7xl font-bold">Tanz&shy;highlights</span>
            <br />
            <span className="block pt-4 text-5xl font-bold uppercase">
              für ihr Event!
            </span>
          </h1>
          <p className="pt-8">
            Verleihen Sie Ihrer Veranstaltung das gewisse Etwas mit
            atemberaubenden Tanzdarbietungen in Standard oder Latein!
          </p>
          <p className="pt-4">
            Lassen Sie Ihr Publikum durch unsere Formationsteams aus der ersten
            Bundesliga oder durch unsere hochklassigen Einzelpaare mit Eleganz,
            Leidenschaft und Perfektion verzaubern.
          </p>
        </section>
        <div className="mx-auto mt-8 grid gap-4 max-md:max-w-md md:grid-cols-2 md:gap-6 md:p-4">
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
              <Image src={formation_latein} alt="" width={500} height={500} />
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
                Mit einer Vielfalt an Musikstucken und dynamischen Choreografien
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
          <section className="rounded-xl bg-secondary-600 p-6 md:order-3 md:rounded-bl-[4rem] md:p-8 md:text-right">
            <h2 className="text-gold mb-4 text-2xl font-bold uppercase md:text-3xl">
              Einzel Standard
            </h2>
            <Image
              src={einzel_standard}
              alt=""
              width={500}
              height={500}
              style={{
                float: "left",
                shapeOutside: `url(${einzel_standard.src})`,
                shapeMargin: "8px",
                maxWidth: "50%",
                minWidth: "250px",
                marginLeft: "-1rem",
              }}
            />
            <p className="text-base-950">
              Mit Anmut und Präzision bringen unsere exzellenten Einzelpaare die
              klassischen Standardtänze - Langsamer Walzer, Tango, Wiener
              Walzer, Slowfox und Quickstep - auf Ihr Event. Erleben Sie Eleganz
              und Perfektion in Bewegung.
            </p>
          </section>
          <section className="rounded-xl bg-secondary-600 p-6 md:order-2 md:rounded-tr-[4rem] md:p-8">
            <h2 className="text-gold mb-4 text-2xl font-bold uppercase md:text-3xl">
              Einzel Latein
            </h2>
            <Image
              src={einzel_latein}
              alt=""
              width={500}
              height={500}
              style={{
                float: "right",
                shapeOutside: `url(${einzel_latein.src})`,
                shapeMargin: "8px",
                maxWidth: "50%",
                minWidth: "250px",
                marginRight: "-1rem",
              }}
            />
            <p className="text-base-950">
              Unsere hochklassigen Einzelpaare entfachen mit leidenschaftlichen
              lateinamerikanischen Tänzen wie Samba, Cha-Cha-Cha, Rumba, Paso
              Doble und Jive das Feuer auf Ihrer Veranstaltung und ziehen das
              Publikum in ihren Bann.
            </p>
          </section>
        </div>
      </div>
    </Main>
  );
}
