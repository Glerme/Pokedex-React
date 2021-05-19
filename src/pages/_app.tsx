import Head from "next/head";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
