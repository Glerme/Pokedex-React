import { NextPage } from "next";
import Link from "next/link";

import { PokemonSpeciesProps } from "../../types/PokemonTypes";
import { useLoader } from "../../hooks/loader";

import Loader from "../Loader";

import * as Styled from "../../styles/CardInicialUnico";

interface Card {
  poke: PokemonSpeciesProps;
}

const CardInicialUnico: NextPage<Card> = ({ poke }) => {
  const { addLoader, removeLoader, isLoader } = useLoader();

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
              <img src={poke.imageURL} alt={poke.name} srcSet={poke.imageURL} />
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
