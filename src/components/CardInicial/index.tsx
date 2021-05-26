import { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";

import CardInicialUnico from "../CardInicialUnico";

import { fetchPokemons } from "../../utils/fetchPokemons";

import { useLoader } from "../../hooks/loader";
import Loader from "../Loader";

import * as Styled from "../../styles/CardInicial";
interface PokemonTypes {
  type: {
    name: string;
    url: string;
  };
}

export interface CardInicialData {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
}

const CardInicial: NextPage = () => {
  const [pokes, setPokes] = useState<CardInicialData[]>([]);
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

    console.log("position Atual", position);
    console.log("Posiçao em relacao ao topo (MAXTOP)", maxTop);
    console.log("valorNovo", valorNovo);

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
            <CardInicialUnico pokes={pok} key={index} />
          ))}
        </Styled.Container>
      )}
    </>
  );
};

export default CardInicial;
