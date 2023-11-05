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
      className="container-lg relative z-10 space-y-6 py-20 text-primary-50 sm:py-32"
    >
      <h1 className="heading-large sm:heading-extralarge text-gold mx-auto max-w-lg text-center font-extrabold uppercase">
        Lebe, Liebe, Tanze!
      </h1>
      <div className="heading-extrasmall mx-auto max-w-2xl space-y-1 text-center text-base-50">
        <p>Herzlich Willkommen</p>
        <p>im TSC Rot-Gold-Casino Nürnberg e.V.</p>
        <p>Dein Verein für Tanzsport in Nürnberg / Fürth</p>
      </div>
    </div>
    <div className="absolute inset-0 h-full blur-xs">
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
  <div className="bg-base-900">
    <section
      aria-label="Kursangebote"
      className="container-lg space-y-12"
      id="angebote"
    >
      <div className="space-y-6 text-center text-base-50">
        <h2 className="heading-small max-md:heading-normal md:heading-large ">
          Unser Angebot
        </h2>
        <p
          className="text-normal md:text-large mx-auto max-w-screen-sm hyphens-auto"
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
    <div className="relative z-10 w-full bg-gradient-to-r from-base-900 from-30%">
      <div className="container-lg space-y-4 text-base-50">
        <h2 className="heading-normal md:heading-large">Über uns</h2>
        <h3 className="heading-extrasmall uppercase opacity-90">
          Mit Herz und Rhythmus
        </h3>
        <p
          aria-label="Vereinsgeschichte"
          className="text-normal md:text-large max-w-sm opacity-90"
        >
          Wir sind der RGC Nürnberg - ein Verein, der die Leidenschaft für den
          Tanzsport in all seinen Facetten vereint. Seit unserer Gründung im
          Jahr 1963 steht die Freude am Tanzen und die Förderung der Tanzkultur
          im Mittelpunkt unserer Arbeit.
        </p>
        <Link href="/verein" className="block w-fit rounded-md">
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
    className="flex justify-center bg-base-900"
    aria-label="Vereinsstatistik"
  >
    <div className="container-lg grid w-full gap-6 py-12 text-center max-sm:max-w-sm max-sm:px-6 sm:grid-cols-3 md:justify-between">
      <div
        className="text-gold max-sm:justify-self-start"
        aria-label="Statistik"
      >
        <div className="heading-large">{"> "}600</div>
        <div className="text-large font-bold text-opacity-75">Mitglieder</div>
      </div>
      <div className="text-gold max-sm:justify-self-end" aria-label="Statistik">
        <div className="heading-large">8</div>
        <div className="text-large font-bold text-opacity-75">
          Formationsteams
        </div>
      </div>
      <div
        className="text-gold max-sm:justify-self-start"
        aria-label="Statistik"
      >
        <div className="heading-large">25x</div>
        <div className="text-large font-bold text-opacity-75">
          Bayernpokalsieger
        </div>
      </div>
    </div>
  </section>
);

const Neuigkeiten = ({ neuigkeiten }: { neuigkeiten: Array<Neuigkeit> }) => (
  <section className="container-lg space-y-8">
    <h2 className="heading-small max-md:heading-normal md:heading-large text-accent text-center">
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
      <Link className="block w-fit rounded-full" href="/neuigkeiten">
        <Button tabIndex={-1}>Weitere News</Button>
      </Link>
    </div>
  </section>
);
