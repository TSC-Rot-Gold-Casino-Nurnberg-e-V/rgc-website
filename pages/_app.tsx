import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TSC Rot-Gold-Casino Nürnberg e.V.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
