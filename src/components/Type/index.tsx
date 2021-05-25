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
          <LazyLoadImage
            alt={type1}
            src={type1}
            key={type1}
            placeholderSrc={type1}
            effect="blur"
          />
          {type1}
        </Styled.TypeOne>
      </div>

      {type2 ? (
        <div>
          <Styled.TypeTwo tipo2={type2}>
            <LazyLoadImage
              alt={type2}
              src={type2}
              key={type2}
              placeholderSrc={type2}
              effect="blur"
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
