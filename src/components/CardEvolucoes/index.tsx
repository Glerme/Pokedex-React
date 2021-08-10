import { NextPage } from "next";
import { PokemonSpeciesProps } from "../../types/PokemonTypes";

import { ContainerCardEvolution } from "./styles";
export interface CardEvolutions {
  nameImgPokemon: PokemonSpeciesProps[];
}

const CardEvolucoes: NextPage<CardEvolutions> = ({ nameImgPokemon }) => {
  return (
    <>
      <ContainerCardEvolution>
        {nameImgPokemon.map((pokemon, index) => (
          <div key={index}>
            <header>
              <img src={pokemon.imageURL} alt={pokemon.name} />
            </header>

            <footer key={pokemon.id}>
              <p>{pokemon.name}</p>
              <span>#{pokemon.id}</span>
            </footer>
          </div>
        ))}
      </ContainerCardEvolution>
    </>
  );
};

export default CardEvolucoes;
