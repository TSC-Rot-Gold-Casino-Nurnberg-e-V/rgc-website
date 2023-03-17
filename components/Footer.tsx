import Link from "next/link";
import Image from "next/image";
import aragLogo from "../public/aragLogo.jpg";
import sbbLogo from "../public/sbbLogo.png";
import teamNuernbergLogo from "../public/teamnuernbergLogo.jpg";

export const Footer = () => (
  <div className="bg-zinc-700 p-6">
    <div className="text-white w-full max-w-screen-lg flex justify-between items-center m-auto max-sm:flex-col max-sm:gap-10">
      <div className="flex flex-col gap-4">
        <Link href="/legalNotice">Impressum</Link>
        <Link href="/privacyPolicy">Datenschutz</Link>
        <Link href="">Kontakt</Link>
      </div>
      <div className="flex gap-8 max-sm:flex-col">
        <Image src={aragLogo} alt="" width={120} height={50} />
        <Image src={sbbLogo} alt="" width={100} height={80} />
        <Image src={teamNuernbergLogo} alt="" width={120} height={50} />
      </div>
    </div>
  </div>
);
