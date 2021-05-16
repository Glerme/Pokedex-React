import { Evolucao } from "../types/PokemonTypes";
import { getPokemonImage } from "./getPokemonImages";

const getPokemonSpecies = (name: string, url: string) => {
  const id = Number(url.replace(/^.*\/(\d+)\/?$/g, "$1"));

  const imageURL = getPokemonImage(id);

  return {
    id,
    name: name,
    url: imageURL,
  };
};

export const chainEvo = ({ chain }: Evolucao) => {
  const pokeAtual = getPokemonSpecies(chain.species.name, chain.species.url);

  const especie1 = chain.evolves_to
    ? chain.evolves_to.map((evolucoes) => {
        return getPokemonSpecies(evolucoes.species.name, evolucoes.species.url);
      })
    : [];

  const especie2 = chain.evolves_to[0]?.evolves_to
    ? chain.evolves_to[0].evolves_to.map((evolucoes) => {
        return getPokemonSpecies(evolucoes.species.name, evolucoes.species.url);
      })
    : [];

  const parsedData = [pokeAtual, ...especie1, ...especie2];

  return parsedData;
};
