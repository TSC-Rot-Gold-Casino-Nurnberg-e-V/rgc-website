import Link from "next/link";
import Image from "next/image";
import sbbLogo from "../public/sbbLogo.png";
import aragLogo from "../public/aragLogo.jpg";
import teamNbgLogo from "../public/teamnuernbergLogo.jpg";

export const Sponsors = () => (
  <section className="bg-base-900">
    <div className="container-lg flex flex-wrap items-center justify-around gap-6 gap-y-12">
      <Link href="https://www.sportbuendnis-bundesliga.de/" target="_blank">
        <Image src={sbbLogo} alt="" width={208} />
      </Link>
      <Link href="https://www.arag-partner.de/gunnar-zidella/" target="_blank">
        <Image src={aragLogo} alt="" width={208} />
      </Link>
      <Link
        href="https://www.nuernberg.de/internet/team_nuernberg/"
        target="_blank"
      >
        <Image src={teamNbgLogo} alt="" width={208} />
      </Link>
    </div>
  </section>
);
