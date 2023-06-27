import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
      <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
