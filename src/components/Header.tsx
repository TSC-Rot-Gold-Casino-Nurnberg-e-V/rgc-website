"use client";

import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import React, {
  AnchorHTMLAttributes,
  forwardRef,
  PropsWithChildren,
} from "react";
import { usePathname } from "next/navigation";
import { twJoin, twMerge } from "tailwind-merge";
import logo_gold from "../../public/logo_gold.png";
import Image from "next/image";
import { Button } from "@/components/Button";

export const Header = () => (
  <header className="sticky top-0 z-30 h-16 w-full bg-base-900 px-8 text-base-50 transition-all duration-500 sm:h-20">
    <nav className="mx-auto flex h-16 max-w-screen-lg items-center justify-between sm:h-20">
      <div className="h-full w-fit py-3 sm:py-4">
        <Link
          href="/"
          aria-label="Startseite"
          className="block h-full w-fit rounded-full"
        >
          <Image
            src={logo_gold}
            alt=""
            height={48}
            width={86}
            className="h-full w-fit object-scale-down"
            priority
          />
        </Link>
      </div>
      <div className="z-10 flex gap-2 max-lg:hidden">
        <ul className="flex">
          <NavLink text="Der Verein" href="/verein" />
          <NavLink text="Partner" href="/partner" />
          <NavLink text="News" href="/neuigkeiten" />
          <NavLink text="Angebot" href="/angebote" />
          <DropdownMenu title="Veranstaltungen">
            <MenuLink text="Übersicht" href="/veranstaltungen" />
            <MenuLink text="Turnierergebnisse" href="/turnierergebnisse" />
          </DropdownMenu>
          <NavLink text="Kontakt" href="/kontakt" />
          <NavLink text="Showanfrage" href="/shows" />
        </ul>
        <Link href="/mitgliedschaft" className="block rounded-full">
          <Button className="px-4 py-2 text-base">Mitglied werden</Button>
        </Link>
      </div>
      <div className="relative lg:hidden">
        <Menu>
          {({ open }) => (
            <div>
              <MenuButton
                className="rounded-md p-2"
                aria-label={`Navigationsmenü ${open ? "schließen" : "öffnen"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </MenuButton>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div className="absolute -right-4 z-10">
                  <MenuItems className="rounded-2xl bg-base-800 p-2 text-base text-base-50 shadow-sm shadow-base-900">
                    <MenuLink text="Der Verein" href="/verein" />
                    <MenuLink text="Partner" href="/partner" />
                    <MenuLink text="News" href="/neuigkeiten" />
                    <MenuLink text="Angebot" href="/angebote" />
                    <MenuLink text="Veranstaltungen" href="/veranstaltungen" />
                    <MenuLink
                      text="Turnierergebnisse"
                      href="/turnierergebnisse"
                    />
                    <MenuLink text="Kontakt" href="/kontakt" />
                    <MenuLink text="Showanfrage" href="/shows" />
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          href="/mitgliedschaft"
                          className="block rounded-full"
                        >
                          <Button
                            className={twJoin(
                              "text-nowrap px-4 py-2 text-base",
                              focus && "bg-secondary-900",
                            )}
                          >
                            Mitglied werden
                          </Button>
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </div>
              </Transition>
            </div>
          )}
        </Menu>
      </div>
    </nav>
    {/*<LiveStreamChip />*/}
  </header>
);

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ text, href, className, ...rest }, ref) => {
    const pathname = usePathname();
    const isActive = pathname?.startsWith(href);
    return (
      <li className="flex list-none">
        <Link
          className={twMerge(
            "grow whitespace-nowrap rounded-full px-6 py-2 transition-all hover:text-base-50 active:bg-base-900 sm:px-2 lg:px-3",
            isActive
              ? "underline decoration-base-200 decoration-2 underline-offset-8"
              : "text-base-200",
            className,
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
  },
);

NavLink.displayName = "NavLink";

interface MenuLinkProps {
  text: string;
  href: string;
}

const MenuLink = ({ text, href }: MenuLinkProps) => (
  <MenuItem>
    {({ focus }) => (
      <NavLink
        text={text}
        href={href}
        className={twJoin("rounded-2xl px-3", focus && "bg-base-700")}
      />
    )}
  </MenuItem>
);

interface DropdownMenuProps {
  title: string;
}

const DropdownMenu = ({
  title,
  children,
}: PropsWithChildren<DropdownMenuProps>) => (
  <Menu>
    {({ open }) => (
      <div className="relative">
        <MenuButton
          className={twJoin(
            "rounded-full px-3 py-2 text-base-200 hover:text-base-50",
            open && "bg-base-800",
          )}
        >
          {title}
        </MenuButton>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            static
            className="absolute mt-1 rounded-2xl bg-base-800 p-2 text-sm text-base-50 shadow-sm shadow-base-900 sm:text-base"
          >
            {children}
          </MenuItems>
        </Transition>
      </div>
    )}
  </Menu>
);
