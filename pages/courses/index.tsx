import { AnchorHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "../../components/Button";
import standard from "../../public/eventImage.png";
import latein from "../../public/einzeltanz.png";
import formation from "../../public/formation.png";
import kinder from "../../public/kindertanzen.png";

export default function Courses() {
  return (
    <main>
      <h1 className="heading-large md:heading-extralarge primary-gradient py-10 text-center text-secondary-950 md:py-12">
        Angebot
      </h1>
      <Competition />
      <Formation />
      <Youth />
      <Hobby />
    </main>
  );
}
// TODO korrekte Links hinterlegen
const Competition = () => (
  <section className="default-padding bg-gradient-to-br from-base-500 to-base-800 py-12">
    <div className="mx-auto grid max-w-screen-lg gap-12 sm:justify-items-center lg:grid-cols-[auto_1fr]">
      <div className="flex max-w-3xl flex-col justify-center gap-3 text-base-100 max-lg:mx-auto max-lg:text-center lg:max-w-sm">
        <h2 className="heading-normal md:heading-large">Turniertanz</h2>
        <p className="text-normal">
          Entdecke das besondere Feeling des Turniertanzes und erlebe
          unvergessliche Momente auf der Tanzfläche. Unser qualifiziertes
          Trainerteam begleitet dich auf dem Weg zum Turniertänzer und
          unterstützt dich bei deinen Wettkämpfen.
        </p>
      </div>
      <div className="flex w-full gap-6 max-sm:flex-col">
        <CourseCard
          title="Standard"
          href="/courses"
          image={standard}
          priority={true}
          className="h-96"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <CourseCard
          priority={true}
          title="Latein"
          href="/courses"
          image={latein}
          className="h-96"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  </section>
);

const Formation = () => (
  <section className="default-padding bg-gradient-to-br from-base-100 to-base-400 py-12">
    <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
      <div className="flex flex-col items-center gap-3 text-base-800">
        <h2 className="heading-normal sm:heading-large text-center">
          Formationstanzen
        </h2>
        <p className="text-normal max-w-3xl text-center">
          Formationstanzen ist nicht nur eine besondere Form des Tanzens,
          sondern auch eine tolle Möglichkeit, neue Leute kennenzulernen und
          gemeinsam etwas zu erschaffen. Bei uns findest du die perfekte
          Mischung aus anspruchsvoller Choreografie und gemeinsamem Teamspirit.
        </p>
      </div>
      <div className="flex gap-6 max-sm:flex-col">
        <CourseCard
          title="Standard"
          href="/courses"
          image={formation}
          className="h-80"
          priority={true}
          imageSizes="(max-width: 640px) 100vw, 50vw"
        />
        <CourseCard
          title="Latein"
          href="/courses"
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
  <section className="default-padding bg-gradient-to-br from-base-500 to-base-800 py-12 text-base-100">
    <div className="mx-auto grid max-w-screen-lg gap-6 sm:grid-cols-2 lg:grid-cols-[auto_1fr_1fr]">
      <div className="flex flex-col gap-6 sm:max-lg:col-span-2 md:max-lg:flex-row">
        <div className="flex flex-col justify-center gap-3 max-md:mx-auto max-md:text-center">
          <h2 className="heading-normal sm:heading-large">Kinder & Jugend</h2>
          <p className="text-normal max-w-3xl lg:max-w-sm">
            Spielerisch tanzen lernen – bei uns ist das möglich! Wir bieten
            Kindern und Jugendlichen unterschiedlichen Alters mit verschiedenen
            Tanzrichtungen ein Programm, das Spaß und Freude am Tanzen
            vermittelt.
          </p>
        </div>
        <div className="h-80 w-full">
          <CourseCard
            title="Allgemein"
            href="/courses"
            image={formation}
            imageSizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <CourseCard
        title="Latein"
        href="/courses"
        image={kinder}
        className="h-96 lg:h-full"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <CourseCard
        title="Standard"
        href="/courses"
        image={kinder}
        className="h-96 lg:h-full"
        imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  </section>
);

const Hobby = () => (
  <section className="default-padding bg-gradient-to-br from-primary-50 to-primary-900 py-12">
    <div className="mx-auto flex max-w-screen-lg gap-6 max-md:flex-col md:items-center">
      <div className="flex flex-col gap-3 max-md:text-center md:basis-1/2">
        <h2 className="heading-normal sm:heading-large">Freizeittanzen</h2>
        <p className="text-normal">
          In unseren Freizeittanz-Kursen ist jeder willkommen, der Lust auf
          Bewegung und Musik hat – unabhängig von Alter, Geschlecht oder
          Vorerfahrung. Entdecke deine Leidenschaft für verschiedene Tanzstile
          und lerne neue Menschen kennen.
        </p>
      </div>
      <div className="h-96 md:basis-1/2">
        <CourseCard
          title="Freizeittanzen"
          href="/courses"
          image={formation}
          imageSizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);

interface CourseCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  image: StaticImageData;
  href: string;
  priority?: boolean;
  imageSizes?: string;
}

const CourseCard = ({
  title,
  image,
  href,
  priority = false,
  imageSizes,
  className = "",
  ...rest
}: CourseCardProps) => (
  <Link
    className={`group relative w-full rounded-md hover:cursor-pointer ${className}`}
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
