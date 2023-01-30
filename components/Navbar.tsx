import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

interface Props {
  text: string;
  url: string;
}

export const NavLink = ({ text, url }: Props) => {
  return <Link href={url}>{text}</Link>;
};

export const NavbarContent = () => {
  return (
    <div className="max-w-2xl flex justify-between items-center m-auto text-white">
      <Link href="/">
        <Image src={logo} alt="" width={120} height={120} />
      </Link>
      <div className="flex gap-10">
        <NavLink text="Home" url="/" />
        <NavLink text="Home" url="/" />
        <NavLink text="Home" url="/" />
        <NavLink text="Home" url="/" />
        <NavLink text="Home" url="/" />
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-rgc-dark to-rgc-red w-full p-4">
      <NavbarContent />
    </div>
  );
};
