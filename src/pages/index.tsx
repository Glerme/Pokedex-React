import Head from "next/head";
import { NextPage } from "next";

import Header from "../components/Header";
import { useCallback, useEffect, useState } from "react";
import { useLoader } from "../hooks/loader";
import { PokemonSpeciesProps } from "../types/PokemonTypes";
import { fetchPokemons } from "../utils/fetchPokemons";
import Loader from "../components/Loader";
import CardInicialUnico from "../components/CardInicialUnico";

import { Container } from "../styles/pages/Home";

const Home: NextPage = ({ children }) => {
  const [pokes, setPokes] = useState<PokemonSpeciesProps[]>([]);
  const [pokePerPage, setPokePerPage] = useState(10);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { isLoader, removeLoader, addLoader } = useLoader();

  const getPokemon = useCallback(async () => {
    try {
      addLoader();
      const pokemons = await fetchPokemons(0);

      setPokes(pokemons);
      removeLoader();
    } catch (error) {
      removeLoader();
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPokemon();
  }, []);

  const handleScroll = async () => {
    const position = window.pageYOffset;
    const maxTop = document.body.scrollHeight;

    const valorNovo = maxTop - position;

    setScrollPosition(valorNovo);

    if (position > valorNovo) {
      try {
        addLoader();

        const newPokemons = await fetchPokemons(pokes.length);
        setPokes([...pokes, ...newPokemons]);

        removeLoader();
      } catch (error) {
        removeLoader();
        console.error(error);
      }
    }
    setScrollPosition(position);
    const perPage = pokePerPage;
    setPokePerPage(perPage + 10);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("touchmove", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />

      {isLoader ? (
        <Loader />
      ) : (
        <Container>
          {pokes.map((pok, index) => (
            <CardInicialUnico
              poke={pok}
              key={index}
              isAlola={!!pok.name.match(/alola/g)}
              isGalarian={!!pok.name.match(/galar/g)}
              isGmax={!!pok.name.match(/gmax/g)}
              isAlternativeForm={!!pok.name.match(/-/gim)}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default Home;
