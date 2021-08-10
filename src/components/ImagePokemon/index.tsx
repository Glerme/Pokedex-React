import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import { ContainerImage } from "./styles";
import { makeURL } from "../../utils/getPokemonImages";

interface ImagePokemonProps {
  idPokemonSprite: string;
  colorPkm: string;
  name: string;
  alolan: boolean;
  isGmax: boolean;
  isGalarian: boolean;
}

const ImagePokemon: NextPage<ImagePokemonProps> = ({
  idPokemonSprite,
  colorPkm,
  name,
  alolan,
  isGmax,
  isGalarian,
  ...rest
}) => {
  const [pokemonImg, setPokemonImg] = useState<string>("");

  const getImg = useCallback(async () => {
    if (alolan) {
      const imagesURLs = makeURL(name);
      setPokemonImg(imagesURLs);

      return;
    } else if (isGalarian) {
      const imagesURLs = makeURL(name);
      setPokemonImg(imagesURLs);

      return;
    } else if (isGmax) {
      const imagesURLs = makeURL(name);
      setPokemonImg(imagesURLs);

      return;
    } else if (!!name.match("-")) {
      const imagesURLs = makeURL(name);
      setPokemonImg(imagesURLs);
    } else {
      setPokemonImg(idPokemonSprite);
    }
  }, [idPokemonSprite]);

  useEffect(() => {
    getImg();
  }, [idPokemonSprite]);

  return (
    <ContainerImage bgColor={colorPkm} {...rest}>
      <div>
        <img src={pokemonImg} alt={name} />
        <div></div>
      </div>
    </ContainerImage>
  );
};

export default ImagePokemon;
