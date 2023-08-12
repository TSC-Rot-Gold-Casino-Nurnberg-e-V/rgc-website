import { getSlugs, getVeranstaltung } from "../../../api/api";
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
  return (
    <main className="container-md">
      <Prose
        className="prose-lg"
        content={veranstaltung.attributes.beschreibung}
      />
    </main>
  );
}
