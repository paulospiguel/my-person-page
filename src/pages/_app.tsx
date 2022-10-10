import "../styles/globals.css";
import GlobalStyles from "../styles/GlobalStyles";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
