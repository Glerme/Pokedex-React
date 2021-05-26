import Head from "next/head";
import Router from "next/dist/next-server/lib/router/router";

import { useState } from "react";

import PageLoader from "../components/PageLoader";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  const [isPageLoader, setIsPageLoader] = useState(false);

  Router.events.on("routeChangeStart", () => setIsPageLoader(true));
  Router.events.on("routeChangeComplete", () => setIsPageLoader(false));

  return (
    <>
      <Head>
        <title>Pokedex</title>

        <meta lang="pt-BR" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <meta name="apple-mobile-web-app-status-bar" content="#e5e5e5" />
        <meta name="theme-color" content="#e5e5e5" />
      </Head>

      <GlobalStyle />
      {isPageLoader && <PageLoader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
