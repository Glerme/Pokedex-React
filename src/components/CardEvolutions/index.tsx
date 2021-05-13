import { NextPage } from "next";

import * as Styled from "../../styles/CardEvolution";

interface CardEvolutionsData {
  nameImgPokemon: any[];
}

const CardEvolutions: NextPage<CardEvolutionsData> = ({ nameImgPokemon }) => {
  return (
    <Styled.ContainerCardEvolution>
      {nameImgPokemon.map((pokemon) => (
        <div>
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
