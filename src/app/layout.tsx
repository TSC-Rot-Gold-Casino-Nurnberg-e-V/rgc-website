import { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";
import { Open_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";
import { PropsWithChildren } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

if (RECAPTCHA_SITE_KEY === "") {
  console.error("RECAPTCHA_SITE_KEY is not set");
}

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TSC Rot-Gold-Casino Nürnberg e.V.",
    default: "TSC Rot-Gold-Casino Nürnberg e.V.",
  },
  description:
    "Der TSC Rot-Gold-Casino Nürnberg e.V. ist ein Tanzsportverein in Nürnberg mit einem breiten Angebot für Kinder, Jugendliche und Erwachsene. Wir bieten Tanzkurse, Workshops und Tanzveranstaltungen in den Bereichen Standard, Latein, Formation und Freizeittanz an.",
  applicationName: "TSC Rot-Gold-Casino Nürnberg e.V.",
  metadataBase: new URL("https://rot-gold-casino.de"),
  keywords: [
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
    siteName: "TSC Rot-Gold-Casino Nürnberg e.V.",
    title: "TSC Rot-Gold-Casino Nürnberg e.V.",
    description:
      "Der TSC Rot-Gold-Casino Nürnberg e.V. ist ein Tanzsportverein in Nürnberg mit einem breiten Angebot für Kinder, Jugendliche und Erwachsene. Wir bieten Tanzkurse, Workshops und Tanzveranstaltungen in den Bereichen Standard, Latein, Formation und Freizeittanz an.",
    url: "https://rot-gold-casino.de",
    images: [
      {
        url: "https://res.cloudinary.com/db7oldgdh/image/upload/v1710363990/Platzhalter_1_68cc86619c.png",
        width: 1768,
        height: 1773,
        alt: "TSC Rot-Gold-Casino Nürnberg e.V.",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="de" className="scroll-pt-20">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div
          className={`flex grow flex-col bg-base-50 text-base-700 ${openSans.className}`}
        >
          {children}
        </div>
        <Sponsors />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
      />
    </html>
  );
}
