"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { useHideNavbar } from "../utils/useHideNavbar";
import React, { AnchorHTMLAttributes, forwardRef } from "react";
import { usePathname } from "next/navigation";
import { twJoin, twMerge } from "tailwind-merge";
import { RgcIcon } from "./icons/RgcIcon";

export const Navbar = () => {
  const hideNavbar = useHideNavbar();
  return (
    <nav
      className={twJoin(
        "sticky z-30 h-20 w-full bg-base-900 px-8 text-base-50 transition-all duration-500",
        hideNavbar ? "-top-20" : "top-0"
      )}
    >
      <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between">
        <div className="h-full w-fit py-4">
          <Link href="/" className="block h-full w-fit rounded-full">
            <RgcIcon />
          </Link>
        </div>
        <ul className="flex gap-1 max-md:hidden">
          <NavLink text="Der Verein" href="/verein" />
          <NavLink text="News" href="/neuigkeiten" />
          <NavLink text="Angebot" href="/#angebote" />
          <NavLink text="Veranstaltungen" href="/veranstaltungen" />
          <NavLink
            text="Turnierergebnisse"
            href="/turnierergebnisse"
            shouldHideOnSmallViewport
          />
          <NavLink text="Kontakt" href="/kontakt" />
        </ul>
        <div className="relative md:hidden">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button
                  className="rounded-md p-2"
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
                  <Menu.Items className="text-normal rounded-2xl bg-base-800 p-2 text-base-50 shadow-sm shadow-base-900">
                    <MenuLink text="Der Verein" href="/verein" />
                    <MenuLink text="News" href="/neuigkeiten" />
                    <MenuLink text="Angebot" href="/angebote" />
                    <MenuLink text="Veranstaltungen" href="/veranstaltungen" />
                    <MenuLink
                      text="Turnierergebnisse"
                      href="/turnierergebnisse"
                    />
                    <MenuLink text="Kontakt" href="/kontakt" />
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
  shouldHideOnSmallViewport?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ text, href, className, shouldHideOnSmallViewport, ...rest }, ref) => {
    const pathname = usePathname();
    const isActive = pathname?.startsWith(href);
    return (
      <li
        className={twJoin(
          shouldHideOnSmallViewport && "max-lg:hidden",
          "flex list-none"
        )}
      >
        <Link
          className={twMerge(
            "grow whitespace-nowrap rounded-full px-6 py-2 transition-all hover:text-base-50 active:bg-base-900 md:px-3 lg:px-4",
            isActive
              ? "underline decoration-base-200 decoration-2 underline-offset-8"
              : "text-base-200",
            className
          )}
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
        className={twJoin("rounded-2xl px-3", active && "bg-base-700")}
      />
    )}
  </Menu.Item>
);
