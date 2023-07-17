import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </Fragment>
  );
}
