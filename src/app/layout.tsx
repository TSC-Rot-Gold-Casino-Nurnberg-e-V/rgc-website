import { Metadata } from "next";
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
  title: "TSC Rot-Gold-Casino Nürnberg e.V.",
  description:
    "Willkommen auf der Website des TSC Rot-Gold-Casino Nürnberg e.V.",
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
