import Link from "next/link";
import { Facebook } from "../public/Facebook";
import { Instagram } from "../public/Instagram";

export const Footer = () => (
  <div className="bg-zinc-700 p-6">
    <div className="text-white w-full max-w-screen-lg flex justify-between items-center m-auto max-sm:flex-col max-sm:gap-10">
      <div className="flex max-sm:flex-col sm:gap-8 max-sm:items-center">
        <Link href="/legalNotice">Impressum</Link>
        <Link href="/privacyPolicy">Datenschutz</Link>
        <Link href="">Kontakt</Link>
      </div>
      <div className="flex items-center gap-4 fill-white">
        <Link href="https://de-de.facebook.com/rgc.nuernberg/" title="facebook">
          <Facebook />
        </Link>
        <Link href="https://www.instagram.com/rgc_nuernberg/" title="instagram">
          <Instagram />
        </Link>
      </div>
    </div>
  </div>
);
