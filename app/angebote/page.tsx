import { AnchorHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../../components/Button";
import standard from "../../public/eventImage.png";
import latein from "../../public/einzeltanz.png";
import formation from "../../public/formation.png";
import kinder from "../../public/kindertanzen.png";
import { PageHeading } from "../../components/PageHeading";
import { Main } from "../../components/Main";
import { twMerge } from "tailwind-merge";

export default function AngebotePage() {
  return (
    <Main>
      <PageHeading>Angebot</PageHeading>
      <Competition />
      <Formation />
      <Youth />
      <Hobby />
    </Main>
  );
}

const Competition = () => (
  <section className="container-lg" id="turniertanzen">
    <div className="grid gap-12 sm:justify-items-center lg:grid-cols-[auto_1fr]">
      <div className="flex max-w-3xl flex-col justify-center gap-3 max-lg:mx-auto max-lg:text-center lg:max-w-sm">
        <h2 className="heading-normal text-accent">Turniertanz</h2>
        <p className="paragraph">
          Entdecke das besondere Feeling des Turniertanzes und erlebe
          unvergessliche Momente auf der Tanzfläche. Unser qualifiziertes
          Trainerteam begleitet dich auf dem Weg zum Turniertänzer und
          unterstützt dich bei deinen Wettkämpfen.
        </p>
      </div>
      <div className="flex w-full gap-6 max-sm:flex-col">
        <AngebotCard
          title="Standard"
          href="/angebote/turniertanz-standard"
          image={standard}
          priority={true}
          className="h-96"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <AngebotCard
          priority={true}
          title="Latein"
          href="/angebote/turniertanz-latein"
          image={latein}
          className="h-96"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  </section>
);

// TODO korrekte Links hinterlegen (https://github.com/TSC-Rot-Gold-Casino-Nurnberg-e-V/rgc-website/issues/54)
const Formation = () => (
  <section className="container-lg" id="formationstanzen">
    <div className="space-y-6">
      <div className="flex flex-col items-center gap-3 text-base-800">
        <h2 className="heading-normal text-center text-accent">
          Formationstanzen
        </h2>
        <p className="paragraph max-w-3xl text-center">
          Formationstanzen ist nicht nur eine besondere Form des Tanzens,
          sondern auch eine tolle Möglichkeit, neue Leute kennenzulernen und
          gemeinsam etwas zu erschaffen. Bei uns findest Du die perfekte
          Mischung aus anspruchsvoller Choreografie und gemeinsamem Teamspirit.
        </p>
      </div>
      <div className="flex gap-6 max-sm:flex-col">
        <AngebotCard
          title="Standard"
          href="/angebote/formationen/standard"
          image={formation}
          className="h-80"
          priority={true}
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <AngebotCard
          title="Latein"
          href="/angebote/formationen/latein"
          image={formation}
          priority={true}
          className="h-80"
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);

const Youth = () => (
  <section className="container-lg" id="kindertanzen">
    <div className="mx-auto grid max-w-screen-lg gap-6 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr]">
      <div className="flex flex-col gap-6 sm:max-lg:col-span-2 md:max-lg:flex-row">
        <div className="flex flex-col justify-center gap-3 max-md:mx-auto max-md:text-center">
          <h2 className="heading-normal text-accent">Kinder & Jugend</h2>
          <p className="paragraph max-w-3xl lg:max-w-sm">
            Spielerisch tanzen lernen – bei uns ist das möglich! Wir bieten
            Kindern und Jugendlichen unterschiedlichen Alters mit verschiedenen
            Tanzrichtungen ein Programm, das Spaß und Freude am Tanzen
            vermittelt.
          </p>
        </div>
        <div className="h-80 w-full">
          <AngebotCard
            title="Allgemein"
            href="/angebote/kindertanzen"
            image={formation}
            imageSizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <AngebotCard
        title="Latein"
        href="/angebote/kinder-junioren-jugend-latein"
        image={kinder}
        className="h-96 lg:h-full"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <AngebotCard
        title="Standard"
        href="/angebote/kinder-junioren-jugend-standard"
        image={kinder}
        className="h-96 lg:h-full"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  </section>
);

const Hobby = () => (
  <section
    className="container-lg flex gap-6 max-md:flex-col md:items-center"
    id="freizeittanzen"
  >
    <div className="space-y-3 max-md:text-center md:basis-1/2">
      <h2 className="heading-normal text-accent">Freizeittanzen</h2>
      <p className="paragraph">
        In unseren Freizeittanz-Kursen ist jeder willkommen, der Lust auf
        Bewegung und Musik hat – unabhängig von Alter, Geschlecht oder
        Vorerfahrung. Entdecke deine Leidenschaft für verschiedene Tanzstile und
        lerne neue Menschen kennen.
      </p>
    </div>
    <div className="h-96 md:basis-1/2">
      <AngebotCard
        title="Freizeittanzen"
        href="/angebote/freizeittanz"
        image={formation}
        imageSizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </section>
);

interface AngebotCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  image: StaticImageData;
  href: string;
  priority?: boolean;
  imageSizes?: string;
}

const AngebotCard = ({
  title,
  image,
  href,
  priority = false,
  imageSizes,
  className,
  ...rest
}: AngebotCardProps) => (
  <Link
    className={twMerge(
      "group relative w-full rounded-md hover:cursor-pointer ",
      className
    )}
    {...rest}
    href={href}
  >
    <div className="absolute inset-0">
      <Image
        src={image}
        alt=""
        className="rounded-lg object-cover object-top saturate-0 duration-700 group-hover:saturate-100 group-focus:saturate-100"
        fill
        placeholder="blur"
        priority={priority}
        sizes={imageSizes}
      />
    </div>
    <div className="relative z-10 mx-auto flex h-full w-fit items-end pb-12">
      <Button tabIndex={-1} className="w-40">
        {title}
      </Button>
    </div>
  </Link>
);
