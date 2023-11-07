import Link from "next/link";
import Image from "next/image";
import sbbLogo from "../public/sbbLogo.png";
import teamNbgLogo from "../public/teamnuernbergLogo.jpg";
import hdKroftLogo from "../public/hdKroftLogo.png";

export const Sponsors = () => (
  <section className="bg-base-900">
    <div className="container-lg grid items-center justify-center gap-8 align-middle sm:grid-cols-3">
      <Link
        href="https://www.pictrs.com/hd-kroft-photography?l=de"
        target="_blank"
        className="mx-auto rounded-md"
      >
        <Image
          src={hdKroftLogo}
          alt=""
          width={250}
          className="h-auto rounded-md"
        />
      </Link>
      <Link
        href="https://www.sportbuendnis-bundesliga.de/"
        target="_blank"
        className="mx-auto rounded-full"
      >
        <Image src={sbbLogo} alt="" width={250} className="h-auto rounded-md" />
      </Link>
      <Link
        href="https://www.nuernberg.de/internet/team_nuernberg/"
        target="_blank"
        className="mx-auto rounded-md"
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
