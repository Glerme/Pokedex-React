import { NextPage } from "next";
import { PokemonSpeciesProps } from "../../types/PokemonTypes";

import * as Styled from "../../styles/CardEvolution";
export interface CardEvolutions {
  nameImgPokemon: PokemonSpeciesProps[];
}

const CardEvolutions: NextPage<CardEvolutions> = ({ nameImgPokemon }) => {
  return (
    <>
      <Styled.ContainerCardEvolution>
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
      </Styled.ContainerCardEvolution>
    </>
  );
};

export default CardEvolutions;
