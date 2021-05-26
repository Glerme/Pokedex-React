import { NextPage } from "next";
import Link from "next/link";

import * as Styled from "../../styles/CardInicialUnico";
import { getImageType } from "../../utils/getPokemonImages";
import { CardInicialData } from "../CardInicial";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Card {
  pokes: CardInicialData;
}

const CardInicialUnico: NextPage<Card> = ({ pokes }) => {
  return (
    <Link href={`/pokemon/${pokes.id}`}>
      <Styled.ContainerCard
        tipo1={pokes.types && pokes.types[0]?.type.name}
        tipo2={pokes.types && pokes.types[1]?.type.name}
      >
        <header>
          <h3>{pokes?.name}</h3>
          <p>#{pokes?.id?.toString().padStart(3, "0")}</p>
        </header>
        <main>
          <img src={pokes.url} alt={pokes.name} srcSet={pokes.url} />
        </main>
        <footer>
          {pokes.types &&
            pokes.types.map(({ type }, index) => (
              <Styled.Tipos key={index} tipo1={type.name}>
                <img
                  src={getImageType(type.name)}
                  alt={type.name}
                  srcSet={getImageType(type.name)}
                />
              </Styled.Tipos>
            ))}
        </footer>
      </Styled.ContainerCard>
    </Link>
  );
};

export default CardInicialUnico;
