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
        <GoogleAdsense />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R1QHG28LBD"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          dataLayer.push(arguments) gtag('js', new Date()); gtag('config',
          'G-R1QHG28LBD');
        </script>
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
