import Head from "next/head";
import { NextPage } from "next";

import CardInicialContainer from "../components/CardInicialContainer";
import Header from "../components/Header";

import { LoaderProvider } from "../hooks/loader";

const Home: NextPage = ({ children }) => {
  return (
    <LoaderProvider>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />
      <CardInicialContainer />
      {children}
    </LoaderProvider>
  );
};

export default Home;
