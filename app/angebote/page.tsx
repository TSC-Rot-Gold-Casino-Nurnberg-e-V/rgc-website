import standard from "../../public/eventImage.png";
import formation from "../../public/formation.png";
import kinder from "../../public/kindertanzen.png";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";
import { AngebotCard } from "./AngebotCard";

export default function AngebotePage() {
  return (
    <Main>
      <PageHeading>Angebot</PageHeading>
      <div className="container-lg grid auto-rows-[24rem] gap-4 sm:grid-cols-2">
        <AngebotCard
          loadImageWithPriority={true}
          title="Turniertanzen"
          image={standard}
          href="/angebote/turniertanzen"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          loadImageWithPriority={true}
          title="Formationstanzen"
          image={formation}
          href="/angebote/formationstanzen"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          loadImageWithPriority={true}
          title="Kinder & Jugend"
          image={kinder}
          href="/angebote/kinder-und-jugend"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          loadImageWithPriority={true}
          title="Freizeittanzen"
          image={formation}
          href="/angebote/freizeittanz"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </Main>
  );
}
