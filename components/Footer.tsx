import Link from "next/link";
import Image from "next/image";
import React, {
  AnchorHTMLAttributes,
  forwardRef,
  ReactElement,
  SVGProps,
} from "react";
import logo from "../public/RGC_Logo_white.svg";

export const Footer = () => (
  <footer className="default-padding bg-base-950 py-12">
    <div className="m-auto grid gap-10 text-base-300 max-lg:max-w-lg max-sm:max-w-sm sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-[minmax(auto,300px)_auto_auto_auto]">
      <div className="order-1 flex h-full flex-col gap-3">
        <Link href="/" className="w-fit rounded-md">
          <Image
            src={logo}
            alt="Zur Startseite"
            className="max-h-12 w-20 object-cover"
          />
        </Link>
        <div className="flex flex-col gap-1.5">
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
      <div className="order-3 flex flex-col gap-4 lg:order-2">
        <CategoryHeading text="Informationen" />
        <div className="flex flex-col gap-1">
          <FooterLink text="Startseite" href="/" />
          <FooterLink text="Der Verein" href="/association" />
          <FooterLink text="News" href="/posts" />
          <FooterLink text="Veranstaltungen" href="/events" />
          <FooterLink
            text="Turnierergebnisse"
            href="/events/competitionResults"
          />
          <FooterLink text="Kontaktanfrage" href="/contact" />
          <FooterLink text="Impressum" href="/legalNotice" />
          <FooterLink text="Datenschutz" href="/privacyPolicy" />
        </div>
      </div>
      <div className="order-4 flex flex-col gap-4 lg:order-3">
        <CategoryHeading text="Angebot" />
        <div className="flex flex-col gap-1">
          <FooterLink text="Turniertanzen" href="/offers" />
          <FooterLink text="Formationstanzen" href="/offers" />
          <FooterLink text="Kindertanzen" href="/offers" />
          <FooterLink text="Freizeittanzen" href="/offers" />
        </div>
      </div>
      <div className="order-2 flex flex-col gap-4 lg:order-4">
        <CategoryHeading text="Kontakt" />
        <div className="flex flex-col gap-3">
          <ContactLink
            href="https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28"
            icon={<MapIcon />}
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
            icon={<Facebook />}
          />
          <ContactLink
            href="https://www.instagram.com/rgc_nuernberg/"
            text="Instagram"
            icon={<Instagram />}
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

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

const FooterLink = forwardRef<HTMLAnchorElement, FooterLinkProps>(
  ({ text, href, className = "", ...rest }, ref) => (
    <Link
      href={href}
      className={`w-fit rounded-md hover:text-base-50 ${className}`}
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

const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6"
    role="mapIcon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
    role="mailIcon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const Instagram = ({
  className = "",
  ...svgProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
    width={24}
    height={24}
    role="instagramIcon"
    {...svgProps}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Facebook = ({ className = "", ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
    width={24}
    height={24}
    role="facebookIcon"
    {...svgProps}
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);
