import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getAngebot, getSlugs } from "../../api/api";
import { Angebot } from "../../model/Angebot";
import sanitizeHtml from "sanitize-html";
import { TrainerCard } from "../../components/TrainerCard";
import { Wochentag } from "../../model/Wochentag";
import { Training } from "../../model/Training";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs("angebote");
  const paths = slugs.map((slug) => {
    return { params: { slug: slug } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ angebot: Angebot }> = async ({
  params,
}) => {
  if (typeof params?.slug !== "string") {
    throw new Error("Typeof parameter 'slug' is not string.");
  }
  const angebot = await getAngebot(params.slug);
  return { props: { angebot: angebot } };
};

export default function AngebotPage({
  angebot,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const trainingsGroupedByWochentag = new Map<
    Wochentag["attributes"]["titel"], // type string
    Array<Training>
  >();

  angebot.attributes.trainings.data.forEach((training) => {
    const wochentagTitel = training.attributes.wochentag.data.attributes.titel;
    const trainings = trainingsGroupedByWochentag.get(wochentagTitel);

    if (trainings === undefined) {
      trainingsGroupedByWochentag.set(wochentagTitel, [training]);
    } else {
      trainings.push(training);
    }
  });

  return (
    <main>
      <section className="default-padding py-12">
        <div className="prose-lg prose mx-auto max-w-screen-lg prose-headings:text-secondary-900">
          <h1 className="max-sm:text-center">{angebot.attributes.titel}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(angebot.attributes.beschreibung),
            }}
          />
          <div />
        </div>
      </section>
      <section className="default-padding bg-base-100 py-12">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-8">
          <h2 className="heading-normal text-secondary-900 max-sm:text-center">
            Unsere Trainingszeiten
          </h2>
          <div className="flex flex-col gap-8">
            {Array.from(trainingsGroupedByWochentag).map(
              ([wochentagTitel, trainings]) => (
                <div key={wochentagTitel} className="flex flex-col gap-4">
                  <h3 className="heading-extrasmall text-base-600 max-sm:text-center">
                    {wochentagTitel}
                  </h3>
                  <div className="flex flex-wrap gap-4 max-sm:justify-center">
                    {trainings
                      .map((training) => ({
                        ...training,
                        attributes: {
                          ...training.attributes,
                          start: new Date("2000T" + training.attributes.start),
                          ende: new Date("2000T" + training.attributes.ende),
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
                          <h4 className="heading-extrasmall text-secondary-900">
                            {attributes.titel}
                          </h4>
                          <div className="text-large flex gap-1 font-semibold text-base-700">
                            <time
                              dateTime={attributes.start.toLocaleTimeString()}
                            >
                              {attributes.start.getHours()}:
                              {attributes.start.getMinutes()}
                            </time>
                            <div>-</div>
                            <time
                              dateTime={attributes.ende.toLocaleTimeString()}
                            >
                              {attributes.ende.getHours()}:
                              {attributes.ende.getMinutes()}
                            </time>
                            <div>Uhr</div>
                          </div>
                          <div className="flex justify-between pt-4">
                            <div className="flex gap-2">
                              {attributes.trainers.data.map((trainer) => (
                                <Image
                                  key={trainer.id}
                                  src={
                                    trainer.attributes.bild.data.attributes.url
                                  }
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
          <div className="text-small flex w-fit items-center gap-4 rounded-xl border border-secondary-900 px-4 py-2 text-secondary-900 max-sm:mx-auto max-sm:max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 min-h-fit w-5 min-w-fit"
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
      <section className="default-padding py-12">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="heading-normal text-secondary-900 max-sm:text-center">
            Unsere Trainer
          </h2>
          <div className="divide-y">
            {angebot.attributes.trainers.data.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                beschreibung={trainer.attributes.beschreibung}
                name={trainer.attributes.name}
                lizenzen={trainer.attributes.lizenzen.data}
                bild={trainer.attributes.bild.data.attributes.url}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="default-padding py-12">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-12">
          <section className="flex w-full max-w-sm flex-col gap-4 max-sm:mx-auto">
            <h2 className="heading-small text-secondary-900">
              Häufig gestellte Fragen
            </h2>
            <div>
              <p>Sie können die gesuchte Antwort nicht finden?</p>
              <div className="flex gap-1">
                <p>Kontaktieren Sie uns</p>
                <Link
                  href="/kontakt"
                  className="font-semibold text-secondary-900"
                >
                  hier.
                </Link>
              </div>
            </div>
          </section>
          <div className="divide-y max-sm:mx-auto max-sm:max-w-sm">
            {angebot.attributes.faqs.data.map((faq) => (
              <section
                key={faq.id}
                className="grid gap-x-8 gap-y-2 py-5 md:grid-cols-5"
              >
                <h3 className="text-extralarge md:col-span-2">
                  {faq.attributes.frage}
                </h3>
                <div
                  className="prose space-y-0 md:col-span-3"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(faq.attributes.antwort),
                  }}
                />
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}