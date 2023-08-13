import Link from "next/link";
import Image from "next/image";
import { ComponentProps, forwardRef, ReactElement } from "react";
import logo from "../public/RGC_Logo_white.svg";
import { MailIcon } from "./icons/MailIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { twMerge } from "tailwind-merge";

export const Footer = () => (
  <footer className="bg-base-950">
    <div className="container-lg grid gap-10 text-base-300 max-lg:max-w-lg max-sm:max-w-sm sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-[minmax(auto,300px)_auto_auto_auto]">
      <div className="order-1 h-full space-y-3">
        <Link href="/" className="w-fit rounded-md">
          <Image
            src={logo}
            alt="Zur Startseite"
            className="max-h-12 w-20 object-cover"
          />
        </Link>
        <div className="space-y-1.5">
          <FooterLink
            text="Tanzsportclub Rot-Gold-Casino Nürnberg e.V."
            href="/"
            className="text-xl font-bold text-base-50"
          />
          <p className="text-small" role="Vereinsinfo">
            Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und zählt mit
            etwa 600 Mitgliedern zu den größten Tanzsportclubs in Bayern und
            Deutschland.
          </p>
        </div>
      </div>
      <div className="order-3 space-y-4 lg:order-2">
        <CategoryHeading text="Informationen" />
        <div className="space-y-1">
          <FooterLink text="Startseite" href="/" />
          <FooterLink text="Der Verein" href="/verein" />
          <FooterLink text="News" href="/neuigkeiten" />
          <FooterLink text="Veranstaltungen" href="/veranstaltungen" />
          <FooterLink text="Turnierergebnisse" href="/turnierergebnisse" />
          <FooterLink text="Kontaktanfrage" href="/kontakt" />
          <FooterLink text="Impressum" href="/impressum" />
          <FooterLink text="Datenschutz" href="/datenschutzerklaerung" />
          <FooterLink text="Dokumente" href="/dokumente" />
        </div>
      </div>
      <div className="order-4 space-y-4 lg:order-3">
        <CategoryHeading text="Angebot" />
        <div className="space-y-1">
          <FooterLink text="Turniertanzen" href="/angebote#turniertanzen" />
          <FooterLink
            text="Formationstanzen"
            href="/angebote#formationstanzen"
          />
          <FooterLink text="Kindertanzen" href="/angebote#kindertanzen" />
          <FooterLink text="Freizeittanzen" href="/angebote#freizeittanzen" />
        </div>
      </div>
      <div className="order-2 space-y-4 lg:order-4">
        <CategoryHeading text="Kontakt" />
        <div className="space-y-3">
          <ContactLink
            href="https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28"
            icon={<LocationIcon />}
            text="Venusweg 7, 90763 Fürth"
          />
          <ContactLink
            href="mailto:info@rot-gold-casino.de"
            text="info@rot-gold-casino.de"
            icon={<MailIcon />}
          />
          <ContactLink
            href="https://de-de.facebook.com/rgc.nuernberg/"
            text="Facebook"
            icon={<FacebookIcon />}
          />
          <ContactLink
            href="https://www.instagram.com/rgc_nuernberg/"
            text="Instagram"
            icon={<InstagramIcon />}
          />
        </div>
      </div>
    </div>
  </footer>
);

interface CategoryHeadingProps {
  text: string;
}

const CategoryHeading = ({ text }: CategoryHeadingProps) => (
  <h1 className="text-xl font-bold text-base-50">{text}</h1>
);

interface FooterLinkProps extends ComponentProps<"a"> {
  text: string;
  href: string;
}

const FooterLink = forwardRef<HTMLAnchorElement, FooterLinkProps>(
  ({ text, href, className, ...rest }, ref) => (
    <Link
      href={href}
      className={twMerge(
        "block w-fit rounded-md hover:text-base-50",
        className
      )}
      {...rest}
      ref={ref}
    >
      {text}
    </Link>
  )
);

FooterLink.displayName = "FooterLink";

interface ContactLinkProps {
  href: string;
  text: string;
  icon: ReactElement;
}

const ContactLink = ({ href, text, icon }: ContactLinkProps) => (
  <div className="group flex gap-2">
    <div className="flex gap-4 group-hover:cursor-pointer group-hover:text-base-50">
      <Link
        target="_blank"
        href={href}
        className="flex w-fit gap-4 rounded-md group-hover:text-base-50"
      >
        {icon}
        <span>{text}</span>
      </Link>
    </div>
  </div>
);
