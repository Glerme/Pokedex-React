import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import { api } from "../../services/api";

import { EvolutionsData } from "../../types/PokemonEvolution";
import {
  Evolucao,
  PokemonSpecies,
  PokemonSpeciesProps,
} from "../../types/PokemonTypes";

import { chainEvo } from "../../utils/chainEvo";

import CardEvolutions from "../CardEvolutions";

import * as Styled from "../../styles/Evolution";

const Evolutions: NextPage<EvolutionsData> = ({ pokemonData }) => {
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
    } catch (erro) {
      console.error(erro);
    }
  }, [nameImgPokemon]);

  useEffect(() => {
    buscar();
  }, []);

  return (
    <Styled.EvolutionContainer>
      <CardEvolutions nameImgPokemon={nameImgPokemon} />
    </Styled.EvolutionContainer>
  );
};

export default Evolutions;
