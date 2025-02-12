import { getAngebot, getSlugs } from "@/api/api";
import { Wochentag } from "@/model/Wochentag";
import { Training } from "@/model/Training";
import Image from "next/image";
import Link from "next/link";
import { TrainerCard } from "../TrainerCard";
import { formatTime } from "@/utils/formatTime";
import { Prose } from "@/components/Prose";
import { PageHeading } from "@/components/PageHeading";
import { Main } from "@/components/Main";
import { Metadata } from "next";
import personPlaceholder from "../../../../public/placeholder/person-placeholder.png";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("angebote");
  return slugs.map((slug) => ({ slug: slug }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  const angebot = await getAngebot(slug);
  return {
    title: angebot.titel,
    description: angebot.beschreibung,
  };
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AngebotPage({ params }: Readonly<Props>) {
  const slug = (await params).slug;
  const angebot = await getAngebot(slug);
  const trainingsGroupedByWochentag = new Map<
    Wochentag["titel"], // type string
    Array<Training>
  >();

  angebot.trainings.forEach((training) => {
    const wochentagTitel = training.wochentag.titel;
    const trainings = trainingsGroupedByWochentag.get(wochentagTitel);

    if (trainings === undefined) {
      trainingsGroupedByWochentag.set(wochentagTitel, [training]);
    } else {
      trainings.push(training);
    }
  });

  return (
    <Main>
      <PageHeading>{angebot.titel}</PageHeading>
      <Prose className="container-lg" content={angebot.beschreibung} />
      <section className="bg-base-100">
        <div className="container-lg space-y-8">
          <h2 className="text-3xl font-bold text-base-900 max-sm:text-center sm:text-4xl">
            Unsere Trainingszeiten
          </h2>
          <div className="space-y-8">
            {Array.from(trainingsGroupedByWochentag)
              .sort(([a], [b]) => toSequenceNumber(a) - toSequenceNumber(b))
              .map(([wochentagTitel, trainings]) => (
                <div key={wochentagTitel} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-base-700 max-sm:text-center sm:text-3xl">
                    {wochentagTitel}
                  </h3>
                  <div className="flex flex-wrap gap-4 max-sm:justify-center">
                    {trainings
                      .map((training) => ({
                        ...training,
                        attributes: {
                          ...training,
                          start: new Date("2000T" + training.start),
                          ende: new Date("2000T" + training.ende),
                        },
                      }))
                      .sort(
                        (a, b) =>
                          a.attributes.start.getTime() -
                          b.attributes.start.getTime(),
                      )
                      .map(({ id, attributes }) => (
                        <section
                          key={id}
                          className="relative flex w-96 flex-col gap-1 overflow-hidden rounded-lg bg-white p-6 shadow"
                        >
                          <div className="absolute inset-0 w-1.5 bg-secondary-600" />
                          <h4 className="text-2xl font-bold text-secondary-950">
                            {attributes.titel}
                          </h4>
                          <div className="flex gap-1 text-base font-semibold text-secondary-900 sm:text-lg">
                            <time
                              dateTime={attributes.start.toLocaleTimeString()}
                            >
                              {formatTime(attributes.start)}
                            </time>
                            <div>-</div>
                            <time
                              dateTime={attributes.ende.toLocaleTimeString()}
                            >
                              {formatTime(attributes.ende)}
                            </time>
                            <div>Uhr</div>
                          </div>
                          {attributes.anmerkung && (
                            <p className="text-base">{attributes.anmerkung}</p>
                          )}
                          <div className="flex grow justify-between pt-4">
                            <div className="flex -space-x-2 self-end">
                              {attributes.trainers.map((trainer) => (
                                <a
                                  key={trainer.id}
                                  href={`#${trainer.person.vorname} ${trainer.person.nachname}`}
                                  className="rounded-full"
                                >
                                  <Image
                                    src={
                                      trainer.person.bild?.url ??
                                      personPlaceholder
                                    }
                                    width={56} // size-14
                                    height={56} // size-14
                                    alt={`${trainer.person.vorname} ${trainer.person.nachname}`}
                                    className="size-14 cursor-pointer rounded-full bg-white object-cover object-top outline-offset-2 ring ring-white transition-all hover:scale-105 hover:shadow-md"
                                  />
                                </a>
                              ))}
                            </div>
                            <p className="self-end text-sm text-base-500 sm:text-base">
                              {attributes.saal}
                            </p>
                          </div>
                        </section>
                      ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex w-fit items-center gap-4 rounded-full border border-secondary-900 px-4 py-2 text-xs text-secondary-900 max-sm:mx-auto max-sm:max-w-sm sm:text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 min-h-5 min-w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p>
              An Feiertagen sowie während der Schulferien finden für gewöhnlich
              keine Gruppenstunden statt.
            </p>
          </div>
        </div>
      </section>
      <section className="container-lg">
        <h2 className="mb-4 text-3xl font-bold text-base-900 max-sm:text-center sm:text-4xl">
          Unsere Trainer
        </h2>
        <div className="space-y-4">
          {angebot.trainers.map((trainer) => (
            <div
              key={trainer.id}
              id={`${trainer.person.vorname} ${trainer.person.nachname}`}
            >
              <TrainerCard
                beschreibung={trainer.beschreibung}
                name={`${trainer.person.vorname} ${trainer.person.nachname}`}
                lizenzen={trainer.lizenzen}
                bild={trainer.person.bild?.url}
              />
            </div>
          ))}
        </div>
      </section>
      {angebot.faqs.length > 0 && (
        <div className="container-lg">
          <section className="space-y-4 max-sm:mx-auto max-sm:max-w-sm">
            <h2 className="text-2xl sm:text-3xl">Häufig gestellte Fragen</h2>
            <div className="divide-y">
              {angebot.faqs.map((faq) => (
                <section
                  key={faq.id}
                  className="grid gap-x-8 gap-y-2 py-5 md:grid-cols-5"
                >
                  <h3 className="text-lg sm:text-xl md:col-span-2">
                    {faq.frage}
                  </h3>
                  <Prose className="md:col-span-3" content={faq.antwort} />
                </section>
              ))}
            </div>
            <div>
              <p>Du hast weitere Fragen?</p>
              <div className="flex gap-1">
                <p>Dann kontaktiere uns</p>
                <Link href="/kontakt" className="rounded-full font-semibold">
                  hier.
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </Main>
  );
}

function toSequenceNumber(wochentag: string): number {
  switch (wochentag) {
    case "Montag":
      return 1;
    case "Dienstag":
      return 2;
    case "Mittwoch":
      return 3;
    case "Donnerstag":
      return 4;
    case "Freitag":
      return 5;
    case "Samstag":
      return 6;
    case "Sonntag":
      return 7;
    default:
      return 0;
  }
}
