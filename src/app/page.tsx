import Image from "next/image";
import { Button } from "@/components/Button";
import formation_latein from "../../public/formation_latein.png";
import formation_standard from "../../public/formation_standard.jpg";
import kinder from "../../public/kindertanzen.png";
import vereinsBild from "../../public/vereinsbild.jpg";
import freizeittanz from "../../public/freizeittanz.png";
import { getNeuigkeiten } from "@/api/api";
import Link from "next/link";
import { Neuigkeit } from "@/model/Neuigkeit";
import { Main } from "@/components/Main";
import { NeuigkeitCard } from "@/components/NeuigkeitCard";
import einzeltanz_latein from "../../public/einzeltanz_latein.jpg";
import einzeltanz_standard from "../../public/einzeltanz_standard.jpg";
import { AngebotCard } from "./angebote/AngebotCard";
import { HeroSection } from "./HeroSection";
import { StatsSection } from "./StatsSection";

const formation = Math.random() > 0.5 ? formation_standard : formation_latein;
const einzeltanz =
  Math.random() > 0.5 ? einzeltanz_latein : einzeltanz_standard;

export default async function HomePage() {
  const { neuigkeiten } = await getNeuigkeiten(4);
  return (
    <Main>
      <HeroSection />
      <AngebotSection />
      <VereinsgeschichteSection />
      <StatsSection />
      <Neuigkeiten neuigkeiten={neuigkeiten} />
    </Main>
  );
}

const AngebotSection = () => (
  <div className="relative z-10 bg-base-900">
    <section
      aria-label="Kursangebote"
      className="container-lg space-y-8"
      id="angebote"
    >
      <div className="space-y-6 text-center text-base-50">
        <h2 className="text-4xl font-bold md:text-5xl">Unser Angebot</h2>
        <p
          className="mx-auto max-w-screen-sm hyphens-auto text-base md:text-lg"
          aria-label="Angebotsbeschreibung"
        >
          Bei uns findest Du alles, was das Tänzerherz begehrt - von Latein-,
          Standard- und Formationstanzen bis hin zu Breitensport, Kindertanzen
          und Breakdance.
        </p>
      </div>
      <div className="flex min-h-[21rem] snap-mandatory auto-rows-[24rem] gap-6 max-sm:snap-x max-sm:overflow-x-auto sm:grid sm:grid-cols-2">
        <AngebotCard
          loadImageWithPriority
          title="Turnier"
          image={einzeltanz}
          href="/angebote/turniertanzen"
          imageSizes="(max-width: 640px) 100vw, 50vw"
          className="max-sm:h-[20rem] max-sm:min-w-[250px] max-sm:snap-center"
        />
        <AngebotCard
          loadImageWithPriority
          title="Formation"
          image={formation}
          href="/angebote/formationstanzen"
          imageSizes="(max-width: 640px) 100vw, 50vw"
          className="max-sm:h-[20rem] max-sm:min-w-[250px] max-sm:snap-center"
        />
        <AngebotCard
          title="Kinder & Jugend"
          image={kinder}
          href="/angebote/kinder-und-jugend"
          imageSizes="(max-width: 640px) 100vw, 50vw"
          className="max-sm:h-[20rem] max-sm:min-w-[250px] max-sm:snap-center"
        />
        <AngebotCard
          title="Freizeit"
          image={freizeittanz}
          href="/angebote/freizeittanz"
          imageSizes="(max-width: 640px) 100vw, 50vw"
          className="max-sm:h-[20rem] max-sm:min-w-[250px] max-sm:snap-center"
        />
      </div>
    </section>
  </div>
);

const VereinsgeschichteSection = () => (
  <section className="relative bg-base-900" aria-label="Vereinsinformationen">
    <div className="relative z-10 w-full">
      <div className="container-lg space-y-4 py-24 text-base-50">
        <h2 className="text-4xl font-bold md:text-5xl">Über uns</h2>
        <h3 className="text-2xl font-semibold uppercase sm:text-3xl">
          Mit Herz und Rhythmus
        </h3>
        <p
          aria-label="Vereinsgeschichte"
          className="max-w-sm text-base md:text-lg"
        >
          Wir sind der RGC Nürnberg - ein Verein, der die Leidenschaft für den
          Tanzsport in all seinen Facetten vereint. Seit unserer Gründung im
          Jahr 1961 steht die Freude am Tanzen und die Förderung der Tanzkultur
          im Mittelpunkt unserer Arbeit.
        </p>
        <Link href="/verein" className="block w-fit rounded-full">
          <Button tabIndex={-1}>Mehr erfahren</Button>
        </Link>
      </div>
    </div>
    <div className="absolute inset-0">
      <Image
        src={vereinsBild}
        alt=""
        className="h-full object-cover object-top opacity-60"
        fill
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-base-900 to-5%" />
    <div className="absolute inset-0 bg-gradient-to-t from-base-900 to-5%" />
  </section>
);

const Neuigkeiten = ({ neuigkeiten }: { neuigkeiten: Array<Neuigkeit> }) => (
  <section className="container-lg space-y-8">
    <h2 className="text-center text-4xl font-bold text-base-900 md:text-5xl">
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
