import Head from "next/head";

import { Hero } from "../src/components/Hero/Hero";
import { SectionNewBody } from "../src/components/SectionNewBody/SectionNewBody";
import { SectionBecomeMore } from "../src/components/SectionBecomeMore/SectionBecomeMore";
import { SectionPremiumFacilities } from "../src/components/SectionPremiumFacilities/SectionPremiumFacilities";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="main page of the gym website" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Hero />
    <SectionNewBody />
    <SectionBecomeMore />
    <SectionPremiumFacilities />
  </>
);

export default Home;
