import { PageHeading } from "../../components/PageHeading";
import { getDokumente } from "../../api/api";
import Link from "next/link";
import { Main } from "../../components/Main";

export default async function DokumentePage() {
  const dokumente = await getDokumente();
  return (
    <Main>
      <PageHeading>Dokumente</PageHeading>
      <p className="container-sm pb-0">
        Hier findest du alle wichtigen Dokumente rund um deine Mitgliedschaft
        und den Verein.
      </p>
      <div className="container-sm space-y-2">
        {dokumente.map((dokument) => (
          <Link
            key={dokument.id}
            href={dokument.attributes.datei.data.attributes.url}
            className="flex items-center gap-2 rounded-md border border-transparent p-2 transition-colors hover:border-primary-900 hover:text-accent"
            target="_blank"
          >
            <DocumentIcon />
            <span className="text-large">{dokument.attributes.titel}</span>
          </Link>
        ))}
      </div>
    </Main>
  );
}

const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-7 w-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);
