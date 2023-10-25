import { AngebotCard } from "./AngebotCard";
import standard from "../../public/eventImage.png";
import formation from "../../public/formation.png";
import kinder from "../../public/kindertanzen.png";

interface Props {
  currentPage:
    | "turniertanzen"
    | "formationstanzen"
    | "kindertanzen"
    | "freizeittanzen";
}

export const AdditionalAngebote = ({ currentPage }: Props) => (
  <section className="container-lg space-y-8">
    <h2 className="heading-small text-center text-accent">
      Weitere Angebote unseres Vereins
    </h2>
    <div className="grid auto-rows-[20rem] gap-4 sm:grid-cols-3">
      {currentPage !== "turniertanzen" && (
        <AngebotCard
          title="Turnier"
          image={standard}
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
          image={formation}
          href="/angebote/freizeittanz"
          imageSizes="(max-width: 640px) 100vw, 33vw"
        />
      )}
    </div>
  </section>
);
