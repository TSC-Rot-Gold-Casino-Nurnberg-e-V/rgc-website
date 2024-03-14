import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import formation_latein from "../../../../public/formation_latein.png";
import formation_standard from "../../../../public/formation_standard.jpg";
import { AdditionalAngebote } from "../AdditionalAngebote";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formationstanzen",
  description:
    "Formationstanzen ist nicht nur eine besondere Form des Tanzens, sondern auch eine tolle Möglichkeit, neue Leute kennenzulernen und gemeinsam etwas zu erschaffen. Bei uns findest Du die perfekte Mischung aus anspruchsvoller Choreografie und gemeinsamem Teamspirit.",
};

export default function FormationstanzenPage() {
  return (
    <Main>
      <PageHeading>Formationstanzen</PageHeading>
      <div className="container-lg sm:pb-0">
        <p className="text-base sm:text-lg">
          Formationstanzen ist nicht nur eine besondere Form des Tanzens,
          sondern auch eine tolle Möglichkeit, neue Leute kennenzulernen und
          gemeinsam etwas zu erschaffen. Bei uns findest Du die perfekte
          Mischung aus anspruchsvoller Choreografie und gemeinsamem Teamspirit.
        </p>
      </div>
      <section className="container-lg space-y-4 sm:space-y-8">
        <h2 className="text-3xl font-bold text-base-900 sm:text-center sm:text-4xl">
          Tanzarten
        </h2>
        <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-y-12">
          <section className="space-y-4 self-center sm:order-3">
            <h2 className="text-2xl font-semibold text-base-900 sm:text-center sm:text-3xl">
              Standard
            </h2>
            <p className="text-base sm:text-lg">
              Standardtänze sind Bewegungstänze, bei denen die Tänzer sich in
              unterschiedlichem Tempo raumgreifend fortbewegen. Der Tango wird
              als Schreittanz betrachtet, während die anderen Tänze als
              Schwungtänze bezeichnet werden. Ein weiteres charakteristisches
              Merkmal der Standardtänze ist der durchgehende Körperkontakt
              zwischen den Tanzpartnern, der ohne Unterbrechung aufrechterhalten
              wird.
            </p>
            <p className="text-base sm:text-lg">
              Zu den Standardtänzen gehören der Langsame Walzer, Tango, Wiener
              Walzer, Slowfox und Quickstep.
            </p>
            <LinkButton
              href="/angebote/formationen/standard"
              text="Zu den Standardformationen"
            />
          </section>
          <div className="relative order-2 aspect-square sm:aspect-[4/5]">
            <Image
              src={formation_standard}
              alt=""
              fill
              priority
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <section className="order-4 space-y-4 self-center">
            <h2 className="text-2xl font-semibold text-base-900 sm:text-center sm:text-3xl">
              Latein
            </h2>
            <p className="text-base sm:text-lg">
              Die lateinamerikanischen Tänze zeichnen sich durch die
              Kommunikation zwischen den Tanzpartnern aus. Sie thematisieren auf
              vielfältige Weise die Beziehung zwischen den Paaren. Schnelle
              Drehungen und der häufige Wechsel zwischen energiegeladenen und
              ruhigen Bewegungsphasen, sowohl zeitlich als auch durch
              verschiedene Körperteile, sind weitere charakteristische Merkmale
              dieser Tänze.
            </p>
            <p className="text-base sm:text-lg">
              Zu den Lateinamerikanischen Tänzen gehören Samba, Cha-Cha-Cha,
              Rumba, Paso Doble und Jive.
            </p>
            <LinkButton
              href="/angebote/formationen/latein"
              text="Zu den Lateinformationen"
            />
          </section>
          <div className="relative order-5 aspect-square sm:aspect-[4/5]">
            <Image
              src={formation_latein}
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
