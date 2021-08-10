import { NextPage } from "next";

import CardMegaEvolucao from "../CardMegaEvolucao";

import { EvolutionProps } from "../../types/PokemonEvolution";

import { MegaEvolutionContainer } from "./styles";

const MegaEvolucaoContainer: NextPage<EvolutionProps> = ({
  id,
  name,
  isMega,
}) => {
  return (
    <MegaEvolutionContainer>
      <CardMegaEvolucao id={id} name={name} isMega={isMega} />
    </MegaEvolutionContainer>
  );
};

export default MegaEvolucaoContainer;
