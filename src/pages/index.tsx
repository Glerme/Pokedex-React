import Head from "next/head";
import { NextPage } from "next";

import CardInicial from "../components/CardInicial";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />
      <CardInicial />
    </>
  );
};

export default Home;
