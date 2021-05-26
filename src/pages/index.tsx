import Head from "next/head";
import { NextPage } from "next";

import CardInicial from "../components/CardInicial";
import Header from "../components/Header";

import { LoaderProvider } from "../hooks/loader";

const Home: NextPage = ({ children }) => {
  return (
    <LoaderProvider>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />
      <CardInicial />
      {children}
    </LoaderProvider>
  );
};

export default Home;
