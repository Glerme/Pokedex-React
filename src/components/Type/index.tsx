import { NextPage } from "next";

import { getImageType } from "../../utils/getPokemonImages";

import "react-lazy-load-image-component/src/effects/blur.css";

import * as Styled from "../../styles/Type";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface ImagePokemonProps {
  type1: string;
  type2: string;
}

const Type: NextPage<ImagePokemonProps> = ({ type1, type2 }) => {
  return (
    <Styled.ContainerTypes>
      <div>
        <Styled.TypeOne tipo1={type1}>
          <img
            alt={type1}
            src={getImageType(type1)}
            srcSet={getImageType(type1)}
          />

          {type1}
        </Styled.TypeOne>
      </div>

      {type2 ? (
        <div>
          <Styled.TypeTwo tipo2={type2}>
            <img
              alt={type2}
              src={getImageType(type2)}
              srcSet={getImageType(type2)}
            />

            {type2}
          </Styled.TypeTwo>
        </div>
      ) : (
        <></>
      )}
    </Styled.ContainerTypes>
  );
};

export default Type;
