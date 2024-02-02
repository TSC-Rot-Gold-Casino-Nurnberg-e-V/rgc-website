import Link from "next/link";
import Image from "next/image";
import sbbLogo from "../public/sponsors/sbbLogo.png";
import teamNbgLogo from "../public/sponsors/teamnuernbergLogo.jpg";
import hdKroftLogo from "../public/sponsors/hdKroftLogo.png";
import heyduckMalerbetrieb from "../public/sponsors/heyduckMalerbetrieb.png";

export const Sponsors = () => (
  <section className="bg-base-900">
    <div className="container-lg grid items-center justify-center gap-8 align-middle sm:grid-cols-2 md:grid-cols-4">
      <Link
        href="https://www.pictrs.com/hd-kroft-photography?l=de"
        target="_blank"
        className="mx-auto rounded-md"
      >
        <Image
          src={hdKroftLogo}
          alt="HD-Kroft Photography"
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
      <Link
        href="https://www.sportbuendnis-bundesliga.de/"
        target="_blank"
        className="mx-auto rounded-full"
      >
        <Image
          src={sbbLogo}
          alt="Sportbündnis Bundesliga"
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
      <Link
        href="https://www.nuernberg.de/internet/team_nuernberg/"
        target="_blank"
        className="mx-auto rounded-md"
      >
        <Image
          src={teamNbgLogo}
          alt="Team Nürnberg"
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
      <Link
        href="https://www.heyduck-maler.de/"
        target="_blank"
        className="mx-auto rounded-md"
      >
        <Image
          src={heyduckMalerbetrieb}
          alt="Heyduck Maler und Lackierer"
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
    </div>
  </section>
);
