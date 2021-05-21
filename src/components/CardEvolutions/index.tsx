import { NextPage } from "next";

import * as Styled from "../../styles/CardEvolution";
import { nameImgPokemon } from "../Evolutions";

export interface CardEvolutions {
  nameImgPokemon: nameImgPokemon[];
}

const CardEvolutions: NextPage<CardEvolutions> = ({ nameImgPokemon }) => {
  return (
    <Styled.ContainerCardEvolution>
      {nameImgPokemon.map((pokemon, index) => (
        <div key={index}>
          <header>
            <img src={pokemon.url} alt={pokemon.name} />
          </header>

          <footer key={pokemon.id}>
            <p>{pokemon.name}</p>
            <span>#{pokemon.id}</span>
          </footer>
        </div>
      ))}
    </Styled.ContainerCardEvolution>
  );
};

export default CardEvolutions;
