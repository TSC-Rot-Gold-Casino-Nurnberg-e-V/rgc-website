import Link from "next/link";

export const Footer = () => (
  <div className="bg-zinc-700 p-6">
    <div className="flex flex-col gap-8">
      <div className="text-white w-full max-w-screen-lg flex justify-between items-center m-auto">
        <Link href="">Impressum</Link>
        <Link href="">Datenschutz</Link>
        <Link href="">Kontakt</Link>
      </div>
    </div>
  </div>
);
