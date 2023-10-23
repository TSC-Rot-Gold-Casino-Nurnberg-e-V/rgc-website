import Link from "next/link";
import Image from "next/image";
import sbbLogo from "../public/sbbLogo.png";
import aragLogo from "../public/aragLogo.jpg";
import teamNbgLogo from "../public/teamnuernbergLogo.jpg";
import hdKroftLogo from "../public/hdKroftLogo.png";

export const Sponsors = () => (
  <section className="bg-base-900">
    <div className="container-lg grid items-center justify-center gap-8 max-lg:max-w-lg max-sm:max-w-xs sm:grid-cols-2 lg:grid-cols-4">
      <Link
        href="https://www.pictrs.com/hd-kroft-photography?l=de"
        target="_blank"
      >
        <Image
          src={hdKroftLogo}
          alt=""
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
      <Link href="https://www.arag-partner.de/gunnar-zidella/" target="_blank">
        <Image
          src={aragLogo}
          alt=""
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
      <Link href="https://www.sportbuendnis-bundesliga.de/" target="_blank">
        <Image src={sbbLogo} alt="" width={250} className="h-auto rounded-md" />
      </Link>
      <Link
        href="https://www.nuernberg.de/internet/team_nuernberg/"
        target="_blank"
      >
        <Image
          src={teamNbgLogo}
          alt=""
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
    </div>
  </section>
);
