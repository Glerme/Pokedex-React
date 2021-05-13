import { NextPage } from "next";

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
        <img src={idPokemonSprite} alt={name} />
      </div>
    </Styled.ContainerImage>
  );
};

export default ImagePokemon;
