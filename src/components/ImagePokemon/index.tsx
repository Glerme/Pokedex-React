import { NextPage } from "next";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import * as Styled from "../../styles/ImagePokemon";

interface ImagePokemonProps {
  idPokemonSprite: string;
  colorPkm: string;
  name: string;
}

const ImagePokemon: NextPage<ImagePokemonProps> = ({
  idPokemonSprite,
  colorPkm,
  name,
  ...rest
}) => {
  return (
    <Styled.ContainerImage bgColor={colorPkm} {...rest}>
      <div>
        <div></div>

        <img src={idPokemonSprite} alt={name} srcSet={idPokemonSprite} />
      </div>
    </Styled.ContainerImage>
  );
};

export default ImagePokemon;
