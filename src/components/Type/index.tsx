import { NextPage } from "next";

import * as Styled from "../../styles/Type";
import { getImageType } from "../../utils/getPokemonImages";

interface ImagePokemonProps {
  type1: string;
  type2: string;
}

const Type: NextPage<ImagePokemonProps> = ({ type1, type2 }) => {
  return (
    <Styled.ContainerTypes>
      <div>
        <img src={getImageType(type1)} alt="" style={{ color: "red" }} />
        <Styled.TypeOne tipo1={type1}>{type1}</Styled.TypeOne>
      </div>

      <>{type2 ? <Styled.TypeTwo tipo2={type2}>{type2}</Styled.TypeTwo> : ""}</>
    </Styled.ContainerTypes>
  );
};

export default Type;
