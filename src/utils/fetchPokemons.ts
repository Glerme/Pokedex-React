import { useCallback } from "react";
import { api } from "../services/api";
import { getPokemonTypesAll } from "./AllPokemonsTypes";
import { getPokemonSpecies } from "./chainEvo";

export const fetchPokemons = async (offset: number) => {
  const { data: pokemons } = await api.get(
    `/pokemon?offset=${offset}&limit=30`
  );

  const parsed = pokemons.results.map((res) => {
    return getPokemonSpecies(res.name, res.url);
  });

  const types = await Promise.all(
    parsed.map((item) => getPokemonTypesAll(item.id))
  );

  return parsed.map((parse, index) => {
    return {
      ...parse,
      types: types[index],
    };
  });
};

export const fetchMorePokemons = async (pokes) => {
  const newPokemons = await fetchPokemons(pokes.length);

  return await [...pokes, ...newPokemons];
};
