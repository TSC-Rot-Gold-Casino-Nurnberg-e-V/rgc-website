import { getSlugs, getVeranstaltung } from "../../../api/api";
import { formatDate } from "../../../utils/formatDate";
import { Prose } from "../../../components/Prose";

export const generateStaticParams = async () => {
  const slugs = await getSlugs("veranstaltungen");
  return slugs.map((slug) => ({ slug: slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default async function VeranstaltungPage({ params }: Props) {
  const veranstaltung = await getVeranstaltung(params.slug);
  const formattedStartDate = formatDate(
    new Date(veranstaltung.attributes.start)
  );
  return (
    <main className="container-md space-y-8">
      <p className="text-small text-center tracking-widest opacity-70">
        {veranstaltung.attributes.ende !== null ? (
          <>
            {formattedStartDate} {" bis "}
            {formatDate(new Date(veranstaltung.attributes.ende))}
          </>
        ) : (
          <>{formattedStartDate}</>
        )}
      </p>
      <h1 className="heading-normal sm:heading-large hyphens-auto text-accent">
        {veranstaltung.attributes.titel}
      </h1>
      <Prose content={veranstaltung.attributes.beschreibung} />
    </main>
  );
}
