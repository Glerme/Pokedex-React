import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import { fetchPokemons } from "../../utils/fetchPokemons";
import { PokemonSpeciesProps } from "../../types/PokemonTypes";
import { useLoader } from "../../hooks/loader";

import CardInicialUnico from "../CardInicialUnico";
import Loader from "../Loader";

import * as Styled from "../../styles/CardInicial";

const CardInicialContainer: NextPage = () => {
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
      {isLoader ? (
        <Loader />
      ) : (
        <Styled.Container>
          {pokes.map((pok, index) => (
            <CardInicialUnico poke={pok} key={index} />
          ))}
        </Styled.Container>
      )}
    </>
  );
};

export default CardInicialContainer;
