import { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Sponsors } from "../components/Sponsors";
import { Footer } from "../components/Footer";
import { Nunito } from "next/font/google";

import "../styles/globals.css";
import { ReactNode } from "react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSC Rot-Gold-Casino Nürnberg e.V.",
  description:
    "Willkommen auf der Website des TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="scroll-pt-20">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div
          className={`flex grow flex-col bg-base-50 text-base-700 ${nunito.className}`}
        >
          {children}
        </div>
        <Sponsors />
        <Footer />
      </body>
    </html>
  );
}
