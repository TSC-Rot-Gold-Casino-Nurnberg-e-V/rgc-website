import { AngebotCard } from "./AngebotCard";
import einzeltanz_latein from "../../../public/einzeltanz_latein.jpg";
import formation_latein from "../../../public/formation_latein.png";
import formation_standard from "../../../public/formation_standard.jpg";
import kinder from "../../../public/kindertanzen.png";
import einzeltanz_standard from "../../../public/einzeltanz_standard.jpg";
import freizeittanz from "../../../public/freizeittanz.jpg";

const formation = Math.random() > 0.5 ? formation_standard : formation_latein;
const einzeltanz =
  Math.random() > 0.5 ? einzeltanz_latein : einzeltanz_standard;

interface Props {
  currentPage:
    | "turniertanzen"
    | "formationstanzen"
    | "kindertanzen"
    | "freizeittanzen";
}

export const AdditionalAngebote = ({ currentPage }: Props) => (
  <section className="container-lg space-y-8">
    <h2 className="text-center text-2xl font-bold sm:text-3xl">
      Weitere Angebote unseres Vereins
    </h2>
    <div className="grid auto-rows-[20rem] gap-4 sm:grid-cols-3">
      {currentPage !== "turniertanzen" && (
        <AngebotCard
          title="Turnier"
          image={einzeltanz}
          href="/angebote/turniertanzen"
          imageSizes="(max-width: 640px) 100vw, 33vw"
        />
      )}
      {currentPage !== "formationstanzen" && (
        <AngebotCard
          title="Formation"
          image={formation}
          href="/angebote/formationstanzen"
          imageSizes="(max-width: 640px) 100vw, 33vw"
        />
      )}
      {currentPage !== "kindertanzen" && (
        <AngebotCard
          title="Kinder & Jugend"
          image={kinder}
          href="/angebote/kinder-und-jugend"
          imageSizes="(max-width: 640px) 100vw, 33vw"
        />
      )}
      {currentPage !== "freizeittanzen" && (
        <AngebotCard
          title="Freizeit"
          image={freizeittanz}
          href="/angebote/freizeittanz"
          imageSizes="(max-width: 640px) 100vw, 33vw"
        />
      )}
    </div>
  </section>
);
