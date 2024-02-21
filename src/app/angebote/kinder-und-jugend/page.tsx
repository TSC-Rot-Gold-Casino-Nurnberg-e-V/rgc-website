import { Main } from "@/components/Main";
import { PageHeading } from "@/components/PageHeading";
import { AdditionalAngebote } from "../AdditionalAngebote";
import kinder from "../../../../public/kindertanzen.png";
import standard_jugend from "../../../../public/standard_jugend.jpg";
import latein_jugend from "../../../../public/latein_jugend.jpg";
import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";

export default function KindertanzenPage() {
  return (
    <Main>
      <PageHeading>Kinder & Jugend</PageHeading>
      <div className="container-lg space-y-8 sm:pb-0">
        <p className="paragraph">
          Spielerisch tanzen lernen – bei uns ist das möglich! Wir bieten
          Kindern und Jugendlichen unterschiedlichen Alters mit verschiedenen
          Tanzrichtungen ein Programm, das Spaß und Freude am Tanzen vermittelt.
        </p>
      </div>
      <section className="container-lg space-y-8">
        <h2 className="heading-normal text-accent text-center">Gruppen</h2>
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <section className="space-y-4 self-center sm:order-3">
            <h2 className="heading-small text-accent sm:text-center">
              Kindertanzen
            </h2>
            <p className="paragraph">
              In unseren fröhlichen Stunden lernen die Kleinen nicht nur
              grundlegende Tanzschritte, sondern entwickeln auch ihre
              motorischen Fähigkeiten, Kreativität und sozialen Kompetenzen.
              Unter der Anleitung erfahrener Tanzlehrer erleben die Kinder eine
              aufregende Reise durch verschiedene Tanzstile, wobei der Fokus
              stets auf Spaß und spielerischem Lernen liegt.
            </p>
            <p className="paragraph">
              Gib Deinen Kindern die Möglichkeit, sich kreativ auszudrücken,
              neue Freunde zu finden und gleichzeitig ihre körperliche
              Entwicklung zu fördern.
            </p>
            <LinkButton
              href="/angebote/kindertanzen"
              text="Zu den Gruppenstunden"
            />
          </section>
          <div className="relative order-2 aspect-square sm:aspect-[4/5]">
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
              Die lateinamerikanischen Tänze zeichnen sich durch die
              Kommunikation zwischen den Tanzpartnern aus. Sie thematisieren auf
              vielfältige Weise die Beziehung zwischen den Paaren. Schnelle
              Drehungen und der häufige Wechsel zwischen energiegeladenen und
              ruhigen Bewegungsphasen, sowohl zeitlich als auch durch
              verschiedene Körperteile, sind weitere charakteristische Merkmale
              dieser Tänze.
            </p>
            <p className="paragraph">
              Zu den Lateinamerikanischen Tänzen gehören Samba, Cha-Cha-Cha,
              Rumba, Paso Doble und Jive.
            </p>
            <LinkButton
              href="/angebote/kinder-junioren-jugend-latein"
              text="Zu den Gruppenstunden"
            />
          </section>
          <div className="group relative order-5 aspect-square sm:aspect-[4/5]">
            <Image
              src={latein_jugend}
              alt=""
              fill
              priority
              className="rounded-lg object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <small className="absolute right-1 top-1 text-stone-300 opacity-10 transition-opacity group-hover:opacity-25">
              © Sportfotografie-Gerner
            </small>
          </div>
          <section className="order-6 space-y-4 self-center sm:order-8">
            <h2 className="heading-small text-accent sm:text-center">
              Standard
            </h2>
            <p className="paragraph">
              Standardtänze sind Bewegungstänze, bei denen die Tänzer sich in
              unterschiedlichem Tempo raumgreifend fortbewegen. Der Tango wird
              als Schreittanz betrachtet, während die anderen Tänze als
              Schwungtänze bezeichnet werden. Ein weiteres charakteristisches
              Merkmal der Standardtänze ist der durchgehende Körperkontakt
              zwischen den Tanzpartnern, der ohne Unterbrechung aufrechterhalten
              wird.
            </p>
            <p className="paragraph">
              Zu den Standardtänzen gehören der Langsamen Walzer, Tango, Wiener
              Walzer, Slowfox und Quickstep.
            </p>
            <LinkButton
              href="/angebote/kinder-junioren-jugend-standard"
              text="Zu den Gruppenstunden"
            />
          </section>
          <div className="relative order-7 aspect-square sm:aspect-[4/5]">
            <Image
              src={standard_jugend}
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
