import Image from "next/image";
import { NextPage } from "next";

import { useCallback, useEffect, useState } from "react";

import { api } from "../../services/api";

import {
  Evolucao,
  PokemonData,
  PokemonSpecies,
  PokemonSpeciesProps,
} from "../../types/PokemonTypes";

import { chainEvo } from "../../utils/chainEvo";

import { ContainerCardEvolution, EvolutionContainer } from "./styles";

interface EvolutionsData {
  pokemonData: PokemonData;
}

export const EvolutionsTab: NextPage<EvolutionsData> = ({ pokemonData }) => {
  const [nameImgPokemon, setNameImgPokemon] = useState<PokemonSpeciesProps[]>(
    []
  );

  const buscar = useCallback(async () => {
    try {
      const { data: species } = await api.get<PokemonSpecies>(
        pokemonData.species.url
      );

      const { data: chain } = await api.get<Evolucao>(
        species.evolution_chain.url
      );

      const evolucoes = await chainEvo(chain);

      setNameImgPokemon(evolucoes);
    } catch (error) {
      console.error(error);
    }
  }, [nameImgPokemon]);

  useEffect(() => {
    buscar();
  }, []);

  return (
    <EvolutionContainer>
      <ContainerCardEvolution>
        {nameImgPokemon.map((pokemon, index) => (
          <div key={index}>
            <header>
              <Image
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.padStart(
                  3,
                  "0"
                )}.png`}
                width={300}
                height={300}
                alt={pokemon.name}
              />
            </header>

            <footer key={pokemon.id}>
              <p>{pokemon.name}</p>
              <span>#{pokemon.id}</span>
            </footer>
          </div>
        ))}
      </ContainerCardEvolution>
    </EvolutionContainer>
  );
};
