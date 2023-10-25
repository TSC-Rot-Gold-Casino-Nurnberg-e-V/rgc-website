import { Main } from "../../../components/Main";
import { PageHeading } from "../../../components/PageHeading";
import standard from "../../../public/eventImage.png";
import latein from "../../../public/einzeltanz.png";
import { AdditionalAngebote } from "../AdditionalAngebote";
import { LearnMore } from "../LearnMore";
import Image from "next/image";

export default function TurniertanzenPage() {
  return (
    <Main>
      <PageHeading>Turniertanzen</PageHeading>
      <div className="container-lg space-y-8 sm:pb-0">
        <p className="paragraph">
          Entdecke das besondere Feeling des Turniertanzes und erlebe
          unvergessliche Momente auf der Tanzfläche. Unser qualifiziertes
          Trainerteam begleitet dich auf dem Weg zum Turniertänzer und
          unterstützt dich bei deinen Wettkämpfen.
        </p>
      </div>
      <section className="container-lg space-y-8">
        <h2 className="heading-normal text-accent text-center">Tanzarten</h2>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-12">
          <section className="space-y-4 self-center sm:order-3">
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
            <LearnMore href="/angebote/turniertanz-standard" />
          </section>
          <div className="relative order-2 h-96">
            <Image
              src={standard}
              alt=""
              fill
              priority
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <section className="order-4 space-y-4 self-center">
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
            <LearnMore href="/angebote/turniertanz-latein" />
          </section>
          <div className="relative order-5 h-96">
            <Image
              src={latein}
              alt=""
              fill
              priority
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <AdditionalAngebote currentPage="turniertanzen" />
    </Main>
  );
}
