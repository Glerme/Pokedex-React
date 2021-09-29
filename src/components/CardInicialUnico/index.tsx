import Link from "next/link";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import { PokemonSpeciesProps } from "../../types/PokemonTypes";

import { getPokemonImage, makeURL } from "../../utils/getPokemonImages";

import { ContainerCard, Tipos } from "./styles";

interface Card {
  poke: PokemonSpeciesProps;
  isAlola: boolean;
  isGmax: boolean;
  isGalarian: boolean;
  isAlternativeForm: boolean;
}

export const CardInicialUnico: NextPage<Card> = ({
  poke,
  isAlola,
  isGalarian,
  isGmax,
  isAlternativeForm,
}) => {
  const [pokemonImg, setPokemonImg] = useState<string>("");

  const getImg = useCallback(async () => {
    if (isAlola) {
      const imagesURLs = makeURL(poke.name);
      setPokemonImg(imagesURLs);

      return;
    } else if (isGalarian) {
      const imagesURLs = makeURL(poke.name);
      setPokemonImg(imagesURLs);

      return;
    } else if (isGmax) {
      const imagesURLs = makeURL(poke.name);
      setPokemonImg(imagesURLs);

      return;
    } else if (isAlternativeForm) {
      const imagesURLs = makeURL(poke.name);
      setPokemonImg(imagesURLs);
    } else {
      const imagesURLs = getPokemonImage(Number(poke.id));

      setPokemonImg(imagesURLs);
    }
  }, [poke]);

  useEffect(() => {
    getImg();
  }, []);

  return (
    <Link href={`/pokemon/${poke.id}`}>
      <ContainerCard
        tipo1={poke.types && poke.types[0]}
        tipo2={poke.types && poke.types[1]}
      >
        <header>
          <h3>{poke.name}</h3>
          <p>#{poke.id.toString().padStart(3, "0")}</p>
        </header>
        <main>
          <img src={pokemonImg} alt={poke.name} />
        </main>
        <footer>
          {poke.types &&
            poke.types.map((type, index) => (
              <Tipos key={index} tipo1={type}>
                <img src={`/pokemonTypes/${type}.svg`} alt={type} />
              </Tipos>
            ))}
        </footer>
      </ContainerCard>
    </Link>
  );
};
