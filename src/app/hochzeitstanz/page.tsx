import { Main } from "@/components/Main";
import { Button } from "@/components/Button";
import backgroundImage from "../../../public/hochzeitstanz/hochzeitstanz_background_image.png";
import casualCouple from "../../../public/hochzeitstanz/casual_couple.jpg";
import showdance from "../../../public/hochzeitstanz/showdance.jpg";
import Image from "next/image";
import { LinkButton } from "@/components/LinkButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hochzeitstanz Nürnberg – Individuelle Choreografie für euren Hochzeitstanz",
  description:
    "Euer Hochzeitstanz in Nürnberg: Individuelle Choreografien, persönliche Betreuung & professionelle Trainer:innen. Jetzt kostenlose Beratung für euren unvergesslichen Hochzeitstanz anfragen!",
  keywords: [
    "Hochzeitstanz",
    "Hochzeitstanz Nürnberg",
    "Hochzeitschoreografie",
    "Tanzkurs Hochzeit",
    "Hochzeitstanz lernen",
  ],
};

export default async function HochzeitstanzPage() {
  return (
    <Main className="">
      <section className="relative space-y-8 px-2 py-12 max-sm:min-h-[75vh] sm:py-32">
        <Image
          src={backgroundImage}
          alt=""
          className="absolute inset-x-0 top-0 -z-10 w-full object-cover object-top opacity-25 blur-sm max-sm:min-h-[75vh]"
          height={100}
          width={100}
          priority
        />
        <h2 className="mx-auto !mt-0 max-w-screen-sm text-center font-serif text-4xl font-light leading-snug sm:text-5xl">
          Euer unvergesslicher Hochzeitstanz – individuell choreographiert
        </h2>
        <p className="mx-auto max-w-screen-md text-center">
          Der erste Tanz als frisch verheiratetes Paar ist einer der
          emotionalsten Momente eures großen Tages. Wir helfen euch dabei,
          diesen Moment unvergesslich zu machen – mit einer individuellen, auf
          euch zugeschnittenen Hochzeitschoreografie.
        </p>
        <div className="mx-auto flex w-fit flex-wrap gap-4">
          <a
            href="mailto:freizeittanz@rot-gold-casino.de"
            className="block w-fit grow cursor-pointer rounded-full"
          >
            <Button tabIndex={-1} className="w-full">
              Kostenlose Beratung anfragen
            </Button>
          </a>
          <LinkButton href="#angebot" className="grow" text="Mehr Erfahren" />
        </div>
      </section>
      <section className="bg-base-100 py-8 @container" id="angebot">
        <div className="space-y-8">
          <h2 className="mx-auto max-w-screen-md text-center text-2xl font-semibold sm:text-3xl">
            Unser Angebot
          </h2>
          <p className="mx-auto max-w-screen-md px-2">
            Ob klassischer Walzer, romantische Rumba oder ein moderner Mix – wir
            gestalten eure Choreografie so, wie sie zu euch und eurer Hochzeit
            passt. Unsere erfahrenen Trainer:innen begleiten euch Schritt für
            Schritt und sorgen dafür, dass ihr euch sicher, wohl und authentisch
            fühlt.
          </p>
          <div className="mx-auto grid max-w-screen-lg gap-4 px-2 @lg:grid-cols-2 @2xl:grid-cols-3">
            {[
              {
                title: "Maßgeschneiderte Choreografie",
                description:
                  "Eine maßgeschneiderte Choreografie, die perfekt zu euch passt",
              },
              {
                title: "Individuell",
                description: "Individuelle Anpassung an Niveau, Stil und Musik",
              },
              {
                title: "Musikauswahl",
                description:
                  "Unterstützung bei der Auswahl der perfekten Musik für euren Tanz",
              },
              {
                title: "Schöne Atmosphäre",
                description:
                  "Üben in einer entspannten und unterstützenden Umgebung",
              },
              {
                title: "Gäste einbeziehen",
                description:
                  "Optional: Crashkurs für Trauzeugen, enge Freunde und Familie",
              },
              {
                title: "Professionelle Trainer:innen",
                description:
                  "Erfahrene Trainer:innen, die euch sicher durch den Prozess führen",
              },
            ].map(({ description, title }) => (
              <div
                key={title}
                className="rounded-2xl bg-white/75 px-5 py-4 shadow"
              >
                <h3 className="mb-2 text-lg font-semibold text-secondary-900">
                  {title}
                </h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-base-50 px-2 py-12">
        <div className="mx-auto flex max-w-screen-lg gap-8 px-2 max-md:flex-col">
          <div className="space-y-8">
            <h2 className="mx-auto text-center text-2xl font-semibold sm:text-3xl">
              Für jedes Paar geeignet
            </h2>
            <p className="mx-auto">
              Egal ob ihr Anfänger seid oder bereits Tanzerfahrung mitbringt –
              wir holen euch genau dort ab, wo ihr steht. Unsere Priorität ist
              es, dass ihr euch am Hochzeitstag mit Freude und Selbstvertrauen
              präsentieren könnt!
            </p>
            <ul className="mx-auto ml-4 list-inside list-disc space-y-2">
              <li>Tanzunerfahrende sind herzlich willkommen</li>
              <li>Erfahrene Tänzer können ihre Fähigkeiten verfeinern</li>
              <li>Gemeinsam als Paar Selbstvertrauen aufbauen</li>
            </ul>
          </div>
          <Image
            src={casualCouple}
            alt=""
            className="mx-auto aspect-square rounded-2xl object-cover object-top"
            width={420}
            height={420}
          />
        </div>
      </section>
      <section className="space-y-8 bg-base-100 px-2 py-12 @container">
        <h2 className="mx-auto max-w-screen-md text-center text-2xl font-semibold sm:text-3xl">
          So läuft es ab
        </h2>
        <div className="mx-auto grid max-w-screen-lg gap-4 px-2 @2xl:grid-cols-2">
          {[
            {
              title: "Unverbindliches Erstgespräch",
              description:
                "Gemeinsames Kennenlernen und Besprechung eurer Wünsche",
            },
            {
              title: "Musikauswahl",
              description:
                "Ihr bringt einen Lieblingssong mit – oder wir finden gemeinsam den perfekten Titel.",
            },
            {
              title: "Choreografie",
              description:
                "Wir erstellen eine individuelle Choreo, die zu euch und eurem Stil passt.",
            },
            {
              title: "Proben & Feinschliff",
              description:
                "In mehreren Einheiten üben wir gemeinsam, bis alles sitzt und sich gut anfühlt.",
            },
          ].map(({ description, title }, index) => (
            <div
              key={title}
              className="relative rounded-2xl bg-white/75 px-5 py-4 shadow"
            >
              <div className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full border border-secondary-200 bg-secondary-100 text-base font-bold text-secondary-900">
                {index + 1}
              </div>
              <h3 className="mb-2 ml-12 text-lg font-semibold text-secondary-900">
                {title}
              </h3>
              <p className="ml-12">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-8 bg-base-900 px-2 py-12 @container">
        <div className="mx-auto grid max-w-screen-lg gap-4 px-2 sm:grid-cols-2">
          <div className="space-y-8">
            <h2 className="mx-auto max-w-screen-md text-center text-2xl font-semibold text-base-100 sm:text-3xl">
              Showauftritte für eure Hochzeit
            </h2>
            <p className="mx-auto max-w-screen-md text-base-300">
              Ihr möchtet euren Gästen ein zusätzliches Highlight bieten? Neben
              der Choreografie für euren Hochzeitstanz können bei uns auch
              Showpaare gebucht werden. Ob spritzige Standardtänze, feurige
              Latein-Shows oder thematische Showeinlagen – unsere Paare sorgen
              für eine beeindruckende, emotionale und einzigartige Performance,
              die euer Fest unvergesslich macht.
            </p>
            <a
              href="mailto:freizeittanz@rot-gold-casino.de"
              className="mx-auto block w-fit cursor-pointer"
            >
              <Button tabIndex={-1}>Jetzt Showauftritt anfragen</Button>
            </a>
          </div>
          <Image
            src={showdance}
            alt=""
            className="mx-auto aspect-square rounded-2xl object-cover object-top"
            width={420}
            height={420}
          />
        </div>
        <p className="text-center text-2xl text-base-300">Ideal für:</p>
        <div className="mx-auto grid max-w-screen-lg gap-4 px-2 @2xl:grid-cols-2">
          {[
            {
              title: "Eröffnung des Abends",
              description:
                "Beeindruckt eure Gäste mit einem spektakulären Showtanz",
            },
            {
              title: "Programmgestaltung",
              description:
                "Ergänzt euer Hochzeitsprogramm mit einem professionellen Auftritt",
            },
            {
              title: "Überraschungs-Acts",
              description:
                "Überrascht eure Gäste mit einem unvergesslichen Tanz-Highlight",
            },
            {
              title: "Tanzpausen-Entertainment",
              description:
                "Haltet die Stimmung hoch mit mitreißenden Tanzdarbietungen",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-base-700 px-5 py-4 shadow"
            >
              <h3 className="mb-2 text-lg font-semibold text-base-50">
                {title}
              </h3>
              <p className="text-base-300">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-8 px-2 py-12">
        <h2 className="mx-auto max-w-screen-md text-center text-2xl font-semibold sm:text-3xl">
          Bereit für euren unvergesslichen Hochzeitstanz?
        </h2>
        <p className="mx-auto max-w-screen-md text-center">
          Meldet euch bei uns – wir freuen uns darauf, euch auf eurem Weg zu
          begleiten!
        </p>
        <a
          href="mailto:freizeittanz@rot-gold-casino.de"
          className="mx-auto block w-fit cursor-pointer"
        >
          <Button tabIndex={-1}>Jetzt unverbindlich anfragen</Button>
        </a>
      </section>
    </Main>
  );
}
