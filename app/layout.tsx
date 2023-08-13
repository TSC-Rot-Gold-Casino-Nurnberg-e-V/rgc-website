import { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Sponsors } from "../components/Sponsors";
import { Footer } from "../components/Footer";
import { Manrope } from "next/font/google";
import { RouterStorage } from "./RouterStorage";

import "../styles/globals.css";
import { ReactNode } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSC Rot-Gold-Casino Nürnberg e.V.",
  description:
    "Willkommen auf der Website des TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="flex min-h-screen scroll-pt-20 flex-col">
        <RouterStorage />
        <Navbar />
        <div
          className={`flex grow flex-col bg-base-50 text-base-700 ${manrope.className}`}
        >
          {children}
        </div>
        <Sponsors />
        <Footer />
      </body>
    </html>
  );
}
