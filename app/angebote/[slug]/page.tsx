import { getAngebot, getSlugs } from "../../../api/api";
import { Wochentag } from "../../../model/Wochentag";
import { Training } from "../../../model/Training";
import Image from "next/image";
import Link from "next/link";
import { TrainerCard } from "../TrainerCard";
import { formatTime } from "../../../utils/formatTime";
import { Prose } from "../../../components/Prose";
import { PageHeading } from "../../../components/PageHeading";
import { Main } from "../../../components/Main";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("angebote");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function AngebotPage({ params }: Props) {
  const angebot = await getAngebot(params.slug);
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
          <h2 className="heading-small sm:heading-normal text-accent max-sm:text-center">
            Unsere Trainingszeiten
          </h2>
          <div className="space-y-8">
            {Array.from(trainingsGroupedByWochentag).map(
              ([wochentagTitel, trainings]) => (
                <div key={wochentagTitel} className="space-y-4">
                  <h3 className="heading-extrasmall text-base-600 max-sm:text-center">
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
                          b.attributes.start.getTime()
                      )
                      .map(({ id, attributes }) => (
                        <section
                          key={id}
                          className="flex w-96 flex-col gap-1 rounded-lg bg-white p-6 shadow"
                        >
                          <h4 className="heading-extrasmall text-accent">
                            {attributes.titel}
                          </h4>
                          <div className="text-large flex gap-1 font-semibold text-base-700">
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
                          <div className="flex grow justify-between pt-4">
                            <div className="flex gap-2 self-end">
                              {attributes.trainers.map((trainer) => (
                                <Image
                                  key={trainer.id}
                                  src={trainer.person.bild.url}
                                  width={56} // w-14
                                  height={56} // h-14
                                  alt=""
                                  className="h-14 w-14 rounded-full"
                                />
                              ))}
                            </div>
                            <p className="text-normal self-end text-base-500">
                              {attributes.saal}
                            </p>
                          </div>
                        </section>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="text-small flex w-fit items-center gap-4 rounded-xl border border-secondary-900 px-4 py-2 text-accent max-sm:mx-auto max-sm:max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 min-h-[20px] w-5 min-w-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <p>
              An Feiertagen sowie während der Schulferien finden für gewöhnlich
              keine regulären Tanzangebote statt.
            </p>
          </div>
        </div>
      </section>
      <section className="container-lg">
        <h2 className="heading-small sm:heading-normal text-accent max-sm:text-center">
          Unsere Trainer
        </h2>
        <div className="divide-y">
          {angebot.trainers.map((trainer) => (
            <div key={trainer.id} className="py-12">
              <TrainerCard
                beschreibung={trainer.beschreibung}
                name={`${trainer.person.vorname} ${trainer.person.nachname}`}
                lizenzen={trainer.lizenzen}
                bild={trainer.person.bild.url}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="container-lg">
        <section className="space-y-4 max-sm:mx-auto max-sm:max-w-sm">
          <h2 className="heading-small text-accent">Häufig gestellte Fragen</h2>
          <div className="divide-y">
            {angebot.faqs.map((faq) => (
              <section
                key={faq.id}
                className="grid gap-x-8 gap-y-2 py-5 md:grid-cols-5"
              >
                <h3 className="text-extralarge md:col-span-2">{faq.frage}</h3>
                <Prose className="md:col-span-3" content={faq.antwort} />
              </section>
            ))}
          </div>
          <div>
            <p>Du hast weitere Fragen?</p>
            <div className="flex gap-1">
              <p>Dann kontaktiere uns</p>
              <Link href="/kontakt" className="font-semibold text-accent">
                hier.
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
