import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../public/rgc_logo_blank_white.png";
import { useHideNavbar } from "../utils/useHideNavbar";
import React, { AnchorHTMLAttributes, forwardRef } from "react";
import { useRouter } from "next/router";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ text, href, className = "", ...rest }: Props, ref) => {
    const router = useRouter();
    let isActive = router.asPath.startsWith(href);
    return (
      <li>
        <Link
          className={`transition-all md:px-3 px-6 py-2 lg:px-4 rounded-md hover:bg-zinc-800 whitespace-nowrap ${
            isActive ? "underline decoration-white underline-offset-4" : ""
          } ${className}`}
          {...rest}
          href={href}
          ref={ref}
        >
          {text}
        </Link>
      </li>
    );
  }
);
NavLink.displayName = "Navlink";

export const Navbar = () => {
  const hideNavbar = useHideNavbar();
  return (
    <nav
      className={`bg-zinc-700 w-full p-4 text-zinc-50 h-24 sticky ${
        hideNavbar ? "-top-24" : "top-0"
      } transition-all duration-500 z-30`}
    >
      <ul className="max-w-screen-lg flex justify-between items-center m-auto">
        <li className="flex items-center gap-10">
          <Link href="/" className="text-xl">
            <Image src={logo} alt="Startseite" width={72} height={72} />
          </Link>
        </li>
        <div className="flex gap-1 max-md:hidden">
          <NavLink text="Der Verein" href="/association" />
          <NavLink text="News" href="/posts" />
          <NavLink text="Angebot" href="/courses" />
          <NavLink text="Veranstaltungen" href="/eventsOverview" />
          <NavLink text="Turnierergebnisse" href="/events/competitionResult" />
          <NavLink text="Kontakt" href="/contact" />
        </div>

        <span className="md:hidden relative">
          <Menu>
            <Menu.Button className="focus:bg-zinc-800 p-2 rounded-md focus:outline-none">
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
            </Menu.Button>
            <Transition
              className="absolute z-10 -right-4"
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex flex-col bg-zinc-700 items-end justify-center py-2 rounded text-zinc-50 text-md shadow-md focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      text="Der Verein"
                      href="/association"
                      className={` ${active && "bg-zinc-800"}`}
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      text="News"
                      href="/posts"
                      className={` ${active && "bg-zinc-800"}`}
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      text="Angebot"
                      href="/courses"
                      className={` ${active && "bg-zinc-800"}`}
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      text="Veranstaltungen"
                      href="/eventsOverview"
                      className={` ${active && "bg-zinc-800"}`}
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      text="Turnierergebnisse"
                      href="/events/competitionResult"
                      className={` ${active && "bg-zinc-800"}`}
                    />
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      text="Kontakt"
                      href="/contact"
                      className={` ${active && "bg-zinc-800"}`}
                    />
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </span>
      </ul>
    </nav>
  );
};
