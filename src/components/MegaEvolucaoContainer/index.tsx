import { NextPage } from "next";

import CardMegaEvolucao from "../CardMegaEvolucao";

import { EvolutionProps } from "../../types/PokemonEvolution";

import * as Styled from "../../styles/MegaEvolution";

const MegaEvolucaoContainer: NextPage<EvolutionProps> = ({ id, name }) => {
  return (
    <Styled.MegaEvolutionContainer>
      <CardMegaEvolucao id={id} name={name} />
    </Styled.MegaEvolutionContainer>
  );
};

export default MegaEvolucaoContainer;
