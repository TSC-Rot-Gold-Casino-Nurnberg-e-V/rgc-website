import { Main } from "../../../components/Main";
import { PageHeading } from "../../../components/PageHeading";
import standard from "../../../public/eventImage.png";
import { AngebotCard } from "../AngebotCard";
import latein from "../../../public/einzeltanz.png";
import { AdditionalAngebote } from "../AdditionalAngebote";

export default function TurniertanzenPage() {
  return (
    <Main>
      <PageHeading>Turniertanzen</PageHeading>
      <div className="container-lg space-y-8">
        <p className="paragraph">
          Entdecke das besondere Feeling des Turniertanzes und erlebe
          unvergessliche Momente auf der Tanzfläche. Unser qualifiziertes
          Trainerteam begleitet dich auf dem Weg zum Turniertänzer und
          unterstützt dich bei deinen Wettkämpfen.
        </p>
      </div>
      <section className="container-lg space-y-8">
        <h2 className="heading-normal text-center text-accent">Tanzarten</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <section className="space-y-4 self-center sm:order-3 sm:-translate-y-4">
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
            href="/angebote/turniertanz-standard"
            image={standard}
            loadImageWithPriority={true}
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
            href="/angebote/turniertanz-latein"
            image={latein}
            loadImageWithPriority={true}
            className="order-5 h-96"
            imageSizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </section>
      <AdditionalAngebote currentPage="turniertanzen" />
    </Main>
  );
}
