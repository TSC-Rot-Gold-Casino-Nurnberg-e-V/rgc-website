import Link from "next/link";
import { ComponentProps, forwardRef, ReactElement } from "react";
import { MailIcon } from "./icons/MailIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { twMerge } from "tailwind-merge";
import { AtIcon } from "./icons/AtIcon";
import Image from "next/image";
import logo_gold from "../../public/logo_gold.png";

export const Footer = () => (
  <footer className="bg-base-900">
    <div className="container-lg grid gap-8 text-base-300 max-lg:max-w-xl max-sm:max-w-sm sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-[minmax(auto,300px)_auto_auto_auto]">
      <section className="order-1 h-full space-y-3">
        <Link
          href="/"
          className="block h-12 w-fit rounded-full"
          aria-label="Startseite"
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
        <div className="space-y-1.5">
          <FooterLink
            text="Tanzsportclub Rot-Gold-Casino Nürnberg e.V."
            href="/"
            className="text-xl font-bold text-base-50"
          />
          <p className="text-sm">
            Der Tanzsportclub Rot-Gold-Casino besteht seit 1961 und zählt mit
            etwa 600 Mitgliedern zu den größten Tanzsportclubs in Bayern und
            Deutschland.
          </p>
        </div>
      </section>
      <section className="order-3 space-y-6 lg:order-2">
        <CategoryHeading text="Informationen" />
        <div>
          <FooterLink text="Partner" href="/partner" />
          <FooterLink text="Startseite" href="/" />
          <FooterLink text="Der Verein" href="/verein" />
          <FooterLink text="News" href="/neuigkeiten" />
          <FooterLink text="Veranstaltungen" href="/veranstaltungen" />
          <FooterLink text="Turnierergebnisse" href="/turnierergebnisse" />
          <FooterLink text="Kontaktanfrage" href="/kontakt" />
          <FooterLink text="Impressum" href="/impressum" />
          <FooterLink text="Datenschutz" href="/datenschutzerklaerung" />
          <FooterLink text="Dokumente" href="/dokumente" />
          <FooterLink
            text="Mitglieder Online"
            target="_blank"
            href="https://m.netxp-verein.de/Login/5863"
          />
        </div>
      </section>
      <section className="order-4 space-y-6 lg:order-3">
        <CategoryHeading text="Angebot" />
        <div>
          <FooterLink text="Turniertanzen" href="/angebote/turniertanzen" />
          <FooterLink
            text="Formationstanzen"
            href="/angebote/formationstanzen"
          />
          <FooterLink
            text="Kinder & Jugend"
            href="/angebote/kinder-und-jugend"
          />
          <FooterLink text="Freizeittanzen" href="/angebote/freizeittanz" />
        </div>
      </section>
      <section className="order-2 space-y-3 lg:order-4">
        <CategoryHeading text="Kontakt" />
        <div>
          <ContactLink
            href="https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28"
            icon={<LocationIcon className="size-6" />}
            text="Venusweg 7, 90763 Fürth"
          />
          <ContactLink
            href="mailto:info@rot-gold-casino.de"
            text="info@rot-gold-casino.de"
            icon={<AtIcon className="size-6" />}
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
          <div className="group">
            <div className="group-hover:cursor-pointer group-hover:text-base-50">
              <Link
                href="/kontakt"
                className="-mx-3 flex w-fit gap-4 rounded-full p-3 group-hover:text-base-50"
              >
                <MailIcon className="size-6" />
                <span>Nachricht schreiben</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
        "-m-3 block rounded-full p-3 hover:text-base-50",
        className,
      )}
      {...rest}
      ref={ref}
    >
      {text}
    </Link>
  ),
);

FooterLink.displayName = "FooterLink";

interface ContactLinkProps {
  href: string;
  text: string;
  icon: ReactElement;
}

const ContactLink = ({ href, text, icon }: ContactLinkProps) => (
  <div className="group">
    <div className="group-hover:cursor-pointer group-hover:text-base-50">
      <Link
        target="_blank"
        href={href}
        className="-mx-3 flex w-fit gap-4 rounded-full p-3 group-hover:text-base-50"
      >
        {icon}
        <span>{text}</span>
      </Link>
    </div>
  </div>
);
