import { getSlugs, getVeranstaltung } from "../../../api/api";
import { sanitizeHTMLField } from "../../../utils/sanitizeHTMLField";
import { formatDate } from "../../../utils/formatDate";

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
    <main className="m-auto max-w-3xl grow py-8 max-lg:px-6">
      <p className="text-center text-sm tracking-widest opacity-70">
        {veranstaltung.attributes.ende !== null ? (
          <>
            {formattedStartDate} {" bis "}
            {formatDate(new Date(veranstaltung.attributes.ende))}
          </>
        ) : (
          <>{formattedStartDate}</>
        )}
      </p>
      <h1 className="py-4 text-center text-3xl text-red-900 max-md:text-2xl">
        {veranstaltung.attributes.titel}
      </h1>
      <div className="prose m-auto">
        <div
          className="prose prose-h2:text-center prose-h3:text-red-900 prose-p:my-2 prose-p:text-justify prose-a:text-red-900 prose-table:my-4 prose-tr:flex prose-tr:justify-between prose-h2:max-md:text-xl prose-h3:max-md:text-lg"
          dangerouslySetInnerHTML={{
            __html: sanitizeHTMLField(veranstaltung.attributes.beschreibung),
          }}
        />
      </div>
    </main>
  );
}
