import { Fragment } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Body from "../components/Body";
function Home() {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my Website!!</title>
      </Head>
      <Body />
      <Footer />
    </Fragment>
  );
}

export default Home;
