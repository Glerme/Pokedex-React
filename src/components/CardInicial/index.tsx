import { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";

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

  const infinite = useRef();

  const getPokemon = useCallback(async () => {
    const pokemons = await fetchPokemons(0);

    setPokes(pokemons);
  }, []);

  const fetchMorePokemons = useCallback(async () => {
    const newPokemons = await fetchPokemons(pokes.length);

    setPokes([...pokes, ...newPokemons]);
  }, [pokes]);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Styled.Container>
        {pokes.map((pok, index) => (
          <CardInicialUnico pokes={pok} key={index} />
        ))}

        <div ref={infinite} onClick={() => fetchMorePokemons()} />
      </Styled.Container>
    </>
  );
};

export default CardInicial;
