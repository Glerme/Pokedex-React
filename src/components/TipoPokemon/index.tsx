import { NextPage } from "next";

import * as Styled from "../../styles/Type";
interface ImagePokemonProps {
  type1: string;
  type2: string;
}

const TipoPokemon: NextPage<ImagePokemonProps> = ({ type1, type2 }) => {
  return (
    <Styled.ContainerTypes>
      <div>
        <Styled.TypeOne tipo1={type1}>
          <img alt={type1} src={`/pokemonTypes/${type1}.svg`} />

          {type1}
        </Styled.TypeOne>
      </div>

      {type2 ? (
        <div>
          <Styled.TypeTwo tipo2={type2}>
            <img alt={type2} src={`/pokemonTypes/${type2}.svg`} />

            {type2}
          </Styled.TypeTwo>
        </div>
      ) : (
        <></>
      )}
    </Styled.ContainerTypes>
  );
};

export default TipoPokemon;
