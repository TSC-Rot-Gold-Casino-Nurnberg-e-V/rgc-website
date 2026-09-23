import { ComponentProps } from "react";
import Link from "next/link";
import Image from "next/image";
import sbbLogo from "../../public/optimized/sponsors/sbbLogo.webp";
import teamNbgLogo from "../../public/optimized/sponsors/teamnuernbergLogo.webp";
import hdKroftLogo from "../../public/optimized/sponsors/hdKroftLogo.webp";
import heyduckMalerbetrieb from "../../public/optimized/sponsors/heyduckMalerbetrieb.webp";
import aragLogo from "../../public/optimized/sponsors/aragLogo.webp";
import bravoDance from "../../public/optimized/sponsors/bravoDance.webp";
import danceVibesBerlin from "../../public/optimized/sponsors/danceVibesBerlin.webp";

export const Partners = () => (
  <section className="flex overflow-hidden bg-base-900 py-6 sm:py-8 md:py-10">
    <PartnerList />
    <PartnerList aria-hidden />
  </section>
);

const PartnerList = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className="flex animate-infinite-scroll items-center gap-8 pr-8"
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
        unoptimized
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
        unoptimized
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
        unoptimized
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
        unoptimized
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
        unoptimized
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
        unoptimized
      />
    </Link>
    <Link
      href="https://www.dancevibes-berlin.de/"
      target="_blank"
      className="mx-auto rounded-md"
    >
      <Image
        src={danceVibesBerlin}
        alt="Dance Vibes Berlin"
        width={250}
        className="h-auto min-w-[250px] rounded-md"
        unoptimized
      />
    </Link>
  </div>
);
