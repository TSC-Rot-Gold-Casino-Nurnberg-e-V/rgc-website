import { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Sponsors } from "../components/Sponsors";
import { Footer } from "../components/Footer";
import { Barlow } from "next/font/google";

import "../styles/globals.css";
import { ReactNode } from "react";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TSC Rot-Gold-Casino Nürnberg e.V.",
  description:
    "Willkommen auf der Website des TSC Rot-Gold-Casino Nürnberg e.V.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="scroll-pt-20">
      <body className={`flex min-h-screen flex-col ${barlow.className}`}>
        <Navbar />
        <div className={`flex grow flex-col bg-base-50 text-base-700`}>
          {children}
        </div>
        <Sponsors />
        <Footer />
      </body>
    </html>
  );
}
