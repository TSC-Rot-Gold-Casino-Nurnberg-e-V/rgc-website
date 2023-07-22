import Image, { StaticImageData } from "next/image";
import { Button } from "../components/Button";
import einzeltanz from "../public/einzeltanz.png";
import formation from "../public/formation.png";
import kindertanzen from "../public/kindertanzen.png";
import heroBanner from "../public/heroBanner.png";
import vereinsBild from "../public/vereinsbild.png";
import { getNeuigkeiten } from "../api/api";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { formatDate } from "../utils/formatDate";
import { Neuigkeit } from "../model/Neuigkeit";

export default async function HomePage() {
  const { neuigkeiten } = await getNeuigkeiten(3);
  return (
    <main>
      <HeroSection />
      <AngebotSection />
      <VereinsgeschichteSection />
      <Stats />
      <Neuigkeiten neuigkeiten={neuigkeiten} />
    </main>
  );
}

const HeroSection = () => (
  <section className="default-padding relative bg-base-950">
    <div
      role="banner"
      className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-6 py-12 text-primary-50 lg:pr-[400px]"
    >
      <h1 className="heading-small sm:max-md:heading-normal md:heading-large primary-gradient bg-clip-text font-extrabold uppercase text-transparent">
        Herzlich Willkommen im RGC
      </h1>
      <div className="flex flex-col gap-4">
        <h2 className="heading-extrasmall md:heading-small text-base-50">
          Ihr Verein für Tanzsport in Nürnberg / Fürth
        </h2>
        <p className="text-normal md:text-large text-base-50">
          Erleben Sie die faszinierende Welt des Tanzens! Bei uns finden Sie
          alles, was das Tänzerherz begehrt - von Latein, Standard und
          Formationstanzen bis hin zu Breitensport, Kindertanzen und Breakdance.
          Werden Sie Teil unserer Tanzfamilie und erleben Sie mit uns
          unvergessliche Momente auf der Tanzfläche.
        </p>
      </div>
      <Link className="w-fit rounded-md" href="/angebote">
        <Button tabIndex={-1}>Komm vorbei</Button>
      </Link>
    </div>
    <div className="absolute inset-0 h-full">
      <Image
        src={heroBanner}
        alt=""
        className="object-cover object-top"
        fill
        priority={true}
      />
    </div>
  </section>
);

// TODO: Links zu den Angeboten mit Anker ergänzen
const AngebotSection = () => (
  <section
    aria-label="Kursangebote"
    className="default-padding flex flex-col gap-12 bg-gradient-to-br from-base-500 to-base-800 py-12"
  >
    <div className="flex flex-col items-center gap-6">
      <h2 className="heading-small max-md:heading-normal md:heading-large text-base-50">
        Unser Angebot
      </h2>
      <p
        className="text-normal lg:text-large max-w-2xl hyphens-auto text-base-50"
        aria-label="Angebotsbeschreibung"
      >
        Bei uns finden Sie alles, was das Tänzerherz begehrt - von Latein,
        Standard und Formationstanzen bis hin zu Breitensport, Kindertanzen und
        Breakdance.
      </p>
    </div>
    <div className="mx-auto grid w-full max-w-screen-lg gap-6 text-base-50 sm:grid-cols-2 lg:grid-cols-3">
      <AngebotCard
        title="Einzeltanz"
        image={einzeltanz}
        className="max-h-[28rem] "
        href="/angebote"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <AngebotCard
        title="Formation"
        image={formation}
        className="max-h-[28rem]"
        href="/angebote"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <AngebotCard
        title="Kindertanzen"
        image={kindertanzen}
        className="max-h-[28rem] sm:max-lg:col-span-2"
        href="/angebote"
        imageSizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  </section>
);

interface AngebotCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  image: StaticImageData;
  href: string;
  imageSizes?: string;
}

const AngebotCard = ({
  title,
  image,
  href,
  imageSizes,
  className = "",
  ...rest
}: AngebotCardProps) => (
  <Link
    className={`group relative rounded-md hover:cursor-pointer ${className}`}
    {...rest}
    href={href}
  >
    <div className="absolute inset-0 h-full">
      <Image
        src={image}
        alt=""
        className="rounded-lg object-cover object-top saturate-0 duration-700 group-hover:saturate-100 group-focus:saturate-100"
        fill
        sizes={imageSizes}
        priority
      />
    </div>
    <div className="relative z-10 mx-auto flex h-full w-fit flex-col items-center justify-center gap-4 py-48">
      <div className="heading-extrasmall md:heading-small rounded-lg bg-transparent p-4 uppercase text-base-50 backdrop-blur-sm">
        {title}
      </div>
      <Button tabIndex={-1}>Mehr erfahren</Button>
    </div>
  </Link>
);

const VereinsgeschichteSection = () => (
  <section className="relative" aria-label="Vereinsinformationen">
    <div className="default-padding relative z-10 w-full bg-gradient-to-r from-base-950">
      <div className="mx-auto flex max-w-screen-lg flex-col justify-center py-12">
        <h2 className="heading-normal md:heading-large order-2 mt-6 text-base-50">
          Über uns
        </h2>
        <h3 className="heading-extrasmall order-1 uppercase text-base-300">
          Mit Herz und Rhythmus
        </h3>
        <p
          aria-label="Vereinsgeschichte"
          className="text-normal md:text-large order-3 mt-3 max-w-md text-base-300"
        >
          Wir sind der RGC Nürnberg - ein Verein, der die Leidenschaft für den
          Tanzsport in all seinen Facetten vereint. Seit unserer Gründung im
          Jahr 1963 steht die Freude am Tanzen und die Förderung der Tanzkultur
          im Mittelpunkt unserer Arbeit.
        </p>
        <Link
          href="/vereinsgeschichte"
          className="order-4 mt-6 w-fit rounded-md"
        >
          <Button tabIndex={-1}>Mehr erfahren</Button>
        </Link>
      </div>
    </div>
    <div className="absolute inset-0">
      <Image
        src={vereinsBild}
        alt=""
        className="h-full object-cover saturate-0"
        fill
      />
    </div>
  </section>
);

const Stats = () => (
  <section
    className="primary-gradient default-padding flex justify-center"
    aria-label="Vereinsstatistik"
  >
    <div className="mx-auto grid w-full max-w-screen-lg gap-6 py-12 text-center max-sm:max-w-sm max-sm:px-6 sm:grid-cols-3 md:justify-between">
      <div className="max-sm:justify-self-start" aria-label="Statistik">
        <div className="heading-large text-secondary-950">{"> "}600</div>
        <div className="text-large text-secondary-950/75">Mitglieder</div>
      </div>
      <div className="max-sm:justify-self-end" aria-label="Statistik">
        <div className="heading-large text-secondary-950">8</div>
        <div className="text-large text-secondary-950/75">Formationsteams</div>
      </div>
      <div className="max-sm:justify-self-start" aria-label="Statistik">
        <div className="heading-large text-secondary-950">25x</div>
        <div className="text-large text-secondary-950/75">
          Bayernpokalsieger
        </div>
      </div>
    </div>
  </section>
);

const Neuigkeiten = ({ neuigkeiten }: { neuigkeiten: Array<Neuigkeit> }) => (
  <section className="default-padding w-full bg-base-50 py-12">
    <div className="mx-auto flex max-w-screen-lg flex-col justify-center gap-12">
      <h2 className="heading-extralarge text-center text-base-700 max-md:text-5xl">
        News
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-6">
        {neuigkeiten.map((neuigkeit) => (
          <Link
            href={`/neuigkeiten/${neuigkeit.attributes.slug}`}
            key={neuigkeit.id}
            className="group rounded-xl"
          >
            <div className="relative h-[22rem] w-80 overflow-hidden rounded-xl transition-all">
              <div className="absolute inset-0 h-full shrink-0">
                <Image
                  src={neuigkeit.attributes.vorschaubild.data.attributes.url}
                  alt=""
                  fill
                  className="rounded-xl object-cover object-top transition-all duration-700 group-hover:scale-105 group-focus:scale-105"
                  sizes="(max-width: 712px) 100vw, (max-width: 1072px) 50vw, 33vw"
                />
              </div>
              <article className="relative z-10 flex h-full flex-col justify-end gap-3 rounded-xl bg-gradient-to-b from-transparent to-base-900 p-6">
                <time
                  dateTime={neuigkeit.attributes.datum}
                  className="text-extrasmall text-base-300"
                >
                  {formatDate(new Date(neuigkeit.attributes.datum))}
                </time>
                <h3 className="text-normal line-clamp-3 max-w-xs font-semibold text-base-200">
                  {neuigkeit.attributes.titel}
                </h3>
              </article>
            </div>
          </Link>
        ))}
      </div>
      <div className="mx-auto">
        <Link className="rounded-md" href="/neuigkeiten">
          <Button tabIndex={-1}>Weitere News</Button>
        </Link>
      </div>
    </div>
  </section>
);
