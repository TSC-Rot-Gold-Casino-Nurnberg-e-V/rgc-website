import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getOffer, getSlugs } from "../../api/api";
import { Offer } from "../../model/Offer";
import sanitizeHtml from "sanitize-html";
import { TrainerCard } from "../../components/TrainerCard";

export const getStaticPaths: GetStaticPaths = async () => {
  const offerSlugs = await getSlugs("offers");
  const paths = offerSlugs.map((slug) => {
    return { params: { slug: slug } };
  });
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ offer: Offer }> = async ({
  params,
}) => {
  if (typeof params?.slug !== "string") {
    throw new Error("Typeof parameter 'offer slug' is not string.");
  }
  const offer = await getOffer(params.slug);
  return { props: { offer: offer } };
};

export default function OfferPage({
  offer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="default-padding">
      <section>
        <h1>{offer.attributes.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(offer.attributes.description),
          }}
        />
      </section>
      <section>
        <h2>Unsere Trainingszeiten</h2>
        {/*  TODO Kalender erstellen */}
        <div className="h-40 bg-green-300"></div>
      </section>
      <section>
        <h2>Unsere Trainer</h2>
        <div>
          {offer.attributes.trainers.data.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              name={trainer.attributes.name}
              licence={trainer.attributes.licence}
              image={trainer.attributes.image.data.attributes.url}
            />
          ))}
        </div>
      </section>
      <section>
        <h2>FAQs</h2>
        <div>
          {offer.attributes.faqs.data.map((faq) => (
            //   TODO FAQCard erstellen
            <section key={faq.id}>
              <h3>{faq.attributes.question}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(faq.attributes.answer),
                }}
              />
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
