import { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { Open_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import { PropsWithChildren } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const VERCEL_ENV = process.env.VERCEL_ENV;

if (RECAPTCHA_SITE_KEY === "") {
  console.error("RECAPTCHA_SITE_KEY is not set");
}

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
    default: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
  },
  description:
    "Der TSC Rot-Gold-Casino Nürnberg e.V. (RGC Nürnberg) ist ein Tanzsportverein in Nürnberg mit einem breiten Angebot für Kinder, Jugendliche und Erwachsene. Wir bieten Tanzkurse, Workshops und Tanzveranstaltungen in den Bereichen Standard, Latein, Formation und Freizeittanz an.",
  applicationName: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
  metadataBase: new URL("https://rot-gold-casino.de"),
  keywords: [
    "RGC",
    "RGC Nürnberg",
    "Tanz",
    "Tanzen",
    "Tanzsport",
    "Tanzsportverein",
    "Tanzkurse",
    "Tanzveranstaltungen",
    "Tanzschule",
    "Tanzunterricht",
    "Tanztraining",
    "Tanzworkshops",
    "Tanzlehrer",
    "Tanzpartner",
    "Tanzsportclub",
    "Standard",
    "Latein",
    "Formation",
    "Freizeittanz",
    "Breitensport",
    "Kindertanz",
    "Jugendtanz",
    "Turniertanz",
    "DTV",
    "LTVB",
    "Leistungssport",
    "Freizeitsport",
    "Tanzsportverband",
    "Tanzsportabzeichen",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
    title: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
    description:
      "Der TSC Rot-Gold-Casino Nürnberg e.V. (RGC Nürnberg) ist ein Tanzsportverein in Nürnberg mit einem breiten Angebot für Kinder, Jugendliche und Erwachsene. Wir bieten Tanzkurse, Workshops und Tanzveranstaltungen in den Bereichen Standard, Latein, Formation und Freizeittanz an.",
    url: "https://rot-gold-casino.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "RGC Nürnberg | TSC Rot-Gold-Casino Nürnberg e.V.",
    description:
      "Der TSC Rot-Gold-Casino Nürnberg e.V. (RGC Nürnberg) ist ein Tanzsportverein in Nürnberg mit einem breiten Angebot für Kinder, Jugendliche und Erwachsene. Wir bieten Tanzkurse, Workshops und Tanzveranstaltungen in den Bereichen Standard, Latein, Formation und Freizeittanz an.",
    site: "@rgc_nuernberg",
    creator: "@rgc_nuernberg",
    creatorId: "1041307004558499843",
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="de" className="scroll-pt-20">
      <body
        className={`flex min-h-screen flex-col bg-base-50 text-base-700 ${openSans.className}`}
      >
        <Header />
        <div className="flex grow flex-col">{children}</div>
        <Partners />
        <Footer />
        <SpeedInsights />
        {VERCEL_ENV === "production" && <Analytics />}
      </body>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
      />
    </html>
  );
}
