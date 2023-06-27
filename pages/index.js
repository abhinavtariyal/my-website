import { Fragment } from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import Body from "../components/Body";
function Home() {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my Website!!</title>
      </Head>
      <NavBar />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default Home;
