import { NextPage } from "next";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import CardInicialUnico from "../CardInicialUnico";

import * as Styled from "../../styles/CardInicial";
import { fetchPokemons } from "../../utils/fetchPokemons";

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

  const getPokemon = useCallback(async () => {
    const pokemons = await fetchPokemons(0);

    setPokes(pokemons);
  }, []);

  useEffect(() => {
    getPokemon();
  }, []);

  const handleScroll = async () => {
    const position = window.pageYOffset;
    var maxTop = document.body.scrollHeight - position;

    console.log("position", position);
    console.log("maxTop", maxTop);

    if (position > maxTop) {
      const newPokemons = await fetchPokemons(pokes.length);

      setPokes([...pokes, ...newPokemons]);
    }
    setScrollPosition(position);
    const perPage = pokePerPage;
    setPokePerPage(perPage + 10);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <Styled.Container>
        {pokes.map((pok, index) => (
          <CardInicialUnico pokes={pok} key={index} />
        ))}
      </Styled.Container>
    </>
  );
};

export default CardInicial;
