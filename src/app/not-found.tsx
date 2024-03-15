import Link from "next/link";
import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { Button } from "@/components/Button";
import { MailIcon } from "@/components/icons/MailIcon";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";

export default function NotFound() {
  return (
    <Main className="flex flex-col">
      <PageHeading>Hoppla...</PageHeading>
      <section className="container-sm grow space-y-4">
        <h2 className="text-3xl sm:text-4xl">Seite nicht gefunden</h2>
        <p className="text-base sm:text-lg">
          Leider konnten wir die von dir gesuchte Seite nicht finden.
        </p>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          <Link href="/" className="rounded-full">
            <Button
              tabIndex={-1}
              className="w-full"
              startIcon={<ChevronLeftIcon />}
            >
              Zur Startseite
            </Button>
          </Link>
          <Link href="/kontakt" className="rounded-full">
            <Button
              tabIndex={-1}
              variant="secondary"
              startIcon={<MailIcon />}
              className="w-full"
            >
              Kontaktiere uns
            </Button>
          </Link>
        </div>
      </section>
    </Main>
  );
}
