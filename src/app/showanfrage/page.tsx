import { Main } from "@/components/Main";
import Image from "next/image";

import einzel_standard from "../../../public/showanfrage/einzel_standard_1.webp";

export const metadata = {
  title: "Showanfrage",
  description: "Buchen Sie uns für Ihre Veranstaltung",
};

// TODO: image cutout (https://www.youtube.com/watch?v=sifXs4XVK7g)
export default async function ShowanfragePage() {
  return (
    <Main className="mx-auto max-w-screen-lg p-4">
      <section>
        <h1 className="text-center">
          <span className="text-7xl font-bold">Tanz&shy;highlights</span>
          <br />
          <span className="text-5xl font-bold uppercase">für ihr Event!</span>
        </h1>
        <p>
          Verleihen Sie Ihrer Veranstaltung das gewisse Etwas mit
          atemberaubenden Tanzdarbietungen in Standard oder Latein!
        </p>
        <p>
          Lassen Sie Ihr Publikum durch unsere Formationsteams aus der ersten
          Bundesliga oder durch unsere hochklassigen Einzelpaare mit Eleganz,
          Leidenschaft und Perfektion verzaubern.
        </p>
      </section>
      <div className="grid grid-cols-2 pt-8">
        <section>
          <h2 className="text-2xl font-bold uppercase">Formation Standard</h2>
          <p>
            Unser Standard A-Team zahlt seit Jahren zur deutschen Spitze und hat
            bereits Bronze bei der Deutschen Meisterschaft sowie Silber bei der
            Europameisterschaft 2022 gewonnen. Mit einer Auswahl an Musikstücken
            und Choreografien sorgen sowohl das A-Team als auch unser
            Nachwuchsteam in der 2. Bundesliga für beeindruckende Showmomente.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold uppercase">Formation Latein</h2>
          <p>
            Unser Latein-A-Team gehört zu den Top 5 Deutschlands und begeistert
            in der ersten Bundesliga. Mit einer Vielfalt an Musikstucken und
            dynamischen Choreografien sorgen das A-Team sowie unsere
            ambitionierten Nachwuchsteams in der 2. Bundesliga und Regionalliga
            für unvergessliche Showeinlagen voller Energie und Leidenschaft.
          </p>
        </section>
        <section className="bg-base-700 p-4 text-base-50">
          <h2 className="text-2xl font-bold uppercase">Einzel Standard</h2>
          <p>
            Mit Anmut und Präzision bringen unsere exzellenten Einzelpaare die
            klassischen Standardtänze - Langsamer Walzer, Tango, Wiener Walzer,
            Slowfox und Quickstep - auf Ihr Event. Erleben Sie Eleganz und
            Perfektion in Bewegung.
          </p>
          <Image src={einzel_standard} alt="" width={500} height={500} />
        </section>
        <section>
          <h2 className="text-2xl font-bold uppercase">Einzel Latein</h2>
          <p>
            Unsere hochklassigen Einzelpaare entfachen mit leidenschaftlichen
            lateinamerikanischen Tänzen wie Samba, Cha-Cha-Cha, Rumba, Paso
            Doble und Jive das Feuer auf Ihrer Veranstaltung und ziehen das
            Publikum in ihren Bann.
          </p>
        </section>
      </div>
    </Main>
  );
}
