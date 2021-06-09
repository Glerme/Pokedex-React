import { NextPage } from "next";

import CardMegaEvolucao from "../CardMegaEvolucao";

import { EvolutionProps } from "../../types/PokemonEvolution";

import * as Styled from "../../styles/MegaEvolution";

const MegaEvolucaoContainer: NextPage<EvolutionProps> = ({
  id,
  name,
  isMega,
}) => {
  return (
    <Styled.MegaEvolutionContainer>
      <CardMegaEvolucao id={id} name={name} isMega={isMega} />
    </Styled.MegaEvolutionContainer>
  );
};

export default MegaEvolucaoContainer;
