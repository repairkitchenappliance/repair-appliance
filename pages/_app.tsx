import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Calls from "../pages/index/Calls";
import { Analytics } from "@vercel/analytics/react";
import GoogleAdsense from "../components/googleAdsense";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Quick Repair</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <Calls />
      <Footer />
    </div>
  );
}

export default MyApp;
