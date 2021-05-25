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
          <LazyLoadImage
            alt={pokes.name}
            src={pokes.url}
            key={pokes.id}
            placeholderSrc={pokes.name}
            effect="blur"
          />
        </main>
        <footer>
          {pokes.types &&
            pokes.types.map(({ type }, index) => (
              <Styled.Tipos key={index} tipo1={type.name}>
                <LazyLoadImage
                  alt={type.name}
                  src={getImageType(type.name)}
                  key={type.name}
                  placeholderSrc={type.name}
                  effect="blur"
                />
              </Styled.Tipos>
            ))}
        </footer>
      </Styled.ContainerCard>
    </Link>
  );
};

export default CardInicialUnico;
