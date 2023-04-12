import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "../public/rgc_logo_blank_white.png";
import { useHideNavbar } from "../utils/useHideNavbar";
import React, { AnchorHTMLAttributes, forwardRef } from "react";
import { useRouter } from "next/router";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
  shouldHideOnSmallViewport?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ text, href, className = "", shouldHideOnSmallViewport, ...rest }, ref) => {
    const router = useRouter();
    const isActive = router.asPath.startsWith(href);
    return (
      <li className={shouldHideOnSmallViewport ? "max-lg:hidden" : ""}>
        <Link
          className={`whitespace-nowrap rounded-md px-6 py-2 transition-all hover:text-gray-50 md:px-3 lg:px-4 ${
            isActive
              ? "underline decoration-gray-200 decoration-2 underline-offset-8 "
              : "text-gray-300"
          } ${className}`}
          {...rest}
          href={href}
          ref={ref}
          aria-current={isActive ? "page" : "false"}
        >
          {text}
        </Link>
      </li>
    );
  }
);

NavLink.displayName = "NavLink";

interface MenuLinkProps {
  text: string;
  href: string;
}

const MenuLink = ({ text, href }: MenuLinkProps) => (
  <Menu.Item>
    {({ active }) => (
      <NavLink
        text={text}
        href={href}
        className={`rounded-2xl ${active ? "bg-gray-800" : ""}`}
      />
    )}
  </Menu.Item>
);

export const Navbar = () => {
  const hideNavbar = useHideNavbar();
  return (
    <nav
      className={`sticky h-20 w-full bg-primary px-8 text-gray-50 ${
        hideNavbar ? "-top-20" : "top-0"
      } z-30 transition-all duration-500`}
    >
      <ul className="m-auto flex h-full max-w-screen-lg items-center justify-between">
        <li>
          <Link href="/">
            <Image src={logo} alt="Startseite" width={72} height={72} />
          </Link>
        </li>
        <div className="flex gap-1 max-md:hidden">
          <NavLink text="Der Verein" href="/association" />
          <NavLink text="News" href="/posts" />
          <NavLink text="Angebot" href="/courses" />
          <NavLink text="Veranstaltungen" href="/events/eventsOverview" />
          <NavLink
            text="Turnierergebnisse"
            href="/events/competitionResults"
            shouldHideOnSmallViewport
          />
          <NavLink text="Kontakt" href="/contact" />
        </div>

        <div className="relative md:hidden" role="presentation">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button
                  className="rounded-md p-2 hover:bg-gray-700 focus:bg-gray-800"
                  aria-label={`Navigationsmenü ${
                    open ? "schließen" : "öffnen"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                    role="presentation"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  className="absolute -right-4 z-10"
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="text-md menu rounded-box bg-gray-700 py-2 text-gray-50">
                    <MenuLink text="Der Verein" href="/association" />
                    <MenuLink text="News" href="/posts" />
                    <MenuLink text="Angebot" href="/courses" />
                    <MenuLink text="Veranstaltungen" href="/eventsOverview" />
                    <MenuLink
                      text="Turnierergebnisse"
                      href="/events/competitionResult"
                    />
                    <MenuLink text="Kontakt" href="/contact" />
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </ul>
    </nav>
  );
};
