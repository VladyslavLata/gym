import Head from "next/head";

import { Hero } from "../src/components/Hero/Hero";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="main page of the gym website" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Hero />
  </>
);

export default Home;
