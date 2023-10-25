import Link from "next/link";
import { Main } from "../components/Main";
import { PageHeading } from "../components/PageHeading";
import { Button } from "../components/Button";
import { ArrowRightIcon } from "../components/icons/ArrowRightIcon";

export default function NotFound() {
  return (
    <Main className="flex flex-col">
      <PageHeading>Hoppla...</PageHeading>
      <section className="container-sm grow space-y-4">
        <h2 className="heading-normal text-accent">Seite nicht gefunden</h2>
        <p className="paragraph">
          Leider konnten wir die von dir gesuchte Seite nicht finden.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <Link href="/" className="rounded-md">
            <Button tabIndex={-1} className="w-full">
              Zur Startseite
            </Button>
          </Link>
          <Link
            href="/kontakt"
            className="text-normal flex items-center justify-center gap-2 rounded-md font-bold transition-colors hover:text-accent"
          >
            <span>Kontaktiere uns</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </Main>
  );
}
