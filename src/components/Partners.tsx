import Link from "next/link";
import Image from "next/image";
import sbbLogo from "../../public/sponsors/sbbLogo.png";
import teamNbgLogo from "../../public/sponsors/teamnuernbergLogo.jpg";
import hdKroftLogo from "../../public/sponsors/hdKroftLogo.png";
import heyduckMalerbetrieb from "../../public/sponsors/heyduckMalerbetrieb.png";
import aragLogo from "../../public/sponsors/aragLogo.jpg";
import bravoDance from "../../public/sponsors/bravoDance.jpeg";
import { ComponentProps } from "react";

export const Partners = () => (
  <section className="flex overflow-hidden bg-base-900 py-6 sm:py-8 md:py-10">
    <PartnerList />
    <PartnerList aria-hidden />
  </section>
);

const PartnerList = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className="animate-infinite-scroll flex items-center space-x-8 pr-8"
  >
    <Link
      href="https://www.pictrs.com/hd-kroft-photography?l=de"
      target="_blank"
      className="mx-auto rounded-md"
    >
      <Image
        src={hdKroftLogo}
        alt="HD-Kroft Photography"
        width={250}
        className="h-auto min-w-[250px] rounded-md"
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
        className="h-auto min-w-[250px] rounded-md"
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
        className="h-auto min-w-[250px] rounded-md"
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
        className="h-auto min-w-[250px] rounded-md"
      />
    </Link>
    <Link
      href="https://www.arag-partner.de/gunnar-zidella/"
      target="_blank"
      className="mx-auto rounded-md"
    >
      <Image
        src={aragLogo}
        alt="ARAG Vertriebspartner Gunnar Zidella"
        width={250}
        className="h-auto min-w-[250px] rounded-md"
      />
    </Link>
    <Link
      href="https://bravo-dance.com/de/"
      target="_blank"
      className="mx-auto rounded-md"
    >
      <Image
        src={bravoDance}
        alt="Bravo Dance"
        width={250}
        className="h-auto min-w-[250px] rounded-md"
      />
    </Link>
  </div>
);
