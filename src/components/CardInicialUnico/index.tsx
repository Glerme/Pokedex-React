import { NextPage } from "next";
import Link from "next/link";

import { PokemonSpeciesProps } from "../../types/PokemonTypes";
import { useLoader } from "../../hooks/loader";

import Loader from "../Loader";

import * as Styled from "../../styles/CardInicialUnico";
import { useCallback, useEffect, useState } from "react";
import { makeURL } from "../../utils/getPokemonImages";

interface Card {
  poke: PokemonSpeciesProps;
  isAlola: boolean;
  isGmax: boolean;
  isGalarian: boolean;
}

const CardInicialUnico: NextPage<Card> = ({
  poke,
  isAlola,
  isGalarian,
  isGmax,
}) => {
  const { addLoader, removeLoader, isLoader } = useLoader();

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
    } else {
      setPokemonImg(makeURL(poke.id.padStart(3, "0")));
    }
  }, [poke]);

  useEffect(() => {
    getImg();
  }, []);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <Link href={`/pokemon/${poke.id}`}>
          <Styled.ContainerCard
            tipo1={poke.types && poke.types[0]}
            tipo2={poke.types && poke.types[1]}
          >
            <header>
              <h3>{poke?.name}</h3>
              <p>#{poke?.id?.toString().padStart(3, "0")}</p>
            </header>
            <main>
              <img src={pokemonImg} alt={poke.name} srcSet={pokemonImg} />
            </main>
            <footer>
              {poke.types &&
                poke.types.map((type, index) => (
                  <Styled.Tipos key={index} tipo1={type}>
                    <img src={`/pokemonTypes/${type}.svg`} alt={type} />
                  </Styled.Tipos>
                ))}
            </footer>
          </Styled.ContainerCard>
        </Link>
      )}
    </>
  );
};

export default CardInicialUnico;
