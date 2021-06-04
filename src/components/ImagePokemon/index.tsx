import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import * as Styled from "../../styles/ImagePokemon";
import { makeURL, makeURLAlola } from "../../utils/getPokemonImages";

interface ImagePokemonProps {
  idPokemonSprite: string;
  colorPkm: string;
  name: string;
  alolan: boolean;
  isGmax: boolean;
}

const ImagePokemon: NextPage<ImagePokemonProps> = ({
  idPokemonSprite,
  colorPkm,
  name,
  alolan,
  isGmax,
  ...rest
}) => {
  const [pokemonImg, setPokemonImg] = useState<string>("");

  const getImg = useCallback(async () => {
    if (alolan) {
      const imagesURLs = makeURL(name);
      setPokemonImg(imagesURLs);

      console.log("primeiro");

      return;
    } else if (isGmax) {
      const imagesURLs = makeURL(name);
      setPokemonImg(imagesURLs);
      return;
    } else {
      setPokemonImg(idPokemonSprite);
    }
  }, [pokemonImg]);

  useEffect(() => {
    getImg();
  }, [pokemonImg]);

  return (
    <Styled.ContainerImage bgColor={colorPkm} {...rest}>
      <div>
        <img src={pokemonImg} alt={name} />
        <div></div>
      </div>
    </Styled.ContainerImage>
  );
};

export default ImagePokemon;
