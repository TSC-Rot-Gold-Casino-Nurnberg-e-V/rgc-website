import Image from "next/image";
import { Button } from "../components/Button";
import formation from "../public/formation.png";
import kinder from "../public/kindertanzen.png";
import heroBanner from "../public/heroBanner.png";
import vereinsBild from "../public/vereinsbild.png";
import { getNeuigkeiten } from "../api/api";
import Link from "next/link";
import { Neuigkeit } from "../model/Neuigkeit";
import { Main } from "../components/Main";
import { NeuigkeitCard } from "../components/NeuigkeitCard";
import standard from "../public/eventImage.png";
import { AngebotCard } from "./angebote/AngebotCard";

export default async function HomePage() {
  const { neuigkeiten } = await getNeuigkeiten(4);
  return (
    <Main>
      <HeroSection />
      <AngebotSection />
      <VereinsgeschichteSection />
      <Stats />
      <Neuigkeiten neuigkeiten={neuigkeiten} />
    </Main>
  );
}

const HeroSection = () => (
  <section className="relative bg-base-900">
    <div
      role="banner"
      className="container-lg relative z-10 space-y-6 text-primary-50"
    >
      <h1 className="heading-small sm:heading-normal md:heading-large text-gold max-w-screen-sm font-extrabold uppercase">
        Herzlich Willkommen im Rot-Gold-Casino
      </h1>
      <div className="max-w-screen-md space-y-4">
        <h2 className="heading-extrasmall md:heading-small text-base-50">
          Dein Verein für Tanzsport in Nürnberg / Fürth
        </h2>
        <p className="text-normal md:text-large text-base-50">
          Erlebe die faszinierende Welt des Tanzens! Bei uns findest Du alles,
          was das Tänzerherz begehrt - von Latein, Standard und Formationstanzen
          bis hin zu Breitensport, Kindertanzen und Breakdance. Werde Teil
          unserer Tanzfamilie und erlebe mit uns unvergessliche Momente auf der
          Tanzfläche.
        </p>
      </div>
      <Link className="block w-fit rounded-md" href="/angebote">
        <Button tabIndex={-1}>Komm vorbei</Button>
      </Link>
    </div>
    <div className="absolute inset-0 h-full">
      <Image
        src={heroBanner}
        alt=""
        className="object-cover object-top"
        fill
        priority
      />
    </div>
  </section>
);

const AngebotSection = () => (
  <div className="bg-gradient-to-br from-base-500 to-base-800">
    <section
      aria-label="Kursangebote"
      className="container-lg space-y-12"
      id="angebote"
    >
      <div className="space-y-6 text-center">
        <h2 className="heading-small max-md:heading-normal md:heading-large text-base-50">
          Unser Angebot
        </h2>
        <p
          className="text-normal lg:text-large mx-auto max-w-screen-sm hyphens-auto text-base-50"
          aria-label="Angebotsbeschreibung"
        >
          Bei uns findest Du alles, was das Tänzerherz begehrt - von Latein,
          Standard und Formationstanzen bis hin zu Breitensport, Kindertanzen
          und Breakdance.
        </p>
      </div>
      <div className="grid auto-rows-[24rem] gap-6 sm:grid-cols-2">
        <AngebotCard
          loadImageWithPriority
          title="Turniertanzen"
          image={standard}
          href="/angebote/turniertanzen"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          loadImageWithPriority
          title="Formationstanzen"
          image={formation}
          href="/angebote/formationstanzen"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          title="Kinder & Jugend"
          image={kinder}
          href="/angebote/kinder-und-jugend"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          title="Freizeittanzen"
          image={formation}
          href="/angebote/freizeittanz"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </section>
  </div>
);

const VereinsgeschichteSection = () => (
  <section className="relative" aria-label="Vereinsinformationen">
    <div className="relative z-10 w-full bg-gradient-to-r from-base-900">
      <div className="container-lg flex flex-col justify-center">
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
        <Link href="/verein" className="order-4 mt-6 w-fit rounded-md">
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
    className="gold-gradient flex justify-center"
    aria-label="Vereinsstatistik"
  >
    <div className="container-lg grid w-full gap-6 py-12 text-center max-sm:max-w-sm max-sm:px-6 sm:grid-cols-3 md:justify-between">
      <div className="max-sm:justify-self-start" aria-label="Statistik">
        <div className="heading-large text-secondary-900">{"> "}600</div>
        <div className="text-large text-secondary-900/75">Mitglieder</div>
      </div>
      <div className="max-sm:justify-self-end" aria-label="Statistik">
        <div className="heading-large text-secondary-900">8</div>
        <div className="text-large text-secondary-900/75">Formationsteams</div>
      </div>
      <div className="max-sm:justify-self-start" aria-label="Statistik">
        <div className="heading-large text-secondary-900">25x</div>
        <div className="text-large text-secondary-900/75">
          Bayernpokalsieger
        </div>
      </div>
    </div>
  </section>
);

const Neuigkeiten = ({ neuigkeiten }: { neuigkeiten: Array<Neuigkeit> }) => (
  <section className="container-lg space-y-8">
    <h2 className="heading-small max-md:heading-normal md:heading-large text-center text-accent">
      News
    </h2>
    <div className="group/container grid gap-6 sm:grid-cols-2">
      {neuigkeiten.map((neuigkeit) => (
        <NeuigkeitCard
          key={neuigkeit.id}
          slug={neuigkeit.slug}
          datum={neuigkeit.datum}
          titel={neuigkeit.titel}
          vorschautext={neuigkeit.vorschautext}
          vorschaubild={neuigkeit.vorschaubild.url}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      ))}
    </div>
    <div className="mx-auto w-fit">
      <Link className="rounded-md" href="/neuigkeiten">
        <Button tabIndex={-1}>Weitere News</Button>
      </Link>
    </div>
  </section>
);
