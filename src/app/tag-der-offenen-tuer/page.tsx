import Image from "next/image";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Main } from "@/components/Main";
import { Button } from "@/components/Button";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { MapIcon } from "@/components/icons/MapIcon";
import { MusicIcon } from "@/components/icons/MusicIcon";
import { SendIcon } from "@/components/icons/SendIcon";
import { SparklesIcon } from "@/components/icons/SparklesIcon";
import logoGold from "../../../public/optimized/logo_gold.webp";

const eventUrl = "https://rot-gold-casino.de/tag-der-offenen-tuer";
const wdrEventUrl = "https://www.wdrmaus.de/tuer_oeffner_tag/2026/?id=735535";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Tanzsportclub+Rot-Gold-Casino+Nürnberg+e.V.&query_place=ChIJ39vHs9FVn0cRXnKUI-YFZ28";
const mailtoUrl =
  "mailto:jugendwart@rot-gold-casino.de?subject=Tag%20der%20offenen%20T%C3%BCr%202026%20%E2%80%93%20unverbindliche%20Voranmeldung&body=Hallo%2C%20wir%20m%C3%B6chten%20voraussichtlich%20mit%20%5BAnzahl%5D%20Kind%28ern%29%20und%20%5BAnzahl%5D%20Erwachsenen%20vorbeikommen.%20Unsere%20Ankunft%20ist%20voraussichtlich%20um%20%5BUhrzeit%5D.%0A%0AViele%20Gr%C3%BC%C3%9Fe";

export const metadata: Metadata = {
  title: "Tag der offenen Tür 2026",
  description:
    "Kleine Tanzwunder entdecken: Am 3. Oktober 2026 öffnet der TSC Rot-Gold-Casino Nürnberg in Fürth seine Türen für Kinder, Familien und tanzinteressierte Erwachsene.",
  keywords: [
    "Tag der offenen Tür Fürth",
    "Türen auf mit der Maus 2026",
    "Tanzverein Fürth",
    "Tanzen für Kinder Fürth",
    "Tanzworkshop Fürth",
    "TSC Rot-Gold-Casino",
  ],
  alternates: {
    canonical: "/tag-der-offenen-tuer",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
    title: "Tag der offenen Tür 2026 | RGC Nürnberg",
    description:
      "Kleine Tanzwunder entdecken: Am 3. Oktober 2026 öffnet der TSC Rot-Gold-Casino Nürnberg in Fürth seine Türen.",
    url: eventUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tag der offenen Tür 2026 | RGC Nürnberg",
    description:
      "Kleine Tanzwunder entdecken: Am 3. Oktober 2026 öffnet der TSC Rot-Gold-Casino Nürnberg in Fürth seine Türen.",
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Tag der offenen Tür 2026",
  description:
    "Kleine Tanzwunder entdecken: ein offener Tanznachmittag für Kinder, Familien und tanzinteressierte Erwachsene.",
  startDate: "2026-10-03T14:00:00+02:00",
  endDate: "2026-10-03T17:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: true,
  sameAs: wdrEventUrl,
  location: {
    "@type": "Place",
    name: "TSC Rot-Gold-Casino Nürnberg e.V.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Venusweg 7",
      postalCode: "90763",
      addressLocality: "Fürth",
      addressCountry: "DE",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "TSC Rot-Gold-Casino Nürnberg e.V.",
    url: "https://rot-gold-casino.de",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    url: eventUrl,
    availability: "https://schema.org/InStock",
  },
};

interface EventFactProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

const EventFact = ({ icon, label, children }: EventFactProps) => (
  <div className="flex items-start gap-3 rounded-2xl border border-base-200 bg-white p-4 shadow-md ring-1 ring-base-300/70">
    <div className="mt-0.5 shrink-0 text-secondary-700" aria-hidden="true">
      {icon}
    </div>
    <div>
      <dt className="text-sm font-semibold uppercase tracking-wide text-base-600">
        {label}
      </dt>
      <dd className="mt-1 font-semibold text-base-900">{children}</dd>
    </div>
  </div>
);

interface ProgramCardProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className: string;
  icon: ReactNode;
}

const ProgramCard = ({
  eyebrow,
  title,
  description,
  children,
  className,
  icon,
}: ProgramCardProps) => (
  <article className={`flex flex-col rounded-3xl p-6 shadow-lg sm:p-8 ${className}`}>
    <div className="flex items-center gap-3">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15">
        {icon}
      </div>
      <p className="text-sm font-bold uppercase tracking-[0.18em] opacity-80">
        {eyebrow}
      </p>
    </div>
    <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{title}</h3>
    <p className="mt-4 leading-relaxed opacity-90">{description}</p>
    <div className="mt-6 grow">{children}</div>
  </article>
);

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary-700">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold text-base-900 sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-lg leading-relaxed">{description}</p>}
  </div>
);

export default function TagDerOffenenTuerPage() {
  return (
    <Main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-base-900 text-base-50">
        <div
          className="absolute -left-24 top-12 -z-10 size-72 rounded-full bg-primary-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 bottom-0 -z-10 size-80 rounded-full bg-secondary-700/35 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-primary-300/50 bg-primary-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-200">
              Türen auf mit der Maus 2026
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
              Kleine Tanzwunder entdecken
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-base-200 sm:text-2xl">
              Unser Tag der offenen Tür lädt Kinder, Familien und
              tanzinteressierte Erwachsene zum Ausprobieren, Zuschauen und
              Mitmachen ein.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/tag-der-offenen-tuer#programm"
                className="block rounded-full"
              >
                <Button
                  tabIndex={-1}
                  endIcon={<SparklesIcon className="size-5" />}
                >
                  Programm entdecken
                </Button>
              </a>
              <a
                href={mailtoUrl}
                className="block rounded-full border border-base-400 px-6 py-3 text-lg font-bold text-base-50 transition-colors hover:border-primary-200 hover:bg-white/10"
              >
                Besuch kurz ankündigen
              </a>
            </div>
            <p className="mt-5 text-sm text-base-300">
              Du kannst jederzeit spontan vorbeikommen – eine Voranmeldung ist
              nicht erforderlich.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-5 rounded-[3rem] border border-primary-300/20" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-primary-300/20 blur-2xl" />
              <Image
                src={logoGold}
                alt=""
                width={280}
                height={178}
                priority
                className="relative mx-auto h-auto w-48 sm:w-60"
                unoptimized
              />
              <div className="relative mt-8 border-t border-white/20 pt-8 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-200">
                  Samstag, 3. Oktober 2026
                </p>
                <p className="mt-3 text-4xl font-extrabold sm:text-5xl">
                  14–17 Uhr
                </p>
                <p className="mt-3 text-base-200">Venusweg 7 · 90763 Fürth</p>
                <p className="mt-5 inline-flex rounded-full bg-secondary-700/80 px-4 py-2 text-sm font-bold">
                  Eintritt frei
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 px-4 pb-4 sm:px-6 lg:px-8">
        <dl className="mx-auto grid max-w-screen-xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <EventFact icon={<CalendarIcon />} label="Wann">
            3. Oktober 2026 · 14–17 Uhr
          </EventFact>
          <EventFact icon={<LocationIcon />} label="Wo">
            Venusweg 7 · 90763 Fürth
          </EventFact>
          <EventFact icon={<SparklesIcon />} label="Für wen">
            Kinder, Familien und Erwachsene
          </EventFact>
          <EventFact icon={<InfoIcon />} label="Anmeldung">
            Nicht erforderlich · Eintritt frei
          </EventFact>
        </dl>
      </section>

      <section id="programm" className="scroll-mt-24 bg-base-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Unser Programm"
          title="Für kleine und große Tanzentdecker"
          description="Ob du zum ersten Mal Tanzluft schnupperst oder schon neugierig auf unseren Verein bist: Komm vorbei und entdecke, was Tanzen alles sein kann."
        />

        <div className="mx-auto mt-12 grid max-w-screen-xl gap-6 lg:grid-cols-2">
          <ProgramCard
            eyebrow="Für Kinder"
            title="Tanz erleben und kleine Wunder entdecken"
            description="Das Kinderprogramm richtet sich vor allem an Kinder von 7 bis 14 Jahren. Jüngere oder ältere Geschwister dürfen in Begleitung ebenfalls mitkommen."
            icon={<SparklesIcon className="size-6 text-primary-200" />}
            className="bg-gradient-to-br from-primary-800 to-primary-950 text-base-50"
          >
            <p className="font-semibold text-primary-100">
              Durchgehend geöffnete Türen zu unseren Kinderstationen:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Tanzworkshops",
                "Turnierkleider gestalten",
                "Tanz-Memory",
                "Stopptanz",
                "Erste Tanzschritte und kleine Choreografien",
                "Musik, Kostüme, Glitzer und Tanzzubehör entdecken",
              ].map((station) => (
                <li
                  key={station}
                  className="rounded-xl bg-white/10 px-4 py-3 text-sm leading-relaxed"
                >
                  {station}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-primary-100/80">
              Das ist eine unverbindliche Vorschau. Einzelne Angebote können
              sich noch ändern.
            </p>
          </ProgramCard>

          <ProgramCard
            eyebrow="Für Erwachsene"
            title="Zuschauen, mittanzen und den Verein kennenlernen"
            description="Auch Erwachsene sind herzlich eingeladen, unsere Türen zu öffnen und selbst aktiv zu werden. Begleitpersonen dürfen gerne an den Angeboten teilnehmen."
            icon={<MusicIcon className="size-6 text-secondary-200" />}
            className="bg-gradient-to-br from-secondary-800 to-secondary-950 text-base-50"
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="text-lg font-bold">Im halbstündlichen Wechsel</p>
              <p className="mt-2 text-sm leading-relaxed text-secondary-100">
                Mitmachworkshops und Shows wechseln sich ab. Die genaue
                Ausgestaltung kann sich noch ändern und wird daher nicht im
                Detail angekündigt.
              </p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 px-4 py-3 text-sm">
                Keine Anmeldung nötig
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-3 text-sm">
                Teilnahme nach Platzangebot
              </div>
            </div>
          </ProgramCard>
        </div>

        <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl border border-primary-200 bg-primary-50 px-5 py-4 text-center text-base-800 sm:px-8">
          <p>
            <strong>Tipp für Familien:</strong> Während die Kinder die
            Stationen entdecken, können Erwachsene selbst mittanzen oder eine
            Show anschauen.
          </p>
        </div>
      </section>

      <section className="bg-base-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ganz unkompliziert"
          title="So läuft dein Besuch ab"
          description="Du brauchst keine Vorkenntnisse und keine feste Anmeldung. Komm einfach zwischen 14 und 17 Uhr bei uns vorbei."
        />
        <ol className="mx-auto mt-12 grid max-w-screen-xl gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Ankommen",
              description:
                "Komm spontan vorbei – eine Voranmeldung ist nicht erforderlich.",
            },
            {
              number: "02",
              title: "Entdecken",
              description:
                "Kinder können die Stationen durchgehend ausprobieren; Erwachsene finden im halbstündlichen Wechsel neue Angebote.",
            },
            {
              number: "03",
              title: "Mitmachen",
              description:
                "Tanze mit uns, schau bei einer Show zu und lerne unseren Verein ganz unverbindlich kennen.",
            },
          ].map(({ description, number, title }) => (
            <li
              key={number}
              className="rounded-3xl bg-base-50 p-6 shadow-sm ring-1 ring-base-200"
            >
              <span className="text-5xl font-extrabold text-primary-500/40">
                {number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-base-900">{title}</h3>
              <p className="mt-2 leading-relaxed">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-base-900 px-4 py-16 text-base-50 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-300">
              Gut zu wissen
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Damit du dich wohlfühlst
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-base-300">
              Bring gute Laune und Lust auf Bewegung mit. Alles Weitere darf
              unkompliziert bleiben.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoTile title="Bequeme Kleidung" icon={<MusicIcon />}>
              Zieh an, worin du dich gut bewegen kannst. Saubere Schuhe sind
              ideal.
            </InfoTile>
            <InfoTile title="Verpflegung" icon={<InfoIcon />}>
              Für Getränke vor Ort ist gesorgt. Wenn du möchtest, kannst du
              natürlich trotzdem ein eigenes Getränk mitbringen.
            </InfoTile>
            <InfoTile title="Begleitung" icon={<SparklesIcon />}>
              Eine erwachsene Begleitperson sollte möglichst vor Ort bleiben.
              Ihre Anwesenheit wird empfohlen, ist aber keine Pflicht.
            </InfoTile>
            <InfoTile title="Aufnahmen" icon={<InfoIcon />}>
              Eventuell entstehen kurze Aufnahmen für unser Social Media.
              Einzelne erkennbare Personen veröffentlichen wir nur mit
              Zustimmung.
            </InfoTile>
          </div>
        </div>
      </section>

      <section className="bg-base-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-screen-xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-base-100 p-6 shadow-sm ring-1 ring-base-200 sm:p-8">
            <div className="flex items-center gap-3 text-secondary-700">
              <LocationIcon className="size-7" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Dein Weg zu uns
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-base-900">
              TSC Rot-Gold-Casino Nürnberg e.V.
            </h2>
            <address className="mt-4 not-italic leading-relaxed">
              Venusweg 7
              <br />
              90763 Fürth
            </address>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-fit rounded-full"
            >
              <Button
                tabIndex={-1}
                variant="primary"
                startIcon={<MapIcon className="size-5" aria-hidden="true" />}
              >
                Google Maps
              </Button>
            </a>
            <p className="mt-3 text-xs text-base-600">
              Der Verein ist nicht barrierefrei und leider nicht für
              Rollstuhlfahrer geeignet.
            </p>
          </div>

          <div className="rounded-3xl bg-primary-50 p-6 ring-1 ring-primary-200 sm:p-8">
            <div className="flex items-center gap-3 text-primary-800">
              <MailIcon className="size-7" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Unverbindlicher Kontakt
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-base-900">
              Besuch kurz ankündigen
            </h2>
            <p className="mt-4 leading-relaxed">
              Du kannst spontan vorbeikommen. Wenn du uns die Planung trotzdem
              erleichtern möchtest, kannst du euren Besuch freiwillig und
              unverbindlich per E-Mail ankündigen.
            </p>
            <a href={mailtoUrl} className="mt-6 block w-fit rounded-full">
              <Button
                tabIndex={-1}
                startIcon={<SendIcon className="size-5" />}
              >
                E-Mail senden
              </Button>
            </a>
            <p className="mt-4 text-xs text-base-600">
              Die Nachricht reserviert keinen Platz und ist keine Voraussetzung
              für die Teilnahme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading eyebrow="Noch Fragen?" title="Das Wichtigste auf einen Blick" />
        <div className="mx-auto mt-10 max-w-screen-md divide-y divide-base-200 rounded-3xl bg-base-50 px-6 shadow-sm ring-1 ring-base-200 sm:px-8">
          <FaqItem question="Muss ich mich anmelden?">
            Nein. Du kannst spontan zwischen 14 und 17 Uhr vorbeikommen. Eine
            freiwillige E-Mail hilft uns bei der Planung, reserviert aber keinen
            Platz.
          </FaqItem>
          <FaqItem question="Für welches Alter ist das Kinderprogramm gedacht?">
            Das Kinderprogramm richtet sich vor allem an Kinder von 7 bis 14
            Jahren. Jüngere oder ältere Geschwister dürfen in Begleitung
            ebenfalls mitkommen.
          </FaqItem>
          <FaqItem question="Dürfen Erwachsene mitmachen?">
            Ja. Erwachsene und Begleitpersonen sind herzlich eingeladen, an den
            Mitmachworkshops teilzunehmen und Shows anzuschauen.
          </FaqItem>
          <FaqItem question="Gibt es einen festen Zeitplan?">
            Die Erwachsenenangebote wechseln voraussichtlich halbstündlich
            zwischen Workshops und Shows. Der genaue Ablauf wird nicht im Detail
            angekündigt. Die Kinderstationen sind durchgehend geöffnet.
          </FaqItem>
        </div>
      </section>

      <section className="bg-secondary-950 px-4 py-16 text-center text-base-50 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-4xl" aria-hidden="true">
            ✨
          </p>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Komm vorbei und entdecke dein Tanzwunder
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary-100">
            Samstag, 3. Oktober 2026 · 14–17 Uhr · Venusweg 7, 90763 Fürth
          </p>
          <a
            href="/tag-der-offenen-tuer"
            className="mt-8 inline-block rounded-full focus-visible:outline-base-50"
          >
            <Button
              tabIndex={-1}
              variant="secondary"
              className="border-base-50 text-base-50 hover:border-base-50 hover:bg-base-50 hover:text-secondary-950 active:border-base-200 active:bg-base-200 active:text-secondary-950"
            >
              Nach oben
            </Button>
          </a>
        </div>
      </section>
    </Main>
  );
}

const InfoTile = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) => (
  <div className="rounded-2xl bg-base-800 p-5 ring-1 ring-base-700">
    <div className="flex items-center gap-3 text-primary-300">
      <div aria-hidden="true">{icon}</div>
      <h3 className="font-bold text-base-50">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-base-300">{children}</p>
  </div>
);

const FaqItem = ({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) => (
  <details className="group py-5 first:pt-6 last:pb-6">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-base-900 marker:hidden [&::-webkit-details-marker]:hidden">
      {question}
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl font-normal text-primary-800 transition-transform group-open:rotate-45"
        aria-hidden="true"
      >
        +
      </span>
    </summary>
    <p className="mt-3 max-w-2xl pr-12 leading-relaxed">{children}</p>
  </details>
);
