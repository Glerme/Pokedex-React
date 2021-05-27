import { api } from "../services/api";
import { PokemonSpeciesProps } from "../types/PokemonTypes";
import { getPokemonSpecies } from "./chainEvo";

export const fetchPokemons = async (offset: number) => {
  const { data: pokemons } = await api.get(
    `/pokemon?offset=${offset}&limit=25`
  );

  const dados = await Promise.all<PokemonSpeciesProps>(
    pokemons.results.map((res) => getPokemonSpecies(res.name, res.url))
  );

  return dados;
};
