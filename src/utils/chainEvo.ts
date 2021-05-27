import { api } from "../services/api";
import { Evolucao } from "../types/PokemonTypes";
import { getPokemonImage } from "./getPokemonImages";
import { PokemonSpeciesProps } from "../types/PokemonTypes";

const getPokemonTypesAll = async (id: string) => {
  const { data } = await api.get(`/pokemon/${id}`);

  return data.types.map((type) => type.type.name);
};

export const getPokemonSpecies = async (
  name: string,
  url: string
): Promise<PokemonSpeciesProps> => {
  const id = Number(url.replace(/^.*\/(\d+)\/?$/g, "$1"));

  const types = await getPokemonTypesAll(String(id));

  const imageURL = getPokemonImage(id);

  return {
    id: String(id),
    name: name,
    imageURL,
    types,
  };
};

export const chainEvo = async ({ chain }: Evolucao) => {
  const pokeAtual = await getPokemonSpecies(
    chain.species.name,
    chain.species.url
  );

  const especie1 = await Promise.all(
    chain.evolves_to.map((evolucoes) =>
      getPokemonSpecies(evolucoes.species.name, evolucoes.species.url)
    )
  );

  const especie2 =
    chain.evolves_to[0]?.evolves_to &&
    (await Promise.all(
      chain.evolves_to[0].evolves_to.map((evolucoes) =>
        getPokemonSpecies(evolucoes.species.name, evolucoes.species.url)
      )
    ));

  const parsedData = [pokeAtual, ...especie1, ...especie2];

  return parsedData;
};
