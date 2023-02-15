import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";

interface Props {
  text: string;
  url: string;
}

export const NavLink = ({ text, url }: Props) => {
  return (
    <Link
      className="hover:bg-zinc-800 transition-all py-2 px-4 rounded-md"
      href={url}
    >
      {text}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="bg-zinc-700 w-full p-4 text-zinc-50 sticky top-0 z-30">
      <div className="max-w-screen-lg flex justify-between items-center m-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl">
            LOGO
          </Link>

          <div className="flex gap-1 max-lg:hidden">
            <NavLink text="News" url="/posts" />
            <NavLink text="Der Verein" url="/derVerein" />
            <NavLink text="Angebot" url="/angebot" />
            <NavLink text="Veranstaltungen" url="/events" />
          </div>
        </div>
        {/* TODO check for accessibility of input field */}
        <div className="flex items-center h-10 max-sm:hidden">
          <input
            type="text"
            className="bg-zinc-800 rounded-l-md focus:outline-none py-2 px-4 text-zinc-100"
          />
          <button className="bg-zinc-800 rounded-r-md h-full py-2 px-4 flex items-center stroke-zinc-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="inherit"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
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
              <div className="flex flex-col items-center justify-center rounded bg-white py-6 px-12 text-black text-md gap-4 shadow-md">
                <NavLink text="News" url="/posts" />
                <NavLink text="Der Verein" url="/derVerein" />
                <NavLink text="Angebot" url="/angebot" />
                <NavLink text="Veranstaltungen" url="/events" />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </nav>
  );
};
