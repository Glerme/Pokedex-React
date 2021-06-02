import { NextPage } from "next";

import * as Styled from "../../styles/ImagePokemon";
import { makeURLAlola } from "../../utils/getPokemonImages";

interface ImagePokemonProps {
  idPokemonSprite: string;
  colorPkm: string;
  name: string;
  alolan: boolean;
}

const ImagePokemon: NextPage<ImagePokemonProps> = ({
  idPokemonSprite,
  colorPkm,
  name,
  alolan,
  ...rest
}) => {
  return (
    <Styled.ContainerImage bgColor={colorPkm} {...rest}>
      <div>
        {!alolan ? (
          <img src={idPokemonSprite} alt={name} srcSet={idPokemonSprite} />
        ) : (
          <img src={makeURLAlola(name)} alt={name} />
        )}
        <div></div>
      </div>
    </Styled.ContainerImage>
  );
};

export default ImagePokemon;
