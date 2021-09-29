import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";

import { PokemonSpeciesProps } from "../../types/PokemonTypes";

import { ContainerCard, Tipos } from "./styles";

interface Card {
  poke: PokemonSpeciesProps;
}

export const HomeCards: NextPage<Card> = ({ poke }) => {
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
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${poke.id.padStart(
              3,
              "0"
            )}.png`}
            alt={poke.name}
            width={300}
            height={300}
            placeholder="blur"
            className="img"
          />
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
