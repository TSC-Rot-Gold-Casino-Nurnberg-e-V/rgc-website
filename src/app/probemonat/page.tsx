import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { HouseIcon } from "@/components/icons/HouseIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";
import whatsappLogo from "../../../public/probemonat/whatsapp.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import Link from "next/link";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export const metadata = {
  title: "Kostenfreier Probemonat für Kinder",
  description:
    "Kostenfreier Probemonat im Januar - Unser Weihnachtsgeschenk an Ihr Kind!",
};

export default async function ProbemonatPage() {
  return (
    <Main className="bg-base-900">
      <PageHeading>Kostenfreier Probemonat für Kinder</PageHeading>
      <div className="prose prose-invert mx-auto max-w-screen-md px-4">
        <section>
          <h2>🎁 Weihnachtsgeschenk für kleine Tänzer 🎁</h2>
          <p>
            Schenke deinem Kind einen unvergesslichen Start ins neue Jahr mit
            unserem kostenlosen Probemonat im Januar!
          </p>
          <p>
            Anmeldung bei Illya Korovay (<span>+49 151 72017789</span>)
          </p>
          <div className="flex gap-2">
            <a
              className="not-prose block w-fit rounded-full"
              target="_blank"
              href="tel:+4915172017789"
            >
              <Button className="bg-base-600" tabIndex={-1}>
                <PhoneIcon />
                <span>Anrufen</span>
              </Button>
            </a>
            <a
              className="not-prose block w-fit rounded-full"
              target="_blank"
              href="https://wa.me/+4915172017789"
            >
              <Button className="bg-base-600" tabIndex={-1}>
                <Image
                  src={whatsappLogo}
                  width={24}
                  height={24}
                  alt="WhatsApp"
                />
                <span>WhatsApp</span>
              </Button>
            </a>
          </div>
        </section>
        <section>
          <h2>💃 Tanzen lernen war noch nie so einfach! 🕺</h2>
          <p>
            Unser Geschenk an alle tanzbegeisterten Kinder: Im Januar 2024
            können Kinder und Jugendliche an unseren vielseitigen Gruppenstunden{" "}
            <strong>kostenlos</strong> teilnehmen. Egal ob Standard, Latein oder
            Kindertanz – für jeden Geschmack ist etwas dabei!
          </p>
          <p>
            Keine Vorkenntnisse erforderlich – einfach vorbeikommen und
            ausprobieren!
          </p>
          <Link
            className="not-prose rounded-full"
            href="/angebote/kinder-und-jugend"
          >
            <Button className="bg-base-600">
              <span>Alle Angebote</span>
            </Button>
          </Link>
        </section>
        <section>
          <h2>📋 So funktioniert&apos;s 📋</h2>
          <h3>1. Anmelden</h3>
          <p>
            Melde dich bei Illya Korovay per Telefon oder WhatsApp unter{" "}
            <span>+49 151 72017789</span>
          </p>
          <h3>2. Vorbeikommen</h3>
          <p>Kommt im Januar zu unseren Gruppenstunden vorbei</p>
          <h3>3. Spaß haben</h3>
          <p>Erlebe die Freude am Tanzen – kostenlos und unverbindlich!</p>
        </section>
        <section>
          <h2>📍 Wo wir tanzen 📍</h2>
          <p>
            Alle Kurse finden in den Räumlichkeiten des Rot-Gold-Casinos statt.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <HouseIcon className="sm:size-6" />
              <span>TSC Rot-Gold-Casino Nürnberg e.V.</span>
            </div>
            <a
              className="flex w-fit items-center gap-2 rounded-full text-sm transition-colors sm:text-base"
              href="https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28"
              target="_blank"
            >
              <LocationIcon className="sm:size-6" />
              <span>Venusweg 7, 90763 Fürth</span>
            </a>
          </div>
        </section>
        <section>
          <h2>💫 Kommt vorbei 💫</h2>
          <p>
            Wir freuen uns darauf, dein Kind auf die Tanzfläche zu bringen!
            Frohe Weihnachten und einen tanzreichen Start ins neue Jahr!
          </p>
        </section>
      </div>
    </Main>
  );
}
