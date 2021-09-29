import { NextPage } from "next";

import { ContainerImage } from "./styles";

interface ImagePokemonProps {
  idPokemonSprite: number;
  colorPkm: string;
  name: string;
}

export const ImagePokemon: NextPage<ImagePokemonProps> = ({
  idPokemonSprite,
  colorPkm,
  name,

  ...rest
}) => {
  return (
    <ContainerImage bgColor={colorPkm} {...rest}>
      <div>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
            idPokemonSprite
          ).padStart(3, "0")}.png`}
          alt={name}
          width={400}
          height={400}
        />
        <div />
      </div>
    </ContainerImage>
  );
};
