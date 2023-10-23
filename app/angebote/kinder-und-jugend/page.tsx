import { Main } from "../../../components/Main";
import { PageHeading } from "../../../components/PageHeading";
import { AdditionalAngebote } from "../AdditionalAngebote";
import kinder from "../../../public/kindertanzen.png";
import { LearnMore } from "../LearnMore";
import Image from "next/image";

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
          <section className="space-y-4 self-center sm:order-3">
            <h2 className="heading-small text-accent sm:text-center">
              Kindertanzen
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
            <LearnMore href="/angebote/kindertanzen" />
          </section>
          <div className="relative order-2 h-96">
            <Image
              src={kinder}
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
            <LearnMore href="/angebote/kinder-junioren-jugend-latein" />
          </section>
          <div className="relative order-5 h-96">
            <Image
              src={kinder}
              alt=""
              fill
              priority
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <section className="order-6 space-y-4 self-center sm:order-8">
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
            <LearnMore href="/angebote/kinder-junioren-jugend-standard" />
          </section>
          <div className="relative order-7 h-96">
            <Image
              src={kinder}
              alt=""
              fill
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <AdditionalAngebote currentPage="kindertanzen" />
    </Main>
  );
}
