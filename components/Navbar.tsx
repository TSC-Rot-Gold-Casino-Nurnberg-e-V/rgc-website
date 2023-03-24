import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../public/rgc_logo_blank_white.png";
import { useHideNavbar } from "../utils/useHideNavbar";

interface Props {
  text: string;
  url: string;
}

export const NavLink = ({ text, url }: Props) => (
  <Link
    className="hover:bg-zinc-800 transition-all py-2 px-4 rounded-md"
    href={url}
  >
    {text}
  </Link>
);

export const Navbar = () => {
  const hideNavbar = useHideNavbar();
  return (
    <nav
      className={`bg-zinc-700 w-full p-4 text-zinc-50 h-24 sticky ${
        hideNavbar ? "-top-24" : "top-0"
      } transition-all duration-500 z-30`}
    >
      <div className="max-w-screen-lg flex justify-between items-center m-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl">
            <Image src={logo} alt="" width={72} height={72} />
          </Link>
        </div>
        <div className="flex gap-1 max-lg:hidden">
          <NavLink text="Der Verein" url="/association" />
          <NavLink text="News" url="/posts" />
          <NavLink text="Angebot" url="/courses" />
          <NavLink text="Veranstaltungen" url="/events/eventsOverview" />
          <NavLink text="Turnierergebnisse" url="/events/competitionResults" />
        </div>

        {/* TODO change popover to menu for ability to navigate via keyboard */}
        <Popover className="z-20 lg:hidden relative">
          <Popover.Button
            className="focus-ring flex items-center p-2 hover:bg-zinc-800 rounded-md"
            title="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />

          <Transition
            className="absolute z-10 right-0"
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel>
              <div className="flex flex-col items-center justify-center rounded bg-zinc-700 py-6 px-12 text-zinc-50 text-md gap-4 shadow-md">
                <NavLink text="News" url="/posts" />
                <NavLink text="Der Verein" url="/association" />
                <NavLink text="Angebot" url="/courses" />
                <NavLink text="Veranstaltungen" url="/events" />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </nav>
  );
};
