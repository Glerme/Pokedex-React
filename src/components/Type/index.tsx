import { NextPage } from "next";

import * as Styled from "../../styles/Type";

interface ImagePokemonProps {
  type1: string;
  type2: string;
}

const Type: NextPage<ImagePokemonProps> = ({ type1, type2 }) => {
  return (
    <Styled.ContainerTypes>
      <Styled.TypeOne tipo1={type1}>{type1}</Styled.TypeOne>
      {type2 ? <Styled.TypeTwo tipo2={type2}>{type2}</Styled.TypeTwo> : ""}
    </Styled.ContainerTypes>
  );
};

export default Type;
