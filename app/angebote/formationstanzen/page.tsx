import { Main } from "../../../components/Main";
import { PageHeading } from "../../../components/PageHeading";
import formation from "../../../public/formation.png";
import { AdditionalAngebote } from "../AdditionalAngebote";
import { LearnMore } from "../LearnMore";
import Image from "next/image";

export default function FormationstanzenPage() {
  return (
    <Main>
      <PageHeading>Formationstanzen</PageHeading>
      <div className="container-lg space-y-8">
        <p className="paragraph">
          Formationstanzen ist nicht nur eine besondere Form des Tanzens,
          sondern auch eine tolle Möglichkeit, neue Leute kennenzulernen und
          gemeinsam etwas zu erschaffen. Bei uns findest Du die perfekte
          Mischung aus anspruchsvoller Choreografie und gemeinsamem Teamspirit.
        </p>
      </div>
      <section className="container-lg space-y-8">
        <h2 className="heading-normal text-center text-accent">Tanzarten</h2>
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
            <LearnMore href="/angebote/formationen/standard" />
          </section>
          <div className="relative order-2 h-96">
            <Image
              src={formation}
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
            <LearnMore href="/angebote/formationen/latein" />
          </section>
          <div className="relative order-5 h-96">
            <Image
              src={formation}
              alt=""
              fill
              priority
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <AdditionalAngebote currentPage="formationstanzen" />
    </Main>
  );
}
