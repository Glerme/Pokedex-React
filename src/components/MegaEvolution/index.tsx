import { NextPage } from "next";

import MegaEvolutionCard from "../MegaEvolutionCard";

import { EvolutionProps } from "../../types/PokemonEvolution";

import * as Styled from "../../styles/MegaEvolution";

const MegaEvolution: NextPage<EvolutionProps> = ({ id, name }) => {
  return (
    <Styled.MegaEvolutionContainer>
      <MegaEvolutionCard id={id} name={name} />
    </Styled.MegaEvolutionContainer>
  );
};

export default MegaEvolution;
