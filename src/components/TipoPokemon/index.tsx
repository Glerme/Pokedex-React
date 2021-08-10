import { NextPage } from "next";

import { ContainerTypes, TypeOne, TypeTwo } from "./styles";
interface ImagePokemonProps {
  type1: string;
  type2: string;
}

const TipoPokemon: NextPage<ImagePokemonProps> = ({ type1, type2 }) => {
  return (
    <ContainerTypes>
      <div>
        <TypeOne tipo1={type1}>
          <img alt={type1} src={`/pokemonTypes/${type1}.svg`} />

          {type1}
        </TypeOne>
      </div>

      {type2 ? (
        <div>
          <TypeTwo tipo2={type2}>
            <img alt={type2} src={`/pokemonTypes/${type2}.svg`} />

            {type2}
          </TypeTwo>
        </div>
      ) : (
        <></>
      )}
    </ContainerTypes>
  );
};

export default TipoPokemon;
