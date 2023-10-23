import { Main } from "../../../components/Main";
import { PageHeading } from "../../../components/PageHeading";
import { AdditionalAngebote } from "../AdditionalAngebote";
import { AngebotCard } from "../AngebotCard";
import kinder from "../../../public/kindertanzen.png";

export default function KindertanzenPage() {
  return (
    <Main>
      <PageHeading>Kinder & Jugend</PageHeading>
      <div className="container-lg space-y-8">
        <p className="paragraph">
          Spielerisch tanzen lernen – bei uns ist das möglich! Wir bieten
          Kindern und Jugendlichen unterschiedlichen Alters mit verschiedenen
          Tanzrichtungen ein Programm, das Spaß und Freude am Tanzen vermittelt.
        </p>
      </div>
      <section className="container-lg space-y-8">
        <h2 className="heading-normal text-center text-accent">Gruppen</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <section className="space-y-4 self-center sm:order-3 sm:-translate-y-4">
            <h2 className="heading-small text-accent sm:text-center">
              Allgemein
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              magnam minima neque quae quaerat repudiandae similique veritatis
              vero voluptates voluptatibus.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              magnam minima neque quae quaerat repudiandae similique veritatis
              vero voluptates voluptatibus.
            </p>
          </section>
          <AngebotCard
            title="Mehr erfahren"
            href="/angebote/kindertanzen"
            image={kinder}
            loadImageWithPriority
            className="order-2 h-96"
            imageSizes="(max-width: 640px) 100vw, 50vw"
          />
          <section className="order-4 space-y-4 self-center sm:-translate-y-4">
            <h2 className="heading-small text-accent sm:text-center">Latein</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              magnam minima neque quae quaerat repudiandae similique veritatis
              vero voluptates voluptatibus.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              magnam minima neque quae quaerat repudiandae similique veritatis
              vero voluptates voluptatibus.
            </p>
          </section>
          <AngebotCard
            title="Mehr erfahren"
            href="/angebote/kinder-junioren-jugend-latein"
            image={kinder}
            loadImageWithPriority
            className="order-5 h-96"
            imageSizes="(max-width: 640px) 100vw, 50vw"
          />
          <section className="order-6 space-y-4 self-center sm:order-8 sm:-translate-y-4">
            <h2 className="heading-small text-accent sm:text-center">
              Standard
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              magnam minima neque quae quaerat repudiandae similique veritatis
              vero voluptates voluptatibus.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              magnam minima neque quae quaerat repudiandae similique veritatis
              vero voluptates voluptatibus.
            </p>
          </section>
          <AngebotCard
            title="Mehr erfahren"
            href="/angebote/kinder-junioren-jugend-standard"
            image={kinder}
            className="order-7 h-96"
            imageSizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </section>
      <AdditionalAngebote currentPage="kindertanzen" />
    </Main>
  );
}
