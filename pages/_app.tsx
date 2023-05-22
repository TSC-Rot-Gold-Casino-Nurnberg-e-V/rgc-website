import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Sponsors } from "../components/Sponsors";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col" data-theme="goldTheme">
      <Head>
        <title>TSC Rot-Gold-Casino Nürnberg e.V.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`grow bg-slate-50 ${manrope.className}`}>
        <Component {...pageProps} />
      </div>
      <Sponsors />
      <Footer />
    </div>
  );
}
