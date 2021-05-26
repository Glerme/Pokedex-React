import { NextPage } from "next";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { nameImgPokemon } from "../Evolutions";

import * as Styled from "../../styles/CardEvolution";
import "react-lazy-load-image-component/src/effects/blur.css";
export interface CardEvolutions {
  nameImgPokemon: nameImgPokemon[];
}

const CardEvolutions: NextPage<CardEvolutions> = ({ nameImgPokemon }) => {
  return (
    <Styled.ContainerCardEvolution>
      {nameImgPokemon.map((pokemon, index) => (
        <div key={index}>
          <header>
            <img src={pokemon.url} alt={pokemon.name} srcSet={pokemon.url} />
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
