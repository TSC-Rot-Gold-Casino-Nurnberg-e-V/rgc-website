import { AngebotCard } from "./AngebotCard";
import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import einzeltanz_latein from "../../../public/einzeltanz_latein.jpg";
import einzeltanz_standard from "../../../public/einzeltanz_standard.jpg";
import formation_latein from "../../../public/formation_latein.png";
import formation_standard from "../../../public/formation_standard.jpg";
import kinder from "../../../public/kindertanzen.png";
import freizeittanz from "../../../public/freizeittanz.jpg";

const formation = Math.random() > 0.5 ? formation_standard : formation_latein;
const einzeltanz =
  Math.random() > 0.5 ? einzeltanz_latein : einzeltanz_standard;

export default function AngebotePage() {
  return (
    <Main className="bg-base-900">
      <PageHeading>Angebote</PageHeading>
      <div className="container-lg space-y-8 pt-0">
        <p className="text-normal md:text-large mx-auto max-w-screen-sm hyphens-auto text-base-50">
          Bei uns findest Du alles, was das Tänzerherz begehrt - von Latein-,
          Standard- und Formationstanzen bis hin zu Breitensport, Kindertanzen
          und Breakdance.
        </p>
        <div className="grid auto-rows-[24rem] gap-6 sm:grid-cols-2">
          <AngebotCard
            loadImageWithPriority
            title="Turnier"
            image={einzeltanz}
            href="/angebote/turniertanzen"
            imageSizes="(max-width: 640px) 100vw, 50vw"
          />
          <AngebotCard
            loadImageWithPriority
            title="Formation"
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
            title="Freizeit"
            image={freizeittanz}
            href="/angebote/freizeittanz"
            imageSizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
    </Main>
  );
}
